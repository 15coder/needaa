import { useState } from "react";

interface Props { dark: boolean; onToggleTheme: () => void; }

const links = [
  { label: "الرئيسية", href: "#hero" },
  { label: "المهارات",  href: "#skills" },
  { label: "المشاريع", href: "#projects" },
  { label: "التواصل",  href: "#contact" },
];

export default function Navbar({ dark, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        .nav-desktop-links { display: none; }
        .nav-hamburger      { display: flex; }
        .nav-cta-desktop    { display: none; }
        @media (min-width: 640px) {
          .nav-desktop-links { display: flex; align-items: center; gap: 0; }
          .nav-hamburger      { display: none; }
          .nav-cta-desktop    { display: inline-flex; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-pill">

          {/* Logo */}
          <button onClick={() => go("#hero")} style={{
            display:"flex", alignItems:"center", gap:9,
            background:"none", border:"none", cursor:"pointer", padding:0,
            WebkitTapHighlightColor:"transparent", flexShrink:0,
          }}>
            <img src="/logo.webp" alt="شعار"
              style={{ width:32, height:32, borderRadius:"50%", objectFit:"cover" }} />
            <span style={{
              fontSize:15, fontWeight:800, color:"var(--label-primary)",
              letterSpacing:-0.3, whiteSpace:"nowrap",
            }}>
              نداء الرحمن
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="nav-desktop-links">
            {links.map(l => (
              <button key={l.href} onClick={() => go(l.href)} style={{
                background:"none", border:"none", cursor:"pointer",
                fontFamily:"var(--font)", fontSize:15, fontWeight:600,
                color:"var(--label-secondary)",
                padding:"7px 14px", borderRadius:"var(--r-pill)",
                transition:"all 0.18s", whiteSpace:"nowrap",
                WebkitTapHighlightColor:"transparent",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--label-primary)";
                e.currentTarget.style.background = "var(--fill-tertiary)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--label-secondary)";
                e.currentTarget.style.background = "none";
              }}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Right side actions */}
          <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
            {/* Theme toggle */}
            <button className="theme-toggle" onClick={onToggleTheme} aria-label="تبديل الوضع">
              {dark ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Desktop CTA */}
            <a href="#contact" onClick={e => { e.preventDefault(); go("#contact"); }}
              className="nav-cta-desktop btn-ios btn-filled btn-sm"
              style={{ textDecoration:"none", borderRadius:"var(--r-pill)" }}>
              تواصل
            </a>

            {/* Mobile hamburger */}
            <button className="nav-hamburger" onClick={() => setOpen(o => !o)}
              style={{
                background:"none", border:"none", cursor:"pointer",
                padding:6, flexDirection:"column", gap:5, width:34, height:34,
                alignItems:"center", justifyContent:"center",
                WebkitTapHighlightColor:"transparent",
              }}
              aria-label="القائمة">
              <span style={{
                display:"block", width: open ? 16 : 16, height:1.5, borderRadius:1,
                background:"var(--label-secondary)",
                transition:"all 0.2s",
                transform: open ? "rotate(45deg) translateY(3.5px)" : "none",
              }} />
              <span style={{
                display:"block", width:12, height:1.5, borderRadius:1,
                background:"var(--label-secondary)", transition:"all 0.2s",
                opacity: open ? 0 : 1,
              }} />
              <span style={{
                display:"block", width:16, height:1.5, borderRadius:1,
                background:"var(--label-secondary)", transition:"all 0.2s",
                transform: open ? "rotate(-45deg) translateY(-3.5px)" : "none",
              }} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mobile-menu" style={{ marginTop:8 }}>
            {links.map(l => (
              <button key={l.href} onClick={() => go(l.href)} style={{
                display:"block", width:"100%", textAlign:"right",
                background:"none", border:"none", cursor:"pointer",
                fontFamily:"var(--font)", fontSize:16, fontWeight:600,
                color:"var(--label-primary)",
                padding:"13px 16px", borderRadius:"var(--r-sm)",
                transition:"background 0.15s",
                WebkitTapHighlightColor:"transparent",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--fill-tertiary)"}
              onMouseLeave={e => e.currentTarget.style.background = "none"}>
                {l.label}
              </button>
            ))}
            <div style={{ padding:"8px 8px 4px" }}>
              <a href="#contact" onClick={e => { e.preventDefault(); go("#contact"); }}
                className="btn-ios btn-filled"
                style={{
                  textDecoration:"none", width:"100%", justifyContent:"center",
                  fontSize:16, borderRadius:"var(--r-md)",
                }}>
                تواصل معي
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
