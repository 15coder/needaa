import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

interface Props { dark: boolean; }

export default function HeroSection({ dark }: Props) {
  const refs = {
    chip:  useRef<HTMLDivElement>(null),
    name:  useRef<HTMLDivElement>(null),
    body:  useRef<HTMLDivElement>(null),
    edu:   useRef<HTMLDivElement>(null),
    stats: useRef<HTMLDivElement>(null),
    cta:   useRef<HTMLDivElement>(null),
  };

  const dots = useMemo(() => Array.from({ length:38 }, (_, i) => ({
    id: i,
    l: +(Math.random()*100).toFixed(1),
    t: +(Math.random()*100).toFixed(1),
    s: +(Math.random()*2+1).toFixed(1),
    d: +(Math.random()*10+7).toFixed(1),
    delay: +(Math.random()*9).toFixed(1),
    o: +(Math.random()*.10+.03).toFixed(2),
  })), []);

  useEffect(() => {
    const tl = gsap.timeline({ delay:.25 });
    Object.values(refs).forEach((r, i) => {
      tl.fromTo(r.current,
        { opacity:0, y:18+i*3 },
        { opacity:1, y:0, duration:.6, ease:"power2.out" },
        i===0 ? 0 : "-=.42"
      );
    });
  }, []);

  const heroBg = dark
    ? "radial-gradient(ellipse 70% 50% at 60% -10%,rgba(10,132,255,.10) 0%,transparent 55%),#000"
    : "radial-gradient(ellipse 70% 50% at 60% -10%,rgba(0,122,255,.07) 0%,transparent 55%),#F2F2F7";

  return (
    <>
      <style>{`
        #hero-inner {
          display:flex; flex-direction:column; gap:28px;
        }
        .hero-logo-mobile  { display:flex; justify-content:center; }
        .hero-logo-desktop { display:none; }
        @media(min-width:768px){
          #hero-inner {
            flex-direction:row-reverse; align-items:center; gap:48px;
          }
          .hero-logo-mobile  { display:none; }
          .hero-logo-desktop {
            display:flex; flex-direction:column; align-items:center;
            gap:14px; flex-shrink:0;
          }
          .hero-text { flex:1; }
        }
        .stat-item + .stat-item { border-right:.5px solid var(--sep); }
      `}</style>

      <section id="hero" style={{
        position:"relative", minHeight:"100svh",
        display:"flex", alignItems:"center",
        background:heroBg, overflow:"hidden",
        transition:"background .35s",
      }}>

        {/* Orbs */}
        <div style={{ position:"absolute", borderRadius:"50%",
          width:"min(500px,90vw)", height:"min(500px,90vw)",
          right:"-15%", top:"-5%", filter:"blur(90px)", pointerEvents:"none",
          background: dark ? "rgba(10,132,255,.09)" : "rgba(0,122,255,.06)",
          animation:"floatOrb 22s ease-in-out infinite" }}/>
        <div style={{ position:"absolute", borderRadius:"50%",
          width:"min(350px,70vw)", height:"min(350px,70vw)",
          left:"-12%", bottom:"5%", filter:"blur(70px)", pointerEvents:"none",
          background: dark ? "rgba(191,90,242,.07)" : "rgba(175,82,222,.05)",
          animation:"floatOrb 28s 7s ease-in-out infinite" }}/>

        {/* Dots */}
        <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
          {dots.map(d=>(
            <div key={d.id} style={{
              position:"absolute", left:`${d.l}%`, top:`${d.t}%`,
              width:d.s, height:d.s, borderRadius:"50%",
              background:"var(--blue)", opacity:d.o,
              animation:`floatDot ${d.d}s ${d.delay}s ease-in-out infinite`,
            }}/>
          ))}
        </div>

        <div className="wrap" style={{ position:"relative", zIndex:1,
          paddingTop:"max(90px,calc(env(safe-area-inset-top,0px)+80px))",
          paddingBottom:"72px" }}>
          <div id="hero-inner">

            {/* Mobile logo */}
            <div className="hero-logo-mobile">
              <LogoRing size={100} dark={dark}/>
            </div>

            {/* Text */}
            <div className="hero-text">

              <div ref={refs.chip} style={{ marginBottom:16, opacity:0 }}>
                <span className="chip chip-blue" style={{ fontSize:12 }}>
                  <span style={{ width:5, height:5, borderRadius:"50%",
                    background:"var(--blue)", display:"inline-block" }}/>
                  مهندس برمجيات واختصاصي أمن سيبراني
                </span>
              </div>

              <div ref={refs.name} style={{ marginBottom:12, opacity:0 }}>
                <h1 className="t-display" style={{ color:"var(--lbl-primary)" }}>
                  نداء الرحمن
                  <br/>
                  <span style={{ color:"var(--blue)" }}>عبود</span>
                </h1>
              </div>

              <div ref={refs.body} style={{ marginBottom:20, opacity:0 }}>
                <p className="t-callout" style={{ maxWidth:460 }}>
                  خبير في التحليل الجنائي الرقمي والأمن السيبراني وتطوير التطبيقات.
                </p>
              </div>

              <div ref={refs.edu} style={{ marginBottom:24, opacity:0 }}>
                {[
                  { icon:"🎓", text:"دبلوم تقاني في هندسة الشبكات — جامعة حلب" },
                  { icon:"📜", text:"شهادة في الأمن السيبراني — منصة إدراك" },
                ].map((item,i)=>(
                  <div key={i} className="glass" style={{
                    display:"flex", alignItems:"center", gap:10,
                    padding:"11px 14px",
                    borderRadius:"var(--r-md)",
                    marginBottom: i===0 ? 8 : 0,
                  }}>
                    <span style={{ fontSize:15, flexShrink:0 }}>{item.icon}</span>
                    <span className="t-foot" style={{ color:"var(--lbl-primary)" }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div ref={refs.stats} style={{ marginBottom:28, opacity:0 }}>
                <div className="glass" style={{
                  display:"inline-flex", borderRadius:"var(--r-xl)",
                  overflow:"hidden", padding:0,
                }}>
                  {[
                    { n:"+٥",  l:"سنوات خبرة" },
                    { n:"٢",   l:"تطبيق" },
                    { n:"+١٠", l:"أداة جنائية" },
                  ].map((s,i)=>(
                    <div key={s.l} className="stat-item" style={{
                      padding:"clamp(10px,2vw,14px) clamp(14px,3vw,22px)",
                      textAlign:"center",
                    }}>
                      <div style={{
                        fontSize:"clamp(1.4rem,5vw,1.8rem)",
                        fontWeight:900, color:"var(--blue)",
                        lineHeight:1, marginBottom:3,
                      }}>{s.n}</div>
                      <div className="t-cap1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div ref={refs.cta} style={{ display:"flex", gap:10, flexWrap:"wrap", opacity:0 }}>
                <a href="#projects" className="btn btn-primary"
                  onClick={e=>{e.preventDefault();document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"});}}
                  style={{ textDecoration:"none" }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  المشاريع
                </a>
                <a href="#contact" className="btn btn-ghost"
                  onClick={e=>{e.preventDefault();document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"});}}
                  style={{ textDecoration:"none" }}>
                  تواصل معي
                </a>
              </div>

            </div>

            {/* Desktop logo */}
            <div className="hero-logo-desktop">
              <LogoRing size={156} dark={dark}/>
              <div style={{ textAlign:"center" }}>
                <div className="t-cap2" style={{ marginBottom:4 }}>Digital Forensics Specialist</div>
                <div style={{ fontSize:11, color:"var(--blue)", fontWeight:700 }}>
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
          opacity:.22, pointerEvents:"none",
        }}>
          <div style={{ width:1, height:26,
            background:`linear-gradient(180deg,transparent,var(--lbl-tertiary))` }}/>
          <div style={{ width:3, height:3, borderRadius:"50%",
            background:"var(--lbl-tertiary)" }}/>
        </div>
      </section>
    </>
  );
}

function LogoRing({ size, dark }: { size:number; dark:boolean }) {
  return (
    <div style={{
      width:size, height:size, borderRadius:"50%", padding:3, flexShrink:0,
      background:"linear-gradient(135deg,var(--blue) 0%,var(--c-purple) 100%)",
      boxShadow:"0 0 40px var(--blue-glow), 0 8px 28px rgba(0,0,0,.18)",
    }}>
      <img src="/logo.webp" alt="شعار نداء" style={{
        width:"100%", height:"100%", borderRadius:"50%", objectFit:"cover",
        border:`3px solid ${dark?"#000":"#F2F2F7"}`, transition:"border-color .3s",
      }}/>
    </div>
  );
}
