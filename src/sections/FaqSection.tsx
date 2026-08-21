import React, { useState } from "react";
import { useTheme } from "../theme";
import { useContent } from "../content";
import { FadeIn, Label, SH, Sec, Sub } from "../components/ui";

export function FaqSection() {
  const t = useTheme();
  const c = useContent();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Tôi không biết lập trình / mù công nghệ thì có cài đặt và dùng được không?",
      a: "Hoàn toàn được! Bạn không cần viết bất kỳ dòng code nào. Toàn bộ 3 công cụ đã được lắp ráp sẵn 80%, bạn chỉ việc cắm vào chạy và nhắn tin ra lệnh bằng tiếng Việt đời thường. Thầy Việt hướng dẫn chi tiết từng bước bằng video."
    },
    {
      q: "Tôi dùng máy tính cấu hình bình thường hoặc máy cũ có chạy được không?",
      a: "Được 100%. Toàn bộ mô hình xử lý trên nền tảng đám mây, không ngốn RAM hay nóng máy tính của bạn."
    },
    {
      q: "Kịch bản AI bóc ra có tự nhiên và mang đúng phong cách của tôi không?",
      a: "AI bóc sạch cấu trúc góc quay và lời thoại từ clip viral hay, sau đó nạp gu riêng và kiến thức của bạn vào để xuất kịch bản 2 cột chuẩn quay mang đúng bản sắc của bạn, không lo bị sáo rỗng."
    },
    {
      q: "Trợ lý dựng video hoạt động thế nào, có phải chỉnh lại từ đầu mỗi lần làm không?",
      a: "Không! Bạn có 2 chế độ: Chế độ 'Ăn ngay' để AI tự gọt vấp và làm phụ đề chuyển động xuất video ngay; và Chế độ 'Tùy biến theo gu' để bạn chọn kiểu chữ, cảnh trám minh họa rồi AI tự lưu làm chuẩn cho mọi video sau."
    },
    {
      q: "Ngoài 499k này, tôi có phải tốn thêm chi phí duy trì tài khoản hay phần mềm gì nữa không?",
      a: "Hoàn toàn minh bạch: Toàn bộ 3 công cụ vận hành trực tiếp trên tài khoản Google chính chủ của bạn, không phải mua phần mềm lạ hay nuôi các công cụ trôi nổi đắt đỏ ngoài thị trường. Bạn dùng trực tiếp tài khoản Google thông thường sẵn có để thực thi làm ra video, hoàn toàn không phát sinh chi phí duy trì hàng tháng."
    }
  ];

  return (
    <Sec maxWidth={860} id="faq">
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <Label>5 CÂU HỎI THƯỜNG GẶP</Label>
          <SH typed>"Liệu chương trình này có phù hợp với tôi không?"</SH>
          <Sub>Giải quyết 5 nỗi sợ lớn nhất đang ngăn cản bạn làm video:</Sub>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  background: "var(--cl-card, #ffffff)",
                  border: `1px solid ${isOpen ? "var(--cl-accent, #f59e0b)" : "var(--cl-line, rgba(0,0,0,0.08))"}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: isOpen ? "0 8px 24px -6px rgba(245, 158, 11, 0.15)" : "0 2px 8px rgba(0,0,0,0.02)",
                  transition: "all 0.25s ease"
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    color: "var(--cl-text-base, #09090b)",
                    fontSize: 16,
                    fontWeight: 600,
                    textAlign: "left",
                    cursor: "pointer",
                    fontFamily: t.fontBody,
                    gap: 12
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>🛡️</span>
                    <span style={{ lineHeight: 1.45 }}>{faq.q}</span>
                  </div>
                  <span style={{ 
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", 
                    transition: "transform 0.25s ease",
                    color: "var(--cl-accent, #f59e0b)",
                    fontSize: 18,
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    ↓
                  </span>
                </button>
                
                <div style={{ 
                  maxHeight: isOpen ? 500 : 0, 
                  opacity: isOpen ? 1 : 0,
                  transition: "all 0.3s ease",
                  padding: isOpen ? "0 24px 20px 52px" : "0 24px",
                  color: "var(--cl-text-body, #334155)",
                  lineHeight: 1.7,
                  fontSize: 15
                }}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </Sec>
  );
}
