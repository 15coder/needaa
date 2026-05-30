interface Props { dark: boolean; }

function Ring({ size, dark }: { size: number; dark: boolean }) {
  const pad = Math.round(size * 0.034);
  const inner = Math.round(size * 0.028);
  return (
    <div className="anim-ring" style={{
      width: size, height: size, borderRadius: "50%",
      padding: pad,
      background: "linear-gradient(145deg, rgba(0,122,255,.70) 0%, rgba(175,82,222,.65) 55%, rgba(90,200,250,.60) 100%)",
      flexShrink: 0,
      boxShadow: `0 0 0 1.5px rgba(255,255,255,0.50),
                  0 8px 40px rgba(0,122,255,.26),
                  0 2px 12px rgba(175,82,222,.18)`,
    }}>
      <div style={{
        width: "100%", height: "100%", borderRadius: "50%",
        padding: inner,
        background: dark ? "rgba(8,8,15,.88)" : "rgba(242,242,252,.90)",
        transition: "background .35s",
      }}>
        <img src="/logo.webp" alt="نداء" style={{
          width: "100%", height: "100%",
          borderRadius: "50%", objectFit: "cover",
          display: "block",
        }} />
      </div>
    </div>
  );
}

export default function HeroSection({ dark }: Props) {
  return (
    <>
      <style>{`
        .hero-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          text-align: center;
        }
        .hero-logo-desktop { display: none; }
        .hero-logo-mobile  { margin-bottom: 28px; }

        @media (min-width: 760px) {
          .hero-layout {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: right;
            gap: 56px;
          }
          .hero-logo-mobile  { display: none; }
          .hero-logo-desktop {
            display: flex; flex-direction: column;
            align-items: center; gap: 14px; flex-shrink: 0;
            margin-bottom: 0;
          }
        }

        .hero-btns {
          display: flex;
          flex-direction: column;
          gap: 11px;
          width: 100%;
          margin-top: 32px;
        }
        .hero-btns .btn {
          width: 100%;
          height: 52px;
          font-size: 16px;
          border-radius: 16px;
          justify-content: center;
        }
        @media(min-width:460px) {
          .hero-btns { flex-direction: row; }
          .hero-btns .btn-blue    { flex: 3; }
          .hero-btns .btn-outline { flex: 2; }
        }

        .edu-pill {
          display: flex; align-items: center; gap: 12px;
          padding: 13px 18px; border-radius: 18px;
          margin-bottom: 10px; text-align: right;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .edu-pill:hover { transform: translateY(-2px) scale(1.01); box-shadow: var(--shadow2); }
        .edu-pill:last-child { margin-bottom: 0; }
      `}</style>

      <section id="hero" style={{
        position: "relative", minHeight: "100svh",
        display: "flex", alignItems: "center",
        overflow: "hidden",
      }}>
        <div className="wrap" style={{
          position: "relative", zIndex: 1,
          paddingTop: "max(104px, calc(env(safe-area-inset-top,0px) + 88px))",
          paddingBottom: 90, width: "100%",
        }}>
          <div className="hero-layout">

            {/* Mobile logo — big & centered */}
            <div className="hero-logo-mobile">
              <Ring size={148} dark={dark} />
            </div>

            {/* Text block */}
            <div className="hero-text" style={{ width: "100%" }}>

              {/* Name — single line with gradient */}
              <div className="anim-1" style={{ marginBottom: 16 }}>
                <h1 style={{
                  fontWeight: 900,
                  lineHeight: 1.06,
                  letterSpacing: "-.03em",
                  fontSize: "clamp(1.9rem, 8.5vw, 4rem)",
                  whiteSpace: "nowrap",
                  background: "linear-gradient(135deg, var(--tx1) 0%, var(--tx1) 38%, var(--blue) 60%, var(--purple) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  نداء الرحمن عبود
                </h1>
              </div>

              {/* Bio */}
              <div className="anim-2" style={{ marginBottom: 28 }}>
                <p style={{
                  fontSize: "clamp(14.5px, 3.6vw, 16.5px)",
                  color: "var(--tx2)", lineHeight: 1.7,
                  maxWidth: 440, fontWeight: 500,
                  margin: "0 auto",
                }}>
                  خبير في التحليل الجنائي الرقمي والأمن السيبراني وتطوير التطبيقات.
                </p>
              </div>

              {/* Education */}
              <div className="anim-3" style={{ marginBottom: 0 }}>
                {[
                  { icon: "🎓", txt: "دبلوم تقاني في هندسة الشبكات — جامعة حلب" },
                  { icon: "📜", txt: "شهادة في الأمن السيبراني — منصة إدراك" },
                ].map((e, i) => (
                  <div key={i} className="card edu-pill">
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{e.icon}</span>
                    <span style={{ fontSize: 13.5, color: "var(--tx2)", lineHeight: 1.45, fontWeight: 500 }}>
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
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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

            {/* Desktop logo — side */}
            <div className="hero-logo-desktop">
              <Ring size={210} dark={dark} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11.5, color: "var(--tx3)", marginBottom: 5, fontWeight: 600 }}>
                  Digital Forensics Specialist
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 800,
                  background: "linear-gradient(90deg, var(--blue), var(--purple))",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text", letterSpacing: .5,
                }}>Cybersecurity · Android · GSM</div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 7,
          opacity: .18, pointerEvents: "none",
          animation: "fadeUp 1.2s 1.4s both var(--spring)",
        }}>
          <div style={{ width: 1, height: 32, background: "linear-gradient(180deg,transparent,var(--tx3))" }} />
          <div style={{ width: 3.5, height: 3.5, borderRadius: "50%", background: "var(--tx3)" }} />
        </div>
      </section>
    </>
  );
}
