import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

interface Props { dark: boolean; }

const useDots = () => useMemo(() => Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left:  +(Math.random() * 100).toFixed(1),
  top:   +(Math.random() * 100).toFixed(1),
  size:  +(Math.random() * 2.2 + 1).toFixed(1),
  dur:   +(Math.random() * 10 + 7).toFixed(1),
  delay: +(Math.random() * 9).toFixed(1),
  op:    +(Math.random() * 0.12 + 0.04).toFixed(2),
})), []);

export default function HeroSection({ dark }: Props) {
  const chipRef  = useRef<HTMLDivElement>(null);
  const nameRef  = useRef<HTMLDivElement>(null);
  const bodyRef  = useRef<HTMLDivElement>(null);
  const eduRef   = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);
  const dots     = useDots();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    [chipRef, nameRef, bodyRef, eduRef, statsRef, ctaRef].forEach((r, i) => {
      tl.fromTo(r.current,
        { opacity: 0, y: 20 + i * 3 },
        { opacity: 1, y: 0, duration: 0.62, ease: "power2.out" },
        i === 0 ? 0 : "-=0.42"
      );
    });
  }, []);

  const heroBg = dark
    ? "radial-gradient(ellipse 80% 60% at 65% -5%, rgba(10,132,255,0.1) 0%, transparent 55%), #000000"
    : "radial-gradient(ellipse 80% 60% at 65% -5%, rgba(0,122,255,0.07) 0%, transparent 55%), #F2F2F7";

  return (
    <>
      <style>{`
        .hero-layout {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .hero-logo-mobile  { display: flex; justify-content: center; }
        .hero-logo-desktop { display: none; }
        @media (min-width: 768px) {
          .hero-layout {
            flex-direction: row-reverse;
            align-items: center;
            gap: 60px;
          }
          .hero-logo-mobile  { display: none; }
          .hero-logo-desktop { display: flex; flex-direction: column; align-items: center; gap: 14px; flex-shrink: 0; }
          .hero-text { flex: 1; }
        }
        .stats-dividers > div + div { border-right: 0.5px solid var(--separator); }
      `}</style>

      <section id="hero" style={{
        position:"relative", minHeight:"100svh",
        display:"flex", alignItems:"center",
        background: heroBg,
        overflow:"hidden",
        transition:"background 0.35s",
      }}>
        {/* Orbs */}
        <div style={{
          position:"absolute", width:500, height:500, borderRadius:"50%",
          right:"-15%", top:"0%", filter:"blur(100px)", pointerEvents:"none",
          background: dark ? "rgba(10,132,255,0.09)" : "rgba(0,122,255,0.06)",
          animation:"floatOrb 22s ease-in-out infinite",
        }} />
        <div style={{
          position:"absolute", width:350, height:350, borderRadius:"50%",
          left:"-10%", bottom:"5%", filter:"blur(80px)", pointerEvents:"none",
          background: dark ? "rgba(191,90,242,0.07)" : "rgba(175,82,222,0.05)",
          animation:"floatOrb 28s 7s ease-in-out infinite",
        }} />

        {/* Ambient dots */}
        <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
          {dots.map(d => (
            <div key={d.id} style={{
              position:"absolute", left:`${d.left}%`, top:`${d.top}%`,
              width:d.size, height:d.size, borderRadius:"50%",
              background:"var(--accent)", opacity:d.op,
              animation:`floatDot ${d.dur}s ${d.delay}s ease-in-out infinite`,
            }} />
          ))}
        </div>

        <div className="container" style={{ position:"relative", zIndex:1, padding:"100px 20px 72px", width:"100%" }}>
          <div className="hero-layout">

            {/* Mobile logo — top center */}
            <div className="hero-logo-mobile">
              <LogoCircle size={110} dark={dark} />
            </div>

            {/* Text */}
            <div className="hero-text">
              <div ref={chipRef} style={{ marginBottom:18, opacity:0 }}>
                <span className="chip chip-blue">
                  <span style={{ width:6, height:6, borderRadius:"50%",
                    background:"var(--blue-color)", display:"inline-block" }} />
                  مهندس برمجيات واختصاصي أمن سيبراني
                </span>
              </div>

              <div ref={nameRef} style={{ marginBottom:14, opacity:0 }}>
                <h1 className="ios-largetitle" style={{ color:"var(--label-primary)" }}>
                  نداء الرحمن
                  <br />
                  <span style={{ color:"var(--accent)" }}>عبود</span>
                </h1>
              </div>

              <div ref={bodyRef} style={{ marginBottom:22, opacity:0 }}>
                <p className="ios-callout" style={{ maxWidth:480 }}>
                  خبير في التحليل الجنائي الرقمي والأمن السيبراني وتطوير التطبيقات.
                </p>
              </div>

              <div ref={eduRef} style={{ marginBottom:26, opacity:0 }}>
                <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  {[
                    { icon:"🎓", text:"دبلوم تقاني في هندسة الشبكات — جامعة حلب" },
                    { icon:"📜", text:"شهادة في الأمن السيبراني — منصة إدراك" },
                  ].map((item, i) => (
                    <div key={i} className="glass-card" style={{
                      padding:"11px 15px", display:"flex", alignItems:"center",
                      gap:11, borderRadius:"var(--r-md)",
                    }}>
                      <span style={{ fontSize:15, flexShrink:0 }}>{item.icon}</span>
                      <span className="ios-footnote" style={{ color:"var(--label-primary)" }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div ref={statsRef} style={{ marginBottom:30, opacity:0 }}>
                <div className="stats-dividers glass-card" style={{
                  display:"inline-flex", borderRadius:"var(--r-xl)", overflow:"hidden",
                  padding:"2px 0",
                }}>
                  {[
                    { num:"+٥",  label:"سنوات خبرة" },
                    { num:"٢",   label:"تطبيق مستقل" },
                    { num:"+١٠", label:"أداة جنائية" },
                  ].map((s, i) => (
                    <div key={s.label} style={{
                      padding:"12px 20px", textAlign:"center", minWidth:80,
                    }}>
                      <div style={{
                        fontSize:"1.7rem", fontWeight:900,
                        color:"var(--accent)", lineHeight:1, marginBottom:3,
                      }}>
                        {s.num}
                      </div>
                      <div className="ios-caption1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div ref={ctaRef} style={{ display:"flex", gap:10, flexWrap:"wrap", opacity:0 }}>
                <a href="#projects" className="btn-ios btn-filled"
                  onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior:"smooth" }); }}
                  style={{ textDecoration:"none" }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  المشاريع
                </a>
                <a href="#contact" className="btn-ios btn-glass"
                  onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior:"smooth" }); }}
                  style={{ textDecoration:"none" }}>
                  تواصل معي
                </a>
              </div>
            </div>

            {/* Desktop logo — side */}
            <div className="hero-logo-desktop">
              <LogoCircle size={160} dark={dark} />
              <div style={{ textAlign:"center" }}>
                <div className="ios-caption2" style={{ marginBottom:4 }}>Digital Forensics Specialist</div>
                <div style={{ fontSize:11, color:"var(--accent)", fontWeight:700 }}>
                  Cybersecurity · Android · GSM
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position:"absolute", bottom:20, left:"50%", transform:"translateX(-50%)",
          display:"flex", flexDirection:"column", alignItems:"center", gap:5,
          opacity:0.25, pointerEvents:"none",
        }}>
          <div style={{ width:1, height:28,
            background:"linear-gradient(180deg, transparent, var(--label-tertiary))" }} />
          <div style={{ width:3, height:3, borderRadius:"50%", background:"var(--label-tertiary)" }} />
        </div>
      </section>
    </>
  );
}

function LogoCircle({ size, dark }: { size: number; dark: boolean }) {
  return (
    <div style={{
      width:size, height:size, borderRadius:"50%", padding:3,
      background:"linear-gradient(135deg, var(--accent) 0%, var(--purple-color) 100%)",
      boxShadow:"0 0 40px var(--accent-glow), 0 8px 32px rgba(0,0,0,0.2)",
      flexShrink:0,
    }}>
      <img src="/logo.webp" alt="شعار نداء" style={{
        width:"100%", height:"100%", borderRadius:"50%",
        objectFit:"cover", display:"block",
        border: `3px solid ${dark ? "#000" : "#F2F2F7"}`,
        transition:"border-color 0.3s",
      }} />
    </div>
  );
}
