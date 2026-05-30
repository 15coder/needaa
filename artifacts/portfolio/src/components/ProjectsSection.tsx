const PROJECTS = [
  {
    id: "shield",
    name: "نداء شايلد",
    nameEn: "Nidaa Shield",
    badge: "حماية الخصوصية",
    chip: "chip-blue",
    gradient: "linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)",
    glowColor: "rgba(0,122,255,.24)",
    icon: "🛡️",
    link: "https://t.me/nidaashield",
    tags: ["Privacy", "DNS", "Android"],
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
    name: "مجاهد للتجارة",
    nameEn: "Mujahed POS",
    badge: "إدارة تجارية",
    chip: "chip-purple",
    gradient: "linear-gradient(135deg, #AF52DE 0%, #FF375F 100%)",
    glowColor: "rgba(175,82,222,.24)",
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        .proj-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 600px;
          margin: 0 auto;
        }
        @media(min-width: 780px) {
          .proj-stack {
            flex-direction: row;
            max-width: 100%;
            align-items: stretch;
          }
          .proj-stack > * { flex: 1; }
        }

        .proj-card-new {
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .proj-card-new:hover { transform: translateY(-3px); box-shadow: var(--shadow2); }
        .proj-card-new:active { transform: scale(0.97); }

        .proj-feature-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 0;
          border-bottom: .5px solid var(--sep);
        }
        .proj-feature-item:last-child { border-bottom: none; padding-bottom: 0; }
        .proj-feature-item:first-child { padding-top: 0; }
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

          <div className="proj-stack">
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="card proj-card-new reveal" style={{
                transitionDelay: `${idx * 90}ms`,
              }}>

                {/* ── App-style header ── */}
                <div style={{
                  background: p.gradient, padding: "28px 24px 24px",
                  position: "relative", overflow: "hidden",
                }}>
                  {/* Subtle shine */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                    background: "linear-gradient(180deg, rgba(255,255,255,.18) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }} />
                  {/* App icon */}
                  <div style={{
                    width: 60, height: 60, borderRadius: 16,
                    background: "rgba(255,255,255,.22)",
                    border: "1px solid rgba(255,255,255,.35)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28, marginBottom: 14,
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}>{p.icon}</div>

                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 10 }}>
                    <div>
                      <h3 style={{
                        fontSize: "1.35rem", fontWeight: 800, color: "#fff",
                        letterSpacing: "-.02em", lineHeight: 1.15, marginBottom: 4,
                      }}>{p.name}</h3>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,.75)", fontWeight: 600, letterSpacing: .3 }}>
                        {p.nameEn}
                      </p>
                    </div>
                    <span className={`chip ${p.chip}`} style={{
                      background: "rgba(255,255,255,.22)",
                      color: "#fff", flexShrink: 0,
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}>{p.badge}</span>
                  </div>

                  {/* Tags row */}
                  <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.80)",
                        background: "rgba(255,255,255,.16)",
                        padding: "3px 10px", borderRadius: 100,
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,.20)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* ── Features list ── */}
                <div style={{ padding: "20px 22px 0", flex: 1 }}>
                  <div style={{
                    fontSize: 10.5, fontWeight: 700, color: "var(--tx3)",
                    letterSpacing: .9, textTransform: "uppercase", marginBottom: 12,
                  }}>المميزات</div>
                  <div>
                    {p.features.map((f, i) => (
                      <div key={i} className="proj-feature-item">
                        <div style={{
                          width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                          background: p.gradient, opacity: .85,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                            stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span style={{ fontSize: 13.5, color: "var(--tx2)", lineHeight: 1.4, fontWeight: 500 }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── CTA ── */}
                <div style={{ padding: "18px 22px 22px" }}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      width: "100%", height: 50, borderRadius: 14,
                      background: p.gradient, color: "#fff",
                      fontFamily: "var(--font)", fontWeight: 700, fontSize: 15.5,
                      boxShadow: `0 6px 24px ${p.glowColor}`,
                      textDecoration: "none", border: "none", cursor: "pointer",
                      letterSpacing: "-.01em",
                      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                      position: "relative", overflow: "hidden",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.09)"; e.currentTarget.style.transform = "scale(1.01)"; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = ""; e.currentTarget.style.transform = ""; }}
                    onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
                    onMouseUp={e => e.currentTarget.style.transform = ""}>
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(180deg,rgba(255,255,255,.14) 0%,transparent 60%)",
                      pointerEvents: "none",
                    }} />
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
