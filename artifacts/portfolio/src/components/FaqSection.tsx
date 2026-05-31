export default function FaqSection() {
  const faqs = [
    {
      q: "من هو نداء الرحمن محمد عبود؟",
      a: "نداء الرحمن محمد عبود مطور برمجيات متكامل (Full Stack Developer) وخبير أمن سيبراني وتحليل جنائي رقمي من سوريا. يعمل في شركة Fixed للبرمجيات ومطوّر تطبيقات نداء شايلد ومجاهد للتجارة وR Fast وتاجر برو.",
    },
    {
      q: "ما مهنة نداء الرحمن؟",
      a: "يعمل نداء الرحمن كمطور Flutter وNode.js وReact Native، ومتخصص في أمن المعلومات والتحليل الجنائي الرقمي وأدوات فك الأقفال الرقمية مثل Cellebrite وOxygen Forensic وFRP Bypass.",
    },
    {
      q: "ما هي تطبيقات نداء الرحمن عبود؟",
      a: "طوّر نداء الرحمن عدة تطبيقات ناجحة: نداء شايلد (Nidaa Shield) لحماية الخصوصية، مجاهد للتجارة (Mojahiiid) للتجارة الإلكترونية، R Fast لإدارة العمليات، وتاجر برو (Tajer-Pro).",
    },
    {
      q: "كيف أتواصل مع نداء الرحمن عبود؟",
      a: "يمكن التواصل مع نداء الرحمن عبود عبر البريد الإلكتروني needaaalrahman00101@gmail.com أو عبر تيليغرام @nidaashield أو @mojahedapp.",
    },
  ];

  return (
    /* نقطة 7: section دلالي بـ aria-label */
    <section
      id="faq"
      aria-label="أسئلة شائعة عن نداء الرحمن عبود"
      style={{ padding: "60px 0 40px" }}
    >
      <style>{`
        .faq-wrap { max-width: 680px; margin: 0 auto; padding: 0 20px; }
        .faq-title {
          font-size: clamp(1.25rem, 4vw, 1.6rem);
          font-weight: 800;
          margin-bottom: 28px;
          text-align: center;
          color: var(--tx1);
        }
        .faq-article {
          border-radius: 18px;
          margin-bottom: 14px;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .faq-article:hover { transform: translateY(-2px); }
        .faq-q {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 18px 20px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          color: var(--tx1);
          text-align: right;
          list-style: none;
        }
        .faq-q::-webkit-details-marker { display: none; }
        .faq-chevron {
          width: 20px; height: 20px; flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          color: var(--blue);
        }
        details[open] .faq-chevron { transform: rotate(180deg); }
        .faq-a {
          padding: 0 20px 18px;
          font-size: 14px;
          color: var(--tx2);
          line-height: 1.75;
          margin: 0;
        }
      `}</style>

      <div className="faq-wrap reveal">
        <h2 className="faq-title">أسئلة شائعة عن نداء الرحمن عبود</h2>

        {/* نقطة 7: كل سؤال داخل article دلالي */}
        {faqs.map((item, i) => (
          <article key={i} className="card faq-article">
            <details>
              <summary className="faq-q">
                <span>{item.q}</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="faq-a">{item.a}</p>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
