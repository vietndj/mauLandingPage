import React from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, SH, Sec, AppYTEmbed } from "../components/ui";

export function BeforeAfterSection() {
  const c = useContent();
  const t = useTheme();
  return (
    <Sec maxWidth={860}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Label>{c.baLabel}</Label>
          <SH typed>{c.baHeading}</SH>
          {c.baSub && <p style={{ fontSize: "clamp(15px, 3.8vw, 19px)", color: "var(--cl-text-muted, #888)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>{c.baSub}</p>}
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
          <div style={{ maxWidth: 420, width: "100%", margin: "32px auto", borderRadius: 32, overflow: "hidden", border: `2px solid ${t.accent}44`, boxShadow: `0 0 30px -10px ${t.accent}44` }}>
            {c.baVideoUrl ? (
              <AppYTEmbed url={c.baVideoUrl} />
            ) : (
              <div style={{
                aspectRatio: "9 / 16",
                background: "rgba(0, 0, 0, 0.5)",
                border: `2px dashed ${t.accent}`,
                borderRadius: 30,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "36px 20px",
                textAlign: "center"
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: `${t.accent}18`,
                  border: `1px solid ${t.accent}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16
                }}>
                  <span style={{ fontSize: 26, color: t.accent, marginLeft: 3 }}>▶</span>
                </div>
                <div style={{
                  fontFamily: t.fontMono, fontSize: 13, fontWeight: 600,
                  color: t.accent, letterSpacing: "0.08em",
                  textTransform: "uppercase", marginBottom: 8
                }}>
                  🎬 NHẬP LINK VIDEO DEMO
                </div>
                <p style={{ fontSize: 13, color: "var(--cl-text-muted, #888)", margin: 0, lineHeight: 1.6, maxWidth: 280 }}>
                  Thêm link YouTube / Shorts vào <code style={{ color: "#fff", background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: 4 }}>baVideoUrl</code> trong <code style={{ color: "#fff", background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: 4 }}>content.ts</code>
                </p>
              </div>
            )}
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32,
            width: "100%", maxWidth: 720, margin: "0 auto",
          }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.01)", border: "1px solid rgba(255, 255, 255, 0.03)",
              borderRadius: t.cardRadius, padding: "24px 28px",
            }}>
              <div style={{
                fontFamily: t.fontMono, fontSize: 12, letterSpacing: "0.1em", color: "var(--cl-danger)",
                fontWeight: 500, textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 8,
              }}>
                <span>✕</span> {c.beforeLabel}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {c.beforeItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", textAlign: "left" }}>
                    <span style={{ color: "var(--cl-danger)" }}>—</span>
                    <span style={{ fontSize: 15, color: "#888", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: `${t.accent}04`, border: `1px solid ${t.accent}22`,
              borderRadius: t.cardRadius, padding: "24px 28px",
            }}>
              <div style={{
                fontFamily: t.fontMono, fontSize: 12, letterSpacing: "0.1em", color: "var(--cl-accent)",
                fontWeight: 500, textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 8,
              }}>
                <span>✓</span> {c.afterLabel}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {c.afterItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", textAlign: "left" }}>
                    <span style={{ color: "var(--cl-accent)" }}>✓</span>
                    <span style={{ fontSize: 15, color: "#fff", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}
