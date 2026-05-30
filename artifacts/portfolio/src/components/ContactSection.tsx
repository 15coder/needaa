const CHANNELS = [
  {
    id: "email",
    label: "البريد الإلكتروني",
    labelEn: "Email",
    value: "needaaalrahman00101@gmail.com",
    href: "mailto:needaaalrahman00101@gmail.com",
    btnLabel: "إرسال رسالة",
    accentGradient: "linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)",
    accentGlow: "rgba(0,122,255,.24)",
    accentLight: "rgba(0,122,255,.10)",
    accentBorder: "rgba(0,122,255,.20)",
    iconColor: "var(--blue)",
    btnClass: "btn-blue",
    icon: (
      <svg width="22" height="22" fill="none" stroke="var(--blue)" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "واتساب",
    labelEn: "WhatsApp",
    value: "+963 980 362 204",
    href: "https://wa.me/963980362204",
    btnLabel: "بدء المحادثة",
    accentGradient: "linear-gradient(135deg, #30D158 0%, #34C759 100%)",
    accentGlow: "rgba(48,209,88,.26)",
    accentLight: "rgba(48,209,88,.10)",
    accentBorder: "rgba(48,209,88,.22)",
    iconColor: "var(--green)",
    btnClass: "btn-green",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--green)">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <>
      <style>{`
        .contact-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 580px;
          margin: 0 auto;
        }
        @media(min-width:540px) {
          .contact-grid { flex-direction: row; }
          .contact-grid > * { flex: 1; }
        }

        .contact-card {
          border-radius: 26px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .contact-value-box {
          border-radius: 14px;
          padding: 12px 16px;
          direction: ltr;
          text-align: left;
          display: flex;
          align-items: center;
          transition: box-shadow 0.3s ease;
        }
        .contact-value-box:hover {
          box-shadow: 0 0 0 1px rgba(255,255,255,.28);
        }

        /* ── Footer ── */
        .footer-wrap {
          margin-top: 72px;
          padding-top: 28px;
          border-top: .5px solid var(--sep);
          padding-bottom: max(32px, env(safe-area-inset-bottom, 20px));
        }
        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }
        .footer-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-link {
          font-size: 13px;
          font-weight: 600;
          color: var(--tx3);
          transition: color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .footer-link:hover {
          color: var(--tx1);
          transform: translateY(-1px);
        }
      `}</style>

      <section id="contact" className="section">
        <div className="wrap">

          {/* Section header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="chip chip-green" style={{ marginBottom: 16 }}>تواصل مباشر</span>
            <h2 style={{
              fontSize: "clamp(1.6rem, 4.8vw, 2.4rem)",
              fontWeight: 900, color: "var(--tx1)",
              letterSpacing: "-.024em", marginBottom: 16, lineHeight: 1.12,
            }}>قنوات التواصل</h2>
            <div style={{
              width: 36, height: 3.5, borderRadius: 2, margin: "0 auto",
              background: "linear-gradient(90deg, var(--green), var(--blue))",
            }} />
          </div>

          {/* Cards */}
          <div className="contact-grid">
            {CHANNELS.map((ch, i) => (
              <div key={ch.id} className="card contact-card reveal" style={{ transitionDelay: `${i * 90}ms` }}>

                {/* Top accent bar */}
                <div style={{ height: 3.5, background: ch.accentGradient }} />

                <div style={{ padding: "24px 22px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>

                  {/* Icon tile + label */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 17, flexShrink: 0,
                      background: ch.accentLight,
                      border: `1.5px solid ${ch.accentBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: `0 4px 16px ${ch.accentGlow}`,
                    }}>{ch.icon}</div>
                    <div>
                      <div style={{
                        fontSize: 17, fontWeight: 800, color: "var(--tx1)",
                        letterSpacing: "-.015em", lineHeight: 1.2,
                      }}>{ch.label}</div>
                      <div style={{
                        fontSize: 11.5, fontWeight: 700,
                        background: ch.accentGradient,
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginTop: 3,
                      }}>{ch.labelEn}</div>
                    </div>
                  </div>

                  {/* Value box */}
                  <div className="contact-value-box" style={{
                    background: "rgba(255,255,255,.14)",
                    border: "1px solid rgba(255,255,255,.20)",
                    flex: 1,
                  }}>
                    <span style={{
                      fontSize: 12.5, color: "var(--tx2)",
                      fontFamily: "monospace", fontWeight: 600,
                      letterSpacing: .2,
                    }}>
                      {ch.value}
                    </span>
                  </div>

                  {/* Action button */}
                  <a href={ch.href}
                    target={ch.id !== "email" ? "_blank" : undefined}
                    rel={ch.id !== "email" ? "noopener noreferrer" : undefined}
                    className={`btn ${ch.btnClass}`}
                    style={{
                      width: "100%", height: 50,
                      fontSize: 15, borderRadius: 15,
                      boxShadow: `0 6px 22px ${ch.accentGlow}`,
                    }}>
                    {ch.btnLabel}
                  </a>

                </div>
              </div>
            ))}
          </div>

          {/* ── Footer ── */}
          <div className="footer-wrap">
            <div className="footer-inner">

              {/* Brand */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src="/logo.webp" alt=""
                  style={{
                    width: 40, height: 40, borderRadius: "50%",
                    objectFit: "cover", opacity: .92,
                    boxShadow: "0 2px 10px rgba(0,122,255,.18)",
                  }} />
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    fontSize: 15, fontWeight: 800, color: "var(--tx1)",
                    letterSpacing: "-.015em",
                  }}>
                    نداء الرحمن عبود
                  </div>
                  <div style={{ fontSize: 11, color: "var(--tx3)", fontWeight: 500, marginTop: 2 }}>
                    Digital Forensics & Cybersecurity
                  </div>
                </div>
              </div>

              {/* Nav links */}
              <div className="footer-links">
                {[
                  { label: "الرئيسية", href: "#hero" },
                  { label: "المهارات", href: "#skills" },
                  { label: "المشاريع", href: "#projects" },
                  { label: "التواصل",  href: "#contact" },
                ].map(l => (
                  <a key={l.href} href={l.href} className="footer-link"
                    onClick={e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); }}>
                    {l.label}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div style={{
                width: "100%", maxWidth: 360,
                height: .5, background: "var(--sep)",
              }} />

              {/* Copyright */}
              <p style={{
                fontSize: 11.5, color: "var(--tx3)", opacity: .60,
                fontWeight: 500, letterSpacing: .1,
              }}>
                جميع الحقوق محفوظة © 2025 · نداء الرحمن عبود
              </p>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
