import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ParticleField from "./ParticleField";

const TITLE_LINE1 = "نداء الرحمن عبود";
const TITLE_LINE2 = "مهندس برمجيات";
const TITLE_LINE3 = "واختصاصي أمن سيبراني وتحليل جنائي رقمي";

export default function HeroSection() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseX(x);
      setMouseY(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });

    [line1Ref, line2Ref, line3Ref].forEach((ref, i) => {
      if (!ref.current) return;
      const chars = ref.current.querySelectorAll("span");
      tl.fromTo(chars,
        { opacity: 0, y: 30, rotateX: -40 },
        {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.6,
          stagger: { each: 0.025, from: "start" },
          ease: "back.out(1.5)",
        },
        i * 0.3
      );
    });

    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.2"
    );

    tl.fromTo(badgesRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    tl.fromTo(ctaRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );

    tl.fromTo(statusRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.out" },
      "-=0.4"
    );
  }, []);

  const splitChars = (text: string) =>
    [...text].map((ch, i) => <span key={i}>{ch === " " ? "\u00a0" : ch}</span>);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="hex-pattern"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ParticleField mouseX={mouseX} mouseY={mouseY} />
      </div>

      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,204,0.04) 0%, transparent 70%)",
      }} />

      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: 1200, margin: "0 auto",
        padding: "120px 24px 80px",
        width: "100%",
      }}>
        <div ref={statusRef} style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            display: "inline-block", width: 8, height: 8, borderRadius: "50%",
            background: "var(--neon-green)",
            boxShadow: "0 0 8px var(--neon-green)",
            animation: "pulseGlow 2s ease-in-out infinite",
          }} />
          <span className="terminal-text" style={{ fontSize: 13 }}>
            &gt; SYSTEM_ONLINE :: PORTFOLIO_v2.4 :: READY
          </span>
        </div>

        <div style={{ marginBottom: 16 }}>
          <h1
            ref={line1Ref}
            className="neon-text"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              letterSpacing: -1,
              display: "block",
            }}
          >
            {splitChars(TITLE_LINE1)}
          </h1>
        </div>

        <div style={{ marginBottom: 8 }}>
          <h2
            ref={line2Ref}
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              color: "rgba(224,247,240,0.9)",
              display: "block",
              lineHeight: 1.4,
            }}
          >
            {splitChars(TITLE_LINE2)}
          </h2>
        </div>

        <div style={{ marginBottom: 32 }}>
          <h2
            ref={line3Ref}
            className="neon-blue-text"
            style={{
              fontSize: "clamp(1.1rem, 2.6vw, 1.8rem)",
              fontWeight: 600,
              display: "block",
              lineHeight: 1.5,
            }}
          >
            {splitChars(TITLE_LINE3)}
          </h2>
        </div>

        <div ref={subtitleRef} style={{ marginBottom: 32, maxWidth: 640 }}>
          <div style={{ height: 1, background: "linear-gradient(90deg, rgba(0,255,204,0.4), transparent)", marginBottom: 20 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="glass-panel" style={{ padding: "14px 20px", display: "inline-flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--neon-green)", flexShrink: 0 }} />
              <div>
                <div className="terminal-text" style={{ color: "rgba(0,255,204,0.5)", marginBottom: 2 }}>EDUCATION_01</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "rgba(224,247,240,0.85)" }}>
                  دبلوم تقاني في هندسة الشبكات — جامعة حلب
                </div>
              </div>
            </div>
            <div className="glass-panel" style={{ padding: "14px 20px", display: "inline-flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--neon-blue)", flexShrink: 0 }} />
              <div>
                <div className="terminal-text" style={{ color: "rgba(0,170,255,0.5)", marginBottom: 2 }}>EDUCATION_02</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "rgba(224,247,240,0.85)" }}>
                  شهادة تدريبية في الأمن السيبراني — منصة إدراك
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={badgesRef} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {["Digital Forensics", "Cybersecurity", "Android Dev", "GSM Engineering", "UI/UX"].map(tag => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
          {["Cellebrite UFED", "Oxygen Forensic"].map(tag => (
            <span key={tag} className="tag-chip tag-chip-blue">{tag}</span>
          ))}
        </div>

        <div ref={ctaRef} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href="#projects"
            className="cyber-btn"
            onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            استعرض المشاريع
          </a>
          <a
            href="#contact"
            className="cyber-btn cyber-btn-blue"
            onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.46a16 16 0 006.63 6.63l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            تواصل معي
          </a>
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
        zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        animation: "float 3s ease-in-out infinite",
      }}>
        <span className="terminal-text" style={{ fontSize: 11, opacity: 0.5 }}>SCROLL DOWN</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {[1, 0.6, 0.3].map((op, i) => (
            <div key={i} style={{
              width: 20, height: 1.5, background: "var(--neon-green)", opacity: op,
              borderRadius: 1,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
