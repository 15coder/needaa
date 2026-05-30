import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id:"shield",
    name:"تطبيق نداء شايلد", nameEn:"Nidaa Shield",
    badge:"حماية الخصوصية", chip:"chip-blue",
    stripe:"var(--blue)", btnBg:"var(--blue)",
    sub:"تطبيق أمني لحماية الخصوصية وحجب المتتبعات والإعلانات",
    desc:"يعمل محلياً بالكامل دون إرسال أي بيانات لخوادم خارجية، مع واجهة عربية وأوضاع حماية متعددة.",
    link:"https://t.me/nidaashield",
    modes:[
      { icon:"🎮", t:"وضع الألعاب",       s:"Gaming" },
      { icon:"👨‍👩‍👧", t:"وضع الأسرة",         s:"Family" },
      { icon:"🪖", t:"خصوصية عسكرية",     s:"Military" },
    ],
    features:[
      "حجب كامل للإعلانات والمتتبعات",
      "عمل محلي ١٠٠٪ بدون خوادم خارجية",
      "واجهة عربية أنيقة وسهلة الاستخدام",
      "قواعد DNS متقدمة",
      "حماية من البرامج الضارة",
    ],
  },
  {
    id:"mujahed",
    name:"تطبيق مجاهد للتجارة", nameEn:"Mujahed POS",
    badge:"إدارة تجارية", chip:"chip-purple",
    stripe:"var(--c-purple)", btnBg:"var(--c-purple)",
    sub:"نظام أندرويد متكامل لإدارة الحسابات ونقاط البيع",
    desc:"محرك POS مع ماسح باركود كاميرا وتسعير متعدد العملات وأمان عالي المستوى.",
    link:"https://t.me/mojahedapp",
    modes:[
      { icon:"📷", t:"ماسح الباركود",   s:"Camera" },
      { icon:"💱", t:"متعدد العملات",   s:"USD/Local" },
      { icon:"🔐", t:"تشفير + بصمة",    s:"Biometric" },
    ],
    features:[
      "محرك POS مع باركود كاميرا",
      "تسعير محلي وبالدولار مع محدّث سعر الصرف",
      "قاعدة بيانات مشفرة + PIN مخصص",
      "مفاتيح أمان رئيسية + بصمة الإصبع",
      "فواتير مائية قانونية موقعة",
    ],
  },
];

function CheckIcon({ color }: { color:string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.6" style={{ flexShrink:0 }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function ProjectCard({ p, i }: { p:typeof PROJECTS[0]; i:number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity:0, y:36 },
      { opacity:1, y:0, duration:.72, delay:i*.10,
        ease:"power2.out",
        scrollTrigger:{ trigger:ref.current, start:"top 92%", once:true }}
    );
  },[i]);

  return (
    <div ref={ref} className="glass card-lift"
      style={{ borderRadius:"var(--r-xl)", overflow:"hidden", opacity:0, padding:0 }}>

      {/* stripe */}
      <div style={{ height:3, background:p.stripe, opacity:.85 }}/>

      <div style={{ padding:"var(--sp-6) var(--sp-5) var(--sp-5)" }}>

        {/* head */}
        <div style={{ marginBottom:14 }}>
          <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:10 }}>
            <span className={`chip ${p.chip}`}>{p.badge}</span>
            <span className="chip chip-neutral">Android</span>
          </div>
          <h3 className="t-title2" style={{ color:"var(--lbl-primary)", marginBottom:3 }}>
            {p.name}
          </h3>
          <div style={{ fontSize:11, color:p.stripe, fontWeight:700, letterSpacing:.3 }}>
            {p.nameEn}
          </div>
        </div>

        <p className="t-foot" style={{ color:"var(--lbl-secondary)", fontWeight:600, marginBottom:5 }}>
          {p.sub}
        </p>
        <p className="t-foot" style={{ marginBottom:18 }}>{p.desc}</p>

        {/* modes */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:18 }}>
          {p.modes.map(m=>(
            <div key={m.s} className="glass-inset" style={{
              padding:"11px 6px", textAlign:"center",
              borderRadius:"var(--r-md)",
            }}>
              <div style={{ fontSize:clamp(16,18), marginBottom:5 }}>{m.icon}</div>
              <div className="t-cap1" style={{ color:"var(--lbl-primary)", fontWeight:700, marginBottom:2 }}>
                {m.t}
              </div>
              <div className="t-cap2">{m.s}</div>
            </div>
          ))}
        </div>

        <div className="sep" style={{ marginBottom:14 }}/>

        {/* features */}
        <div style={{ marginBottom:20 }}>
          <div className="t-cap2" style={{ marginBottom:10, letterSpacing:.8 }}>المميزات</div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {p.features.map((f,j)=>(
              <div key={j} style={{ display:"flex", alignItems:"center", gap:9 }}>
                <CheckIcon color={p.stripe}/>
                <span className="t-foot">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a href={p.link} target="_blank" rel="noopener noreferrer"
          className="btn"
          style={{
            textDecoration:"none", width:"100%", fontSize:16,
            background:p.btnBg, color:"#fff",
            boxShadow:`0 4px 18px ${p.stripe}40, inset 0 1px 0 rgba(255,255,255,.2)`,
          }}>
          <TelegramIcon/>
          تحميل عبر تيلجرام
        </a>

      </div>
    </div>
  );
}

function clamp(a:number, b:number){ return `clamp(${a}px,4vw,${b}px)`; }

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

export default function ProjectsSection() {
  const hRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(!hRef.current) return;
    gsap.fromTo(hRef.current,
      { opacity:0, y:22 },
      { opacity:1, y:0, duration:.7, ease:"power2.out",
        scrollTrigger:{ trigger:hRef.current, start:"top 88%", once:true }}
    );
  },[]);

  return (
    <>
      <style>{`
        .proj-grid {
          display:grid;
          grid-template-columns:1fr;
          gap:14px;
        }
        @media(min-width:700px){
          .proj-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <section id="projects" className="section"
        style={{ background:"var(--sys-bg-secondary)", transition:"background .3s" }}>
        <div className="wrap">

          <div ref={hRef} className="sec-header" style={{ opacity:0 }}>
            <span className="chip chip-purple" style={{ marginBottom:12 }}>المشاريع المنجزة</span>
            <h2 className="t-title1" style={{ color:"var(--lbl-primary)" }}>التطبيقات المستقلة</h2>
            <div className="divider"
              style={{ background:"linear-gradient(90deg,var(--c-purple),var(--blue))" }}/>
          </div>

          <div className="proj-grid">
            {PROJECTS.map((p,i)=><ProjectCard key={p.id} p={p} i={i}/>)}
          </div>

        </div>
      </section>
    </>
  );
}
