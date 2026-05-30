import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "shield",
    name: "تطبيق نداء شايلد",
    nameEn: "Nidaa Shield",
    subtitle: "تطبيق أمني رائد لحماية الخصوصية وحجب المتتبعات والإعلانات",
    description: "يعمل بشكل كامل محلياً دون إرسال أي بيانات لخوادم خارجية. يتميز بأوضاع أمان متعددة وعالية المستوى.",
    badge: "حماية الخصوصية",
    badgeEn: "Privacy Guard",
    color: "#00ffcc",
    accentColor: "rgba(0,255,204,0.12)",
    link: "https://t.me/nidaashield",
    linkLabel: "تحميل التطبيق عبر تيلجرام",
    version: "v2.1",
    platform: "Android",
    modes: [
      { icon: "🎮", label: "وضع الألعاب", desc: "Gaming Mode" },
      { icon: "👨‍👩‍👧", label: "وضع الأسرة", desc: "Family Mode" },
      { icon: "🪖", label: "وضع الخصوصية العسكرية", desc: "Military-Grade Privacy" },
    ],
    specs: [
      "حجب كامل للإعلانات والمتتبعات",
      "عمل محلي 100% بدون خوادم خارجية",
      "واجهة عربية أنيقة وسهلة الاستخدام",
      "قواعد DNS متقدمة",
      "حماية من البرامج الضارة والتجسس",
    ],
    imagePlaceholder: "public/projects/nidaa-shield.png",
  },
  {
    id: "mujahed",
    name: "تطبيق مجاهد للتجارة",
    nameEn: "Mujahed POS",
    subtitle: "نظام أندرويد ذكي متكامل لإدارة الحسابات ونقاط البيع",
    description: "نظام POS متكامل ومتقدم مع ماسح باركود كاميرا، وتسعير متعدد العملات مع محدّث أسعار الصرف.",
    badge: "نقاط البيع",
    badgeEn: "POS System",
    color: "var(--neon-blue)",
    accentColor: "rgba(0,170,255,0.12)",
    link: "https://t.me/mojahedapp",
    linkLabel: "تحميل التطبيق عبر تيلجرام",
    version: "v3.5",
    platform: "Android",
    modes: [
      { icon: "📷", label: "ماسح باركود بالكاميرا", desc: "Camera Barcode Scan" },
      { icon: "💱", label: "تسعير متعدد العملات", desc: "Multi-Currency (USD/Local)" },
      { icon: "🔐", label: "تشفير + بصمة إصبع", desc: "Encrypted + Biometric Auth" },
    ],
    specs: [
      "محرك POS متقدم مع باركود الكاميرا",
      "تسعير محلي و USD مع محدث سعر الصرف",
      "قاعدة بيانات مشفرة + PIN مخصص",
      "مفاتيح أمان رئيسية + بصمة الإصبع",
      "فواتير مائية قانونية موقعة من المطور",
    ],
    imagePlaceholder: "public/projects/mujahed-pos.png",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current,
      { opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.96 },
      {
        opacity: 1, x: 0, scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 85%", once: true },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="project-card glass-panel glow-border"
      style={{ padding: 0, overflow: "hidden" }}
    >
      <div style={{
        padding: "28px 28px 0",
        borderBottom: `1px solid rgba(0,0,0,0)`,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{
                padding: "4px 12px", borderRadius: 4, fontSize: 11,
                fontFamily: "var(--font-mono)",
                background: `${project.color === "var(--neon-blue)" ? "rgba(0,170,255," : "rgba(0,255,204,"}0.1)`,
                border: `1px solid ${project.color === "var(--neon-blue)" ? "rgba(0,170,255,0.25)" : "rgba(0,255,204,0.25)"}`,
                color: project.color,
              }}>
                {project.badge}
              </span>
              <span style={{ color: "rgba(200,230,220,0.4)", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                {project.platform} • {project.version}
              </span>
            </div>
            <h3 style={{ fontSize: "clamp(1.3rem, 3vw, 1.7rem)", fontWeight: 800, color: "#e0f7f0", marginBottom: 6 }}>
              {project.name}
            </h3>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: project.color, opacity: 0.6, marginBottom: 10 }}>
              {project.nameEn}
            </div>
            <p style={{ fontSize: 14, color: "rgba(200,230,220,0.7)", lineHeight: 1.7 }}>
              {project.subtitle}
            </p>
          </div>

          <div style={{
            width: 80, height: 80, borderRadius: 16,
            background: `linear-gradient(135deg, ${project.accentColor}, rgba(0,0,0,0.4))`,
            border: `1px solid ${project.color === "var(--neon-blue)" ? "rgba(0,170,255,0.25)" : "rgba(0,255,204,0.25)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, fontSize: 32,
            boxShadow: `0 0 20px ${project.accentColor}`,
          }}>
            {project.id === "shield" ? "🛡️" : "🏪"}
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 10, marginBottom: 20,
        }}>
          {project.modes.map((mode) => (
            <div key={mode.desc} style={{
              padding: "12px 14px",
              borderRadius: 8,
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: 18, marginBottom: 6 }}>{mode.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(224,247,240,0.85)", marginBottom: 3 }}>
                {mode.label}
              </div>
              <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "rgba(200,230,220,0.4)" }}>
                {mode.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 28px 28px" }}>
        <div style={{ margin: "20px 0", height: 1, background: "rgba(255,255,255,0.05)" }} />

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div className="terminal-text" style={{ marginBottom: 12, fontSize: 11 }}>
              FEATURES_LIST
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {project.specs.map((spec, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "rgba(200,230,220,0.75)" }}>
                  <span style={{
                    marginTop: 5, width: 4, height: 4, borderRadius: "50%",
                    background: project.color, flexShrink: 0,
                    boxShadow: `0 0 5px ${project.color}`,
                  }} />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 10, minWidth: 180 }}>
            <div style={{
              padding: "10px 14px",
              borderRadius: 8,
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div className="terminal-text" style={{ fontSize: 10, marginBottom: 6, opacity: 0.5 }}>PROJECT_IMAGE_PLACEHOLDER</div>
              <div style={{
                height: 70, borderRadius: 6,
                background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))",
                border: "1px dashed rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: 4,
              }}>
                <svg width="20" height="20" fill="none" stroke="rgba(200,230,220,0.2)" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                <span style={{ fontSize: 10, color: "rgba(200,230,220,0.25)", fontFamily: "var(--font-mono)" }}>
                  {project.imagePlaceholder}
                </span>
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`cyber-btn ${project.color === "var(--neon-blue)" ? "cyber-btn-blue" : ""}`}
              style={{ justifyContent: "center", textDecoration: "none" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              {project.linkLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true },
      }
    );
  }, []);

  return (
    <section id="projects" style={{ padding: "100px 0", position: "relative", background: "var(--cyber-dark)" }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(0,255,204,0.03) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0,170,255,0.025) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="terminal-text" style={{ marginBottom: 10, fontSize: 12 }}>
            &gt; PROJECTS_ARCHIVE :: 2 ENTRIES FOUND
          </div>
          <h2 className="section-title" style={{ marginBottom: 14 }}>
            <span style={{ color: "rgba(224,247,240,0.9)" }}>المشاريع</span>{" "}
            <span className="neon-text">المتقدمة</span>
          </h2>
          <div style={{ height: 2, width: 60, background: "var(--neon-green)", margin: "0 auto", borderRadius: 1, boxShadow: "0 0 10px var(--neon-green)" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
