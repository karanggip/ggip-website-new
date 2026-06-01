import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import EngineIcon from "../ui/EngineIcon";
import { url } from "../../utils/url";

const engines = [
  {
    engine: "docket" as const,
    name: "DocketEngine",
    tagline: "Automated IP docketing across 100+ jurisdictions.",
    desc: "Real-time sync, AI portfolio insights, and a modern interface your team masters in hours.",
    status: "LIVE",
    statusColor: "#16A34A",
    accent: "91,127,255",
    href: "/products/docketengine",
  },
  {
    engine: "renewal" as const,
    name: "RenewalEngine",
    tagline: "IP renewals transformed from cost centre to margin driver.",
    desc: "Full cost transparency across 190+ jurisdictions. Keep client ownership while capturing the margin.",
    status: "LIVE",
    statusColor: "#16A34A",
    accent: "167,139,250",
    href: "/products/renewalengine",
  },
];

const futureEngines = [
  { name: "InventionEngine",  desc: "Invention disclosure capture and patent prosecution workflow." },
  { name: "OppositionEngine", desc: "Trademark opposition tracking, response management, and outcome analytics." },
  { name: "LicensingEngine",  desc: "License management, royalty tracking, and contract intelligence." },
];

export default function EnginesLayer() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.08) 0%, transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg absolute inset-0 opacity-25" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 14 }}>Layer 3 · The Application</span>
            <h2 className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Purpose-built engines. <br />Powered by the same foundation.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>
              Each engine does one thing exceptionally well. They share the same data infrastructure underneath — which means your firm's portfolio data is live in every engine, with no duplication, no sync gaps, and no separate logins.
            </p>
          </div>
        </FadeIn>

        {/* Live engines */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }}
          className="max-md:grid-cols-1">
          {engines.map((e, i) => (
            <FadeIn key={i} delay={i * 100}>
              <a href={url(e.href)} style={{ display: "block", padding: "32px 30px", borderRadius: 18, background: `rgba(${e.accent},0.04)`, border: `1px solid rgba(${e.accent},0.2)`, textDecoration: "none", transition: "all 0.25s" }}
                onMouseEnter={(e2) => { const el = e2.currentTarget as HTMLAnchorElement; el.style.borderColor = `rgba(${e.accent},0.45)`; el.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e2) => { const el = e2.currentTarget as HTMLAnchorElement; el.style.borderColor = `rgba(${e.accent},0.2)`; el.style.transform = "translateY(0)"; }}>
                <div className="flex items-start gap-4 mb-4">
                  <EngineIcon engine={e.engine} size={52} variant="dark" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span style={{ fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{e.name}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 5, background: "rgba(22,163,74,0.15)", color: "#4ADE80", border: "1px solid rgba(22,163,74,0.3)" }}>{e.status}</span>
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>{e.tagline}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif", marginBottom: 16 }}>{e.desc}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#5B7FFF" }}>
                  Explore {e.name} <Icon name="arrowRight" size={14} />
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Future engines */}
        <FadeIn delay={250}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>On the roadmap</span>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
              className="max-md:grid-cols-1">
              {futureEngines.map((e, i) => (
                <div key={i} style={{ padding: "20px 24px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.1)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>{e.name}</span>
                    <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 9999, background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)", letterSpacing: "0.05em" }}>COMING</span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.35)", fontFamily: "'General Sans', sans-serif" }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
