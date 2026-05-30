import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  {
    id:"forensics", icon:"🔬",
    title:"التحليل الجنائي الرقمي", sub:"Digital Forensics",
    chip:"chip-blue", dot:"var(--blue)",
    items:["Cellebrite UFED & Oxygen Forensic","تجاوز الأقفال واستخراج البيانات","تحليل الأجهزة المشفرة والمقفلة"],
    span:2,
  },
  {
    id:"mobile", icon:"📱",
    title:"برمجيات الهاتف المتقدمة", sub:"Advanced Mobile",
    chip:"chip-purple", dot:"var(--c-purple)",
    items:["Pandora / Chimera / DFT Pro","EFT Pro / Z3X Box","تجاوز iCloud & Android FRP","Firmware Management"],
    span:2,
  },
  {
    id:"gsm", icon:"📡",
    title:"إدارة سيرفرات GSM", sub:"GSM Server Management",
    chip:"chip-teal", dot:"var(--c-teal)",
    items:["HalabTech Server","شراء الكريدت وإدارة الاشتراكات","نشر Firmware آمن"],
    span:1,
  },
  {
    id:"dev", icon:"⚡",
    title:"هندسة البرمجيات", sub:"Software Engineering",
    chip:"chip-orange", dot:"var(--c-orange)",
    items:["تصميم تطبيقات Android","برمجة المواقع الإلكترونية"],
    span:1,
  },
  {
    id:"design", icon:"🎨",
    title:"تصميم جرافيكي", sub:"Graphic Design",
    chip:"chip-pink", dot:"var(--c-pink)",
    items:["تصميم جرافيكي احترافي","تصميم بوسترات بطابع حديث"],
    span:1,
  },
  {
    id:"pc", icon:"🖥️",
    title:"صيانة الحاسب", sub:"PC Maintenance",
    chip:"chip-green", dot:"var(--c-green)",
    items:["صيانة هاردوير شاملة","تثبيت وإدارة الأنظمة","استعادة البيانات"],
    span:1,
  },
];

function Card({ s, i }: { s:typeof SKILLS[0]; i:number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity:0, y:28, scale:.98 },
      { opacity:1, y:0, scale:1, duration:.58, delay:i*.06,
        ease:"power2.out",
        scrollTrigger:{ trigger:ref.current, start:"top 92%", once:true }}
    );
  },[i]);

  return (
    <div ref={ref} className="glass card-lift"
      style={{
        padding:"var(--sp-6) var(--sp-5)", opacity:0,
        borderRadius:"var(--r-xl)", cursor:"default",
        gridColumn:`span ${s.span}`,
      }}>
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
        <div className="icon-box">{s.icon}</div>
        <div style={{ minWidth:0 }}>
          <div className="t-headline" style={{ fontSize:15, color:"var(--lbl-primary)", marginBottom:4 }}>
            {s.title}
          </div>
          <span className={`chip ${s.chip}`} style={{ padding:"3px 9px", fontSize:11 }}>
            {s.sub}
          </span>
        </div>
      </div>
      <div className="sep" style={{ marginBottom:12 }}/>
      <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
        {s.items.map((item,j)=>(
          <div key={j} style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:5, height:5, borderRadius:"50%",
              background:s.dot, flexShrink:0 }}/>
            <span className="t-foot">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
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
        .skills-grid {
          display:grid;
          grid-template-columns:1fr;
          gap:12px;
        }
        @media(min-width:500px){
          .skills-grid { grid-template-columns:repeat(2,1fr); }
        }
        @media(min-width:768px){
          .skills-grid { grid-template-columns:repeat(4,1fr); }
        }
        /* Force span-2 only on md+ */
        @media(max-width:767px){
          .skills-grid > div { grid-column:span 1 !important; }
        }
        @media(min-width:500px) and (max-width:767px){
          .skills-grid > div:nth-child(1),
          .skills-grid > div:nth-child(2) { grid-column:span 2 !important; }
        }
      `}</style>

      <section id="skills" className="section"
        style={{ background:"var(--sys-bg-primary)", transition:"background .3s" }}>
        <div className="wrap">

          <div ref={hRef} className="sec-header" style={{ opacity:0 }}>
            <span className="chip chip-blue" style={{ marginBottom:12 }}>المهارات التقنية</span>
            <h2 className="t-title1" style={{ color:"var(--lbl-primary)" }}>الكفاءات والخبرات</h2>
            <div className="divider"
              style={{ background:"linear-gradient(90deg,var(--blue),var(--c-purple))" }}/>
          </div>

          <div className="skills-grid">
            {SKILLS.map((s,i)=><Card key={s.id} s={s} i={i}/>)}
          </div>

        </div>
      </section>
    </>
  );
}
