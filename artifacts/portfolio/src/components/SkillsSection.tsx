import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id:"forensics", icon:"🔬",
    title:"التحليل الجنائي الرقمي", sub:"Digital Forensics",
    chipClass:"chip-blue", dotColor:"var(--blue-color)",
    span:"col-span-12 md:col-span-6",
    items:["Cellebrite UFED & Oxygen Forensic","تجاوز الأقفال واستخراج البيانات","تحليل الأجهزة المشفرة والمقفلة"],
  },
  {
    id:"mobile", icon:"📱",
    title:"برمجيات الهاتف المتقدمة", sub:"Advanced Mobile",
    chipClass:"chip-purple", dotColor:"var(--purple-color)",
    span:"col-span-12 md:col-span-6",
    items:["Pandora / Chimera / DFT Pro","EFT Pro / Z3X Box","تجاوز iCloud & Android FRP","Firmware Management"],
  },
  {
    id:"gsm", icon:"📡",
    title:"إدارة سيرفرات GSM", sub:"GSM Server Management",
    chipClass:"chip-teal", dotColor:"var(--teal-color)",
    span:"col-span-12 md:col-span-4",
    items:["HalabTech Server","شراء الكريدت وإدارة الاشتراكات","نشر Firmware آمن","دعم طيف واسع من الأجهزة"],
  },
  {
    id:"dev", icon:"⚡",
    title:"هندسة البرمجيات", sub:"Software Engineering",
    chipClass:"chip-orange", dotColor:"var(--orange-color)",
    span:"col-span-12 md:col-span-4",
    items:["تصميم تطبيقات Android","برمجة المواقع الإلكترونية"],
  },
  {
    id:"design", icon:"🎨",
    title:"تصميم جرافيكي", sub:"Graphic Design",
    chipClass:"chip-pink", dotColor:"var(--pink-color)",
    span:"col-span-12 md:col-span-4",
    items:["تصميم جرافيكي احترافي","تصميم بوسترات بطابع حديث"],
  },
  {
    id:"pc", icon:"🖥️",
    title:"صيانة الحاسب", sub:"PC Maintenance",
    chipClass:"chip-green", dotColor:"var(--green-color)",
    span:"col-span-12 md:col-span-6",
    items:["صيانة هاردوير شاملة","تثبيت وإدارة الأنظمة (سوفتوير)","استعادة البيانات"],
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity:0, y:32, scale:0.97 },
      { opacity:1, y:0, scale:1, duration:0.6, delay:index*0.065,
        ease:"power2.out",
        scrollTrigger:{ trigger:ref.current, start:"top 90%", once:true } }
    );
  }, [index]);

  return (
    <div ref={ref} className={`${skill.span} glass-card`}
      style={{ padding:"22px 20px", opacity:0, cursor:"default" }}>
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
        <div className="icon-box">{skill.icon}</div>
        <div>
          <div className="ios-headline" style={{ color:"var(--label-primary)", fontSize:15 }}>
            {skill.title}
          </div>
          <span className={`chip ${skill.chipClass}`} style={{ padding:"3px 9px", fontSize:11, marginTop:3 }}>
            {skill.sub}
          </span>
        </div>
      </div>
      <div className="sep" style={{ marginBottom:14 }} />
      <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
        {skill.items.map((item, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div className="dot" style={{ background:skill.dotColor }} />
            <span className="ios-subhead" style={{ fontSize:14 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
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
    <section id="skills" style={{
      padding:"80px 0",
      background:"var(--bg-grouped)",
      transition:"background 0.3s",
    }}>
      <div className="container">
        <div ref={hRef} style={{ textAlign:"center", marginBottom:44, opacity:0 }}>
          <span className="chip chip-blue" style={{ marginBottom:14, display:"inline-flex" }}>
            المهارات التقنية
          </span>
          <h2 className="ios-title1" style={{ marginBottom:12, color:"var(--label-primary)" }}>
            الكفاءات والخبرات
          </h2>
          <div style={{ width:32, height:3, borderRadius:2, margin:"0 auto",
            background:"linear-gradient(90deg, var(--accent), var(--purple-color))" }} />
        </div>

        <div style={{ display:"grid", gap:14, gridTemplateColumns:"repeat(12,1fr)" }}>
          {skills.map((s,i) => <SkillCard key={s.id} skill={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
