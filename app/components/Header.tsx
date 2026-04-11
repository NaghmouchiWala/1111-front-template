export default function Header() {
  return (
    <header id="header" className="main-header header header-fixed style-absolute">
      {/* Header Lower */}
      <div className="header-lower">
        <div className="inner-container flex justify-space align-center">
          {/* Logo Box */}
          <div className="logo-box flex">
            <div className="logo">
              <a href="https://themeforest.net/item/vineta-clean-responsive-shopify-theme/58776351">
                <img loading="lazy" src="/images/logo/logo.svg" alt="Vineta's web development project screenshot" />
              </a>
            </div>
          </div>
          {/* /Logo Box */}

          <div className="nav-outer flex align-center">
            {/* Main Menu */}
            <nav className="main-menu show navbar-expand-md">
              <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navigation">
                  <li><a className="sticky-nav" href="#demo">Demos</a></li>
                  <li><a className="sticky-nav" href="#features">Features <span className="label">HOT</span></a></li>
                  <li><a className="sticky-nav" href="#performance">Performance</a></li>
                  <li><a target="_blank" href="mailto:gravio.ai@gmail.com">Get Support</a></li>
                  <li><a target="_blank" href="https://help.gravio.ai/">Documention</a></li>
                </ul>
              </div>
            </nav>
            {/* /Main Menu */}
          </div>

          {/* Header Right */}
          <div className="header-right">
            <div className="flat-bt-top sc-btn-top d-lg-flex d-none">
              <a href="https://themeforest.net/item/vineta-clean-responsive-shopify-theme/58776351" target="_blank" className="tf-btn-1 light_skew_hover">
                <div>Purchase Now</div>
              </a>
            </div>
            <div className="mobile-nav-toggler mobile-button"><span></span></div>
          </div>
          {/* /Header Right */}
        </div>
      </div>
      {/* End Header Lower */}

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="#"><img loading="lazy" src="/images/logo/logo.svg" alt="Vineta's web development project screenshot" /></a>
            <div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>
          </div>
          <div className="bottom-canvas">
            <div className="menu-outer">
              <div className="navbar-collapse">
                <ul className="navigation">
                  <li><a className="sticky-nav" href="#demo">Demos</a></li>
                  <li><a className="sticky-nav" href="#features">Features <span className="label">HOT</span></a></li>
                  <li><a className="sticky-nav" href="#performance">Performance</a></li>
                  <li><a target="_blank" href="mailto:gravio.ai@gmail.com">Get Support</a></li>
                  <li><a target="_blank" href="https://help.gravio.ai/">Documention</a></li>
                </ul>
              </div>
            </div>
            <a href="https://themeforest.net/item/vineta-clean-responsive-shopify-theme/58776351" target="_blank" className="tf-btn-1 light_skew_hover">
              <div>Purchase Now</div>
            </a>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
}
