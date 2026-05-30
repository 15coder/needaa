const SKILLS = [
  {
    id: "forensics", icon: "🔬",
    title: "التحليل الجنائي الرقمي", sub: "Digital Forensics",
    chip: "chip-blue", dot: "var(--blue)",
    accent: "rgba(0,122,255,.08)",
    items: ["Cellebrite UFED & Oxygen Forensic", "تجاوز الأقفال واستخراج البيانات", "تحليل الأجهزة المشفرة والمقفلة"],
  },
  {
    id: "mobile", icon: "📱",
    title: "برمجيات الهاتف المتقدمة", sub: "Advanced Mobile",
    chip: "chip-purple", dot: "var(--purple)",
    accent: "rgba(175,82,222,.08)",
    items: ["Pandora / Chimera / DFT Pro", "EFT Pro / Z3X Box", "تجاوز iCloud & Android FRP", "Firmware Management"],
  },
  {
    id: "gsm", icon: "📡",
    title: "إدارة سيرفرات GSM", sub: "GSM Server Management",
    chip: "chip-teal", dot: "var(--teal)",
    accent: "rgba(90,200,250,.08)",
    items: ["HalabTech Server", "شراء الكريدت وإدارة الاشتراكات", "نشر Firmware آمن"],
  },
  {
    id: "dev", icon: "⚡",
    title: "هندسة البرمجيات", sub: "Software Engineering",
    chip: "chip-orange", dot: "var(--orange)",
    accent: "rgba(255,149,0,.08)",
    items: ["تصميم تطبيقات Android", "برمجة المواقع الإلكترونية"],
  },
  {
    id: "design", icon: "🎨",
    title: "تصميم جرافيكي", sub: "Graphic Design",
    chip: "chip-pink", dot: "var(--pink)",
    accent: "rgba(255,45,85,.08)",
    items: ["تصميم جرافيكي احترافي", "تصميم بوسترات بطابع حديث"],
  },
  {
    id: "pc", icon: "🖥️",
    title: "صيانة الحاسب", sub: "PC Maintenance",
    chip: "chip-green", dot: "var(--green)",
    accent: "rgba(52,199,89,.08)",
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
          gap: 14px;
        }
        @media(min-width:480px) {
          .skills-grid { grid-template-columns: 1fr 1fr; }
        }
        @media(min-width:900px) {
          .skills-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        .skill-card {
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .skill-card:hover { transform: translateY(-2px) scale(1.01); box-shadow: var(--shadow2); }
        .skill-card:active { transform: scale(0.97); }
      `}</style>

      <section id="skills" className="section" style={{
        background: "var(--bg)", transition: "background .3s",
      }}>

        {/* Mesh background */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div className="mesh-orb" style={{
            width: "min(500px,80vw)", height: "min(500px,80vw)",
            right: "-10%", top: "-20%",
            background: "radial-gradient(circle, rgba(175,82,222,.07) 0%, transparent 70%)",
            animation: "orbAlt 24s ease-in-out infinite",
          }} />
          <div className="mesh-orb" style={{
            width: "min(400px,70vw)", height: "min(400px,70vw)",
            left: "-8%", bottom: "-10%",
            background: "radial-gradient(circle, rgba(0,122,255,.06) 0%, transparent 70%)",
            animation: "orb 30s ease-in-out infinite",
          }} />
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="chip chip-blue" style={{ marginBottom: 14 }}>المهارات التقنية</span>
            <h2 style={{
              fontSize: "clamp(1.6rem, 4.5vw, 2.2rem)",
              fontWeight: 800, color: "var(--tx1)",
              letterSpacing: "-.02em", marginBottom: 14, lineHeight: 1.15,
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
                padding: "22px 20px",
                transitionDelay: `${i * 55}ms`,
                borderRadius: 24,
              }}>

                {/* Accent blob inside card */}
                <div style={{
                  position: "absolute", top: -20, right: -20,
                  width: 80, height: 80, borderRadius: "50%",
                  background: s.accent,
                  filter: "blur(24px)",
                  pointerEvents: "none",
                }} />

                {/* Head */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, position: "relative" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: s.accent,
                    border: `1px solid ${s.dot}22`,
                    fontSize: 20,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{s.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontSize: 14, fontWeight: 700, color: "var(--tx1)",
                      marginBottom: 5, lineHeight: 1.3,
                      letterSpacing: "-.01em",
                    }}>{s.title}</div>
                    <span className={`chip ${s.chip}`} style={{ padding: "3px 9px", fontSize: 11 }}>
                      {s.sub}
                    </span>
                  </div>
                </div>

                <div className="line" style={{ marginBottom: 14 }} />

                {/* Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 9, position: "relative" }}>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{
                        width: 5, height: 5, borderRadius: "50%", flexShrink: 0,
                        background: s.dot, marginTop: 7,
                        boxShadow: `0 0 6px ${s.dot}`,
                        opacity: .85,
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
