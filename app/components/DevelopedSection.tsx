const boostRows = [
  {
    items: ["Comparaison de Prix", "Veille Concurrentielle", "Alertes Prix"],
    reverse: false,
    duration: "30s",
  },
  {
    items: ["Détection Faux Prix", "Benchmarking", "50K+ Produits", "10+ Magasins"],
    reverse: true,
    duration: "38s",
  },
  {
    items: ["Prédiction IA", "Supermarché", "Parapharmacie", "Électroménager"],
    reverse: false,
    duration: "40s",
  },
];

function BoostRow({ items, reverse, duration }: { items: string[]; reverse: boolean; duration: string }) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className="tf-brand style-2"
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          width: "max-content",
          animation: `boost-scroll-${reverse ? "reverse" : "forward"} ${duration} linear infinite`,
        }}
      >
        {repeated.map((text, i) => (
          <div key={i} className="brand-item boost-item" style={{ flex: "0 0 auto" }}>
            <div className="text-gradient">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DevelopedSection() {
  return (
    <section className="section-developed">
      <style>{`
        @keyframes boost-scroll-forward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes boost-scroll-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <div className="container">
        <div className="row">
          {/* Left: SEO card */}
          <div className="col-md-8">
            <div
              className="maximum-wrap"
              style={{ backgroundImage: "url('/images/item/bg-maximum.jpg')" }}
            >
              <div className="heading wow fadeInUp" data-wow-delay="0s">
                50 000+ <br /> PRODUITS SUIVIS
              </div>
              <div className="desc wow fadeInUp" data-wow-delay="0.1s">
                Comparez les prix en temps réel sur les grandes enseignes tunisiennes et économisez à chaque achat.
              </div>
              <img
                loading="lazy"
                className="img-item ani-y"
                src="/images/item/item-maximum.png"
                alt="1111.tn comparaison de prix en Tunisie"
              />
              <div className="box-performance wow fadeInUp" data-wow-delay="0.2s">
                <div className="text">+</div>
                <div className="line"></div>
                <div>
                  <div className="title">ÉCONOMIES</div>
                  <div className="counter">
                    <span className="sub">{">"}</span>
                    <span className="number" data-speed="2000" data-to="30" data-inviewport="yes">30</span>
                    <span className="sub">%</span>
                  </div>
                </div>
                <div className="line"></div>
                <div>
                  <div className="title">MAGASINS</div>
                  <div className="counter">
                    <span className="number" data-speed="2000" data-to="10" data-inviewport="yes">10</span>
                    <span className="sub">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: animated feature tags */}
          <div className="col-md-4">
            <div className="boost-features-wrap">
              <div className="brand-wrap">
                {boostRows.map((row, i) => (
                  <BoostRow key={i} {...row} />
                ))}
              </div>
              <p className="text wow fadeInUp" data-wow-delay="0s">
                Fonctionnalités <br /> Incluses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
