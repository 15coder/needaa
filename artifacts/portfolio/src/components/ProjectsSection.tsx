const PROJECTS = [
  {
    id: "shield",
    name: "نداء شايلد", nameEn: "Nidaa Shield",
    badge: "حماية الخصوصية", chip: "chip-blue",
    color: "var(--blue)",
    gradient: "linear-gradient(135deg, var(--blue) 0%, var(--teal) 100%)",
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
    gradient: "linear-gradient(135deg, var(--purple) 0%, var(--pink) 100%)",
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

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
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
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      background 0.3s ease;
        }
        .mode-tile:hover { transform: scale(1.03); }
      `}</style>

      <section id="projects" className="section" style={{
        background: "var(--bg2)", transition: "background .3s",
      }}>

        {/* Mesh background */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div className="mesh-orb" style={{
            width: "min(550px,85vw)", height: "min(550px,85vw)",
            left: "-12%", top: "-15%",
            background: "radial-gradient(circle, rgba(0,122,255,.06) 0%, transparent 70%)",
            animation: "orb 26s ease-in-out infinite",
          }} />
          <div className="mesh-orb" style={{
            width: "min(450px,75vw)", height: "min(450px,75vw)",
            right: "-10%", bottom: "-10%",
            background: "radial-gradient(circle, rgba(175,82,222,.07) 0%, transparent 70%)",
            animation: "orbAlt 20s ease-in-out infinite",
          }} />
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="chip chip-purple" style={{ marginBottom: 14 }}>المشاريع المنجزة</span>
            <h2 style={{
              fontSize: "clamp(1.6rem, 4.5vw, 2.2rem)",
              fontWeight: 800, color: "var(--tx1)",
              letterSpacing: "-.02em", marginBottom: 14, lineHeight: 1.15,
            }}>التطبيقات المستقلة</h2>
            <div style={{
              width: 32, height: 3, borderRadius: 2, margin: "0 auto",
              background: "linear-gradient(90deg, var(--purple), var(--blue))",
            }} />
          </div>

          {/* Cards */}
          <div className="proj-grid">
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="card proj-card reveal" style={{
                borderRadius: 24, overflow: "hidden", padding: 0,
                transitionDelay: `${idx * 100}ms`,
              }}>

                {/* Gradient header stripe */}
                <div style={{
                  height: 4,
                  background: p.gradient,
                  opacity: .9,
                }} />

                {/* Card glow accent */}
                <div style={{
                  position: "absolute", top: -40, right: -40,
                  width: 160, height: 160, borderRadius: "50%",
                  background: `radial-gradient(circle, ${p.color.replace('var(--blue)', 'rgba(0,122,255,.08)').replace('var(--purple)', 'rgba(175,82,222,.08)')} 0%, transparent 70%)`,
                  filter: "blur(30px)",
                  pointerEvents: "none",
                }} />

                <div style={{ padding: "22px 20px 20px", position: "relative" }}>

                  {/* Head */}
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                      <span className={`chip ${p.chip}`}>{p.badge}</span>
                      <span className="chip chip-gray">Android</span>
                    </div>
                    <h3 style={{
                      fontSize: "clamp(1.15rem, 3.5vw, 1.45rem)",
                      fontWeight: 800, color: "var(--tx1)", marginBottom: 4,
                      letterSpacing: "-.02em", lineHeight: 1.2,
                    }}>{p.name}</h3>
                    <div style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: .4,
                      background: p.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block",
                    }}>
                      {p.nameEn}
                    </div>
                  </div>

                  {/* Modes */}
                  <div style={{
                    display: "grid", gridTemplateColumns: "repeat(3,1fr)",
                    gap: 8, marginBottom: 18,
                  }}>
                    {p.modes.map(m => (
                      <div key={m.s} className="mode-tile inset" style={{
                        padding: "11px 6px", textAlign: "center",
                        borderRadius: 14,
                      }}>
                        <div style={{ fontSize: 18, marginBottom: 5 }}>{m.icon}</div>
                        <div style={{
                          fontSize: 11, fontWeight: 700, color: "var(--tx1)",
                          marginBottom: 2, lineHeight: 1.3,
                        }}>{m.t}</div>
                        <div style={{ fontSize: 10, color: "var(--tx3)", fontWeight: 600 }}>{m.s}</div>
                      </div>
                    ))}
                  </div>

                  <div className="line" style={{ marginBottom: 16 }} />

                  {/* Features */}
                  <div style={{ marginBottom: 20 }}>
                    <div style={{
                      fontSize: 10.5, color: "var(--tx3)", fontWeight: 700,
                      letterSpacing: .9, marginBottom: 11, textTransform: "uppercase",
                    }}>المميزات</div>
                    {p.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, marginBottom: 8 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                          stroke={p.color} strokeWidth="2.8" style={{ flexShrink: 0, marginTop: 2 }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span style={{ fontSize: 13, color: "var(--tx2)", lineHeight: 1.45, fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="btn"
                    style={{
                      width: "100%", fontSize: 15, borderRadius: 16,
                      background: p.gradient, color: "#fff",
                      boxShadow: `0 4px 20px ${p.color === "var(--blue)" ? "rgba(0,122,255,.28)" : "rgba(175,82,222,.28)"}`,
                      border: "none",
                    }}>
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
