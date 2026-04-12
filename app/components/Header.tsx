export default function Header() {
  return (
    <header id="header" className="main-header header header-fixed style-absolute">
      {/* Header Lower */}
      <div className="header-lower">
        <div className="inner-container flex justify-space align-center">
          {/* Logo Box */}
          <div className="logo-box flex">
            <div className="logo">
              <a href="#" style={{ textDecoration: "none" }}>
                <span style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "2.1rem",
                  fontWeight: 700,
                  letterSpacing: "-2px",
                  background: "linear-gradient(90deg, #3BDEB9 0%, #77E590 50%, #CCFF9B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}>1111<span style={{ fontWeight: 300, letterSpacing: "-1px", fontSize: "1.8rem" }}>.tn</span></span>
              </a>
            </div>
          </div>
          {/* /Logo Box */}

          <div className="nav-outer flex align-center">
            {/* Main Menu */}
            <nav className="main-menu show navbar-expand-md">
              <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navigation">
                  <li><a className="sticky-nav" href="#supermarche">Supermarché</a></li>
                  <li><a className="sticky-nav" href="#parapharmacie">Parapharmacie <span className="label">NEW</span></a></li>
                  <li><a className="sticky-nav" href="#tarifs">Tarifs</a></li>
                  <li><a className="sticky-nav" href="#features">Solutions</a></li>
                  <li><a href="#">Connexion</a></li>
                </ul>
              </div>
            </nav>
            {/* /Main Menu */}
          </div>

          {/* Header Right */}
          <div className="header-right">
            <div className="flat-bt-top sc-btn-top d-lg-flex d-none">
              <a href="#" className="tf-btn-1 light_skew_hover">
                <div>Inscription</div>
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
            <a href="#" style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "1.65rem",
                fontWeight: 700,
                letterSpacing: "-2px",
                background: "linear-gradient(90deg, #3BDEB9 0%, #77E590 50%, #CCFF9B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}>1111<span style={{ fontWeight: 300, letterSpacing: "-1px", fontSize: "1.4rem" }}>.tn</span></span>
            </a>
            <div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>
          </div>
          <div className="bottom-canvas">
            <div className="menu-outer">
              <div className="navbar-collapse">
                <ul className="navigation">
                  <li><a className="sticky-nav" href="#supermarche">Supermarché</a></li>
                  <li><a className="sticky-nav" href="#parapharmacie">Parapharmacie</a></li>
                  <li><a className="sticky-nav" href="#tarifs">Tarifs</a></li>
                  <li><a className="sticky-nav" href="#features">Solutions</a></li>
                  <li><a href="#">Connexion</a></li>
                </ul>
              </div>
            </div>
            <a href="#" className="tf-btn-1 light_skew_hover">
              <div>Inscription</div>
            </a>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
}
