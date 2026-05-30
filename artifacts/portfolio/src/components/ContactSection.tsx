import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const hRef = useRef<HTMLDivElement>(null);
  const gRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(hRef.current)
      gsap.fromTo(hRef.current,
        { opacity:0, y:22 },
        { opacity:1, y:0, duration:.7, ease:"power2.out",
          scrollTrigger:{ trigger:hRef.current, start:"top 88%", once:true }}
      );
    if(gRef.current)
      gsap.fromTo(Array.from(gRef.current.children),
        { opacity:0, y:28 },
        { opacity:1, y:0, duration:.58, stagger:.10, ease:"power2.out",
          scrollTrigger:{ trigger:gRef.current, start:"top 90%", once:true }}
      );
  },[]);

  const cardPad: React.CSSProperties = { padding:"var(--sp-6) var(--sp-5)" };

  return (
    <>
      <style>{`
        .contact-grid {
          display:grid;
          grid-template-columns:1fr;
          gap:12px;
          max-width:680px;
          margin:0 auto;
        }
        @media(min-width:520px){
          .contact-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <section id="contact" className="section"
        style={{
          background:"var(--sys-bg-primary)",
          paddingBottom:"max(var(--sp-16), calc(env(safe-area-inset-bottom,0px) + 48px))",
          transition:"background .3s",
        }}>
        <div className="wrap">

          <div ref={hRef} className="sec-header" style={{ opacity:0 }}>
            <span className="chip chip-green" style={{ marginBottom:12 }}>تواصل مباشر</span>
            <h2 className="t-title1" style={{ color:"var(--lbl-primary)" }}>قنوات التواصل</h2>
            <div className="divider"
              style={{ background:"linear-gradient(90deg,var(--c-green),var(--blue))" }}/>
          </div>

          <div ref={gRef} className="contact-grid">

            {/* Email */}
            <div className="glass card-lift" style={{ ...cardPad, borderRadius:"var(--r-xl)", opacity:0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div className="icon-box" style={{ background:"var(--blue-fill)" }}>
                  <svg width="20" height="20" fill="none" stroke="var(--blue)" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="t-headline" style={{ fontSize:15, color:"var(--lbl-primary)" }}>
                    البريد الإلكتروني
                  </div>
                  <div style={{ fontSize:11, color:"var(--blue)", fontWeight:700 }}>Email</div>
                </div>
              </div>

              <div className="glass-inset" style={{
                padding:"10px 13px", marginBottom:16,
                borderRadius:"var(--r-sm)",
                direction:"ltr", textAlign:"left",
              }}>
                <span style={{ fontSize:11.5, color:"var(--lbl-secondary)", fontFamily:"monospace" }}>
                  needaaalrahman00101@gmail.com
                </span>
              </div>

              <a href="mailto:needaaalrahman00101@gmail.com"
                className="btn btn-primary btn-sm"
                style={{ textDecoration:"none", width:"100%", fontSize:15 }}>
                إرسال بريد
              </a>
            </div>

            {/* WhatsApp */}
            <div className="glass card-lift" style={{ ...cardPad, borderRadius:"var(--r-xl)", opacity:0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div className="icon-box" style={{ background:"var(--fill-green)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--c-green)">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="t-headline" style={{ fontSize:15, color:"var(--lbl-primary)" }}>
                    واتساب
                  </div>
                  <div style={{ fontSize:11, color:"var(--c-green)", fontWeight:700 }}>WhatsApp</div>
                </div>
              </div>

              <div className="glass-inset" style={{
                padding:"10px 13px", marginBottom:16,
                borderRadius:"var(--r-sm)",
                direction:"ltr", textAlign:"left",
              }}>
                <span style={{ fontSize:12, color:"var(--lbl-secondary)", fontFamily:"monospace" }}>
                  +963 980 362 204
                </span>
              </div>

              <a href="https://wa.me/963980362204" target="_blank" rel="noopener noreferrer"
                className="btn btn-sm"
                style={{
                  textDecoration:"none", width:"100%", fontSize:15,
                  background:"var(--c-green)", color:"#fff",
                  boxShadow:"0 4px 16px rgba(52,199,89,.28), inset 0 1px 0 rgba(255,255,255,.22)",
                }}>
                بدء المحادثة
              </a>
            </div>

          </div>

          {/* Footer */}
          <div style={{ maxWidth:680, margin:"48px auto 0" }}>
            <div className="sep" style={{ marginBottom:24 }}/>
            <div style={{ display:"flex", justifyContent:"space-between",
              alignItems:"center", flexWrap:"wrap", gap:12 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <img src="/logo.webp" alt="شعار"
                  style={{ width:30, height:30, borderRadius:"50%", objectFit:"cover" }}/>
                <div>
                  <div className="t-foot" style={{ fontWeight:800, color:"var(--lbl-primary)" }}>
                    نداء الرحمن عبود
                  </div>
                  <div className="t-cap2">Digital Forensics & Software Engineering</div>
                </div>
              </div>
              <div className="t-cap2">جميع الحقوق محفوظة © 2024</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
