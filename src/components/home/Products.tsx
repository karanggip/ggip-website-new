import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const products = [
  {
    icon: "docket" as const, name: "DocketEngine",
    tagline: "Automated IP docketing across 100+ jurisdictions.",
    desc: "Real-time sync, AI portfolio health insights, and a modern interface your team masters in hours. Built for firms that have outgrown spreadsheets but refuse to overpay for legacy suites.",
    features: ["Real-time sync with USPTO, EUIPO, WIPO, JPO, KIPO", "AI-powered portfolio health & risk scoring", "Bulk import, free migration, competitor watch"],
    accent: "91,127,255", accentHex: "#5B7FFF", cta: "Explore DocketEngine", href: "/products/docketengine",
  },
  {
    icon: "renewal" as const, name: "RenewalEngine",
    tagline: "IP renewals transformed from cost center to margin driver.",
    desc: "Full cost transparency across 190+ jurisdictions. Keep client ownership while running on automated infrastructure — and capture the margin yourself instead of passing it to a third party.",
    features: ["190+ jurisdictions with transparent pricing", "27.7% average savings vs traditional providers", "One-click renew/hold/lapse with forecasting"],
    accent: "167,139,250", accentHex: "#A78BFA", cta: "Explore RenewalEngine", href: "/products/renewalengine",
  },
];

export default function Products() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, background: "#0d0d1a" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <span className="overline block mb-4">The engines</span>
          <h2 className="font-display font-extrabold text-white mb-14"
            style={{ fontSize: "clamp(32px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            One platform. Two engines. More to come.
          </h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="max-md:grid-cols-1">
          {products.map((p, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div
                style={{ borderRadius: 20, border: `1px solid rgba(${p.accent},0.15)`, background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px rgba(${p.accent},0.15)`; (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${p.accent},0.4)`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${p.accent},0.15)`; }}
              >
                <div style={{ height: 3, background: `linear-gradient(90deg, ${p.accentHex}, transparent)` }} />
                <div style={{ padding: 36, flex: 1, display: "flex", flexDirection: "column" }}>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(${p.accent},0.12)`, border: `1px solid rgba(${p.accent},0.25)`, display: "flex", alignItems: "center", justifyContent: "center", color: p.accentHex }}>
                      <Icon name={p.icon} size={26} />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span style={{ fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{p.name}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 5, background: "rgba(22,163,74,0.15)", color: "#4ADE80", border: "1px solid rgba(22,163,74,0.3)" }}>LIVE</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 12, lineHeight: 1.4 }}>{p.tagline}</p>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 24, fontFamily: "'General Sans', sans-serif" }}>{p.desc}</p>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                    {p.features.map((f, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <span style={{ color: p.accentHex, flexShrink: 0, marginTop: 1, display: "flex" }}><Icon name="check" size={16} stroke={2.5} /></span>
                        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, fontFamily: "'General Sans', sans-serif" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={p.href}
                    className="flex items-center justify-center gap-2 w-full no-underline transition-all duration-200"
                    style={{ padding: "13px 24px", borderRadius: 10, background: `rgba(${p.accent},0.12)`, color: p.accentHex, border: `1px solid rgba(${p.accent},0.25)`, fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = `rgba(${p.accent},0.2)`)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = `rgba(${p.accent},0.12)`)}
                  >
                    {p.cta} <Icon name="arrowRight" size={16} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
