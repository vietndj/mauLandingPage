// src/site.config.ts
// Central configuration for the landing page template.
// The Antigravity skill will auto-populate this file.

export const siteConfig = {
  // === THÔNG TIN SẢN PHẨM ===
  product: {
    name: "Bộ Template Video Bất Động Sản Pro",
    price: "149.000",           // Giá bán ưu đãi (format: "149.000")
    originalPrice: "990.000",   // Giá gốc (format: "990.000")
  },
  // === THANH TOÁN ===
  payment: {
    bankCode: "TPB",           // Mã ngân hàng VietQR (MB, TPB, VCB, TCB, ACB...)
    accountNumber: "88804101986", // Số tài khoản thật
    accountName: "NGUYEN DUC VIET", // Tên chủ tài khoản (IN HOA, không dấu)
    transferPrefix: "BDS149K",   // Tiền tố nội dung CK
  },
  // === THÔNG BÁO ===
  notifications: {
    telegramBotToken: "",     // Token bot Telegram
    telegramChatId: "",       // Chat ID nhận thông báo
    resendApiKey: "",         // API key Resend.com (tùy chọn)
    sellerEmail: "vietndj@gmail.com", // Email người bán nhận thông báo
    buyerEmailTemplate: {
      subject: "🎉 Đơn hàng Bộ Template Video BĐS Pro thành công!",
      productLink: "",        // Link sản phẩm gửi cho khách
    },
  },
  // === BRANDING ===
  branding: {
    siteName: "BĐS Video Pro",
    footerBrand: "BĐS VIDEO PRO",
    footerCopyright: "© 2026 BĐS Video Pro. All rights reserved.",
  },
};

