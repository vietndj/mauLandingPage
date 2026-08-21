import React from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, Sec, Sub } from "../components/ui";

export function InstructorSection() {
  const c = useContent();
  const t = useTheme();

  const stats = [
    { num: "1.000+", label: "Học viên & Creator ứng dụng" },
    { num: "15 năm", label: "Giảng viên FPT Arena Multimedia" },
    { num: "100+", label: "Workflow AI thực chiến" },
  ];

  const highlights = c.instructorHighlights ?? [
    {
      icon: "🎯",
      title: "Biến Gemini thành thợ thực thi:",
      desc: "Tự bóc kịch bản viral, tự gọt vấp và tự lên chữ nhảy — không lý thuyết suông."
    },
    {
      icon: "⚡",
      title: "Làm sẵn 80% — Cắm là chạy:",
      desc: "Vận hành thẳng trên Google cá nhân, chỉ cần nhắn lệnh tiếng Việt là AI làm thay."
    },
    {
      icon: "🤝",
      title: "Trực tiếp gỡ vướng khi thực hành:",
      desc: "Kẹt thao tác nào nhắn là được chỉ ngay, không để bạn phải tự mò mẫm một mình."
    }
  ];

  return (
    <Sec maxWidth={940}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <Label>{c.instructorLabel}</Label>
          <h2 className="cl-sh" style={{ margin: "0 auto 16px", maxWidth: 820 }}>
            <span style={{
              display: "inline-block",
              fontSize: "clamp(16px, 2vw, 21px)",
              fontFamily: "var(--cl-font-body)",
              fontWeight: 450,
              color: "var(--cl-text-muted)",
              textDecoration: "line-through",
              textDecorationColor: "rgba(239, 68, 68, 0.7)",
              textDecorationThickness: "1.5px",
              opacity: 0.8,
              marginBottom: 10,
              letterSpacing: "normal"
            }}>
              Mình không nói mấy thứ lý thuyết nhảm nhí hay mẹo vặt mất thời gian
            </span>
            <span style={{ display: "block", color: "var(--cl-text-base)", fontSize: "clamp(24px, 3.8vw, 44px)", lineHeight: 1.25 }}>
              Vào thẳng vấn đề để bạn <em className="cl-serif-accent">làm chủ công cụ</em> ngay hôm nay.
            </span>
          </h2>
          {c.instructorSub && (
            <Sub style={{ maxWidth: 660, margin: "0 auto 12px" }}>
              {c.instructorSub}
            </Sub>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="cl-glow-card" style={{
          padding: "clamp(24px, 5vw, 40px)",
          display: "flex",
          gap: "clamp(24px, 4vw, 40px)",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}>
          {/* Avatar / Profile Column */}
          <div style={{ flexShrink: 0, textAlign: "center", width: 220, margin: "0 auto" }}>
            <div style={{
              borderRadius: 24,
              overflow: "hidden",
              border: `2px solid ${t.accent}55`,
              boxShadow: `0 0 30px -6px ${t.accent}33`,
              marginBottom: 14,
              background: "#14151f"
            }}>
              <img
                src={c.instructorPhoto ?? "/instructor.jpg"}
                loading="lazy"
                alt={c.instructorName}
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ fontFamily: t.fontDisplay, fontSize: 21, fontWeight: 700, color: "var(--cl-text-base, #111827)", marginBottom: 4 }}>
              {c.instructorName}
            </div>
            <div style={{ fontSize: 13, color: t.accent, fontWeight: 600, marginBottom: 12, lineHeight: 1.4 }}>
              {c.instructorTitle}
            </div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              borderRadius: 30,
              padding: "5px 14px",
              fontSize: 12.5,
              color: "#10b981",
              fontWeight: 600,
            }}>
              {c.instructorBadge ?? "💬 Trực Tiếp Giải Đáp Qua Zalo"}
            </div>
          </div>

          {/* Details & Highlights Column */}
          <div style={{ flex: 1, minWidth: 290, display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Bio Lead */}
            {c.instructorBio?.[0] && (
              <p style={{
                fontSize: 15.5,
                lineHeight: 1.65,
                color: "var(--cl-text-base, #111827)",
                fontWeight: 500,
                margin: 0,
              }}>
                {c.instructorBio[0]}
              </p>
            )}

            {/* 3 Key Highlight Action Blocks */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {highlights.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 14px",
                    borderRadius: 12,
                    background: "rgba(245, 158, 11, 0.04)",
                    border: "1px solid rgba(245, 158, 11, 0.12)",
                  }}
                >
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "rgba(245, 158, 11, 0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    flexShrink: 0,
                    marginTop: 1,
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.55 }}>
                    <strong style={{ color: "var(--cl-text-base, #111827)", fontWeight: 700 }}>{item.title} </strong>
                    <span style={{ color: "var(--cl-text-body, #64748b)" }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
              marginTop: 6,
              paddingTop: 16,
              borderTop: "1px solid var(--cl-line, #e2e8f0)",
              textAlign: "center"
            }}>
              {stats.map((st, i) => (
                <div key={i} style={{ padding: "6px 4px" }}>
                  <div style={{ fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 800, color: t.accent, lineHeight: 1.2 }}>
                    {st.num}
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--cl-text-muted, #888)", marginTop: 4, lineHeight: 1.3 }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}
