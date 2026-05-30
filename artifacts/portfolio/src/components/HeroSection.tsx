interface Props { dark: boolean; }

const DOTS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  l: +(Math.random() * 100).toFixed(1),
  t: +(Math.random() * 100).toFixed(1),
  s: +(Math.random() * 1.6 + 0.8).toFixed(1),
  d: +(Math.random() * 14 + 8).toFixed(1),
  dl: +(Math.random() * 10).toFixed(1),
  o: +(Math.random() * .06 + .02).toFixed(2),
}));

function Ring({ size, dark }: { size: number; dark: boolean }) {
  const border = size * 0.032;
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      padding: border,
      background: "linear-gradient(135deg, rgba(0,122,255,.55) 0%, rgba(175,82,222,.55) 55%, rgba(90,200,250,.45) 100%)",
      flexShrink: 0,
      boxShadow: `0 0 0 1.5px rgba(255,255,255,0.55), 0 4px 24px rgba(0,122,255,.18)`,
    }}>
      <img src="/logo.webp" alt="نداء" style={{
        width: "100%", height: "100%",
        borderRadius: "50%", objectFit: "cover",
        border: `${border}px solid ${dark ? "rgba(0,0,0,.55)" : "rgba(240,240,248,.85)"}`,
        transition: "border-color .35s",
        display: "block",
      }} />
    </div>
  );
}

export default function HeroSection({ dark }: Props) {
  return (
    <>
      <style>{`
        /* Mobile: logo above name, stacked */
        .hero-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }
        .hero-text { width: 100%; }
        .hero-logo-desktop { display: none; }

        /* Desktop: side-by-side */
        @media (min-width: 760px) {
          .hero-layout {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: right;
            gap: 48px;
          }
          .hero-text { flex: 1; }
          .hero-logo-mobile { display: none; }
          .hero-logo-desktop {
            display: flex; flex-direction: column;
            align-items: center; gap: 12px; flex-shrink: 0;
          }
        }

        /* Buttons */
        .hero-btns {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
        .hero-btns .btn {
          width: 100%;
          height: 48px;
          font-size: 15.5px;
          border-radius: 14px;
          justify-content: center;
        }
        @media(min-width:480px) {
          .hero-btns { flex-direction: row; }
          .hero-btns .btn-blue   { flex: 3; }
          .hero-btns .btn-outline { flex: 2; }
        }
        @media(min-width:760px) {
          .hero-btns { width: auto; }
          .hero-btns .btn { width: auto; }
        }

        .edu-pill {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 16px; border-radius: 16px;
          margin-bottom: 8px;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
          text-align: right;
        }
        .edu-pill:hover { transform: translateY(-1px); box-shadow: var(--shadow2); }
        .edu-pill:last-child { margin-bottom: 0; }
      `}</style>

      <section id="hero" style={{
        position: "relative", minHeight: "100svh",
        display: "flex", alignItems: "center",
        overflow: "hidden",
      }}>

        {/* Ambient dots */}
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

        <div className="wrap" style={{
          position: "relative", zIndex: 1,
          paddingTop: "max(96px, calc(env(safe-area-inset-top,0px) + 80px))",
          paddingBottom: 80, width: "100%",
        }}>
          <div className="hero-layout">

            {/* Mobile: logo on top, centered */}
            <div className="hero-logo-mobile anim-1">
              <Ring size={110} dark={dark} />
            </div>

            {/* Text */}
            <div className="hero-text">

              {/* Name */}
              <div className="anim-1" style={{ marginBottom: 10 }}>
                <h1 style={{
                  fontWeight: 800, lineHeight: 1.08, letterSpacing: "-.028em",
                  fontSize: "clamp(2.1rem, 9vw, 4rem)",
                  color: "var(--tx1)",
                }}>
                  نداء الرحمن
                  <br />
                  <span style={{
                    background: "linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>عبود</span>
                </h1>
              </div>

              {/* Bio */}
              <div className="anim-2" style={{ marginBottom: 22 }}>
                <p style={{
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  color: "var(--tx2)", lineHeight: 1.65,
                  maxWidth: 420, fontWeight: 500,
                  margin: "0 auto",
                }}>
                  خبير في التحليل الجنائي الرقمي والأمن السيبراني وتطوير التطبيقات.
                </p>
              </div>

              {/* Education */}
              <div className="anim-3" style={{ marginBottom: 26 }}>
                {[
                  { icon: "🎓", txt: "دبلوم تقاني في هندسة الشبكات — جامعة حلب" },
                  { icon: "📜", txt: "شهادة في الأمن السيبراني — منصة إدراك" },
                ].map((e, i) => (
                  <div key={i} className="card edu-pill">
                    <span style={{ fontSize: 15, flexShrink: 0 }}>{e.icon}</span>
                    <span style={{ fontSize: 13, color: "var(--tx2)", lineHeight: 1.4, fontWeight: 500 }}>
                      {e.txt}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="anim-4 hero-btns">
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

            {/* Desktop: logo on side */}
            <div className="hero-logo-desktop anim-1">
              <Ring size={168} dark={dark} />
              <div style={{ textAlign: "center", marginTop: 10 }}>
                <div style={{ fontSize: 11, color: "var(--tx3)", marginBottom: 4, fontWeight: 500 }}>
                  Digital Forensics Specialist
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 700,
                  background: "linear-gradient(90deg, var(--blue), var(--purple))",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Cybersecurity · Android · GSM</div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          opacity: .15, pointerEvents: "none",
        }}>
          <div style={{ width: 1, height: 28, background: "linear-gradient(180deg,transparent,var(--tx3))" }} />
          <div style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--tx3)" }} />
        </div>
      </section>
    </>
  );
}
