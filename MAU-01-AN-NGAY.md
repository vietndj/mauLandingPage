# MẪU 01 — "Ăn Ngay" 🚀
### Landing Page Bán Hàng Tự Động — Thanh Toán VietQR + Email Thông Báo

**Phiên bản:** 1.0  
**Ngày đóng gói:** 2026-08-14  
**Trạng thái:** ✅ Hoạt động ổn định — Build clean, Deploy live  
**Link live hiện tại:** https://bds-video-pro.vercel.app  
**Template path:** `/Users/vietmac/Documents/CODE/AI Course/mauLandingPage`

---

## TỔNG QUAN: MẪU NÀY LÀM GÌ?

Đây là một **landing page bán hàng số** hoàn chỉnh, hoạt động tự động từ đầu đến cuối:

1. **Khách vào web** → Xem trang giới thiệu sản phẩm, điền form (tên, email, SĐT)
2. **Hệ thống tạo mã QR** → Khách quét mã VietQR chuyển khoản (TPBank)
3. **SePay tự phát hiện giao dịch** → Web tự xác nhận, hiện popup "Thanh toán thành công"
4. **Email tự gửi đi** → Khách nhận xác nhận, người bán nhận thông báo đơn mới
5. **Google Sheet ghi lại** → Toàn bộ lead và đơn hàng lưu vào spreadsheet tự động

**Không cần thao tác thủ công. Chạy 24/7.**

---

## KIẾN TRÚC HỆ THỐNG

```
Khách hàng (Browser)
    │
    ├── GET /                    → Trang chủ (React SPA)
    │       Landing page với sections: Hero, Pain, Solution, Bonus, CTA Form
    │
    ├── POST /api/lead/register  → Ghi lead vào Google Sheet khi khách điền form
    │       Input: name, email, phone
    │       Output: Ghi vào Sheet cột: Tên / Email / SĐT / Thời gian / Trạng thái = "Lead"
    │
    ├── GET /api/payment/check   → Polling 5 giây/lần kiểm tra SePay
    │       Input: since (timestamp), phone (SĐT khách)
    │       Logic: So khớp giao dịch theo SỐ TIỀN + SĐT trong nội dung CK
    │       Output: { found: true/false, transaction: {...} }
    │
    ├── POST /api/payment/confirm → Xử lý khi khách bấm "Tôi đã CK"
    │       Gửi email Resend cho cả buyer & seller
    │       Cập nhật Google Sheet trạng thái = "Đã thanh toán"
    │
    └── POST /api/payment/webhook → SePay webhook (thay thế cho polling)
            Tự động gọi khi SePay phát hiện giao dịch mới
            Gửi email Resend + cập nhật Sheet
```

---

## THÔNG TIN CẤU HÌNH HIỆN TẠI (ĐANG DÙNG)

### 💳 Tài khoản ngân hàng nhận tiền
```
Ngân hàng:    TPBank (Tiên Phong Bank)
Số tài khoản: 88804101986
Chủ tài khoản: NGUYEN DUC VIET
Nội dung CK:   VIDEO + [SĐT khách] (VD: VIDEO 0912345678)
Mã tiền tố:   "VIDEO" (transferPrefix)
```

> ⚠️ **HARDCODED trong frontend** (`src/site.config.ts`):  
> Số tài khoản, mã ngân hàng, tên chủ TK và transferPrefix được đọc từ `site.config.ts` — **không phải env var**.  
> Muốn đổi sang TK khác → sửa file `src/site.config.ts` rồi build lại + redeploy.

### 🔍 SePay — Phát hiện thanh toán
```
API:      https://my.sepay.vn/userapi/transactions/list
API Key:  Env var SEPAY_API_KEY (Vercel)
Tài khoản SePay đang link: TPBank 88804101986
```

**Logic khớp giao dịch** (trong `api/payment/check.ts`):
- ✅ Số tiền phải KHỚP CHÍNH XÁC với `COURSE_AMOUNT` (env var, mặc định 149000)
- ✅ Nội dung chuyển khoản phải CHỨA SĐT khách (sau khi bỏ số 0 đầu)
- ✅ Thời gian giao dịch phải SAU khi khách mở trang checkout (có 15 phút buffer)
- ❌ KHÔNG kiểm tra `transferPrefix` — Nếu nhiều web cùng TK, chỉ cần khác giá để phân biệt

### 📧 Resend — Gửi email
```
API Key:     Env var RESEND_API_KEY (Vercel)
Email gửi:  hello@fedu.vn (Env var RESEND_FROM_EMAIL)
Email bán:  vietndj@gmail.com (Env var SELLER_EMAIL)
Domain:     fedu.vn (đã verify trên Resend — Tokyo server)
```

**Hai email tự động:**
1. **Email cho người mua**: Xác nhận thanh toán thành công + nút Zalo hỗ trợ
2. **Email cho người bán**: Thông báo đơn mới với đầy đủ tên/SĐT/email khách + link Zalo bấm gọi ngay

### 📊 Google Sheets — Lưu lead & đơn hàng
```
Google Script URL: Env var GOOGLE_SCRIPT_URL (Vercel)
Sheet hiện tại:    https://docs.google.com/spreadsheets/d/1LsOlWpy2BBf-DGN4wMD9LRDD1c8CIxUvZqALbJwz_cY
```

**Dữ liệu ghi xuống:**
- Khi điền form: Tên / Email / SĐT / Thời gian / Trạng thái = "Lead"
- Khi thanh toán: Cập nhật dòng → Trạng thái = "Đã thanh toán" + Mã giao dịch

### 📱 Telegram (tùy chọn)
```
Bot Token: Env var TELEGRAM_BOT_TOKEN
Chat ID:   Env var TELEGRAM_CHAT_ID
```
Gửi thông báo tức thì qua Telegram khi có đơn mới (nếu cấu hình).

---

## DANH SÁCH ENV VARS TRÊN VERCEL

| Tên biến | Giá trị hiện tại | Bắt buộc | Ghi chú |
|---|---|---|---|
| `COURSE_AMOUNT` | `149000` | ✅ | Giá sản phẩm (số nguyên VND) |
| `GOOGLE_SCRIPT_URL` | `https://script.google.com/...` | ✅ | URL Google Apps Script |
| `SEPAY_API_KEY` | `***` (đã set) | ✅ | API key SePay |
| `RESEND_API_KEY` | `re_TxqHb6nT_...` | ✅ | API key Resend.com |
| `RESEND_FROM_EMAIL` | `hello@fedu.vn` | ✅ | Email gửi đi (domain đã verify) |
| `SELLER_EMAIL` | `vietndj@gmail.com` | ✅ | Email nhận thông báo đơn |
| `SELLER_ZALO` | `0934688632` | ✅ | SĐT trong email thông báo |
| `PRODUCT_NAME` | `Bộ Template Video BĐS Pro` | ✅ | Tên trong email |
| `TELEGRAM_BOT_TOKEN` | (trống) | ❌ | Tùy chọn |
| `TELEGRAM_CHAT_ID` | (trống) | ❌ | Tùy chọn |

---

## CẤU TRÚC FILE DỰ ÁN

```
mauLandingPage/
├── src/
│   ├── site.config.ts        ← ⭐ FILE SỐ 1 CẦN SỬA KHI NHÂN BẢN
│   │                            (Tên SP, giá, TK ngân hàng, thông tin seller)
│   ├── content.ts            ← ⭐ FILE SỐ 2 CẦN SỬA KHI NHÂN BẢN
│   │                            (Toàn bộ nội dung marketing của trang)
│   ├── App.tsx               ← Khung tổng, điều hướng trang chủ / checkout
│   ├── Checkout.tsx          ← Trang thanh toán: QR, polling, popup thành công
│   ├── sections/             ← Các section của trang chủ
│   │   ├── HeroSection.tsx   ← Section hero (badge, headline, video, CTA)
│   │   ├── CtaSection.tsx    ← Form đăng ký (tên, email, SĐT)
│   │   ├── PainSection.tsx   ← Mô tả nỗi đau khách hàng
│   │   ├── SolutionSection.tsx ← Giải pháp sản phẩm
│   │   ├── BonusSection.tsx  ← Quà tặng kèm theo
│   │   ├── TestimonialSection.tsx ← Review khách hàng
│   │   └── ...               ← Các section khác
│   ├── components/
│   │   └── ui.tsx            ← UI components tái sử dụng
│   ├── ZaloChatWidget.tsx    ← Widget chat Zalo góc phải
│   ├── LiveSocialProof.tsx   ← Popup thông báo mua hàng giả (social proof)
│   ├── theme.ts              ← Màu sắc, font, thiết kế
│   └── content.ts            ← Nội dung marketing toàn bộ
│
├── api/
│   ├── lead/
│   │   └── register.ts       ← API ghi lead vào Google Sheet
│   └── payment/
│       ├── check.ts          ← API polling kiểm tra SePay
│       ├── confirm.ts        ← API xử lý nút "Tôi đã CK" (email + Sheet)
│       └── webhook.ts        ← API nhận webhook từ SePay
│
├── .env                      ← Biến local (KHÔNG commit lên git)
├── .env.example              ← Template biến môi trường (có thể commit)
├── vercel.json               ← Cấu hình routing Vercel
└── vite.config.ts            ← Cấu hình build Vite
```

---

## HƯỚNG DẪN NHÂN BẢN CHO SẢN PHẨM MỚI

### Bước 1 — Sửa `src/site.config.ts`
```ts
product: {
  name: "[Tên sản phẩm mới]",        // Hiển thị khắp web
  price: "[Giá: 199.000]",           // Hiển thị trên web
  originalPrice: "[Giá gốc: 990.000]",
  category: "[Loại: preset ảnh]",     // Dùng trong mô tả
},
payment: {
  bankCode: "TPB",                   // Giữ nguyên (TPBank)
  accountNumber: "88804101986",      // Giữ nguyên
  accountName: "NGUYEN DUC VIET",    // Giữ nguyên
  transferPrefix: "[MÃ VIẾT TẮT]",  // Đổi: PRESET, EBOOK, PPT...
},
branding: {
  siteName: "[Tên thương hiệu ngắn]",
  footerBrand: "[TÊN IN HOA]",
  footerCopyright: "© 2026 [Tên]. All rights reserved.",
},
```

### Bước 2 — Sửa `src/content.ts`
Thay toàn bộ nội dung marketing phù hợp sản phẩm mới:
- `heroHeadline1`, `heroHeadline2` — Tiêu đề chính
- `pains[]` — 4-5 nỗi đau khách hàng
- `solutionItems[]` — Giải pháp
- `bonusItems[]` — Quà tặng
- `discoveryItems[]` — Chi tiết tính năng
- Các sections còn lại...

### Bước 3 — Cập nhật env vars trên Vercel
```bash
# Đổi giá sản phẩm
echo "199000" | npx vercel env add COURSE_AMOUNT production --scope viet-s-projects1

# Đổi tên sản phẩm trong email
echo "Bộ Preset Lightroom Ảnh Cưới" | npx vercel env add PRODUCT_NAME production --scope viet-s-projects1
```

### Bước 4 — Build & Deploy
```bash
cd "/Users/vietmac/Documents/CODE/AI Course/mauLandingPage"
npm run build
npx vercel --prod --yes --scope viet-s-projects1
```

---

## AUDIT CUỐI — KẾT QUẢ KIỂM TRA

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| Build TypeScript | ✅ | 0 lỗi, 0 warning |
| API register.ts | ✅ | GOOGLE_SCRIPT_URL từ env var |
| API check.ts | ✅ | SePay polling hoạt động |
| API confirm.ts | ✅ | Resend email từ env var, Google Sheet từ env var |
| API webhook.ts | ✅ | FROM_EMAIL từ env var, COURSE_AMOUNT đồng bộ |
| HTTP status codes | ✅ | 405 chuẩn (đã đổi từ 455) |
| Resend domain | ✅ | fedu.vn đã verify, Tokyo server |
| Make.com | ✅ | Đã TẮT (xóa khỏi .env và hardcode) |
| siteConfig | ✅ | seller, social, product.category dynamic |
| Checkout.tsx | ✅ | ~30 chỗ hardcoded đã dynamic |
| App.tsx | ✅ | Facebook links, Zalo dynamic |
| ZaloChatWidget | ✅ | Phone, name từ siteConfig |
| HeroSection | ✅ | Badge, title từ siteConfig |
| CtaSection | ✅ | "khóa học" → "sản phẩm" |
| .env.example | ✅ | Đầy đủ 13 biến có mô tả |
| Copyright bug | ✅ | Đã fix (không còn © 2026 © 2026) |
| Google Sheet | ✅ | Ghi lead + cập nhật "Đã thanh toán" |
| Email buyer | ✅ | Template generic, nút Zalo |
| Email seller | ✅ | Bảng thông tin khách + nút Zalo |

### Điểm cần lưu ý khi vận hành
1. **Nhiều sản phẩm cùng 1 TK ngân hàng**: Phân biệt bằng **GIÁC TIỀN KHÁC NHAU** (không phải transferPrefix — transferPrefix chỉ hiển thị trong QR, không được kiểm tra phía backend)
2. **SePay chỉ check 20 giao dịch gần nhất**: Nếu tài khoản có nhiều giao dịch trong thời gian ngắn, có thể bỏ sót
3. **Resend giới hạn 3.000 email/tháng** ở gói free — Nâng cấp nếu cần nhiều hơn
4. **Google Apps Script** có quota 100 lần/ngày ở tài khoản thường — Đủ dùng cho quy mô nhỏ

---

## THÔNG TIN KỸ THUẬT CHI TIẾT

### Stack công nghệ
- **Frontend**: React 18 + TypeScript + Vite 7
- **Styling**: Vanilla CSS (không dùng Tailwind)
- **Hosting**: Vercel (Serverless Functions cho API)
- **Payment Detection**: SePay VietQR API
- **Email**: Resend.com (domain fedu.vn)
- **Database**: Google Sheets via Apps Script
- **Notifications**: Resend email + Telegram (optional)

### Hiệu suất build
```
dist/index.html         6.13 kB │ gzip: 2.24 kB
dist/assets/App.css    14.62 kB │ gzip: 3.33 kB
dist/assets/Checkout   38.97 kB │ gzip: 11.42 kB
dist/assets/App        50.68 kB │ gzip: 12.09 kB
dist/assets/index     203.42 kB │ gzip: 66.21 kB
Build time: ~550ms
```
