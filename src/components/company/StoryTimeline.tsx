import FadeIn from "../ui/FadeIn";

const milestones = [
  {
    year: "2025",
    label: "Founded",
    desc: "Guarded Growth IP founded with a clear mission: build the modern data infrastructure for global intellectual property management.",
    accent: "#5B7FFF",
  },
  {
    year: "2025",
    label: "Diagnosed the real problem",
    desc: "Extensive research, interviews, and a systematic market audit converged on the same diagnosis — the IP management industry's failures aren't an application problem or a UX problem. They're a data infrastructure problem. The layer underneath every workflow is the gap nobody had filled.",
    accent: "#5B7FFF",
  },
  {
    year: "2026",
    label: "DocketEngine launched",
    desc: "DocketEngine goes live — automated IP docketing with real-time sync across 100+ IP offices. First firms onboard within weeks.",
    accent: "#A78BFA",
  },
  {
    year: "2026",
    label: "RenewalEngine launched",
    desc: "RenewalEngine goes live — patent and trademark renewals across 190+ jurisdictions, delivered in strategic partnership with a market leader in the renewals space. Renewals shift from cost passthrough to revenue line.",
    accent: "#A78BFA",
  },
  {
    year: "2026",
    label: "DocketEngine: 100+ IP offices",
    desc: "DocketEngine coverage reaches 100+ IP offices globally — USPTO, EUIPO, WIPO, JPO, KIPO, and every major regional office. Real-time sync live across each one.",
    accent: "#A78BFA",
  },
  {
    year: "2026",
    label: "What's next",
    desc: "Complete the data infrastructure. Complete the platform. Every engine built on the same shared data layer. One data layer. One platform. Growing with your firm.",
    accent: "rgba(255,255,255,0.2)",
    future: true,
  },
];

export default function StoryTimeline() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <h2 className="font-display font-extrabold text-white mb-14"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            How we got here.
          </h2>
        </FadeIn>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 19, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, rgba(91,127,255,0.5), rgba(167,139,250,0.3), rgba(255,255,255,0.06))" }} />

          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
                  {/* Dot */}
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: m.future ? "rgba(255,255,255,0.04)" : `${m.accent}18`, border: `2px solid ${m.accent}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: m.future ? "rgba(255,255,255,0.15)" : m.accent }} />
                  </div>
                  {/* Content */}
                  <div style={{ paddingTop: 8, opacity: m.future ? 0.5 : 1 }}>
                    <div className="flex items-center gap-3 mb-2" style={{ flexWrap: "wrap" }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: m.accent, letterSpacing: "0.06em" }}>{m.year}</span>
                      <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.15)" }} />
                      <span style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>{m.label}</span>
                      {m.future && <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 9999, background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.1)", letterSpacing: "0.05em" }}>COMING</span>}
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif", maxWidth: 560 }}>{m.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
