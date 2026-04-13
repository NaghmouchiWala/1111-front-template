"use client";
import { useState } from "react";

/* ─── Dark theme tokens (matches site hero / TrendingSection) ───────────── */
const D = {
  bg:           "#050f0a",
  bgAlt:        "rgba(10,20,15,0.97)",
  card:         "rgba(10,20,15,0.92)",
  cardBorder:   "rgba(59,222,185,0.15)",
  cardBorderHov:"rgba(59,222,185,0.4)",
  sidebar:      "rgba(8,18,12,0.95)",
  sidebarBorder:"rgba(59,222,185,0.12)",
  teal:         "#3BDEB9",
  grad:         "linear-gradient(90deg,#3BDEB9 0%,#77E590 55%,#CCFF9B 100%)",
  gradBtn:      "linear-gradient(90deg,#3BDEB9,#77E590)",
  text:         "#ffffff",
  subText:      "rgba(255,255,255,0.7)",
  muted:        "rgba(255,255,255,0.38)",
  rowBest:      "rgba(59,222,185,0.1)",
  rowBestBorder:"rgba(59,222,185,0.35)",
  rowOther:     "rgba(255,255,255,0.04)",
  priceBest:    "#3BDEB9",
  priceOrig:    "rgba(255,255,255,0.35)",
  orange:       "#f97316",
  inputBg:      "rgba(255,255,255,0.05)",
  inputBorder:  "rgba(59,222,185,0.2)",
  pill:         "rgba(59,222,185,0.12)",
  pillBorder:   "rgba(59,222,185,0.3)",
};

const STORE_DOT: Record<string,string> = {
  Mytek:"#ef4444", Spacenet:"#2563eb", Tunisianet:"#f97316",
  Jumbo:"#9ca3af", Technopro:"#3b82f6", Zoom:"#8b5cf6",
};

/* ─── Types ─────────────────────────────────────────────────────────────── */
type StorePrice = { name:string; price:string; best:boolean };
type Product    = { id:string; brand:string; name:string; bestPrice:string; originalPrice?:string; image:string; inStock:boolean; stores:StorePrice[]; category:string };

/* ─── Categories ────────────────────────────────────────────────────────── */
const CATS = ["Tous","Imprimante","PC Portable","PC de Bureau","Réfrigérateur","Machine à Laver","Lave-Vaisselle","TV & Écran"];

/* ─── Products ──────────────────────────────────────────────────────────── */
const PRODUCTS: Product[] = [
  { id:"p1",  brand:"HP",       name:"Imprimante HP M507DN LaserJet Entreprise",                      bestPrice:"2 019 DT", originalPrice:"2 999 DT", image:"https://www.mytek.tn/media/catalog/product/i/m/imprimante-laserjet-hp-entreprise-m507dn-856329_1.gif",                                                          inStock:false, category:"Imprimante",    stores:[{name:"Mytek",price:"2 019 DT",best:true},{name:"Spacenet",price:"2 265 DT",best:false}] },
  { id:"p2",  brand:"HP",       name:"Imprimante HP Smart Tank 520 Tout-en-Un Blanc",                 bestPrice:"399 DT",   originalPrice:"559 DT",   image:"https://spacenet.tn/312816-large_default/imprimante-tout-en-un-hp-smart-tank-520-blanc.jpg",                                                                  inStock:false, category:"Imprimante",    stores:[{name:"Spacenet",price:"399 DT",best:true},{name:"Jumbo",price:"399 DT",best:true}] },
  { id:"p3",  brand:"HP",       name:"Imprimante HP Smart Tank 580 Réservoir 3en1 Couleur WIFI",      bestPrice:"529 DT",   originalPrice:"599 DT",   image:"https://www.mytek.tn/media/catalog/product/i/m/imprimante-a-reservoir-integre-hp-smart-tank-580-3en1-couleur-wifi-1.png",                                     inStock:true,  category:"Imprimante",    stores:[{name:"Mytek",price:"529 DT",best:true},{name:"Spacenet",price:"529 DT",best:true},{name:"Tunisianet",price:"529 DT",best:true}] },
  { id:"p4",  brand:"KYOCERA",  name:"Imprimante Couleur Multifonction 4en1 ECOSYS 2554ci A3",        bestPrice:"6 359 DT",                           image:"https://www.tunisianet.com.tn/282630-large/imprimante-couleur-multifonction-4en1-kyocera-ecosys-2554ci-a3.jpg",                                              inStock:true,  category:"Imprimante",    stores:[{name:"Jumbo",price:"6 359 DT",best:true},{name:"Tunisianet",price:"7 345 DT",best:false}] },
  { id:"p5",  brand:"HP",       name:"Imprimante HP LaserJet Pro 4103dw 3En1 Monochrome Wifi",        bestPrice:"1 099 DT", originalPrice:"1 200 DT", image:"https://spacenet.tn/141280-large_default/imprimante-multifonction-hp-laserjet-pro-4103dw-3-en1-monochrome-wifi-2z627a.jpg",                                   inStock:true,  category:"Imprimante",    stores:[{name:"Spacenet",price:"1 099 DT",best:true},{name:"Jumbo",price:"1 099 DT",best:true}] },
  { id:"p6",  brand:"HP",       name:"Imprimante HP LaserJet Tank 2602dn Monochrome Gris",            bestPrice:"1 129 DT", originalPrice:"1 267 DT", image:"https://spacenet.tn/171626-large_default/imprimante-multifonction-hp-laserjet-tank-2r3f0a-2602dn-printer-gris.jpg",                                          inStock:true,  category:"Imprimante",    stores:[{name:"Spacenet",price:"1 129 DT",best:true},{name:"Tunisianet",price:"1 129 DT",best:true},{name:"Technopro",price:"1 149 DT",best:false}] },
  { id:"p7",  brand:"HP",       name:"Imprimante Monochrome HP LaserJet Pro 4003DN Réseau",           bestPrice:"699 DT",   originalPrice:"735 DT",   image:"https://www.mytek.tn/media/catalog/product/i/m/imprimante-hp-laserjet-pro-4003dn-reseau-monochrome-2z609a-012_1.jpg",                                        inStock:true,  category:"Imprimante",    stores:[{name:"Mytek",price:"699 DT",best:true},{name:"Spacenet",price:"699 DT",best:true},{name:"Tunisianet",price:"699 DT",best:true}] },
  { id:"p8",  brand:"BROTHER",  name:"Imprimante Brother MFC-L2800DW Multifonction Laser Mono Wifi",  bestPrice:"699 DT",   originalPrice:"779 DT",   image:"https://www.mytek.tn/media/catalog/product/b/r/brother-mfc-l2800dw.jpg",                                                                                      inStock:true,  category:"Imprimante",    stores:[{name:"Mytek",price:"699 DT",best:true},{name:"Tunisianet",price:"749 DT",best:false}] },
  { id:"l1",  brand:"LENOVO",   name:"PC Portable Lenovo IdeaPad 3 15IAU7 Core i5 8Go 512Go SSD",    bestPrice:"1 399 DT", originalPrice:"1 549 DT", image:"https://www.mytek.tn/media/catalog/product/l/e/lenovo-ideapad-3-15iau7.jpg",                                                                                   inStock:true,  category:"PC Portable",   stores:[{name:"Mytek",price:"1 399 DT",best:true},{name:"Tunisianet",price:"1 449 DT",best:false}] },
  { id:"l2",  brand:"HP",       name:"PC Portable HP 15s-fq5040nk Core i7 16Go 512Go SSD",           bestPrice:"1 849 DT",                           image:"https://www.mytek.tn/media/catalog/product/h/p/hp-15s-fq5040nk.jpg",                                                                                          inStock:true,  category:"PC Portable",   stores:[{name:"Spacenet",price:"1 849 DT",best:true},{name:"Jumbo",price:"1 899 DT",best:false}] },
  { id:"l3",  brand:"DELL",     name:"PC Portable Dell Inspiron 15 3525 Ryzen 5 8Go 512Go SSD",      bestPrice:"1 599 DT", originalPrice:"1 699 DT", image:"https://www.mytek.tn/media/catalog/product/d/e/dell-inspiron-15-3525.jpg",                                                                                    inStock:true,  category:"PC Portable",   stores:[{name:"Tunisianet",price:"1 599 DT",best:true},{name:"Mytek",price:"1 649 DT",best:false}] },
  { id:"d1",  brand:"DELL",     name:"PC Bureau Dell OptiPlex 3000 Core i5-12500T 8Go 256Go SSD",    bestPrice:"1 399 DT", originalPrice:"1 499 DT", image:"https://www.mytek.tn/media/catalog/product/d/e/dell-optiplex-3000-sff-i5-8g-256ssd.jpg",                                                                      inStock:true,  category:"PC de Bureau",  stores:[{name:"Mytek",price:"1 399 DT",best:true},{name:"Spacenet",price:"1 450 DT",best:false}] },
  { id:"r1",  brand:"SAMSUNG",  name:"Réfrigérateur Samsung Twin Cooling Plus 385L No Frost Inox",   bestPrice:"2 199 DT", originalPrice:"2 399 DT", image:"https://www.mytek.tn/media/catalog/product/s/a/samsung-refrigerateur.jpg",                                                                                     inStock:true,  category:"Réfrigérateur", stores:[{name:"Mytek",price:"2 199 DT",best:true},{name:"Tunisianet",price:"2 249 DT",best:false}] },
  { id:"m1",  brand:"SAMSUNG",  name:"Machine à Laver Samsung EcoBubble 8Kg 1400 Tr/min Blanc",      bestPrice:"1 299 DT", originalPrice:"1 449 DT", image:"https://www.mytek.tn/media/catalog/product/s/a/samsung-machine-laver.jpg",                                                                                    inStock:true,  category:"Machine à Laver",stores:[{name:"Mytek",price:"1 299 DT",best:true},{name:"Tunisianet",price:"1 349 DT",best:false}] },
  { id:"v1",  brand:"BOSCH",    name:"Lave-Vaisselle Bosch Serie 4 12 Couverts 60cm Inox",           bestPrice:"1 749 DT", originalPrice:"1 899 DT", image:"https://www.mytek.tn/media/catalog/product/b/o/bosch-smu4hvs31e.jpg",                                                                                         inStock:true,  category:"Lave-Vaisselle",stores:[{name:"Mytek",price:"1 749 DT",best:true},{name:"Jumbo",price:"1 799 DT",best:false}] },
];

const PRICE_RANGES = [
  { label:"Tous les prix",    min:0,    max:Infinity },
  { label:"Moins de 500 DT", min:0,    max:500 },
  { label:"500 – 1 000 DT",  min:500,  max:1000 },
  { label:"1 000 – 2 000 DT",min:1000, max:2000 },
  { label:"2 000 – 5 000 DT",min:2000, max:5000 },
  { label:"Plus de 5 000 DT",min:5000, max:Infinity },
];

const STORES = ["Tous","Mytek","Spacenet","Tunisianet","Jumbo","Technopro","Zoom"];
const SORTS  = ["Prix croissant","Prix décroissant","Meilleures économies"];

/* ─── Helpers ───────────────────────────────────────────────────────────── */
function numericPrice(s: string) {
  return parseFloat(s.replace(/\s/g,"").replace("DT","")) || 0;
}

/* ─── Stat card ─────────────────────────────────────────────────────────── */
function StatCard({ value, label }: { value:string; label:string }) {
  return (
    <div style={{ background:D.card, border:`1px solid ${D.cardBorder}`, borderRadius:16, padding:"18px 24px", textAlign:"center", backdropFilter:"blur(16px)" }}>
      <div style={{ fontSize:28, fontWeight:900, background:D.grad, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1 }}>{value}</div>
      <div style={{ fontSize:12, color:D.muted, marginTop:6, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em" }}>{label}</div>
    </div>
  );
}

/* ─── Product card ──────────────────────────────────────────────────────── */
function ProductCard({ p }: { p: Product }) {
  const savings = p.originalPrice
    ? Math.round((1 - numericPrice(p.bestPrice) / numericPrice(p.originalPrice)) * 100)
    : 0;

  return (
    <div className="plx-card" style={{
      display:"flex", flexDirection:"column",
      background:D.card, border:`1px solid ${D.cardBorder}`,
      borderRadius:18, padding:14, backdropFilter:"blur(16px)",
      boxShadow:"0 4px 24px rgba(0,0,0,0.35)", position:"relative", overflow:"hidden",
    }}>
      {/* top glow line */}
      <div style={{ position:"absolute", top:0, left:"10%", right:"10%", height:1, background:"linear-gradient(90deg,transparent,rgba(59,222,185,0.5),transparent)" }} />

      {/* savings badge */}
      {savings > 0 && (
        <div style={{ position:"absolute", top:10, left:10, zIndex:2, background:"rgba(249,115,22,0.15)", border:"1px solid rgba(249,115,22,0.4)", borderRadius:999, padding:"2px 8px", fontSize:10, fontWeight:800, color:D.orange }}>
          -{savings}%
        </div>
      )}

      {/* stock badge */}
      <div style={{ position:"absolute", top:10, right:10, zIndex:2, borderRadius:999, padding:"2px 8px", fontSize:9, fontWeight:700, background: p.inStock ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)", color: p.inStock ? "#4ade80" : "#f87171", border: `1px solid ${p.inStock ? "rgba(74,222,128,0.3)" : "rgba(248,113,113,0.3)"}` }}>
        {p.inStock ? "En stock" : "Épuisé"}
      </div>

      {/* image */}
      <a href={`/products/${p.id}`} style={{ display:"block", position:"relative", height:130, borderRadius:12, overflow:"hidden", background:"rgba(255,255,255,0.04)", marginBottom:12, flexShrink:0, marginTop:4 }}>
        <img src={p.image} alt={p.name} loading="lazy"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"contain", padding:10 }}
          onError={e => { (e.target as HTMLImageElement).style.opacity="0"; }}
        />
      </a>

      <div style={{ display:"flex", flexDirection:"column", gap:8, flex:1 }}>
        <span style={{ fontSize:10, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.12em", color:D.teal }}>{p.brand}</span>

        <a href={`/products/${p.id}`} style={{ fontSize:13, fontWeight:600, lineHeight:1.4, color:D.text, textDecoration:"none", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden", minHeight:36 }}>{p.name}</a>

        {/* Price */}
        <div style={{ display:"flex", alignItems:"baseline", gap:8 }}>
          <span style={{ fontSize:18, fontWeight:900, color:D.orange }}>{p.bestPrice}</span>
          {p.originalPrice && <span style={{ fontSize:11, color:D.priceOrig, textDecoration:"line-through" }}>{p.originalPrice}</span>}
        </div>

        {/* Store rows */}
        <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
          <span style={{ fontSize:9, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.12em", color:D.muted }}>Comparer les prix</span>
          {p.stores.map((s,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", borderRadius:8, padding:"5px 10px", background: i===0 ? D.rowBest : D.rowOther, border:`1px solid ${i===0 ? D.rowBestBorder : "rgba(255,255,255,0.05)"}` }}>
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background: STORE_DOT[s.name] ?? "#9ca3af", flexShrink:0 }} />
                <span style={{ fontSize:11, color: i===0 ? D.text : D.subText, fontWeight:500 }}>{s.name}</span>
              </div>
              <span style={{ fontSize:12, fontWeight:800, color: i===0 ? D.priceBest : "rgba(255,255,255,0.7)" }}>{s.price}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href={`/products/${p.id}`} style={{ marginTop:"auto", display:"flex", alignItems:"center", justifyContent:"center", gap:6, borderRadius:999, padding:"9px 0", fontSize:12, fontWeight:700, color:"#0a140f", background:D.gradBtn, textDecoration:"none" }}>
          Voir les offres
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  );
}

/* ─── Checkbox ──────────────────────────────────────────────────────────── */
function DarkCheckbox({ checked }: { checked?:boolean }) {
  return (
    <div style={{ width:16, height:16, borderRadius:4, border:`2px solid ${checked ? D.teal : "rgba(255,255,255,0.2)"}`, background: checked ? D.teal : "transparent", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"all 0.15s" }}>
      {checked && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0a140f" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
    </div>
  );
}

/* ─── Main ──────────────────────────────────────────────────────────────── */
export default function ProductListingSection() {
  const [activeCat,   setActiveCat]   = useState("Tous");
  const [activePrIdx, setActivePrIdx] = useState(0);
  const [activeStore, setActiveStore] = useState("Tous");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort,        setSort]        = useState(SORTS[0]);
  const [search,      setSearch]      = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* filter */
  let filtered = PRODUCTS.filter(p => {
    if (activeCat !== "Tous" && p.category !== activeCat) return false;
    const pr = PRICE_RANGES[activePrIdx];
    const price = numericPrice(p.bestPrice);
    if (price < pr.min || price > pr.max) return false;
    if (activeStore !== "Tous" && !p.stores.some(s => s.name === activeStore)) return false;
    if (inStockOnly && !p.inStock) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.brand.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  /* sort */
  filtered = [...filtered].sort((a, b) => {
    if (sort === SORTS[0]) return numericPrice(a.bestPrice) - numericPrice(b.bestPrice);
    if (sort === SORTS[1]) return numericPrice(b.bestPrice) - numericPrice(a.bestPrice);
    const savA = a.originalPrice ? numericPrice(a.originalPrice) - numericPrice(a.bestPrice) : 0;
    const savB = b.originalPrice ? numericPrice(b.originalPrice) - numericPrice(b.bestPrice) : 0;
    return savB - savA;
  });

  const Sidebar = () => (
    <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
      {/* Search */}
      <div>
        <label style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:D.muted, display:"block", marginBottom:10 }}>Recherche</label>
        <div style={{ position:"relative" }}>
          <svg style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={D.muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Marque, modèle…"
            style={{ width:"100%", padding:"9px 12px 9px 34px", background:D.inputBg, border:`1px solid ${D.inputBorder}`, borderRadius:10, color:D.text, fontSize:13, outline:"none", boxSizing:"border-box" }}
          />
        </div>
      </div>

      {/* Price */}
      <div>
        <label style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:D.muted, display:"block", marginBottom:10 }}>Prix</label>
        <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
          {PRICE_RANGES.map((r, i) => (
            <label key={r.label} onClick={() => setActivePrIdx(i)} style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", padding:"6px 8px", borderRadius:8, background: i===activePrIdx ? D.rowBest : "transparent", border:`1px solid ${i===activePrIdx ? D.rowBestBorder : "transparent"}`, transition:"all 0.15s" }}>
              <DarkCheckbox checked={i===activePrIdx} />
              <span style={{ fontSize:13, color: i===activePrIdx ? D.text : D.subText }}>{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Store */}
      <div>
        <label style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:D.muted, display:"block", marginBottom:10 }}>Enseigne</label>
        <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
          {STORES.map(s => (
            <label key={s} onClick={() => setActiveStore(s)} style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", padding:"6px 8px", borderRadius:8, background: s===activeStore ? D.rowBest : "transparent", border:`1px solid ${s===activeStore ? D.rowBestBorder : "transparent"}`, transition:"all 0.15s" }}>
              <DarkCheckbox checked={s===activeStore} />
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                {s !== "Tous" && <span style={{ width:7, height:7, borderRadius:"50%", background: STORE_DOT[s] ?? "#9ca3af" }} />}
                <span style={{ fontSize:13, color: s===activeStore ? D.text : D.subText }}>{s}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <label style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:D.muted, display:"block", marginBottom:10 }}>Disponibilité</label>
        <label onClick={() => setInStockOnly(v => !v)} style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", padding:"6px 8px", borderRadius:8, background: inStockOnly ? D.rowBest : "transparent", border:`1px solid ${inStockOnly ? D.rowBestBorder : "transparent"}`, transition:"all 0.15s" }}>
          <DarkCheckbox checked={inStockOnly} />
          <span style={{ fontSize:13, color: inStockOnly ? D.text : D.subText }}>En stock uniquement</span>
        </label>
      </div>

      {/* Reset */}
      <button onClick={() => { setActiveCat("Tous"); setActivePrIdx(0); setActiveStore("Tous"); setInStockOnly(false); setSearch(""); }}
        style={{ background:"none", border:`1px solid ${D.cardBorder}`, borderRadius:999, padding:"8px 0", fontSize:12, fontWeight:700, color:D.teal, cursor:"pointer", width:"100%", transition:"all 0.2s" }}>
        Réinitialiser les filtres
      </button>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:D.bg, color:D.text }}>
      <style>{`
        .plx-card:hover { box-shadow:0 8px 32px rgba(59,222,185,0.15) !important; border-color:rgba(59,222,185,0.4) !important; transform:translateY(-2px); transition:all 0.25s; }
        .plx-cat:hover  { border-color:rgba(59,222,185,0.4) !important; color:#fff !important; }
        input::placeholder { color:rgba(255,255,255,0.25); }
        input:focus { border-color:rgba(59,222,185,0.5) !important; }
        select { appearance:none; }
        ::-webkit-scrollbar { width:4px; } ::-webkit-scrollbar-track { background:transparent; } ::-webkit-scrollbar-thumb { background:rgba(59,222,185,0.3); border-radius:99px; }
        @media(min-width:1024px){ .plx-sidebar-wrap{ display:flex !important; } .plx-mobile-bar{ display:none !important; } }
        @media(max-width:767px){
          .plx-topbar{
            height:auto !important;
            min-height:64px;
            padding:10px 14px !important;
            display:grid !important;
            grid-template-columns:1fr auto;
            grid-template-areas:
              "logo back"
              "crumb crumb";
            row-gap:8px;
            column-gap:10px;
            align-items:center !important;
          }
          .plx-logo{ grid-area:logo; min-width:0; }
          .plx-crumb{
            grid-area:crumb;
            font-size:12px !important;
            white-space:nowrap;
            overflow-x:auto;
            padding-bottom:2px;
          }
          .plx-back{
            grid-area:back;
            padding:7px 12px !important;
            font-size:12px !important;
            gap:5px !important;
          }
          .plx-back-text{ display:none; }
        }
      `}</style>

      {/* ── Top nav bar ── */}
      <div style={{ position:"sticky", top:0, zIndex:50, background:"rgba(5,15,10,0.95)", backdropFilter:"blur(20px)", borderBottom:`1px solid ${D.cardBorder}` }}>
        <div className="plx-topbar" style={{ maxWidth:1280, margin:"0 auto", padding:"0 20px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          {/* Logo */}
          <a className="plx-logo" href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:4 }}>
            <span style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"2rem", fontWeight:700, fontStyle:"italic", letterSpacing:"-1.5px", background:D.grad, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1 }}>1111</span>
            <span style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:"0.6rem", fontWeight:700, fontStyle:"italic", color:"#0c121c", background:D.gradBtn, borderRadius:5, padding:"2px 5px", lineHeight:1.4, textTransform:"uppercase" }}>.tn</span>
          </a>

          {/* Breadcrumb */}
          <nav className="plx-crumb" style={{ fontSize:13, color:D.muted, display:"flex", gap:6, alignItems:"center" }}>
            <a href="/" style={{ color:D.teal, textDecoration:"none", fontWeight:600 }}>Accueil</a>
            <span>/</span>
            <span style={{ color:D.subText }}>Catalogue</span>
          </nav>

          {/* Back home */}
          <a className="plx-back" href="/" style={{ display:"inline-flex", alignItems:"center", gap:7, borderRadius:999, padding:"8px 18px", fontSize:13, fontWeight:700, color:"#0a140f", background:D.gradBtn, textDecoration:"none", boxShadow:"0 4px 14px rgba(59,222,185,0.25)", flexShrink:0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span className="plx-back-text">Retour à l&apos;accueil</span>
          </a>
        </div>
      </div>

      {/* ── Hero strip ── */}
      <div style={{ background:"linear-gradient(180deg,rgba(59,222,185,0.06) 0%,transparent 100%)", borderBottom:`1px solid ${D.cardBorder}`, padding:"40px 20px 32px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", color:D.teal, marginBottom:10 }}>Comparaison de prix</p>
          <h1 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, letterSpacing:"-1px", margin:"0 0 12px", lineHeight:1.1 }}>
            Catalogue{" "}
            <span style={{ fontFamily:"'Playfair Display',Georgia,serif", fontStyle:"italic", background:D.grad, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>produits</span>
          </h1>
          <p style={{ color:D.subText, fontSize:15, margin:"0 0 28px" }}>
            {filtered.length} produits comparés en temps réel sur 10+ enseignes tunisiennes
          </p>

          {/* Stats row */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:12, maxWidth:700 }}>
            <StatCard value="50 000+" label="Produits suivis" />
            <StatCard value="10+"     label="Enseignes" />
            <StatCard value=">30%"    label="Économies moyennes" />
            <StatCard value="24/7"    label="Mise à jour des prix" />
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"32px 20px 80px" }}>

        {/* Category tabs */}
        <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:4, marginBottom:28, scrollbarWidth:"none" }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setActiveCat(c)} className="plx-cat" style={{
              borderRadius:999, padding:"8px 20px", fontSize:13, fontWeight:600, whiteSpace:"nowrap", cursor:"pointer", flexShrink:0, transition:"all 0.2s",
              border: c===activeCat ? "none" : `1px solid ${D.cardBorder}`,
              background: c===activeCat ? D.gradBtn : D.card,
              color:       c===activeCat ? "#0a140f" : D.subText,
              boxShadow:   c===activeCat ? "0 4px 14px rgba(59,222,185,0.25)" : "none",
            }}>{c}</button>
          ))}
        </div>

        {/* Mobile filter bar */}
        <div className="plx-mobile-bar" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
          <button onClick={() => setSidebarOpen(v => !v)} style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 16px", background:D.card, border:`1px solid ${D.cardBorder}`, borderRadius:999, color:D.subText, fontSize:13, fontWeight:600, cursor:"pointer" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
            Filtres
          </button>
          <span style={{ fontSize:13, color:D.muted }}>{filtered.length} résultats</span>
        </div>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div style={{ position:"fixed", inset:0, zIndex:100 }}>
            <div onClick={() => setSidebarOpen(false)} style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.7)", backdropFilter:"blur(4px)" }} />
            <div style={{ position:"absolute", left:0, top:0, bottom:0, width:300, background:D.bgAlt, padding:24, overflowY:"auto", borderRight:`1px solid ${D.cardBorder}` }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24 }}>
                <span style={{ fontSize:16, fontWeight:700 }}>Filtres</span>
                <button onClick={() => setSidebarOpen(false)} style={{ background:"none", border:"none", color:D.muted, cursor:"pointer", fontSize:20, lineHeight:1 }}>×</button>
              </div>
              <Sidebar />
            </div>
          </div>
        )}

        <div style={{ display:"flex", gap:28, alignItems:"flex-start" }}>

          {/* ── Desktop Sidebar ── */}
          <aside className="plx-sidebar-wrap" style={{ width:240, flexShrink:0, display:"none" }}>
            <div style={{ background:D.sidebar, border:`1px solid ${D.sidebarBorder}`, borderRadius:20, padding:24, backdropFilter:"blur(20px)", position:"sticky", top:80, width:"100%" }}>
              <Sidebar />
            </div>
          </aside>

          {/* ── Grid ── */}
          <div style={{ flex:1, minWidth:0 }}>
            {/* Toolbar */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20, flexWrap:"wrap", gap:10 }}>
              <span style={{ fontSize:14, color:D.subText, fontWeight:500 }}>
                <span style={{ color:D.text, fontWeight:700 }}>{filtered.length}</span> produits trouvés
              </span>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ fontSize:12, color:D.muted }}>Trier&nbsp;:</span>
                <select value={sort} onChange={e => setSort(e.target.value)}
                  style={{ background:D.card, border:`1px solid ${D.cardBorder}`, borderRadius:10, padding:"7px 12px", color:D.text, fontSize:13, cursor:"pointer", outline:"none" }}>
                  {SORTS.map(s => <option key={s} value={s} style={{ background:"#0a140f" }}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Active chips */}
            {(activeCat!=="Tous" || activePrIdx!==0 || activeStore!=="Tous" || inStockOnly || search) && (
              <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:16 }}>
                {activeCat!=="Tous"  && <Chip label={activeCat}                      onRemove={() => setActiveCat("Tous")} />}
                {activePrIdx!==0     && <Chip label={PRICE_RANGES[activePrIdx].label} onRemove={() => setActivePrIdx(0)} />}
                {activeStore!=="Tous"&& <Chip label={activeStore}                     onRemove={() => setActiveStore("Tous")} />}
                {inStockOnly         && <Chip label="En stock"                        onRemove={() => setInStockOnly(false)} />}
                {search              && <Chip label={`"${search}"`}                   onRemove={() => setSearch("")} />}
              </div>
            )}

            {filtered.length === 0 ? (
              <div style={{ textAlign:"center", padding:"80px 20px", color:D.muted }}>
                <div style={{ fontSize:48, marginBottom:16 }}>🔍</div>
                <p style={{ fontSize:16, fontWeight:600, color:D.subText }}>Aucun produit trouvé</p>
                <p style={{ fontSize:14 }}>Essayez de modifier vos filtres</p>
              </div>
            ) : (
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:16 }}>
                {filtered.map(p => <ProductCard key={p.id} p={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Filter chip ────────────────────────────────────────────────────────── */
function Chip({ label, onRemove }: { label:string; onRemove:()=>void }) {
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"4px 10px", borderRadius:999, background:D.pill, border:`1px solid ${D.pillBorder}`, color:D.teal, fontSize:12, fontWeight:600 }}>
      {label}
      <button onClick={onRemove} style={{ background:"none", border:"none", cursor:"pointer", padding:0, display:"flex", alignItems:"center", color:D.teal, lineHeight:1 }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </span>
  );
}
