import React, { useState, useEffect, useRef } from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { Label, Sec } from "../components/ui";

export function RoadmapSection() {
  const c = useContent();
  const t = useTheme();
  const [activeStage, setActiveStage] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const navLabels = [
    { n: "Chặng 1", time: "3 Phút", short: "Mở Khóa & Kích Hoạt", desc: "Cắm thẳng vào Google Drive" },
    { n: "Chặng 2", time: "15 Phút", short: "Thử Nghiệm Clip Đầu Tiên", desc: "AI gọt vấp & làm chữ nhảy" },
    { n: "Chặng 3", time: "24/7", short: "Tự Tạo Web Bán Bất Cứ Thứ Gì", desc: "Nội dung & sản phẩm theo ý bạn" },
  ];

  // Observer to track which card is currently visible on the right stream as user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-stage-index"));
            if (!isNaN(index)) {
              setActiveStage(index);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: 0.15,
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [c.stages]);

  const handleNavClick = (idx: number) => {
    setActiveStage(idx);
    const targetEl = cardRefs.current[idx];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Sec maxWidth={1040} id="roadmap">
      <div className="cl-attio-scroll-layout">
        {/* ── CỘT TRÁI (Sticky Sidebar: Đứng yên khi cuộn) ── */}
        <aside className="cl-attio-sticky-sidebar">
          <div className="cl-attio-sidebar-header">
            <Label>{c.roadmapLabel || "MINH BẠCH BÀN GIAO"}</Label>
            <h2 className="cl-attio-sidebar-title">
              {c.roadmapHeading || "Toàn bộ quy trình bàn giao gói gọn trong 3 chặng:"}
            </h2>
            <p className="cl-attio-sidebar-desc">
              {c.roadmapChaptersHeading || "3 chặng từ khi bấm mua đến khi hệ thống chạy mượt trên tài khoản Google cá nhân của bạn."}
            </p>
          </div>

          <nav className="cl-attio-sidebar-nav" aria-label="Lộ trình bàn giao">
            {c.stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              const meta = navLabels[idx] || { n: stage.n, time: stage.time || "", short: stage.title, desc: "" };
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleNavClick(idx)}
                  className={`cl-attio-nav-btn ${isActive ? "is-active" : ""}`}
                >
                  <div className="cl-attio-nav-meta">
                    <span className="cl-attio-nav-tag">{meta.n}</span>
                    <span className="cl-attio-nav-time">{stage.time || meta.time}</span>
                  </div>
                  <div className="cl-attio-nav-title">{meta.short}</div>
                  <div className="cl-attio-nav-sub">{meta.desc}</div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── CỘT PHẢI (Content Stream: 3 Card xếp dọc trôi lên tự nhiên khi cuộn) ── */}
        <div className="cl-attio-content-stream">
          {c.stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            const timeLabel = stage.time || (idx === 0 ? "3 PHÚT" : idx === 1 ? "15 PHÚT" : "24/7 TỰ ĐỘNG");
            return (
              <div
                key={idx}
                id={`stage-card-${idx}`}
                data-stage-index={idx}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className={`cl-attio-stage-card ${isActive ? "is-active" : ""}`}
              >
                {/* Header thông tin chặng */}
                <div className="cl-attio-card-header">
                  <span className="cl-attio-badge">
                    <span>⚡</span> {stage.n} — {timeLabel}
                  </span>
                  {stage.sub && <span className="cl-attio-sub">{stage.sub}</span>}
                </div>

                <h3 className="cl-attio-title">{stage.title}</h3>
                <p className="cl-attio-desc">{stage.desc}</p>

                {/* Danh sách điểm thực chiến */}
                {stage.highlights && stage.highlights.length > 0 && (
                  <div className="cl-attio-highlights">
                    {stage.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="cl-attio-hl-item">
                        <span className="cl-attio-hl-icon">✓</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Khung Mockup công nghệ mô phỏng thực tế */}
                <div className="cl-attio-mockup-wrap">
                  <div className="cl-mockup-window">
                    <div className="cl-mockup-topbar">
                      <div className="cl-mockup-dots">
                        <span className="cl-mockup-dot" style={{ background: "#ff5f56" }} />
                        <span className="cl-mockup-dot" style={{ background: "#ffbd2e" }} />
                        <span className="cl-mockup-dot" style={{ background: "#27c93f" }} />
                      </div>
                      <div className="cl-mockup-title">
                        <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                        MÔ PHỎNG THỰC TẾ · {stage.n.toUpperCase()}
                      </div>
                      <div style={{ fontFamily: t.fontMono, fontSize: 10.5, color: "var(--cl-accent)", fontWeight: 700 }}>
                        {timeLabel}
                      </div>
                    </div>

                    <div className="cl-mockup-body">
                      {/* Màn hình Chặng 1 */}
                      {idx === 0 && (
                        <div>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, padding: "6px 10px", background: "rgba(255,255,255,0.03)", borderRadius: 6, border: "1px solid var(--cl-line)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--cl-text-base)", fontWeight: 600 }}>
                              <span style={{ fontSize: 14 }}>📁</span> Google Drive Cá Nhân
                            </div>
                            <span className="cl-mockup-status-pill">ĐÃ LIÊN KẾT TÀI KHOẢN GOOGLE</span>
                          </div>

                          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            <div className="cl-mockup-folder-item">
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ fontSize: 16 }}>📑</span>
                                <div>
                                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--cl-text-base)" }}>01. Bóc kịch bản clip hay</div>
                                  <div style={{ fontSize: 11, color: "var(--cl-text-muted)" }}>Bóc lời thoại & góc quay 2 cột</div>
                                </div>
                              </div>
                              <span className="cl-mockup-status-pill">LẮP SẴN 80%</span>
                            </div>

                            <div className="cl-mockup-folder-item">
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ fontSize: 16 }}>🎬</span>
                                <div>
                                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--cl-text-base)" }}>02. Trợ lý Dựng video tự động</div>
                                  <div style={{ fontSize: 11, color: "var(--cl-text-muted)" }}>Gọt đoạn vấp & làm chữ nhảy</div>
                                </div>
                              </div>
                              <span className="cl-mockup-status-pill">LẮP SẴN 80%</span>
                            </div>

                            <div className="cl-mockup-folder-item">
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ fontSize: 16 }}>💳</span>
                                <div>
                                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--cl-text-base)" }}>03. Web bán hàng tự động</div>
                                  <div style={{ fontSize: 11, color: "var(--cl-text-muted)" }}>Tự nhận VietQR & gửi bài 24/7</div>
                                </div>
                              </div>
                              <span className="cl-mockup-status-pill">LẮP SẴN 80%</span>
                            </div>
                          </div>

                          <div style={{ marginTop: 10, padding: "8px 10px", background: "rgba(245, 158, 11, 0.08)", borderRadius: 6, border: "1px solid rgba(245, 158, 11, 0.25)", fontSize: 11.5, color: "var(--cl-text-body)", display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ color: "var(--cl-accent)", fontSize: 13 }}>⚡</span>
                            <span>Không cần cài app lạ. Vận hành trực tiếp trên lõi Google Gemini quen thuộc.</span>
                          </div>
                        </div>
                      )}

                      {/* Màn hình Chặng 2 */}
                      {idx === 1 && (
                        <div>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--cl-text-base)", display: "flex", alignItems: "center", gap: 6 }}>
                              <span>⚡</span> ĐANG TỰ ĐỘNG XỬ LÝ CLIP ĐẦU TAY
                            </div>
                            <span className="cl-mockup-status-pill" style={{ background: "rgba(245, 158, 11, 0.15)", color: "var(--cl-accent)", borderColor: "rgba(245, 158, 11, 0.3)" }}>
                              AI ĐANG GỌT VẤP
                            </span>
                          </div>

                          <div style={{ background: "rgba(0, 0, 0, 0.5)", borderRadius: 8, border: "1px solid var(--cl-line)", padding: "10px", marginBottom: 8, textAlign: "center" }}>
                            <div style={{ fontSize: 10, fontFamily: t.fontMono, color: "var(--cl-accent)", letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
                              [ KHUNG HÌNH VIDEO 9:16 ]
                            </div>
                            <div style={{ fontSize: 14.5, fontWeight: 700, color: "#fff", background: "rgba(245, 158, 11, 0.2)", display: "inline-block", padding: "4px 10px", borderRadius: 6, border: "1px solid rgba(245, 158, 11, 0.4)", margin: "2px 0" }}>
                              BÍ QUYẾT LÀM VIDEO 15 PHÚT ✨
                            </div>
                            <div style={{ fontSize: 11, color: "#a0aec0", marginTop: 2 }}>
                              (AI tự đồng bộ phụ đề chữ nhảy theo từng từ nói)
                            </div>
                          </div>

                          <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "8px 10px", borderRadius: 6, border: "1px solid var(--cl-line)", marginBottom: 8 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: "var(--cl-text-muted)", marginBottom: 4, fontFamily: t.fontMono }}>
                              <span>TIMELINE ÂM THANH</span>
                              <span style={{ color: "#10b981" }}>ĐÃ CẮT 14 ĐOẠN NGẬP NGỪNG</span>
                            </div>
                            <div style={{ display: "flex", gap: 3, height: 16, alignItems: "center" }}>
                              <div style={{ flex: 2, height: "80%", background: "var(--cl-accent)", borderRadius: 2 }} />
                              <div style={{ flex: 1, height: "30%", background: "#ef4444", borderRadius: 2, opacity: 0.4 }} />
                              <div style={{ flex: 3, height: "100%", background: "var(--cl-accent)", borderRadius: 2 }} />
                              <div style={{ flex: 1, height: "25%", background: "#ef4444", borderRadius: 2, opacity: 0.4 }} />
                              <div style={{ flex: 4, height: "85%", background: "var(--cl-accent)", borderRadius: 2 }} />
                            </div>
                          </div>

                          <div style={{ padding: "6px 10px", background: "rgba(16, 185, 129, 0.1)", borderRadius: 6, border: "1px solid rgba(16, 185, 129, 0.3)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11.5, color: "#10b981" }}>
                            <span>✅ Đã xuất: Clip_Dau_Tay_60s.mp4</span>
                            <span style={{ fontWeight: 700 }}>ĐĂNG KÊNH NGAY</span>
                          </div>
                        </div>
                      )}

                      {/* Màn hình Chặng 3 */}
                      {idx === 2 && (
                        <div>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--cl-text-base)", display: "flex", alignItems: "center", gap: 6 }}>
                              <span>💳</span> WEB NHẬN TIỀN TỰ ĐỘNG 24/7
                            </div>
                            <span className="cl-mockup-status-pill">ĐANG CHẠY 24/7</span>
                          </div>

                          <div className="cl-mockup-toast" style={{ margin: "6px 0", padding: "10px 12px" }}>
                            <div style={{ fontSize: 18 }}>🔔</div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 13, fontWeight: 700, color: "#10b981" }}>
                                TING TING: +499.000đ VỀ TÀI KHOẢN
                              </div>
                              <div style={{ fontSize: 11, color: "var(--cl-text-muted)", marginTop: 1 }}>
                                Khách chuyển khoản tự động lúc 02:15 AM
                              </div>
                            </div>
                          </div>

                          <div style={{ margin: "8px 0", padding: "8px 10px", background: "rgba(255, 255, 255, 0.02)", borderRadius: 6, border: "1px solid var(--cl-line)", fontSize: 11.5, color: "var(--cl-text-body)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 600, color: "var(--cl-text-base)", marginBottom: 2 }}>
                              <span>✉️</span> Web tự động gửi link học & cấp quyền trong 3 giây
                            </div>
                            <div style={{ fontSize: 10.5, color: "var(--cl-text-muted)" }}>
                              Bạn không cần thức đêm canh check tin nhắn hay gửi link thủ công.
                            </div>
                          </div>

                          <div style={{ padding: "8px 10px", background: "rgba(245, 158, 11, 0.08)", borderRadius: 6, border: "1px solid rgba(245, 158, 11, 0.25)", display: "flex", gap: 8, alignItems: "flex-start" }}>
                            <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--cl-accent)", color: "var(--cl-accent-text)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 10.5, flexShrink: 0 }}>
                              NĐV
                            </div>
                            <div style={{ fontSize: 11.5, lineHeight: 1.5, color: "var(--cl-text-base)" }}>
                              <span style={{ fontWeight: 600, color: "var(--cl-accent)" }}>Thầy Nguyễn Đức Việt: </span>
                              "Trong quá trình làm vướng chỗ nào, cứ nhắn vào nhóm thực chiến, thầy hướng dẫn trực tiếp cho bạn nhé!"
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Sec>
  );
}
