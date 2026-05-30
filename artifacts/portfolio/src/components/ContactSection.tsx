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
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: hRef.current, start: "top 86%", once: true },
        }
      );
    }
    if (bodyRef.current) {
      gsap.fromTo(Array.from(bodyRef.current.children),
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: bodyRef.current, start: "top 87%", once: true },
        }
      );
    }
  }, []);

  const cardStyle: React.CSSProperties = {
    padding: 28,
    display: "flex",
    flexDirection: "column",
    gap: 0,
  };

  return (
    <section id="contact" style={{
      padding: "100px 0 60px",
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(28,142,245,0.04) 0%, transparent 60%), var(--bg-layer1)",
    }}>
      <div className="container">

        {/* Header */}
        <div ref={hRef} style={{ textAlign: "center", marginBottom: 56, opacity: 0 }}>
          <span className="chip" style={{ marginBottom: 18, display: "inline-flex" }}>تواصل مباشر</span>
          <h2 className="text-title" style={{ marginBottom: 14 }}>قنوات التواصل</h2>
          <div style={{
            width: 36, height: 3, borderRadius: 2, margin: "0 auto",
            background: "linear-gradient(90deg, var(--accent), #10b981)",
          }} />
        </div>

        {/* Cards */}
        <div ref={bodyRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18, maxWidth: 720, margin: "0 auto" }}>

          {/* Email */}
          <div className="glass" style={cardStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div className="icon-box" style={{ background: "rgba(28,142,245,0.12)", borderColor: "rgba(28,142,245,0.22)", width: 52, height: 52 }}>
                <svg width="22" height="22" fill="none" stroke="var(--accent-bright)" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="text-headline" style={{ fontSize: 15 }}>البريد الإلكتروني</div>
                <div style={{ fontSize: 11, color: "var(--accent-bright)", fontWeight: 700 }}>Email</div>
              </div>
            </div>

            <div className="glass-inset" style={{ padding: "11px 15px", marginBottom: 20, direction: "ltr", textAlign: "left", borderRadius: "var(--radius-sm)" }}>
              <span style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "monospace" }}>
                needaaalrahman00101@gmail.com
              </span>
            </div>

            <a
              href="mailto:needaaalrahman00101@gmail.com"
              className="btn btn-filled"
              style={{ textDecoration: "none", justifyContent: "center" }}
            >
              إرسال بريد إلكتروني
            </a>
          </div>

          {/* WhatsApp */}
          <div className="glass" style={cardStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div className="icon-box" style={{ background: "rgba(34,197,94,0.1)", borderColor: "rgba(34,197,94,0.22)", width: 52, height: 52 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#22c55e">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="text-headline" style={{ fontSize: 15 }}>واتساب</div>
                <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 700 }}>WhatsApp</div>
              </div>
            </div>

            <div className="glass-inset" style={{ padding: "11px 15px", marginBottom: 20, direction: "ltr", textAlign: "left", borderRadius: "var(--radius-sm)" }}>
              <span style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "monospace" }}>
                +963 980 362 204
              </span>
            </div>

            <a
              href="https://wa.me/963980362204"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-filled"
              style={{
                textDecoration: "none", justifyContent: "center",
                background: "linear-gradient(135deg, #16a34a, #22c55e)",
                boxShadow: "0 4px 20px rgba(34,197,94,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              بدء المحادثة
            </a>
          </div>

        </div>

        {/* Footer */}
        <div style={{ marginTop: 80 }}>
          <div className="sep" style={{ marginBottom: 32 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/logo.webp"
                alt="شعار"
                style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text-primary)" }}>نداء الرحمن عبود</div>
                <div className="text-caption" style={{ marginTop: 2 }}>Digital Forensics & Software Engineering</div>
              </div>
            </div>
            <div className="text-caption">
              جميع الحقوق محفوظة © 2024
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
