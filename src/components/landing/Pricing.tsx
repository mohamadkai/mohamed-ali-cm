const stack = [
  { label: "Live Mentorship — 14 Sessions", value: "8,000" },
  { label: "56+ ساعة تعلم وتطبيق", value: "5,000" },
  { label: "Assignment Review + Feedback", value: "3,000" },
  { label: "Live Workshops على Briefs حقيقية", value: "2,500" },
  { label: "Portfolio Direction", value: "3,000" },
  { label: "Career & Freelancing Phase", value: "2,500" },
  { label: "Portfolio Builder Kit", value: "3,500" },
  { label: "Session Output System", value: "2,000" },
  { label: "Client Outreach & Proposal Kit", value: "2,800" },
  { label: "AI Strategist Prompt Pack", value: "2,500" },
  { label: "20-Minute Implementation Plan", value: "900" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono-tech uppercase tracking-[0.3em] text-neon-lime mb-6">
            / Value Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-balance max-w-[20ch] mx-auto">
            القيمة الكاملة اللي <span className="text-gradient-lime-cyan">هتحصل عليها</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            أنت مش بتدفع في معلومات بس… أنت بتدخل تدريب عملي، Feedback، ومخرجات تساعدك تعرض نفسك في السوق بثقة.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Stack */}
          <div className="lg:col-span-3 matte-surface rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-muted-foreground">
                العنصر
              </span>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-muted-foreground">
                القيمة
              </span>
            </div>
            <ul className="divide-y divide-border">
              {stack.map((s) => (
                <li key={s.label} className="flex items-center justify-between py-3.5 gap-4">
                  <span className="text-foreground/90 text-sm md:text-base">{s.label}</span>
                  <span className="font-mono-tech text-foreground/70 text-sm shrink-0">
                    {s.value} جنيه
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
              <span className="font-black text-lg">Total Value</span>
              <span className="font-mono-tech font-black text-xl md:text-2xl">35,700 جنيه</span>
            </div>
          </div>

          {/* Price card */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="matte-surface rounded-2xl p-8 md:p-10 relative overflow-hidden border-neon-lime/40 glow-lime">
              <div className="absolute inset-0 bg-gradient-to-bl from-neon-lime/10 to-neon-cyan/5 pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-lime/10 border border-neon-lime/30 mb-6">
                  <div className="size-1.5 rounded-full bg-neon-lime animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neon-lime">
                    First 10 Seats Only
                  </span>
                </div>

                <div className="mb-8">
                  <div className="text-sm text-muted-foreground mb-1 line-through font-mono-tech">
                    35,700 جنيه
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-black font-mono-tech shimmer-text">
                      2,999
                    </span>
                    <span className="text-lg font-bold text-foreground">EGP</span>
                  </div>
                  <p className="text-sm text-foreground font-bold mt-4 leading-relaxed">
                    فقط لأول 10 أشخاص
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    بعد اكتمال أول 10 أماكن، السعر قابل للتغيير. قرارك بدري بيثبّتلك السعر الحالي ويبدألك التطبيق العملي فورًا.
                  </p>
                </div>

                <a
                  href="https://wa.me/201090196974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-5 bg-neon-lime text-background font-black text-lg rounded-sm cta-bounce animate-pulse-glow mb-3"
                >
                  ابدأ دلوقتي قبل ما مكانك يروح لحد تاني
                </a>
                <a
                  href="https://wa.me/201090196974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 border border-border hover:bg-surface text-foreground font-bold text-sm rounded-sm transition-colors"
                >
                  تقدر تبدأ دلوقتي وتدفع على دفعتين (1500 + 1499)
                </a>

                <ul className="mt-8 space-y-3 text-sm">
                  {[
                    "14 سيشن لايف + Feedback مباشر",
                    "تطبيق عملي على مشاريع وBriefs حقيقية",
                    "Portfolio Pieces جاهزة للعرض",
                    "تأهيل لسوق العمل داخل مصر وبرا مصر",
                    "5 بونصات بقيمة 11,700 جنيه",
                    "أول 10 أشخاص فقط بالسعر الحالي",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-foreground/90">
                      <span className="text-neon-lime shrink-0 mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
