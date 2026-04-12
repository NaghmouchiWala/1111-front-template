export default function Header() {
  return (
    <header id="header" className="main-header header header-fixed style-absolute">
      {/* Header Lower */}
      <div className="header-lower">
        <div className="inner-container flex justify-space align-center">
          {/* Logo Box */}
          <div className="logo-box flex" style={{ marginLeft: "90px" }}>
            <div className="logo">
              <a href="#" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "4rem",
                  fontWeight: 700,
                  fontStyle: "italic",
                  letterSpacing: "-2px",
                  background: "linear-gradient(100deg, #3BDEB9 0%, #77E590 55%, #CCFF9B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}>1111</span>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  fontStyle: "italic",
                  letterSpacing: "0.06em",
                  color: "#0c121c",
                  background: "linear-gradient(100deg, #3BDEB9, #CCFF9B)",
                  borderRadius: "5px",
                  padding: "2px 6px",
                  lineHeight: 1.4,
                  marginBottom: "2px",
                  textTransform: "uppercase",
                }}>.tn</span>
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
            <a href="#" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span style={{
                fontFamily: "'Inter', 'Montserrat', system-ui, sans-serif",
                fontSize: "2rem",
                fontWeight: 900,
                letterSpacing: "-4px",
                background: "linear-gradient(100deg, #3BDEB9 0%, #77E590 55%, #CCFF9B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
              }}>1111</span>
              <span style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#0c121c",
                background: "linear-gradient(100deg, #3BDEB9, #CCFF9B)",
                borderRadius: "5px",
                padding: "2px 6px",
                lineHeight: 1.4,
                marginBottom: "2px",
                textTransform: "uppercase",
              }}>.tn</span>
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
