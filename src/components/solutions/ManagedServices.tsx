import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

const included = [
  {
    icon: "layers" as const,
    title: "Migration & onboarding",
    body: "We handle the full data transfer from your current system. Cleanup, normalisation, mapping, validation — your team stays focused on client work while we do the unglamorous part.",
  },
  {
    icon: "user" as const,
    title: "Ongoing portfolio management",
    body: "A dedicated operations specialist who knows your portfolio inside-out. Routine docket reviews, deadline triaging, exception handling, status verification — done for you.",
  },
  {
    icon: "chart" as const,
    title: "Custom reporting cadence",
    body: "Quarterly board reports, monthly executive summaries, ad-hoc deep dives. We build what your stakeholders need and deliver on schedule — no more last-minute spreadsheet panic.",
  },
  {
    icon: "handshake" as const,
    title: "Dedicated Customer Success Manager",
    body: "A single point of contact who knows your business, your portfolio, and your team. Quarterly business reviews. Strategic guidance on platform usage and roadmap.",
  },
  {
    icon: "graduation" as const,
    title: "Training & enablement",
    body: "Live training sessions for new hires. Internal documentation tailored to your workflows. Recorded walkthroughs of your specific configuration.",
  },
  {
    icon: "shield" as const,
    title: "SLA-backed responsiveness",
    body: "Defined response and resolution targets. Priority routing for time-sensitive issues. Direct line to our engineering team when you need it.",
  },
];

const whoItsFor = [
  {
    icon: "engine" as const,
    title: "Transitioning from legacy systems",
    body: "Coming off Clarivate, Anaqua, Dennemeyer, or another legacy platform. Need help migrating data, training the team, and standing up new workflows without disruption.",
  },
  {
    icon: "user" as const,
    title: "Without dedicated IP ops staff",
    body: "Small in-house teams or growing firms that haven't yet hired an operations lead. We act as your operations function — without the full-time headcount.",
  },
  {
    icon: "scale" as const,
    title: "Large portfolios needing hands-on support",
    body: "5,000+ asset portfolios with ongoing prosecution, renewals, and licensing work. Volume that justifies dedicated operational attention.",
  },
  {
    icon: "globe" as const,
    title: "Post-acquisition portfolio consolidation",
    body: "Merging IP portfolios after an M&A event. We help reconcile, deduplicate, normalise, and migrate everything into a single source of truth.",
  },
];

export default function ManagedServices() {
  return (
    <>
      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden", background: "#050510" }}>
        <div style={{ position: "absolute", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,42,110,0.45) 0%, transparent 65%)", top: "-10%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
        <div className="grid-bg-animated absolute inset-0" />

        <div className="max-w-content mx-auto px-7 relative">
          <FadeIn>
            <div style={{ maxWidth: 820 }}>
              <div className="flex items-center gap-3 mb-6">
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(91,127,255,0.12)", border: "1px solid rgba(91,127,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7FFF" }}>
                  <Icon name="handshake" size={22} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase" }}>Managed Services</span>
              </div>
              <h1 className="font-display font-extrabold text-white mb-6"
                style={{ fontSize: "clamp(36px, 4.8vw, 58px)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
                Let us run your IP operations infrastructure.
              </h1>
              <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 640, fontFamily: "'General Sans', sans-serif" }}>
                For firms transitioning from legacy systems, in-house teams without dedicated IP ops staff, or organisations needing hands-on support — we provide the full operational layer on top of our platform.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
        <div className="max-w-content mx-auto px-7">
          <FadeIn>
            <div style={{ marginBottom: 48 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 12 }}>The service</span>
              <h2 className="font-display font-extrabold mb-3"
                style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                What's included.
              </h2>
              <p style={{ fontSize: 16, color: "#5C5C6E", maxWidth: 580, fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
                Six components that together replace the operational burden of running IP infrastructure yourself.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
            className="max-md:grid-cols-1">
            {included.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ padding: "28px 30px", borderRadius: 16, border: "1px solid #E2E2EA", background: "#fff", height: "100%", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "linear-gradient(135deg, #EEEDFA, #EEF2FF)"; el.style.transform = "translateY(-3px)"; el.style.borderColor = "#5B7FFF44"; el.style.boxShadow = "0 12px 32px rgba(91,127,255,0.08)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "#fff"; el.style.transform = "translateY(0)"; el.style.borderColor = "#E2E2EA"; el.style.boxShadow = "none"; }}>
                  <div style={{ width: 44, height: 44, borderRadius: 11, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D2A6E", marginBottom: 16 }}>
                    <Icon name={item.icon} size={22} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ paddingTop: 80, paddingBottom: 80, background: "#0d0d1a" }}>
        <div className="max-w-content mx-auto px-7">
          <FadeIn>
            <div style={{ marginBottom: 48 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 12 }}>Right fit</span>
              <h2 className="font-display font-extrabold text-white mb-3"
                style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Who managed services is for.
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 560, fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
                Four common situations where firms reach for our managed service.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
            className="max-md:grid-cols-1">
            {whoItsFor.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ padding: "28px 30px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", height: "100%", transition: "border-color 0.25s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(91,127,255,0.3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(91,127,255,0.1)", border: "1px solid rgba(91,127,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7FFF", marginBottom: 16 }}>
                    <Icon name={item.icon} size={22} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / CTA */}
      <section style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 700, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.1) 0%, transparent 60%)", top: "-15%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
        <div className="grid-bg-animated absolute inset-0" />

        <div className="max-w-content mx-auto px-7 relative" style={{ maxWidth: 760 }}>
          <FadeIn>
            <div style={{ padding: "48px 56px", borderRadius: 20, background: "linear-gradient(135deg, rgba(45,42,110,0.5), rgba(91,127,255,0.15))", border: "1px solid rgba(91,127,255,0.25)", backdropFilter: "blur(16px)", textAlign: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 14 }}>Pricing</span>
              <h2 className="font-display font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(26px, 3vw, 36px)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Custom — scoped to your portfolio.
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 8, fontFamily: "'General Sans', sans-serif", lineHeight: 1.7 }}>
                Pricing depends on portfolio size, service level, and reporting cadence. Typically structured as a monthly retainer with a defined scope of work and SLA.
              </p>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 32, fontFamily: "'General Sans', sans-serif", lineHeight: 1.7 }}>
                We'll send a tailored proposal within a week of the first scoping call.
              </p>
              <a href={url("/contact")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "#fff", color: "#2D2A6E", fontSize: 15, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", boxShadow: "0 4px 16px rgba(91,127,255,0.2)" }}>
                Talk to Our Team
                <Icon name="arrowRight" size={15} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
