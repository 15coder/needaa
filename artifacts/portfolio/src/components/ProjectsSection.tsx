import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "shield",
    name: "تطبيق نداء شايلد",
    nameEn: "Nidaa Shield",
    category: "تطبيق أمني",
    badge: "حماية الخصوصية",
    color: "#29a8e0",
    icon: "🛡️",
    subtitle: "تطبيق أمني رائد لحماية الخصوصية وحجب المتتبعات والإعلانات",
    desc: "يعمل بشكل كامل محلياً دون إرسال أي بيانات لخوادم خارجية، مع واجهة عربية أنيقة وأوضاع حماية متعددة المستويات.",
    link: "https://t.me/nidaashield",
    linkLabel: "تحميل عبر تيلجرام",
    imagePath: "/projects/nidaa-shield.png",
    platform: "Android",
    modes: [
      { icon: "🎮", title: "وضع الألعاب", sub: "Gaming Mode" },
      { icon: "👨‍👩‍👧", title: "وضع الأسرة", sub: "Family Mode" },
      { icon: "🪖", title: "الخصوصية العسكرية", sub: "Military-Grade" },
    ],
    features: [
      "حجب كامل للإعلانات والمتتبعات",
      "عمل محلي ١٠٠٪ بدون خوادم خارجية",
      "واجهة عربية أنيقة",
      "قواعد DNS متقدمة",
      "حماية من البرامج الضارة",
    ],
  },
  {
    id: "mujahed",
    name: "تطبيق مجاهد للتجارة",
    nameEn: "Mujahed POS",
    category: "نظام نقاط بيع",
    badge: "إدارة تجارية",
    color: "#7c3aed",
    icon: "🏪",
    subtitle: "نظام أندرويد ذكي متكامل لإدارة الحسابات ونقاط البيع",
    desc: "محرك POS متكامل مع ماسح باركود كاميرا، وتسعير متعدد العملات مدعوم بمحدّث أسعار صرف نشط، وأمان عالي المستوى.",
    link: "https://t.me/mojahedapp",
    linkLabel: "تحميل عبر تيلجرام",
    imagePath: "/projects/mujahed-pos.png",
    platform: "Android",
    modes: [
      { icon: "📷", title: "ماسح الباركود", sub: "Camera Scanner" },
      { icon: "💱", title: "متعدد العملات", sub: "USD / Local" },
      { icon: "🔐", title: "تشفير + بصمة", sub: "Biometric Auth" },
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
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, delay: index * 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } }
    );
  }, [index]);

  return (
    <div ref={ref} className="card-elevated" style={{ padding: 0, overflow: "hidden", opacity: 0 }}>
      {/* Top accent */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <div style={{ padding: "36px 36px 32px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, gap: 20, flexWrap: "wrap" as any }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" as any }}>
              <span className="badge" style={{
                background: `${project.color}14`,
                borderColor: `${project.color}30`,
                color: project.color,
              }}>
                {project.badge}
              </span>
              <span className="badge badge-white">{project.platform}</span>
            </div>
            <h3 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", fontWeight: 800, color: "#f8fafc", marginBottom: 6 }}>
              {project.name}
            </h3>
            <div style={{ fontSize: 12, fontWeight: 600, color: project.color, letterSpacing: 0.5, marginBottom: 12 }}>
              {project.nameEn}
            </div>
            <p style={{ fontSize: 14, color: "rgba(203,213,225,0.7)", lineHeight: 1.75, maxWidth: 520 }}>
              {project.subtitle}
            </p>
          </div>

          {/* App icon */}
          <div style={{
            width: 80, height: 80, borderRadius: 20,
            background: `linear-gradient(135deg, ${project.color}20, rgba(13,26,46,0.8))`,
            border: `1px solid ${project.color}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 34, flexShrink: 0,
            boxShadow: `0 8px 32px ${project.color}20`,
          }}>
            {project.icon}
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: 14, color: "rgba(203,213,225,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
          {project.desc}
        </p>

        {/* Modes grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 28 }}>
          {project.modes.map(mode => (
            <div key={mode.sub} style={{
              padding: "16px 14px", borderRadius: 12, textAlign: "center",
              background: "rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{mode.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(248,250,252,0.85)", marginBottom: 4 }}>{mode.title}</div>
              <div style={{ fontSize: 10, color: "rgba(203,213,225,0.4)", fontWeight: 500 }}>{mode.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 28 }} />

        {/* Features + Image side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 28, alignItems: "start", flexWrap: "wrap" as any }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(203,213,225,0.4)", letterSpacing: 1.5, marginBottom: 14 }}>
              المميزات الرئيسية
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {project.features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: 13.5, color: "rgba(203,213,225,0.75)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div style={{ flexShrink: 0 }}>
            <div className="img-placeholder" style={{ width: 140, height: 100 }}>
              <svg width="22" height="22" fill="none" stroke="rgba(41,168,224,0.3)" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
              <span style={{ fontSize: 10, color: "rgba(203,213,225,0.25)", textAlign: "center", padding: "0 8px" }}>
                {project.imagePath}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 32 }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)`,
              boxShadow: `0 4px 20px ${project.color}30`,
              textDecoration: "none",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            {project.linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
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
    <section id="projects" style={{ padding: "100px 0", background: "var(--navy-800)" }}>
      <div className="section-container">

        <div ref={hRef} className="section-header" style={{ opacity: 0 }}>
          <div className="label-text" style={{ marginBottom: 14, textAlign: "center" }}>المشاريع المنجزة</div>
          <h2 className="heading-lg" style={{ textAlign: "center", marginBottom: 16 }}>التطبيقات المستقلة</h2>
          <div className="ornament"><div className="accent-bar" /></div>
          <p className="body-text" style={{ textAlign: "center", maxWidth: 500, margin: "20px auto 0", fontSize: 14 }}>
            تطبيقات أندرويد مطورة بالكامل ومتاحة للتحميل المباشر
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

      </div>
    </section>
  );
}
