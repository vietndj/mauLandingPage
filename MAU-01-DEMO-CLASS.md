# 📦 MẪU 01 — DEMO CLASS
### Landing Page Bán Hàng Tự Động | Phiên Bản Demo Trên Lớp

**Phiên bản:** 1.0-demo  
**Mục tiêu:** Demo trực tiếp trên lớp — tạo web bán hàng thật trong 2 phút  
**Người dùng:** Chỉ mình bạn (Nguyễn Đức Việt) — thông tin thanh toán cố định  
**Template path:** `/Users/vietmac/Documents/CODE/AI Course/mauLandingPage`  
**Link live:** https://bds-video-pro.vercel.app  

---

## 🎯 CONCEPT — ĐƠN GIẢN NHẤT CÓ THỂ

> **Đầu vào**: Tên sản phẩm + Giá bán  
> **Đầu ra**: Link web bán hàng THẬT đang live trên Vercel  
> **Thời gian**: ~2 phút  
> **Không cần**: Cấu hình bank, SePay, Resend, Google Sheet — tất cả đã cố định

---

## 🏗️ KIẾN TRÚC — CÁI GÌ CỐ ĐỊNH, CÁI GÌ THAY ĐỔI

### ✅ CỐ ĐỊNH (không bao giờ đổi trong demo)

| Thành phần | Giá trị | Nơi lưu |
|---|---|---|
| **Ngân hàng nhận tiền** | TPBank — 88804101986 — NGUYEN DUC VIET | `src/site.config.ts` |
| **SePay API Key** | `***` (đã set trên Vercel) | Vercel Env Var |
| **Email gửi** | `hello@fedu.vn` (Resend, domain đã verify) | Vercel Env Var |
| **Email người bán** | `vietndj@gmail.com` | Vercel Env Var |
| **Zalo hỗ trợ** | `0934.688.632` | `src/site.config.ts` |
| **Tên người bán** | Nguyễn Đức Việt | `src/site.config.ts` |
| **Google Sheet** | Đã cấu hình sẵn | Vercel Env Var |
| **Vercel project** | `bds-video-pro` | `.vercel/` |

### 🔄 THAY ĐỔI (chỉ 2 file, mỗi lần demo)

| File | Thay đổi gì |
|---|---|
| `src/site.config.ts` | Tên SP, giá, giá gốc, category, transferPrefix, branding |
| `src/content.ts` | Toàn bộ nội dung marketing (headlines, pains, solutions, bonus, testimonials, FAQs) |

---

## 🎬 QUY TRÌNH DEMO 4 NHỊP (Skill đã cài sẵn)

```
NHỊP 1 — Bạn (học viên xem):
  "Tạo cho mình landing page bán [Tên SP] giá [Giá]k"
  
         ↓ AI nhận diện → kích hoạt Skill create-landing-page

NHỊP 2 — AI hỏi 1 câu duy nhất (pop-up ask_question):
  ┌────────────────────────────────────────────────────────────┐
  │ Bạn muốn sử dụng thông tin người bán & tài khoản          │
  │ nhận tiền nào?                                            │
  │                                                           │
  │  ● (Recommended) Dùng thông tin mặc định                  │
  │    (Nguyễn Đức Việt — 0934.688.632), thanh toán vào TPBank│
  │  ○ Tự nhập thông tin người bán mới                       │
  │                                                           │
  │                              [Submit]                     │
  └────────────────────────────────────────────────────────────┘

NHỊP 3 — Bạn:
  Bấm chọn "Dùng thông tin mặc định..."

         ↓ AI bắt đầu thực thi

NHỊP 4 — AI tự động (không cần can thiệp):
  ├── Lập kế hoạch (implementation_plan.md)
  ├── Sửa src/site.config.ts (tên, giá, prefix, branding)
  ├── Viết lại src/content.ts (toàn bộ marketing copy)
  ├── npm run build  →  ✅ 0 lỗi
  ├── npx vercel --prod  →  Deploy ~30 giây
  └── Gửi kết quả:
       🎉 Done! https://bds-video-pro.vercel.app
       📦 [Tên sản phẩm] | 💰 [Giá]
       ⚡ VietQR TPBank + Email tự động đã kích hoạt
```

---

## 🔧 CƠ SỞ HẠ TẦNG ĐÃ CÀI SẴN

### Vercel Project: `bds-video-pro`

```
Env vars đã set (không cần đụng vào):
  COURSE_AMOUNT       = 149000       ← Cần update nếu giá đổi
  GOOGLE_SCRIPT_URL   = https://...  ✅ Cố định
  SEPAY_API_KEY       = ***          ✅ Cố định  
  RESEND_API_KEY      = re_***       ✅ Cố định
  RESEND_FROM_EMAIL   = hello@fedu.vn ✅ Cố định
  SELLER_EMAIL        = vietndj@gmail.com ✅ Cố định
  SELLER_ZALO         = 0934688632   ✅ Cố định
  PRODUCT_NAME        = [Tên SP]     ← Cần update theo SP mới
```

> **Lưu ý**: Khi giá đổi (VD từ 149k → 199k), AI cần chạy thêm:
> ```bash
> echo "199000" | npx vercel env add COURSE_AMOUNT production --scope viet-s-projects1
> ```
> Skill đã biết làm điều này tự động.

### Skill đã cài global

```
Skill: create-landing-page
Vị trí: ~/.gemini/antigravity/skills/create-landing-page/SKILL.md
         ~/.gemini/config/skills/create-landing-page/SKILL.md
         ~/Documents/CODE/AI Course/.agents/skills/create-landing-page/SKILL.md
Phạm vi: Hoạt động trên TẤT CẢ workspace/thư mục trên máy tính
```

**Kích hoạt khi**: "web bán hàng", "landing page", "trang bán", "bán sản phẩm"

---

## 🚀 LUỒNG KỸ THUẬT FULL (AI làm gì ở Nhịp 4)

```
User input: "Bộ Preset Lightroom Ảnh Cưới, 199k"
         │
         ▼
[AI đọc SKILL.md] → Xác nhận dùng thông tin mặc định
         │
         ▼
[Sửa site.config.ts]
  product.name     = "Bộ Preset Lightroom Chụp Ảnh Cưới"
  product.price    = "199.000"
  product.category = "preset Lightroom"
  payment.prefix   = "PRESET"
  branding.siteName = "Preset Pro"
         │
         ▼
[Sửa content.ts] — AI tự viết marketing copy cho sản phẩm mới:
  heroBadge, heroHeadline1/2, heroSub
  pains[] × 4     ← Nỗi đau của photographer
  solutionItems[] ← Lợi ích preset
  bonusItems[]    ← Quà tặng kèm
  testimonials[]  ← 3 review khách hàng
  faqItems[]      ← 4-6 câu hỏi thường gặp
         │
         ▼
[npm run build] → Vite bundle → dist/
  ✅ Thường 0 lỗi nếu content.ts đúng cú pháp
         │
         ▼
[npx vercel --prod --yes --scope viet-s-projects1]
  Upload → Build on Vercel → Deploy → Alias
  → https://bds-video-pro.vercel.app
         │
         ▼
[Gửi kết quả cho user]
```

---

## ⚠️ ĐIỂM CẦN CHÚ Ý KHI DEMO

### 1. Nhiều sản phẩm — cùng 1 TK ngân hàng
SePay phân biệt giao dịch bằng **SỐ TIỀN + SĐT khách**, không phải `transferPrefix`.  
→ **Mỗi sản phẩm demo phải có giá khác nhau** để SePay không nhầm:

| Sản phẩm demo | Giá | Prefix (chỉ để đẹp) |
|---|---|---|
| Template Video BĐS | 149.000đ | VIDEO |
| Preset Lightroom | 199.000đ | PRESET |
| Template PowerPoint | 249.000đ | PPT |
| Khóa học CapCut | 299.000đ | CAPCUT |

### 2. Web chỉ có 1 URL duy nhất
Vercel project `bds-video-pro` → luôn trỏ về **sản phẩm cuối cùng** được deploy.  
→ Trong demo: Deploy sản phẩm mới → link cũ tự override → bình thường.  
→ Nếu cần chạy song song nhiều web → cần tạo thêm Vercel project mới.

### 3. Build lỗi nếu content.ts sai cú pháp
AI đôi khi viết content.ts có lỗi JSX/TypeScript → build fail.  
→ Cần chạy `npm run build` trước khi deploy để kiểm tra.  
→ Skill đã có bước này.

---

## 📋 CHECKLIST TRƯỚC KHI DEMO TRÊN LỚP

```
□ Mở conversation mới (không dùng conversation cũ có context cũ)
□ Workspace đang ở đúng thư mục có Skill (bất kỳ thư mục nào)
□ Máy tính kết nối internet ổn định
□ Node.js + Vercel CLI đã cài:
  → node --version  (cần ≥ 18)
  → npx vercel --version
□ Đã login Vercel CLI:
  → npx vercel whoami  (phải hiện: viet-s-projects1)
□ Sản phẩm demo đã có sẵn (tên + giá chọn trước)
□ Giá demo KHÁC với sản phẩm đang live
```

---

## 🔮 NÂNG CẤP TƯƠNG LAI (không thuộc bản demo này)

Tham khảo phân tích đầy đủ tại `MAU-01-AN-NGAY.md` — mục "3 Phương Án Đóng Gói":

| Level | Concept | Dành cho |
|---|---|---|
| **Demo (bản này)** | AI + Skill + 1 Vercel project | Chứng minh khả năng AI cho lớp học |
| **Bán cho người khác (Phương án A)** | `setup.sh` Wizard CLI | Người mua tự deploy web riêng của họ |
| **SaaS (Phương án B)** | Web wizard tự động tạo repo + deploy | Scale lớn, thu phí hàng tháng |

---

## 📁 CÁC FILE LIÊN QUAN

| File | Mô tả |
|---|---|
| [`src/site.config.ts`](file:///Users/vietmac/Documents/CODE/AI%20Course/mauLandingPage/src/site.config.ts) | Config sản phẩm, seller, payment, branding |
| [`src/content.ts`](file:///Users/vietmac/Documents/CODE/AI%20Course/mauLandingPage/src/content.ts) | Toàn bộ nội dung marketing |
| [`MAU-01-AN-NGAY.md`](file:///Users/vietmac/Documents/CODE/AI%20Course/mauLandingPage/MAU-01-AN-NGAY.md) | Tài liệu kỹ thuật đầy đủ (audit, kiến trúc) |
| [`~/.gemini/antigravity/skills/create-landing-page/SKILL.md`](file:///Users/vietmac/.gemini/antigravity/skills/create-landing-page/SKILL.md) | Skill AI kịch bản 4 nhịp (global) |
| [`.env.example`](file:///Users/vietmac/Documents/CODE/AI%20Course/mauLandingPage/.env.example) | Template biến môi trường |
