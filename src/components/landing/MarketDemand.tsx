const marketCards = [
  {
    n: "01",
    title: "السوق مش بيدور على حافظ مصطلحات",
    desc: "الشركات والبراندات عايزة شخص يعرف يفهم الهدف، يحلل الجمهور، يكتب رسالة واضحة، ويحوّل المحتوى والإعلانات لنتيجة قابلة للقياس.",
  },
  {
    n: "02",
    title: "الطلب داخل مصر بيكبر",
    desc: "وكالات، عيادات، أكاديميات، ستارتابس، ومتاجر أونلاين محتاجة Content Writers وSocial Media Marketers وDigital Marketers يعرفوا يشتغلوا بوعي مش تنفيذ عشوائي.",
  },
  {
    n: "03",
    title: "ونفس المهارة مطلوبة برا مصر",
    desc: "الشغل الريموت والفريلانس بيعتمد على نفس الأساسيات: فهم العميل، كتابة مقنعة، Strategy، تحليل أداء، واستخدام AI بشكل ذكي يسرّع التنفيذ.",
  },
  {
    n: "04",
    title: "الفرق في التطبيق العملي",
    desc: "البرنامج مش بيجهزك تعرف تتكلم عن التسويق… بيجهزك تعرض شغل حقيقي: Briefs، Content Strategy، Copy Samples، Portfolio Pieces، وFeedback مباشر.",
  },
];

export function MarketDemand() {
  return (
    <section className="relative border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-neon-lime/5" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-14">
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-mono-tech uppercase tracking-[0.3em] text-neon-cyan mb-6">
              / Market Readiness
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.6] md:leading-[1.5] text-balance">
              المهارة دي مطلوبة… بس السوق بيختار <span className="text-gradient-lime-cyan">اللي يعرف ينفذ</span>.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-loose">
            <p>
              الطلب على Digital Marketing وContent Writing عالي داخل مصر وبرا مصر،
              لكن المنافسة مبقتش على اللي اتفرج على كورسات أكتر.
            </p>
            <p className="text-foreground font-medium">
              المنافسة الحقيقية على شخص عنده طريقة تفكير، شغل يقدر يعرضه، وثقة إنه يدخل مقابلة أو يكلم عميل وهو فاهم هيقدّم إيه.
            </p>
            <p>
              عشان كده البرنامج مبني على تدريب عملي ومخرجات قابلة للعرض، مش مجرد معلومات تتحط في نوتس وتتنسي.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketCards.map((card) => (
            <div
              key={card.n}
              className="matte-surface rounded-2xl p-7 hover:border-neon-cyan/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="font-mono-tech text-sm text-neon-cyan mb-5">
                MARKET_{card.n}
              </div>
              <h3 className="text-xl font-black mb-4 leading-relaxed">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-loose">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 matte-surface rounded-2xl p-7 md:p-9 border-r-4 border-r-neon-lime">
          <p className="text-xl md:text-2xl font-bold leading-relaxed text-balance">
            كل شهر بتأجّل فيه التطبيق العملي، حد تاني بيبني Portfolio وبيتعلم يتكلم بلغة السوق.
            <span className="text-gradient-lime-cyan"> البرنامج ده معمول علشان يختصر عليك الفجوة دي.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
