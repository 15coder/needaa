interface Props { dark: boolean; }

const DOTS = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  l: +(Math.random() * 100).toFixed(1),
  t: +(Math.random() * 100).toFixed(1),
  s: +(Math.random() * 1.8 + 0.8).toFixed(1),
  d: +(Math.random() * 12 + 8).toFixed(1),
  dl: +(Math.random() * 10).toFixed(1),
  o: +(Math.random() * .07 + .02).toFixed(2),
}));

function Ring({ size, dark }: { size: number; dark: boolean }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      padding: 3,
      background: "linear-gradient(135deg, rgba(0,122,255,.5) 0%, rgba(175,82,222,.5) 60%, rgba(90,200,250,.4) 100%)",
      flexShrink: 0,
      position: "relative",
    }}>
      {/* Glass ring effect */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.60)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 1, pointerEvents: "none",
      }} />
      <img src="/logo.webp" alt="نداء" style={{
        width: "100%", height: "100%",
        borderRadius: "50%", objectFit: "cover",
        border: `2.5px solid ${dark ? "rgba(0,0,0,.6)" : "rgba(240,240,248,.8)"}`,
        transition: "border-color .35s",
      }} />
    </div>
  );
}

export default function HeroSection({ dark: _ }: Props) {
  return (
    <>
      <style>{`
        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .hero-logo-sm { display: flex; justify-content: center; }
        .hero-logo-lg { display: none; }

        @media (min-width: 780px) {
          .hero-grid { flex-direction: row; align-items: center; gap: 52px; }
          .hero-logo-sm { display: none; }
          .hero-logo-lg {
            display: flex; flex-direction: column;
            align-items: center; gap: 14px; flex-shrink: 0;
          }
        }

        /* Hero CTA buttons — mobile: stack full-width; desktop: row */
        .hero-cta-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .hero-cta-row .btn {
          width: 100%;
          justify-content: center;
          border-radius: 14px;
          height: 48px;
          font-size: 15px;
        }
        @media (min-width: 480px) {
          .hero-cta-row {
            flex-direction: row;
          }
          .hero-cta-row .btn-blue  { flex: 65; }
          .hero-cta-row .btn-outline { flex: 35; }
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
      }}>

        {/* Subtle ambient dots */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
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
          paddingTop: "max(100px, calc(env(safe-area-inset-top, 0px) + 84px))",
          paddingBottom: 80,
          width: "100%",
        }}>
          <div className="hero-grid">

            {/* ── Text block ── */}
            <div style={{ flex: 1 }}>

              {/* Mobile logo */}
              <div className="hero-logo-sm" style={{ marginBottom: 28 }}>
                <Ring size={96} dark={_} />
              </div>

              {/* Specialty chip */}
              <div className="anim-1" style={{ marginBottom: 16 }}>
                <span className="chip chip-blue" style={{ fontSize: 12 }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--blue)", display: "inline-block",
                    boxShadow: "0 0 8px var(--blue)",
                  }} />
                  أمن سيبراني · تحليل جنائي · تطوير تطبيقات
                </span>
              </div>

              {/* Name — tighter size for small screens */}
              <div className="anim-2" style={{ marginBottom: 14 }}>
                <h1 style={{
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-.028em",
                  fontSize: "clamp(2rem, 8.5vw, 3.8rem)",
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
              <div className="anim-3" style={{ marginBottom: 22 }}>
                <p style={{
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  color: "var(--tx2)", lineHeight: 1.65, maxWidth: 420,
                  fontWeight: 500,
                }}>
                  خبير في التحليل الجنائي الرقمي والأمن السيبراني وتطوير التطبيقات.
                </p>
              </div>

              {/* Education */}
              <div className="anim-4" style={{ marginBottom: 24 }}>
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
              <div className="anim-5" style={{ marginBottom: 28 }}>
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
                      padding: "12px clamp(14px,4vw,26px)", textAlign: "center",
                      borderRight: i > 0 ? ".5px solid var(--sep)" : "none",
                    }}>
                      <div style={{
                        fontSize: "clamp(1.3rem,5vw,1.75rem)",
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
              <div className="anim-6 hero-cta-row">
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

            {/* ── Desktop logo ── */}
            <div className="hero-logo-lg anim-1">
              <Ring size={160} dark={_} />
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
                }}>Cybersecurity · Android · GSM</div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          opacity: .15, pointerEvents: "none",
        }}>
          <div style={{ width: 1, height: 28, background: `linear-gradient(180deg,transparent,var(--tx3))` }} />
          <div style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--tx3)" }} />
        </div>

      </section>
    </>
  );
}
