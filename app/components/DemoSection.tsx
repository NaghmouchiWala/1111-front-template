type Tag = "HOT" | "NEW";

interface DemoCard {
  categories: string; // space-separated CSS classes e.g. "fashion new"
  href: string;
  image: string;
  title: string;
  tags?: Tag[];
  delay?: string;
  comingSoon?: boolean;
}

const htmlCards: DemoCard[] = [
  { categories: "fashion new", href: "https://vineta-demo.myshopify.com/", image: "/images/home/fashion-1.jpg", title: "Fashion Style 1", tags: ["HOT", "NEW"], delay: "0s" },
  { categories: "fashion", href: "https://vineta-demo.myshopify.com/pages/home-fashion-02", image: "/images/home/fashion-2.jpg", title: "Fashion Style 2", delay: "0s" },
  { categories: "electronics", href: "https://vineta-demo.myshopify.com/pages/home-electronic", image: "/images/home/electronic.jpg", title: "Electronic", delay: "0.1s" },
  { categories: "fashion new", href: "https://vineta-demo.myshopify.com/pages/home-fashion-women", image: "/images/home/women-fashion.jpg", title: "Women Fashion", tags: ["HOT", "NEW"], delay: "0s" },
  { categories: "other new", href: "https://vineta-demo.myshopify.com/pages/home-bicycle", image: "/images/home/bicycle.jpg", title: "Bicycle", tags: ["NEW"], delay: "0.2s" },
  { categories: "electronics", href: "https://vineta-demo.myshopify.com/pages/home-phonecase", image: "/images/home/phone-case.jpg", title: "Phone Case", delay: "0s" },
  { categories: "coming-soon", href: "#", image: "", title: "", comingSoon: true, delay: "0.1s" },
];

const nextCards: DemoCard[] = [
  { categories: "fashion", href: "https://vinetanextjs.vercel.app/", image: "/images/home/fashion-1.jpg", title: "Fashion Style 1", tags: ["HOT", "NEW"], delay: "0s" },
  { categories: "new furniture", href: "https://vinetanextjs.vercel.app/home-furniture2", image: "/images/home/furniture2.jpg", title: "Furniture 2", tags: ["NEW"], delay: "0.1s" },
  { categories: "new other", href: "https://vinetanextjs.vercel.app/home-jewelry2", image: "/images/home/jewelry2.jpg", title: "Jewelry 2", tags: ["NEW"], delay: "0.2s" },
  { categories: "new other", href: "https://vinetanextjs.vercel.app/home-handcraft", image: "/images/home/handcraft.jpg", title: "Handcraft", tags: ["NEW"], delay: "0s" },
  { categories: "new other", href: "https://vinetanextjs.vercel.app/home-pickleball", image: "/images/home/pickleball.jpg", title: "Pickle Ball", tags: ["NEW"], delay: "0.1s" },
  { categories: "new other", href: "https://vinetanextjs.vercel.app/home-skincare2", image: "/images/home/skincare2.jpg", title: "Skincare 2", tags: ["NEW"], delay: "0.2s" },
  { categories: "other", href: "https://vinetanextjs.vercel.app/home-plant", image: "/images/home/plant.jpg", title: "Plant", delay: "0s" },
  { categories: "fashion", href: "https://vinetanextjs.vercel.app/home-fashion-02", image: "/images/home/fashion-2.jpg", title: "Fashion Style 2", delay: "0.1s" },
  { categories: "electronics", href: "https://vinetanextjs.vercel.app/home-electronic", image: "/images/home/electronic.jpg", title: "Electronic", delay: "0.2s" },
  { categories: "furniture", href: "https://vinetanextjs.vercel.app/home-furniture", image: "/images/home/furniture.jpg", title: "Furniture", delay: "0s" },
  { categories: "fashion", href: "https://vinetanextjs.vercel.app/home-fashion-women", image: "/images/home/women-fashion.jpg", title: "Women Fashion", tags: ["HOT", "NEW"], delay: "0.1s" },
  { categories: "other", href: "https://vinetanextjs.vercel.app/home-skincare", image: "/images/home/cosmetic.jpg", title: "Skincare", delay: "0.2s" },
  { categories: "other", href: "https://vinetanextjs.vercel.app/home-bicycle", image: "/images/home/bicycle.jpg", title: "Bicycle", tags: ["NEW"], delay: "0s" },
  { categories: "electronics", href: "https://vinetanextjs.vercel.app/home-phonecase", image: "/images/home/phone-case.jpg", title: "Phone Case", delay: "0.1s" },
  { categories: "accessories", href: "https://vinetanextjs.vercel.app/home-pet-accessories", image: "/images/home/pet-accessories.jpg", title: "Pet Accessories", delay: "0.2s" },
  { categories: "other", href: "https://vinetanextjs.vercel.app/home-sportwear", image: "/images/home/sportwear.jpg", title: "Sportwear", delay: "0s" },
  { categories: "other", href: "https://vinetanextjs.vercel.app/home-jewelry", image: "/images/home/jewelry.jpg", title: "Jewelry", delay: "0.1s" },
  { categories: "electronics", href: "https://vinetanextjs.vercel.app/home-electric-accessories", image: "/images/home/eletric-accessories.jpg", title: "Electric Accessories", tags: ["HOT", "NEW"], delay: "0.2s" },
  { categories: "other", href: "https://vinetanextjs.vercel.app/home-mega-electronic", image: "/images/home/mega-shop.jpg", title: "Mega Shop", delay: "0s" },
  { categories: "fooddrink", href: "https://vinetanextjs.vercel.app/home-vegetable", image: "/images/home/supermarket.jpg", title: "Supermarket", delay: "0.1s" },
  { categories: "other", href: "https://vinetanextjs.vercel.app/home-pod", image: "/images/home/print-on-demand.jpg", title: "Print On Demand", delay: "0.2s" },
  { categories: "other", href: "https://vinetanextjs.vercel.app/home-baby", image: "/images/home/baby.jpg", title: "Baby", tags: ["NEW"], delay: "0s" },
  { categories: "coming-soon", href: "#", image: "", title: "", comingSoon: true, delay: "0.1s" },
];

const reactCards: DemoCard[] = [
  { categories: "fashion", href: "https://vineta-demo.myshopify.com/", image: "/images/home/fashion-1.jpg", title: "Fashion Style 1", tags: ["HOT", "NEW"], delay: "0s" },
  { categories: "new furniture", href: "https://vinetareact.vercel.app/home-furniture2", image: "/images/home/furniture2.jpg", title: "Furniture 2", tags: ["NEW"], delay: "0.1s" },
  { categories: "new other", href: "https://vinetareact.vercel.app/home-jewelry2", image: "/images/home/jewelry2.jpg", title: "Jewelry 2", tags: ["NEW"], delay: "0.2s" },
  { categories: "new other", href: "https://vinetareact.vercel.app/home-handcraft", image: "/images/home/handcraft.jpg", title: "Handcraft", tags: ["NEW"], delay: "0s" },
  { categories: "new other", href: "https://vinetareact.vercel.app/home-pickleball", image: "/images/home/pickleball.jpg", title: "Pickle Ball", tags: ["NEW"], delay: "0.1s" },
  { categories: "new other", href: "https://vinetareact.vercel.app/home-skincare2", image: "/images/home/skincare2.jpg", title: "Skincare 2", tags: ["NEW"], delay: "0.2s" },
  { categories: "other", href: "https://vinetareact.vercel.app/home-plant", image: "/images/home/plant.jpg", title: "Plant", delay: "0s" },
  { categories: "fashion", href: "https://vinetareact.vercel.app/home-fashion-02", image: "/images/home/fashion-2.jpg", title: "Fashion Style 2", delay: "0.1s" },
  { categories: "electronics", href: "https://vinetareact.vercel.app/home-electronic", image: "/images/home/electronic.jpg", title: "Electronic", delay: "0.2s" },
  { categories: "furniture", href: "https://vinetareact.vercel.app/home-furniture", image: "/images/home/furniture.jpg", title: "Furniture", delay: "0s" },
  { categories: "fashion", href: "https://vinetareact.vercel.app/home-fashion-women", image: "/images/home/women-fashion.jpg", title: "Women Fashion", tags: ["HOT", "NEW"], delay: "0.1s" },
  { categories: "other", href: "https://vinetareact.vercel.app/home-skincare", image: "/images/home/cosmetic.jpg", title: "Skincare", delay: "0.2s" },
  { categories: "other", href: "https://vinetareact.vercel.app/home-bicycle", image: "/images/home/bicycle.jpg", title: "Bicycle", tags: ["NEW"], delay: "0s" },
  { categories: "electronics", href: "https://vinetareact.vercel.app/home-phonecase", image: "/images/home/phone-case.jpg", title: "Phone Case", delay: "0.1s" },
  { categories: "accessories", href: "https://vinetareact.vercel.app/home-pet-accessories", image: "/images/home/pet-accessories.jpg", title: "Pet Accessories", delay: "0.2s" },
  { categories: "other", href: "https://vinetareact.vercel.app/home-sportwear", image: "/images/home/sportwear.jpg", title: "Sportwear", delay: "0s" },
  { categories: "other", href: "https://vinetareact.vercel.app/home-jewelry", image: "/images/home/jewelry.jpg", title: "Jewelry", delay: "0.1s" },
  { categories: "electronics", href: "https://vinetareact.vercel.app/home-electric-accessories", image: "/images/home/eletric-accessories.jpg", title: "Electric Accessories", tags: ["HOT", "NEW"], delay: "0.2s" },
  { categories: "other", href: "https://vinetareact.vercel.app/home-mega-electronic", image: "/images/home/mega-shop.jpg", title: "Mega Shop", delay: "0s" },
  { categories: "fooddrink", href: "https://vinetareact.vercel.app/home-vegetable", image: "/images/home/supermarket.jpg", title: "Supermarket", delay: "0.1s" },
  { categories: "other", href: "https://vinetareact.vercel.app/home-pod", image: "/images/home/print-on-demand.jpg", title: "Print On Demand", delay: "0.2s" },
  { categories: "other", href: "https://vinetareact.vercel.app/home-baby", image: "/images/home/baby.jpg", title: "Baby", tags: ["NEW"], delay: "0s" },
  { categories: "coming-soon", href: "#", image: "", title: "", comingSoon: true, delay: "0.1s" },
];

function HomeBox({ card }: { card: DemoCard }) {
  if (card.comingSoon) {
    return (
      <div className={`${card.categories} item col-lg-4 col-6`}>
        <div className="home-box wow fadeInUp" data-wow-delay={card.delay}>
          <div className="innerbox">
            <div className="dot"><span></span><span></span><span></span></div>
            <div className="coming-soon-wrap">
              <div className="text">
                More demos are{" "}
                <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                  <span className="cd-words-wrapper">
                    <span className="item-text is-visible">coming</span>
                    <span className="item-text is-hidden">coming</span>
                    <span className="item-text is-hidden">coming</span>
                  </span>
                </span>
                {" "}soon...
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
            <a className="image" href={card.href} target="_blank">
              <img loading="lazy" className="lazyload" data-src={card.image} src={card.image} alt="Vineta's web development project screenshot" />
            </a>
            <a className="tf-btn-3 light_skew_hover demo-full-link" href={card.href} target="_blank">Demo</a>
          </div>
          <div className="content">
            <a href={card.href} target="_blank" className="title-box">{card.title}</a>
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
  return (
    <section id="demo" className="section-demo">
      <div className="container-1 flat-animate-tab">
        <div className="row">
          <div className="col-12">
            <div className="heading-section center mb-60">
              <img loading="lazy" className="img-bg" src="/images/item/grid-2.png" alt="Vineta's web development project screenshot" />
              <svg width="459" height="242" viewBox="0 0 459 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="paint0_linear_273_368" x1="375" y1="625" x2="-132.784" y2="483.917" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3BDEB9" />
                    <stop offset="0.5" stopColor="#77E590" />
                    <stop offset="1" stopColor="#CCFF9B" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_273_368" x1="456.5" y1="83.5" x2="363.102" y2="40.6656" gradientUnits="userSpaceOnUse">
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
                <text x="120" y="200" fontSize="220" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold"
                  stroke="url(#paint0_linear_273_368)" strokeWidth="6" fill="none">6</text>
                <text x="320" y="100" fontSize="110" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold"
                  stroke="url(#paint0_linear_273_368)" strokeWidth="4" fill="none">+</text>
              </svg>
              <div className="heading fw-6 mb-8 wow fadeInUp h1" data-wow-delay="0s">
                <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                  <span className="cd-words-wrapper">
                    <span className="item-text is-visible">Stunning</span>
                    <span className="item-text is-hidden">Stunning</span>
                    <span className="item-text is-hidden">Stunning</span>
                  </span>
                </span>
                &nbsp;Templates
              </div>
              <p className="wow fadeInUp" data-wow-delay="0.1s">Save time &amp; effort with our stunning designer-made demos.</p>
            </div>
          </div>
        </div>

        <div className="tab-content">
          {/* HTML tab */}
          <div className="tab-pane active html-filter" id="html" role="tabpanel">
            <ul className="posttype-filter">
              <li className="active"><a className="btn-all" data-filter="*" href="#">All</a></li>
              <li><a data-filter=".new" href="#">New</a></li>
              <li><a data-filter=".fashion" href="#">Clothing &amp; Fashion</a></li>
              <li><a data-filter=".electronics" href="#">Electronics</a></li>
              <li><a data-filter=".other" href="#">Other</a></li>
            </ul>
            <div className="container-filter row">
              {htmlCards.map((card, i) => <HomeBox key={i} card={card} />)}
            </div>
          </div>

          {/* Next.js tab */}
          <div className="tab-pane next-filter" id="next" role="tabpanel">
            <ul className="posttype-filter1">
              <li className="active"><a className="btn-all" data-filter="*" href="#">All</a></li>
              <li><a data-filter=".new" href="#">New</a></li>
              <li><a data-filter=".fashion" href="#">Clothing &amp; Fashion</a></li>
              <li><a data-filter=".furniture" href="#">Furniture</a></li>
              <li><a data-filter=".electronics" href="#">Electronics</a></li>
              <li><a data-filter=".accessories" href="#">Accessories</a></li>
              <li><a data-filter=".fooddrink" href="#">Food &amp; Drink</a></li>
              <li><a data-filter=".other" href="#">Other</a></li>
            </ul>
            <div className="container-filter1 row">
              {nextCards.map((card, i) => <HomeBox key={i} card={card} />)}
            </div>
          </div>

          {/* React tab */}
          <div className="tab-pane react-filter" id="react" role="tabpanel">
            <ul className="posttype-filter2">
              <li className="active"><a className="btn-all" data-filter="*" href="#">All</a></li>
              <li><a data-filter=".new" href="#">New</a></li>
              <li><a data-filter=".fashion" href="#">Clothing &amp; Fashion</a></li>
              <li><a data-filter=".furniture" href="#">Furniture</a></li>
              <li><a data-filter=".electronics" href="#">Electronics</a></li>
              <li><a data-filter=".accessories" href="#">Accessories</a></li>
              <li><a data-filter=".fooddrink" href="#">Food &amp; Drink</a></li>
              <li><a data-filter=".other" href="#">Other</a></li>
            </ul>
            <div className="container-filter2 row">
              {reactCards.map((card, i) => <HomeBox key={i} card={card} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
