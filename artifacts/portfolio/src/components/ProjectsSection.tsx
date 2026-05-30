import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "shield",
    name: "تطبيق نداء شايلد",
    nameEn: "Nidaa Shield",
    badge: "حماية الخصوصية",
    color: "#1c8ef5",
    subtitle: "تطبيق أمني رائد لحماية الخصوصية وحجب المتتبعات والإعلانات",
    desc: "يعمل بشكل كامل محلياً دون إرسال أي بيانات لخوادم خارجية، مع واجهة عربية أنيقة وأوضاع حماية متعددة المستويات.",
    link: "https://t.me/nidaashield",
    linkLabel: "تحميل عبر تيلجرام",
    platform: "Android",
    modes: [
      { icon: "🎮", title: "وضع الألعاب",         sub: "Gaming Mode" },
      { icon: "👨‍👩‍👧", title: "وضع الأسرة",           sub: "Family Mode" },
      { icon: "🪖", title: "الخصوصية العسكرية",   sub: "Military-Grade" },
    ],
    features: [
      "حجب كامل للإعلانات والمتتبعات",
      "عمل محلي ١٠٠٪ بدون خوادم خارجية",
      "واجهة عربية أنيقة وسهلة الاستخدام",
      "قواعد DNS متقدمة",
      "حماية من البرامج الضارة",
    ],
  },
  {
    id: "mujahed",
    name: "تطبيق مجاهد للتجارة",
    nameEn: "Mujahed POS",
    badge: "إدارة تجارية",
    color: "#6450f0",
    subtitle: "نظام أندرويد ذكي متكامل لإدارة الحسابات ونقاط البيع",
    desc: "محرك POS متكامل مع ماسح باركود كاميرا، وتسعير متعدد العملات مدعوم بمحدّث أسعار صرف نشط وأمان عالي المستوى.",
    link: "https://t.me/mojahedapp",
    linkLabel: "تحميل عبر تيلجرام",
    platform: "Android",
    modes: [
      { icon: "📷", title: "ماسح الباركود",    sub: "Camera Scanner" },
      { icon: "💱", title: "متعدد العملات",     sub: "USD / Local" },
      { icon: "🔐", title: "تشفير + بصمة",      sub: "Biometric Auth" },
    ],
    features: [
      "محرك POS متقدم مع باركود كاميرا",
      "تسعير محلي وبالدولار مع محدّث سعر الصرف",
      "قاعدة بيانات مشفرة + PIN مخصص",
      "مفاتيح أمان رئيسية + بصمة الإصبع",
      "فواتير مائية قانونية موقعة",
    ],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity: 0, y: 48 },
      {
        opacity: 1, y: 0, duration: 0.8, delay: index * 0.14,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 89%", once: true },
      }
    );
  }, [index]);

  return (
    <div ref={ref} className="glass-elevated" style={{ padding: 0, overflow: "hidden", opacity: 0 }}>
      {/* Accent stripe */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${project.color}, transparent)`,
      }} />

      <div style={{ padding: "32px 32px 28px" }}>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 24, flexWrap: "wrap" as any }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" as any }}>
              <span className="chip" style={{
                background: `${project.color}14`,
                borderColor: `${project.color}30`,
                color: project.color,
              }}>
                {project.badge}
              </span>
              <span className="chip chip-neutral">{project.platform}</span>
            </div>
            <h3 className="text-title" style={{ marginBottom: 4 }}>{project.name}</h3>
            <div style={{ fontSize: 12, color: project.color, fontWeight: 700, letterSpacing: 0.5 }}>
              {project.nameEn}
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-body" style={{ marginBottom: 8, fontSize: 14, fontWeight: 600, color: "var(--text-secondary)" }}>
          {project.subtitle}
        </p>
        <p className="text-body" style={{ marginBottom: 28, fontSize: 13 }}>
          {project.desc}
        </p>

        {/* Modes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 28 }}>
          {project.modes.map(m => (
            <div key={m.sub} className="glass-inset" style={{ padding: "14px 12px", textAlign: "center", borderRadius: "var(--radius-md)" }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{m.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)", marginBottom: 3 }}>{m.title}</div>
              <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontWeight: 600 }}>{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="sep" style={{ marginBottom: 24 }} />

        {/* Features */}
        <div style={{ marginBottom: 28 }}>
          <div className="text-caption" style={{ marginBottom: 14 }}>المميزات الرئيسية</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {project.features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-filled"
          style={{
            background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}bb 100%)`,
            boxShadow: `0 4px 20px ${project.color}30, inset 0 1px 0 rgba(255,255,255,0.2)`,
            textDecoration: "none",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          {project.linkLabel}
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
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 0.75, ease: "power2.out",
        scrollTrigger: { trigger: hRef.current, start: "top 86%", once: true },
      }
    );
  }, []);

  return (
    <section id="projects" style={{
      padding: "100px 0",
      background: "var(--bg-base)",
    }}>
      <div className="container">

        <div ref={hRef} style={{ textAlign: "center", marginBottom: 56, opacity: 0 }}>
          <span className="chip" style={{ marginBottom: 18, display: "inline-flex" }}>المشاريع المنجزة</span>
          <h2 className="text-title" style={{ marginBottom: 14 }}>التطبيقات المستقلة</h2>
          <div style={{
            width: 36, height: 3, borderRadius: 2, margin: "0 auto",
            background: "linear-gradient(90deg, #6450f0, var(--accent))",
          }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
