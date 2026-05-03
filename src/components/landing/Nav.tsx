export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 md:py-6 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="size-9 bg-neon-lime flex items-center justify-center rounded-sm">
          <div className="size-4 bg-background rounded-full" />
        </div>
        <span className="font-black text-xl md:text-2xl tracking-tighter uppercase font-mono-tech">
         Mind <span className="text-neon-lime">/</span>pilot
        </span>
      </div>
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#phases" className="hover:text-neon-lime transition-colors">البرنامج</a>
        <a href="#bonuses" className="hover:text-neon-lime transition-colors">البونص</a>
        <a href="#pricing" className="hover:text-neon-lime transition-colors">السعر</a>
        <a href="#faq" className="hover:text-neon-lime transition-colors">الأسئلة</a>
      </div>
      <a
        href="https://wa.me/201090196974"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2.5 bg-neon-lime text-background font-bold text-sm rounded-sm hover:scale-[1.03] active:scale-95 transition-transform"
      >
        ابدأ دلوقتي قبل ما مكانك يروح لحد تاني
      </a>
    </nav>
  );
}
