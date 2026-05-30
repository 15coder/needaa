import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const hRef    = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hRef.current) {
      gsap.fromTo(hRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: hRef.current, start: "top 85%", once: true } }
      );
    }
    if (bodyRef.current) {
      gsap.fromTo(Array.from(bodyRef.current.children),
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: bodyRef.current, start: "top 86%", once: true } }
      );
    }
  }, []);

  return (
    <section id="contact" style={{ padding: "100px 0 60px", background: "var(--navy-900)" }}>
      <div className="section-container">

        {/* Header */}
        <div ref={hRef} className="section-header" style={{ opacity: 0 }}>
          <div className="label-text" style={{ marginBottom: 14, textAlign: "center" }}>قنوات التواصل</div>
          <h2 className="heading-lg" style={{ textAlign: "center", marginBottom: 16 }}>تواصل مباشر</h2>
          <div className="ornament"><div className="accent-bar" /></div>
          <p className="body-text" style={{ textAlign: "center", maxWidth: 480, margin: "20px auto 0", fontSize: 14 }}>
            متاح للتعاون في مشاريع الأمن السيبراني، التحليل الجنائي الرقمي، وتطوير البرمجيات
          </p>
        </div>

        <div ref={bodyRef} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Contact cards row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>

            {/* Email */}
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "rgba(41,168,224,0.12)",
                  border: "1px solid rgba(41,168,224,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="22" height="22" fill="none" stroke="var(--logo-blue)" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc", marginBottom: 3 }}>البريد الإلكتروني</div>
                  <div style={{ fontSize: 11, color: "var(--logo-blue)", fontWeight: 600 }}>Email</div>
                </div>
              </div>
              <div style={{
                padding: "12px 16px", borderRadius: 10,
                background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.07)",
                marginBottom: 20, direction: "ltr", textAlign: "left",
              }}>
                <span style={{ fontSize: 13, color: "rgba(203,213,225,0.8)", fontFamily: "monospace" }}>
                  needaaalrahman00101@gmail.com
                </span>
              </div>
              <a
                href="mailto:needaaalrahman00101@gmail.com"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", textDecoration: "none", display: "flex" }}
              >
                إرسال بريد إلكتروني
              </a>
            </div>

            {/* WhatsApp */}
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#22c55e">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc", marginBottom: 3 }}>واتساب</div>
                  <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 600 }}>WhatsApp</div>
                </div>
              </div>
              <div style={{
                padding: "12px 16px", borderRadius: 10,
                background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.07)",
                marginBottom: 20, direction: "ltr", textAlign: "left",
              }}>
                <span style={{ fontSize: 13, color: "rgba(203,213,225,0.8)", fontFamily: "monospace" }}>
                  +963 980 362 204
                </span>
              </div>
              <a
                href="https://wa.me/963980362204"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  width: "100%", justifyContent: "center", textDecoration: "none", display: "flex",
                  background: "linear-gradient(135deg, #16a34a, #22c55e)",
                  boxShadow: "0 4px 16px rgba(34,197,94,0.25)",
                }}
              >
                بدء المحادثة
              </a>
            </div>
          </div>

          {/* Telegram Links */}
          <div className="card" style={{ padding: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(203,213,225,0.4)", letterSpacing: 1.5, marginBottom: 18 }}>
              قنوات تيلجرام
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
              {[
                { label: "نداء شايلد", sub: "تحميل تطبيق Nidaa Shield", href: "https://t.me/nidaashield", color: "#29a8e0" },
                { label: "مجاهد للتجارة", sub: "تحميل تطبيق Mujahed POS", href: "https://t.me/mojahedapp", color: "#7c3aed" },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "16px 20px", borderRadius: 12,
                    background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none", transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${link.color}40`;
                    e.currentTarget.style.background = `${link.color}0a`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.background = "rgba(0,0,0,0.2)";
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: `${link.color}18`, border: `1px solid ${link.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={link.color}>
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#f8fafc" }}>{link.label}</div>
                    <div style={{ fontSize: 11, color: "rgba(203,213,225,0.45)", marginTop: 2 }}>{link.sub}</div>
                  </div>
                  <svg width="14" height="14" fill="none" stroke="rgba(203,213,225,0.2)" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: "auto" }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ marginTop: 80 }}>
          <div className="divider" style={{ marginBottom: 36 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img src="/logo.webp" alt="شعار" style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover" }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#f8fafc" }}>نداء الرحمن عبود</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Digital Forensics & Software Engineering</div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>
              جميع الحقوق محفوظة © 2024 — نداء الرحمن عبود
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
