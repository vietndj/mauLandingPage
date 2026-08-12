---
name: miss-sale-page
description: >
  Được kích hoạt khi người dùng muốn tạo một landing page bán hàng hoặc setup trang bán hàng (VD: "Tạo landing page bán hàng", "Setup trang bán hàng"). Hướng dẫn agent qua các bước thu thập thông tin, sinh nội dung, cấu hình, và deploy.
---

# Hướng dẫn chi tiết tạo Landing Page

Bạn là chuyên gia thiết kế và viết nội dung Landing Page. Khi skill này được kích hoạt, hãy thực hiện chính xác các PHASE dưới đây:

## PHASE 1: Thu thập thông tin (Interactive Setup)

Bạn cần sử dụng tool `ask_question` để hỏi người dùng lần lượt TỪNG CÂU HỎI MỘT. 

**Q1: Sản phẩm** (bắt buộc)
"Bạn bán sản phẩm/dịch vụ gì? Mô tả ngắn gọn."

**Q2: Giá bán** (bắt buộc)
"Giá bán ưu đãi và giá gốc (nếu có)?"
Ví dụ: "599k / gốc 3.2 triệu"

**Q3: Khách hàng mục tiêu** (bắt buộc)
"Khách hàng mục tiêu của bạn là ai?"
Ví dụ: "Người làm nội dung, chủ shop online"

**Q4: Thông tin ngân hàng** (bắt buộc)
"Thông tin tài khoản nhận thanh toán:
- Ngân hàng (VD: MB Bank, TPBank, Vietcombank...)
- Số tài khoản
- Tên chủ tài khoản (IN HOA, không dấu)"

**Q5: SePay API Key** (bắt buộc)
"Để tự động phát hiện thanh toán, bạn cần SePay API Key.
Xem hướng dẫn chi tiết tại: references/sepay-guide.md
Nhập SePay API Key của bạn:"

**Q6: Thông báo** (tùy chọn)
"Bạn muốn nhận thông báo qua đâu khi có đơn hàng?"
Các tuỳ chọn:
- Telegram Bot (khuyến nghị)
- Chỉ xem trên Google Sheet
- Cả Telegram + Email cho khách

Nếu người dùng chọn Telegram: Hỏi Bot Token và Chat ID (kèm hướng dẫn tạo bot tại references/telegram-guide.md).
Nếu người dùng chọn Email: Hỏi Resend API Key.

## PHASE 2: Sinh nội dung bằng AI (Content Generation)

Sau khi thu thập xong thông tin, thực hiện:

1. Báo với người dùng: "Đang phân tích sản phẩm và sinh nội dung Landing Page..."
2. Dựa vào thông tin từ Phase 1, bạn HÃY TỰ SINH nội dung cho TOÀN BỘ các phần của landing page. Quá trình suy nghĩ bao gồm:
   - Xác định loại sản phẩm (Vật lý / Dịch vụ / Sản phẩm số)
   - Tạo hero headline, subheadline, CTA text
   - Tạo 3 pain points (nỗi đau) liên quan
   - Tạo cycle of trying (những sai lầm đối thủ hay mắc phải)
   - Tạo discovery story
   - Tạo 4-5 solution benefits (lợi ích)
   - Tạo 4 skill/feature cards
   - Tạo before/after comparison (7 mục cho mỗi bên)
   - Tạo roadmap/modules (lộ trình 4 giai đoạn)
   - Tạo instructor bio (giới thiệu từ thông tin người dùng)
   - Tạo 3-5 bonus items
   - Tạo final CTA
   - Tạo value stack
   - Tạo 5-7 FAQ items
3. Hiển thị tóm tắt nội dung đã sinh cho người dùng và hỏi: "Nội dung đã ổn chưa? Bạn muốn chỉnh sửa phần nào?"
4. Lặp lại việc sửa đổi nếu người dùng yêu cầu, nếu đã chốt thì chuyển sang Phase 3.

## PHASE 3: Ghi config & Populate template

Thực hiện các bước sau (sử dụng file tool để thay đổi code):

1. **Ghi vào `src/site.config.ts`**: Điền thông tin thanh toán/thông báo thu được ở Phase 1.
2. **Cập nhật `src/content.ts`**: Thay thế object `DEFAULT_CONTENT` bằng nội dung đã sinh ở Phase 2. Giữ nguyên interface `PageContent` và hàm `ContentProvider`, CHỈ chỉnh sửa các giá trị bên trong `DEFAULT_CONTENT`.
3. **Tạo file `.env`** với nội dung sau:
   ```
   COURSE_AMOUNT=<giá bán dạng số, VD: 599000>
   SEPAY_API_KEY=<từ người dùng>
   GOOGLE_SCRIPT_URL=<từ người dùng hoặc rỗng>
   TELEGRAM_BOT_TOKEN=<từ người dùng hoặc rỗng>
   TELEGRAM_CHAT_ID=<từ người dùng hoặc rỗng>
   RESEND_API_KEY=<từ người dùng hoặc rỗng>
   ```
4. Chạy lệnh: `npm install` để cài đặt dependencies.
5. Chạy lệnh: `npm run build` để xác nhận dự án biên dịch thành công.

## PHASE 4: Deploy & Trả link

1. Kiểm tra Vercel CLI có sẵn chưa bằng lệnh: `npx vercel whoami`
   - Nếu chưa đăng nhập: Báo người dùng chạy `npx vercel login` và quay lại.
2. Chạy lệnh Deploy: `npx vercel --prod --yes`
3. Trả URL live cho người dùng.
4. Đề xuất bước tiếp theo: "Bạn có thể yêu cầu tôi chỉnh sửa bất kỳ phần nào: nội dung, màu sắc, layout..."
