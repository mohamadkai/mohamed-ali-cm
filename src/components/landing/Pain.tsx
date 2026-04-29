const symptoms = [
  { n: "01", t: "بتفتح صفحة فاضية ومش عارف تبدأ منين" },
  { n: "02", t: "العميل يطلب أفكار، دماغك قفلت" },
  { n: "03", t: "المدير يقول Strategy وأنت مش فاهم الفرق" },
  { n: "04", t: "بتسمع ناس بتتكلم بثقة وبتسأل نفسك: هو أنا فاهم؟" },
  { n: "05", t: "بتتعلم كتير، لكن مفيش نظام" },
  { n: "06", t: "بتكتب كتير، لكن مفيش نتيجة واضحة" },
  { n: "07", t: "عايز تدخل المجال، لكن مفيش Portfolio" },
  { n: "08", t: "بتستخدم AI، وجواك خوف إنك نسخة من أي حد" },
];

export function Pain() {
  return (
    <section className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-mono-tech uppercase tracking-[0.3em] text-destructive mb-6">
              / The Real Pain
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.6] md:leading-[1.5] text-balance">
              الوجع الحقيقي مش إنك <span className="text-destructive">مبتدئ</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-loose">
            <p>
              أنت غالبًا مش واقف مكانك علشان مش بتتعب. أنت بتتفرج على فيديوهات، بتحفظ مصطلحات،
              بتسمع عن Funnel وPersona وCopywriting وAI وStrategy.
            </p>
            <p>
              بس لما تيجي تشتغل فعلًا… بتحس إن كل حاجة بتتبخر.
            </p>
            <p className="text-foreground font-medium">
              الوجع الحقيقي إنك حاسس إنك بتتحرك… بس مش بتوصل.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {symptoms.map((s) => (
            <div key={s.n} className="bg-background p-6 md:p-8 hover:bg-surface transition-colors group">
              <div className="font-mono-tech text-sm text-destructive/80 mb-4 group-hover:text-neon-lime transition-colors">
                {s.n}
              </div>
              <p className="text-foreground/90 leading-relaxed">{s.t}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 md:p-12 matte-surface rounded-2xl border-r-4 border-r-neon-lime text-center">
          <p className="text-xl md:text-3xl font-bold leading-relaxed text-balance">
            وده بالضبط السبب اللي اتعمل عشانه <span className="text-gradient-lime-cyan">البرنامج</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
