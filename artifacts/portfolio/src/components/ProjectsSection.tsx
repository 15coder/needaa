const PROJECTS = [
  {
    id: "shield",
    name: "نداء شايلد", nameEn: "Nidaa Shield",
    badge: "حماية الخصوصية", chip: "chip-blue",
    color: "var(--blue)",
    sub: "تطبيق أمني لحماية الخصوصية وحجب المتتبعات والإعلانات",
    desc: "يعمل محلياً بالكامل دون إرسال أي بيانات لخوادم خارجية، مع واجهة عربية وأوضاع حماية متعددة.",
    link: "https://t.me/nidaashield",
    modes: [
      { icon: "🎮", t: "وضع الألعاب",   s: "Gaming" },
      { icon: "👨‍👩‍👧", t: "وضع الأسرة",   s: "Family" },
      { icon: "🪖", t: "عسكري",          s: "Military" },
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
    sub: "نظام أندرويد متكامل لإدارة الحسابات ونقاط البيع",
    desc: "محرك POS مع ماسح باركود كاميرا وتسعير متعدد العملات وأمان عالي المستوى.",
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
          display:grid;
          grid-template-columns:1fr;
          gap:14px;
        }
        @media(min-width:680px){
          .proj-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <section id="projects" className="section"
        style={{ background: "var(--bg2)", transition: "background .25s" }}>
        <div className="wrap">

          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="chip chip-purple" style={{ marginBottom: 12 }}>المشاريع المنجزة</span>
            <h2 style={{
              fontSize: "clamp(1.5rem, 4.5vw, 2.1rem)",
              fontWeight: 800, color: "var(--tx1)",
              letterSpacing: "-.02em", marginBottom: 12,
            }}>التطبيقات المستقلة</h2>
            <div style={{
              width: 30, height: 3, borderRadius: 2, margin: "0 auto",
              background: "linear-gradient(90deg,var(--purple),var(--blue))",
            }} />
          </div>

          {/* Cards */}
          <div className="proj-grid">
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="card reveal"
                style={{
                  borderRadius: 22, overflow: "hidden", padding: 0,
                  transitionDelay: `${idx * 100}ms`,
                }}>

                {/* Stripe */}
                <div style={{ height: 3, background: p.color, opacity: .85 }} />

                <div style={{ padding: "22px 18px 18px" }}>

                  {/* Head */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 10 }}>
                      <span className={`chip ${p.chip}`}>{p.badge}</span>
                      <span className="chip chip-gray">Android</span>
                    </div>
                    <h3 style={{
                      fontSize: "clamp(1.15rem, 3.5vw, 1.4rem)",
                      fontWeight: 800, color: "var(--tx1)", marginBottom: 3,
                    }}>{p.name}</h3>
                    <div style={{ fontSize: 11, color: p.color, fontWeight: 700, letterSpacing: .3 }}>
                      {p.nameEn}
                    </div>
                  </div>

                  <p style={{ fontSize: 13, color: "var(--tx2)", fontWeight: 600, marginBottom: 5, lineHeight: 1.45 }}>
                    {p.sub}
                  </p>
                  <p style={{ fontSize: 13, color: "var(--tx3)", marginBottom: 18, lineHeight: 1.5 }}>
                    {p.desc}
                  </p>

                  {/* Modes */}
                  <div style={{
                    display: "grid", gridTemplateColumns: "repeat(3,1fr)",
                    gap: 8, marginBottom: 18,
                  }}>
                    {p.modes.map(m => (
                      <div key={m.s} className="inset" style={{
                        padding: "10px 6px", textAlign: "center",
                        borderRadius: 12,
                      }}>
                        <div style={{ fontSize: 17, marginBottom: 4 }}>{m.icon}</div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--tx1)", marginBottom: 1, lineHeight: 1.3 }}>
                          {m.t}
                        </div>
                        <div style={{ fontSize: 10, color: "var(--tx3)", fontWeight: 600 }}>{m.s}</div>
                      </div>
                    ))}
                  </div>

                  <div className="line" style={{ marginBottom: 14 }} />

                  {/* Features */}
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 11, color: "var(--tx3)", fontWeight: 700,
                      letterSpacing: .8, marginBottom: 10 }}>
                      المميزات
                    </div>
                    {p.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 7 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                          stroke={p.color} strokeWidth="2.6" style={{ flexShrink: 0, marginTop: 2 }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span style={{ fontSize: 13, color: "var(--tx2)", lineHeight: 1.4 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="btn"
                    style={{
                      width: "100%", fontSize: 15,
                      background: p.color, color: "#fff",
                      boxShadow: `0 4px 14px color-mix(in srgb,${p.color} 30%,transparent)`,
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
