# Project Context — mauLandingPage

- Đây là template Landing Page bán hàng tự động với tích hợp thanh toán VietQR + SePay
- File config chính: `src/site.config.ts` (thanh toán, thông báo)
- File nội dung chính: `src/content.ts` (toàn bộ text/copy của trang)
- API serverless: `api/` (Vercel Functions)
- Deploy target: Vercel
- Khi người dùng muốn sửa nội dung: chỉnh `src/content.ts` → phần `DEFAULT_CONTENT`
- Khi người dùng muốn sửa giao diện: chỉnh CSS trong `src/landing.css`, `src/index.css`
- Khi người dùng muốn sửa thanh toán: chỉnh `src/site.config.ts` → phần `payment`
