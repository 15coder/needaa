const SKILLS = [
  {
    id: "forensics", icon: "🔬",
    title: "التحليل الجنائي الرقمي", sub: "Digital Forensics",
    chip: "chip-blue", dot: "var(--blue)",
    items: ["Cellebrite UFED & Oxygen Forensic", "تجاوز الأقفال واستخراج البيانات", "تحليل الأجهزة المشفرة والمقفلة"],
  },
  {
    id: "mobile", icon: "📱",
    title: "برمجيات الهاتف المتقدمة", sub: "Advanced Mobile",
    chip: "chip-purple", dot: "var(--purple)",
    items: ["Pandora / Chimera / DFT Pro", "EFT Pro / Z3X Box", "تجاوز iCloud & Android FRP", "Firmware Management"],
  },
  {
    id: "gsm", icon: "📡",
    title: "إدارة سيرفرات GSM", sub: "GSM Server Management",
    chip: "chip-teal", dot: "var(--teal)",
    items: ["HalabTech Server", "شراء الكريدت وإدارة الاشتراكات", "نشر Firmware آمن"],
  },
  {
    id: "dev", icon: "⚡",
    title: "هندسة البرمجيات", sub: "Software Engineering",
    chip: "chip-orange", dot: "var(--orange)",
    items: ["تصميم تطبيقات Android", "برمجة المواقع الإلكترونية"],
  },
  {
    id: "design", icon: "🎨",
    title: "تصميم جرافيكي", sub: "Graphic Design",
    chip: "chip-pink", dot: "var(--pink)",
    items: ["تصميم جرافيكي احترافي", "تصميم بوسترات بطابع حديث"],
  },
  {
    id: "pc", icon: "🖥️",
    title: "صيانة الحاسب", sub: "PC Maintenance",
    chip: "chip-green", dot: "var(--green)",
    items: ["صيانة هاردوير شاملة", "تثبيت وإدارة الأنظمة", "استعادة البيانات"],
  },
];

export default function SkillsSection() {
  return (
    <>
      <style>{`
        .skills-grid {
          display:grid;
          grid-template-columns:1fr;
          gap:12px;
        }
        @media(min-width:480px){
          .skills-grid { grid-template-columns:1fr 1fr; }
        }
        @media(min-width:900px){
          .skills-grid { grid-template-columns:1fr 1fr 1fr; }
        }
      `}</style>

      <section id="skills" className="section"
        style={{ background: "var(--bg)", transition: "background .25s" }}>
        <div className="wrap">

          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="chip chip-blue" style={{ marginBottom: 12 }}>المهارات التقنية</span>
            <h2 style={{
              fontSize: "clamp(1.5rem, 4.5vw, 2.1rem)",
              fontWeight: 800, color: "var(--tx1)",
              letterSpacing: "-.02em", marginBottom: 12,
            }}>الكفاءات والخبرات</h2>
            <div style={{
              width: 30, height: 3, borderRadius: 2, margin: "0 auto",
              background: "linear-gradient(90deg,var(--blue),var(--purple))",
            }} />
          </div>

          {/* Grid */}
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div key={s.id} className="card reveal"
                style={{
                  padding: "20px 18px",
                  transitionDelay: `${i * 60}ms`,
                }}>

                {/* Head */}
                <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                    background: "var(--fill)", fontSize: 19,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{s.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontSize: 14, fontWeight: 700, color: "var(--tx1)",
                      marginBottom: 4, lineHeight: 1.3,
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
                        width: 5, height: 5, borderRadius: "50%", flexShrink: 0,
                        background: s.dot, marginTop: 6,
                      }} />
                      <span style={{ fontSize: 13, color: "var(--tx2)", lineHeight: 1.45 }}>
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
