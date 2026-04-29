const bullets = [
  "تطبق على Briefs ومشاريع حقيقية تحاكي شغل العملاء",
  "تفكر كـ Marketer مش كـ Creator بيجري ورا الترند",
  "تفهم جمهورك وتطلع منه أفكار محتوى حقيقية",
  "تكتب Copy يخدم هدف واضح مش كلام لطيف",
  "تبني Content Strategy كاملة من Goal لحد KPIs",
  "تستخدم AI كأداة تفكير مش كناسخ بوستات",
  "تقيس أداء المحتوى وتعرف إيه اللي شغال",
  "تجهز Portfolio وخطة Career تدخل بيهم سوق العمل",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden grid-bg">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-[500px] rounded-full bg-neon-cyan/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 -right-40 size-[500px] rounded-full bg-neon-lime/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neon-lime/30 bg-neon-lime/5">
              <div className="size-1.5 rounded-full bg-neon-lime animate-pulse" />
              <span className="text-neon-lime text-[11px] font-bold tracking-widest uppercase">
                2999 فقط لأول 10 أشخاص
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.4] md:leading-[1.5] text-balance tracking-normal">
              مشكلتك مش إنك مش بتعرف{" "}
              <span className="text-gradient-lime-cyan">تكتب</span>…
            </h1>

            <div className="relative pr-6 md:pr-8">
              <div className="absolute right-0 top-2 bottom-2 w-1 bg-neon-lime rounded-full" />
              <p className="text-lg md:text-2xl font-light text-muted-foreground leading-[2] max-w-[42ch]">
                مشكلتك إنك لسه متدرّبتش على شغل حقيقي، ومش بتفكر كـ{" "}
                <span className="text-foreground font-bold">Marketer</span>.
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
              برنامج لايف عملي ينقلك من مرحلة "بكتب بوستات وخلاص" إلى شخص فاهم التسويق،
              يطبق على مشاريع حقيقية، يحلل الجمهور، يبني Content Strategy، ويطلع من البرنامج
              بـ Portfolio وخطة Career واضحة تؤهله لسوق العمل.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="matte-surface px-5 py-4 rounded-xl">
                <div className="text-2xl font-mono-tech font-bold">14</div>
                <div className="text-muted-foreground text-xs">سيشن لايف</div>
              </div>
              <div className="matte-surface px-5 py-4 rounded-xl">
                <div className="text-2xl font-mono-tech font-bold">04</div>
                <div className="text-muted-foreground text-xs">مراحل تحول</div>
              </div>
              <div className="matte-surface px-5 py-4 rounded-xl">
                <div className="text-2xl font-mono-tech font-bold">10</div>
                <div className="text-muted-foreground text-xs">أماكن بالسعر الحالي</div>
              </div>
              <div className="matte-surface px-5 py-4 rounded-xl border-neon-lime/40">
                <div className="text-2xl font-mono-tech font-bold text-neon-lime">2999</div>
                <div className="text-muted-foreground text-xs font-bold">EGP لأول 10</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://wa.me/201090196974"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-neon-lime text-background font-black text-base md:text-lg rounded-sm cta-bounce animate-pulse-glow text-center"
              >
                ابدأ دلوقتي قبل ما مكانك يروح لحد تاني
              </a>
              <a
                href="#phases"
                className="px-8 py-4 border border-border hover:bg-surface text-foreground font-bold text-base md:text-lg rounded-sm transition-colors text-center"
              >
                اعرف محتوى البرنامج
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              السعر 2999 فقط لأول 10 أشخاص. بعد اكتمال أول 10 أماكن، السعر قابل للتغيير.
            </p>
          </div>

          {/* Right: Lab dashboard visual */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div className="relative aspect-square">
                <div className="absolute inset-0 matte-surface rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between">
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="size-2.5 rounded-full bg-destructive/70" />
                      <div className="size-2.5 rounded-full bg-neon-lime/70" />
                      <div className="size-2.5 rounded-full bg-neon-cyan/70" />
                    </div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-muted-foreground">
                      real_project.lab
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-surface-elevated border border-border">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] uppercase font-mono-tech text-neon-cyan tracking-wider">
                          Real Brief Practice
                        </span>
                        <span className="text-[10px] font-mono-tech text-muted-foreground">Active</span>
                      </div>
                      <div className="h-1.5 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-neon-cyan w-[78%] rounded-full" />
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-elevated border border-border">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] uppercase font-mono-tech text-neon-lime tracking-wider">
                          Portfolio Build
                        </span>
                        <span className="text-[10px] font-mono-tech text-muted-foreground">In Progress</span>
                      </div>
                      <div className="h-1.5 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-neon-lime w-[55%] rounded-full" />
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-elevated border border-border">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] uppercase font-mono-tech text-foreground tracking-wider">
                          Job Market Ready
                        </span>
                        <span className="text-[10px] font-mono-tech text-muted-foreground">94%</span>
                      </div>
                      <div className="h-1.5 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-l from-neon-lime to-neon-cyan w-[94%] rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-surface-elevated border border-border">
                      <div className="text-[9px] font-mono-tech text-muted-foreground uppercase mb-1">Session</div>
                      <div className="text-xl font-mono-tech font-bold">07/14</div>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-elevated border border-border">
                      <div className="text-[9px] font-mono-tech text-muted-foreground uppercase mb-1">Phase</div>
                      <div className="text-xl font-mono-tech font-bold text-neon-lime">02</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 size-20 border-t-2 border-l-2 border-neon-lime" />
                <div className="absolute -bottom-4 -right-4 size-20 border-b-2 border-r-2 border-neon-cyan" />
              </div>
            </div>
          </div>
        </div>

        {/* Bullets grid */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-mono-tech uppercase tracking-[0.3em] text-muted-foreground">
              What you'll practice
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {bullets.map((b, i) => (
              <div
                key={i}
                className="matte-surface p-5 rounded-xl flex gap-3 hover:border-neon-lime/40 transition-colors"
              >
                <span className="text-neon-lime font-mono-tech text-xs shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground/90 leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
