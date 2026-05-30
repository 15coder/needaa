const CHANNELS = [
  {
    id: "email",
    label: "البريد الإلكتروني",
    labelEn: "Email",
    value: "needaaalrahman00101@gmail.com",
    href: "mailto:needaaalrahman00101@gmail.com",
    btnLabel: "إرسال بريد",
    iconBg: "rgba(0,122,255,.12)",
    iconBorder: "rgba(0,122,255,.20)",
    btnClass: "btn-blue",
    btnGlow: "rgba(0,122,255,.22)",
    accentColor: "var(--blue)",
    icon: (
      <svg width="20" height="20" fill="none" stroke="var(--blue)" strokeWidth="1.7" viewBox="0 0 24 24">
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
    iconBg: "rgba(48,209,88,.12)",
    iconBorder: "rgba(48,209,88,.22)",
    btnClass: "btn-green",
    btnGlow: "rgba(48,209,88,.24)",
    accentColor: "var(--green)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--green)">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <>
      <style>{`
        .contact-row {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 560px;
          margin: 0 auto;
        }
        @media(min-width:520px) {
          .contact-row { flex-direction: row; }
          .contact-row > * { flex: 1; }
        }

        .contact-card-new {
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .contact-card-new:hover { transform: translateY(-2px); box-shadow: var(--shadow2); }
        .contact-card-new:active { transform: scale(0.97); }

        /* Footer bar */
        .footer-bar {
          margin-top: 64px;
          padding-top: 24px;
          border-top: .5px solid var(--sep);
          padding-bottom: max(28px, env(safe-area-inset-bottom, 16px));
        }
      `}</style>

      <section id="contact" className="section">
        <div className="wrap">

          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="chip chip-green" style={{ marginBottom: 14 }}>تواصل مباشر</span>
            <h2 style={{
              fontSize: "clamp(1.55rem, 4.5vw, 2.2rem)",
              fontWeight: 800, color: "var(--tx1)",
              letterSpacing: "-.022em", marginBottom: 14, lineHeight: 1.14,
            }}>قنوات التواصل</h2>
            <div style={{
              width: 32, height: 3, borderRadius: 2, margin: "0 auto",
              background: "linear-gradient(90deg, var(--green), var(--blue))",
            }} />
          </div>

          {/* Contact cards */}
          <div className="contact-row">
            {CHANNELS.map((ch, i) => (
              <div key={ch.id} className="card contact-card-new reveal" style={{ transitionDelay: `${i * 80}ms` }}>

                {/* Top accent line */}
                <div style={{
                  height: 3,
                  background: ch.id === "email"
                    ? "linear-gradient(90deg, var(--blue), var(--teal))"
                    : "linear-gradient(90deg, var(--green), #34C759)",
                }} />

                <div style={{ padding: "20px 20px 20px", flex: 1, display: "flex", flexDirection: "column" }}>

                  {/* Icon + label */}
                  <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 18 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                      background: ch.iconBg,
                      border: `1px solid ${ch.iconBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>{ch.icon}</div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--tx1)", letterSpacing: "-.01em" }}>
                        {ch.label}
                      </div>
                      <div style={{ fontSize: 11, color: ch.accentColor, fontWeight: 700, marginTop: 2 }}>
                        {ch.labelEn}
                      </div>
                    </div>
                  </div>

                  {/* Value chip */}
                  <div style={{
                    background: "rgba(255,255,255,.16)",
                    border: "1px solid rgba(255,255,255,.20)",
                    borderRadius: 12,
                    padding: "10px 14px",
                    marginBottom: 18,
                    direction: "ltr", textAlign: "left",
                    flex: 1, display: "flex", alignItems: "center",
                  }}>
                    <span style={{ fontSize: 12, color: "var(--tx2)", fontFamily: "monospace", fontWeight: 600 }}>
                      {ch.value}
                    </span>
                  </div>

                  {/* Button */}
                  <a href={ch.href}
                    target={ch.id === "whatsapp" ? "_blank" : undefined}
                    rel={ch.id === "whatsapp" ? "noopener noreferrer" : undefined}
                    className={`btn ${ch.btnClass}`}
                    style={{ width: "100%", height: 46, fontSize: 14.5, borderRadius: 14 }}>
                    {ch.btnLabel}
                  </a>

                </div>
              </div>
            ))}
          </div>

          {/* ── Footer Bar ── */}
          <div className="footer-bar">
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              textAlign: "center",
            }}>

              {/* Brand */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img src="/logo.webp" alt=""
                  style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", opacity: .9 }} />
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "var(--tx1)", letterSpacing: "-.01em" }}>
                    نداء الرحمن عبود
                  </div>
                  <div style={{ fontSize: 11, color: "var(--tx3)", fontWeight: 500, marginTop: 1 }}>
                    Digital Forensics & Cybersecurity
                  </div>
                </div>
              </div>

              {/* Nav links row */}
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
                {[
                  { label: "الرئيسية", href: "#hero" },
                  { label: "المهارات", href: "#skills" },
                  { label: "المشاريع", href: "#projects" },
                  { label: "التواصل",  href: "#contact" },
                ].map(l => (
                  <a key={l.href} href={l.href}
                    onClick={e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); }}
                    style={{
                      fontSize: 13, fontWeight: 600, color: "var(--tx3)",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--tx1)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--tx3)"}>
                    {l.label}
                  </a>
                ))}
              </div>

              {/* Separator */}
              <div style={{ width: "100%", maxWidth: 340, height: .5, background: "var(--sep)" }} />

              {/* Copyright */}
              <p style={{ fontSize: 11, color: "var(--tx3)", opacity: .65, fontWeight: 500 }}>
                جميع الحقوق محفوظة © 2025 · نداء الرحمن عبود
              </p>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
