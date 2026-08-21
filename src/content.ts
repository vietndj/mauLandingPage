import { createContext, useContext, createElement } from "react";
import { siteConfig } from "./site.config";
import type { ReactNode } from "react";

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
export interface Stage { n: string; title: string; sub?: string; desc?: string; gif?: string; time?: string; highlights?: string[] }
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
  philosophyAssets?: { icon: string; tag: string; desc: string; isHighlight?: boolean; n?: string; title?: string; input?: string; output?: string; kpi?: string }[];

  // ── Bridge ──
  bridgeHeading?: string;
  bridgeLabel?: string;
  bridgeSteps?: { n: string; title: string; lead?: string; items?: string[]; desc?: string }[];
  bridgeCompareHeading?: string;
  bridgeCompareSubtitle?: string;
  bridgeCompareOldTitle?: string;
  bridgeCompareOldItems?: string[];
  bridgeCompareNewTitle?: string;
  bridgeCompareNewItems?: string[];
  bridgeCompareList?: {
    id: number;
    tag: string;
    oldAction: string;
    oldPain: string;
    userPrompt: string;
    aiResult: string;
    timeBadge: string;
  }[];

  // ── Showcase ──
  showcaseLabel?: string;
  showcaseHeading?: string;
  showcaseSub?: string;
  showcaseVideos?: { id: string; title: string; module?: string; thumb?: string }[];

  painLabel: string;
  painHeading: string;
  painQuote: string;
  painSub: string;
  pains: string[];
  painConclusion?: string;

  // ── Attention ──
  attentionLabel: string;
  attentionHeading: string;
  attentionPara: string;
  attentionComparisonTitle?: string;
  attentionItems: { icon: string; title: string; desc: string }[];

  // ── Rule 7-11-4 ──
  ruleLabel: string;
  ruleHeading: string;
  rulePara?: string;
  ruleItems?: { fail: string; why: string }[];
  ruleCards?: { n: string; title: string; desc: string }[];
  ruleConclusion?: string;

  cycleLabel: string;
  cycleHeading: string;
  cyclePara?: string;
  cycleItems?: { fail: string; why: string }[];
  cycleSteps?: { n: string; title: string; desc: string }[];
  
  discoveryLabel?: string;
  discoveryHeading?: string;
  discoverySub?: string;
  discoveryItems?: { title: string; desc: string; gif?: string; placeholderLabel?: string }[];

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
  stages: Stage[];
  roadmapChaptersGif?: string;

  instructorLabel: string;
  instructorHeading: string;
  instructorSub?: string;
  instructorInitials: string;
  instructorName: string;
  instructorTitle: string;
  instructorBio: string[];
  instructorInsight?: string;
  instructorPhoto?: string;
  instructorBadge?: string;
  instructorHighlights?: { icon: string; title: string; desc: string }[];

  // ── Fullscreen Statement Quote ──
  quoteText?: string;
  quoteAuthor?: string;
  quoteRole?: string;

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
  bonusLabel: string;
  bonusHeading: string;
  bonusSub: string;
  bonusItems: {
    id: string;
    tag?: string;
    speedBadge?: string;
    title: string;
    desc: string;
    summary?: string;
    highlights?: { icon: string; label: string; text: string }[];
    mockupType?: "script" | "editor" | "webqr" | "support";
    audioDemo?: string;
    youtubeDemo?: string;
    gifDemo?: string;
  }[];
  footerCopyright: string;

  blocksMeta: BlocksMeta;
}

const CONTENT_SCHEMA_VERSION = 7;

export const DEFAULT_CONTENT: PageContent = {
  _v: 7,
  price: "1.990.000",
  value: "5.990.000",

  heroBadge: "🌟 CHƯƠNG TRÌNH COACHING ĐỘC QUYỀN — GIỚI HẠN 30 SUẤT / THÁNG",
  heroHeadline1: "NGỪNG CỐ GẮNG MỘT MÌNH TRONG IM LẶNG.",
  heroHeadline2: "Thấu Hiểu Bản Thân — Kết Nối Gia Đình — Kinh Tế Phát Triển.",
  heroPoem: [
    "Khám phá bản đồ cảm xúc của chính bạn",
    "Giao tiếp không bạo lực để chồng/vợ thấu hiểu",
    "Xây dựng lộ trình tài chính gia đình vững chắc"
  ],
  heroAccentLine: "Gia đình không phải là nơi để chịu đựng, mà là nơi để chữa lành.",
  heroSub: "Chương trình Coaching 8 tuần đồng hành 1-1 giúp bạn gỡ rối các bế tắc trong mối quan hệ, tái thiết lập tiếng nói chung và giải phóng áp lực tài chính. Bạn không cần phải một mình gánh vác mọi thứ nữa.",
  philosophyAssets: [
    {
      n: "01",
      icon: "🧠",
      tag: "Thấu hiểu",
      title: "Bản đồ cảm xúc",
      desc: "Gọi tên và làm chủ các mô thức tâm lý của bản thân.",
    },
    {
      n: "02",
      icon: "🗣️",
      tag: "Giao tiếp",
      title: "Giao tiếp không bạo lực",
      desc: "Cách bày tỏ nhu cầu mà không gây tổn thương hay phòng thủ.",
    },
    {
      n: "03",
      icon: "💰",
      tag: "Tài chính",
      title: "Kế hoạch tài chính chung",
      desc: "Minh bạch và cùng nhau phát triển kinh tế gia đình.",
    }
  ],
  heroCta: "ĐĂNG KÝ COACHING NGAY (1.990.000đ) →",
  heroVideoYoutubeId: "",
  heroSubPrice: "Giá niêm yết: 5.990.000 VNĐ — Tiết kiệm 67% cho 30 suất đầu tiên",

  bridgeHeading: "Sự khác biệt của Coaching 1-1",
  bridgeLabel: "TẠI SAO BẠN CẦN COACHING",
  bridgeSteps: [
    {
      n: "01",
      title: "Cá nhân hóa",
      lead: "Không phải lý thuyết suông",
      items: ["Tập trung vào vấn đề thực tế của gia đình bạn", "Giải pháp được thiết kế riêng cho hoàn cảnh của bạn"]
    }
  ],

  painLabel: "GÓC KHUẤT TRONG HÔN NHÂN",
  painHeading: "Bạn có đang thấy hình ảnh mình trong này?",
  painQuote: "'Tôi thấy cô đơn ngay trong chính ngôi nhà của mình...'",
  painSub: "Những dấu hiệu cho thấy gia đình bạn đang mất kết nối nghiêm trọng:",
  pains: [
    "❌ Cảm thấy cô đơn ngay trong chính gia đình mình",
    "❌ Vợ chồng không có tiếng nói chung, hễ nói là cãi vã",
    "❌ Áp lực tài chính khiến mâu thuẫn leo thang không hồi kết",
    "❌ Muốn thay đổi nhưng cứ lặp lại vòng xoáy tổn thương cũ"
  ],

  attentionLabel: "3 TRỤ CỘT CỦA HẠNH PHÚC",
  attentionHeading: "Giải pháp toàn diện từ gốc rễ",
  attentionPara: "Để thay đổi hiện trạng, chúng ta cần đi sâu vào 3 yếu tố cốt lõi thay vì chỉ chữa triệu chứng.",
  attentionItems: [
    { icon: "🌱", title: "Thấu hiểu bản thân", desc: "Nhận diện tổn thương và nhu cầu ẩn sâu." },
    { icon: "🤝", title: "Kết nối vợ chồng", desc: "Xóa bỏ rào cản phòng thủ, tạo không gian an toàn." },
    { icon: "📈", title: "Kinh tế gia đình", desc: "Quy hoạch lại tài chính, giải phóng áp lực tiền bạc." },
    { icon: "⭐", title: "Sự đồng hành", desc: "Có chuyên gia dẫn dắt thay vì tự mò mẫm trong vô vọng." }
  ],

  ruleLabel: "3 SAI LẦM PHỔ BIẾN",
  ruleHeading: "Tại sao những cố gắng trước đây đều thất bại?",
  ruleCards: [
    { n: "01", title: "Cố gắng sai cách", desc: "Cố gắng hy sinh nhiều hơn nhưng không hiểu rõ gốc rễ của sự bất mãn." },
    { n: "02", title: "Đổ lỗi cho đối phương", desc: "Trông chờ đối phương thay đổi thay vì tự trang bị năng lực làm chủ cảm xúc." },
    { n: "03", title: "Né tránh vấn đề tiền bạc", desc: "Sợ cãi nhau nên im lặng về tài chính, khiến gánh nặng càng thêm trầm trọng." }
  ],

  cycleLabel: "HÀNH TRÌNH CHUYỂN HÓA",
  cycleHeading: "4 Module Coaching Cốt Lõi:",
  cycleSteps: [
    { n: "01", title: "Khám Phá", desc: "Xác định mô thức bế tắc hiện tại của bạn và gia đình." },
    { n: "02", title: "Chữa Lành", desc: "Giải phóng cảm xúc dồn nén và xoa dịu tổn thương." },
    { n: "03", title: "Kết Nối", desc: "Thực hành nghệ thuật giao tiếp không bạo lực để đối thoại." },
    { n: "04", title: "Kiến Tạo", desc: "Thiết lập lại cấu trúc gia đình và kế hoạch tài chính vững vàng." }
  ],
  
  discoveryLabel: "HÀNH TRÌNH 8 TUẦN",
  discoveryHeading: "Lộ trình đồng hành từng bước:",
  discoveryItems: [
    { title: "Đánh giá chuyên sâu", desc: "Xác định rõ vấn đề cốt lõi trong tuần đầu tiên." },
    { title: "Coaching 1-1 hàng tuần", desc: "Gỡ rối từng nút thắt qua các phiên làm việc riêng tư." },
    { title: "Bài tập thực hành", desc: "Áp dụng ngay các kỹ năng vào tình huống thực tế gia đình." },
    { title: "Đo lường sự thay đổi", desc: "Theo dõi mức độ cải thiện qua các chỉ số cảm xúc." }
  ],

  solutionLabel: "KẾT QUẢ ĐỔI ĐỜI",
  solutionHeading: "Sau 8 tuần, bạn sẽ nhận được gì?",
  solutionSub: "Sự chuyển hóa rõ rệt trong mọi khía cạnh:",
  solutionItems: [
    "✅ Hiểu rõ bản thân và làm chủ được bản đồ cảm xúc cá nhân",
    "✅ Biết cách giao tiếp không bạo lực với bạn đời",
    "✅ Thiết lập được ranh giới lành mạnh và an toàn trong gia đình",
    "✅ Cùng nhau xây dựng bản kế hoạch tài chính gia đình khả thi",
    "✅ Tìm lại được sự bình yên, tiếng cười và sự ấm áp trong ngôi nhà"
  ],

  skillsLabel: "NĂNG LỰC CỐT LÕI",
  skillsHeading: "Trang bị cho bạn 4 kỹ năng sinh tồn trong hôn nhân:",
  skillCards: [
    { n: "01", title: "Trí Tuệ Cảm Xúc", desc: "Nhận diện và điều hướng cảm xúc tiêu cực trước khi nó bùng nổ thành xung đột." },
    { n: "02", title: "Giao Tiếp Không Bạo Lực", desc: "Bày tỏ mong muốn một cách chân thành khiến đối phương muốn lắng nghe thay vì phản kháng." },
    { n: "03", title: "Quy Hoạch Tài Chính", desc: "Kỹ năng phân bổ dòng tiền và thiết lập mục tiêu chung mà không gây áp lực." },
    { n: "04", title: "Sửa Chữa Mối Quan Hệ", desc: "Cách chủ động hàn gắn sau những lần bất đồng, không để rạn nứt kéo dài." }
  ],

  midCtaHeading: "Đừng để gia đình chỉ là nơi trọ cùng nhau.",
  midCtaSub: "Hãy bắt đầu hàn gắn ngay hôm nay với mức phí ưu đãi 1.990.000 VNĐ.",
  midCtaBtn: "ĐĂNG KÝ COACHING NGAY (1.990.000đ)",

  baLabel: "SỰ CHUYỂN HÓA",
  baHeading: "Khác biệt rõ rệt sau chương trình:",
  baSub: "",
  beforeLabel: "BẾ TẮC",
  afterLabel: "KẾT NỐI",
  beforeItems: [
    "Im lặng hoặc cãi vã triền miên",
    "Cảm thấy cô đơn, không được thấu hiểu",
    "Tiền bạc luôn là chủ đề nhạy cảm, gây áp lực",
    "Mọi cố gắng đều đổ sông đổ biển"
  ],
  afterItems: [
    "Thoải mái chia sẻ, đối thoại xây dựng",
    "Được lắng nghe, tôn trọng và yêu thương",
    "Tài chính minh bạch, cùng nhau hướng tới mục tiêu",
    "Có lộ trình và phương pháp rõ ràng, hiệu quả"
  ],

  roadmapLabel: "CÁCH THỨC THAM GIA",
  roadmapHeading: "Bắt đầu hành trình chuyển hóa của bạn:",
  stages: [
    { 
      n: "Bước 1", 
      time: "Ngay hôm nay",
      title: "Đăng ký & Thanh toán", 
      desc: "Hoàn tất đăng ký với mức ưu đãi 1.990.000đ để giữ suất giới hạn."
    },
    { 
      n: "Bước 2", 
      time: "Trong 24h",
      title: "Khảo sát & Đánh giá", 
      desc: "Làm bài test thấu hiểu bản thân và xác định vấn đề của gia đình."
    },
    { 
      n: "Bước 3", 
      time: "8 Tuần",
      title: "Bắt đầu Coaching", 
      desc: "Tham gia các phiên làm việc 1-1 cùng chuyên gia tâm lý."
    }
  ],

  instructorLabel: "CHUYÊN GIA ĐỒNG HÀNH",
  instructorHeading: "Về người dẫn dắt bạn",
  instructorSub: "Uy tín và Kinh nghiệm thực chứng",
  instructorInitials: "NV",
  instructorName: "Nguyễn Đức Việt",
  instructorTitle: "Chuyên Gia Tâm Lý Ứng Dụng & Life Coach",
  instructorBadge: "10+ NĂM KINH NGHIỆM",
  instructorBio: [
    "Với hơn 10 năm kinh nghiệm trong lĩnh vực tâm lý ứng dụng và coaching trị liệu.",
    "Chứng nhận ICF (International Coaching Federation) danh giá toàn cầu.",
    "Đã trực tiếp đồng hành và giúp đỡ hơn 500+ gia đình vượt qua khủng hoảng, tìm lại hạnh phúc."
  ],
  instructorHighlights: [
    { icon: "🏆", title: "Chứng nhận ICF", desc: "Tổ chức Coaching quốc tế" },
    { icon: "👨‍👩‍👧‍👦", title: "500+ Gia đình", desc: "Đã chuyển hóa thành công" },
    { icon: "⭐", title: "10+ Năm", desc: "Kinh nghiệm thực chiến" }
  ],

  quoteText: "Sự kết nối đích thực bắt đầu từ việc thấu hiểu chính mình. Khi bạn thay đổi góc nhìn, thế giới của gia đình bạn cũng sẽ đổi thay.",
  quoteAuthor: "Nguyễn Đức Việt",
  quoteRole: "Life Coach",

  bonusLabel: "QUÀ TẶNG KÈM THEO",
  bonusHeading: "Nhận trọn bộ công cụ hỗ trợ độc quyền",
  bonusSub: "Dành riêng cho 30 khách hàng đăng ký sớm nhất:",
  bonusItems: [
    {
      id: "01",
      title: "Workbook Bản Đồ Cảm Xúc",
      desc: "Tài liệu thực hành độc quyền giúp bạn theo dõi và làm chủ cảm xúc mỗi ngày."
    },
    {
      id: "02",
      title: "Nhóm Hỗ Trợ Riêng Tư",
      desc: "Tham gia cộng đồng kín, an toàn để chia sẻ và nhận tư vấn nhanh chóng từ chuyên gia."
    },
    {
      id: "03",
      title: "2 Buổi Coaching Bổ Sung",
      desc: "Miễn phí 2 buổi follow-up sau khóa học để đảm bảo bạn duy trì được kết quả bền vững."
    }
  ],

  urgencyBar: "⚠ CHỈ CÒN LẠI VÀI SUẤT TRONG THÁNG NÀY",
  ctaLabel: "// ĐỪNG TRÌ HOÃN HẠNH PHÚC",
  ctaHeading: "Hãy cho gia đình bạn một cơ hội thực sự.",
  ctaSub: "Sự thay đổi bắt đầu từ quyết định ngày hôm nay của bạn.",
  countdownLabel: "⏳ Thời gian ưu đãi còn lại:",
  valueStackTitle: "TỔNG GIÁ TRỊ BẠN SẼ NHẬN ĐƯỢC:",
  valueStack: [
    { label: "Chương trình Coaching 8 Tuần", price: "5.990.000đ" },
    { label: "Workbook Bản Đồ Cảm Xúc", price: "499.000đ" },
    { label: "Nhóm Hỗ Trợ Riêng Tư", price: "990.000đ" },
    { label: "2 Buổi Coaching Bổ Sung", price: "1.500.000đ" },
    { label: "Tổng giá trị thực tế", price: "8.979.000đ" }
  ],
  guarantee: "👑 Hoàn tiền 100% trong 7 ngày đầu nếu bạn cảm thấy phương pháp không phù hợp.",

  footerBrand: "INNER COMPASS",
  footerDot: ".",
  footerTagline: "\"Thấu Hiểu Để Kết Nối.\"",
  footerLinks: [],
  footerCopyright: siteConfig.branding.copyright,

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
