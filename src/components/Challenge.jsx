import { portfolioData1, portfolioData2 } from "../data/portfolio";

export default function Challenge() {
  return (
    <article className="py-6 storyMain2 bg-white">
      <div className="container mx-auto">
        <h2 className="font-bold text-3xl px-3 md:px-0">
          다양한 도전을 하고있습니다.
        </h2>
      </div>
      <section>
        <div className="client-slider mt-12 mb-5">
          <div className="client-slide-track space-x-5">
            {portfolioData1.map((poartfolio, index) => (
              <div
                className="client-slide rounded-lg overflow-hidden"
                key={index}
              >
                <img
                  src={poartfolio.src}
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="client-slider2 mb-12">
          <div className="client-slide-track space-x-5">
            {portfolioData2.map((portfolio, index) => (
              <div
                className="client-slide rounded-lg overflow-hidden"
                key={index}
              >
                <img
                  src={portfolio.src}
                  className="object-cover w-full h-full"
                  alt="poartfolio img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
