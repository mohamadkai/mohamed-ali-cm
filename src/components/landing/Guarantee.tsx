import { ShieldCheck, HeartHandshake, Sparkles, Lock, type LucideIcon } from "lucide-react";

type PromiseItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const promises: PromiseItem[] = [
  {
    icon: ShieldCheck,
    title: "ضمان الحضور والمتابعة",
    desc: "لو حضرت أول 3 سيشن وحسيت إن البرنامج مش بيضيفلك حاجة، كلمنا وهنرجعلك فلوسك كاملة من غير أي أسئلة.",
  },
  {
    icon: HeartHandshake,
    title: "مش لوحدك في الرحلة",
    desc: "Feedback شخصي على شغلك، ومجموعة دعم مباشرة مع المنتور — مش هتبقى رقم في كورس جاهز.",
  },
  {
    icon: Sparkles,
    title: "نتيجة حقيقية أو مفيش",
    desc: "في نهاية البرنامج هيبقى عندك Portfolio Pieces جاهزة للعرض على عملاء فعليين، مش مجرد شهادة.",
  },
  {
    icon: Lock,
    title: "سعر أول 10 أشخاص محفوظ ليك",
    desc: "السعر 2999 فقط لأول 10 أشخاص. لما تحجز ضمن أول 10، أنت مأمّن السعر الحالي حتى لو السعر اتغير بعد كده.",
  },
];

export function Guarantee() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-lime/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-6 inline-block font-mono-tech text-xs uppercase tracking-[0.3em] text-neon-lime">
            / Our Promise to You
          </span>

          <h2 className="mb-6 text-balance text-4xl font-black leading-[1.1] md:text-6xl">
            قرارك معانا <span className="text-gradient-lime-cyan">مضمون 100%</span>
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            ادخل البرنامج وأنت مطمّن: فيه متابعة، Feedback، ومخرجات واضحة تثبت إنك ماشي صح من أول
            أسبوع.
          </p>
        </div>

        <div className="mb-14 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-neon-lime/20 blur-3xl" />

            <div className="glow-lime relative flex size-32 items-center justify-center rounded-full border-2 border-neon-lime/50 bg-surface md:size-40">
              <ShieldCheck className="size-16 text-neon-lime md:size-20" strokeWidth={1.5} />

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-neon-lime px-4 py-1 text-[10px] font-black uppercase tracking-widest text-background">
                Risk-Free
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 md:gap-6">
          {promises.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="matte-surface group rounded-2xl border border-border p-6 transition-colors hover:border-neon-lime/40 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-neon-lime/30 bg-neon-lime/10 transition-colors group-hover:bg-neon-lime/20">
                    <Icon className="size-5 text-neon-lime" />
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-black leading-tight md:text-xl">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="matte-surface relative rounded-2xl border-r-2 border-neon-lime p-6 md:p-8">
            <div className="absolute right-4 top-4 select-none text-6xl font-black leading-none text-neon-lime/20">
              ”
            </div>

            <p className="relative mb-4 text-base leading-relaxed text-foreground/90 md:text-lg">
              &quot;أنا مش بقدّملك كورس
              أنا بقدّملك وعد لو مشيت معايا بجد في الـ 14 سيشن خلال تلت شهور ، هتخرج منهم ببورتفوليو يثبت للسوق إنك جاهز
وتعرف تعرض نفسك بثقة على أي عميل أو شركة 
               ولو مش هيحصل ده، أنا هرجعلك فلوسك.&quot;
            </p>

            <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
              <div className="size-10 rounded-full bg-gradient-to-br from-neon-lime to-neon-cyan" />

              <div>
                <div className="text-sm font-black">محمد علي</div>
                <div className="font-mono-tech text-xs text-muted-foreground">Program Mentor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
