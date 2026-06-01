import type React from "react";
import EngineIcon from "../ui/EngineIcon";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

const renewalRows = [
  { mark: "AURORA™",     jurisdiction: "USPTO", official: "$400", provider: "$620", ours: "$432", savings: "30%", action: "Renew",  actionColor: "#16A34A" },
  { mark: "NEXAFLOW®",   jurisdiction: "EUIPO", official: "€850", provider: "€1,200", ours: "€918", savings: "24%", action: "Renew", actionColor: "#16A34A" },
  { mark: "STRATOSYNC™", jurisdiction: "WIPO",  official: "CHF 580", provider: "CHF 890", ours: "CHF 638", savings: "28%", action: "Hold",  actionColor: "#D97706" },
  { mark: "QUANTLEAP™",  jurisdiction: "JPO",   official: "¥48,000", provider: "¥72,000", ours: "¥52,800", savings: "27%", action: "Renew", actionColor: "#16A34A" },
];

export default function RenewalHero() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden", background: "#050510" }}>
      {/* Background */}
      <div style={{ position: "absolute", width: 800, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 65%)", top: "-10%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)", top: "10%", right: "5%", filter: "blur(60px)", animation: "orb2 14s ease-in-out infinite" }} />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="max-w-content mx-auto px-7 relative">
        {/* Icon + headline */}
        <div className="text-center mb-14">
          <div style={{ display: "inline-flex", position: "relative", marginBottom: 28 }}>
            <div style={{ position: "absolute", inset: -24, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%)", filter: "blur(12px)", animation: "iconGlow 3s ease-in-out infinite", pointerEvents: "none" }} />
            {[0, 1.0].map((delay, i) => (
              <div key={i} style={{ position: "absolute", inset: -6, borderRadius: 26, border: `1px solid rgba(167,139,250,${0.4 - i * 0.15})`, animation: `pingRing 2.8s ease-out ${delay}s infinite`, pointerEvents: "none" }} />
            ))}
            <div style={{ animation: "iconFloat 4s ease-in-out infinite", position: "relative", zIndex: 1 }}>
              <EngineIcon engine="renewal" size={80} variant="dark" />
            </div>
          </div>

          <h1 className="font-display font-extrabold text-white mx-auto mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: 820 }}>
            IP renewals that generate{" "}
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #A78BFA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundSize: "200% 200%", animation: "gs 4s ease-in-out infinite" }}>
              margin
            </span>
            , not just cost.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: 580, margin: "0 auto 36px", fontFamily: "'General Sans', sans-serif" }}>
            RenewalEngine automates patent and trademark renewals across 190+ jurisdictions with full cost transparency. No hidden markups. Average savings of 27.7% — and 50% margin capture for your firm.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href={url("/contact")}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "linear-gradient(135deg, #A78BFA, #7C3AED)", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 0 24px rgba(167,139,250,0.25)" }}>
              Calculate Your Savings <Icon name="arrowRight" size={16} />
            </a>
            <Button variant="ghost" href="/contact">See How RenewalEngine Works</Button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["190+ Jurisdictions", "Full Cost Transparency", "27.7% Avg Savings", "50% Margin Capture"].map((badge) => (
            <span key={badge} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 16px", borderRadius: 9999, background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A78BFA", display: "inline-block", flexShrink: 0 }} />
              {badge}
            </span>
          ))}
        </div>

        {/* Product mockup */}
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: 3, borderRadius: 23, background: "conic-gradient(from var(--angle, 0deg), transparent 40%, #A78BFA 55%, #7C3AED 68%, #A78BFA 80%, transparent 90%)", animation: "borderSpin 5s linear infinite", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" } as React.CSSProperties}>
          <div style={{ position: "relative", zIndex: 1, borderRadius: 20, overflow: "hidden", background: "#0d0d1a" }}>
            {/* Browser chrome */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
              <div className="flex gap-1.5">
                {["#FF5F57","#FFBD2E","#28CA42"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.8 }} />)}
              </div>
              <div className="flex-1 text-center">
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)", padding: "4px 14px", borderRadius: 6, fontFamily: "'General Sans', sans-serif" }}>app.renewalengine.com</span>
              </div>
            </div>
            {/* Dashboard */}
            <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", minHeight: 400 }}>
              {/* Sidebar */}
              <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)", padding: 16, background: "rgba(255,255,255,0.01)" }}>
                <div className="flex items-center gap-2 mb-6">
                  <EngineIcon engine="renewal" size={24} variant="dark" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>RenewalEngine</span>
                </div>
                {[{ l: "Dashboard", active: true }, { l: "Renewals" }, { l: "Forecasting" }, { l: "Invoices" }, { l: "Reports" }].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, marginBottom: 2, background: item.active ? "rgba(167,139,250,0.15)" : "transparent", color: item.active ? "#A78BFA" : "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: item.active ? 600 : 500 }}>
                    {item.l}
                  </div>
                ))}
              </div>
              {/* Main */}
              <div style={{ padding: 24 }}>
                <div className="flex justify-between items-center mb-5">
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Renewal Overview</span>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 9999, background: "rgba(22,163,74,0.12)", color: "#4ADE80", border: "1px solid rgba(22,163,74,0.2)" }}>Q2 2026</span>
                </div>
                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
                  {[
                    { l: "Due This Quarter", v: "47",    c: "#A78BFA" },
                    { l: "Avg Savings",      v: "27.7%", c: "#16A34A" },
                    { l: "Margin Captured",  v: "50%",   c: "#16A34A" },
                    { l: "Total Value",      v: "$12.4k", c: "#5B7FFF" },
                  ].map((s, i) => (
                    <div key={i} style={{ padding: 14, borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ fontSize: 22, fontWeight: 800, color: s.c, marginBottom: 2 }}>{s.v}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                {/* Renewal rows */}
                <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", display: "grid", gridTemplateColumns: "1.4fr 0.8fr 0.8fr 0.8fr 0.8fr 0.6fr 0.8fr", padding: "0 14px 8px", gap: 8 }}>
                  <span>ASSET</span><span>OFFICE</span><span>OFFICIAL FEE</span><span>PROVIDER</span><span>OURS</span><span>SAVING</span><span>ACTION</span>
                </div>
                {renewalRows.map((r, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 0.8fr 0.8fr 0.8fr 0.6fr 0.8fr", alignItems: "center", padding: "9px 14px", borderRadius: 8, background: "rgba(255,255,255,0.02)", marginBottom: 4, fontSize: 12, gap: 8 }}>
                    <span style={{ fontWeight: 600, color: "#fff" }}>{r.mark}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>{r.jurisdiction}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>{r.official}</span>
                    <span style={{ color: "rgba(255,255,255,0.3)", textDecoration: "line-through", fontSize: 11 }}>{r.provider}</span>
                    <span style={{ color: "#A78BFA", fontWeight: 600 }}>{r.ours}</span>
                    <span style={{ color: "#16A34A", fontWeight: 700 }}>{r.savings}</span>
                    <span style={{ padding: "3px 10px", borderRadius: 6, background: `${r.actionColor}18`, color: r.actionColor, fontWeight: 600, fontSize: 11, textAlign: "center" }}>{r.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
