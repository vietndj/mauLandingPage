import React, { type RefObject } from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, ScrollTypewriter, MediaSection, Sub, useIsMobile } from "../components/ui";

export function DemoPhilosophySection({ demoCardRef }: { demoCardRef?: RefObject<HTMLDivElement | null> }) {
  const c = useContent();
  const t = useTheme();
  const isMobile = useIsMobile();

  return (
    <>
      <section style={{ position: "relative", textAlign: "center", padding: "0 20px 0", maxWidth: 960, margin: "0 auto" }}>
        {/* Video Demo Real */}
        {(c as any).heroVideoYoutubeId && (
          <div 
            ref={demoCardRef}
            style={{
              maxWidth: 420, width: "100%", margin: "0 auto 72px",
              background: "#08080a", border: "clamp(4px, 2vw, 10px) solid #141416", borderRadius: "clamp(24px, 6vw, 48px)",
              padding: 0, boxShadow: `0 32px 60px -16px rgba(0,0,0,0.3), 0 0 40px -10px ${t.accent}22`,
              position: "relative", overflow: "hidden",
              zIndex: 10,
              willChange: "transform, opacity",
              transformOrigin: "center top",
            }}
          >
            <div style={{
              position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
              width: 90, height: 20, background: "#000", borderRadius: 10, zIndex: 10, border: "1.5px solid #222228",
            }} />
            <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden", borderRadius: 38, background: "#000" }}>
              <iframe
                src={`https://www.youtube.com/embed/${(c as any).heroVideoYoutubeId}?rel=0&modestbranding=1&showinfo=0`}
                title="Giới thiệu khóa học"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Mini Demo Video (Placeholder) */}
        {!(c as any).heroVideoYoutubeId && (
          <div 
            ref={demoCardRef}
            style={{ 
              background: "var(--cl-card)", 
              border: `1px dashed var(--cl-line)`, 
              borderRadius: 16, 
              padding: "40px 20px", 
              position: "relative",
              zIndex: 10,
              boxShadow: `0 20px 40px -10px rgba(0,0,0,0.05)`,
              willChange: "transform, opacity",
              transformOrigin: "center top",
            }}
          >
            <h3 style={{ color: "var(--cl-text-base)", fontSize: 16, marginBottom: 8 }}>[Chỗ trống Video Demo Timelapse 5 Phút]</h3>
            <p style={{ color: "var(--cl-text-muted)", fontSize: 14, margin: 0, maxWidth: 500, marginInline: "auto" }}>
              Tự động hóa 80% công việc tay chân: Bóc kịch bản clip hay, dựng video tự động và thu tiền tự động.
            </p>
          </div>
        )}
      </section>
      
      <MediaSection blockId="hero" />

      {/* 1B: Triết lý */}
      <section style={{ 
        position: "relative", padding: "clamp(48px, 10vw, 100px) clamp(16px, 4vw, 24px)", maxWidth: 800, margin: "0 auto", 
        textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${t.accent}04 1px, transparent 1px), linear-gradient(90deg, ${t.accent}04 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 100%)",
        }} />
        <FadeIn>
          <div className="cl-label">
            <span style={{ opacity: 0.4 }}>// </span>Luật chơi mới của Creator
          </div>
          <h2 className="cl-sh" style={{ fontFamily: t.fontDisplay }}>
            <ScrollTypewriter text={c.heroAccentLine} speed={7} />
          </h2>
          <Sub>{c.heroSub}</Sub>

          {/* 3 Mini Capsule Cards (Tinh gọn, thanh thoát, reveal cốt lõi) */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 16,
            width: "100%",
            maxWidth: 860,
            margin: "0 auto",
            textAlign: "left"
          }}>
            {[
              {
                n: "01",
                icon: "📝",
                title: "Bóc kịch bản clip hay",
                desc: "Dán link clip viral đang hot ➔ AI tự bóc sạch lời nói & góc quay thành kịch bản 2 cột trong 5 phút để quay ngay."
              },
              {
                n: "02",
                icon: "⚡",
                title: "Trợ lý Dựng video tự động",
                desc: "Ném file video thô vào ➔ AI tự gọt sạch ngập ngừng, làm phụ đề chuyển động và lưu mẫu chuẩn cho các video sau."
              },
              {
                n: "03",
                icon: "💳",
                title: "Trang web bán hàng 24/7",
                desc: "Gắn mẫu web có sẵn VietQR ➔ Khách quét mã là tiền về tài khoản, web tự gửi bài học 24/7 không cần trực chat."
              }
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--cl-card, #ffffff)",
                  border: "1px solid var(--cl-line, rgba(0, 0, 0, 0.08))",
                  borderRadius: 14,
                  padding: isMobile ? "18px 16px" : "20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  boxShadow: "0 4px 16px -4px rgba(0, 0, 0, 0.03)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.35)";
                  e.currentTarget.style.boxShadow = "0 10px 24px -6px rgba(245, 158, 11, 0.12)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "var(--cl-line, rgba(0, 0, 0, 0.08))";
                  e.currentTarget.style.boxShadow = "0 4px 16px -4px rgba(0, 0, 0, 0.03)";
                }}
              >
                {/* Card Header: Badge + Title */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    fontFamily: t.fontMono,
                    fontSize: 11.5,
                    fontWeight: 700,
                    color: "#92400e",
                    background: "rgba(245, 158, 11, 0.1)",
                    border: "1px solid rgba(245, 158, 11, 0.2)",
                    padding: "2px 7px",
                    borderRadius: 6,
                    flexShrink: 0
                  }}>
                    {card.n}
                  </span>
                  <span style={{ fontSize: 16 }}>{card.icon}</span>
                  <h3 style={{
                    margin: 0,
                    fontSize: "clamp(15px, 1.6vw, 16.5px)",
                    fontWeight: 700,
                    color: "var(--cl-text-base, #09090b)",
                    lineHeight: 1.35
                  }}>
                    {card.title}
                  </h3>
                </div>

                {/* Card Description (1 câu duy nhất) */}
                <p style={{
                  margin: 0,
                  fontSize: "clamp(13px, 1.3vw, 13.8px)",
                  lineHeight: 1.65,
                  color: "var(--cl-text-body, #475569)"
                }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
