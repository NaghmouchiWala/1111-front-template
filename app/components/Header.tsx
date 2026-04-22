import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header id="header" className="main-header header header-fixed style-absolute">
      {/* Header Lower */}
      <div className="header-lower">
        <div className="inner-container flex justify-space align-center">
          {/* Logo Box */}
          <div className="logo-box flex" style={{ marginLeft: "90px" }}>
            <div className="logo">
              <a href="#" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "2px" }}>
                <span style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "2.8rem",
                  fontWeight: 900,
                  letterSpacing: "-3px",
                  color: "#ffffff",
                  lineHeight: 1,
                }}>1111</span>
                <span style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  letterSpacing: "0",
                  color: "#3BDEB9",
                  lineHeight: 1,
                  marginTop: "2px",
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
                  <li><a href="/connexion">Connexion</a></li>
                </ul>
              </div>
            </nav>
            {/* /Main Menu */}
          </div>

          {/* Header Right */}
          <div className="header-right">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <ThemeToggle />
              <div className="flat-bt-top sc-btn-top d-lg-flex d-none">
                <a href="/inscription" className="tf-btn-1 light_skew_hover">
                  <div>Inscription</div>
                </a>
              </div>
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
            <a href="#" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "2px" }}>
              <span style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "2rem",
                fontWeight: 900,
                letterSpacing: "-3px",
                color: "#ffffff",
                lineHeight: 1,
              }}>1111</span>
              <span style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#3BDEB9",
                lineHeight: 1,
                marginTop: "2px",
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
                  <li><a href="/connexion">Connexion</a></li>
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
