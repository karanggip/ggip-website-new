import type React from "react";
import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const flywheelSteps = [
  { icon: "globe" as const,    label: "More jurisdictions added",      desc: "Each new office expands the data layer's reach and value." },
  { icon: "data" as const,     label: "Data layer more complete",      desc: "Broader coverage means richer signal for every workflow built on top." },
  { icon: "ai" as const,       label: "AI gets more accurate",         desc: "More structured data trains better models — risk scores, predictions, alerts." },
  { icon: "engine" as const,   label: "Engines become more valuable",  desc: "Every engine inherits the improved intelligence layer automatically." },
  { icon: "building" as const, label: "More firms adopt the platform", desc: "Better engines attract more firms — who bring more data variety." },
];

export default function Moat() {
  // Pentagon math — 5 nodes equally spaced on a circle, starting at top, going clockwise.
  const N = flywheelSteps.length;
  const R = 280;     // radius (px) from center to each card's center
  const positions = flywheelSteps.map((_, i) => {
    const angle = (i * 2 * Math.PI) / N - Math.PI / 2; // start at top
    return { x: Math.cos(angle) * R, y: Math.sin(angle) * R };
  });

  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div className="text-center" style={{ maxWidth: 680, margin: "0 auto 56px" }}>
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

        {/* ── Desktop: pentagon flywheel ─────────────────────────────────── */}
        <div className="flywheel-desktop max-md:hidden" style={{ position: "relative", width: "100%", maxWidth: 880, height: 760, margin: "0 auto" }}>
          {/* Center hub — NOT wrapped in FadeIn (FadeIn's transform creates a
              containing block that breaks absolute positioning of children). */}
          <div style={{
            position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
            width: 200, height: 200, borderRadius: "50%",
            background: "linear-gradient(135deg, #2D2A6E, #5B7FFF)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center",
            color: "#fff", padding: "0 24px",
            boxShadow: "0 20px 56px rgba(45,42,110,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            zIndex: 2,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", opacity: 0.75, marginBottom: 8 }}>THE FLYWHEEL</div>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.015em", lineHeight: 1.15 }}>Infrastructure<br/>compounds</div>
          </div>

          {/* Pentagon-positioned cards — each wrapped with the spinning
              anim-border-light conic gradient (same as WhyUs cards on home).
              Outer div: position absolute (anchors to flywheel container) +
              the animated border class.  Inner div: actual card content. */}
          {flywheelSteps.map((step, i) => {
            const pos = positions[i];
            return (
              <div
                key={i}
                className="anim-border-light"
                style={{
                  position: "absolute",
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  transform: "translate(-50%, -50%)",
                  width: 220,
                  borderRadius: 14,
                  background: "#fff",        // mask the conic gradient interior
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  zIndex: 3,
                  "--anim-radius": "14px",
                } as React.CSSProperties}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "0 12px 32px rgba(91,127,255,0.18)"; el.style.transform = "translate(-50%, -52%)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; el.style.transform = "translate(-50%, -50%)"; }}
              >
                <div style={{ position: "relative", zIndex: 1, padding: "20px 22px", borderRadius: 14, background: "#fff" }}>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D2A6E", flexShrink: 0 }}>
                      <Icon name={step.icon} size={16} />
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 800, color: "#5B7FFF", letterSpacing: "0.08em" }}>STEP {i + 1}</span>
                  </div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{step.label}</h4>
                  <p style={{ fontSize: 12, lineHeight: 1.55, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile: vertical chain with loop-back indicator ─────────────── */}
        <div className="md:hidden" style={{ maxWidth: 480, margin: "0 auto" }}>
          {/* Hub callout */}
          <FadeIn>
            <div style={{ padding: "20px 24px", borderRadius: 14, background: "linear-gradient(135deg, #2D2A6E, #5B7FFF)", color: "#fff", textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", opacity: 0.75, marginBottom: 4 }}>THE FLYWHEEL</div>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.015em" }}>Infrastructure compounds</div>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {flywheelSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div>
                  <div style={{ padding: "16px 18px", borderRadius: 12, background: "#fff", border: "1px solid #E2E2EA", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D2A6E", flexShrink: 0 }}>
                        <Icon name={step.icon} size={14} />
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 800, color: "#5B7FFF", letterSpacing: "0.08em" }}>STEP {i + 1}</span>
                    </div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, letterSpacing: "-0.01em" }}>{step.label}</h4>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{step.desc}</p>
                  </div>
                  {i < flywheelSteps.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "4px 0", color: "#5B7FFF" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
            {/* Loop-back indicator */}
            <FadeIn delay={600}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", padding: "12px 16px", borderRadius: 9999, background: "rgba(91,127,255,0.08)", border: "1px solid rgba(91,127,255,0.18)", marginTop: 8, color: "#5B7FFF" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>And the cycle repeats — compounding each turn.</span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Closing line */}
        <FadeIn delay={700}>
          <div style={{ maxWidth: 640, margin: "56px auto 0", padding: "28px 36px", borderRadius: 16, background: "linear-gradient(135deg, #EEEDFA, #EEF2FF)", borderLeft: "3px solid #5B7FFF", textAlign: "center" }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#0C0C0E", fontFamily: "'General Sans', sans-serif", fontStyle: "italic" }}>
              We're not building software for the IP industry as it was. We're building the infrastructure for the IP industry as it's becoming.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
