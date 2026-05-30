import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: "forensics",
    title: "التحليل الجنائي الرقمي",
    subtitle: "Digital Forensics",
    icon: "🔬",
    span: "col-span-12 md:col-span-7",
    color: "var(--neon-green)",
    items: [
      "تجاوز أقفال الأجهزة واستخراج البيانات",
      "Cellebrite UFED — استخراج جنائي متقدم",
      "Oxygen Forensic Detective",
      "تحليل الأجهزة المشفرة والمقفلة",
    ],
    tags: ["Cellebrite", "Oxygen", "UFED", "EDL"],
  },
  {
    id: "mobile",
    title: "برمجيات الهاتف المتقدمة",
    subtitle: "Advanced Mobile Software",
    icon: "📱",
    span: "col-span-12 md:col-span-5",
    color: "var(--neon-blue)",
    items: [
      "Pandora / Chimera / DFT Pro",
      "EFT Pro / Z3X Box",
      "تجاوز iCloud & Android FRP",
      "تثبيت وإدارة Firmware",
    ],
    tags: ["iCloud Bypass", "FRP", "JTAG", "ISP"],
  },
  {
    id: "gsm",
    title: "إدارة سيرفرات GSM",
    subtitle: "GSM Server Management",
    icon: "📡",
    span: "col-span-12 md:col-span-5",
    color: "#a855f7",
    items: [
      "HalabTech Server — إدارة شاملة",
      "شراء الكريدت وإدارة الاشتراكات",
      "نشر Firmware بشكل آمن",
      "دعم طيف واسع من الأجهزة",
    ],
    tags: ["HalabTech", "GSM", "Firmware"],
  },
  {
    id: "dev",
    title: "هندسة البرمجيات",
    subtitle: "Software Engineering",
    icon: "⚡",
    span: "col-span-12 md:col-span-7",
    color: "#f59e0b",
    items: [
      "تطوير تطبيقات Android أصيلة (Java/Kotlin)",
      "بناء واجهات ويب متجاوبة وعصرية",
      "تصميم قواعد بيانات مشفرة",
      "UI/UX عربي ومتعدد اللغات",
    ],
    tags: ["Android", "React", "Kotlin", "SQLite"],
  },
  {
    id: "design",
    title: "تصميم جرافيك وإعلانات",
    subtitle: "Design & Advertising",
    icon: "🎨",
    span: "col-span-12 md:col-span-4",
    color: "#ec4899",
    items: [
      "تصميم جرافيك احترافي",
      "حملات إعلانية على وسائل التواصل",
      "هوية بصرية متكاملة",
    ],
    tags: ["Photoshop", "Social Media"],
  },
  {
    id: "hardware",
    title: "صيانة الحواسيب",
    subtitle: "PC Maintenance",
    icon: "🖥️",
    span: "col-span-12 md:col-span-4",
    color: "#06b6d4",
    items: [
      "صيانة هاردوير شاملة",
      "تثبيت وإدارة الأنظمة",
      "استعادة البيانات",
    ],
    tags: ["Hardware", "Windows", "Linux"],
  },
  {
    id: "network",
    title: "هندسة الشبكات",
    subtitle: "Network Engineering",
    icon: "🌐",
    span: "col-span-12 md:col-span-4",
    color: "var(--neon-green)",
    items: [
      "تصميم وإدارة الشبكات",
      "بروتوكولات الشبكات المتقدمة",
      "أمن الشبكات والجدران النارية",
    ],
    tags: ["TCP/IP", "Cisco", "VPN"],
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7,
        delay: index * 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className={`${skill.span} skill-card glass-panel glow-border`} style={{
      padding: "24px",
      cursor: "default",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 80, height: 80,
        background: `radial-gradient(circle at 100% 0%, ${skill.color}15 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: `${skill.color}18`,
          border: `1px solid ${skill.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, flexShrink: 0,
        }}>
          {skill.icon}
        </div>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e0f7f0", marginBottom: 3 }}>{skill.title}</h3>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: skill.color, opacity: 0.7 }}>
            {skill.subtitle}
          </div>
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: 7 }}>
        {skill.items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "rgba(224,247,240,0.75)" }}>
            <span style={{
              width: 5, height: 5, borderRadius: "50%",
              background: skill.color, flexShrink: 0,
              boxShadow: `0 0 6px ${skill.color}`,
            }} />
            {item}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {skill.tags.map(tag => (
          <span key={tag} style={{
            padding: "3px 9px",
            borderRadius: 4, fontSize: 11, fontFamily: "var(--font-mono)",
            background: `${skill.color}10`,
            border: `1px solid ${skill.color}25`,
            color: skill.color,
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true },
      }
    );
  }, []);

  return (
    <section id="skills" className="grid-bg" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,255,204,0.3), transparent)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="terminal-text" style={{ marginBottom: 10, fontSize: 12 }}>
            &gt; SKILLS_DATABASE :: LOADING...
          </div>
          <h2 className="section-title" style={{ marginBottom: 14 }}>
            <span className="neon-text">المهارات</span>{" "}
            <span style={{ color: "rgba(224,247,240,0.9)" }}>والخبرات</span>
          </h2>
          <div style={{ height: 2, width: 60, background: "var(--neon-green)", margin: "0 auto", borderRadius: 1, boxShadow: "0 0 10px var(--neon-green)" }} />
        </div>

        <div className="bento-grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,170,255,0.25), transparent)",
      }} />
    </section>
  );
}
