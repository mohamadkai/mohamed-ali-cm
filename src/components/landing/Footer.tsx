export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-9 bg-neon-lime flex items-center justify-center rounded-sm">
                <div className="size-4 bg-background rounded-full" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase font-mono-tech">
                MENTOR<span className="text-neon-lime">/</span>LAB
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Digital Marketing & Content Writing Live Mentorship — من المبتدئ إلى الـ Strategist المحترف.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-4 text-sm uppercase tracking-widest text-neon-lime">
              البرنامج
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>14 Sessions</li>
              <li>4 Phases</li>
              <li>56+ Hours</li>
              <li>Live Workshops + Feedback</li>
              <li>Portfolio Ready</li>
            </ul>
          </div>

          <div />
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono-tech">
          <span>© {new Date().getFullYear()} MENTOR/LAB — All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
