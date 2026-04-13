export default function GetSection() {
  return (
    <section id="performance" className="section-get">
      <img loading="lazy" className="item-1 item-circle-1" src="/images/item/item-circle.png" alt="Visual element for 1111.tn price comparison" />
      <img loading="lazy" className="item-2 item-circle-1" src="/images/item/item-circle.png" alt="Visual element for 1111.tn price comparison" />
      <img loading="lazy" className="item-3 item-circle-1" src="/images/item/item-circle.png" alt="Visual element for 1111.tn price comparison" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content">
              <div className="heading1 wow fadeInUp" data-wow-delay="0s">
                Comparateur 1111.tn
                <span></span>
              </div>
              <div className="heading-section">
                <div className="heading wow fadeInUp" data-wow-delay="0.1s">
                  Comparez les{" "}
                  <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                    <span className="cd-words-wrapper">
                      <span className="item-text is-visible"><i className="in">p</i><i className="in">r</i><i className="in">i</i><i className="in">x</i></span>
                      <span className="item-text is-hidden"><i className="out">d</i><i className="out">e</i><i className="out">a</i><i className="out">l</i><i className="out">s</i></span>
                      <span className="item-text is-hidden"><i className="out">p</i><i className="out">r</i><i className="out">o</i><i className="out">m</i><i className="out">o</i><i className="out">s</i></span>
                    </span>
                  </span>
                  {" "}dans{" "}
                  <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3 d-inline-flex">
                    <span className="cd-words-wrapper">
                      <span className="item-text is-visible"><i className="in">T</i><i className="in">u</i><i className="in">n</i><i className="in">i</i><i className="in">s</i><i className="in">i</i><i className="in">e</i></span>
                      <span className="item-text is-hidden"><i className="in">m</i><i className="in">a</i><i className="in">g</i><i className="in">a</i><i className="in">s</i><i className="in">i</i><i className="in">n</i><i className="in">s</i></span>
                      <span className="item-text is-hidden"><i className="out">e</i><i className="out">n</i><i className="out"> </i><i className="out">l</i><i className="out">i</i><i className="out">g</i><i className="out">n</i><i className="out">e</i></span>
                    </span>
                  </span>!
                </div>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Trouvez le meilleur prix sur vos produits en quelques secondes. <br /> Comparez entre magasins physiques et en ligne, en temps reel.</p>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <a href="#" className="tf-btn-4 light_skew_hover type-white wow fadeInUp" data-wow-delay="0.2s">Comparer maintenant</a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div id="matter-box" className="matter-box">
              <canvas
                width="1328"
                height="938"
                data-pixel-ratio="2"
                style={{ width: "664px", height: "469px", background: "0% 0% / contain transparent" }}
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
