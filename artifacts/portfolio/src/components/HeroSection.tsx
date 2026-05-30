import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

const DOTS = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  dur: Math.random() * 9 + 7,
  delay: Math.random() * 8,
  opacity: Math.random() * 0.14 + 0.05,
}));

export default function HeroSection() {
  const nameRef  = useRef<HTMLDivElement>(null);
  const tagRef   = useRef<HTMLDivElement>(null);
  const bioRef   = useRef<HTMLDivElement>(null);
  const eduRef   = useRef<HTMLDivElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.15 });
    tl.fromTo(tagRef.current,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .fromTo(nameRef.current,  { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.3")
      .fromTo(bioRef.current,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .fromTo(eduRef.current,   { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.35")
      .fromTo(statsRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .fromTo(ctaRef.current,   { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.25");
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "radial-gradient(ellipse 100% 80% at 50% 0%, #0d1829 0%, var(--bg-base) 60%)",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div className="orb" style={{
        width: 600, height: 600,
        right: "-10%", top: "10%",
        background: "radial-gradient(circle, rgba(28,142,245,0.12) 0%, transparent 70%)",
        animation: "floatOrb 20s ease-in-out infinite",
      }} />
      <div className="orb" style={{
        width: 400, height: 400,
        left: "5%", bottom: "10%",
        background: "radial-gradient(circle, rgba(100,80,240,0.08) 0%, transparent 70%)",
        animation: "floatOrb 25s 5s ease-in-out infinite",
      }} />

      {/* Subtle dots */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {DOTS.map(d => (
          <div key={d.id} style={{
            position: "absolute",
            left: `${d.left}%`, top: `${d.top}%`,
            width: d.size, height: d.size,
            borderRadius: "50%",
            background: "#1c8ef5",
            opacity: d.opacity,
            animation: `floatDot ${d.dur}s ${d.delay}s ease-in-out infinite`,
          }} />
        ))}
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, padding: "110px 24px 80px", width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 60,
          alignItems: "center",
        }}>
          {/* ── Text ── */}
          <div style={{ maxWidth: 660 }}>

            <div ref={tagRef} style={{ marginBottom: 24, opacity: 0 }}>
              <span className="chip">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-bright)", display: "inline-block" }} />
                مهندس برمجيات واختصاصي أمن سيبراني
              </span>
            </div>

            <div ref={nameRef} style={{ marginBottom: 20, opacity: 0 }}>
              <h1 className="text-display">
                نداء الرحمن
                <br />
                <span style={{ color: "var(--accent-bright)" }}>عبود</span>
              </h1>
            </div>

            <div ref={bioRef} style={{ marginBottom: 32, opacity: 0 }}>
              <p className="text-body" style={{ fontSize: 16, maxWidth: 520 }}>
                خبير في التحليل الجنائي الرقمي والأمن السيبراني وتطوير التطبيقات.
              </p>
            </div>

            <div ref={eduRef} style={{ marginBottom: 36, opacity: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { icon: "🎓", text: "دبلوم تقاني في هندسة الشبكات — جامعة حلب" },
                  { icon: "📜", text: "شهادة في الأمن السيبراني — منصة إدراك" },
                ].map((item, i) => (
                  <div key={i} className="glass" style={{
                    padding: "13px 18px",
                    display: "flex", alignItems: "center", gap: 12,
                    borderRadius: "var(--radius-md)",
                  }}>
                    <span style={{ fontSize: 17 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div ref={statsRef} style={{ marginBottom: 40, opacity: 0 }}>
              <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
                {[
                  { num: "+٥", label: "سنوات خبرة" },
                  { num: "٢", label: "تطبيق مستقل" },
                  { num: "+١٠", label: "أداة جنائية" },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--accent-bright)", lineHeight: 1, marginBottom: 4 }}>
                      {s.num}
                    </div>
                    <div className="text-caption">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={ctaRef} style={{ display: "flex", gap: 12, flexWrap: "wrap", opacity: 0 }}>
              <a href="#projects" className="btn btn-filled"
                onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                المشاريع
              </a>
              <a href="#contact" className="btn btn-glass"
                onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                تواصل معي
              </a>
            </div>
          </div>

          {/* ── Logo ── */}
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
            className="hidden md:flex">
            <div style={{
              width: 170, height: 170, borderRadius: "50%",
              padding: 4,
              background: "linear-gradient(135deg, var(--accent) 0%, rgba(100,80,240,0.8) 100%)",
              boxShadow: "0 0 60px rgba(28,142,245,0.3), var(--shadow-lg)",
            }}>
              <img
                src="/logo.webp"
                alt="شعار نداء"
                style={{
                  width: "100%", height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  border: "3px solid var(--bg-base)",
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="text-caption" style={{ marginBottom: 4 }}>Digital Forensics Specialist</div>
              <div style={{ fontSize: 11, color: "var(--accent-bright)", fontWeight: 600 }}>
                Cybersecurity · Android · GSM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        opacity: 0.3, zIndex: 1,
      }}>
        <div style={{ width: 1, height: 36, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.4))" }} />
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
      </div>
    </section>
  );
}
