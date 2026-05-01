import { useState } from "react";

const faqs = [
  {
    q: "هل البرنامج مناسب للمبتدئين؟",
    a: "أيوه، لو أنت مبتدئ جاد. البرنامج بيبدأ من Mindset & Foundations، يعني قبل ما نطلب منك تكتب، هنعلّمك تفكر كـ Marketer.",
  },
  {
    q: "هل هو كورس مسجل؟",
    a: "لا. ده Live Mentorship. حضور مباشر، تطبيق، واجبات، Review، وFeedback. مش فيديوهات هتتساب في فولدر.",
  },
  {
    q: "هل التطبيق على مشاريع حقيقية؟",
    a: "أيوه. البرنامج مبني على Briefs ومهام عملية تحاكي شغل السوق، بحيث كل سيشن تخرج منها بمخرج ينفع يتحط في Portfolio أو يتحول لنموذج شغل تعرضه.",
  },
  {
    q: "هل البرنامج يؤهلني لسوق العمل؟",
    a: "المينتور شيب دا مش مجرد محاضرات لأنك خلال 3 شهور هتشتغل على مشاريع حقيقية في Strategy و Copywriting و AI و هتخرج ببورتفوليو يقول للسوق إنك جاهز وتكون مؤهل تشتغل في أي شركة أو حتى فريلانس",
  },
  {
    q: "هل هطلع بـ Portfolio؟",
    a: "البرنامج مصمم إنك تطلع بـ Portfolio Ready Direction، ومع البونصات هتاخد Templates تساعدك تبني نماذج فعلية حتى لو معندكش خبرة.",
  },
  {
    q: "أنا بكتب محتوى بالفعل، هل هستفيد؟",
    a: "لو بتكتب بس حاسس إنك مش فاهم Strategy، أو مش بتربط المحتوى بهدف بيزنس، فأنت من أكتر الناس اللي البرنامج مناسب لهم.",
  },
  {
    q: "هل البرنامج عملي ولا نظري؟",
    a: "كل سيشن مبنية على 4 أجزاء: Review للواجب، شرح بأمثلة، Live Workshop، وAssignment جديد. التطبيق جزء من التصميم، ومبني على مشاريع وتمارين قريبة من شغل السوق.",
  },
  {
    q: "معنديش وقت كبير، أقدر ألتزم؟",
    a: "لو عندك وقت للحضور + 20 دقيقة يوميًا للتطبيق، تقدر تمشي. المهم تدخل بنية التطبيق، مش الفرجة.",
  },
  {
    q: "هل هتعلّمونا AI؟",
    a: "أيوه. في Phase كامل عن AI Tools، لكن الهدف مش إنك تنسخ. الهدف إنك تستخدمه كأداة تفكير وتسريع مع Human Layer.",
  },
  {
    q: "هل السعر 2999 ثابت؟",
    a: "لا. السعر 2999 فقط لأول 10 أشخاص. بعد اكتمال أول 10 أماكن، السعر قابل للتغيير حسب الدفعات القادمة وحجم الدعم والنتائج.",
  },
  {
    q: "هل أقدر أدفع على دفعتين؟",
    a: "اطمن… مش لازم تدفع كل حاجة مرة واحدة. تقدر تأمّن مكانك دلوقتي بـ 1500 جنيه بس، وتكمل الـ 1499 الباقية مع بداية الشهر الجديد. خطوة صغيرة دلوقتي تفتحلك باب التحوّل من غير ما تحس بأي ضغط مادي.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono-tech uppercase tracking-[0.3em] text-neon-cyan mb-6">
            / FAQ
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-balance">
            أسئلة الناس بتسألها
          </h2>
        </div>

        <div className="matte-surface rounded-2xl divide-y divide-border overflow-hidden">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-right p-6 md:p-7 hover:bg-surface/50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-bold text-base md:text-lg text-foreground group-hover:text-neon-lime transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 size-8 rounded-full border border-border flex items-center justify-center font-mono-tech text-sm transition-all ${
                      isOpen ? "bg-neon-lime text-background border-neon-lime rotate-45" : "text-neon-lime"
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-loose text-sm md:text-base">{f.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
