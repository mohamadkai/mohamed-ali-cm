const forYou = [
  "عايز تدخل مجال الماركتنج وكتابة المحتوى بس مش عارف تبدأ منين ولا تمشي على أنهي طريق",
  "بتكتب بوستات وكابشنز، بس حاسس إنك لسه مش فاهم الاستراتيجية اللي ورا الكلام دا",
  "شغال Social Media specialist وعايز تبقا ماركتير ",
  "بتعمل Content Plan بس حاسس إنها مجرد جدول نشر مش خطة بتخدم بيزنس",
  "عايز تبدأ Freelance بس واقف عند أعمل Portfolio إزاي؟ أجيب عميل منين؟ وأسعّر نفسي بكام؟",
  "بتتوتر من كلام العملاء والـ Proposal ومش عارف تقدم نفسك بشكل احترافي",
  "بتستخدم AI بس النتيجة بتطلع عامة، متكررة، ومش شبه شغل حد فاهم Marketing",
  "اشتريت كورسات كتير، اتحمست يومين، وبعدها رجعت لنفس نقطة التوهان",
  "محتاج حد يمسك إيدك في الطريق: يشرح، يطبّق معاك، يراجع شغلك، ويقولك تعدّل إيه وليه",
];

const notForYou = [
  "عايز وصفة سحرية تجيب فلوس في أسبوع",
  "مش ناوي تطبق التاسكات اللي هتطلب منك ",
  "داخل تتفرج بس من غير مشاركة أو تنفيذ",
  "فاكر إن المحتوى مجرد Hooks وترندات",
  "مش مستعد تسمع Feedback على شغلك",
];

export function WhoFor() {
  return (
    <section className="relative border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono-tech uppercase tracking-[0.3em] text-neon-lime mb-6">
            / Who is this for
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-balance max-w-[20ch] mx-auto">
            البرنامج معمول لك لو…
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="matte-surface rounded-2xl p-8 md:p-10 border-r-4 border-r-neon-lime">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 rounded-full bg-neon-lime/10 flex items-center justify-center text-neon-lime font-black">
                ✓
              </div>
              <h3 className="text-2xl font-black">البرنامج ده ليك</h3>
            </div>
            <ul className="space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex gap-3 text-foreground/90 leading-relaxed">
                  <span className="text-neon-lime shrink-0 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="matte-surface rounded-2xl p-8 md:p-10 border-r-4 border-r-destructive/60">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-black">
                ✗
              </div>
              <h3 className="text-2xl font-black">مش ليك لو…</h3>
            </div>
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="text-destructive/70 shrink-0 mt-1">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
