export function FinalCTA() {
  return (
    <section className="relative border-t border-border overflow-hidden grid-bg">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neon-lime/5 via-transparent to-neon-cyan/5" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-neon-lime/10 blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-40 text-center">
        <span className="inline-block text-xs font-mono-tech uppercase tracking-[0.3em] text-neon-lime mb-8">
          / Last Call
        </span>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.5] md:leading-[1.6] text-balance mb-10 max-w-[22ch] mx-auto">
          أنت مش محتاج كورس جديد يزوّد التوهان.<br />
          <span className="text-gradient-lime-cyan">أنت محتاج تدريب عملي يقرّبك من السوق.</span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-[2] max-w-2xl mx-auto mb-12">
          لو فضلت تتعلم لوحدك، ممكن توصل. بس غالبًا هتدفع وقت أطول، ومجهود أكتر، وتعدّي على نفس الدوائر اللي زهقت منها.
          البرنامج ده معمول علشان يختصر الطريق بمشاريع حقيقية، Feedback، ومخرجات تقدر تعرضها.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://wa.me/201090196974"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-neon-lime text-background font-black text-lg rounded-sm cta-bounce animate-pulse-glow"
          >
            ابدأ دلوقتي قبل ما مكانك يروح لحد تاني
          </a>
          <div className="text-right">
            <div className="text-xs font-mono-tech uppercase tracking-widest text-muted-foreground">
              السعر لأول 10 أشخاص فقط
            </div>
            <div className="text-3xl font-black font-mono-tech text-gradient-lime-cyan">2,999 EGP</div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          بعد اكتمال أول 10 أماكن، السعر قابل للتغيير.
        </p>
      </div>
    </section>
  );
}
