const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5001 11.1518L14.5786 11.6126C14.3018 11.7502 14.0778 11.9742 13.9402 12.251L13.4794 13.1726C13.4138 13.3054 13.225 13.3054 13.1594 13.1726L12.6986 12.251C12.561 11.9742 12.337 11.7502 12.0602 11.6126L11.1387 11.1518C11.0059 11.0862 11.0059 10.8974 11.1387 10.8318L12.0602 10.371C12.337 10.2335 12.561 10.0095 12.6986 9.73266L13.1594 8.81109C13.225 8.67829 13.4138 8.67829 13.4794 8.81109L13.9402 9.73266C14.0778 10.0095 14.3018 10.2335 14.5786 10.371L15.5001 10.8318C15.6329 10.8974 15.6329 11.0862 15.5001 11.1518Z" fill="url(#spark0)" />
    <path d="M10.8092 8.37279L8.65888 9.44796C8.01409 9.77116 7.49091 10.2943 7.16772 10.9391L6.09255 13.0895C5.93895 13.3967 5.50057 13.3967 5.34697 13.0895L4.2718 10.9391C3.94861 10.2943 3.42542 9.77116 2.78064 9.44796L0.630294 8.37279C0.323105 8.2192 0.323105 7.78081 0.630294 7.62721L2.78064 6.55204C3.42542 6.22885 3.94861 5.70566 4.2718 5.06088L5.34697 2.91054C5.50057 2.60334 5.93895 2.60334 6.09255 2.91054L7.16772 5.06088C7.49091 5.70566 8.01409 6.22885 8.65888 6.55204L10.8092 7.62721C11.1164 7.78081 11.1164 8.2192 10.8092 8.37279Z" fill="url(#spark1)" />
    <path d="M11.1151 3.83366L11.5706 3.60595C11.7074 3.53795 11.8181 3.42725 11.8861 3.29046L12.1138 2.83503C12.1462 2.7694 12.2395 2.7694 12.2719 2.83503L12.4996 3.29046C12.5676 3.42725 12.6783 3.53795 12.8151 3.60595L13.2706 3.83366C13.3362 3.86608 13.3362 3.95938 13.2706 3.9918L12.8151 4.21952C12.6783 4.28752 12.5676 4.39821 12.4996 4.535L12.2719 4.99044C12.2395 5.05527 12.1462 5.05527 12.1138 4.99044L11.8861 4.535C11.8181 4.39821 11.7074 4.28752 11.5706 4.21952L11.1151 3.9918C11.0495 3.95938 11.0495 3.86608 11.1151 3.83366Z" fill="url(#spark2)" />
    <defs>
      <linearGradient id="spark0" x1="15.5997" y1="13.2722" x2="10.1035" y2="10.7515" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3BDEB9" /><stop offset="0.5" stopColor="#77E590" /><stop offset="1" stopColor="#CCFF9B" />
      </linearGradient>
      <linearGradient id="spark1" x1="11.0396" y1="13.3199" x2="-1.78273" y2="7.43927" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3BDEB9" /><stop offset="0.5" stopColor="#77E590" /><stop offset="1" stopColor="#CCFF9B" />
      </linearGradient>
      <linearGradient id="spark2" x1="13.3198" y1="5.03906" x2="10.6038" y2="3.79314" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3BDEB9" /><stop offset="0.5" stopColor="#77E590" /><stop offset="1" stopColor="#CCFF9B" />
      </linearGradient>
    </defs>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const stores = [
  { name: "Mytek",      price: "1 249 DT", best: true,  bar: "68%",  diff: null     },
  { name: "Tunisianet", price: "1 289 DT", best: false, bar: "78%",  diff: "+40 DT" },
  { name: "Spacenet",   price: "1 319 DT", best: false, bar: "88%",  diff: "+70 DT" },
  { name: "TechnoPro",  price: "1 350 DT", best: false, bar: "100%", diff: "+101 DT"},
];

const stats = [
  { value: "50K+", label: "Produits comparés" },
  { value: "10+",  label: "Magasins indexés" },
  { value: "40%",  label: "Économies possibles" },
];

export default function HeroSection() {
  return (
    <section className="slider" style={{ overflow: "hidden" }}>
      <style>{`
        .slider .title {
          font-size: clamp(2rem, 4vw, 3rem) !important;
          line-height: 1.15 !important;
        }
        /* ── Card float ── */
        @keyframes card-float {
          0%, 100% { transform: translateY(0px); box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 0 rgba(59,222,185,0); }
          50%       { transform: translateY(-10px); box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 40px 4px rgba(59,222,185,0.08); }
        }
        .hero-price-card {
          background: rgba(12,18,28,0.82);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 20px;
          padding: 28px 30px;
          backdrop-filter: blur(20px);
          width: 100%;
          max-width: 400px;
          animation: card-float 5s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        /* Subtle top glow line */
        .hero-price-card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,222,185,0.6), transparent);
        }

        .hero-price-card .card-title {
          font-size: 11px;
          color: rgba(255,255,255,0.40);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .card-title-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #3BDEB9;
          box-shadow: 0 0 6px #3BDEB9;
          animation: dot-pulse 2s ease-in-out infinite;
        }
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }
        .hero-price-card .product-name {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* ── Store rows ── */
        .hero-store-row {
          display: flex;
          align-items: center;
          padding: 11px 14px;
          border-radius: 12px;
          margin-bottom: 8px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: row-in 0.5s ease forwards;
        }
        .hero-store-row:nth-child(1) { animation-delay: 0.1s; }
        .hero-store-row:nth-child(2) { animation-delay: 0.25s; }
        .hero-store-row:nth-child(3) { animation-delay: 0.4s; }
        .hero-store-row:nth-child(4) { animation-delay: 0.55s; }
        @keyframes row-in {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .hero-store-row.best {
          background: linear-gradient(90deg, rgba(59,222,185,0.12), rgba(204,255,155,0.06));
          border: 1px solid rgba(59,222,185,0.30);
          box-shadow: inset 0 0 20px rgba(59,222,185,0.04);
        }
        .hero-store-row:not(.best) {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
        }

        /* Progress bar background */
        .hero-store-row .row-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          border-radius: 12px;
          animation: bar-grow 1.2s ease-out forwards;
          animation-delay: inherit;
        }
        @keyframes bar-grow {
          from { width: 0; }
        }

        .hero-store-row .row-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 8px;
        }
        .hero-store-name {
          font-size: 13px;
          color: rgba(255,255,255,0.70);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .hero-store-row.best .hero-store-name { color: #fff; font-weight: 600; }
        .hero-store-price {
          font-size: 15px;
          font-weight: 800;
          color: rgba(255,255,255,0.85);
          letter-spacing: -0.5px;
        }
        .hero-store-row.best .hero-store-price {
          background: linear-gradient(90deg, #3BDEB9, #CCFF9B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .best-badge {
          font-size: 9px;
          font-weight: 700;
          background: linear-gradient(90deg, #3BDEB9, #CCFF9B);
          color: #000;
          padding: 2px 7px;
          border-radius: 20px;
        }
        .diff-badge {
          font-size: 10px;
          font-weight: 600;
          color: rgba(255,100,100,0.8);
          background: rgba(255,80,80,0.08);
          border: 1px solid rgba(255,80,80,0.2);
          padding: 1px 6px;
          border-radius: 20px;
        }

        /* ── Savings bar ── */
        @keyframes savings-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-savings-bar {
          margin-top: 16px;
          padding: 14px 16px;
          background: linear-gradient(90deg, rgba(59,222,185,0.08), rgba(204,255,155,0.05));
          border: 1px solid rgba(59,222,185,0.22);
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: savings-in 0.6s ease 0.8s both;
        }
        .hero-savings-bar .savings-text {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          flex: 1;
        }
        .hero-savings-bar .savings-amount {
          font-size: 20px;
          font-weight: 900;
          background: linear-gradient(90deg, #3BDEB9, #CCFF9B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
          animation: savings-pop 1s ease 1s both;
        }
        @keyframes savings-pop {
          0%   { transform: scale(0.8); opacity: 0; }
          70%  { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .hero-stat-pill {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          padding: 14px 22px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 14px;
          gap: 2px;
        }
        .hero-stat-pill .stat-val {
          font-size: 22px;
          font-weight: 800;
          background: linear-gradient(90deg, #3BDEB9, #CCFF9B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }
        .hero-stat-pill .stat-lbl {
          font-size: 11px;
          color: rgba(255,255,255,0.50);
          white-space: nowrap;
        }
        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }
        .hero-trust-row .check { color: #3BDEB9; }
        .hero-search-bar {
          display: flex;
          align-items: center;
          gap: 0;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50px;
          padding: 6px 6px 6px 20px;
          margin-top: 28px;
          max-width: 480px;
        }
        .hero-search-bar input {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 14px;
          flex: 1;
        }
        .hero-search-bar input::placeholder { color: rgba(255,255,255,0.35); }
        .hero-search-bar button {
          background: linear-gradient(90deg, #3BDEB9, #77E590);
          border: none;
          border-radius: 50px;
          color: #000;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .hero-right-panel { display: none !important; }
          .hero-search-bar { max-width: 100%; }
        }
      `}</style>

      <img loading="lazy" className="item-1 item-circle-2" src="/images/item/item-circle-blur.png" alt="" />
      <img loading="lazy" className="item-2 item-circle-3" src="/images/item/item-circle.png" alt="" />
      <img loading="lazy" className="item-3 item-circle-1" src="/images/item/item-circle.png" alt="" />

      <div className="slider-inner" style={{ alignItems: "center", gap: "48px" }}>

        {/* ── Left Content ── */}
        <div className="inner-content" style={{ flex: "1 1 0", minWidth: 0, paddingLeft: "90px" }}>

          <div className="sub-title box-tag wow fadeInUp">
            <SparkleIcon />
            <span className="text-gradient style-2">Tunisie · Comparateur #1</span>
            <span className="eff"></span>
          </div>

          <div className="title wow fadeInUp" data-wow-delay="0.1s">
            Comparez les prix,
            <br />
            <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
              <span className="cd-words-wrapper">
                <span className="item-text is-visible">économisez</span>
                <span className="item-text is-hidden">économisez</span>
                <span className="item-text is-hidden">économisez</span>
              </span>
            </span>
            {" "}vraiment.
          </div>

          <p className="text wow fadeInUp" data-wow-delay="0.2s">
            50 000+ produits. 10+ magasins. Des prix transparents en temps réel.
            <br />On dévoile les vrais prix — et les mensonges.
          </p>

          <div className="hero-search-bar wow fadeInUp" data-wow-delay="0.25s">
            <input type="text" placeholder="Rechercher un produit, une marque…" readOnly />
            <button>
              <ArrowRightIcon />
              Comparer
            </button>
          </div>

          <div className="hero-trust-row wow fadeInUp" data-wow-delay="0.3s">
            <span className="check"><CheckIcon /></span> Gratuit
            <span style={{ margin: "0 6px", opacity: 0.3 }}>·</span>
            <span className="check"><CheckIcon /></span> Sans inscription
            <span style={{ margin: "0 6px", opacity: 0.3 }}>·</span>
            <span className="check"><CheckIcon /></span> Mis à jour en temps réel
          </div>

          <div className="wow fadeInUp" data-wow-delay="0.4s"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "32px" }}>
            {stats.map((s) => (
              <div key={s.value} className="hero-stat-pill">
                <span className="stat-val">{s.value}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Panel: Price comparison card ── */}
        <div className="hero-right-panel wow fadeInUp" data-wow-delay="0.2s"
          style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", transform: "translateX(-90px)" }}>
          <div className="hero-price-card">
            <div className="card-title">
              <span className="card-title-dot" />
              Comparaison en direct
            </div>
            <div className="product-name">Samsung Galaxy S24 — 256 Go</div>

            {stores.map((s) => (
              <div key={s.name} className={`hero-store-row${s.best ? " best" : ""}`}>
                {/* animated background bar */}
                <div className="row-bar" style={{
                  width: s.bar,
                  background: s.best
                    ? "linear-gradient(90deg, rgba(59,222,185,0.10), rgba(204,255,155,0.04))"
                    : "rgba(255,255,255,0.02)",
                }} />
                <div className="row-content">
                  <span className="hero-store-name">
                    {s.name}
                    {s.best && <span className="best-badge">MEILLEUR PRIX</span>}
                    {!s.best && s.diff && <span className="diff-badge">{s.diff}</span>}
                  </span>
                  <span className="hero-store-price">{s.price}</span>
                </div>
              </div>
            ))}

            <div className="hero-savings-bar">
              <span style={{ fontSize: 20 }}>💰</span>
              <span className="savings-text">Économie potentielle sur ce produit</span>
              <span className="savings-amount">−101 DT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
