import type { VercelRequest, VercelResponse } from '@vercel/node';

const COURSE_AMOUNT = parseInt(process.env.COURSE_AMOUNT || "599000", 10);
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz3s4V-cItvUcM3g-oZy0mAWsxGXr9UhLhz_qPgXWZgFNTT9KgKZxu391m-aRv8rz8U/exec";
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

async function sendTelegramNotification(message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return;
  
  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });
  } catch (e) {
    console.error("Telegram notification failed:", e);
  }
}

async function sendResendEmail(to: string, name: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !to) return;
  
  const amount = process.env.COURSE_AMOUNT || "599000";
  const formattedAmount = new Intl.NumberFormat("vi-VN").format(parseInt(amount, 10));
  
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Đơn hàng <onboarding@resend.dev>",
        to: [to],
        subject: "🎉 Thanh toán thành công!",
        html: `<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #10b981; font-size: 24px;">✅ Thanh toán thành công!</h1>
          <p style="font-size: 16px; color: #333;">Xin chào <strong>${name}</strong>,</p>
          <p style="font-size: 16px; color: #333;">Chúng tôi đã nhận được thanh toán <strong>${formattedAmount} VNĐ</strong> của bạn.</p>
          <p style="font-size: 16px; color: #333;">Cảm ơn bạn đã tin tưởng! Chúng tôi sẽ liên hệ sớm nhất.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 13px; color: #999;">Email này được gửi tự động.</p>
        </div>`,
      }),
    });
  } catch (e) {
    console.error("Resend email failed:", e);
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Support GET for health check / SePay test
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'active', message: 'SePay webhook endpoint ready' });
  }

  if (req.method !== 'POST') {
    return res.status(455).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    console.log('[SePay Webhook Received]:', JSON.stringify(body));

    // Support both SePay webhook payload formats (camelCase & snake_case)
    const transferType = (body.transferType || body.transfer_type || 'in').toLowerCase();
    const amount = parseFloat(body.transferAmount || body.amount_in || body.amountIn || '0');
    const content = (body.content || body.transaction_content || body.description || '').toString();
    const transactionId = (body.id || body.referenceCode || body.reference_number || '').toString();

    // Ignore money out transactions
    if (transferType === 'out') {
      console.log('[SePay Webhook] Ignored money-out transaction');
      return res.status(200).json({ success: true, message: 'Ignored money-out' });
    }

    // Verify course amount
    if (amount !== COURSE_AMOUNT) {
      console.log(`[SePay Webhook] Amount mismatch: received ${amount}, expected ${COURSE_AMOUNT}`);
      return res.status(200).json({ success: true, message: 'Amount mismatch ignored' });
    }

    // Extract 10-digit phone number from transfer content (starts with 03, 05, 07, 08, 09)
    const phoneMatch = content.match(/(0[35789]\d{8})/);
    if (!phoneMatch) {
      console.log(`[SePay Webhook] No valid Vietnamese phone number found in content: "${content}"`);
      return res.status(200).json({ success: true, message: 'No phone number match' });
    }

    const phone = phoneMatch[1];
    console.log(`[SePay Webhook] Extracted phone: ${phone} for transaction: ${transactionId}`);

    // Update Google Sheet status & retrieve registered customer info
    let updateData: any = {};
    if (GOOGLE_SCRIPT_URL) {
      try {
        const payload = {
          action: "update_status",
          phone: phone,
          status: "Đã thanh toán"
        };

        const updateRes = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const contentType = updateRes.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          updateData = await updateRes.json();
          console.log(`[SePay Webhook] Sheet update response:`, updateData);
        } else {
          const text = await updateRes.text();
          console.warn(`[SePay Webhook] Sheet update returned text: ${text.substring(0, 100)}`);
        }
      } catch (scriptErr) {
        console.error("[SePay Webhook] Failed to update Google Sheet:", scriptErr);
      }
    }

    const customerEmail = updateData.email || "";
    const customerName = updateData.name || "Học viên";

    // Telegram notification to seller
    const formattedAmt = new Intl.NumberFormat("vi-VN").format(COURSE_AMOUNT);
    await sendTelegramNotification(
      `🎉 <b>ĐƠN HÀNG MỚI!</b>\n\n` +
      `👤 <b>${customerName || "N/A"}</b>\n` +
      `📱 ${phone}\n` +
      `📧 ${customerEmail || "N/A"}\n` +
      `💰 ${formattedAmt} VNĐ\n` +
      `🕐 ${new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}\n\n` +
      `✅ Đã cập nhật Google Sheet`
    );

    // Email confirmation to buyer
    if (customerEmail) {
      await sendResendEmail(customerEmail, customerName);
    }

    // Trigger Make.com webhook if customer email exists
    if (customerEmail && MAKE_WEBHOOK_URL) {
      console.log(`[SePay Webhook] Triggering Make.com automation for email ${customerEmail}...`);
      try {
        const makeRes = await fetch(MAKE_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: customerName,
            email: customerEmail,
            phone: phone,
            course: "Video Masterclass",
            transactionId
          })
        });

        if (!makeRes.ok) {
          console.error(`[SePay Webhook] Make webhook failed with status: ${makeRes.status}`);
        } else {
          console.log(`[SePay Webhook] Make webhook triggered successfully for ${customerEmail}`);
        }
      } catch (makeErr) {
        console.error("[SePay Webhook] Failed to call Make webhook:", makeErr);
      }
    } else {
      console.warn(`[SePay Webhook] Customer email not found for phone ${phone}. Cannot trigger Make.com email.`);
    }

    // ALWAYS return 200 OK so SePay clears the transaction from its retry Queue!
    return res.status(200).json({
      success: true,
      message: "Webhook processed successfully",
      phone,
      email: customerEmail
    });
  } catch (err: any) {
    console.error("[SePay Webhook Error]:", err);
    // Still return 200 to prevent SePay infinite retries on malformed payloads
    return res.status(200).json({ success: false, error: err.message });
  }
}
