import React from "react";
import { useContent } from "../content";
import { FadeIn } from "../components/ui";

export function QuoteSection() {
  const c = useContent();

  const quoteText = c.quoteText || "AI không thay thế bạn. AI giúp bạn nhân bản năng lực sáng tạo và tự động hóa 80% công việc lặp lại để bạn tập trung tạo ra giá trị.";
  const quoteAuthor = c.quoteAuthor || c.instructorName || "Nguyễn Đức Việt";
  const quoteRole = c.quoteRole || c.instructorTitle || "Kỹ sư Bách Khoa · 15 năm Giảng viên FPT Arena · Founder Fedu.vn";

  return (
    <section
      className="cl-quote-fullscreen"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.15) 1.2px, transparent 1.2px)",
        backgroundSize: "24px 24px",
        backgroundPosition: "center center",
        padding: "clamp(80px, 12vh, 160px) clamp(20px, 5vw, 48px)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <FadeIn>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Main Quote in Acta font */}
          <blockquote
            style={{
              fontFamily: "'Acta', 'SVN-Acta', Georgia, serif",
              fontSize: "clamp(32px, 4.8vw, 56px)",
              lineHeight: 1.25,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              margin: 0,
              padding: 0,
              whiteSpace: "pre-line",
              textWrap: "balance",
            }}
          >
            “{quoteText}”
          </blockquote>

          {/* Author Meta */}
          <div
            style={{
              marginTop: "clamp(36px, 6vh, 52px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                fontFamily: "'Aeonik', 'Inter', system-ui, sans-serif",
                fontSize: "clamp(15px, 1.8vw, 17px)",
                fontWeight: 600,
                color: "#0f172a",
                letterSpacing: "-0.01em",
              }}
            >
              {quoteAuthor}
            </div>
            <div
              style={{
                fontFamily: "'Aeonik', 'Inter', system-ui, sans-serif",
                fontSize: "clamp(13px, 1.5vw, 14.5px)",
                fontWeight: 400,
                color: "#64748b",
                letterSpacing: "-0.01em",
              }}
            >
              {quoteRole}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
