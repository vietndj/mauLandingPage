import { createContext, useContext, createElement } from "react";
import type { ReactNode } from "react";
import { siteConfig } from "./site.config";

export interface BlocksMeta {
  order: string[];
  hidden: string[];
  media: Record<string, any[]>;
  custom: Record<string, { title: string; body: string }>;
}

export interface SkillCard {
  n: string;
  title: string;
  desc: string;
  warn?: string;
  gif?: string;
  youtubeId?: string;
  aspectRatio?: string;
}
export interface Stage { n: string; title: string; sub?: string; desc?: string; gif?: string }
export interface ValueLine { label: string; price: string }

export interface PageContent {
  _v?: number;
  price: string;
  value: string;

  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroAccentLine: string;
  heroSub: string;
  heroCta: string;
  heroSubPrice?: string;
  heroVideoYoutubeId?: string;
  heroPoem?: string[];
  products?: { name?: string; desc?: string; price?: string }[];

  painLabel: string;
  painHeading: string;
  painQuote: string;
  painSub: string;
  pains: string[];
  painConclusion?: string;
  painPara?: string;
  painList?: string[];
  painBlockquote?: string;

  // ── Attention (3 cách gây chú ý) ──
  attentionLabel: string;
  attentionHeading: string;
  attentionPara: string;
  attentionItems: { icon: string; title: string; desc: string }[];

  // ── Rule 7-11-4 ──
  ruleLabel: string;
  ruleHeading: string;
  rulePara: string;
  ruleItems: { fail: string; why: string }[];
  ruleConclusion: string;

  cycleLabel: string;
  cycleHeading: string;
  cyclePara: string;
  cycleItems: { fail: string; why: string }[];
  
  discoveryLabel: string;
  discoveryHeading: string;
  discoverySub: string;
  discoveryItems: { title: string; desc: string; gif?: string; placeholderLabel?: string }[];

  solutionLabel: string;
  solutionHeading: string;
  solutionSub: string;
  solutionItems: string[];

  skillsLabel: string;
  skillsHeading: string;
  skillCards: SkillCard[];

  midCtaHeading: string;
  midCtaSub: string;
  midCtaBtn: string;

  baLabel: string;
  baHeading: string;
  baSub: string;
  baVideoUrl?: string;
  baBeforeMedia?: string;
  baAfterMedia?: string;
  beforeLabel: string;
  afterLabel: string;
  beforeItems: string[];
  afterItems: string[];

  roadmapLabel: string;
  roadmapHeading: string;
  roadmapPreviewHeading?: string;
  roadmapPreviewDesc?: string;
  roadmapIframeUrl?: string;
  roadmapChaptersHeading?: string;
  roadmapChaptersGif?: string;
  stages: Stage[];

  instructorLabel: string;
  instructorHeading: string;
  instructorInitials: string;
  instructorName: string;
  instructorTitle: string;
  instructorBio: string[];
  instructorInsight?: string;
  instructorPhoto?: string;
  instructorBadge1?: string;
  instructorBadge2?: string;
  instructorSubtitle?: string;

  urgencyBar: string;
  ctaLabel: string;
  ctaHeading: string;
  ctaSub: string;
  countdownLabel: string;
  valueStackTitle: string;
  valueStack: ValueLine[];
  guarantee: string;

  footerBrand: string;
  footerDot: string;
  footerTagline: string;
  footerLinks: string[];
  footerCopyright?: string;

  bonusLabel: string;
  bonusHeading: string;
  bonusSub: string;
  bonusItems: { id: string; title: string; desc: string; audioDemo?: string; youtubeDemo?: string; gifDemo?: string; gifDemos?: (string | { url: string; label?: string })[] }[];
  bonusesLabel?: string;
  bonusesHeading?: string;
  bonusesSub?: string;
  bonuses?: any[];

  blocksMeta: BlocksMeta;
}

const CONTENT_SCHEMA_VERSION = 7;

export const DEFAULT_CONTENT: PageContent = {
  _v: CONTENT_SCHEMA_VERSION,
  price: siteConfig.product.price,
  value: siteConfig.product.originalPrice,

  // ── Hero ──
  heroBadge: "BỘ TEMPLATE VIDEO BẤT ĐỘNG SẢN 2026 PRO",
  heroHeadline1: "GIẢI PHÁP DỰNG VIDEO BẤT ĐỘNG SẢN SANG TRỌNG",
  heroHeadline2: "Biến clip điện thoại thành video nhà đất triệu view",
  heroPoem: [
    "✨ 100+ Text Animation BĐS Tiếng Việt chuẩn sang",
    "🎧 200+ Sound Effects (SFX) Cinematic cuốn hút 3s đầu",
    "🚀 Template CapCut & Premiere dựng xong chỉ trong 5 phút"
  ],
  heroAccentLine: "Video BĐS đẹp là vũ khí chốt đơn nhanh nhất",
  heroSub: "Không cần thuê ekip 5 triệu/video. Không cần thức đêm tự tạo hiệu ứng. Bộ Template Video BĐS Pro trao cho bạn công thức dựng video đắt giá, thu hút người xem từ 3 giây đầu tiên.",
  heroCta: "TẢI TRỌN BỘ TEMPLATE (149K)",
  heroVideoYoutubeId: "",
  heroSubPrice: "Giá niêm yết: 990.000 VNĐ — Tiết kiệm 85% dành riêng hôm nay",
  products: [
    {
      name: "Text Animation & SFX Pro",
      desc: "Hơn 100 hiệu ứng chữ nổi bật Giá, Diện tích, Pháp lý & 200+ âm thanh chuyển cảnh Cinematic đắt giá."
    },
    {
      name: "Template Dựng Sẵn 1-Click",
      desc: "Chỉ cần kéo thả video của bạn vào khung mẫu có sẵn trên CapCut / Premiere Pro / After Effects."
    }
  ],

  // ── Pain (Nỗi đau) ──
  painLabel: "RÀO CẢN CỦA MÔI GIỚI & VIDEO EDITOR",
  painHeading: "Tại sao video BĐS của bạn đầu tư nhiều công sức nhưng vẫn vắng bóng khách gọi?",
  painQuote: "Khách hàng lướt qua video BĐS trong 2 giây đầu nếu khung hình thiếu điểm nhấn thị giác & âm thanh mờ nhạt.",
  painSub: "Bất động sản là tài sản giá trị lớn. Nếu video quay mờ nhạt, hiệu ứng chữ lôm côm, khách hàng sẽ lập tức đánh giá thấp độ uy tín của dự án và người bán.",
  pains: [
    "❌ Chữ hiển thị thông số (Giá, Vị trí, Diện tích) bị chìm, phông chữ lỗi mập mờ, trông không sang trọng.",
    "❌ Nhạc nền đơn điệu, thiếu âm thanh chuyển cảnh (Whoosh/SFX) khiến video trôi qua nhàm chán.",
    "❌ Tốn 3-4 tiếng tự thiết kế hiệu ứng chữ mà video ra đời vẫn thiếu tính thẩm mỹ.",
    "❌ Chi phí thuê bên ngoài từ 2 - 5 triệu/video quá đắt đỏ khi bạn cần đăng video liên tục mỗi ngày."
  ],

  // ── Attention (3 cách gây chú ý) ──
  attentionLabel: "BÍ QUYẾT GIỮ CHÂN KHÁCH HÀNG",
  attentionHeading: "3 Yếu tố biến một video BĐS thông thường thành thước phim sang trọng",
  attentionPara: "Một video BĐS chốt đơn cao không nằm ở thiết bị đắt tiền, mà nằm ở 3 điểm chạm thị giác chuẩn mực:",
  attentionItems: [
    {
      icon: "✨",
      title: "Text Animation Chuẩn Sang",
      desc: "Hiệu ứng chữ giới thiệu Giá bán, Vị trí & Căn hộ xuất hiện mượt mà, font chữ chuẩn sang như trên VTV & tạp chí kiến trúc."
    },
    {
      icon: "🔊",
      title: "Âm Thanh SFX Cinematic",
      desc: "Tiếng Whoosh, Riser, Camera Shutter tác động vào cảm quan người xem, tạo độ trầm kịch tính từ 3s đầu tiên."
    },
    {
      icon: "⚡",
      title: "Tốc Độ Dựng 5 Phút",
      desc: "Cấu trúc template kéo-thả giúp bạn xuất bản 3-5 video BĐS chất lượng cao mỗi ngày mà không bị kiệt sức."
    }
  ],

  // ── Rule / Cycle / Discovery ──
  ruleLabel: "CẤU TRÚC VIDEO TRIỆU VIEW",
  ruleHeading: "Quy tắc 3s - 15s - 60s trong Marketing Bất Động Sản",
  rulePara: "Khách hàng không mua căn nhà vì bạn nói hay, họ mua vì cảm xúc thị giác trong những giây đầu tiên.",
  ruleItems: [
    { fail: "Quay lòng vòng 10s đầu chưa thấy giá/vị trí", why: "Khách hàng lướt qua ngay lập tức" },
    { fail: "Không có âm thanh tạo điểm nhấn chuyển cảnh", why: "Video thiếu năng lượng & sự kịch tính" },
    { fail: "Dùng font chữ màu mè chói mắt", why: "Hạ thấp giá trị của bất động sản hàng tỷ đồng" }
  ],
  ruleConclusion: "Bộ Template BĐS Pro giải quyết triệt để 3 vấn đề trên chỉ bằng thao tác kéo-thả!",

  cycleLabel: "GIẢI PHÁP TOÀN DIỆN",
  cycleHeading: "Trọn bộ công cụ bạn nhận được chỉ với 149.000 VNĐ",
  cyclePara: "Không chi phí ẩn, không đăng ký định kỳ. Sở hữu vĩnh viễn trọn bộ tài nguyên:",
  cycleItems: [
    { fail: "Bộ 100+ Text Animation BĐS Pro", why: "Hiển thị Giá, Vị trí, Diện tích, Sổ hồng, Tiện ích" },
    { fail: "Bộ 200+ Sound Effects (SFX) Cinematic", why: "Whoosh, Transition, Bass Boom, Camera Click" },
    { fail: "Template Mẫu Dự Án Dựng Sẵn (9:16 & 16:9)", why: "Dành cho CapCut, Premiere Pro, After Effects, DaVinci" },
    { fail: "Kho 50+ Nhạc Nền BĐS Bản Quyền Clean", why: "Tải nhạc Lounge / Cinematic cao cấp không dính gậy" }
  ],

  discoveryLabel: "TÍNH NĂNG NỔI BẬT",
  discoveryHeading: "Chi tiết các gói tài nguyên trong Bộ Template 149K",
  discoverySub: "Tất cả được đóng gói khoa học, dễ tìm kiếm và sử dụng ngay lập tức.",
  discoveryItems: [
    {
      title: "1. 100+ Text Animation BĐS Tiếng Việt",
      desc: "Mẫu chữ chuyển động hiển thị thông số: Giá bán, Chiết khấu, Diện tích, Số phòng ngủ, Pháp lý sổ đỏ, Vị trí vàng. Phông chữ Việt hóa sang trọng 100%."
    },
    {
      title: "2. 200+ Hiệu Ứng Âm Thanh SFX Cinematic",
      desc: "Âm thanh chân thực nâng tầm cảm xúc: tiếng vỗ tay nhẹ, tiếng lật trang, tiếng whoosh chuyển cảnh nhẹ nhàng, nhịp tim kịch tính, tiếng chuông sang trọng."
    },
    {
      title: "3. Khung Mẫu Video BĐS Dựng Sẵn (CapCut & Premiere)",
      desc: "Lộ trình khung dựng từ Intro gây chú ý -> Tour phòng khách -> Tour ban công -> Bảng giá & Call to Action. Bạn chỉ cần thả clip vào là xong."
    },
    {
      title: "4. Hướng Dẫn Sử Dụng 1-Click (Video Tutorial)",
      desc: "Video hướng dẫn từng bước ngắn gọn trong 10 phút. Dù bạn dùng iPhone/Android hay máy tính PC/Mac đều làm được dễ dàng."
    }
  ],

  solutionLabel: "LỢI ÍCH THỰC TẾ",
  solutionHeading: "Bạn sẽ thay đổi ra sao sau khi sở hữu Bộ Template này?",
  solutionSub: "Tận hưởng quy trình sản xuất video chuyên nghiệp và tiết kiệm hàng triệu đồng mỗi tháng.",
  solutionItems: [
    "✅ Dựng video review BĐS cực nhanh chỉ trong 5 - 10 phút.",
    "✅ Tăng gấp 3 lần tỷ lệ khách hàng xem hết video và nhắn tin tư vấn.",
    "✅ Định hình phong cách cá nhân chuyên nghiệp, sang trọng trong mắt nhà đầu tư.",
    "✅ Tiết kiệm hàng chục triệu đồng chi phí thuê editor hoặc studio dựng phim ngoài.",
    "✅ Sử dụng vĩnh viễn, cập nhật miễn phí khi có bộ hiệu ứng mới."
  ],

  skillsLabel: "MẪU BỘ THỰC TẾ",
  skillsHeading: "Các dạng hiệu ứng chữ & âm thanh có trong bộ bds-pro",
  skillCards: [
    { n: "01", title: "Text Giá & Chiết Khấu", desc: "Mẫu chữ mạ vàng/trắng neon hiển thị Giá chỉ từ... & Ưu đãi chiết khấu đặc biệt." },
    { n: "02", title: "Text Vị Trí & Tiện Ích", desc: "Mẫu chữ đính kèm icon định vị GPS, khoảng cách tới trung tâm, trường học, bệnh viện." },
    { n: "03", title: "Sound FX Whoosh & Transition", desc: "Âm thanh vèo nhẹ mượt mà khi chuyển từ cảnh toàn sang cảnh cận biệt thự." },
    { n: "04", title: "Call-to-Action Chốt Đơn", desc: "Animation nút bấm Gọi ngay / Đăng ký tham quan nhà mẫu kèm số Hotline nổi bật." }
  ],

  midCtaHeading: "SỞ HỮU TRỌN BỘ TEMPLATE BĐS PRO NGAY HÔM NAY",
  midCtaSub: "Chỉ 149.000 VNĐ cho toàn bộ công cụ làm video BĐS chuyên nghiệp vĩnh viễn.",
  midCtaBtn: "ĐĂNG KÝ MUA NGAY (149.000đ)",

  baLabel: "SO SÁNH THỰC TẾ",
  baHeading: "Sự khác biệt trước và sau khi ứng dụng Bộ Template BĐS Pro",
  baSub: "Nhìn vào hai phong cách dựng video để thấy lý do khách hàng quyết định liên hệ với bạn.",
  beforeLabel: "LÀM VIDEO KIỂU CŨ",
  afterLabel: "DÙNG TEMPLATE BĐS PRO",
  beforeItems: [
    "❌ Chữ chèn ngẫu nhiên, phông lỗi, khó đọc trên điện thoại.",
    "❌ Không có hiệu ứng âm thanh, video im lìm nhàm chán.",
    "❌ Mất 3 tiếng dựng nhưng nhìn video giống rao vặt giá rẻ.",
    "❌ Tỷ lệ giữ chân người xem dưới 3 giây."
  ],
  afterItems: [
    "✅ Chữ Animation chuẩn sang, hiển thị giá & diện tích rõ ràng.",
    "✅ Âm thanh SFX Cinematic chân thực như phim truyền hình.",
    "✅ Dựng xong trong 5 phút, hình ảnh đẳng cấp chuẩn dự án cao cấp.",
    "✅ Người xem cuốn hút đến cuối video, tăng cuộc gọi tư vấn."
  ],

  roadmapLabel: "QUY TRÌNH KÍCH HOẠT",
  roadmapHeading: "3 Bước đơn giản để nhận bộ template và sử dụng ngay",
  stages: [
    { n: "01", title: "Đăng Ký & Quét Mã QR", sub: "Thanh toán 149.000đ tự động qua VietQR" },
    { n: "02", title: "Nhận Link Tải Ngay", sub: "Hệ thống tự động gửi link Google Drive tốc độ cao qua Zalo/Email" },
    { n: "03", title: "Import & Dựng Video", sub: "Mở CapCut hoặc Premiere, kéo thả template vào video của bạn và xuất bản!" }
  ],

  instructorLabel: "TÁC GIẢ & ĐỘI NGŨ PHÁT TRIỂN",
  instructorHeading: "Được đóng gói bởi Chuyên gia & Đội ngũ thực chiến",
  instructorInitials: "PRO",
  instructorName: "Chuyên Gia Thực Chiến",
  instructorTitle: "Đội ngũ nghiên cứu & phát triển giải pháp tối ưu cho người dùng",
  instructorPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
  instructorBadge1: "Chuyên gia giàu kinh nghiệm",
  instructorBadge2: "✨ Cam kết đồng hành & hỗ trợ 1-1",
  instructorSubtitle: "ĐỘI NGŨ CHUYÊN GIA DÀNH NHIỀU NĂM NGHIÊN CỨU & ĐÓNG GÓI SẢN PHẨM THỰC CHIẾN.",
  instructorBio: [
    "Chúng tôi hiểu rào cản lớn nhất của bạn không phải là thiếu thiết bị xịn hay công cụ phức tạp, mà là bị quá tải bởi những lý thuyết rườm rà.",
    "Sản phẩm này được đóng gói tối giản nhất — không có định nghĩa hàn lâm. Chỉ có những quy luật trực quan nhất để bạn áp dụng và ra kết quả ngay lập tức."
  ],

  bonusLabel: "QUÀ TẶNG KÈM ĐẶC BIỆT",
  bonusHeading: "Nhận thêm 3 Phần quà độc quyền khi mua hôm nay",
  bonusSub: "Tổng quà tặng trị giá hơn 600.000 VNĐ - Miễn phí 100% kèm theo đơn hàng 149K.",
  bonusItems: [
    {
      id: "b1",
      title: "🎁 Quà 1: Kho 50+ Nhạc Nền Cinematic BĐS Clean",
      desc: "Bộ nhạc Lounge, Jazz, Cinematic nhẹ nhàng sang trọng, đã được kiểm tra không bản quyền trên TikTok & Facebook Reels."
    },
    {
      id: "b2",
      title: "🎁 Quà 2: Ebook 10 Góc Quay Nhà Đất Khiến Căn Nhà Rộng Gấp Đôi",
      desc: "Bí quyết canh góc máy điện thoại chuẩn kiến trúc sư giúp căn hộ trông thoáng đạt, sáng láng và hút mắt hơn."
    },
    {
      id: "b3",
      title: "🎁 Quà 3: Bộ 20 Prompt AI Viết Kịch Bản Review BĐS",
      desc: "Copy-paste câu lệnh vào ChatGPT để AI tự động soạn kịch bản review 60 giây phân rã 2 cột chi tiết."
    }
  ],

  urgencyBar: "⚡ ƯU ĐÃI NÀY CHỈ DÀNH CHO 100 KHÁCH HÀNG ĐẦU TIÊN — GIÁ SẼ TĂNG LÊN 990.000đ SAU KHI HẾT SUẤT",
  ctaLabel: "ĐĂNG KÝ SỞ HỮU",
  ctaHeading: "Sở hữu Bộ Template Video Bất Động Sản Pro Ngay Hôm Nay",
  ctaSub: "Chỉ 149.000 VNĐ (Tiết kiệm 85% giá gốc 990.000đ) — Sở hữu vĩnh viễn, nhận hàng tự động sau 1 phút.",
  countdownLabel: "Thời gian giữ suất ưu đãi 149K:",
  valueStackTitle: "TRỌN BỘ TÀI NGUYÊN BẠN NHẬN ĐƯỢC:",
  valueStack: [
    { label: "100+ Text Animation BĐS Pro Tiếng Việt", price: "450.000đ" },
    { label: "200+ Sound Effects (SFX) Cinematic BĐS", price: "300.000đ" },
    { label: "Template Khung Mẫu CapCut & Premiere Dựng Sẵn", price: "500.000đ" },
    { label: "Kho 50+ Nhạc Nền BĐS Bản Quyền Clean", price: "200.000đ" },
    { label: "Ebook 10 Góc Quay & Bộ Prompt AI Review BĐS", price: "150.000đ" }
  ],
  guarantee: "🛡️ CAM KẾT: Hỗ trợ kỹ thuật 1-1 qua Zalo nếu bạn gặp khó khăn trong quá trình sử dụng template!",

  footerBrand: siteConfig.branding.footerBrand || "BĐS VIDEO PRO",
  footerDot: ".",
  footerTagline: "Giải pháp video marketing bất động sản hàng đầu cho môi giới & nhà sáng tạo nội dung.",
  footerLinks: ["Trang chủ", "Tính năng", "Quà tặng", "Thanh toán"],
  footerCopyright: siteConfig.branding.footerCopyright || "",

  blocksMeta: {
    order: ["hero", "pain", "attention", "rule", "cycle", "discovery", "solution", "skills", "midCta", "before-after", "roadmap", "instructor", "bonus", "cta", "footer"],
    hidden: [],
    media: {},
    custom: {},
  },
};

export const ContentCtx = createContext<PageContent>(DEFAULT_CONTENT);

export function useContent(): PageContent {
  return useContext(ContentCtx);
}

export function ContentProvider({ children }: { children: ReactNode }) {
  return createElement(ContentCtx.Provider, { value: DEFAULT_CONTENT }, children);
}
