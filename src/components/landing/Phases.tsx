const phases = [
  {
    code: "PHASE_01",
    title: "Mindset & Foundations",
    subtitle: "قبل ما تكتب حرف… لازم تفكر صح",
    items: [
      "Marketing Ecosystem",
      "Value Exchange",
      "Customer Transformation",
      "TOFU / MOFU / BOFU",
      "Jobs To Be Done",
      "Reactive vs Intentional Marketing",
    ],
    transform: "من شخص بيكتب لما يطلبوا منه، لشخص فاهم هو بيكتب ليه، ولمين، وإيه الهدف.",
  },
  {
    code: "PHASE_02",
    title: "The Craft of Writing",
    subtitle: "الكتابة مش موهبة بس… الكتابة قرار تسويقي",
    items: [
      "Psychology of Persuasion",
      "Copywriting Frameworks",
      "Hooks that Stop Scroll",
      "Social Media Writing",
      "Long-Form & SEO Writing",
      "Brand Voice & Storytelling",
    ],
    transform: 'من "بكتب كلام حلو" إلى "بكتب كلام بيحرّك قرار".',
  },
  {
    code: "PHASE_03",
    title: "Advanced Strategies",
    subtitle: "من كاتب محتوى إلى Growth Driver",
    items: [
      "Email Marketing & Lead Magnets",
      "Welcome Sequence",
      "AI Tools & Advanced Prompting",
      "Analytics & Content Audit",
      "Data-Driven Decisions",
      "Multi-Format Content",
    ],
    transform: "من شخص بينفذ Tasks، لشخص يقدر يربط المحتوى بالنتائج.",
  },
  {
    code: "PHASE_04",
    title: "Business & Career",
    subtitle: "حوّل المهارة لمسار حقيقي",
    items: [
      "Portfolio من الصفر",
      "Pricing (Hourly / Project / Retainer)",
      "Cold Email & LinkedIn Outreach",
      "Client Qualification",
      "Professional Proposal",
      "Personal Brand & 90-Day Plan",
    ],
    transform: "من شخص عنده معلومات، لشخص عنده اتجاه، عرض، Portfolio، وخطة يتحرك بيها.",
  },
];

export function Phases() {
  return (
    <section id="phases" className="relative border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="inline-block text-xs font-mono-tech uppercase tracking-[0.3em] text-neon-lime mb-6">
              / Program Architecture
            </span>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-balance max-w-[16ch]">
              هيكل البرنامج — <span className="text-gradient-lime-cyan">4 مراحل تحول</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            كل سيشن مبنية على 4 أجزاء: Review للواجب، شرح بأمثلة، Live Workshop، وAssignment جديد.
            التطبيق هنا على Briefs ومشاريع حقيقية تحاكي شغل السوق — مش تمرين نظري وخلاص.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {phases.map((p, i) => (
            <div
              key={p.code}
              className="matte-surface rounded-2xl p-8 md:p-10 group hover:border-neon-lime/40 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-l from-neon-lime to-neon-cyan transition-all duration-500" />

              <div className="flex items-start justify-between mb-8">
                <span className="text-xs font-mono-tech text-neon-lime tracking-widest">
                  {p.code}
                </span>
                <span className="text-5xl font-black font-mono-tech text-foreground/5 group-hover:text-neon-lime/20 transition-colors">
                  0{i + 1}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-3">{p.title}</h3>
              <p className="text-muted-foreground mb-8 text-sm md:text-base">{p.subtitle}</p>

              <ul className="space-y-2.5 mb-8">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base">
                    <div className="size-1 rounded-full bg-neon-lime shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-neon-cyan">
                  Transformation
                </span>
                <p className="mt-2 text-foreground/90 leading-relaxed text-sm md:text-base">
                  {p.transform}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
