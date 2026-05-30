import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: "forensics",
    icon: "🔬",
    title: "التحليل الجنائي الرقمي",
    sub: "Digital Forensics",
    color: "#1c8ef5",
    span: "col-span-12 md:col-span-6",
    items: [
      "Cellebrite UFED & Oxygen Forensic",
      "تجاوز الأقفال واستخراج البيانات",
      "تحليل الأجهزة المشفرة والمقفلة",
    ],
  },
  {
    id: "mobile",
    icon: "📱",
    title: "برمجيات الهاتف المتقدمة",
    sub: "Advanced Mobile",
    color: "#6450f0",
    span: "col-span-12 md:col-span-6",
    items: [
      "Pandora / Chimera / DFT Pro",
      "EFT Pro / Z3X Box",
      "تجاوز iCloud & Android FRP",
      "Firmware Management",
    ],
  },
  {
    id: "gsm",
    icon: "📡",
    title: "إدارة سيرفرات GSM",
    sub: "GSM Server Management",
    color: "#0891b2",
    span: "col-span-12 md:col-span-4",
    items: [
      "HalabTech Server",
      "شراء الكريدت وإدارة الاشتراكات",
      "نشر Firmware آمن",
      "دعم طيف واسع من الأجهزة",
    ],
  },
  {
    id: "dev",
    icon: "⚡",
    title: "هندسة البرمجيات",
    sub: "Software Engineering",
    color: "#f59e0b",
    span: "col-span-12 md:col-span-4",
    items: [
      "تصميم تطبيقات Android",
      "برمجة المواقع الإلكترونية",
    ],
  },
  {
    id: "design",
    icon: "🎨",
    title: "تصميم جرافيكي",
    sub: "Graphic Design",
    color: "#ec4899",
    span: "col-span-12 md:col-span-4",
    items: [
      "تصميم جرافيكي احترافي",
      "تصميم بوسترات بطابع حديث",
    ],
  },
  {
    id: "pc",
    icon: "🖥️",
    title: "صيانة الحاسب",
    sub: "PC Maintenance",
    color: "#10b981",
    span: "col-span-12 md:col-span-6",
    items: [
      "صيانة هاردوير شاملة",
      "تثبيت وإدارة الأنظمة (سوفتوير)",
      "استعادة البيانات",
    ],
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity: 0, y: 36, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.65, delay: index * 0.07,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 89%", once: true },
      }
    );
  }, [index]);

  return (
    <div
      ref={ref}
      className={`${skill.span} glass`}
      style={{ padding: 26, opacity: 0, cursor: "default" }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <div
          className="icon-box"
          style={{
            background: `${skill.color}14`,
            borderColor: `${skill.color}28`,
          }}
        >
          {skill.icon}
        </div>
        <div>
          <div className="text-headline" style={{ fontSize: 15, marginBottom: 2 }}>{skill.title}</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: skill.color, letterSpacing: 0.4 }}>{skill.sub}</div>
        </div>
      </div>

      {/* Separator */}
      <div className="sep" style={{ marginBottom: 16 }} />

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {skill.items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="dot-bullet" style={{ background: skill.color }} />
            <span style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>{item}</span>
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
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
        scrollTrigger: { trigger: hRef.current, start: "top 86%", once: true },
      }
    );
  }, []);

  return (
    <section id="skills" style={{
      padding: "100px 0",
      background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(28,142,245,0.04) 0%, transparent 70%), var(--bg-layer1)",
    }}>
      <div className="container">

        {/* Header */}
        <div ref={hRef} style={{ textAlign: "center", marginBottom: 56, opacity: 0 }}>
          <span className="chip" style={{ marginBottom: 18, display: "inline-flex" }}>المهارات التقنية</span>
          <h2 className="text-title" style={{ marginBottom: 14 }}>الكفاءات والخبرات</h2>
          <div style={{
            width: 36, height: 3, borderRadius: 2, margin: "0 auto",
            background: "linear-gradient(90deg, var(--accent), #6450f0)",
          }} />
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(12, 1fr)" }}>
          {skills.map((s, i) => <SkillCard key={s.id} skill={s} index={i} />)}
        </div>

      </div>
    </section>
  );
}
