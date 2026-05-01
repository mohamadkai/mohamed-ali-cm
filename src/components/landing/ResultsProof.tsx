const results = [
  {
    image: "/results/result-1.png",
    title: "نتيجة من شغل حقيقي",
  },
  {
    image: "/results/result-2.png",
    title: "تطبيق عملي من السوق",
  },
  {
    image: "/results/result-3.png",
    title: "شغل يثبت إنك فاهم",
  },
];

export default function ResultsProof() {
  return (
    <section className="px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#fdc604] px-4 py-2 text-sm font-bold text-black">
            نتائج حقيقية
          </span>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            النتايج مش بتتقال
            <br />
            النتايج بتتشاف
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            قبل ما أطلب منك تثق في البرنامج، خليني أوريك شكل الشغل والنتايج
            اللي بنبني عليها.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {results.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl"
            >
              <div className="overflow-hidden rounded-2xl bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover"
                />
              </div>

              <p className="mt-4 px-2 pb-2 text-lg font-bold text-[#fdc604]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
