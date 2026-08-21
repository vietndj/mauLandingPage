import type { VercelRequest, VercelResponse } from '@vercel/node';

const COURSE_AMOUNT = parseInt(process.env.COURSE_AMOUNT || "0", 10);
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL || "";

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
            course: "AI Creator System",
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

    // Trigger Telegram notification
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8964853536:AAHuRNm_hY-YQtveBD1HlmthN4I5xpVzM8U";
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "2050406425";
    const escHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const tgMessage = `✅ <b>ĐÃ NHẬN TIỀN THÀNH CÔNG (SePay Webhook)</b>\n👤 Tên: ${escHtml(customerName)}\n📞 SĐT: ${escHtml(phone)}\n✉️ Email: ${escHtml(customerEmail || "Chưa lấy được email")}\n🔖 Mã GD: ${escHtml(transactionId)}\n💰 Số tiền: 499.000đ`;
      try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: tgMessage,
            parse_mode: "HTML"
          })
        });
      } catch (tgErr) {
        console.error("[SePay Webhook] Telegram send error:", tgErr);
      }
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
