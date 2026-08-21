import React from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, SH, Sec, Sub } from "../components/ui";

export function AttentionSection() {
  const c = useContent();
  const t = useTheme();

  const choices = [
    {
      badge: "Lựa chọn 1",
      title: "Tự mày mò Prompt dạo trên mạng",
      cost: "Mất 3 - 6 tháng + Kết quả sáo rỗng",
      desc: "Copy các câu prompt chung chung trên mạng. Nhận về kịch bản vô hồn, không đúng góc nhìn chuyên môn, quay xong không ai xem.",
      isBest: false,
      tag: "❌ Mất Thời Gian"
    },
    {
      badge: "Lựa chọn 2",
      title: "Mua phần mềm lạ & Tool đắt đỏ",
      cost: "5.000.000 – 10.000.000 VNĐ / năm",
      desc: "Tốn tiền mua hàng loạt phần mềm nước ngoài rời rạc. Cài đặt phức tạp, tốn phí duy trì hàng tháng nhưng không giải quyết việc thực tế.",
      isBest: false,
      tag: "⚠️ Tốn Chi Phí"
    },
    {
      badge: "Lựa chọn 3 — KHUYÊN DÙNG",
      title: "Bộ 3 Công Cụ Làm Sẵn Thực Chiến",
      cost: `Chỉ ${c.price} VNĐ (Tổng giá trị ${c.value})`,
      desc: "Nhận bàn giao 3 công cụ đã lắp ráp sẵn 80%: Bóc kịch bản clip hay + Trợ lý Dựng video tự động + Web bán hàng VietQR tự động. Nhắn lệnh tiếng Việt là chạy, kèm hỗ trợ 1-1 từ Thầy Việt.",
      isBest: true,
      tag: "🏆 Tối Ưu Nhất"
    }
  ];

  return (
    <Sec maxWidth={960}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Label>{c.attentionLabel}</Label>
          <SH typed>{c.attentionHeading}</SH>
          <Sub>{c.attentionPara}</Sub>
        </div>
      </FadeIn>

      {/* ── 3 Choices Comparison Cards ── */}
      <FadeIn delay={100}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 48
        }}>
          {choices.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: item.isBest ? "rgba(243, 103, 22, 0.06)" : "rgba(255, 255, 255, 0.02)",
                border: item.isBest ? `2px solid ${t.accent}` : `1px solid rgba(255, 255, 255, 0.08)`,
                borderRadius: 24,
                padding: "32px 24px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: item.isBest ? `0 20px 50px -15px ${t.accent}40, 0 0 30px ${t.accent}20` : "none",
                transform: item.isBest ? "scale(1.02)" : "none",
                transition: "all 0.3s ease"
              }}
            >
              {item.isBest && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: t.accent, color: "#fff", padding: "4px 16px", borderRadius: 20,
                  fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase"
                }}>
                  GIẢI PHÁP TỐI ƯU NHẤT
                </div>
              )}
              <div style={{ fontSize: 12, fontWeight: 700, color: item.isBest ? t.accent : "#888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                {item.badge}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--cl-text-base, #111827)", marginBottom: 12, lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <div style={{
                fontSize: 15, fontWeight: 700, color: t.accent,
                background: `${t.accent}15`,
                padding: "8px 14px", borderRadius: 10, marginBottom: 16, display: "inline-block"
              }}>
                {item.cost}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--cl-text-body, #b0b0b0)", margin: 0, flexGrow: 1 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── Đoạn Mở Ngược: Bật Mí Công Nghệ Lõi Gemini ── */}
      <FadeIn delay={150}>
        <div style={{
          background: "var(--cl-card)",
          border: `1px solid var(--cl-accent)`,
          borderRadius: 20,
          padding: "clamp(24px, 4vw, 32px)",
          maxWidth: 960,
          margin: "0 auto 48px",
          position: "relative",
          boxShadow: "0 12px 32px -12px rgba(245, 158, 11, 0.15)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 22 }}>💡</span>
            <h4 style={{ margin: 0, fontSize: "clamp(16px, 3.5vw, 19px)", fontWeight: 700, color: "var(--cl-text-base)" }}>
              "Tôi có phải mua phần mềm lạ đắt tiền hay học công cụ phức tạp không?"
            </h4>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--cl-text-body)", margin: 0 }}>
            <strong>Không!</strong> Toàn bộ 3 công cụ này đều vận hành trực tiếp trên <strong>lõi Google Gemini quen thuộc</strong> bằng chính tài khoản Google của bạn. Không dùng phần mềm lạ làm nặng máy, không phụ thuộc các công cụ trôi nổi ngoài thị trường.<br/><br/>
            Sự khác biệt là: Thay vì lên chat hỏi đáp vu vơ vài câu văn dài dòng vô dụng, chương trình chỉ bạn cách <strong>dùng lõi Gemini để làm thợ thực thi</strong> — bạn chỉ việc nhắn lệnh bằng tiếng Việt đời thường, AI tự động làm thay toàn bộ việc tay chân từ A đến Z.
          </p>
        </div>
      </FadeIn>

      {/* ── Key Differences Checklist ── */}
      <FadeIn delay={200}>
        <div className="cl-glow-card" style={{ padding: "36px clamp(20px, 4vw, 40px)", maxWidth: 760, margin: "0 auto" }}>
          <h4 style={{ textAlign: "center", fontSize: 18, fontWeight: 700, color: "var(--cl-text-base, #111827)", marginBottom: 24 }}>
            {c.attentionComparisonTitle || "Thời Đại Thừa Thãi: Mọi Công Cụ Đều Vô Nghĩa Nếu Bạn Không Thể Tùy Biến"}
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {c.attentionItems.map((item: any, i: number) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                paddingBottom: 16,
                borderBottom: i < c.attentionItems.length - 1 ? `1px solid var(--cl-line)` : "none"
              }}>
                <div style={{
                  padding: "6px 12px", borderRadius: 8, background: "rgba(239, 68, 68, 0.12)",
                  color: "var(--cl-danger)", fontSize: 13, fontWeight: 600, flexShrink: 0
                }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--cl-text-base, #111827)", fontWeight: 500 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}
