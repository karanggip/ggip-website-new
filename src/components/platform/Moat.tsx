import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const flywheelSteps = [
  { icon: "globe" as const,  label: "More jurisdictions added",      desc: "Each new office expands the data layer's reach and value." },
  { icon: "data" as const,   label: "Data layer more complete",      desc: "Broader coverage means richer signal for every workflow built on top." },
  { icon: "ai" as const,     label: "AI gets more accurate",         desc: "More structured data trains better models — risk scores, predictions, alerts." },
  { icon: "engine" as const, label: "Engines become more valuable",  desc: "Every engine inherits the improved intelligence layer automatically." },
  { icon: "building" as const, label: "More firms adopt the platform", desc: "Better engines attract more firms — who bring more data variety." },
];

export default function Moat() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div className="text-center mb-12" style={{ maxWidth: 680, margin: "0 auto 56px" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 14 }}>Why this compounds</span>
            <h2 className="font-display font-extrabold mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              The architecture is the moat.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>
              Competitors can copy a feature. They can't replicate the data infrastructure. Every jurisdiction added, every engine shipped, every firm onboarded makes the platform more valuable — for everyone using it.
            </p>
          </div>
        </FadeIn>

        {/* Flywheel */}
        <div style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
          {/* Center label */}
          <FadeIn delay={400}>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 180, height: 180, borderRadius: "50%", background: "linear-gradient(135deg, #2D2A6E, #5B7FFF)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 16px 48px rgba(45,42,110,0.25)", zIndex: 2 }}
              className="max-md:!relative max-md:!left-auto max-md:!top-auto max-md:!translate-x-0 max-md:!translate-y-0 max-md:!mx-auto max-md:!mb-8">
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", opacity: 0.7, marginBottom: 6 }}>THE FLYWHEEL</div>
              <div style={{ fontSize: 16, fontWeight: 800, textAlign: "center", letterSpacing: "-0.01em", padding: "0 18px", lineHeight: 1.25 }}>Infrastructure compounds</div>
            </div>
          </FadeIn>

          {/* Steps in a circle */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 360px", padding: "20px 0", position: "relative" }}
            className="max-md:!grid-cols-1 max-md:!gap-4">
            {flywheelSteps.map((step, i) => {
              const isRight = i % 2 === 1;
              return (
                <FadeIn key={i} delay={i * 100}>
                  <div style={{
                    padding: "24px 28px",
                    borderRadius: 14,
                    background: "#fff",
                    border: "1px solid #E2E2EA",
                    marginBottom: 16,
                    gridColumn: isRight ? 2 : 1,
                    transition: "all 0.25s",
                  }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#5B7FFF44"; el.style.boxShadow = "0 8px 24px rgba(91,127,255,0.1)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#E2E2EA"; el.style.boxShadow = "none"; }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D2A6E" }}>
                        <Icon name={step.icon} size={16} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#5B7FFF", letterSpacing: "0.05em" }}>STEP {i + 1}</span>
                    </div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, letterSpacing: "-0.01em" }}>{step.label}</h4>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{step.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Closing line */}
        <FadeIn delay={600}>
          <div style={{ maxWidth: 640, margin: "48px auto 0", padding: "28px 36px", borderRadius: 16, background: "linear-gradient(135deg, #EEEDFA, #EEF2FF)", borderLeft: "3px solid #5B7FFF", textAlign: "center" }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#0C0C0E", fontFamily: "'General Sans', sans-serif", fontStyle: "italic" }}>
              We're not building software for the IP industry as it was. We're building the infrastructure for the IP industry as it's becoming.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
