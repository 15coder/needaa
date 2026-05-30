import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const DOTS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 3 + 1.5,
  dur: Math.random() * 10 + 8,
  delay: Math.random() * 8,
  opacity: Math.random() * 0.18 + 0.06,
}));

export default function HeroSection() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const nameRef   = useRef<HTMLDivElement>(null);
  const roleRef   = useRef<HTMLDivElement>(null);
  const subRef    = useRef<HTMLDivElement>(null);
  const eduRef    = useRef<HTMLDivElement>(null);
  const statsRef  = useRef<HTMLDivElement>(null);
  const ctaRef    = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5), y: (e.clientY / window.innerHeight - 0.5) });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(nameRef.current,  { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" })
      .fromTo(roleRef.current,  { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
      .fromTo(subRef.current,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .fromTo(eduRef.current,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .fromTo(statsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
      .fromTo(ctaRef.current,   { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(170deg, var(--navy-900) 0%, var(--navy-800) 50%, var(--navy-700) 100%)",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot particles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {DOTS.map(d => (
          <div
            key={d.id}
            style={{
              position: "absolute",
              left: `${d.left}%`, top: `${d.top}%`,
              width: d.size, height: d.size,
              borderRadius: "50%",
              background: "var(--logo-blue)",
              opacity: d.opacity,
              animation: `floatDot ${d.dur}s ${d.delay}s ease-in-out infinite`,
              transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 8}px)`,
              transition: "transform 0.6s ease-out",
            }}
          />
        ))}
      </div>

      {/* Large decorative circle */}
      <div style={{
        position: "absolute",
        left: "-200px", top: "50%", transform: "translateY(-50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(21,101,192,0.08) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        right: "-100px", bottom: "-100px",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(41,168,224,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Content */}
      <div className="section-container" style={{ position: "relative", zIndex: 1, padding: "120px 28px 80px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 48, flexWrap: "wrap" as any }}>

          {/* Left: Text */}
          <div style={{ maxWidth: 700 }}>

            {/* Pre-title label */}
            <div ref={subRef} style={{ marginBottom: 24, opacity: 0 }}>
              <span className="badge">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--logo-blue)", display: "inline-block" }} />
                مهندس برمجيات واختصاصي أمن سيبراني
              </span>
            </div>

            {/* Name */}
            <div ref={nameRef} style={{ marginBottom: 20, opacity: 0 }}>
              <h1 className="heading-xl" style={{ marginBottom: 10 }}>
                نداء الرحمن
                <br />
                <span style={{ color: "var(--logo-blue)" }}>عبود</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div ref={roleRef} style={{ marginBottom: 36, opacity: 0 }}>
              <p className="body-text" style={{ fontSize: 16, maxWidth: 580, color: "rgba(203,213,225,0.75)" }}>
                خبير متخصص في التحليل الجنائي الرقمي، والأمن السيبراني، وهندسة الشبكات، وتطوير تطبيقات الهاتف المحمول — مع خلفية تقنية راسخة وخبرة ميدانية واسعة.
              </p>
            </div>

            {/* Education */}
            <div ref={eduRef} style={{ marginBottom: 40, opacity: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "🎓", text: "دبلوم تقاني في هندسة الشبكات — جامعة حلب" },
                  { icon: "📜", text: "شهادة تدريبية في الأمن السيبراني — منصة إدراك" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "14px 20px",
                    background: "rgba(13, 26, 46, 0.8)",
                    border: "1px solid rgba(41,168,224,0.15)",
                    borderRadius: 12,
                  }}>
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, color: "rgba(203,213,225,0.8)", fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} style={{ marginBottom: 44, opacity: 0 }}>
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                {[
                  { num: "٥+", label: "سنوات خبرة" },
                  { num: "٢", label: "تطبيق مستقل" },
                  { num: "١٠+", label: "أداة جنائية" },
                ].map(stat => (
                  <div key={stat.label} style={{ textAlign: "center" }}>
                    <div className="stat-number" style={{ fontSize: "2rem", color: "var(--logo-blue)", marginBottom: 4 }}>
                      {stat.num}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div ref={ctaRef} style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: 0 }}>
              <a
                href="#projects"
                className="btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                استعرض المشاريع
              </a>
              <a
                href="#contact"
                className="btn-outline"
                onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                التواصل المباشر
              </a>
            </div>
          </div>

          {/* Right: Logo showcase */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            flexShrink: 0,
          }} className="hidden md:flex">
            <div style={{
              width: 180, height: 180,
              borderRadius: "50%",
              padding: 5,
              background: "linear-gradient(135deg, var(--royal-blue), var(--logo-blue))",
              boxShadow: "0 0 60px rgba(41,168,224,0.25), 0 20px 60px rgba(0,0,0,0.5)",
            }}>
              <img
                src="/logo.webp"
                alt="شعار نداء الرحمن عبود"
                style={{
                  width: "100%", height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  border: "3px solid var(--navy-800)",
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(203,213,225,0.6)" }}>
                Digital Forensics Specialist
              </div>
              <div style={{ fontSize: 11, color: "var(--logo-blue)", marginTop: 4, fontWeight: 500 }}>
                Cybersecurity · Android Dev · GSM
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        zIndex: 1, opacity: 0.4,
      }}>
        <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500, letterSpacing: 1 }}>مرر للأسفل</div>
        <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, var(--logo-blue), transparent)" }} />
      </div>
    </section>
  );
}
