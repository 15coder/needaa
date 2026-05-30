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
    desc: "استخراج الأدلة الرقمية من الأجهزة المشفرة والمقفلة باستخدام أحدث التقنيات الجنائية المعتمدة دولياً.",
    items: ["Cellebrite UFED — استخراج جنائي متقدم", "Oxygen Forensic Detective", "تجاوز الأقفال واستخراج البيانات", "تحليل الأجهزة المشفرة"],
    color: "#29a8e0",
    span: "col-span-12 md:col-span-7",
    featured: true,
  },
  {
    id: "mobile",
    icon: "📱",
    title: "برمجيات الهاتف المتقدمة",
    sub: "Advanced Mobile",
    desc: "التعامل المحترف مع صناديق وأدوات الهاتف المتخصصة وتجاوز حماية المصنع.",
    items: ["Pandora / Chimera / DFT Pro", "EFT Pro / Z3X Box", "تجاوز iCloud & Android FRP", "Firmware Management"],
    color: "#1976d2",
    span: "col-span-12 md:col-span-5",
    featured: false,
  },
  {
    id: "gsm",
    icon: "📡",
    title: "إدارة سيرفرات GSM",
    sub: "GSM Server Management",
    desc: "إدارة شاملة لسيرفرات GSM مع إدارة الكريدت والاشتراكات.",
    items: ["HalabTech Server", "شراء الكريدت وإدارة الاشتراكات", "نشر Firmware آمن", "دعم طيف واسع من الأجهزة"],
    color: "#7c3aed",
    span: "col-span-12 md:col-span-4",
    featured: false,
  },
  {
    id: "dev",
    icon: "⚡",
    title: "هندسة البرمجيات",
    sub: "Software Engineering",
    desc: "تطوير تطبيقات Android أصيلة وبناء واجهات ويب متجاوبة وعصرية.",
    items: ["Android (Java / Kotlin)", "تطبيقات React & Vite", "قواعد بيانات مشفرة", "UI/UX عربي متعدد اللغات"],
    color: "#d97706",
    span: "col-span-12 md:col-span-4",
    featured: false,
  },
  {
    id: "net",
    icon: "🌐",
    title: "هندسة الشبكات",
    sub: "Network Engineering",
    desc: "تصميم وإدارة الشبكات مع تطبيق معايير الأمان.",
    items: ["TCP/IP وبروتوكولات الشبكات", "Cisco Networking", "أمن الشبكات والجدران النارية", "إدارة الخوادم"],
    color: "#0891b2",
    span: "col-span-12 md:col-span-4",
    featured: false,
  },
  {
    id: "design",
    icon: "🎨",
    title: "تصميم ودعاية",
    sub: "Design & Marketing",
    desc: "تصميم الهوية البصرية وإدارة الحملات الإعلانية.",
    items: ["تصميم جرافيك احترافي", "حملات وسائل التواصل", "هوية بصرية متكاملة", "صيانة الحواسيب"],
    color: "#db2777",
    span: "col-span-12 md:col-span-6",
    featured: false,
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.65, delay: index * 0.07, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } }
    );
  }, [index]);

  return (
    <div
      ref={ref}
      className={`${skill.span} card`}
      style={{ padding: skill.featured ? 32 : 26, opacity: 0, cursor: "default" }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
        <div className="skill-icon" style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30` }}>
          {skill.icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: skill.featured ? 17 : 15, fontWeight: 700, color: "#f8fafc", marginBottom: 3 }}>
            {skill.title}
          </h3>
          <div style={{ fontSize: 11, fontWeight: 600, color: skill.color, letterSpacing: 0.5 }}>{skill.sub}</div>
        </div>
      </div>

      {skill.featured && (
        <p style={{ fontSize: 14, color: "rgba(203,213,225,0.65)", lineHeight: 1.75, marginBottom: 20 }}>
          {skill.desc}
        </p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {skill.items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: skill.color, flexShrink: 0 }} />
            <span style={{ fontSize: 13.5, color: "rgba(203,213,225,0.75)" }}>{item}</span>
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
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: hRef.current, start: "top 85%", once: true } }
    );
  }, []);

  return (
    <section id="skills" style={{ padding: "100px 0", background: "var(--navy-900)" }}>
      <div className="section-container">

        <div ref={hRef} className="section-header" style={{ opacity: 0 }}>
          <div className="label-text" style={{ marginBottom: 14, textAlign: "center" }}>
            الكفاءات والخبرات
          </div>
          <h2 className="heading-lg" style={{ textAlign: "center", marginBottom: 16 }}>
            المهارات التقنية
          </h2>
          <div className="ornament">
            <div className="accent-bar" />
          </div>
          <p className="body-text" style={{ textAlign: "center", maxWidth: 520, margin: "20px auto 0", fontSize: 14 }}>
            خلفية تقنية شاملة تجمع بين التحليل الجنائي الرقمي، الأمن السيبراني، وتطوير البرمجيات
          </p>
        </div>

        <div className="bento-grid" style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(12, 1fr)" }}>
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
