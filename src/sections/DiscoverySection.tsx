import React, { useState } from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, SH, Sec, CtaButton, Sub, useIsMobile } from "../components/ui";

export function SolutionsSection() {
  const t = useTheme();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "01. Bóc Kịch Bản Clip Hay",
      tag: "// BÀI TOÁN & GIẢI PHÁP 01 • CHẠY TRÊN GOOGLE GEMINI",
      subtitle: "Thấy clip nào trên mạng hay, dán link vào là có ngay kịch bản 2 cột để quay theo",
      pain: "Mất hàng giờ lướt TikTok/Reels trong vô định. Thấy video nước ngoài triệu view rất cuốn nhưng không biết làm sao học theo. Tự ngồi viết kịch bản thì cắn bút cả buổi tối bí ý tưởng, copy văn mẫu trên mạng thì đọc lên sáo rỗng, gượng gạo.",
      solution: "Cài sẵn trên Google Gemini: Bạn chỉ cần ném link clip viral vào → AI tự nghe tiếng, dịch nghĩa và bóc sạch cấu trúc 3 giây đầu nói gì, đoạn giữa diễn giải ra sao. Sau đó nạp kinh nghiệm của bạn vào để xuất ra kịch bản 2 cột (Lời thoại tiếng Việt + Chỉ dẫn góc quay, cảnh trám) sẵn sàng bấm máy trong 3 phút.",
      leftLabel: "LÀM TAY MÒ MẪM",
      leftDesc: "Cắn bút 2 tiếng nghĩ ý tưởng, copy văn mẫu làm video nhạt nhòa, không ai nhớ đến bạn.",
      rightLabel: "GEMINI LÀM THAY",
      rightDesc: "3 phút có ngay kịch bản 2 cột chuẩn chỉnh, giữ trọn 100% chuyên môn và chất riêng của bạn.",
      icon: "🎯",
      demoBadge: "GEMINI SCRIPT & TREND SPY",
      demoCaption: "⚡ Dán link clip triệu view → Gemini tự bóc kịch bản 2 cột (Lời thoại + Góc máy) trong 3 phút."
    },
    {
      title: "02. Trợ Lý Dựng Video Tự Động",
      tag: "// BÀI TOÁN & GIẢI PHÁP 02 • AUTO EDIT VIDEO",
      subtitle: "Ném video thô vào là AI tự gọt sạch đoạn ngập ngừng & làm phụ đề chuyển động để đăng ngay",
      pain: "Quay xong sợ nhất khâu hậu kỳ: Ngồi còng lưng nghe lại từng câu, gõ từng chữ phụ đề bị sai dấu, mất cả buổi tối mỏi mắt đau lưng. Muốn video bắt mắt nhưng không biết chèn chữ chuyển động và cảnh minh họa (B-roll) ở đâu cho mượt.",
      solution: "• Chế độ ăn ngay: Ném video bạn vừa tự quay vào → AI tự nghe tiếng Việt, gọt sạch đoạn ngập ngừng, tự tạo phụ đề chuyển động bắt mắt và xuất thẳng ra video hoàn chỉnh để đăng ngay.\n• Chế độ theo gu riêng: Bạn chọn kiểu chữ và phong cách cảnh trám ưa thích → AI lưu lại làm mẫu, các video sau cứ thế tự động áp dụng đồng bộ mà không cần chỉnh lại từ đầu.",
      leftLabel: "CẶM CỤI GÕ TAY",
      leftDesc: "Mất 2-3 tiếng sửa từng chữ phụ đề, chỉnh sửa cắt ghép thủ công mỏi mắt, dễ nản bỏ cuộc.",
      rightLabel: "1 CLICK HOÀN TẤT",
      rightDesc: "AI dọn sạch phụ đề và gọt video trong tích tắc, video xuất xưởng chuyên nghiệp chuẩn gu.",
      icon: "⚡",
      demoBadge: "AUTO SUBTITLE & VIDEO CUT",
      demoCaption: "🎬 Tự động nhận diện tiếng Việt, gọt sạch đoạn thừa & tạo phụ đề chuyển động chuẩn 100%."
    },
    {
      title: "03. Web Bán Hàng Tự Động",
      tag: "// BÀI TOÁN & GIẢI PHÁP 03 • THU TIỀN TỰ ĐỘNG 24/7",
      subtitle: "Trang web có sẵn mã QR ngân hàng — Tiền về tài khoản & tự gửi bài lúc 2h sáng",
      pain: "Video có nhiều người xem nhưng không biết cách thu tiền. Khách hỏi mua thì phải nhắn tin tay xin số tài khoản, ngồi canh điện thoại check biến động số dư, gửi link thủ công từng người làm sót đơn và khách tụt cảm xúc mua hàng.",
      solution: "Trang web làm sẵn chuẩn đẹp, có sẵn mã QR ngân hàng của chính bạn. Khách xem video → bấm link Bio → quét mã QR là tiền về thẳng tài khoản ngân hàng, web tự kích hoạt gửi bài học cho khách lúc 2h sáng mà bạn không cần trực chat.\n• Tự tạo thì mới tự sửa được: Khi muốn bán món mới, chỉ cần nhắn tin ra lệnh là AI tự đổi câu chữ, đổi hình ảnh trên web trong 10 phút, không cần biết code hay thuê thợ.",
      leftLabel: "TRỰC CHAT CANH BILL",
      leftDesc: "Tư vấn thủ công, check bill từng người mệt mỏi, khách đợi lâu tụt hứng bỏ đi.",
      rightLabel: "TỰ ĐỘNG THU TIỀN 24/7",
      rightDesc: "Khách quét mã → Tiền về tài khoản ngay lập tức → Hệ thống tự động giao hàng xuyên đêm.",
      icon: "💳",
      demoBadge: "AUTO VIETQR & CHECKOUT FLOW",
      demoCaption: "📱 Khách quét mã QR trên web → Tiền về tài khoản & Hệ thống tự động giao bài học tức thì."
    }
  ];

  const currentTab = tabs[activeTab];

  return (
    <Sec maxWidth={1020}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <Label>// 3 CÔNG CỤ LÀM SẴN BÀN GIAO CHO BẠN</Label>
          <SH>Bàn giao 3 công cụ làm sẵn giúp bạn rảnh tay làm video từ A đến Z</SH>
          <Sub>Toàn bộ cài sẵn trên nền tảng Google Gemini quen thuộc. Bạn chỉ việc nhắn lệnh tiếng Việt, AI tự làm thay toàn bộ việc tay chân.</Sub>
        </div>
      </FadeIn>

      <FadeIn delay={80}>
        <div style={{
          display: "flex", background: "var(--cl-card2)", border: `1px solid var(--cl-line)`,
          borderRadius: t.cardRadius, padding: 6, marginBottom: 32, gap: 6, flexWrap: "wrap"
        }}>
          {tabs.map((tab, idx) => {
            const active = idx === activeTab;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  flex: "1 1 220px", background: active ? "var(--cl-accent)" : "transparent",
                  color: active ? "var(--cl-accent-text)" : "var(--cl-text-body, #bbb)",
                  border: "none", borderRadius: Math.max(8, t.cardRadius - 6),
                  padding: "14px 18px", fontSize: 15, fontWeight: 600, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  transition: "all 0.2s ease"
                }}
              >
                <span>{tab.icon}</span><span>{tab.title}</span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={140}>
        <div style={{
          background: `linear-gradient(135deg, var(--cl-card), var(--cl-card2))`,
          border: `1px solid var(--cl-line)`,
          borderRadius: t.cardRadius,
          padding: isMobile ? "24px 20px" : "40px 36px",
          position: "relative",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
          gap: isMobile ? 32 : 36,
          alignItems: "center"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <p style={{ fontFamily: t.fontMono, fontSize: 12, color: "var(--cl-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                {currentTab.tag}
              </p>
              <h3 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(20px, 2.6vw, 25px)", fontWeight: 500, lineHeight: 1.25, letterSpacing: "-0.018em", margin: 0, color: "var(--cl-text-base, #fff)" }}>
                {currentTab.subtitle}
              </h3>
            </div>

            <div>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: "var(--cl-danger)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: t.fontMono }}>
                ⚠ ĐIỂM ĐAU CỦA BẠN:
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--cl-text-body, #b0b0b0)", margin: 0 }}>
                {currentTab.pain}
              </p>
            </div>

            <div style={{ borderTop: `1px solid var(--cl-line)`, paddingTop: 16 }}>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: "var(--cl-accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: t.fontMono }}>
                💡 TOA GIẢI PHÁP ĐÓNG GÓI:
              </p>
              <div style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--cl-text-base, #f0f0f0)", margin: 0, whiteSpace: "pre-line" }}>
                {currentTab.solution}
              </div>
            </div>

            {/* Before vs After comparison pill */}
            <div style={{
              marginTop: 6,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 14,
              background: "var(--cl-card2, #f8fafc)",
              border: `1px solid var(--cl-line, #e2e8f0)`,
              borderRadius: Math.max(8, t.cardRadius - 4),
              padding: "16px 18px"
            }}>
              <div>
                <p style={{ fontSize: 11.5, fontWeight: 700, color: "#dc2626", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: t.fontMono }}>
                  ✗ {currentTab.leftLabel}
                </p>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--cl-text-body, #475569)", margin: 0 }}>
                  {currentTab.leftDesc}
                </p>
              </div>
              <div style={{
                borderLeft: isMobile ? "none" : `1px solid var(--cl-line, #e2e8f0)`,
                borderTop: isMobile ? `1px solid var(--cl-line, #e2e8f0)` : "none",
                paddingLeft: isMobile ? 0 : 16,
                paddingTop: isMobile ? 12 : 0
              }}>
                <p style={{ fontSize: 11.5, fontWeight: 700, color: "#059669", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: t.fontMono }}>
                  ✓ {currentTab.rightLabel}
                </p>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--cl-text-base, #09090b)", margin: 0, fontWeight: 500 }}>
                  {currentTab.rightDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Media / Live UI Mockup Box */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            background: "var(--cl-card, #ffffff)",
            border: `1.5px solid var(--cl-accent, #f59e0b)`,
            borderRadius: t.cardRadius,
            overflow: "hidden",
            boxShadow: `0 14px 40px -15px rgba(245, 158, 11, 0.2), 0 4px 14px rgba(0,0,0,0.04)`,
            position: "relative"
          }}>
            {/* Mockup Window Header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 14px",
              background: "#f1f5f9",
              borderBottom: `1px solid #e2e8f0`
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }}></span>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }}></span>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f", display: "inline-block" }}></span>
              </div>
              <span style={{
                fontFamily: t.fontMono,
                fontSize: 11,
                color: "#92400e",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}>
                {currentTab.demoBadge}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 8px #10b981" }}></span>
                <span style={{ fontFamily: t.fontMono, fontSize: 10, color: "#059669", fontWeight: 700 }}>LIVE</span>
              </div>
            </div>

            {/* Media Screen Container */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: isMobile ? "auto" : "1 / 1",
              minHeight: 300,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: isMobile ? "16px" : "18px"
            }}>
              {activeTab === 0 && (
                /* Tab 0: Live 2-Column Script Generator Simulation */
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: 12, justifyContent: "space-between" }}>
                  <div style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 10,
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12,
                    color: "#475569",
                    fontFamily: t.fontMono
                  }}>
                    <span style={{ color: "#059669" }}>🔗 INPUT:</span>
                    <span style={{ color: "#0f172a", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>tiktok.com/@viral/video/738291...</span>
                  </div>

                  <div style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 10,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                  }}>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1.3fr",
                      background: "#f1f5f9",
                      padding: "6px 10px",
                      borderBottom: "1px solid #e2e8f0",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#475569",
                      fontFamily: t.fontMono
                    }}>
                      <span>🎬 GÓC MÁY (B-ROLL)</span>
                      <span>🗣️ LỜI THOẠI (HOOK)</span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", padding: "10px", borderBottom: "1px solid #f1f5f9", fontSize: 12.5, lineHeight: 1.45, gap: 10 }}>
                      <span style={{ color: "#64748b" }}>Cận cảnh mặt, ánh sáng 45°, nét mặt bế tắc khi cắn bút.</span>
                      <span style={{ color: "#0f172a", fontWeight: 600 }}>"Nếu bạn cắn bút cả buổi không ra kịch bản..."</span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", padding: "10px", fontSize: 12.5, lineHeight: 1.45, gap: 10, background: "#fafafa" }}>
                      <span style={{ color: "#64748b" }}>Chèn ảnh minh họa CapCut gọt sub tự động.</span>
                      <span style={{ color: "#0f172a" }}>"Chỉ cần 1 click là dọn sạch 100% lỗi ngập ngừng..."</span>
                    </div>
                  </div>

                  <div style={{
                    background: "#ecfdf5",
                    border: "1px solid #a7f3d0",
                    borderRadius: 8,
                    padding: "7px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 11.5,
                    color: "#065f46",
                    fontWeight: 600
                  }}>
                    <span>✓ Đã trích xuất kịch bản 2 cột</span>
                    <span>⏱️ 3.2s hoàn tất</span>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                /* Tab 1: Auto Edit & Subtitle Generator Simulation */
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: 12, justifyContent: "space-between" }}>
                  <div style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 10,
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 12
                  }}>
                    <span style={{ fontWeight: 600, color: "#0f172a" }}>📹 video_tho_vua_quay.mp4</span>
                    <span style={{ color: "#059669", fontFamily: t.fontMono, fontSize: 11, fontWeight: 700 }}>AI DETECT: OK</span>
                  </div>

                  <div style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 10,
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    flex: 1,
                    justifyContent: "center"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11, fontFamily: t.fontMono, color: "#64748b" }}>
                      <span>AUDIO WAVEFORM (GỌT VẤP)</span>
                      <span style={{ color: "#dc2626", fontWeight: 700 }}>✂️ GỌT 14 ĐOẠN THỪA</span>
                    </div>

                    <div style={{
                      height: 28,
                      background: "#f1f5f9",
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      padding: "0 8px",
                      overflow: "hidden"
                    }}>
                      {[14, 28, 40, 12, 0, 0, 36, 48, 20, 0, 42, 56, 32, 16, 0, 0, 24, 38, 50, 18].map((h, idx) => (
                        <span
                          key={idx}
                          style={{
                            flex: 1,
                            height: `${Math.max(4, h)}%`,
                            background: h === 0 ? "#fca5a5" : "var(--cl-accent)",
                            borderRadius: 2
                          }}
                        />
                      ))}
                    </div>

                    <div style={{
                      background: "#fffbeb",
                      border: "1px solid #fde68a",
                      borderRadius: 8,
                      padding: "8px 12px",
                      fontSize: 13,
                      color: "#92400e",
                      fontWeight: 600,
                      textAlign: "center"
                    }}>
                      💬 Phụ đề tự động nhảy theo giọng nói tiếng Việt
                    </div>
                  </div>

                  <div style={{
                    background: "#ecfdf5",
                    border: "1px solid #a7f3d0",
                    borderRadius: 8,
                    padding: "7px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 11.5,
                    color: "#065f46",
                    fontWeight: 600
                  }}>
                    <span>✓ File CapCut / Video hoàn tất</span>
                    <span>⚡ 10 phút xuất bản</span>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                /* Tab 2: Auto VietQR & Push Notification Mockup */
                <div style={{
                  width: "100%",
                  height: "100%",
                  padding: 14,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 10,
                  position: "relative"
                }}>
                  {/* Web Checkout Mockup */}
                  <div style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 12,
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--cl-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, color: "#000" }}>
                        ⚡
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#09090b" }}>Thanh Toán Tự Động VietQR</div>
                        <div style={{ fontSize: 10, color: "#64748b", fontFamily: t.fontMono }}>Mã đơn: #AI-CREATOR-9824</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#059669", fontFamily: t.fontMono }}>499.000đ</div>
                  </div>

                  {/* QR Scan Centerpiece */}
                  <div style={{ textAlign: "center", margin: "4px 0" }}>
                    <div style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 14,
                      padding: "10px 16px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
                    }}>
                      <div style={{ width: 84, height: 84, background: "#09090b", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 36 }}>
                        📱
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "#0f172a", marginTop: 4, letterSpacing: "0.05em" }}>VIETQR • TỰ ĐỘNG GIAO BÀI 24/7</span>
                    </div>
                  </div>

                  {/* Phone Push Notification Simulation Overlay */}
                  <div style={{
                    background: "#0f172a",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    borderRadius: 12,
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)"
                  }}>
                    <div style={{ fontSize: 18 }}>🔔</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: "#34d399" }}>NGÂN HÀNG VCB • BIẾN ĐỘNG SỐ DƯ</span>
                        <span style={{ fontSize: 9, color: "#94a3b8" }}>Vừa xong</span>
                      </div>
                      <div style={{ fontSize: 11.5, color: "#f8fafc", lineHeight: 1.35, fontWeight: 500 }}>
                        +499.000 VND từ Nguyễn Văn A. Web đã tự gửi bài lúc 2h sáng! 🚀
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div style={{
              padding: "10px 14px",
              background: "#f8fafc",
              borderTop: `1px solid #e2e8f0`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <span style={{
                fontSize: 12,
                color: "#334155",
                fontWeight: 600,
                lineHeight: 1.4
              }}>
                {currentTab.demoCaption}
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}

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
          <Sub>{c.discoverySub}</Sub>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {(c.discoveryItems || []).map((item, i) => {
            const isEven = i % 2 === 1;
            const isPlaceholder = item.gif?.includes("unsplash.com") ?? true;
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
                  <h4 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(20px, 2.5vw, 24px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.018em", color: "var(--cl-text-base, #111827)", margin: 0 }}>
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
                  <img src={item.gif || ""} alt={item.placeholderLabel || "Image"} loading="lazy" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    opacity: isPlaceholder ? 0.28 : 1, filter: isPlaceholder ? "grayscale(100%) contrast(1.1)" : "none",
                    transition: "all 0.4s ease"
                  }} />
                  {isPlaceholder && (
                    <div style={{
                      position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(245, 158, 11, 0.05) 30%, rgba(241, 245, 249, 0.85) 100%)",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, textAlign: "center"
                    }}>
                      <span style={{ fontSize: 28, marginBottom: 8 }}>🎬</span>
                      <span style={{
                        fontFamily: t.fontMono, fontSize: 12, fontWeight: 700, color: "#92400e", letterSpacing: "0.05em",
                        background: "rgba(245, 158, 11, 0.12)", border: `1px solid rgba(245, 158, 11, 0.3)`, padding: "6px 14px",
                        borderRadius: 20, textTransform: "uppercase"
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
          <Sub>{c.solutionSub}</Sub>
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
              <p style={{ fontSize: 19, color: "var(--cl-text-base, #111827)", lineHeight: 1.6, margin: 0 }}>{item}</p>
            </div>
          ))}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <CtaButton label="Sở Hữu Hệ Thống AI Creator Ngay" />
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}
