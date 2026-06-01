import EngineIcon from "../ui/EngineIcon";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

const statCards = [
  { label: "Total Assets",   value: "2,847", color: "#5B7FFF" },
  { label: "Due This Month", value: "23",    color: "#D97706" },
  { label: "At Risk",        value: "7",     color: "#DC2626" },
  { label: "Health Score",   value: "94%",   color: "#16A34A" },
];

const portfolioRows = [
  { mark: "AURORA™",     jurisdiction: "USPTO", status: "Active",  statusColor: "#16A34A", deadline: "Jun 12" },
  { mark: "NEXAFLOW®",   jurisdiction: "EUIPO", status: "Pending", statusColor: "#D97706", deadline: "Jun 18" },
  { mark: "STRATOSYNC™", jurisdiction: "WIPO",  status: "At Risk", statusColor: "#DC2626", deadline: "Jun 04" },
  { mark: "QUANTLEAP™",  jurisdiction: "JPO",   status: "Active",  statusColor: "#16A34A", deadline: "Jul 02" },
];

const sidebarItems = [
  { label: "Dashboard",       active: true  },
  { label: "Portfolio"                      },
  { label: "Deadlines"                      },
  { label: "Jurisdictions"                  },
  { label: "Competitor Watch"               },
  { label: "Reports"                        },
];

export default function DocketHero() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden", background: "#050510" }}>
      {/* Background */}
      <div style={{ position: "absolute", width: 800, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.12) 0%, transparent 65%)", top: "-10%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,42,110,0.4) 0%, transparent 65%)", top: "10%", left: "5%", filter: "blur(60px)", animation: "orb1 12s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 65%)", top: "20%", right: "5%", filter: "blur(60px)", animation: "orb2 14s ease-in-out infinite" }} />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="max-w-content mx-auto px-7 relative">
        {/* Icon + headline */}
        <div className="text-center mb-14">
          {/* Animated icon */}
          <div style={{ display: "inline-flex", position: "relative", marginBottom: 28 }}>
            <div style={{ position: "absolute", inset: -24, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.22) 0%, transparent 70%)", filter: "blur(12px)", animation: "iconGlow 3s ease-in-out infinite", pointerEvents: "none" }} />
            {[0, 1.0].map((delay, i) => (
              <div key={i} style={{ position: "absolute", inset: -6, borderRadius: 26, border: `1px solid rgba(91,127,255,${0.4 - i * 0.15})`, animation: `pingRing 2.8s ease-out ${delay}s infinite`, pointerEvents: "none" }} />
            ))}
            <div style={{ animation: "iconFloat 4s ease-in-out infinite", position: "relative", zIndex: 1 }}>
              <EngineIcon engine="docket" size={80} variant="dark" />
            </div>
          </div>

          <h1 className="font-display font-extrabold text-white mx-auto mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: 820 }}>
            Automated IP docketing powered by{" "}
            <span className="gradient-text">global data infrastructure.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: 580, margin: "0 auto 36px", fontFamily: "'General Sans', sans-serif" }}>
            DocketEngine syncs directly with USPTO, EUIPO, WIPO, JPO, KIPO, and 100+ IP offices worldwide. No manual data entry. AI-powered portfolio health insights. A modern interface your team adopts in hours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/demo">Start Free Trial <Icon name="arrowRight" size={16} /></Button>
            <Button variant="ghost" href="/demo">See DocketEngine in Action</Button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["100+ IP Offices", "Real-time Sync", "AI Portfolio Health", "Free Migration"].map((badge) => (
            <span key={badge} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 16px", borderRadius: 9999, background: "rgba(91,127,255,0.08)", border: "1px solid rgba(91,127,255,0.18)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B7FFF", display: "inline-block", flexShrink: 0 }} />
              {badge}
            </span>
          ))}
        </div>

        {/* Product mockup */}
        <div style={{ maxWidth: 1000, margin: "0 auto", borderRadius: 20, overflow: "hidden", background: "#0d0d1a", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
          {/* Browser chrome */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
            <div className="flex gap-1.5">
              {["#FF5F57","#FFBD2E","#28CA42"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.8 }} />)}
            </div>
            <div className="flex-1 text-center">
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)", padding: "4px 14px", borderRadius: 6, fontFamily: "'General Sans', sans-serif" }}>app.docketengine.com</span>
            </div>
          </div>
          {/* Dashboard */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", minHeight: 400 }}>
            {/* Sidebar */}
            <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)", padding: 16, background: "rgba(255,255,255,0.01)" }}>
              <div className="flex items-center gap-2 mb-6">
                <EngineIcon engine="docket" size={24} variant="dark" />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>DocketEngine</span>
              </div>
              {sidebarItems.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, marginBottom: 2, background: item.active ? "rgba(91,127,255,0.15)" : "transparent", color: item.active ? "#5B7FFF" : "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: item.active ? 600 : 500 }}>
                  {item.label}
                </div>
              ))}
            </div>
            {/* Main */}
            <div style={{ padding: 24 }}>
              <div className="flex justify-between items-center mb-5">
                <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Portfolio Overview</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 6px #16A34A", display: "inline-block", animation: "pulseDot 2s ease-in-out infinite" }} />
                  Synced 2 min ago
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
                {statCards.map((s, i) => (
                  <div key={i} style={{ padding: 14, borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: s.color, marginBottom: 2 }}>{s.value}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                {portfolioRows.map((r, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 0.8fr", alignItems: "center", padding: "10px 14px", borderRadius: 8, background: "rgba(255,255,255,0.02)", fontSize: 12 }}>
                    <span style={{ fontWeight: 600, color: "#fff" }}>{r.mark}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>{r.jurisdiction}</span>
                    <span><span style={{ padding: "2px 8px", borderRadius: 9999, fontSize: 10, fontWeight: 600, background: `${r.statusColor}22`, color: r.statusColor }}>{r.status}</span></span>
                    <span style={{ color: "rgba(255,255,255,0.4)", textAlign: "right" }}>{r.deadline}</span>
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
