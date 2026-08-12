// src/site.config.ts
// Central configuration for the landing page template.
// The Antigravity skill will auto-populate this file.

export const siteConfig = {
  // === THÔNG TIN SẢN PHẨM ===
  product: {
    name: "{{TÊN_SẢN_PHẨM}}",
    price: "0",           // Giá bán ưu đãi (format: "599.000")
    originalPrice: "0",   // Giá gốc (format: "3.250.000")
  },
  // === THANH TOÁN ===
  payment: {
    bankCode: "MB",           // Mã ngân hàng VietQR (MB, TPB, VCB, TCB, ACB...)
    accountNumber: "",         // Số tài khoản
    accountName: "",           // Tên chủ tài khoản (IN HOA, không dấu)
    transferPrefix: "ORDER",   // Tiền tố nội dung CK
  },
  // === THÔNG BÁO ===
  notifications: {
    telegramBotToken: "",     // Token bot Telegram
    telegramChatId: "",       // Chat ID nhận thông báo
    resendApiKey: "",         // API key Resend.com (tùy chọn)
    sellerEmail: "",          // Email người bán nhận thông báo
    buyerEmailTemplate: {
      subject: "🎉 Đơn hàng thành công!",
      productLink: "",        // Link sản phẩm/khóa học gửi cho khách
    },
  },
  // === BRANDING ===
  branding: {
    siteName: "",
    footerBrand: "",
    footerCopyright: "",
  },
};
