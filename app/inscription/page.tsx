"use client";
import { useState } from "react";
import Link from "next/link";

export default function InscriptionPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

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
          box-sizing: border-box;
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
        .auth-btn-outline {
          width: 100%;
          padding: 15px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: border-color 0.2s;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .auth-btn-outline:hover { border-color: rgba(59,222,185,0.4); color: #fff; }
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
        .step-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .benefit-item:last-child { border-bottom: none; }
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
      <div className="glow-orb" style={{ width: 500, height: 500, background: "rgba(59,222,185,0.06)", top: -150, right: -150 }} />
      <div className="glow-orb" style={{ width: 300, height: 300, background: "rgba(204,255,155,0.05)", bottom: -80, left: -80 }} />

      {/* Left decorative panel */}
      <div className="auth-left-panel" style={{
        width: "45%",
        background: "linear-gradient(135deg, rgba(59,222,185,0.06) 0%, rgba(204,255,155,0.03) 100%)",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "48px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(59,222,185,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,222,185,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "2px", position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2.2rem", fontWeight: 900, letterSpacing: "-3px", color: "#ffffff", lineHeight: 1 }}>1111</span>
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#3BDEB9", lineHeight: 1, marginTop: "4px" }}>.tn</span>
        </Link>

        {/* Center content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1.2, margin: "0 0 12px" }}>
            Rejoignez{" "}
            <span style={{ background: "linear-gradient(100deg,#3BDEB9,#CCFF9B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              des milliers
            </span>{" "}
            de Tunisiens malins.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.7, margin: "0 0 32px" }}>
            Créez votre compte gratuit et commencez à économiser dès aujourd'hui.
          </p>

          {/* Benefits list */}
          <div>
            {[
              { icon: "🔍", title: "Comparaison instantanée", desc: "50 000+ produits indexés en temps réel" },
              { icon: "🔔", title: "Alertes de prix", desc: "Soyez notifié quand le prix de votre produit baisse" },
              { icon: "🤖", title: "IA Prédictive", desc: "Notre IA prédit les hausses de prix à venir" },
              { icon: "🛒", title: "Liste de suivi", desc: "Suivez vos produits favoris au fil du temps" },
            ].map(b => (
              <div className="benefit-item" key={b.title}>
                <div style={{
                  width: 38, height: 38, borderRadius: "12px", flexShrink: 0,
                  background: "rgba(59,222,185,0.1)", border: "1px solid rgba(59,222,185,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px",
                }}>
                  {b.icon}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#fff" }}>{b.title}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust badge */}
        <div style={{
          position: "relative", zIndex: 1,
          display: "flex", alignItems: "center", gap: "12px",
          background: "rgba(59,222,185,0.06)", border: "1px solid rgba(59,222,185,0.12)",
          borderRadius: "16px", padding: "16px 20px",
        }}>
          <div style={{ fontSize: "28px" }}>🔒</div>
          <div>
            <div style={{ fontSize: "12px", fontWeight: 800, color: "#fff" }}>100% Gratuit & Sécurisé</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>Aucune carte bancaire requise. Jamais.</div>
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

          {/* Step indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            {[1, 2].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: s === step ? 28 : 8, height: 8, borderRadius: "999px",
                  background: s <= step ? "linear-gradient(90deg,#3BDEB9,#CCFF9B)" : "rgba(255,255,255,0.12)",
                  transition: "all 0.3s ease",
                }} />
                {s < 2 && <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.1)" }} />}
              </div>
            ))}
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", fontWeight: 600, marginLeft: "4px" }}>Étape {step}/2</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "28px" }}>
            <h1 style={{ fontSize: "26px", fontWeight: 900, color: "#fff", margin: "0 0 8px" }}>
              {step === 1 ? "Créer votre compte ✨" : "Dernière étape 🎯"}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", margin: 0 }}>
              Déjà inscrit ?{" "}
              <Link href="/connexion" className="auth-link">Se connecter</Link>
            </p>
          </div>

          {step === 1 ? (
            <form onSubmit={e => { e.preventDefault(); setStep(2); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Row: prénom + nom */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Prénom</label>
                  <input type="text" className="auth-input" placeholder="Ahmed" />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Nom</label>
                  <input type="text" className="auth-input" placeholder="Ben Ali" />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Adresse email</label>
                <input type="email" className="auth-input" placeholder="votre@email.com" />
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Numéro de téléphone</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>+216</span>
                  <input type="tel" className="auth-input" placeholder="XX XXX XXX" style={{ paddingLeft: "52px" }} />
                </div>
              </div>

              <button type="submit" className="auth-btn" style={{ marginTop: "8px" }}>
                Continuer →
              </button>
            </form>
          ) : (
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Mot de passe</label>
                <div style={{ position: "relative" }}>
                  <input type={showPassword ? "text" : "password"} className="auth-input" placeholder="Minimum 8 caractères" style={{ paddingRight: "46px" }} />
                  <button type="button" className="show-pass-btn" onClick={() => setShowPassword(v => !v)}>
                    {showPassword
                      ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    }
                  </button>
                </div>
                {/* Password strength */}
                <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{ flex: 1, height: "3px", borderRadius: "999px", background: i <= 2 ? "linear-gradient(90deg,#3BDEB9,#77E590)" : "rgba(255,255,255,0.08)" }} />
                  ))}
                </div>
                <span style={{ fontSize: "11px", color: "#3BDEB9", fontWeight: 600, marginTop: "4px", display: "block" }}>Moyen — ajoutez des chiffres pour renforcer</span>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Confirmer le mot de passe</label>
                <input type="password" className="auth-input" placeholder="••••••••" />
              </div>

              {/* Ville */}
              <div>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Gouvernorat</label>
                <select className="auth-input" style={{ cursor: "pointer" }}>
                  <option value="" style={{ background: "#0a0f0d" }}>Sélectionner…</option>
                  {["Tunis","Ariana","Ben Arous","Manouba","Nabeul","Zaghouan","Bizerte","Béja","Jendouba","Le Kef","Siliana","Sousse","Monastir","Mahdia","Sfax","Kairouan","Kasserine","Sidi Bouzid","Gabès","Medenine","Tataouine","Gafsa","Tozeur","Kébili"].map(g => (
                    <option key={g} value={g} style={{ background: "#0a0f0d" }}>{g}</option>
                  ))}
                </select>
              </div>

              {/* Consent */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <input type="checkbox" id="terms" style={{ accentColor: "#3BDEB9", width: 16, height: 16, cursor: "pointer", marginTop: "2px", flexShrink: 0 }} />
                <label htmlFor="terms" style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", cursor: "pointer", lineHeight: 1.6 }}>
                  J'accepte les{" "}
                  <a href="#" className="auth-link" style={{ fontSize: "12px" }}>Conditions d'utilisation</a>{" "}
                  et la{" "}
                  <a href="#" className="auth-link" style={{ fontSize: "12px" }}>Politique de confidentialité</a>
                </label>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <button type="button" className="auth-btn-outline" onClick={() => setStep(1)}>← Retour</button>
                <button type="submit" className="auth-btn">Créer mon compte</button>
              </div>
            </form>
          )}

          {/* Divider + social for step 1 */}
          {step === 1 && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "20px 0" }}>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>ou s'inscrire avec</span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button style={{ flex: 1, padding: "12px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "'Inter', system-ui, sans-serif", transition: "border-color 0.2s" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Google
                </button>
                <button style={{ flex: 1, padding: "12px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "'Inter', system-ui, sans-serif", transition: "border-color 0.2s" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
