import React from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, SH, Sec } from "../components/ui";

const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";

export function InstructorSection() {
  const c = useContent();
  const t = useTheme();

  const photo = c.instructorPhoto && c.instructorPhoto.startsWith("http")
    ? c.instructorPhoto
    : DEFAULT_AVATAR;

  const badge1 = (c as any).instructorBadge1 || "Chuyên gia giàu kinh nghiệm";
  const badge2 = (c as any).instructorBadge2 || "✨ Cam kết đồng hành & hỗ trợ 1-1";
  const subtitle = (c as any).instructorSubtitle || c.instructorTitle || "ĐỘI NGŨ CHUYÊN GIA DÀNH NHIỀU NĂM NGHIÊN CỨU & ĐÓNG GÓI SẢN PHẨM THỰC CHIẾN.";

  const bioList = (c.instructorBio && c.instructorBio.length > 0)
    ? c.instructorBio
    : [
        "Chúng tôi hiểu rào cản lớn nhất của bạn không phải là thiếu thiết bị xịn hay công cụ phức tạp, mà là bị quá tải bởi những lý thuyết rườm rà.",
        "Sản phẩm này được đóng gói tối giản nhất — không có định nghĩa hàn lâm. Chỉ có những quy luật trực quan nhất để bạn áp dụng và ra kết quả ngay lập tức."
      ];

  return (
    <Sec maxWidth={860}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Label>{c.instructorLabel || "TÁC GIẢ & ĐỘI NGŨ PHÁT TRIỂN"}</Label>
          <SH typed>{c.instructorHeading || "Được Đóng Gói Bởi Đội Ngũ Chuyên Gia"}</SH>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.002) 100%)",
          border: `1px solid var(--cl-line)`, borderRadius: t.cardRadius, padding: "clamp(24px, 6vw, 48px) clamp(16px, 5vw, 40px)",
          display: "flex", gap: "clamp(24px, 6vw, 52px)", alignItems: "flex-start", flexWrap: "wrap", boxShadow: "0 20px 50px -15px rgba(0,0,0,0.4)",
        }}>
          <div style={{ flexShrink: 0, textAlign: "center", minWidth: 200, maxWidth: 240, margin: "0 auto" }}>
            <div style={{
              borderRadius: 16, overflow: "hidden", border: `2px solid ${t.accent}44`,
              boxShadow: `0 0 40px -12px ${t.accent}55`, marginBottom: 16,
              aspectRatio: "1 / 1", background: t.card2
            }}>
              <img
                src={photo}
                loading="lazy"
                alt={c.instructorName || "Avatar"}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = DEFAULT_AVATAR;
                }}
              />
            </div>
            <div style={{ fontFamily: t.fontDisplay, fontSize: 22, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.018em", color: "#fff", marginBottom: 8 }}>
              {c.instructorName || "Chuyên Gia Thực Chiến"}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
              <div style={{
                display: "inline-block", background: `${t.accent}18`, border: `1px solid ${t.accent}44`,
                borderRadius: 40, padding: "5px 14px", fontSize: 13, color: "var(--cl-accent)",
                fontWeight: 500, letterSpacing: "0.03em",
              }}>
                {badge1}
              </div>
              <div style={{
                display: "inline-block", background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.4)",
                borderRadius: 40, padding: "5px 14px", fontSize: 12, color: "#10b981",
                fontWeight: 600, letterSpacing: "0.03em",
              }}>
                {badge2}
              </div>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 0 }}>
            <p style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--cl-text-muted, #666)", fontFamily: "monospace", marginBottom: 24, lineHeight: 1.8 }}>
              {subtitle}
            </p>
            
            <div style={{ height: 1, background: "var(--cl-line)", marginBottom: 24 }} />
            
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {bioList.map((paragraph, idx) => (
                <p key={idx} style={{
                  fontSize: 17, lineHeight: 1.75,
                  color: idx % 2 === 0 ? "#94a3b8" : "#ffffff",
                  fontWeight: idx % 2 === 0 ? 400 : 500,
                  margin: 0
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}
