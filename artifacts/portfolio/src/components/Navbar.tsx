import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "المهارات", href: "#skills" },
  { label: "المشاريع", href: "#projects" },
  { label: "التواصل", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(2, 4, 8, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0,255,204,0.1)"
          : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 6,
              background: "linear-gradient(135deg, rgba(0,255,204,0.2), rgba(0,170,255,0.1))",
              border: "1px solid rgba(0,255,204,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "var(--neon-green)", fontSize: 14, fontFamily: "var(--font-mono)" }}>N</span>
            </div>
            <span style={{
              color: "var(--neon-green)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: 1,
              fontFamily: "var(--font-arabic)",
            }}>
              نداء عبود
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="nav-item"
                onClick={() => scrollTo(link.href)}
                style={{ background: "none", border: "none", fontFamily: "var(--font-arabic)" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            style={{
              background: "none", border: "none",
              color: "var(--neon-green)", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: 4, padding: 8,
            }}
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: 20, height: 2,
                background: "var(--neon-green)",
                transition: "all 0.3s",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translateY(8px)" : i === 2 ? "rotate(-45deg) translateY(-8px)" : "scaleX(0)"
                  : "none",
              }} />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div style={{
            padding: "12px 0 16px",
            borderTop: "1px solid rgba(0,255,204,0.1)",
            display: "flex", flexDirection: "column", gap: 4,
          }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none", border: "none",
                  color: "rgba(200,230,220,0.8)",
                  fontFamily: "var(--font-arabic)",
                  fontSize: 14, padding: "10px 12px",
                  textAlign: "right", cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--neon-green)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(200,230,220,0.8)")}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
