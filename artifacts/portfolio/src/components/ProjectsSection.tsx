const PROJECTS = [
  {
    id: "shield",
    name: "نداء شايلد",
    nameEn: "Nidaa Shield",
    badge: "حماية الخصوصية",
    gradient: "linear-gradient(145deg, #007AFF 0%, #5AC8FA 100%)",
    gradientDark: "linear-gradient(145deg, #0055CC 0%, #007AFF 100%)",
    glowColor: "rgba(0,122,255,.28)",
    icon: "🛡️",
    link: "https://t.me/nidaashield",
    tags: ["Privacy", "DNS", "Android"],
    features: [
      "حجب كامل للإعلانات والمتتبعات",
      "عمل محلي ١٠٠٪ بدون خوادم",
      "واجهة عربية سهلة الاستخدام",
      "قواعد DNS متقدمة قابلة للتخصيص",
      "حماية من البرامج الضارة",
    ],
  },
  {
    id: "mujahed",
    name: "مجاهد للتجارة",
    nameEn: "Mujahed POS",
    badge: "إدارة تجارية",
    gradient: "linear-gradient(145deg, #AF52DE 0%, #FF375F 100%)",
    gradientDark: "linear-gradient(145deg, #8822BB 0%, #CC1144 100%)",
    glowColor: "rgba(175,82,222,.28)",
    icon: "🧾",
    link: "https://t.me/mojahedapp",
    tags: ["POS", "Biometric", "Android"],
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
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        .proj-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 620px;
          margin: 0 auto;
        }
        @media(min-width: 800px) {
          .proj-grid {
            flex-direction: row;
            max-width: 100%;
            align-items: stretch;
          }
          .proj-grid > * { flex: 1; }
        }

        .proj-card {
          border-radius: 26px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .proj-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: .5px solid var(--sep);
        }
        .proj-feature:last-child { border-bottom: none; padding-bottom: 0; }
        .proj-feature:first-child { padding-top: 0; }

        .proj-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          height: 52px;
          border-radius: 16px;
          color: #fff;
          font-family: var(--font);
          font-weight: 700;
          font-size: 15.5px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          letter-spacing: -.015em;
          position: relative;
          overflow: hidden;
          transition: filter 0.35s ease, transform 0.35s var(--spring);
        }
        .proj-cta-btn:hover  { filter: brightness(1.1); transform: translateY(-1px) scale(1.01); }
        .proj-cta-btn:active { transform: scale(0.96) !important; transition-duration: .12s !important; }
        .proj-cta-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,.15) 0%, transparent 55%);
          pointer-events: none;
        }
      `}</style>

      <section id="projects" className="section">
        <div className="wrap">

          {/* Section header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="chip chip-purple" style={{ marginBottom: 16 }}>المشاريع المنجزة</span>
            <h2 style={{
              fontSize: "clamp(1.6rem, 4.8vw, 2.4rem)",
              fontWeight: 900, color: "var(--tx1)",
              letterSpacing: "-.024em", marginBottom: 16, lineHeight: 1.12,
            }}>التطبيقات المستقلة</h2>
            <div style={{
              width: 36, height: 3.5, borderRadius: 2, margin: "0 auto",
              background: "linear-gradient(90deg, var(--purple), var(--blue))",
            }} />
          </div>

          <div className="proj-grid">
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="card proj-card reveal" style={{
                transitionDelay: `${idx * 100}ms`,
              }}>

                {/* ── Gradient header ── */}
                <div style={{
                  background: p.gradient,
                  padding: "32px 26px 26px",
                  position: "relative", overflow: "hidden",
                }}>
                  {/* Top shine */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "55%",
                    background: "linear-gradient(180deg, rgba(255,255,255,.20) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }} />

                  {/* App icon */}
                  <div style={{
                    width: 72, height: 72, borderRadius: 20, marginBottom: 18,
                    background: "rgba(255,255,255,.22)",
                    border: "1.5px solid rgba(255,255,255,.38)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 34,
                    boxShadow: "0 4px 16px rgba(0,0,0,.15)",
                  }}>{p.icon}</div>

                  {/* Name row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
                    <div>
                      <h3 style={{
                        fontSize: "1.45rem", fontWeight: 900, color: "#fff",
                        letterSpacing: "-.025em", lineHeight: 1.12, marginBottom: 5,
                      }}>{p.name}</h3>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,.70)", fontWeight: 600, letterSpacing: .4 }}>
                        {p.nameEn}
                      </p>
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.90)",
                      background: "rgba(255,255,255,.20)",
                      border: "1px solid rgba(255,255,255,.25)",
                      padding: "5px 12px", borderRadius: 100,
                      flexShrink: 0, alignSelf: "flex-start",
                    }}>{p.badge}</span>
                  </div>

                  {/* Tag pills */}
                  <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: 11, fontWeight: 700,
                        color: "rgba(255,255,255,.85)",
                        background: "rgba(0,0,0,.18)",
                        padding: "4px 11px", borderRadius: 100,
                        border: "1px solid rgba(255,255,255,.18)",
                        letterSpacing: .3,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* ── Features ── */}
                <div style={{ padding: "22px 24px 0", flex: 1 }}>
                  <div style={{
                    fontSize: 10, fontWeight: 800, color: "var(--tx3)",
                    letterSpacing: 1.1, textTransform: "uppercase", marginBottom: 14,
                  }}>المميزات الرئيسية</div>
                  {p.features.map((f, i) => (
                    <div key={i} className="proj-feature">
                      <div style={{
                        width: 24, height: 24, borderRadius: 7, flexShrink: 0,
                        background: p.gradient,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: `0 2px 8px ${p.glowColor}`,
                      }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                          stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span style={{ fontSize: 13.5, color: "var(--tx2)", lineHeight: 1.45, fontWeight: 500 }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ── CTA ── */}
                <div style={{ padding: "20px 24px 24px" }}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="proj-cta-btn"
                    style={{ background: p.gradient, boxShadow: `0 8px 28px ${p.glowColor}` }}>
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
