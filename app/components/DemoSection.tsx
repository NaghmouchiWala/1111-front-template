type Tag = "HOT" | "NEW";

interface StoreCard {
  categories: string;
  href: string;
  logo: string;
  name: string;
  tags?: Tag[];
  delay?: string;
  comingSoon?: boolean;
  prix?: string;
  diff?: string;
  cheapest?: boolean;
}

const BASE = "https://1111-galylio-startup.vercel.app";

const stores: StoreCard[] = [
  // E-commerce
  {
    categories: "ecommerce new",
    href: "https://www.mytek.tn",
    logo: `${BASE}/_next/image?url=%2Fimages%2Ft%C3%A9l%C3%A9chargement%20(4).png&w=256&q=75`,
    name: "Mytek",
    tags: ["HOT"],
    delay: "0s",
    prix: "842.16",
    diff: "+5.2%",
  },
  {
    categories: "ecommerce",
    href: "https://www.spacenet.tn",
    logo: `${BASE}/_next/image?url=%2Fimages%2Fspacenet-removebg-preview.png&w=256&q=75`,
    name: "Spacenet",
    delay: "0.1s",
    prix: "800.45",
    cheapest: true,
  },
  {
    categories: "ecommerce",
    href: "https://www.tunisianet.tn",
    logo: `${BASE}/_next/image?url=%2Fimages%2Ft%C3%A9l%C3%A9chargement%20(6).png&w=256&q=75`,
    name: "Tunisianet",
    delay: "0.2s",
    prix: "815.72",
    diff: "+1.9%",
  },
  {
    categories: "ecommerce new",
    href: "https://www.technopro.com.tn",
    logo: `${BASE}/_next/image?url=%2Fimages%2Ftechnopro-logo.jpg&w=256&q=75`,
    name: "TechnoPro",
    tags: ["NEW"],
    delay: "0s",
    prix: "855.93",
    diff: "+6.9%",
  },
  {
    categories: "ecommerce",
    href: "https://www.batam.tn",
    logo: `${BASE}/_next/image?url=%2Fimages%2Flogo-batam.jpg&w=256&q=75`,
    name: "Batam",
    delay: "0.1s",
    prix: "828.38",
    diff: "+3.5%",
  },
  {
    categories: "ecommerce new",
    href: "https://www.darty.com.tn",
    logo: `https://www.google.com/s2/favicons?domain=darty.com.tn&sz=128`,
    name: "Darty",
    tags: ["NEW"],
    delay: "0.2s",
    prix: "867.54",
    diff: "+8.4%",
  },
  // Parapharmacie
  {
    categories: "para new",
    href: "https://www.parashop.com.tn",
    logo: `${BASE}/_next/image?url=%2Fimages%2Fparashop-removebg-preview.png&w=256&q=75`,
    name: "ParaShop",
    tags: ["HOT"],
    delay: "0s",
  },
  {
    categories: "para",
    href: "https://pharma-shop.tn",
    logo: `${BASE}/_next/image?url=%2Fimages%2Fpharmashop-removebg-preview.png&w=256&q=75`,
    name: "Pharma-Shop",
    delay: "0.1s",
  },
  {
    categories: "para",
    href: "https://www.parafendri.tn",
    logo: `${BASE}/_next/image?url=%2Fimages%2Fparafendri-removebg-preview.png&w=256&q=75`,
    name: "ParaFendri",
    delay: "0.2s",
  },
  // Supermarché
  {
    categories: "super new",
    href: "https://www.monoprix.com.tn",
    logo: `https://www.google.com/s2/favicons?domain=monoprix.com.tn&sz=128`,
    name: "Monoprix",
    tags: ["HOT"],
    delay: "0s",
  },
  {
    categories: "super",
    href: "https://www.carrefour.com.tn",
    logo: `https://www.google.com/s2/favicons?domain=carrefour.com.tn&sz=128`,
    name: "Carrefour",
    delay: "0.1s",
  },
  {
    categories: "super",
    href: "https://www.geant.com.tn",
    logo: `https://www.google.com/s2/favicons?domain=geant.com.tn&sz=128`,
    name: "Géant",
    delay: "0.2s",
  },
  // Coming soon
  { categories: "coming-soon", href: "#", logo: "", name: "", comingSoon: true, delay: "0s" },
];

function PrixBadge({ prix, diff, cheapest }: { prix: string; diff?: string; cheapest?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px", gap: "4px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px", fontWeight: 700, fontSize: "18px", color: "#111", lineHeight: 1 }}>
        {prix}
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>DT</span>
      </div>
      {cheapest ? (
        <span style={{
          fontSize: "10px", fontWeight: 700,
          background: "linear-gradient(90deg,#3BDEB9,#CCFF9B)",
          color: "#111", borderRadius: "20px", padding: "2px 8px",
          letterSpacing: "0.5px", textTransform: "uppercase",
        }}>
          Moins cher
        </span>
      ) : (
        <span style={{
          fontSize: "10px", fontWeight: 600, color: "#e74c3c",
          background: "#fff0f0", borderRadius: "20px", padding: "2px 8px",
        }}>
          {diff}
        </span>
      )}
    </div>
  );
}

function StoreBox({ card }: { card: StoreCard }) {
  if (card.comingSoon) {
    return (
      <div className={`${card.categories} item col-lg-4 col-6`}>
        <div className="home-box wow fadeInUp" data-wow-delay={card.delay}>
          <div className="innerbox">
            <div className="dot"><span></span><span></span><span></span></div>
            <div className="coming-soon-wrap">
              <div className="text">
                Plus de magasins{" "}
                <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                  <span className="cd-words-wrapper">
                    <span className="item-text is-visible"><i className="in">b</i><i className="in">i</i><i className="in">e</i><i className="in">n</i><i className="in">t</i><i className="out">ô</i><i className="out">t</i></span>
                    <span className="item-text is-hidden"><i className="out">b</i><i className="out">i</i><i className="out">e</i><i className="out">n</i><i className="out">t</i><i className="out">ô</i><i className="out">t</i></span>
                    <span className="item-text is-hidden"><i className="out">b</i><i className="out">i</i><i className="out">e</i><i className="out">n</i><i className="out">t</i><i className="in">ô</i><i className="in">t</i></span>
                  </span>
                </span>
                {" "}disponibles...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${card.categories} item col-lg-4 col-6`}>
      <div className="home-box wow fadeInUp" data-wow-delay={card.delay}>
        <div className="innerbox">
          <div className="dot"><span></span><span></span><span></span></div>
          <div className="thumb">
            <a className="image" href={card.href} target="_blank"
              style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#fff", minHeight: "180px", padding: "24px" }}>
              <img loading="lazy" src={card.logo} alt={card.name}
                style={{ maxHeight: "80px", maxWidth: "100%", objectFit: "contain" }} />
              {card.prix && (
                <PrixBadge prix={card.prix} diff={card.diff} cheapest={card.cheapest} />
              )}
            </a>
            <a className="tf-btn-3 light_skew_hover demo-full-link" href={card.href} target="_blank">Voir les prix</a>
          </div>
          <div className="content">
            <a href={card.href} target="_blank" className="title-box">{card.name}</a>
            {card.tags && card.tags.length > 0 && (
              <div className="tags">
                {card.tags.map((tag) => (
                  <div key={tag} className={`tag-item tag-${tag.toLowerCase()}`}>{tag}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoSection() {
  const allStores = stores;
  const ecommerce = stores.filter(s => s.categories.includes("ecommerce") || s.comingSoon);
  const para = stores.filter(s => s.categories.includes("para") || s.comingSoon);

  return (
    <section id="demo" className="section-demo">
      <div className="container-1 flat-animate-tab">
        <div className="row">
          <div className="col-12">
            <div className="heading-section center mb-60">
              <img loading="lazy" className="img-bg" src="/images/item/grid-2.png" alt="Magasins indexés sur 1111.tn" />
              <svg width="459" height="242" viewBox="0 0 459 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="paint0_linear_273_368" x1="375" y1="625" x2="-132.784" y2="483.917" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3BDEB9" />
                    <stop offset="0.5" stopColor="#77E590" />
                    <stop offset="1" stopColor="#CCFF9B" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_273_368" x1="195" y1="4" x2="195" y2="228.526" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0" />
                    <stop offset="1" />
                  </linearGradient>
                </defs>
                <rect x="6" y="4" width="378" height="237" fill="url(#paint2_linear_273_368)" />
                <text x="80" y="200" fontSize="220" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold"
                  stroke="url(#paint0_linear_273_368)" strokeWidth="6" fill="none">10</text>
                <text x="370" y="100" fontSize="110" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold"
                  stroke="url(#paint0_linear_273_368)" strokeWidth="4" fill="none">+</text>
              </svg>
              <div className="heading fw-6 mb-8 wow fadeInUp h1" data-wow-delay="0s">
                <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                  <span className="cd-words-wrapper">
                    <span className="item-text is-visible">Magasins</span>
                    <span className="item-text is-hidden">Magasins</span>
                    <span className="item-text is-hidden">Magasins</span>
                  </span>
                </span>
                &nbsp;Indexés
              </div>
              <p className="wow fadeInUp" data-wow-delay="0.1s">Comparez les prix en temps réel sur les plus grandes boutiques en ligne de Tunisie.</p>
            </div>
          </div>
        </div>

        <div className="tab-content">
          {/* All stores tab */}
          <div className="tab-pane active html-filter" id="html" role="tabpanel">
            <ul className="posttype-filter">
              <li className="active"><a className="btn-all" data-filter="*" href="#">Tous</a></li>
              <li><a data-filter=".ecommerce" href="#">E-commerce</a></li>
              <li><a data-filter=".para" href="#">Parapharmacie</a></li>
              <li><a data-filter=".super" href="#">Supermarché</a></li>
              <li><a data-filter=".new" href="#">Nouveaux</a></li>
            </ul>
            <div className="container-filter row">
              {allStores.map((card, i) => <StoreBox key={i} card={card} />)}
            </div>
          </div>

          {/* E-commerce tab */}
          <div className="tab-pane next-filter" id="next" role="tabpanel">
            <ul className="posttype-filter1">
              <li className="active"><a className="btn-all" data-filter="*" href="#">Tous</a></li>
              <li><a data-filter=".new" href="#">Nouveaux</a></li>
            </ul>
            <div className="container-filter1 row">
              {ecommerce.map((card, i) => <StoreBox key={i} card={card} />)}
            </div>
          </div>

          {/* Parapharmacie tab */}
          <div className="tab-pane react-filter" id="react" role="tabpanel">
            <ul className="posttype-filter2">
              <li className="active"><a className="btn-all" data-filter="*" href="#">Tous</a></li>
              <li><a data-filter=".new" href="#">Nouveaux</a></li>
            </ul>
            <div className="container-filter2 row">
              {para.map((card, i) => <StoreBox key={i} card={card} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
