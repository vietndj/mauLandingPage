# 🚀 mauLandingPage — Template Landing Page Bán Hàng Tự Động

Template Landing Page bán hàng chuyên nghiệp với tích hợp thanh toán VietQR + SePay. Chỉ cần trả lời vài câu hỏi → AI tự sinh nội dung → deploy → nhận link trang bán hàng.

## ⚡ Bắt đầu trong 3 bước

### Bước 1: Clone repo
```bash
git clone https://github.com/vietndj/mauLandingPage.git
cd mauLandingPage
```

### Bước 2: Mở Google Antigravity
Mở dự án bằng trình soạn thảo có cài Google Antigravity (VSCode, Cursor, v.v.)

### Bước 3: Gõ lệnh
```
Tạo landing page bán hàng
```
AI sẽ tự động:
- 📝 Hỏi bạn vài câu về sản phẩm, giá bán, tài khoản ngân hàng
- 🤖 Sinh toàn bộ nội dung sale page bằng AI
- 🔧 Cấu hình thanh toán tự động
- 🌐 Deploy lên Vercel → trả về link live

## 🏗️ Kiến trúc

```
mauLandingPage/
├── .agents/                    # Antigravity AI skill
│   ├── skills/miss-sale-page/  # Skill tự động tạo landing page
│   └── rules/                  # Context cho AI
├── src/
│   ├── site.config.ts          # ⚙️ Cấu hình thanh toán & thông báo
│   ├── content.ts              # 📝 Nội dung trang (AI tự sinh)
│   ├── App.tsx                 # Landing page chính
│   ├── Checkout.tsx            # Trang thanh toán VietQR
│   └── sections/               # Các section của landing page
├── api/                        # Vercel Serverless Functions
│   ├── lead/register.ts        # API đăng ký lead
│   ├── payment/check.ts        # Polling kiểm tra thanh toán
│   ├── payment/confirm.ts      # Xác nhận thanh toán
│   └── payment/webhook.ts      # SePay webhook tự động
└── .env.example                # Template biến môi trường
```

## 💳 Luồng thanh toán

```
Khách đăng ký → Hiện mã QR VietQR → Khách chuyển khoản
    → SePay phát hiện tiền vào ✅
    → Google Sheet cập nhật "Đã thanh toán" ✅
    → Telegram thông báo cho bạn 📱
    → Email xác nhận cho khách 📧 (tùy chọn)
```

## 🔧 Cấu hình thủ công (nếu không dùng Antigravity)

1. Sửa `src/site.config.ts` — thông tin ngân hàng, thông báo
2. Sửa `src/content.ts` — nội dung sale page
3. Copy `.env.example` → `.env` — điền API keys
4. `npm install && npm run build`
5. `npx vercel --prod`

## 📋 Yêu cầu trước khi bắt đầu

| Dịch vụ | Mục đích | Bắt buộc | Link |
|---------|----------|----------|------|
| **SePay** | Phát hiện thanh toán tự động | ✅ | [my.sepay.vn](https://my.sepay.vn) |
| **Vercel** | Hosting & deploy | ✅ | [vercel.com](https://vercel.com) |
| **Google Sheets + GAS** | Quản lý đơn hàng | Khuyến nghị | Xem `.agents/skills/miss-sale-page/references/gas-template.md` |
| **Telegram Bot** | Thông báo đơn hàng | Tùy chọn | Xem `.agents/skills/miss-sale-page/references/telegram-guide.md` |
| **Resend** | Email xác nhận cho khách | Tùy chọn | [resend.com](https://resend.com) |

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite 7
- **Backend:** Vercel Serverless Functions
- **Thanh toán:** VietQR + SePay API
- **Thông báo:** Telegram Bot + Resend Email
- **CRM:** Google Sheets (via Google Apps Script)

## 📝 License

MIT — Sử dụng tự do cho mục đích thương mại.
