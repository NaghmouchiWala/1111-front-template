"use client";

import { useEffect, useRef, useState } from "react";

/* ── Theme tokens — dark glass (matches site hero palette) ─────────── */
const C = {
  teal:         "#3BDEB9",
  grad:         "linear-gradient(90deg,#3BDEB9 0%,#77E590 55%,#CCFF9B 100%)",
  card:         "rgba(10,20,15,0.92)",
  cardBorder:   "rgba(59,222,185,0.15)",
  border:       "rgba(59,222,185,0.2)",
  rowBest:      "rgba(59,222,185,0.12)",
  rowBestBorder:"rgba(59,222,185,0.35)",
  rowOther:     "rgba(255,255,255,0.04)",
  text:         "#ffffff",
  subText:      "rgba(255,255,255,0.55)",
  mutedText:    "rgba(255,255,255,0.35)",
  priceBest:    "#3BDEB9",
  priceOther:   "rgba(255,255,255,0.85)",
  tabActive:    "linear-gradient(90deg,#3BDEB9 0%,#77E590 100%)",
  section:      "rgba(5,15,10,0.97)",
};

/* ── Types ──────────────────────────────────────────────────────────── */
type Store   = { name: string; dot: string; price: string; best: boolean };
type Product = { id: string; brand: string; name: string; price: string; originalPrice?: string; image: string; inStock: boolean; stores: Store[] };
type Cat     = { label: string; bannerImg: string; bannerTitle: string; products: Product[] };

/* ── Data ───────────────────────────────────────────────────────────── */
const CATS: Cat[] = [
  {
    label: "Imprimante",
    bannerImg: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop",
    bannerTitle: "Imprimantes",
    products: [
      { id:"p1", brand:"BROTHER", name:"Imprimante Multifonction 3-en-1 Laser monochrome DCP-L5500DN", price:"1755.000 DT", image:"https://spacenet.tn/184819-large_default/imprimante-multifonction-3-en-1-laser-monochrome-dcp-l5500dn.jpg", inStock:true, stores:[{name:"Spacenet",dot:"#2563eb",price:"1755.000 DT",best:true},{name:"Jumbo",dot:"#9ca3af",price:"1779.000 DT",best:false}] },
      { id:"p2", brand:"CANON", name:"Imprimante Lazer Multifonction Cannon I-Sensys MF655CDW Couleur", price:"1084.000 DT", image:"https://spacenet.tn/330114-large_default/imprimante-lazer-multifonction-cannon-i-sensys-mf655cdw-couleur-blanc.jpg", inStock:true, stores:[{name:"Jumbo",dot:"#9ca3af",price:"1084.000 DT",best:true},{name:"Spacenet",dot:"#2563eb",price:"1089.000 DT",best:false},{name:"Technopro",dot:"#3b82f6",price:"1219.000 DT",best:false}] },
      { id:"p3", brand:"CANON", name:"Imprimante CANON PIXMA G3430 Réservoir Intégré WiFi - Pink", price:"669.000 DT", originalPrice:"699.000 DT", image:"https://www.mytek.tn/media/catalog/product/i/m/imprimante-canon-pixma-g3430-a-reservoir-integre-wifi-pink-s.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"669.000 DT",best:true},{name:"Tunisianet",dot:"#f97316",price:"669.000 DT",best:true}] },
      { id:"p4", brand:"CANON", name:"Traceur Canon imagePROGRAF TM-350/355", price:"4709.000 DT", originalPrice:"4799.000 DT", image:"https://www.mytek.tn/media/catalog/product/t/r/traceur-canon-imageprograf-tm-350-355-mfp-lm36-tm-350-99.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"4709.000 DT",best:true},{name:"Spacenet",dot:"#2563eb",price:"4709.000 DT",best:false}] },
      { id:"p5", brand:"HP", name:"Imprimante Monochrome HP LaserJet Pro 4003DN Réseau", price:"699.000 DT", originalPrice:"735.000 DT", image:"https://www.mytek.tn/media/catalog/product/i/m/imprimante-hp-laserjet-pro-4003dn-reseau-monochrome-2z609a-012_1.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"699.000 DT",best:true},{name:"Spacenet",dot:"#2563eb",price:"699.000 DT",best:false},{name:"Tunisianet",dot:"#f97316",price:"699.000 DT",best:true}] },
      { id:"p6", brand:"CANON", name:"Imprimante Canon Pixma G-3420 Réservoir Intégré Multifonction Wifi", price:"545.000 DT", image:"https://spacenet.tn/330148-large_default/imprimante-canon-pixma-g-3420-a-reservoir-integre-multifonction-couleur-wifi.jpg", inStock:false, stores:[{name:"Zoom",dot:"#9ca3af",price:"545.000 DT",best:true},{name:"Spacenet",dot:"#2563eb",price:"605.000 DT",best:false}] },
      { id:"p7", brand:"BROTHER", name:"IMPRIMANTE BROTHER MULTIFONCTION A3 J5955DW", price:"1579.000 DT", image:"https://www.tunisianet.com.tn/353761-large/imprimante-brother-multifonction-a3-j5955dw.jpg", inStock:true, stores:[{name:"Tunisianet",dot:"#f97316",price:"1579.000 DT",best:true},{name:"Jumbo",dot:"#9ca3af",price:"1579.000 DT",best:true}] },
      { id:"p8", brand:"EPSON", name:"Imprimante Jet Encre Epson M5299 Workforce Pro Wifi", price:"1175.000 DT", originalPrice:"1225.000 DT", image:"https://spacenet.tn/335938-large_default/imprimante-jet-encre-epson-m5299-workforce-pro-wifi-c11cg07402.jpg", inStock:true, stores:[{name:"Technopro",dot:"#3b82f6",price:"1175.000 DT",best:true},{name:"Jumbo",dot:"#9ca3af",price:"1599.000 DT",best:false},{name:"Spacenet",dot:"#2563eb",price:"1799.000 DT",best:false}] },
      { id:"p9", brand:"KYOCERA", name:"Imprimante KYOCERA ECOSYS MA2100CFX multifonction Laser Couleur", price:"1069.000 DT", originalPrice:"1199.000 DT", image:"https://www.mytek.tn/media/catalog/product/i/m/imprimante-multifonction-laser-kyocera-ecosys-ma2100cfx.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"1069.000 DT",best:true},{name:"Tunisianet",dot:"#f97316",price:"1069.000 DT",best:false},{name:"Technopro",dot:"#3b82f6",price:"1099.000 DT",best:false}] },
    ],
  },
  {
    label:"PC de Bureau", bannerImg:"https://images.unsplash.com/photo-1593640408182-31c228b52b2f?q=80&w=800&auto=format&fit=crop", bannerTitle:"PC de Bureau",
    products:[
      { id:"d1", brand:"DELL", name:"PC de Bureau Dell OptiPlex 3000 Core i5-12500T 8Go 256Go SSD", price:"1399.000 DT", originalPrice:"1499.000 DT", image:"https://www.mytek.tn/media/catalog/product/d/e/dell-optiplex-3000-sff-i5-8g-256ssd.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"1399.000 DT",best:true},{name:"Spacenet",dot:"#2563eb",price:"1450.000 DT",best:false}] },
      { id:"d2", brand:"HP", name:"PC de Bureau HP ProDesk 400 G9 Core i5-12500 8Go 512Go SSD", price:"1649.000 DT", image:"https://www.mytek.tn/media/catalog/product/h/p/hp-prodesk-400-g9.jpg", inStock:true, stores:[{name:"Tunisianet",dot:"#f97316",price:"1649.000 DT",best:true},{name:"Jumbo",dot:"#9ca3af",price:"1699.000 DT",best:false}] },
      { id:"d3", brand:"LENOVO", name:"PC de Bureau Lenovo ThinkCentre M70q Gen3 Core i5 8Go 256Go SSD", price:"1299.000 DT", originalPrice:"1399.000 DT", image:"https://www.mytek.tn/media/catalog/product/l/e/lenovo-thinkcentre-m70q.jpg", inStock:false, stores:[{name:"Spacenet",dot:"#2563eb",price:"1299.000 DT",best:true},{name:"Mytek",dot:"#ef4444",price:"1350.000 DT",best:false}] },
      { id:"d4", brand:"ASUS", name:"PC de Bureau ASUS ExpertCenter D500SC Core i5-10400 8Go 512Go SSD", price:"1199.000 DT", image:"https://www.mytek.tn/media/catalog/product/a/s/asus-expertcenter-d500sc.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"1199.000 DT",best:true},{name:"Technopro",dot:"#3b82f6",price:"1249.000 DT",best:false}] },
    ],
  },
  {
    label:"Pc Portable", bannerImg:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop", bannerTitle:"Pc Portables",
    products:[
      { id:"l1", brand:"LENOVO", name:"PC Portable Lenovo IdeaPad 3 15IAU7 Core i5-1235U 8Go 512Go SSD", price:"1399.000 DT", originalPrice:"1549.000 DT", image:"https://www.mytek.tn/media/catalog/product/l/e/lenovo-ideapad-3-15iau7.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"1399.000 DT",best:true},{name:"Tunisianet",dot:"#f97316",price:"1449.000 DT",best:false}] },
      { id:"l2", brand:"HP", name:"PC Portable HP 15s-fq5040nk Core i7-1255U 16Go 512Go SSD", price:"1849.000 DT", image:"https://www.mytek.tn/media/catalog/product/h/p/hp-15s-fq5040nk.jpg", inStock:true, stores:[{name:"Spacenet",dot:"#2563eb",price:"1849.000 DT",best:true},{name:"Jumbo",dot:"#9ca3af",price:"1899.000 DT",best:false}] },
      { id:"l3", brand:"DELL", name:"PC Portable Dell Inspiron 15 3525 Ryzen 5 5625U 8Go 512Go SSD", price:"1599.000 DT", originalPrice:"1699.000 DT", image:"https://www.mytek.tn/media/catalog/product/d/e/dell-inspiron-15-3525.jpg", inStock:true, stores:[{name:"Tunisianet",dot:"#f97316",price:"1599.000 DT",best:true},{name:"Mytek",dot:"#ef4444",price:"1649.000 DT",best:false}] },
      { id:"l4", brand:"ACER", name:"PC Portable Acer Aspire 3 A315-59 Core i5-1235U 8Go 512Go SSD", price:"1249.000 DT", originalPrice:"1349.000 DT", image:"https://www.mytek.tn/media/catalog/product/a/c/acer-aspire-3-a315-59.jpg", inStock:true, stores:[{name:"Jumbo",dot:"#9ca3af",price:"1249.000 DT",best:true},{name:"Spacenet",dot:"#2563eb",price:"1299.000 DT",best:false}] },
    ],
  },
  {
    label:"Réfrigérateur", bannerImg:"https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop", bannerTitle:"Réfrigérateurs",
    products:[
      { id:"r1", brand:"SAMSUNG", name:"Réfrigérateur Samsung Twin Cooling Plus 385L No Frost Inox", price:"2199.000 DT", originalPrice:"2399.000 DT", image:"https://www.mytek.tn/media/catalog/product/s/a/samsung-refrigerateur.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"2199.000 DT",best:true},{name:"Tunisianet",dot:"#f97316",price:"2249.000 DT",best:false}] },
      { id:"r2", brand:"LG", name:"Réfrigérateur LG Door-in-Door 660L Inox GC-X247CSAV", price:"3499.000 DT", image:"https://www.mytek.tn/media/catalog/product/l/g/lg-gc-x247csav.jpg", inStock:true, stores:[{name:"Spacenet",dot:"#2563eb",price:"3499.000 DT",best:true},{name:"Jumbo",dot:"#9ca3af",price:"3599.000 DT",best:false}] },
      { id:"r3", brand:"BEKO", name:"Réfrigérateur Beko RDNE455E20DZX 3 Portes No Frost 430L", price:"1699.000 DT", originalPrice:"1849.000 DT", image:"https://www.mytek.tn/media/catalog/product/b/e/beko-rdne455e20dzx.jpg", inStock:true, stores:[{name:"Tunisianet",dot:"#f97316",price:"1699.000 DT",best:true},{name:"Technopro",dot:"#3b82f6",price:"1749.000 DT",best:false}] },
      { id:"r4", brand:"WHIRLPOOL", name:"Réfrigérateur Whirlpool W7 921I OX Side by Side 594L Inox", price:"3199.000 DT", image:"https://www.mytek.tn/media/catalog/product/w/h/whirlpool-w7-921i-ox.jpg", inStock:false, stores:[{name:"Jumbo",dot:"#9ca3af",price:"3199.000 DT",best:true},{name:"Mytek",dot:"#ef4444",price:"3299.000 DT",best:false}] },
    ],
  },
  {
    label:"Machine à Laver", bannerImg:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop", bannerTitle:"Machines à Laver",
    products:[
      { id:"m1", brand:"SAMSUNG", name:"Machine à Laver Samsung EcoBubble 8Kg 1400 Tr/min Blanc", price:"1299.000 DT", originalPrice:"1449.000 DT", image:"https://www.mytek.tn/media/catalog/product/s/a/samsung-machine-laver.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"1299.000 DT",best:true},{name:"Tunisianet",dot:"#f97316",price:"1349.000 DT",best:false}] },
      { id:"m2", brand:"LG", name:"Machine à Laver LG ThinQ 9Kg 1400 Tr/min Moteur Direct Drive", price:"1699.000 DT", image:"https://www.mytek.tn/media/catalog/product/l/g/lg-machine-laver.jpg", inStock:true, stores:[{name:"Spacenet",dot:"#2563eb",price:"1699.000 DT",best:true},{name:"Jumbo",dot:"#9ca3af",price:"1749.000 DT",best:false}] },
      { id:"m3", brand:"BOSCH", name:"Machine à Laver Bosch Serie 6 9Kg 1400 Tr/min EcoSilence Drive", price:"2199.000 DT", image:"https://www.mytek.tn/media/catalog/product/b/o/bosch-serie-6.jpg", inStock:true, stores:[{name:"Jumbo",dot:"#9ca3af",price:"2199.000 DT",best:true},{name:"Spacenet",dot:"#2563eb",price:"2299.000 DT",best:false}] },
      { id:"m4", brand:"BEKO", name:"Machine à Laver Beko WTV8612XW 8Kg 1200 Tr/min SteamCure", price:"999.000 DT", originalPrice:"1099.000 DT", image:"https://www.mytek.tn/media/catalog/product/b/e/beko-wtv8612xw.jpg", inStock:true, stores:[{name:"Tunisianet",dot:"#f97316",price:"999.000 DT",best:true},{name:"Technopro",dot:"#3b82f6",price:"1049.000 DT",best:false}] },
    ],
  },
  {
    label:"Lave Vaisselle", bannerImg:"https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=800&auto=format&fit=crop", bannerTitle:"Lave Vaisselles",
    products:[
      { id:"v1", brand:"BOSCH", name:"Lave-Vaisselle Bosch Serie 4 12 Couverts 60cm Inox SMU4HVS31E", price:"1749.000 DT", originalPrice:"1899.000 DT", image:"https://www.mytek.tn/media/catalog/product/b/o/bosch-smu4hvs31e.jpg", inStock:true, stores:[{name:"Mytek",dot:"#ef4444",price:"1749.000 DT",best:true},{name:"Jumbo",dot:"#9ca3af",price:"1799.000 DT",best:false}] },
      { id:"v2", brand:"SAMSUNG", name:"Lave-Vaisselle Samsung 13 Couverts 60cm Inox DW60A6092FS", price:"1499.000 DT", image:"https://www.mytek.tn/media/catalog/product/s/a/samsung-dw60a6092fs.jpg", inStock:true, stores:[{name:"Spacenet",dot:"#2563eb",price:"1499.000 DT",best:true},{name:"Tunisianet",dot:"#f97316",price:"1549.000 DT",best:false}] },
      { id:"v3", brand:"BEKO", name:"Lave-Vaisselle Beko BDFN26430XA 14 Couverts 60cm AquaIntense", price:"1299.000 DT", originalPrice:"1399.000 DT", image:"https://www.mytek.tn/media/catalog/product/b/e/beko-bdfn26430xa.jpg", inStock:true, stores:[{name:"Tunisianet",dot:"#f97316",price:"1299.000 DT",best:true},{name:"Technopro",dot:"#3b82f6",price:"1349.000 DT",best:false}] },
      { id:"v4", brand:"LG", name:"Lave-Vaisselle LG QuadWash 14 Couverts 60cm Inox DF455HMS", price:"1899.000 DT", image:"https://www.mytek.tn/media/catalog/product/l/g/lg-df455hms.jpg", inStock:false, stores:[{name:"Jumbo",dot:"#9ca3af",price:"1899.000 DT",best:true},{name:"Mytek",dot:"#ef4444",price:"1999.000 DT",best:false}] },
    ],
  },
];

/* ── Product card ────────────────────────────────────────────────────── */
function ProductCard({ p }: { p: Product }) {
  return (
    <div style={{
      display:"flex", flexDirection:"column",
      borderRadius:18, border:`1px solid ${C.cardBorder}`,
      background:C.card, padding:16,
      backdropFilter:"blur(16px)",
      boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
      position:"relative", overflow:"hidden",
      maxWidth:320,
    }}>
      {/* top glow line */}
      <div style={{ position:"absolute", top:0, left:"10%", right:"10%", height:1, background:"linear-gradient(90deg,transparent,rgba(59,222,185,0.5),transparent)" }} />

      {/* Image area */}
      <a href={`/products/${p.id}`} style={{ display:"block", position:"relative", height:120, borderRadius:12, overflow:"hidden", background:"rgba(255,255,255,0.05)", marginBottom:14, flexShrink:0 }}>
        <img src={p.image} alt={p.name} loading="lazy"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"contain", padding:8 }}
          onError={e => { (e.target as HTMLImageElement).style.opacity="0"; }}
        />
        {/* Deal badge */}
        <span style={{
          position:"absolute", right:8, top:8,
          background:"rgba(10,20,15,0.85)", border:"1px solid rgba(59,222,185,0.4)",
          borderRadius:999, padding:"3px 9px", fontSize:10, fontWeight:700,
          color:C.teal, backdropFilter:"blur(8px)",
          display:"flex", alignItems:"center", gap:4,
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          Deal
        </span>
      </a>

      <div style={{ display:"flex", flexDirection:"column", gap:8, flex:1 }}>
        {/* Category / brand */}
        <span style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:C.mutedText }}>
          {p.brand}
        </span>

        {/* Name */}
        <div>
          <a href={`/products/${p.id}`} style={{
            fontSize:15, fontWeight:700, lineHeight:1.3, color:C.text, textDecoration:"none",
            display:"-webkit-box", WebkitLineClamp:1, WebkitBoxOrient:"vertical", overflow:"hidden",
          }}>{p.name}</a>
          {p.originalPrice && (
            <span style={{ fontSize:11, color:C.mutedText }}>{p.originalPrice?.replace(" DT","").trim()} DT original</span>
          )}
        </div>

        {/* Store rows */}
        <div style={{ display:"flex", flexDirection:"column", gap:4, marginTop:2 }}>
          {p.stores.map((s, i) => (
            <div key={i} style={{
              display:"flex", alignItems:"center", justifyContent:"space-between",
              borderRadius:10, padding:"7px 12px",
              background: i===0 ? C.rowBest : C.rowOther,
              border: i===0 ? `1px solid ${C.rowBestBorder}` : "1px solid rgba(255,255,255,0.05)",
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:s.dot, flexShrink:0 }} />
                <span style={{ fontSize:12, fontWeight:500, color: i===0 ? C.text : C.subText }}>{s.name}</span>
              </div>
              <span style={{ fontSize:13, fontWeight:800, color: i===0 ? C.priceBest : C.priceOther, letterSpacing:"-0.3px" }}>
                {s.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main section ────────────────────────────────────────────────────── */
export default function TrendingSection() {
  const [catIdx,    setCatIdx]    = useState(0);
  const [page,      setPage]      = useState(0);
  const [animKey,   setAnimKey]   = useState(0);
  const [direction, setDirection] = useState<"left"|"right">("right");
  const timerRef = useRef<ReturnType<typeof setInterval>|null>(null);

  const cat      = CATS[catIdx];
  const perPage  = 2;
  const total    = Math.ceil(cat.products.length / perPage);
  const visible  = cat.products.slice(page * perPage, page * perPage + perPage);

  /* auto-advance every 4 s */
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("right");
      setPage(p => {
        const next = (p + 1) % Math.ceil(CATS[catIdx].products.length / perPage);
        setAnimKey(k => k + 1);
        return next;
      });
    }, 4000);
  };

  useEffect(() => { startTimer(); return () => { if(timerRef.current) clearInterval(timerRef.current); }; }, [catIdx]);

  const go = (dir: "left"|"right") => {
    if(timerRef.current) clearInterval(timerRef.current);
    setDirection(dir);
    setAnimKey(k => k + 1);
    setPage(p => dir==="right" ? (p+1)%total : (p-1+total)%total);
    startTimer();
  };

  const switchCat = (i: number) => {
    setCatIdx(i);
    setPage(0);
    setAnimKey(k => k + 1);
    setDirection("right");
  };

  const animName = direction === "right" ? "slideInRight" : "slideInLeft";

  return (
    <div style={{ width:"100%", background:C.section, padding:"60px 0" }}>
    <div style={{ maxWidth:900, margin:"0 auto", padding:"0 20px" }}>
      <style>{`
        @keyframes slideInRight {
          from { opacity:0; transform:translateX(60px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity:0; transform:translateX(-60px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .trend-slide { animation-duration:0.38s; animation-timing-function:cubic-bezier(.25,.8,.25,1); animation-fill-mode:both; }
        .trend-card:hover { box-shadow:0 8px 30px rgba(59,222,185,0.18) !important; transform:translateY(-3px); transition:all 0.25s; border-color:rgba(59,222,185,0.4) !important; }
        .trend-tab:hover  { opacity:0.85; }
        .trend-arrow:hover { background:${C.teal} !important; border-color:${C.teal} !important; }
        .trend-arrow:hover svg { stroke:#0a140f; }
        @media(min-width:1024px){ .trend-banner{ display:block !important; } }
      `}</style>

      {/* Section heading */}
      <div style={{ textAlign:"center", marginBottom:48 }}>
        <p style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", color:C.teal, marginBottom:14 }}>
          Comparez &amp; Économisez
        </p>
        <h2 style={{ color:C.text, fontSize:"clamp(2rem,5vw,3.6rem)", fontWeight:900, lineHeight:1.08, letterSpacing:"-1.5px", margin:0 }}>
          Les{" "}
          <span style={{
            fontFamily:"'Playfair Display', Georgia, serif",
            fontStyle:"italic", fontWeight:700,
            background: C.grad,
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>meilleurs</span>
          {" "}prix du marché
        </h2>
        <p style={{ color:C.subText, fontSize:16, marginTop:16, maxWidth:520, marginLeft:"auto", marginRight:"auto", lineHeight:1.6 }}>
          Comparez les prix en temps réel sur les grandes enseignes tunisiennes et trouvez le meilleur deal en un clic.
        </p>
      </div>

      <div style={{ display:"flex", gap:28, alignItems:"stretch" }}>

        {/* ── Left banner (desktop) ── */}
        <div className="trend-banner" style={{ width:300, flexShrink:0, display:"none" }}>
          <div style={{ height:"100%", minHeight:420, position:"relative", borderRadius:32, overflow:"hidden", background:"#f0f0f0" }}>
            <img src={cat.bannerImg} alt={cat.bannerTitle} loading="lazy"
              style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity:0.88, transition:"all 0.6s" }}
            />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.68), transparent)" }} />
            <div style={{ position:"absolute", bottom:28, left:24, right:24 }}>
              <span style={{ color:"#fff", fontSize:11, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.14em", opacity:0.85, textDecoration:"underline", textUnderlineOffset:4, textDecorationColor:C.teal }}>
                Promo
              </span>
              <h3 style={{ color:"#fff", fontSize:26, fontWeight:900, margin:"6px 0 0", letterSpacing:"-0.5px", textShadow:"0 2px 10px rgba(0,0,0,0.5)" }}>
                {cat.bannerTitle}
              </h3>
            </div>
          </div>
        </div>

        {/* ── Right column ── */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", gap:22, minWidth:0 }}>

          {/* Tabs */}
          <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:2, scrollbarWidth:"none" }}>
            {CATS.map((c, i) => (
              <button key={c.label} onClick={() => switchCat(i)} className="trend-tab" style={{
                borderRadius:999, padding:"9px 22px", fontSize:13, fontWeight:600,
                whiteSpace:"nowrap", cursor:"pointer", flexShrink:0,
                border: i===catIdx ? "none" : `1px solid ${C.border}`,
                background: i===catIdx ? C.tabActive : C.card,
                color:       i===catIdx ? "#0a140f" : C.subText,
                boxShadow:   i===catIdx ? `0 4px 14px rgba(59,222,185,0.25)` : "none",
                transition:"all 0.2s",
              }}>
                {c.label}
              </button>
            ))}
          </div>

          {/* Slider */}
          <div style={{ position:"relative", overflow:"hidden" }}>

            {/* Arrow left */}
            <button onClick={() => go("left")} aria-label="Précédent" className="trend-arrow" style={{
              position:"absolute", left:-18, top:"50%", transform:"translateY(-50%)", zIndex:20,
              width:40, height:40, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",
              border:`1px solid ${C.border}`, background:"rgba(10,20,15,0.8)",
              boxShadow:"0 4px 14px rgba(0,0,0,0.1)", cursor:"pointer", transition:"all 0.2s",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.subText} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {/* Arrow right */}
            <button onClick={() => go("right")} aria-label="Suivant" className="trend-arrow" style={{
              position:"absolute", right:-18, top:"50%", transform:"translateY(-50%)", zIndex:20,
              width:40, height:40, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",
              border:`1px solid ${C.border}`, background:"rgba(10,20,15,0.8)",
              boxShadow:"0 4px 14px rgba(0,0,0,0.1)", cursor:"pointer", transition:"all 0.2s",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.subText} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            {/* Animated cards */}
            <div key={`${catIdx}-${animKey}`} className="trend-slide"
              style={{ animationName:animName, display:"flex", gap:18, padding:"4px 6px" }}>
              {visible.map(p => (
                <div key={p.id} className="trend-card" style={{ flex:"1 1 300px", minWidth:0, maxWidth:340 }}>
                  <ProductCard p={p} />
                </div>
              ))}
              {/* Placeholder if odd number */}
              {visible.length < perPage && (
                <div style={{ flex:"1 1 0", minWidth:0 }} />
              )}
            </div>
          </div>

          {/* Dot indicators */}
          <div style={{ display:"flex", justifyContent:"center", gap:6 }}>
            {Array.from({ length:total }).map((_, i) => (
              <button key={i} onClick={() => { setDirection(i>page?"right":"left"); setPage(i); setAnimKey(k=>k+1); }} style={{
                width: i===page ? 22 : 8, height:8, borderRadius:999, border:"none", cursor:"pointer",
                background: i===page ? C.teal : "rgba(255,255,255,0.15)",
                transition:"all 0.3s", padding:0,
              }} />
            ))}
          </div>

          {/* See more */}
          <div style={{ display:"flex", justifyContent:"center" }}>
            <a href="/products" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              borderRadius:999, padding:"12px 32px", fontSize:14, fontWeight:700,
              color:"#0a140f", background:C.tabActive, textDecoration:"none",
              boxShadow:`0 4px 18px rgba(59,222,185,0.3)`, transition:"opacity 0.2s",
            }}>
              Voir plus de produits
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}
