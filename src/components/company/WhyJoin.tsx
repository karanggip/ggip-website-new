import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const reasons = [
  {
    icon: "sparkles" as const,
    title: "Early-stage impact",
    body: "We're at the foundational moment. The architecture decisions, product decisions, and culture decisions being made right now will shape this company for the next decade. Your work compounds.",
    accent: "#5B7FFF",
  },
  {
    icon: "handshake" as const,
    title: "Practitioner × technologist",
    body: "We pair deep IP domain expertise with serious product engineering. You'll work with people who've managed IP portfolios at scale and people who've shipped technology products to millions of users. Both, on the same team.",
    accent: "#A78BFA",
  },
  {
    icon: "globe" as const,
    title: "A globally important problem",
    body: "Intellectual property is one of the most valuable asset classes on earth — and it's managed with some of the worst software. We're building the infrastructure that fixes that. The market is enormous, underserved, and ready.",
    accent: "#5B7FFF",
  },
  {
    icon: "engine" as const,
    title: "Modern stack, no legacy",
    body: "Cloud-native from day one. Modern tooling. Sensible engineering practices. No 15-year-old codebase to navigate around. You'll build new things, not patch old ones.",
    accent: "#A78BFA",
  },
];

export default function WhyJoin() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div style={{ marginBottom: 56 }}>
            <h2 className="font-display font-extrabold mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Why join Guarded Growth.
            </h2>
            <p style={{ fontSize: 17, color: "#5C5C6E", maxWidth: 520, fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
              Four reasons people choose to build with us — and what makes the work different.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
          className="max-md:grid-cols-1">
          {reasons.map((r, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div style={{ padding: "36px 32px", borderRadius: 16, border: "1px solid #E2E2EA", background: "#fff", height: "100%", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "linear-gradient(135deg, #EEEDFA, #EEF2FF)"; el.style.transform = "translateY(-3px)"; el.style.borderColor = r.accent + "44"; el.style.boxShadow = `0 12px 32px ${r.accent}15`; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "#fff"; el.style.transform = "translateY(0)"; el.style.borderColor = "#E2E2EA"; el.style.boxShadow = "none"; }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: r.accent, marginBottom: 18 }}>
                  <Icon name={r.icon} size={22} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{r.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{r.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
