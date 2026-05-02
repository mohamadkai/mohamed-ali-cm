const bonuses = [
  {
    n: "01",
    title: "Portfolio Builder Kit",
    desc: "قوالب تساعدك تبني Portfolio حتى لو معندكش خبرة: Case Study، Content Strategy Sample، Copywriting Sample، Brand Voice Sheet.",
    encouragement: "هتطلع من أول يوم وعندك Portfolio يخليك جاهز تنافس.",
    value: "3,500",
  },
  {
    n: "02",
    title: "Session Output System",
    desc: "Templates تحول كل سيشن لمخرج عملي: تحليل براند، Persona، Content Pillars، Hooks، Email Sequence، Portfolio Piece.",
    encouragement: "كل سيشن هتخرج منها بشغل حقيقي تقدر تعرضه وتفتخر بيه.",
    value: "2,000",
  },
  {
    n: "03",
    title: "Client Outreach & Proposal Kit",
    desc: "رسائل LinkedIn Outreach، Cold Email، DM Scripts، Proposal Structure، وأسئلة Qualify للعميل.",
    encouragement: "هتعرف تكلم العملاء وتقفل صفقات بثقة من غير لف ودوران.",
    value: "2,800",
  },
  {
    n: "04",
    title: "AI Strategist Prompt Pack",
    desc: "Prompts للبحث، تحليل الجمهور، توليد Hooks، SEO، Repurposing، وصناعة أفكار محتوى مع Human Layer.",
    encouragement: "هتخلي الـ AI يشتغل معاك مش مكانك، وتوفر ساعات شغل كل يوم.",
    value: "2,500",
  },
  {
    n: "05",
    title: "20-Minute Implementation Plan",
    desc: "خطة بسيطة بعد كل سيشن تقولك تعمل إيه في 20 دقيقة يوميًا. لو وقتك ضيق… لسه تقدر تطبق.",
    encouragement: "20 دقيقة في اليوم تكفي إنك تشوف نتيجة حقيقية على أرض الواقع.",
    value: "900",
  },
  {
 {
  n: "06",
  title: "Private Growth Session (لأول 10 أشخاص فقط)",
  desc:
    "سيشن فردية خاصة بعد المنتور شيب لمدة 40 دقيقة نراجع فيها تطورك وشغلك ونحدد لك الخطوة الجاية بناءً على مستواك .",
  encouragement:
    " هتخرج من المينتور شيب عارف أنت واقف فين وناقصك إيه والخطوة الجاية ليك .",
     value: "1500",
},
];

export function Bonuses() {
  return (
    <section id="bonuses" className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono-tech uppercase tracking-[0.3em] text-neon-lime mb-6">
            / Bonus Stack — First Cohort Only
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.6] md:leading-[1.5] text-balance max-w-[24ch] mx-auto mb-8">
           6 بونصات تساعدك تطلع <span className="text-gradient-lime-cyan">بنتيجة</span><br className="hidden md:block" /> مش مجرد حضور
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مش هتتفرّج وتنسى… كل بونص هيحط في إيدك سلاح جاهز تشتغل بيه من أول يوم وتقفل صفقات حقيقية.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bonuses.map((b) => (
            <div
              key={b.n}
              className="matte-surface rounded-2xl p-7 relative overflow-hidden group hover:border-neon-lime/40 transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_oklch(0.94_0.24_115/0.35)] duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-mono-tech text-neon-lime tracking-widest">
                  BONUS_{b.n}
                </span>
                <div className="text-left">
                  <div className="text-[10px] font-mono-tech text-muted-foreground uppercase">القيمة</div>
                  <div className="font-mono-tech font-bold text-foreground">{b.value} جنيه</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-black mb-4">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{b.desc}</p>

              <div className="pt-5 border-t border-border">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-neon-lime/80">
                  ليه ده يهمك
                </span>
                <p className="mt-1 text-foreground/90 text-sm leading-relaxed">{b.encouragement}</p>
              </div>
            </div>
          ))}

     
        </div>
      </div>
    </section>
  );
}
