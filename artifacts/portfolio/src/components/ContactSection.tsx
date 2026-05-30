export default function ContactSection() {
  return (
    <>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          max-width: 640px;
          margin: 0 auto;
        }
        @media(min-width:520px) {
          .contact-grid { grid-template-columns: 1fr 1fr; }
        }
        .contact-card {
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .contact-card:hover { transform: translateY(-2px); box-shadow: var(--shadow2); }
        .contact-card:active { transform: scale(0.97); }

        /* Focus-glow on info strips */
        .info-strip {
          padding: 10px 14px;
          margin-bottom: 16px;
          direction: ltr;
          text-align: left;
          border-radius: 12px;
          background: rgba(255,255,255,.18);
          border: 1px solid rgba(255,255,255,.22);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        [data-theme="dark"] .info-strip {
          background: rgba(255,255,255,.06);
          border-color: rgba(255,255,255,.10);
        }
        .info-strip:hover {
          border-color: rgba(0,122,255,.35);
          box-shadow: 0 0 0 3px rgba(0,122,255,.10);
        }
      `}</style>

      <section id="contact" className="section" style={{
        paddingBottom: "max(80px, calc(env(safe-area-inset-bottom, 0px) + 60px))",
      }}>
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

          <div className="contact-grid">

            {/* Email */}
            <div className="card contact-card reveal" style={{ padding: "22px 20px", borderRadius: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 16 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 13, flexShrink: 0,
                  background: "rgba(0,122,255,.12)",
                  border: "1px solid rgba(0,122,255,.18)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="19" height="19" fill="none" stroke="var(--blue)" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--tx1)", letterSpacing: "-.01em" }}>
                    البريد الإلكتروني
                  </div>
                  <div style={{ fontSize: 11, color: "var(--blue)", fontWeight: 700, marginTop: 2 }}>Email</div>
                </div>
              </div>

              <div className="info-strip">
                <span style={{ fontSize: 11.5, color: "var(--tx2)", fontFamily: "monospace" }}>
                  needaaalrahman00101@gmail.com
                </span>
              </div>

              <a href="mailto:needaaalrahman00101@gmail.com"
                className="btn btn-blue"
                style={{ width: "100%", height: 44, fontSize: 14, borderRadius: 14 }}>
                إرسال بريد
              </a>
            </div>

            {/* WhatsApp */}
            <div className="card contact-card reveal" style={{ padding: "22px 20px", borderRadius: 24, transitionDelay: "80ms" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 16 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 13, flexShrink: 0,
                  background: "rgba(48,209,88,.13)",
                  border: "1px solid rgba(48,209,88,.20)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="var(--green)">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--tx1)", letterSpacing: "-.01em" }}>واتساب</div>
                  <div style={{ fontSize: 11, color: "var(--green)", fontWeight: 700, marginTop: 2 }}>WhatsApp</div>
                </div>
              </div>

              <div className="info-strip">
                <span style={{ fontSize: 12, color: "var(--tx2)", fontFamily: "monospace" }}>
                  +963 980 362 204
                </span>
              </div>

              <a href="https://wa.me/963980362204" target="_blank" rel="noopener noreferrer"
                className="btn btn-green"
                style={{ width: "100%", height: 44, fontSize: 14, borderRadius: 14 }}>
                بدء المحادثة
              </a>
            </div>

          </div>

          {/* Footer */}
          <div style={{ maxWidth: 640, margin: "52px auto 0" }}>
            <div className="line" style={{ marginBottom: 24 }} />
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "center", flexWrap: "wrap", gap: 12,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img src="/logo.webp" alt=""
                  style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", opacity: .85 }} />
                <div>
                  <div style={{
                    fontSize: 13, fontWeight: 800, color: "var(--tx1)",
                    letterSpacing: "-.01em",
                  }}>نداء الرحمن عبود</div>
                  <div style={{ fontSize: 11, color: "var(--tx3)", fontWeight: 500, marginTop: 2 }}>
                    Digital Forensics & Software Engineering
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 11, color: "var(--tx3)", fontWeight: 500, opacity: .7 }}>
                جميع الحقوق محفوظة © 2025
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
