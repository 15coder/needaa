interface Props { dark: boolean; }

const DOTS = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  l: +(Math.random() * 100).toFixed(1),
  t: +(Math.random() * 100).toFixed(1),
  s: +(Math.random() * 2 + 1).toFixed(1),
  d: +(Math.random() * 10 + 6).toFixed(1),
  dl: +(Math.random() * 8).toFixed(1),
  o: +(Math.random() * .10 + .03).toFixed(2),
}));

function Ring({ size, dark }: { size: number; dark: boolean }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", padding: 3,
      background: "linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)",
      boxShadow: "0 0 32px var(--blue-glow), 0 6px 20px rgba(0,0,0,.15)",
      flexShrink: 0,
    }}>
      <img src="/logo.webp" alt="نداء" style={{
        width: "100%", height: "100%",
        borderRadius: "50%", objectFit: "cover",
        border: `3px solid ${dark ? "#000" : "#F2F2F7"}`,
        transition: "border-color .25s",
      }} />
    </div>
  );
}

export default function HeroSection({ dark }: Props) {
  const bg = dark
    ? "radial-gradient(ellipse 80% 55% at 65% -10%,rgba(10,132,255,.10) 0%,transparent 55%), #000"
    : "radial-gradient(ellipse 80% 55% at 65% -10%,rgba(0,122,255,.07) 0%,transparent 55%), #F2F2F7";

  return (
    <>
      <style>{`
        /* Mobile: single column, logo on top */
        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .hero-logo-sm { display: flex; justify-content: center; }
        .hero-logo-lg { display: none; }

        /* Desktop: two-column, logo on left side */
        @media (min-width: 780px) {
          .hero-grid {
            flex-direction: row;
            align-items: center;
            gap: 52px;
          }
          .hero-logo-sm { display: none; }
          .hero-logo-lg { display: flex; flex-direction: column; align-items: center; gap: 12px; flex-shrink: 0; }
        }
      `}</style>

      <section id="hero" style={{
        position: "relative", minHeight: "100svh",
        display: "flex", alignItems: "center",
        background: bg, overflow: "hidden",
        transition: "background .3s",
      }}>

        {/* Background orbs */}
        <div style={{
          position: "absolute", borderRadius: "50%",
          width: "min(460px,85vw)", height: "min(460px,85vw)",
          right: "-12%", top: "-8%",
          background: dark ? "rgba(10,132,255,.08)" : "rgba(0,122,255,.05)",
          filter: "blur(80px)", pointerEvents: "none",
          animation: "orb 20s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", borderRadius: "50%",
          width: "min(300px,65vw)", height: "min(300px,65vw)",
          left: "-10%", bottom: "10%",
          background: dark ? "rgba(191,90,242,.06)" : "rgba(175,82,222,.04)",
          filter: "blur(65px)", pointerEvents: "none",
          animation: "orb 25s 8s ease-in-out infinite",
        }} />

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
          paddingTop: "max(90px, calc(env(safe-area-inset-top, 0px) + 76px))",
          paddingBottom: 72,
          width: "100%",
        }}>
          <div className="hero-grid">

            {/* ── Text block (shows in both layouts) ── */}
            <div style={{ flex: 1 }}>

              {/* Mobile logo — inside text column so it stacks naturally */}
              <div className="hero-logo-sm" style={{ marginBottom: 24 }}>
                <Ring size={96} dark={dark} />
              </div>

              {/* Chip */}
              <div className="anim-1" style={{ marginBottom: 15 }}>
                <span className="chip chip-blue" style={{ fontSize: 12 }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "var(--blue)", display: "inline-block",
                  }} />
                  أمن سيبراني · تحليل جنائي · تطوير تطبيقات
                </span>
              </div>

              {/* Name */}
              <div className="anim-2" style={{ marginBottom: 12 }}>
                <h1 style={{
                  fontWeight: 900, lineHeight: 1.07,
                  letterSpacing: "-.03em",
                  fontSize: "clamp(2.4rem, 10vw, 4rem)",
                  color: "var(--tx1)",
                }}>
                  نداء الرحمن
                  <br />
                  <span style={{ color: "var(--blue)" }}>عبود</span>
                </h1>
              </div>

              {/* Bio */}
              <div className="anim-3" style={{ marginBottom: 22 }}>
                <p style={{
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  color: "var(--tx2)", lineHeight: 1.65, maxWidth: 440,
                }}>
                  خبير في التحليل الجنائي الرقمي والأمن السيبراني وتطوير التطبيقات.
                </p>
              </div>

              {/* Education pills */}
              <div className="anim-4" style={{ marginBottom: 24 }}>
                {[
                  { icon: "🎓", txt: "دبلوم تقاني في هندسة الشبكات — جامعة حلب" },
                  { icon: "📜", txt: "شهادة في الأمن السيبراني — منصة إدراك" },
                ].map((e, i) => (
                  <div key={i} className="card" style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 14px", borderRadius: 14,
                    marginBottom: i === 0 ? 8 : 0,
                  }}>
                    <span style={{ fontSize: 14, flexShrink: 0 }}>{e.icon}</span>
                    <span style={{ fontSize: 13, color: "var(--tx2)", lineHeight: 1.4 }}>{e.txt}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="anim-5" style={{ marginBottom: 28 }}>
                <div className="card" style={{
                  display: "inline-flex", borderRadius: 18,
                  overflow: "hidden", padding: 0,
                }}>
                  {[
                    { n: "+٥",  l: "سنوات خبرة" },
                    { n: "٢",   l: "تطبيق" },
                    { n: "+١٠", l: "أداة جنائية" },
                  ].map((s, i) => (
                    <div key={i} style={{
                      padding: "11px clamp(14px,3.5vw,24px)", textAlign: "center",
                      borderRight: i > 0 ? ".5px solid var(--sep)" : "none",
                    }}>
                      <div style={{
                        fontSize: "clamp(1.3rem,5vw,1.7rem)",
                        fontWeight: 900, color: "var(--blue)", lineHeight: 1, marginBottom: 3,
                      }}>{s.n}</div>
                      <div style={{ fontSize: 11, color: "var(--tx3)", fontWeight: 600 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="anim-6" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="#projects" className="btn btn-blue"
                  onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                  style={{ textDecoration: "none" }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  عرض المشاريع
                </a>
                <a href="#contact" className="btn btn-outline"
                  onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  style={{ textDecoration: "none" }}>
                  تواصل معي
                </a>
              </div>

            </div>

            {/* ── Desktop logo (right/left column) ── */}
            <div className="hero-logo-lg anim-1">
              <Ring size={156} dark={dark} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "var(--tx3)", marginBottom: 3 }}>
                  Digital Forensics Specialist
                </div>
                <div style={{ fontSize: 11, color: "var(--blue)", fontWeight: 700 }}>
                  Cybersecurity · Android · GSM
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
          opacity: .2, pointerEvents: "none",
        }}>
          <div style={{ width: 1, height: 24, background: `linear-gradient(180deg,transparent,var(--tx3))` }} />
          <div style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--tx3)" }} />
        </div>

      </section>
    </>
  );
}
