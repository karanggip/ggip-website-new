import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const values = [
  {
    icon: "layers" as const,
    name: "Engineered Clarity",
    desc: "We made it simple on purpose — and that's harder than making it complex. Every interface decision, every workflow, every API endpoint is designed to reduce cognitive load for the people using it.",
    color: "#5B7FFF",
  },
  {
    icon: "user" as const,
    name: "Practitioner-First",
    desc: "We build for the person doing the work, not just the person signing the cheque. Our team has managed IP portfolios. We've lived the frustration. That's why the product feels right the first time you use it.",
    color: "#A78BFA",
  },
  {
    icon: "target" as const,
    name: "Earned Confidence",
    desc: "We've done the work. We have the data. We know this is better. Not arrogance — the confidence that comes from building carefully and testing rigorously before making any claim.",
    color: "#5B7FFF",
  },
  {
    icon: "data" as const,
    name: "Infrastructure Thinking",
    desc: "We think in systems, not features. Every decision we make is evaluated for how it compounds over time — whether it makes the data layer more valuable, the AI smarter, or the next engine easier to build.",
    color: "#A78BFA",
  },
];

export default function Values() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div style={{ marginBottom: 56 }}>
            <h2 className="font-display font-extrabold mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              What we stand for.
            </h2>
            <p style={{ fontSize: 16, color: "#5C5C6E", maxWidth: 480, fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
              Four values that guide every product decision, every hire, and every customer conversation.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
          className="max-md:grid-cols-1">
          {values.map((v, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div style={{ padding: "36px 32px", borderRadius: 16, border: "1px solid #E2E2EA", background: "#fff", height: "100%", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "linear-gradient(135deg, #EEEDFA, #EEF2FF)"; el.style.transform = "translateY(-3px)"; el.style.borderColor = v.color + "44"; el.style.boxShadow = `0 8px 32px ${v.color}11`; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "#fff"; el.style.transform = "translateY(0)"; el.style.borderColor = "#E2E2EA"; el.style.boxShadow = "none"; }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: v.color, marginBottom: 18 }}>
                  <Icon name={v.icon} size={22} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{v.name}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
