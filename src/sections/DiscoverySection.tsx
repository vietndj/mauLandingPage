import React from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, SH, Sec, CtaButton, useIsMobile } from "../components/ui";
export function DiscoverySection() {
  const c = useContent();
  const t = useTheme();
  const isMobile = useIsMobile();
  return (
    <Sec maxWidth={860}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <Label>{c.discoveryLabel}</Label>
          <SH typed>{c.discoveryHeading}</SH>
          <p style={{ fontSize: 19, color: "var(--cl-text-muted, #888)", maxWidth: 720, margin: "16px auto 0", lineHeight: 1.75, textWrap: "balance" }}>
            {c.discoverySub}
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {c.discoveryItems.map((item, i) => {
            const isEven = i % 2 === 1;
            const isPlaceholder = item.gif ? item.gif.includes("unsplash.com") : true;
            return (
              <div key={i} style={{
                background: "var(--cl-card)", border: `1px solid var(--cl-line)`,
                borderRadius: t.cardRadius, padding: isMobile ? "24px" : "32px",
                display: "grid", gridTemplateColumns: isMobile ? "1fr" : isEven ? "0.9fr 1.1fr" : "1.1fr 0.9fr",
                gap: isMobile ? "24px" : "40px", alignItems: "center"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, order: isMobile ? 1 : isEven ? 2 : 1 }}>
                  <div style={{ fontFamily: t.fontMono, fontSize: 12, fontWeight: 500, color: "var(--cl-accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    // NGUYÊN LÝ 0{i + 1}
                  </div>
                  <h4 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(20px, 2.5vw, 24px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.018em", color: "#fff", margin: 0 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--cl-text-body, #b0b0b0)", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{
                  order: isMobile ? 2 : isEven ? 1 : 2, width: "100%", aspectRatio: "4 / 5",
                  borderRadius: 12, overflow: "hidden", border: `1px solid var(--cl-line)`,
                  position: "relative", background: "var(--cl-card2)", display: "flex",
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                }} className="discovery-gif-container">
                  <img src={item.gif} alt={item.placeholderLabel} loading="lazy" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    opacity: isPlaceholder ? 0.28 : 1, filter: isPlaceholder ? "grayscale(100%) contrast(1.1)" : "none",
                    transition: "all 0.4s ease"
                  }} />
                  {isPlaceholder && (
                    <div style={{
                      position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 30%, rgba(7,9,14,0.75) 100%)",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, textAlign: "center"
                    }}>
                      <span style={{ fontSize: 24, marginBottom: 8, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}>🎬</span>
                      <span style={{
                        fontFamily: t.fontMono, fontSize: 12, fontWeight: 500, color: "var(--cl-accent)", letterSpacing: "0.05em",
                        background: "rgba(0,240,255,0.08)", border: `1px solid rgba(0,240,255,0.2)`, padding: "8px 14px",
                        borderRadius: 20, backdropFilter: "blur(4px)", textTransform: "uppercase"
                      }}>
                        {item.placeholderLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </Sec>
  );
}

export function SolutionSection() {
  const c = useContent();
  const t = useTheme();
  return (
    <Sec maxWidth={860}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <Label>{c.solutionLabel}</Label>
          <SH typed>{c.solutionHeading}</SH>
          <p style={{ fontSize: 19, color: "var(--cl-text-muted, #888)", maxWidth: 720, margin: "16px auto 0", lineHeight: 1.75, textWrap: "balance" }}>
            {c.solutionSub}
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div style={{
          background: `linear-gradient(135deg, var(--cl-card), var(--cl-card2))`, border: `1px solid var(--cl-line)`,
          borderRadius: t.cardRadius, padding: "40px", display: "flex", flexDirection: "column", gap: 20
        }}>
          {c.solutionItems.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <span style={{ color: "var(--cl-accent)", fontSize: 24, lineHeight: 1 }}>✓</span>
              <p style={{ fontSize: 19, color: "#fff", lineHeight: 1.6, margin: 0 }}>{item}</p>
            </div>
          ))}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <CtaButton label="Nâng Cấp Gu Hình Ảnh Ngay" />
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}
