import { useState } from "react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "المهارات", href: "#skills" },
  { label: "المشاريع", href: "#projects" },
  { label: "التواصل", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <button
          onClick={() => go("#hero")}
          style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <img
            src="/logo.webp"
            alt="شعار"
            style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", display: "block" }}
          />
          <span style={{ fontSize: 15, fontWeight: 800, color: "var(--text-primary)", letterSpacing: -0.3 }}>
            نداء الرحمن
          </span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden md:flex">
          {navLinks.map(l => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-arabic)",
                fontSize: 14, fontWeight: 600,
                padding: "8px 14px", borderRadius: "100px",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "none";
              }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); go("#contact"); }}
            className="btn btn-filled"
            style={{ padding: "8px 20px", fontSize: 13, marginRight: 6, borderRadius: "100px" }}
          >
            تواصل
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "none" }}
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 20 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", height: 1.5, borderRadius: 1,
                background: "rgba(255,255,255,0.6)",
                width: i === 1 ? "70%" : "100%",
              }} />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          maxWidth: 960, margin: "8px auto 0",
          background: "rgba(20,20,30,0.9)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "var(--radius-lg)",
          padding: "8px",
          display: "flex", flexDirection: "column", gap: 2,
        }}>
          {navLinks.map(l => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-arabic)",
                fontSize: 15, fontWeight: 600,
                padding: "12px 16px", textAlign: "right", borderRadius: "var(--radius-sm)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--text-secondary)"; }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
