import type { VercelRequest, VercelResponse } from '@vercel/node';

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
  if (req.method !== 'POST') {
    return res.status(455).json({ error: 'Method not allowed' });
  }

  try {
    const { name = "", phone = "", email = "", url = "", transactionId = "", rowIndex } = req.body || {};
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz3s4V-cItvUcM3g-oZy0mAWsxGXr9UhLhz_qPgXWZgFNTT9KgKZxu391m-aRv8rz8U/exec";
    const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

    let updateData: any = {};
    if (!GOOGLE_SCRIPT_URL) {
      console.warn("GOOGLE_SCRIPT_URL is not set. Skipping sheet status update.");
    } else {
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
        } else {
          const text = await updateRes.text();
          console.warn(`Google Script confirm status returned text: ${text.substring(0, 100)}, status: ${updateRes.status}`);
        }
      } catch (scriptErr) {
        console.error("Failed to update Google Sheet:", scriptErr);
      }
    }

    // Use updated email/name from sheet or frontend fallback
    const customerEmail = updateData.email || email;
    const customerName = updateData.name || name;

    // Telegram notification to seller
    const courseAmount = parseInt(process.env.COURSE_AMOUNT || "599000", 10);
    const formattedAmt = new Intl.NumberFormat("vi-VN").format(courseAmount);
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

    // Trigger Make.com webhook if email exists
    if (customerEmail && MAKE_WEBHOOK_URL) {
      console.log(`Triggering Make.com webhook for Skool automation for ${customerEmail}...`);
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
           console.error(`Make webhook failed with status: ${makeRes.status}`);
        }
      } catch (makeErr) {
         console.error("Failed to call Make webhook:", makeErr);
      }
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Error confirming payment:", err);
    return res.status(500).json({ error: "Failed to confirm payment", details: err.message });
  }
}
