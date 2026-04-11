import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import DevelopedSection from "./components/DevelopedSection";
import DemoSection from "./components/DemoSection";
import MobileSection from "./components/MobileSection";
import PackedSection from "./components/PackedSection";
import FeaturesSection from "./components/FeaturesSection";
import InnerPageSection from "./components/InnerPageSection";
import GetSection from "./components/GetSection";
import FaqsSection from "./components/FaqsSection";
import CtaMarqueeSection from "./components/CtaMarqueeSection";

export default function Home() {
  return (
    <>


    <div className="tfmouseCursor cursor-outer"></div>
    <div className="tfmouseCursor cursor-inner"></div>

    <div id="preloader">
        <div className="row loader">
            <div className="pulse-loader">
                <div className="double-bounce3"></div>
                <div className="double-bounce4"></div>
            </div>
        </div>
    </div>

    <div id="wrapper">
        <div id="pagee" className="">

            {/* Main Header */}
            <Header />

            {/* slider */}
            <HeroSection />

            {/* section-marquee */}
            <MarqueeSection />

            {/* section-developed */}
            <DevelopedSection />

            {/* section-demo */}
            <DemoSection />
            {/* /section-demo */}

            {/* section-mobile */}
            <MobileSection />
            {/* /section-mobile */}

            {/* section-packed */}
            <PackedSection />
            {/* /section-packed */}

            {/* section-features */}
            <FeaturesSection />
            {/* /section-features */}

            {/* section-innerpage */}
            <InnerPageSection />
            {/* /section-innerpage */}

            {/* section-get */}
            <GetSection />
            {/* /section-get */}

            {/* section-exclusive */}
            {/* <section className="section-exclusive">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading-section center">
                                <div className="heading fw-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                                        <span className="cd-words-wrapper">
                                            <span className="item-text is-visible">Premium</span>
                                            <span className="item-text is-hidden">Premium</span>
                                            <span className="item-text is-hidden">Premium</span>
                                        </span>                                          
                                    </span>
                                    and
                                    <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                                        <span className="cd-words-wrapper">
                                            <span className="item-text is-visible">Exclusive</span>
                                            <span className="item-text is-hidden">Exclusive</span>
                                            <span className="item-text is-hidden">Exclusive</span>
                                        </span>                                          
                                    </span>
                                    Features for Free
                                </div>
                                <p className=" wow fadeInUp" data-wow-delay="0.2s">Enhance your website’s flexibility and performance with robust, high-quality features—completely free and <br /> designed to empower your site’s functionality and user experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-wrap">
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/html-5.png" alt="" />
                            </div>
                            <div className="text">HTML5</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/css-3.png" alt="" />
                            </div>
                            <div className="text">CSS3</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/bootstrap-5.png" alt="" />
                            </div>
                            <div className="text">Bootstrap 5</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/sass.png" alt="" />
                            </div>
                            <div className="text">SASS</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/swiper.png" alt="" />
                            </div>
                            <div className="text">Swipe Slider</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/w3c.png" alt="" />
                            </div>
                            <div className="text">W3C Validation</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/wow.png" alt="" />
                            </div>
                            <div className="text">Wow JS</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/photoswipe.png" alt="" />
                            </div>
                            <div className="text">PhotoSwipes</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/lightbox.png" alt="" />
                            </div>
                            <div className="text">Lightbox</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/img-compare.png" alt="" />
                            </div>
                            <div className="text">Image Compare Viewer</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/google-font.png" alt="" />
                            </div>
                            <div className="text">Google Fonts</div>
                        </div>
                        <div className="exclusive-item">
                            <div className="image">
                                <img src="/images/exclusive/SEO.png" alt="" />
                            </div>
                            <div className="text">SEO Optimized</div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* /section-exclusive */}

            {/* section-unlock */}
            {/* <section className="section-unlock">
                <img loading="lazy"  className="item-1 item-circle-2" src="/images/item/item-circle-blur.png" alt="Vineta’s web development project screenshot" />
                <div className="section-unlock-wrap">
                    <img src="/images/item/grid-1.png" alt="" />
                    <div className="content">
                        <div className="heading-section">
                            <div className="heading wow fadeInUp" data-wow-delay="0.1s">
                                <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                                    <span className="cd-words-wrapper">
                                        <span className="item-text is-visible">Unlock</span>
                                        <span className="item-text is-hidden">Unlock</span>
                                        <span className="item-text is-hidden">Unlock</span>
                                    </span>                                          
                                </span>
                                the Full Vineta
                                <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
                                    <span className="cd-words-wrapper">
                                        <span className="item-text is-visible">Bundle</span>
                                        <span className="item-text is-hidden">Bundle</span>
                                        <span className="item-text is-hidden">Bundle</span>
                                    </span>                                          
                                </span>
                            </div>
                            <p className=" wow fadeInUp" data-wow-delay="0.2s">Purchase Vineta HTML and receive the Vineta Figma version at no extra cost. Enjoy seamless design, customization in one complete package.</p>
                        </div>
                        <a href="https://themeforest.net/item/vince-multipurpose-ecommerce-html5-template/57202368?s_rank=2" className="tf-btn-4 light_skew_hover type-white wow fadeInUp" target="_blank" data-wow-delay="0.2s">Get Vineta Templates Now</a>
                    </div>
                    <div className="image">
                        <span className="item-1"></span>
                        <span className="item-2"></span>
                        <span className="item-3"></span>
                        <span className="item-4"></span>
                        <img loading="lazy" src="/images/item/unlock-1.png" className="lazyload" alt="" />
                    </div>
                </div>
            </section> */}
            {/* /section-unlock */}

            {/* section-faqs */}
            <FaqsSection />
            {/* /section-faqs */}

            {/* section-marquee */}
            <CtaMarqueeSection />
            {/* /section-marquee */}

            {/* footer */}
            <footer>
                <div className="container">
                    <div className="line-row"></div>
                    <div className="text">One time payment - Free lifetime update</div>
                    <div className="text-1">Purchase Vineta today and start to creating your beautiful <br /> business website.</div>
                    <a href="https://themeforest.net/item/vineta-clean-responsive-shopify-theme/58776351" className="tf-btn-4 light_skew_hover type-white wow fadeInUp btn-buy" target="_blank" data-wow-delay="0.2s">
                        Purchase Now
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0002 2.58008C7.61638 2.58008 3.70534 5.73104 2.7883 10.0218C2.33014 12.1657 2.63878 14.4454 3.66094 16.3854C4.6447 18.2523 6.2575 19.7612 8.1871 20.6163C10.1942 21.506 12.4985 21.661 14.6081 21.0543C16.6433 20.4692 18.4478 19.185 19.6764 17.461C22.2451 13.857 21.9017 8.7944 18.8796 5.56496C17.1084 3.67232 14.5927 2.58008 12.0002 2.58008ZM16.5192 12.5034L13.9512 15.1333C13.301 15.7993 12.2733 14.7903 12.9209 14.1274L14.2166 12.8005H8.07598C7.6399 12.8005 7.27606 12.4364 7.27606 12.0006C7.27606 11.5647 7.64014 11.2006 8.07598 11.2006H14.1859L12.8645 9.87944C12.2078 9.2228 13.2259 8.20448 13.8825 8.86112L16.5132 11.4915C16.7921 11.7702 16.7947 12.2214 16.5192 12.5034Z" fill="black"/>
                        </svg>
                    </a>
                    <div className="line-row1"></div>
                    <div className="copyright">Copyright © <a className="text-white" href="https://themeforest.net/item/vineta-clean-responsive-shopify-theme/58776351" target="_blank">Vineta</a> All Right Reverved. Powered by <a className="text-white" href="https://help.gravio.ai/" target="_blank">Gravio</a>.</div>
                </div>
            </footer>
            {/* /footer */}

        </div>
        {/* /#page */}

    </div>
    {/* /#wrapper */}
    <div id="sticky-banner" className="kxti">
        <div className="banner-wrap">
            <button className="close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
          </button>
            <div className="text-wrap eff">
                <p>Enjoy Shopify 3-day free trial. Then get your first month for $1. <a href="https://www.shopify.com/free-trial" target="_blank"><span className="under-line">Try Now</span><svg width="13" height="13" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></a>                    </p>
            </div>
        </div>
    </div>

    <a id="scroll-top" className="button-go">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_18482_1195)">
            <path d="M3 11.25L12 2.25L21 11.25H16.5V19.5C16.5 19.6989 16.421 19.8897 16.2803 20.0303C16.1397 20.171 15.9489 20.25 15.75 20.25H8.25C8.05109 20.25 7.86032 20.171 7.71967 20.0303C7.57902 19.8897 7.5 19.6989 7.5 19.5V11.25H3Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_18482_1195">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    </a>

    {/* Demo Popup */}
    <div className="pass_pop" id="demoPopup">
        <div className="overlay"></div>
        <div className="wrap">
            <button className="close" id="closePopup">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                </svg>
            </button>
            <div className="content text-start">
                <p className="heading">Please enter store password <span className="linear">"1"</span><br />to view live demo</p>
                <a href="#" id="popupDemoLink" target="_blank" className="view_more hdt-btn-hover-icon">View now <svg className="hdt-icon" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.14084 8.48218L0.279297 7.62064L6.18699 1.71295H0.894682V0.482178H8.2793V7.86679H7.04853V2.57449L1.14084 8.48218Z" fill="white"></path>
                </svg></a>
                <p className="sub">WE APOLOGIZE FOR THIS INCONVENIENCE!</p>
            </div>
        </div>
    </div>

    {/* Javascript */}
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script src="/js/jquery.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/plugin.js"></script>
    <script src="/js/swiper.js"></script>
    <script src="/js/countto.js"></script>
    <script src="/js/lazysize.min.js"></script>
    <script src="/js/jquery.isotope.min.js"></script>
    <script src="/js/infinityslide.js"></script>
    <script src="/js/matter.min.js"></script>
    <script src="/js/matter.js"></script>
    <script src="/js/textanimation.js"></script>
    <script src="/js/main.js"></script>



    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"0c75da8b3df243609ed5ea815ce9f783","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}'
        crossOrigin="anonymous"></script>

    </>
  );
}
