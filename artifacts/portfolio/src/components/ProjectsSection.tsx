import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id:"shield", name:"تطبيق نداء شايلد", nameEn:"Nidaa Shield",
    badge:"حماية الخصوصية", chipClass:"chip-blue", stripeColor:"var(--blue-color)",
    subtitle:"تطبيق أمني رائد لحماية الخصوصية وحجب المتتبعات والإعلانات",
    desc:"يعمل بشكل كامل محلياً دون إرسال أي بيانات لخوادم خارجية، مع واجهة عربية أنيقة وأوضاع حماية متعددة المستويات.",
    link:"https://t.me/nidaashield", platform:"Android",
    modes:[
      { icon:"🎮", title:"وضع الألعاب",       sub:"Gaming Mode" },
      { icon:"👨‍👩‍👧", title:"وضع الأسرة",         sub:"Family Mode" },
      { icon:"🪖", title:"الخصوصية العسكرية", sub:"Military-Grade" },
    ],
    features:[
      "حجب كامل للإعلانات والمتتبعات",
      "عمل محلي ١٠٠٪ بدون خوادم خارجية",
      "واجهة عربية أنيقة وسهلة الاستخدام",
      "قواعد DNS متقدمة",
      "حماية من البرامج الضارة",
    ],
    dotColor:"var(--blue-color)",
    btnStyle:{ background:"var(--accent)" } as React.CSSProperties,
  },
  {
    id:"mujahed", name:"تطبيق مجاهد للتجارة", nameEn:"Mujahed POS",
    badge:"إدارة تجارية", chipClass:"chip-purple", stripeColor:"var(--purple-color)",
    subtitle:"نظام أندرويد ذكي متكامل لإدارة الحسابات ونقاط البيع",
    desc:"محرك POS متكامل مع ماسح باركود كاميرا، وتسعير متعدد العملات مدعوم بمحدّث أسعار صرف نشط وأمان عالي المستوى.",
    link:"https://t.me/mojahedapp", platform:"Android",
    modes:[
      { icon:"📷", title:"ماسح الباركود",   sub:"Camera Scanner" },
      { icon:"💱", title:"متعدد العملات",   sub:"USD / Local" },
      { icon:"🔐", title:"تشفير + بصمة",    sub:"Biometric Auth" },
    ],
    features:[
      "محرك POS متقدم مع باركود كاميرا",
      "تسعير محلي وبالدولار مع محدّث سعر الصرف",
      "قاعدة بيانات مشفرة + PIN مخصص",
      "مفاتيح أمان رئيسية + بصمة الإصبع",
      "فواتير مائية قانونية موقعة",
    ],
    dotColor:"var(--purple-color)",
    btnStyle:{ background:"var(--purple-color)" } as React.CSSProperties,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity:0, y:40 },
      { opacity:1, y:0, duration:0.75, delay:index*0.12,
        ease:"power2.out",
        scrollTrigger:{ trigger:ref.current, start:"top 90%", once:true } }
    );
  }, [index]);

  return (
    <div ref={ref} className="glass-card"
      style={{ opacity:0, borderRadius:"var(--r-xl)", overflow:"hidden", padding:0 }}>
      {/* Color stripe */}
      <div style={{ height:3, background:project.stripeColor, opacity:0.8 }} />

      <div style={{ padding:"24px 20px 22px" }}>
        {/* Header */}
        <div style={{ display:"flex", alignItems:"flex-start",
          justifyContent:"space-between", gap:12, marginBottom:16, flexWrap:"wrap" as any }}>
          <div>
            <div style={{ display:"flex", gap:7, marginBottom:10, flexWrap:"wrap" as any }}>
              <span className={`chip ${project.chipClass}`}>{project.badge}</span>
              <span className="chip chip-neutral">{project.platform}</span>
            </div>
            <h3 className="ios-title2" style={{ color:"var(--label-primary)", marginBottom:3 }}>
              {project.name}
            </h3>
            <div style={{ fontSize:12, color:project.stripeColor, fontWeight:700, letterSpacing:0.3 }}>
              {project.nameEn}
            </div>
          </div>
        </div>

        <p className="ios-footnote" style={{ color:"var(--label-secondary)", fontWeight:600, marginBottom:6 }}>
          {project.subtitle}
        </p>
        <p className="ios-footnote" style={{ color:"var(--label-tertiary)", marginBottom:20 }}>
          {project.desc}
        </p>

        {/* Modes grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:8, marginBottom:20,
        }}>
          {project.modes.map(m => (
            <div key={m.sub} className="glass-inset"
              style={{ padding:"12px 8px", textAlign:"center", borderRadius:"var(--r-md)" }}>
              <div style={{ fontSize:18, marginBottom:5 }}>{m.icon}</div>
              <div className="ios-caption1" style={{ color:"var(--label-primary)", fontWeight:700, marginBottom:2 }}>
                {m.title}
              </div>
              <div className="ios-caption2">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="sep" style={{ marginBottom:18 }} />

        {/* Features */}
        <div style={{ marginBottom:22 }}>
          <div className="ios-caption2" style={{ marginBottom:12, letterSpacing:1 }}>
            المميزات الرئيسية
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
            {project.features.map((f,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke={project.dotColor} strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="ios-footnote">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          className="btn-ios btn-filled"
          style={{
            textDecoration:"none", width:"100%", justifyContent:"center",
            ...project.btnStyle,
            boxShadow:`0 4px 18px ${project.stripeColor}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
          }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          تحميل عبر تيلجرام
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const hRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!hRef.current) return;
    gsap.fromTo(hRef.current,
      { opacity:0, y:24 },
      { opacity:1, y:0, duration:0.7, ease:"power2.out",
        scrollTrigger:{ trigger:hRef.current, start:"top 87%", once:true } }
    );
  }, []);

  return (
    <section id="projects" style={{
      padding:"80px 0",
      background:"var(--bg-secondary)",
      transition:"background 0.3s",
    }}>
      <div className="container">
        <div ref={hRef} style={{ textAlign:"center", marginBottom:44, opacity:0 }}>
          <span className="chip chip-purple" style={{ marginBottom:14, display:"inline-flex" }}>
            المشاريع المنجزة
          </span>
          <h2 className="ios-title1" style={{ marginBottom:12, color:"var(--label-primary)" }}>
            التطبيقات المستقلة
          </h2>
          <div style={{ width:32, height:3, borderRadius:2, margin:"0 auto",
            background:"linear-gradient(90deg, var(--purple-color), var(--accent))" }} />
        </div>

        {/* Responsive: 1 col mobile, 2 col desktop */}
        <div style={{
          display:"grid",
          gap:16,
          gridTemplateColumns:"1fr",
        }}>
          <style>{`@media(min-width:768px){ #proj-grid{ grid-template-columns:1fr 1fr!important; } }`}</style>
          <div id="proj-grid" style={{
            display:"grid", gap:16, gridTemplateColumns:"1fr",
          }}>
            {projects.map((p,i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
