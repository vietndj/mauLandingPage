import { useEffect, useState } from "react";

const PROOFS = [
  "Chị Minh Anh (HN) vừa đăng ký Coaching thành công 🌟",
  "Anh Tuấn & Chị Hương vừa tham gia chương trình Kết Nối Gia Đình 🤝",
  "Chị Ngọc Thảo (Đà Nẵng) vừa đặt lịch đánh giá chuyên sâu vòng 1 🗓️",
  "Anh Hoàng (HCM) vừa thanh toán thành công khóa Coaching 8 tuần 💳",
  "Chị Lan Phương (Hải Phòng) vừa nhận Workbook Bản Đồ Cảm Xúc 📖",
  "Gia đình anh chị Tú (Cần Thơ) đã bắt đầu tuần thứ 2 của lộ trình 🚀",
  "Chị Thu Thủy (Hà Nội) vừa chia sẻ cảm nhận tích cực trong Nhóm Kín 💬",
  "Vợ chồng anh Dũng (Bình Dương) vừa hoàn thành bài tập giao tiếp không bạo lực 🗣️",
  "Chị Mai Linh (Vũng Tàu) vừa thanh toán thành công qua chuyển khoản TPBank 📩",
  "Anh Đức Hùng (Nha Trang) vừa tham gia cộng đồng chia sẻ tài chính gia đình 💰",
  "Chị Kim Oanh (HCM) vừa kết thúc phiên Coaching cá nhân hóa đầu tiên 🌱",
  "Chị Hạnh (Hà Nội) vừa giữ suất tham gia giới hạn của tháng này ⏱️",
  "Anh Quang Bảo (Đà Lạt) vừa phản hồi sự cải thiện rõ rệt sau 4 tuần 📈",
  "Vợ chồng chị Thanh Huyền (Đồng Nai) vừa thiết lập lại kế hoạch tài chính chung 📊",
  "Chị Bích Ngọc (Quảng Ninh) vừa tải thành công tài liệu hỗ trợ tâm lý 🧠"
];

const TIME_LABELS = [
  "vừa xong",
  "vài giây trước",
  "1 phút trước",
  "2 phút trước",
  "3 phút trước"
];

export default function LiveSocialProof() {
  // Tạm thời tắt popup người mua hàng để tập trung làm nội dung
  return null;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLabel, setTimeLabel] = useState("vừa xong");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let active = true;
    let nextTimeout: any;

    const showNext = () => {
      if (!active) return;
      
      setCurrentIdx(Math.floor(Math.random() * PROOFS.length));
      setTimeLabel(TIME_LABELS[Math.floor(Math.random() * TIME_LABELS.length)]);
      setVisible(true);

      // Hide after 4 seconds
      nextTimeout = setTimeout(() => {
        setVisible(false);

        // Wait random 45 to 90 seconds before showing next
        const nextDelay = Math.floor(Math.random() * 45000) + 45000; // 45s to 90s
        nextTimeout = setTimeout(showNext, nextDelay);
      }, 4000);
    };

    // Initial delay: 25 seconds (25000ms)
    const initialTimeout = setTimeout(showNext, 25000);

    return () => {
      active = false;
      clearTimeout(initialTimeout);
      clearTimeout(nextTimeout);
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "clamp(12px, 3vw, 24px)",
        left: "clamp(12px, 3vw, 24px)",
        zIndex: 9999,
        maxWidth: "min(340px, calc(100% - 24px))",
        width: "auto",
        background: "rgba(18, 22, 33, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 14,
        padding: "14px 18px 14px 14px",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        transform: visible ? "translateY(0) scale(1)" : "translateY(100px) scale(0.95)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
      }}
    >
      {/* Pulse Green Dot */}
      <div style={{ 
        position: "relative", 
        width: 40, 
        height: 40, 
        borderRadius: "50%", 
        background: "rgba(255, 255, 255, 0.04)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        flexShrink: 0 
      }}>
        <span style={{ fontSize: 18 }}>💡</span>
        <span
          style={{
            position: "absolute",
            bottom: 1,
            right: 1,
            width: 8,
            height: 8,
            background: "#10b981",
            borderRadius: "50%",
            border: "2px solid #121621",
            boxShadow: "0 0 6px #10b981",
            animation: "tw-pulse 2.2s infinite"
          }}
        />
      </div>

      {/* Message Info */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#f8fafc", lineHeight: 1.45, overflowWrap: "break-word" }}>
          {PROOFS[currentIdx]}
        </p>
        <span style={{ fontSize: 10.5, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 3, display: "inline-block" }}>
          {timeLabel}
        </span>
      </div>

      {/* Close button */}
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => setDismissed(true), 500);
        }}
        style={{
          position: "absolute",
          top: 6,
          right: 6,
          background: "none",
          border: "none",
          color: "#64748b",
          fontSize: 16,
          cursor: "pointer",
          padding: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          transition: "color 0.2s"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#cbd5e1")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
      >
        ×
      </button>

      {/* Keyframe stylesheet injection */}
      <style>{`
        @keyframes tw-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
