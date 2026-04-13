const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

// Static SVG price chart — Jan to Dec, area + trend line
const PriceChart = () => {
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  // price index values 0–1200, mapped to chart height 280px
  const prices = [900, 870, 845, 840, 840, 845, 855, 865, 870, 875, 885, 920];
  const W = 520, H = 240, padL = 40, padR = 20, padT = 16, padB = 32;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxP = 1000, minP = 800;

  const px = (i: number) => padL + (i / (months.length - 1)) * chartW;
  const py = (v: number) => padT + chartH - ((v - minP) / (maxP - minP)) * chartH;

  const linePath = prices.map((v, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
  const areaPath = linePath + ` L${px(months.length - 1).toFixed(1)},${(padT + chartH).toFixed(1)} L${padL},${(padT + chartH).toFixed(1)} Z`;

  // Trend line: last 3 points extrapolated upward
  const trendStart = { x: px(9), y: py(875) };
  const trendEnd = { x: px(11), y: py(940) };

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: "block" }}>
      <defs>
        <linearGradient id="pred-area-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3BDEB9" stopOpacity="0.18" />
          <stop offset="95%" stopColor="#3BDEB9" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient id="pred-line-grad" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#3BDEB9" />
          <stop offset="1" stopColor="#CCFF9B" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
        <line key={i} x1={padL} x2={W - padR} y1={padT + chartH * t} y2={padT + chartH * t}
          stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
      ))}
      {/* Area */}
      <path d={areaPath} fill="url(#pred-area-grad)" />
      {/* Line */}
      <path d={linePath} fill="none" stroke="url(#pred-line-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Trend line (red — price going up) */}
      <line x1={trendStart.x} y1={trendStart.y} x2={trendEnd.x} y2={trendEnd.y}
        stroke="#EF4444" strokeWidth="2.5" strokeDasharray="6 3" strokeLinecap="round" />
      {/* Dots on main line */}
      {prices.map((v, i) => (
        <circle key={i} cx={px(i)} cy={py(v)} r="3" fill="#1a1a1a" stroke="#3BDEB9" strokeWidth="2" />
      ))}
      {/* X labels */}
      {months.map((m, i) => (
        <text key={i} x={px(i)} y={H - 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.35)">{m}</text>
      ))}
      {/* Y labels */}
      {[800, 900, 1000].map((v, i) => (
        <text key={i} x={padL - 6} y={py(v) + 4} textAnchor="end" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.35)">{v}</text>
      ))}
    </svg>
  );
};

export default function PredictionSection() {
  return (
    <section style={{ padding: "80px 0 80px", position: "relative", overflow: "hidden" }}>
      <style>{`
        @media (max-width: 767px) {
          .pred-heading {
            margin-bottom: 34px !important;
          }
          .pred-right-col {
            gap: 12px !important;
          }
          .pred-alert {
            padding: 14px !important;
            border-radius: 18px !important;
            align-items: flex-start !important;
            gap: 10px !important;
            flex-wrap: wrap;
          }
          .pred-alert-icon {
            width: 44px !important;
            height: 44px !important;
            border-radius: 12px !important;
          }
          .pred-alert-title {
            font-size: 14px !important;
          }
          .pred-alert-copy {
            font-size: 12px !important;
            line-height: 1.45 !important;
          }
          .pred-alert-badge {
            margin-left: 0 !important;
          }
          .pred-chart-card {
            border-radius: 20px !important;
            padding: 16px 14px 14px !important;
          }
          .pred-chart-head {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 8px !important;
            margin-bottom: 12px !important;
          }
          .pred-chart-title {
            font-size: 12px !important;
          }
          .pred-chart-legend {
            gap: 10px !important;
            flex-wrap: wrap;
          }
          .pred-chart-wrap {
            height: 260px !important;
          }
        }
      `}</style>
      <div className="container">

        {/* Heading */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "56px", textAlign: "center" }} className="pred-heading wow fadeInUp" data-wow-delay="0s">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(59,222,185,0.08)", border: "1px solid rgba(59,222,185,0.2)", borderRadius: "999px", padding: "6px 16px", marginBottom: "8px" }}>
            <AlertCircleIcon />
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", background: "linear-gradient(90deg,#3BDEB9,#CCFF9B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              IA Prédictive
            </span>
          </div>
          <div className="heading fw-6 h1" style={{ margin: 0 }}>
            <span className="fw-4 fst-italic font-playfair-display animationtext letters rotate-3">
              <span className="cd-words-wrapper">
                <span className="item-text is-visible"><i className="in">A</i><i className="in">l</i><i className="in">e</i><i className="in">r</i><i className="in">t</i><i className="in">e</i></span>
                <span className="item-text is-hidden"><i className="out">A</i><i className="out">l</i><i className="out">e</i><i className="out">r</i><i className="out">t</i><i className="out">e</i></span>
                <span className="item-text is-hidden"><i className="in">A</i><i className="in">l</i><i className="in">e</i><i className="in">r</i><i className="in">t</i><i className="in">e</i></span>
              </span>
            </span>
            {" "}prédictive de variation de prix
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: 0, fontSize: "15px", fontWeight: 500, lineHeight: 1.6 }}>
            Notre IA prédit les hausses de prix imminentes. Achetez maintenant avant que les prix augmentent.
          </p>
        </div>

        {/* Two columns */}
        <div className="row g-4 align-items-stretch">

          {/* LEFT — Product card */}
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
              {/* Product image */}
              <div style={{
                background: "#fff",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                aspectRatio: "1/1",
                marginBottom: "24px",
                overflow: "hidden",
              }}>
                <img
                  src="https://spacenet.tn/335959-large_default/imprimante-hp-laserjet-tank-2r3e3a-2502dw-printer-wi-fi-gris.jpg"
                  alt="Imprimante HP LaserJet Tank 2502DW"
                  style={{ maxHeight: "200px", maxWidth: "100%", objectFit: "contain" }}
                  loading="lazy"
                />
              </div>

              {/* Product info */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>
                    Imprimante HP LaserJet Tank 2502DW WI-FI
                  </div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "2px", marginTop: "4px" }}>HP</div>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "4px",
                    background: "rgba(34,197,94,0.12)", color: "#22C55E",
                    padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 800,
                  }}>
                    ✓ En stock
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "2px", color: "#F59E0B" }}>
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", marginLeft: "4px" }}>
                      <span style={{ color: "#fff" }}>4.3</span> (11.6k)
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Imprimante laser monochrome wi-fi compacte avec réservoir intégré, idéale pour un usage intensif.
                </p>
              </div>

              {/* Price + CTA */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "24px", paddingTop: "20px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", justifyContent: "flex-end", marginBottom: "16px" }}>
                  <span style={{ fontSize: "28px", fontWeight: 900, color: "#EF4444" }}>899.000</span>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}>952.000</span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>TND</span>
                </div>
                <a href="https://www.spacenet.tn" target="_blank" className="tf-btn-3 light_skew_hover" style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", padding: "14px 20px", borderRadius: "999px",
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: "13px",
                }}>
                  <span>Voir l&apos;offre</span>
                  <span style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "linear-gradient(90deg,#3BDEB9,#CCFF9B)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#111",
                    flexShrink: 0,
                  }}>
                    <TrendingUpIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Alert card + Chart */}
          <div className="pred-right-col col-lg-7 wow fadeInUp" data-wow-delay="0.2s" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Alert banner */}
            <div className="pred-alert" style={{
              background: "rgba(239,68,68,0.06)",
              border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: "24px",
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}>
              <div className="pred-alert-icon" style={{
                width: "56px", height: "56px", borderRadius: "18px", flexShrink: 0,
                background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444",
              }}>
                <AlertCircleIcon />
              </div>
              <div>
                <div className="pred-alert-title" style={{ fontSize: "17px", fontWeight: 900, color: "#fff" }}>Alerte de Prix</div>
                <div className="pred-alert-copy" style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>
                  Soyez notifié quand le prix baisse — notre IA surveille 24h/24
                </div>
              </div>
              <div className="pred-alert-badge" style={{ marginLeft: "auto", flexShrink: 0 }}>
                <span className="pred-alert-copy" style={{
                  background: "linear-gradient(90deg,#3BDEB9,#CCFF9B)",
                  color: "#111", borderRadius: "999px", padding: "6px 16px",
                  fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px",
                  whiteSpace: "nowrap",
                }}>
                  ↑ +8.4% prévu
                </span>
              </div>
            </div>

            {/* Chart card */}
            <div className="pred-chart-card" style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "28px 24px 20px",
              flex: 1,
            }}>
              <div className="pred-chart-head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <div className="pred-chart-title" style={{ fontSize: "14px", fontWeight: 800, color: "#fff" }}>Historique des prix — HP LaserJet 2502DW</div>
                <div className="pred-chart-legend" style={{ display: "flex", gap: "16px" }}>
                  {[
                    { color: "#3BDEB9", label: "Prix historique" },
                    { color: "#EF4444", label: "Prédiction IA" },
                  ].map(({ color, label }) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} />
                      <span style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pred-chart-wrap" style={{ width: "100%", height: "360px" }}>
                <PriceChart />
              </div>

              <div style={{ textAlign: "center", marginTop: "8px" }}>
                <span style={{ fontSize: "10px", fontWeight: 800, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "2px" }}>Mois</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
