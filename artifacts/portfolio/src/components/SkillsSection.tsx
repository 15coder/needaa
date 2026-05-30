const SKILLS = [
  {
    id: "forensics", icon: "🔬",
    title: "التحليل الجنائي الرقمي", sub: "Digital Forensics",
    chip: "chip-blue", dot: "var(--blue)",
    iconBg: "rgba(0,122,255,.13)", iconBorder: "rgba(0,122,255,.18)",
    items: ["Cellebrite UFED & Oxygen Forensic", "تجاوز الأقفال واستخراج البيانات", "تحليل الأجهزة المشفرة والمقفلة"],
  },
  {
    id: "mobile", icon: "📱",
    title: "برمجيات الهاتف المتقدمة", sub: "Advanced Mobile",
    chip: "chip-purple", dot: "var(--purple)",
    iconBg: "rgba(175,82,222,.13)", iconBorder: "rgba(175,82,222,.18)",
    items: ["Pandora / Chimera / DFT Pro", "EFT Pro / Z3X Box", "تجاوز iCloud & Android FRP", "Firmware Management"],
  },
  {
    id: "gsm", icon: "📡",
    title: "إدارة سيرفرات GSM", sub: "GSM Server Management",
    chip: "chip-teal", dot: "var(--teal)",
    iconBg: "rgba(90,200,250,.13)", iconBorder: "rgba(90,200,250,.18)",
    items: ["HalabTech Server", "شراء الكريدت وإدارة الاشتراكات", "نشر Firmware آمن"],
  },
  {
    id: "dev", icon: "⚡",
    title: "هندسة البرمجيات", sub: "Software Engineering",
    chip: "chip-orange", dot: "var(--orange)",
    iconBg: "rgba(255,149,0,.13)", iconBorder: "rgba(255,149,0,.18)",
    items: ["تصميم تطبيقات Android", "برمجة المواقع الإلكترونية"],
  },
  {
    id: "design", icon: "🎨",
    title: "تصميم جرافيكي", sub: "Graphic Design",
    chip: "chip-pink", dot: "var(--pink)",
    iconBg: "rgba(255,45,85,.13)", iconBorder: "rgba(255,45,85,.18)",
    items: ["تصميم جرافيكي احترافي", "تصميم بوسترات بطابع حديث"],
  },
  {
    id: "pc", icon: "🖥️",
    title: "صيانة الحاسب", sub: "PC Maintenance",
    chip: "chip-green", dot: "var(--green)",
    iconBg: "rgba(52,199,89,.13)", iconBorder: "rgba(52,199,89,.18)",
    items: ["صيانة هاردوير شاملة", "تثبيت وإدارة الأنظمة", "استعادة البيانات"],
  },
];

export default function SkillsSection() {
  return (
    <>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media(min-width:460px) { .skills-grid { grid-template-columns: 1fr 1fr; } }
        @media(min-width:900px) { .skills-grid { grid-template-columns: 1fr 1fr 1fr; } }

        .skill-card {
          padding: 16px;
          border-radius: 20px;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        @media(min-width:640px) { .skill-card { padding: 20px; } }
        .skill-card:hover { transform: translateY(-2px) scale(1.01); box-shadow: var(--shadow2); }
        .skill-card:active { transform: scale(0.97); }
      `}</style>

      <section id="skills" className="section">
        <div className="wrap">

          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="chip chip-blue" style={{ marginBottom: 14 }}>المهارات التقنية</span>
            <h2 style={{
              fontSize: "clamp(1.55rem, 4.5vw, 2.2rem)",
              fontWeight: 800, color: "var(--tx1)",
              letterSpacing: "-.022em", marginBottom: 14, lineHeight: 1.14,
            }}>الكفاءات والخبرات</h2>
            <div style={{
              width: 32, height: 3, borderRadius: 2, margin: "0 auto",
              background: "linear-gradient(90deg, var(--blue), var(--purple))",
            }} />
          </div>

          {/* Grid */}
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div key={s.id} className="card skill-card reveal" style={{
                transitionDelay: `${i * 55}ms`,
              }}>

                {/* Icon */}
                <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                    background: s.iconBg,
                    border: `1px solid ${s.iconBorder}`,
                    fontSize: 19,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}>{s.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontSize: 13.5, fontWeight: 700, color: "var(--tx1)",
                      marginBottom: 5, lineHeight: 1.3, letterSpacing: "-.01em",
                    }}>{s.title}</div>
                    <span className={`chip ${s.chip}`} style={{ padding: "3px 9px", fontSize: 11 }}>
                      {s.sub}
                    </span>
                  </div>
                </div>

                <div className="line" style={{ marginBottom: 12 }} />

                {/* Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                      <div style={{
                        width: 4, height: 4, borderRadius: "50%", flexShrink: 0,
                        background: s.dot, marginTop: 7, opacity: .8,
                      }} />
                      <span style={{ fontSize: 13, color: "var(--tx2)", lineHeight: 1.5, fontWeight: 500 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
