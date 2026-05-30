interface Props { dark: boolean; }

const DOTS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  l: +(Math.random() * 100).toFixed(1),
  t: +(Math.random() * 100).toFixed(1),
  s: +(Math.random() * 2 + 1).toFixed(1),
  d: +(Math.random() * 12 + 8).toFixed(1),
  dl: +(Math.random() * 10).toFixed(1),
  o: +(Math.random() * .08 + .02).toFixed(2),
}));

function Ring({ size, dark }: { size: number; dark: boolean }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", padding: 3,
      background: "linear-gradient(135deg, var(--blue) 0%, var(--purple) 60%, var(--teal) 100%)",
      boxShadow: "0 0 48px var(--blue-glow), 0 8px 32px rgba(0,0,0,.18)",
      flexShrink: 0,
      transition: "box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)",
    }}>
      <img src="/logo.webp" alt="نداء" style={{
        width: "100%", height: "100%",
        borderRadius: "50%", objectFit: "cover",
        border: `3px solid ${dark ? "#000" : "#F2F2F7"}`,
        transition: "border-color .3s",
      }} />
    </div>
  );
}

export default function HeroSection({ dark }: Props) {
  return (
    <>
      <style>{`
        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .hero-logo-sm { display: flex; justify-content: center; }
        .hero-logo-lg { display: none; }

        @media (min-width: 780px) {
          .hero-grid {
            flex-direction: row;
            align-items: center;
            gap: 56px;
          }
          .hero-logo-sm { display: none; }
          .hero-logo-lg {
            display: flex; flex-direction: column;
            align-items: center; gap: 14px; flex-shrink: 0;
          }
        }

        .edu-card {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 16px; border-radius: 16px;
          margin-bottom: 8px;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .edu-card:hover { transform: translateY(-1px); box-shadow: var(--shadow2); }
        .edu-card:last-child { margin-bottom: 0; }
      `}</style>

      <section id="hero" style={{
        position: "relative", minHeight: "100svh",
        display: "flex", alignItems: "center",
        overflow: "hidden",
        transition: "background .3s",
        background: dark
          ? "#000"
          : "#F2F2F7",
      }}>

        {/* ── Dynamic Mesh Gradient ── */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          {/* Primary blue orb */}
          <div className="mesh-orb" style={{
            width: "min(600px,90vw)", height: "min(600px,90vw)",
            right: "-15%", top: "-20%",
            background: dark
              ? "radial-gradient(circle, rgba(10,132,255,.18) 0%, rgba(10,132,255,.05) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(0,122,255,.13) 0%, rgba(0,122,255,.04) 50%, transparent 70%)",
            animation: "orb 22s ease-in-out infinite",
          }} />
          {/* Purple orb */}
          <div className="mesh-orb" style={{
            width: "min(400px,70vw)", height: "min(400px,70vw)",
            left: "-12%", bottom: "5%",
            background: dark
              ? "radial-gradient(circle, rgba(191,90,242,.12) 0%, rgba(191,90,242,.03) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(175,82,222,.09) 0%, rgba(175,82,222,.02) 50%, transparent 70%)",
            animation: "orbAlt 28s ease-in-out infinite",
          }} />
          {/* Teal accent */}
          <div className="mesh-orb" style={{
            width: "min(280px,55vw)", height: "min(280px,55vw)",
            left: "40%", top: "60%",
            background: dark
              ? "radial-gradient(circle, rgba(100,210,255,.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(90,200,250,.07) 0%, transparent 70%)",
            animation: "orb 18s 4s ease-in-out infinite",
          }} />
          {/* Subtle noise layer */}
          <div style={{
            position: "absolute", inset: 0,
            background: dark
              ? "linear-gradient(135deg, rgba(10,132,255,.03) 0%, transparent 40%, rgba(191,90,242,.03) 100%)"
              : "linear-gradient(135deg, rgba(0,122,255,.04) 0%, transparent 40%, rgba(175,82,222,.03) 100%)",
          }} />
        </div>

        {/* Ambient dots */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {DOTS.map(d => (
            <div key={d.id} style={{
              position: "absolute", left: `${d.l}%`, top: `${d.t}%`,
              width: d.s, height: d.s, borderRadius: "50%",
              background: "var(--blue)", opacity: d.o,
              animation: `dot ${d.d}s ${d.dl}s ease-in-out infinite`,
            }} />
          ))}
        </div>

        {/* Main content */}
        <div className="wrap" style={{
          position: "relative", zIndex: 1,
          paddingTop: "max(96px, calc(env(safe-area-inset-top, 0px) + 80px))",
          paddingBottom: 80,
          width: "100%",
        }}>
          <div className="hero-grid">

            {/* ── Text block ── */}
            <div style={{ flex: 1 }}>

              {/* Mobile logo */}
              <div className="hero-logo-sm" style={{ marginBottom: 28 }}>
                <Ring size={100} dark={dark} />
              </div>

              {/* Chip */}
              <div className="anim-1" style={{ marginBottom: 16 }}>
                <span className="chip chip-blue" style={{ fontSize: 12 }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--blue)", display: "inline-block",
                    boxShadow: "0 0 6px var(--blue)",
                  }} />
                  أمن سيبراني · تحليل جنائي · تطوير تطبيقات
                </span>
              </div>

              {/* Name */}
              <div className="anim-2" style={{ marginBottom: 14 }}>
                <h1 style={{
                  fontWeight: 800, lineHeight: 1.06,
                  letterSpacing: "-.03em",
                  fontSize: "clamp(2.5rem, 10vw, 4.2rem)",
                  color: "var(--tx1)",
                }}>
                  نداء الرحمن
                  <br />
                  <span style={{
                    background: "linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>عبود</span>
                </h1>
              </div>

              {/* Bio */}
              <div className="anim-3" style={{ marginBottom: 24 }}>
                <p style={{
                  fontSize: "clamp(14px, 3.5vw, 16.5px)",
                  color: "var(--tx2)", lineHeight: 1.65, maxWidth: 440,
                  fontWeight: 500,
                }}>
                  خبير في التحليل الجنائي الرقمي والأمن السيبراني وتطوير التطبيقات.
                </p>
              </div>

              {/* Education */}
              <div className="anim-4" style={{ marginBottom: 26 }}>
                {[
                  { icon: "🎓", txt: "دبلوم تقاني في هندسة الشبكات — جامعة حلب" },
                  { icon: "📜", txt: "شهادة في الأمن السيبراني — منصة إدراك" },
                ].map((e, i) => (
                  <div key={i} className="card edu-card">
                    <span style={{ fontSize: 15, flexShrink: 0 }}>{e.icon}</span>
                    <span style={{ fontSize: 13, color: "var(--tx2)", lineHeight: 1.4, fontWeight: 500 }}>
                      {e.txt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="anim-5" style={{ marginBottom: 30 }}>
                <div className="card" style={{
                  display: "inline-flex", borderRadius: 20,
                  overflow: "hidden", padding: 0,
                }}>
                  {[
                    { n: "+٥",  l: "سنوات خبرة" },
                    { n: "٢",   l: "تطبيق" },
                    { n: "+١٠", l: "أداة جنائية" },
                  ].map((s, i) => (
                    <div key={i} style={{
                      padding: "13px clamp(16px,4vw,28px)", textAlign: "center",
                      borderRight: i > 0 ? ".5px solid var(--sep)" : "none",
                    }}>
                      <div style={{
                        fontSize: "clamp(1.4rem,5vw,1.8rem)",
                        fontWeight: 900, lineHeight: 1, marginBottom: 4,
                        background: "linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}>{s.n}</div>
                      <div style={{ fontSize: 11, color: "var(--tx3)", fontWeight: 600, letterSpacing: .2 }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="anim-6" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#projects" className="btn btn-blue"
                  onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                  style={{ textDecoration: "none", borderRadius: 16 }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  عرض المشاريع
                </a>
                <a href="#contact" className="btn btn-outline"
                  onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  style={{ textDecoration: "none", borderRadius: 16 }}>
                  تواصل معي
                </a>
              </div>

            </div>

            {/* ── Desktop logo ── */}
            <div className="hero-logo-lg anim-1">
              <Ring size={164} dark={dark} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "var(--tx3)", marginBottom: 4, fontWeight: 500 }}>
                  Digital Forensics Specialist
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 700,
                  background: "linear-gradient(90deg, var(--blue), var(--purple))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Cybersecurity · Android · GSM
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          opacity: .18, pointerEvents: "none",
        }}>
          <div style={{ width: 1, height: 28, background: `linear-gradient(180deg,transparent,var(--tx3))` }} />
          <div style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--tx3)" }} />
        </div>

      </section>
    </>
  );
}
