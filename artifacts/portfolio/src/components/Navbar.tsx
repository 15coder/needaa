import { useState } from "react";

interface Props { dark: boolean; onToggleTheme: () => void; }

const LINKS = [
  { label:"الرئيسية", href:"#hero"     },
  { label:"المهارات", href:"#skills"   },
  { label:"المشاريع", href:"#projects" },
  { label:"التواصل",  href:"#contact"  },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1"  y1="12" x2="3"  y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar({ dark, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior:"smooth" });
    setOpen(false);
  };

  const navLinkStyle: React.CSSProperties = {
    background:"none", border:"none", cursor:"pointer",
    fontFamily:"var(--font)", fontSize:15, fontWeight:600,
    color:"var(--lbl-secondary)",
    padding:"8px 14px", borderRadius:"var(--r-pill)",
    transition:"all .16s", whiteSpace:"nowrap",
    WebkitTapHighlightColor:"transparent",
  };

  return (
    <>
      <style>{`
        .nav-links-desktop { display:none !important; }
        .nav-hamburger      { display:flex !important; }
        .nav-cta            { display:none !important; }
        @media(min-width:600px){
          .nav-links-desktop { display:flex !important; align-items:center; }
          .nav-hamburger      { display:none !important; }
          .nav-cta            { display:inline-flex !important; }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-pill">

          {/* Brand */}
          <button onClick={() => go("#hero")} style={{
            display:"flex", alignItems:"center", gap:9,
            background:"none", border:"none", cursor:"pointer", padding:0,
            WebkitTapHighlightColor:"transparent", flexShrink:0,
          }}>
            <img src="/logo.webp" alt="شعار" style={{
              width:32, height:32, borderRadius:"50%", objectFit:"cover",
              flexShrink:0,
            }}/>
            <span style={{
              fontSize:15, fontWeight:800,
              color:"var(--lbl-primary)",
              letterSpacing:-.3, whiteSpace:"nowrap",
            }}>نداء الرحمن</span>
          </button>

          {/* Desktop links */}
          <div className="nav-links-desktop" style={{ gap:0 }}>
            {LINKS.map(l => (
              <button key={l.href} onClick={() => go(l.href)} style={navLinkStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.color="var(--lbl-primary)";
                  e.currentTarget.style.background="var(--fill-2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color="var(--lbl-secondary)";
                  e.currentTarget.style.background="none";
                }}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
            <button className="theme-btn" onClick={onToggleTheme} aria-label="تبديل الوضع">
              {dark ? <SunIcon/> : <MoonIcon/>}
            </button>

            {/* Desktop CTA */}
            <a href="#contact" className="btn btn-primary btn-sm nav-cta"
              onClick={e=>{ e.preventDefault(); go("#contact"); }}
              style={{ textDecoration:"none" }}>
              تواصل
            </a>

            {/* Mobile hamburger */}
            <button className="nav-hamburger theme-btn" onClick={() => setOpen(o=>!o)}
              style={{ flexDirection:"column", gap:4.5, width:36, height:36 }}
              aria-label="القائمة">
              {[0,1,2].map(i=>(
                <span key={i} style={{
                  display:"block", borderRadius:1,
                  background:"var(--lbl-secondary)",
                  width: i===1 ? 12 : 16, height:1.5,
                  transition:"all .2s",
                  transform: open
                    ? i===0 ? "rotate(45deg) translate(4px,4px)"
                    : i===2 ? "rotate(-45deg) translate(4px,-4px)"
                    : "scaleX(0)"
                    : "none",
                  opacity: open && i===1 ? 0 : 1,
                }}/>
              ))}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mobile-menu">
            {LINKS.map(l=>(
              <button key={l.href} onClick={()=>go(l.href)} style={{
                display:"block", width:"100%", textAlign:"right",
                background:"none", border:"none", cursor:"pointer",
                fontFamily:"var(--font)", fontSize:17, fontWeight:600,
                color:"var(--lbl-primary)",
                padding:"14px 16px", borderRadius:"var(--r-sm)",
                transition:"background .14s",
                WebkitTapHighlightColor:"transparent",
              }}
              onMouseEnter={e=>e.currentTarget.style.background="var(--fill-3)"}
              onMouseLeave={e=>e.currentTarget.style.background="none"}>
                {l.label}
              </button>
            ))}
            <div style={{ padding:"8px 8px 4px" }}>
              <a href="#contact" onClick={e=>{e.preventDefault();go("#contact");}}
                className="btn btn-primary"
                style={{ textDecoration:"none", width:"100%", fontSize:17 }}>
                تواصل معي
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
