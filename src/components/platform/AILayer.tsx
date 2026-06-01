import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const capabilities = [
  {
    icon: "chart" as const,
    title: "Portfolio Health Scoring",
    desc: "A live score for your entire portfolio — informed by deadline coverage, status integrity, jurisdiction risk, and historical patterns. From asset-level red flags to firm-wide trends.",
    status: "In Progress",
  },
  {
    icon: "shield" as const,
    title: "Risk Detection & Alerts",
    desc: "Proactive identification of at-risk assets: upcoming deadlines, missing filings, status changes, jurisdiction-specific compliance gaps. Surfaced before they become problems.",
    status: "In Progress",
  },
  {
    icon: "eye" as const,
    title: "Competitive Monitoring",
    desc: "Track competitor filings in real time. Similarity analysis against your portfolio. Alerts when a competitor files in your client's space — before they do.",
    status: "In Progress",
  },
  {
    icon: "sparkles" as const,
    title: "Predictive Analytics",
    desc: "Forecast renewal costs, registration timelines, and portfolio growth. Pattern recognition trained on the structured data layer — getting more accurate with every jurisdiction we add.",
    status: "Roadmap",
  },
];

export default function AILayer() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#0d0d1a" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#A78BFA", textTransform: "uppercase", display: "block", marginBottom: 14 }}>Layer 2 · Intelligence</span>
            <h2 className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              AI that runs on structured data.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>
              The AI layer sits on top of the data infrastructure — and that's the whole point. Most legal AI is layered on top of unstructured documents and guesses at meaning. Our intelligence layer reads structured IP data from verified sources, so its outputs are explainable, auditable, and accurate.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          className="max-md:grid-cols-1">
          {capabilities.map((cap, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div style={{ padding: "28px 30px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", height: "100%", transition: "all 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(167,139,250,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
                <div className="flex items-start justify-between mb-4">
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#A78BFA" }}>
                    <Icon name={cap.icon} size={22} />
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 9999, background: cap.status === "In Progress" ? "rgba(217,119,6,0.12)" : "rgba(255,255,255,0.04)", color: cap.status === "In Progress" ? "#D97706" : "rgba(255,255,255,0.4)", border: cap.status === "In Progress" ? "1px solid rgba(217,119,6,0.25)" : "1px solid rgba(255,255,255,0.1)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {cap.status}
                  </span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>{cap.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>{cap.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textAlign: "center", marginTop: 32, fontFamily: "'General Sans', sans-serif", maxWidth: 560, margin: "32px auto 0" }}>
            The intelligence layer is actively being built. As capabilities ship, they activate automatically for subscribers on the Growth and Scale plans.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
