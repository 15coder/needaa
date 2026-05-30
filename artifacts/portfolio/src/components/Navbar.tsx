import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "المهارات", href: "#skills" },
  { label: "المشاريع", href: "#projects" },
  { label: "التواصل", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="section-container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <img
              src="/logo.webp"
              alt="شعار نداء"
              style={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover", display: "block" }}
            />
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#f8fafc", lineHeight: 1.2 }}>نداء الرحمن</div>
              <div style={{ fontSize: 11, color: "var(--logo-blue)", fontWeight: 500 }}>عبود</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "rgba(203,213,225,0.75)",
                  fontFamily: "var(--font-arabic)",
                  fontSize: 14, fontWeight: 600,
                  padding: "8px 16px", borderRadius: 8,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#f8fafc";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "rgba(203,213,225,0.75)";
                  e.currentTarget.style.background = "none";
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo("#contact"); }}
              className="btn-primary"
              style={{ padding: "9px 22px", fontSize: 13, marginRight: 8, borderRadius: 8 }}
            >
              تواصل معي
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 22 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "block", height: 2, borderRadius: 1,
                  background: menuOpen ? "var(--logo-blue)" : "rgba(203,213,225,0.7)",
                  width: i === 1 ? "75%" : "100%",
                  transition: "all 0.25s",
                }} />
              ))}
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            borderTop: "1px solid rgba(41,168,224,0.12)",
            padding: "12px 0 16px",
            display: "flex", flexDirection: "column", gap: 2,
          }}>
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "rgba(203,213,225,0.8)",
                  fontFamily: "var(--font-arabic)",
                  fontSize: 15, fontWeight: 600,
                  padding: "12px 8px", textAlign: "right",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#f8fafc"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(203,213,225,0.8)"}
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
