import { useState } from "react";

const LINKS = [
  { label: "الرئيسية", href: "#hero"     },
  { label: "المهارات", href: "#skills"   },
  { label: "المشاريع", href: "#projects" },
  { label: "التواصل",  href: "#contact"  },
];

function go(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

interface Props { dark: boolean; onToggle: () => void; }

export default function Navbar({ dark, onToggle }: Props) {
  const [open, setOpen] = useState(false);

  const navLink: React.CSSProperties = {
    background: "none", border: "none", cursor: "pointer",
    fontFamily: "var(--font)", fontSize: 15, fontWeight: 600,
    color: "var(--tx2)", padding: "8px 13px", borderRadius: "var(--r3)",
    transition: "color .15s, background .15s", whiteSpace: "nowrap",
    WebkitTapHighlightColor: "transparent",
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* ── Brand ── */}
        <button
          onClick={() => { go("#hero"); setOpen(false); }}
          style={{ display: "flex", alignItems: "center", gap: 9,
            background: "none", border: "none", padding: 0,
            WebkitTapHighlightColor: "transparent", flexShrink: 0 }}
        >
          <img src="/logo.webp" alt=""
            style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
          <span style={{ fontSize: 15, fontWeight: 800, color: "var(--tx1)",
            letterSpacing: -.3, whiteSpace: "nowrap" }}>
            نداء الرحمن
          </span>
        </button>

        {/* ── Desktop links ── */}
        <div className="nav-links" style={{ gap: 0 }}>
          {LINKS.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={navLink}
              onMouseEnter={e => { e.currentTarget.style.color="var(--tx1)"; e.currentTarget.style.background="var(--fill)"; }}
              onMouseLeave={e => { e.currentTarget.style.color="var(--tx2)"; e.currentTarget.style.background="none"; }}>
              {l.label}
            </button>
          ))}
        </div>

        {/* ── Actions ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>

          {/* Theme */}
          <button className="tbtn" onClick={onToggle} aria-label="وضع الإضاءة">
            {dark
              ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
          </button>

          {/* CTA — hidden on mobile */}
          <a href="#contact" onClick={e => { e.preventDefault(); go("#contact"); setOpen(false); }}
            className="btn btn-blue nav-cta"
            style={{ display: "none", height: 36, padding: "0 16px", fontSize: 14 }}>
            تواصل
          </a>

          {/* Hamburger */}
          <button className="tbtn nav-burger" onClick={() => setOpen(o => !o)}
            aria-label="القائمة"
            style={{ flexDirection: "column", gap: 4.5, width: 36, height: 36 }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", height: "1.5px", borderRadius: 1,
                background: "var(--tx2)", transition: "all .18s",
                width: i === 1 ? 12 : 16,
                transform: open
                  ? i === 0 ? "rotate(45deg) translate(4.2px, 4.2px)"
                  : i === 2 ? "rotate(-45deg) translate(4.2px, -4.2px)"
                  : "none"
                  : "none",
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {open && (
        <div className="drop">
          {LINKS.map(l => (
            <button key={l.href}
              onClick={() => { go(l.href); setOpen(false); }}
              style={{
                display: "block", width: "100%", textAlign: "right",
                background: "none", border: "none",
                fontFamily: "var(--font)", fontSize: 16, fontWeight: 600,
                color: "var(--tx1)", padding: "13px 14px", borderRadius: 10,
                transition: "background .14s", WebkitTapHighlightColor: "transparent",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--fill)"}
              onMouseLeave={e => e.currentTarget.style.background = "none"}>
              {l.label}
            </button>
          ))}
          <div style={{ padding: "6px 6px 4px" }}>
            <a href="#contact"
              onClick={e => { e.preventDefault(); go("#contact"); setOpen(false); }}
              className="btn btn-blue"
              style={{ width: "100%", borderRadius: 12, fontSize: 16 }}>
              تواصل معي
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
