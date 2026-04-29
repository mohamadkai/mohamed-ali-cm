const rows = [
  ["بتكتب بوستات وخلاص", "بتفكر كـ Strategist"],
  ["بتتعلم من مصادر كتير ومش عارف ترتبها", "عندك Roadmap واضحة من 14 سيشن"],
  ["بتخاف من كلمة Strategy", "بتعرف تبني Strategy من Goal لحد KPIs"],
  ["مش عارف تعمل Portfolio", "عندك Portfolio Pieces مبنية على مشاريع حقيقية"],
  ["بتستخدم AI بعشوائية", "بتستخدم AI كأداة بحث وتفكير وتنفيذ"],
  ["بتخاف تسعّر أو تكلم عميل", "فاهم Pricing و Outreach و Proposal"],
  ["بتقيس نجاح المحتوى باللايكات", "بتفهم Awareness / Engagement / Conversion"],
  ["حاسس إن السوق بعيد عنك", "فاهم تدخل السوق بإيه وتعرض نفسك إزاي"],
];

export function Transformation() {
  return (
    <section className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono-tech uppercase tracking-[0.3em] text-neon-cyan mb-6">
            / Before — After
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-balance max-w-[20ch] mx-auto">
            التحول الحقيقي <span className="text-gradient-lime-cyan">بعد البرنامج</span>
          </h2>
        </div>

        <div className="matte-surface rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 text-center font-mono-tech text-xs uppercase tracking-widest border-b border-border">
            <div className="p-5 text-neon-lime bg-neon-lime/5">After</div>
            <div className="p-5 text-destructive/80 bg-destructive/5">Before</div>
          </div>

          {rows.map(([before, after], i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-border last:border-b-0 hover:bg-surface/50 transition-colors"
            >
              <div className="p-5 md:p-6 text-foreground text-sm md:text-base flex items-center gap-3 font-medium border-l border-border">
                <span className="text-neon-lime font-mono-tech text-xs">→</span>
                <span>{after}</span>
              </div>
              <div className="p-5 md:p-6 text-muted-foreground text-sm md:text-base flex items-center gap-3">
                <span className="text-destructive/60 font-mono-tech text-xs">✗</span>
                <span>{before}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
