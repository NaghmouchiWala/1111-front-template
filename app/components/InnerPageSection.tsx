const row1Images = [
  "About_us.jpg",
  "Blog_list_v1.jpg",
  "Blog_list_v2.jpg",
  "Blog_list_v4.jpg",
  "Blog_post_single.jpg",
];

const row2Images = [
  "Collection_list.jpg",
  "Contact.jpg",
  "Compare.jpg",
  "Filter Drawer.jpg",
  "Filter Left Sidebar.jpg",
  "Collection_list.jpg",
];

function InnerPageRow({ images, reverse }: { images: string[]; reverse?: boolean }) {
  const repeated = [...images, ...images, ...images, ...images];
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className="tf-brand style-3"
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          width: "max-content",
          animation: `innerpage-scroll-${reverse ? "reverse" : "forward"} 52s linear infinite`,
        }}
      >
        {repeated.map((img, i) => (
          <div key={i} className="brand-item" style={{ flex: "0 0 auto" }}>
            <img loading="lazy" src={`/images/innerpage/${img}`} alt="Vineta's web development project screenshot" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InnerPageSection() {
  return (
    <section className="section-innerpage">
      <style>{`
        @keyframes innerpage-scroll-forward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes innerpage-scroll-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section center">
              <img loading="lazy" className="img-bg" src="/images/item/grid-2.png" alt="Vineta's web development project screenshot" />
              <div className="sub-title box-tag wow fadeInUp" data-wow-delay="0s">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5001 11.1518L14.5786 11.6126C14.3018 11.7502 14.0778 11.9742 13.9402 12.251L13.4794 13.1726C13.4138 13.3054 13.225 13.3054 13.1594 13.1726L12.6986 12.251C12.561 11.9742 12.337 11.7502 12.0602 11.6126L11.1387 11.1518C11.0059 11.0862 11.0059 10.8974 11.1387 10.8318L12.0602 10.371C12.337 10.2335 12.561 10.0095 12.6986 9.73266L13.1594 8.81109C13.225 8.67829 13.4138 8.67829 13.4794 8.81109L13.9402 9.73266C14.0778 10.0095 14.3018 10.2335 14.5786 10.371L15.5001 10.8318C15.6329 10.8974 15.6329 11.0862 15.5001 11.1518Z" fill="url(#paint0_ip)" />
                  <path d="M10.8092 8.37279L8.65888 9.44796C8.01409 9.77116 7.49091 10.2943 7.16772 10.9391L6.09255 13.0895C5.93895 13.3967 5.50057 13.3967 5.34697 13.0895L4.2718 10.9391C3.94861 10.2943 3.42542 9.77116 2.78064 9.44796L0.630294 8.37279C0.323105 8.2192 0.323105 7.78081 0.630294 7.62721L2.78064 6.55204C3.42542 6.22885 3.94861 5.70566 4.2718 5.06088L5.34697 2.91054C5.50057 2.60334 5.93895 2.60334 6.09255 2.91054L7.16772 5.06088C7.49091 5.70566 8.01409 6.22885 8.65888 6.55204L10.8092 7.62721C11.1164 7.78081 11.1164 8.2192 10.8092 8.37279Z" fill="url(#paint1_ip)" />
                  <path d="M11.1151 3.83366L11.5706 3.60595C11.7074 3.53795 11.8181 3.42725 11.8861 3.29046L12.1138 2.83503C12.1462 2.7694 12.2395 2.7694 12.2719 2.83503L12.4996 3.29046C12.5676 3.42725 12.6783 3.53795 12.8151 3.60595L13.2706 3.83366C13.3362 3.86608 13.3362 3.95938 13.2706 3.9918L12.8151 4.21952C12.6783 4.28752 12.5676 4.39821 12.4996 4.535L12.2719 4.99044C12.2395 5.05527 12.1462 5.05527 12.1138 4.99044L11.8861 4.535C11.8181 4.39821 11.7074 4.28752 11.5706 4.21952L11.1151 3.9918C11.0495 3.95938 11.0495 3.86608 11.1151 3.83366Z" fill="url(#paint2_ip)" />
                  <defs>
                    <linearGradient id="paint0_ip" x1="15.5997" y1="13.2722" x2="10.1035" y2="10.7515" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3BDEB9" /><stop offset="0.5" stopColor="#77E590" /><stop offset="1" stopColor="#CCFF9B" />
                    </linearGradient>
                    <linearGradient id="paint1_ip" x1="11.0396" y1="13.3199" x2="-1.78273" y2="7.43927" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3BDEB9" /><stop offset="0.5" stopColor="#77E590" /><stop offset="1" stopColor="#CCFF9B" />
                    </linearGradient>
                    <linearGradient id="paint2_ip" x1="13.3198" y1="5.03906" x2="10.6038" y2="3.79314" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3BDEB9" /><stop offset="0.5" stopColor="#77E590" /><stop offset="1" stopColor="#CCFF9B" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-gradient style-2">Inner Pages</span>
                <span className="eff"></span>
              </div>

              <div className="heading fw-6 wow fadeInUp" data-wow-delay="0.1s">
                <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                  <span className="cd-words-wrapper">
                    <span className="item-text is-visible"><i className="in">F</i><i className="in">l</i><i className="in">a</i><i className="in">w</i><i className="in">l</i><i className="in">e</i><i className="in">s</i><i className="in">s</i></span>
                    <span className="item-text is-hidden"><i className="in">F</i><i className="in">l</i><i className="in">a</i><i className="in">w</i><i className="in">l</i><i className="in">e</i><i className="in">s</i><i className="in">s</i></span>
                    <span className="item-text is-hidden"><i className="out">F</i><i className="out">l</i><i className="out">a</i><i className="out">w</i><i className="out">l</i><i className="out">e</i><i className="out">s</i><i className="out">s</i></span>
                  </span>
                </span>
                {" "}Designs For{" "}
                <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                  <span className="cd-words-wrapper">
                    <span className="item-text is-visible"><i className="in">E</i><i className="in">v</i><i className="in">e</i><i className="in">r</i><i className="in">y</i></span>
                    <span className="item-text is-hidden"><i className="in">E</i><i className="in">v</i><i className="in">e</i><i className="in">r</i><i className="in">y</i></span>
                    <span className="item-text is-hidden"><i className="out">E</i><i className="out">v</i><i className="out">e</i><i className="out">r</i><i className="out">y</i></span>
                  </span>
                </span>
                {" "}Detail
              </div>

              <p className="wow fadeInUp" data-wow-delay="0.2s">Our layout and structure are designed for effortless navigation, ensuring customers quickly find <br /> the information they need.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-wrap">
        <InnerPageRow images={row1Images} />
        <InnerPageRow images={row2Images} reverse />
      </div>
    </section>
  );
}
