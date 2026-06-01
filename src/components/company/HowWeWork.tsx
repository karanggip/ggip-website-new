import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const principles = [
  {
    icon: "target" as const,
    title: "Small, deliberate team",
    body: "Every hire matters. We hire slowly, with high signal — and give people room to do the best work of their careers.",
  },
  {
    icon: "data" as const,
    title: "Infrastructure thinking",
    body: "We think in systems, not features. Decisions are evaluated for how they compound over time — not just the next sprint.",
  },
  {
    icon: "user" as const,
    title: "Practitioner-first",
    body: "We build for the person doing the work. That means real conversations with real customers — not feature requests from spreadsheets.",
  },
  {
    icon: "layers" as const,
    title: "Engineered clarity",
    body: "Simple isn't easy. We invest the work to make the complex feel obvious — in our product, our code, and our company.",
  },
  {
    icon: "globe" as const,
    title: "Remote-friendly, async-first",
    body: "We work across timezones with deep work blocks, clear writing, and a high bar for meetings. Calendars are mostly empty.",
  },
  {
    icon: "shield" as const,
    title: "Long-term oriented",
    body: "We're building a 20-year company, not flipping a 2-year one. The platform compounds, and so do the careers built on it.",
  },
];

export default function HowWeWork() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.08) 0%, transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg absolute inset-0 opacity-25" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-display font-extrabold text-white mx-auto mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 640 }}>
              How we work.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", maxWidth: 520, margin: "0 auto", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
              Six principles that shape how we hire, build, and operate as a team.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}
          className="max-md:grid-cols-1">
          {principles.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ padding: "28px 26px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", height: "100%", transition: "border-color 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(91,127,255,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(91,127,255,0.1)", border: "1px solid rgba(91,127,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7FFF", marginBottom: 16 }}>
                  <Icon name={p.icon} size={18} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
