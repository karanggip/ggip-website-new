import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import EngineIcon from "../ui/EngineIcon";
import Button from "../ui/Button";
import { url } from "../../utils/url";

const sidebarItems = [
  { icon: "chart" as const, label: "Dashboard", active: true },
  { icon: "docket" as const, label: "Portfolio" },
  { icon: "bell" as const, label: "Deadlines" },
  { icon: "globe" as const, label: "Jurisdictions" },
  { icon: "check" as const, label: "Audit Log" },
  { icon: "file" as const, label: "Reports" },
];

const statCards = [
  { label: "Total Assets",    value: "2,847", color: "#5B7FFF" },
  { label: "Due This Month",  value: "23",    color: "#D97706" },
  { label: "At Risk",         value: "7",     color: "#DC2626" },
  { label: "Health Score",    value: "94%",   color: "#16A34A" },
];

const portfolioRows = [
  { mark: "AURORA™",      jurisdiction: "USPTO", status: "Active",  statusColor: "#16A34A", deadline: "Jun 12" },
  { mark: "NEXAFLOW®",    jurisdiction: "EUIPO", status: "Pending", statusColor: "#D97706", deadline: "Jun 18" },
  { mark: "STRATOSYNC™",  jurisdiction: "WIPO",  status: "At Risk", statusColor: "#DC2626", deadline: "Jun 04" },
  { mark: "QUANTLEAP™",   jurisdiction: "JPO",   status: "Active",  statusColor: "#16A34A", deadline: "Jul 02" },
];

const features = [
  { icon: "sync" as const,   title: "Real-time sync",   desc: "100+ IP offices, always current" },
  { icon: "data" as const,   title: "Zero data entry",  desc: "Office data flows direct to your docket" },
  { icon: "layers" as const, title: "Free migration",   desc: "Onboard in under a week" },
  { icon: "ai" as const,     title: "AI insights",      desc: "Portfolio health & risk scoring" },
];

export default function DocketShowcase() {
  return (
    <section style={{ paddingTop: 40, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.12) 0%, transparent 70%)", top: "10%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div className="text-center mb-4">
            {/* Animated engine icon */}
            <div style={{ display: "inline-flex", position: "relative", marginBottom: 28 }}>
              {/* Soft glow backdrop */}
              <div style={{ position: "absolute", inset: -24, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.25) 0%, transparent 70%)", filter: "blur(12px)", animation: "iconGlow 3s ease-in-out infinite", pointerEvents: "none" }} />
              {/* Ping rings */}
              {[0, 0.9].map((delay, i) => (
                <div key={i} style={{ position: "absolute", inset: -6, borderRadius: 26, border: `1px solid rgba(91,127,255,${0.45 - i * 0.15})`, animation: `pingRing 2.8s ease-out ${delay}s infinite`, pointerEvents: "none" }} />
              ))}
              {/* Icon — floating */}
              <div style={{ animation: "iconFloat 4s ease-in-out infinite", position: "relative", zIndex: 1 }}>
                <EngineIcon engine="docket" size={80} variant="dark" />
              </div>
            </div>

            <br />
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 9999, background: "rgba(91,127,255,0.1)", border: "1px solid rgba(91,127,255,0.2)", fontSize: 12, fontWeight: 700, color: "#5B7FFF", letterSpacing: "0.05em", marginBottom: 20 }}>
              <Icon name="sparkles" size={14} /> FLAGSHIP
            </span>
            <h2 className="font-display font-extrabold text-white mx-auto mb-4"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 680 }}>
              Meet <span className="gradient-text">DocketEngine</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.45)", maxWidth: 540, margin: "0 auto 40px", fontFamily: "'General Sans', sans-serif" }}>
              Automated IP docketing across 100+ jurisdictions. Real-time sync, AI portfolio insights, and a modern interface your team masters in hours.
            </p>
          </div>
        </FadeIn>

        {/* Product mockup */}
        <FadeIn delay={150}>
          <div className="anim-border" style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ position: "relative", zIndex: 1, borderRadius: 20, overflow: "hidden", background: "#0d0d1a", border: "1px solid rgba(255,255,255,0.06)" }}>
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
              <div className="home-mockup-dashboard" style={{ display: "grid", gridTemplateColumns: "200px 1fr", minHeight: 380 }}>
                {/* Sidebar */}
                <div className="home-mockup-sidebar" style={{ borderRight: "1px solid rgba(255,255,255,0.06)", padding: 16, background: "rgba(255,255,255,0.01)" }}>
                  <div className="flex items-center gap-2 mb-6">
                    <EngineIcon engine="docket" size={24} variant="dark" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>DocketEngine</span>
                  </div>
                  {sidebarItems.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, marginBottom: 2, background: item.active ? "rgba(91,127,255,0.15)" : "transparent", color: item.active ? "#5B7FFF" : "rgba(255,255,255,0.4)" }}>
                      <Icon name={item.icon} size={16} />
                      <span style={{ fontSize: 12, fontWeight: item.active ? 600 : 500 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
                {/* Main */}
                <div className="home-mockup-main" style={{ padding: 20 }}>
                  <div className="flex justify-between items-center mb-4">
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Portfolio Overview</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 6px #16A34A", display: "inline-block" }} />
                      Synced 2 min ago
                    </span>
                  </div>
                  <div className="home-mockup-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
                    {statCards.map((s, i) => (
                      <div key={i} style={{ padding: 14, borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: s.color, marginBottom: 2 }}>{s.value}</div>
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
        </FadeIn>

        {/* Feature highlights */}
        <FadeIn delay={300}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 40, maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}
            className="max-md:!grid-cols-2">
            {features.map((f, i) => (
              <div key={i} className="text-center">
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(91,127,255,0.1)", border: "1px solid rgba(91,127,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7FFF", margin: "0 auto 12px" }}>
                  <Icon name={f.icon} size={20} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{f.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'General Sans', sans-serif" }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="text-center mt-10">
            <Button href="/products/docketengine">Explore DocketEngine <Icon name="arrowRight" size={16} /></Button>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .home-mockup-dashboard {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
          }
          .home-mockup-sidebar { display: none !important; }
          .home-mockup-main { padding: 14px !important; }
          .home-mockup-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
