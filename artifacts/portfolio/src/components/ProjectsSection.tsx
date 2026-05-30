const PROJECTS = [
  {
    id: "shield",
    name: "نداء شايلد", nameEn: "Nidaa Shield",
    badge: "حماية الخصوصية", chip: "chip-blue",
    color: "var(--blue)",
    gradient: "linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)",
    glowColor: "rgba(0,122,255,.22)",
    link: "https://t.me/nidaashield",
    modes: [
      { icon: "👨‍👩‍👧", t: "وضع الأسرة",   s: "Family" },
      { icon: "🪖", t: "عسكري",          s: "Military" },
      { icon: "🛡️", t: "حماية كاملة",   s: "Full Shield" },
    ],
    features: [
      "حجب كامل للإعلانات والمتتبعات",
      "عمل محلي ١٠٠٪ بدون خوادم",
      "واجهة عربية سهلة الاستخدام",
      "قواعد DNS متقدمة",
      "حماية من البرامج الضارة",
    ],
  },
  {
    id: "mujahed",
    name: "مجاهد للتجارة", nameEn: "Mujahed POS",
    badge: "إدارة تجارية", chip: "chip-purple",
    color: "var(--purple)",
    gradient: "linear-gradient(135deg, #AF52DE 0%, #FF375F 100%)",
    glowColor: "rgba(175,82,222,.22)",
    link: "https://t.me/mojahedapp",
    modes: [
      { icon: "📷", t: "ماسح الباركود", s: "Scanner" },
      { icon: "💱", t: "متعدد العملات", s: "USD/Local" },
      { icon: "🔐", t: "تشفير + بصمة", s: "Biometric" },
    ],
    features: [
      "محرك POS مع باركود كاميرا",
      "تسعير بالدولار مع محدّث سعر الصرف",
      "قاعدة بيانات مشفرة + PIN",
      "مفاتيح أمان + بصمة الإصبع",
      "فواتير مائية قانونية موقعة",
    ],
  },
];

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

/* Soft dot bullet instead of checkmark */
function Dot({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 3 }}>
      <circle cx="7" cy="7" r="3" fill={color} opacity=".75" />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media(min-width:680px) {
          .proj-grid { grid-template-columns: 1fr 1fr; }
        }
        .proj-card {
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .proj-card:hover { transform: translateY(-3px); box-shadow: var(--shadow2); }
        .proj-card:active { transform: scale(0.97); }
        .mode-tile {
          min-width: 90px;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .mode-tile:hover { transform: scale(1.04); }
      `}</style>

      <section id="projects" className="section">
        <div className="wrap">

          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="chip chip-purple" style={{ marginBottom: 14 }}>المشاريع المنجزة</span>
            <h2 style={{
              fontSize: "clamp(1.55rem, 4.5vw, 2.2rem)",
              fontWeight: 800, color: "var(--tx1)",
              letterSpacing: "-.022em", marginBottom: 14, lineHeight: 1.14,
            }}>التطبيقات المستقلة</h2>
            <div style={{
              width: 32, height: 3, borderRadius: 2, margin: "0 auto",
              background: "linear-gradient(90deg, var(--purple), var(--blue))",
            }} />
          </div>

          <div className="proj-grid">
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="card proj-card reveal" style={{
                borderRadius: 24, overflow: "hidden", padding: 0,
                transitionDelay: `${idx * 100}ms`,
                display: "flex", flexDirection: "column",
              }}>

                {/* Gradient top stripe */}
                <div style={{ height: 4, background: p.gradient, opacity: .9, flexShrink: 0 }} />

                <div style={{
                  padding: "20px 20px 0",
                  flex: 1, display: "flex", flexDirection: "column",
                }}>

                  {/* Head */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                      <span className={`chip ${p.chip}`}>{p.badge}</span>
                      <span className="chip chip-gray">Android</span>
                    </div>
                    <h3 style={{
                      fontSize: "clamp(1.15rem, 3.5vw, 1.42rem)",
                      fontWeight: 800, color: "var(--tx1)", marginBottom: 4,
                      letterSpacing: "-.022em", lineHeight: 1.2,
                    }}>{p.name}</h3>
                    <div style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: .4,
                      background: p.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block",
                    }}>{p.nameEn}</div>
                  </div>

                  {/* Mode tiles — horizontal scroll (App Store style) */}
                  <div className="hscroll" style={{ marginBottom: 16 }}>
                    {p.modes.map(m => (
                      <div key={m.s} className="mode-tile inset" style={{
                        padding: "10px 8px", textAlign: "center",
                        borderRadius: 14,
                      }}>
                        <div style={{ fontSize: 18, marginBottom: 4 }}>{m.icon}</div>
                        <div style={{
                          fontSize: 11, fontWeight: 700, color: "var(--tx1)",
                          marginBottom: 2, lineHeight: 1.3,
                        }}>{m.t}</div>
                        <div style={{ fontSize: 10, color: "var(--tx3)", fontWeight: 600 }}>{m.s}</div>
                      </div>
                    ))}
                  </div>

                  <div className="line" style={{ marginBottom: 14 }} />

                  {/* Features with soft dots */}
                  <div style={{ marginBottom: 0, flex: 1 }}>
                    <div style={{
                      fontSize: 10.5, color: "var(--tx3)", fontWeight: 700,
                      letterSpacing: .9, marginBottom: 10, textTransform: "uppercase",
                    }}>المميزات</div>
                    {p.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, marginBottom: 8 }}>
                        <Dot color={p.color} />
                        <span style={{ fontSize: 13, color: "var(--tx2)", lineHeight: 1.45, fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Full-width vibrant gradient CTA — flush to bottom */}
                <div style={{ padding: "16px 20px 20px" }}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="btn"
                    style={{
                      width: "100%", fontSize: 15,
                      borderRadius: 14, height: 48,
                      background: p.gradient, color: "#fff",
                      boxShadow: `0 6px 24px ${p.glowColor}`,
                      border: "none",
                      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.08)"; e.currentTarget.style.transform = "scale(1.01)"; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = ""; e.currentTarget.style.transform = ""; }}
                    onMouseDown={e => { e.currentTarget.style.transform = "scale(0.97)"; }}
                    onMouseUp={e => { e.currentTarget.style.transform = ""; }}>
                    <TelegramIcon />
                    تحميل عبر تيلجرام
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
