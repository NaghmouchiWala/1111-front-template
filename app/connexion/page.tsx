"use client";
import { useState } from "react";
import Link from "next/link";

export default function ConnexionPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0f0d",
      display: "flex",
      fontFamily: "'Inter', system-ui, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .auth-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 14px 18px;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .auth-input::placeholder { color: rgba(255,255,255,0.25); }
        .auth-input:focus {
          border-color: rgba(59,222,185,0.5);
          background: rgba(59,222,185,0.04);
        }
        .auth-btn {
          width: 100%;
          padding: 15px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(100deg, #3BDEB9 0%, #77E590 55%, #CCFF9B 100%);
          color: #0a0f0d;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          font-family: 'Inter', system-ui, sans-serif;
          letter-spacing: 0.02em;
        }
        .auth-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .auth-social-btn {
          flex: 1;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: border-color 0.2s, background 0.2s;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .auth-social-btn:hover {
          border-color: rgba(59,222,185,0.3);
          background: rgba(59,222,185,0.04);
        }
        .auth-link {
          color: #3BDEB9;
          text-decoration: none;
          font-weight: 700;
        }
        .auth-link:hover { text-decoration: underline; }
        .show-pass-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
        }
        .show-pass-btn:hover { color: rgba(255,255,255,0.7); }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        @media (max-width: 900px) {
          .auth-left-panel { display: none !important; }
          .auth-right-panel { width: 100% !important; }
        }
      `}</style>

      {/* Background orbs */}
      <div className="glow-orb" style={{ width: 400, height: 400, background: "rgba(59,222,185,0.07)", top: -100, left: -100 }} />
      <div className="glow-orb" style={{ width: 300, height: 300, background: "rgba(204,255,155,0.05)", bottom: -80, right: -80 }} />

      {/* Left decorative panel */}
      <div className="auth-left-panel" style={{
        width: "45%",
        background: "linear-gradient(135deg, rgba(59,222,185,0.08) 0%, rgba(204,255,155,0.04) 100%)",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "48px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(59,222,185,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,222,185,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "2px", position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2.2rem", fontWeight: 900, letterSpacing: "-3px", color: "#ffffff", lineHeight: 1 }}>1111</span>
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#3BDEB9", lineHeight: 1, marginTop: "4px" }}>.tn</span>
        </Link>

        {/* Center content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(59,222,185,0.1)", border: "1px solid rgba(59,222,185,0.2)",
            borderRadius: "999px", padding: "6px 14px", marginBottom: "24px",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3BDEB9" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#3BDEB9", textTransform: "uppercase", letterSpacing: "1.5px" }}>Comparateur #1 en Tunisie</span>
          </div>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, margin: "0 0 16px" }}>
            Comparez les prix,<br />
            <span style={{ background: "linear-gradient(100deg,#3BDEB9,#CCFF9B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>économisez vraiment.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.7, margin: 0, maxWidth: 340 }}>
            Accédez à plus de 50 000 produits comparés en temps réel sur les plus grandes enseignes tunisiennes.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "24px", marginTop: "36px", flexWrap: "wrap" }}>
            {[
              { val: "50K+", lbl: "Produits" },
              { val: "10+", lbl: "Magasins" },
              { val: ">30%", lbl: "Économies" },
            ].map(s => (
              <div key={s.val}>
                <div style={{ fontSize: "22px", fontWeight: 900, background: "linear-gradient(90deg,#3BDEB9,#CCFF9B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.val}</div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "1px" }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div style={{
          position: "relative", zIndex: 1,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "18px", padding: "20px 24px",
        }}>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.6, margin: "0 0 12px", fontStyle: "italic" }}>
            "Grâce à 1111.tn j'ai économisé 340 DT sur mon nouvel ordinateur portable en comparant 6 magasins en 2 minutes."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#3BDEB9,#CCFF9B)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "#0a0f0d" }}>A</div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}>Amine B.</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>Tunis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="auth-right-panel" style={{
        width: "55%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 32px",
      }}>
        <div style={{ width: "100%", maxWidth: 420 }}>

          {/* Header */}
          <div style={{ marginBottom: "36px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: 900, color: "#fff", margin: "0 0 8px" }}>Bon retour 👋</h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", margin: 0 }}>
              Pas encore de compte ?{" "}
              <Link href="/inscription" className="auth-link">Créer un compte</Link>
            </p>
          </div>

          {/* Social buttons */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
            <button className="auth-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continuer avec Google
            </button>
            <button className="auth-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Continuer avec Facebook
            </button>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>ou continuer avec email</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Form */}
          <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Adresse email</label>
              <input type="email" className="auth-input" placeholder="votre@email.com" />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>Mot de passe</label>
                <a href="#" className="auth-link" style={{ fontSize: "12px" }}>Mot de passe oublié ?</a>
              </div>
              <div style={{ position: "relative" }}>
                <input type={showPassword ? "text" : "password"} className="auth-input" placeholder="••••••••" style={{ paddingRight: "46px" }} />
                <button type="button" className="show-pass-btn" onClick={() => setShowPassword(v => !v)}>
                  {showPassword
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input type="checkbox" id="remember" style={{ accentColor: "#3BDEB9", width: 16, height: 16, cursor: "pointer" }} />
              <label htmlFor="remember" style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", cursor: "pointer", fontWeight: 500 }}>Se souvenir de moi</label>
            </div>

            <button type="submit" className="auth-btn" style={{ marginTop: "8px" }}>
              Se connecter
            </button>
          </form>

          {/* Terms */}
          <p style={{ textAlign: "center", fontSize: "11px", color: "rgba(255,255,255,0.2)", marginTop: "24px", lineHeight: 1.6 }}>
            En vous connectant, vous acceptez nos{" "}
            <a href="#" className="auth-link" style={{ fontSize: "11px" }}>Conditions d'utilisation</a>{" "}et notre{" "}
            <a href="#" className="auth-link" style={{ fontSize: "11px" }}>Politique de confidentialité</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
