export default function MobileSection() {
  return (
    <section className="section-mobile">
      <img loading="lazy" className="item-1 item-circle-1" src="/images/item/item-circle.png" alt="Vineta's web development project screenshot" />
      <div className="container-2">
        <div className="row">
          <div className="col-12">
            <div className="heading-section center">
              <img loading="lazy" className="img-bg" src="/images/item/grid-2.png" alt="Vineta's web development project screenshot" />
              <div className="sub-heading wow fadeInUp" data-wow-delay="0s">Mobile-First</div>
              <div className="heading wow fadeInUp" data-wow-delay="0.1s">
                <div>
                  <img loading="lazy" src="/images/item/arrow.png" alt="Vineta's web development project screenshot" />
                </div>
                Experience
              </div>
              <div className="heading1 fw-6 wow fadeInUp" data-wow-delay="0.2s">
                <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                  <span className="cd-words-wrapper">
                    <span className="item-text is-visible">Template</span>
                    <span className="item-text is-hidden">Template</span>
                    <span className="item-text is-hidden">Template</span>
                  </span>
                </span>
              </div>
              <p className="wow fadeInUp" data-wow-delay="0.3s">Seamlessly switch to mobile or tablet mode to fine-tune spacing, text sizes, <br /> and alignments. Easily hide rows, columns, or widgets on selected devices.</p>
            </div>
          </div>
          <div className="col-12">
            <div className="mobile-view-wrap">
              <div className="box-bg"></div>
              <div className="mobile-view-item">
                <div className="wrap-video">
                  <video preload="none" playsInline autoPlay loop muted controls>
                    <source src="/images/video/mobile-menu.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="mobile-view-item">
                <div className="wrap-video">
                  <video preload="none" playsInline autoPlay loop muted controls>
                    <source src="/images/video/mobile-search.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="mobile-view-item">
                <div className="wrap-video">
                  <video preload="none" playsInline autoPlay loop muted controls>
                    <source src="/images/video/shopping-cart.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="mobile-view-item">
                <div className="wrap-video">
                  <video preload="none" playsInline autoPlay loop muted controls>
                    <source src="/images/video/product-single.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
