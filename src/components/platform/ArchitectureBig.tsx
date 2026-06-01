import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const layers = [
  {
    w: "60%",
    icon: "engine" as const,
    label: "Purpose-built engines",
    tag: "APPLICATION LAYER",
    sub: "What your team touches",
    body: "Each engine is purpose-built from the ground up — not bolted onto a legacy platform. DocketEngine for automated docketing. RenewalEngine for IP renewals. InventionEngine and others on the roadmap. Independently excellent, together more powerful.",
    grad: "linear-gradient(135deg, rgba(91,127,255,0.28), rgba(91,127,255,0.1))",
    bc: "rgba(91,127,255,0.4)",
    tc: "#5B7FFF",
    delay: 0,
  },
  {
    w: "80%",
    icon: "ai" as const,
    label: "AI & intelligence layer",
    tag: "INTELLIGENCE LAYER",
    sub: "What makes the engines smart",
    body: "Portfolio health scoring. Risk detection. Competitive monitoring. Predictive analytics. The AI layer runs on top of the structured data — getting smarter with every jurisdiction we add and every portfolio we analyse.",
    grad: "linear-gradient(135deg, rgba(167,139,250,0.22), rgba(91,127,255,0.1))",
    bc: "rgba(167,139,250,0.35)",
    tc: "#A78BFA",
    delay: 200,
  },
  {
    w: "100%",
    icon: "data" as const,
    label: "Proprietary data infrastructure",
    tag: "FOUNDATION",
    sub: "The moat",
    body: "A cloud-native data layer that ingests, cleans, and standardises IP data from 100+ offices globally. Every trademark, patent, and design registration — structured into a single, real-time source of truth. This is what nobody else has built.",
    grad: "linear-gradient(135deg, rgba(45,42,110,0.45), rgba(91,127,255,0.14))",
    bc: "rgba(91,127,255,0.45)",
    tc: "#7B9FFF",
    delay: 400,
  },
];

// Shooting pulses per layer
const layerStreaks = [
  [{ left: "18%", h: 36, w: 1.5, dur: 2.0, delay: 0.2 }, { left: "48%", h: 52, w: 1, dur: 2.6, delay: 1.1 }, { left: "78%", h: 32, w: 1.5, dur: 1.8, delay: 0.7 }],
  [{ left: "12%", h: 44, w: 1, dur: 2.2, delay: 0 }, { left: "32%", h: 58, w: 2, dur: 2.8, delay: 0.8 }, { left: "58%", h: 38, w: 1, dur: 2.0, delay: 1.5 }, { left: "82%", h: 48, w: 1.5, dur: 2.4, delay: 0.4 }],
  [{ left: "6%", h: 48, w: 1, dur: 2.3, delay: 0.3 }, { left: "20%", h: 38, w: 2, dur: 1.9, delay: 1.0 }, { left: "36%", h: 60, w: 1, dur: 2.7, delay: 0 }, { left: "54%", h: 44, w: 1.5, dur: 2.1, delay: 1.4 }, { left: "70%", h: 52, w: 1, dur: 2.5, delay: 0.6 }, { left: "86%", h: 36, w: 2, dur: 1.8, delay: 1.8 }],
];

export default function ArchitectureBig() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.1) 0%, transparent 70%)", top: "25%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-white mx-auto mb-5"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 720 }}>
              Three layers. One platform.<br />
              <span className="gradient-text">Built from the foundation up.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,0.45)", maxWidth: 580, margin: "0 auto", fontFamily: "'General Sans', sans-serif" }}>
              Every engine you use is powered by a shared data infrastructure that covers 100+ IP offices globally. No silos. No re-entry. No sync issues. One source of truth, every workflow.
            </p>
          </div>
        </FadeIn>

        <div style={{ maxWidth: 880, margin: "0 auto", position: "relative" }}>
          {layers.map((layer, i) => (
            <FadeIn key={i} delay={layer.delay}>
              <div style={{ width: layer.w, margin: "0 auto 16px", position: "relative", zIndex: 2 }}>
                <div style={{
                  position: "relative",
                  background: layer.grad,
                  backdropFilter: "blur(16px)",
                  border: `1px solid ${layer.bc}`,
                  borderRadius: 18,
                  padding: "32px 36px",
                  overflow: "hidden",
                }}>
                  {/* Streaks */}
                  {layerStreaks[i].map((s, j) => (
                    <div key={j} style={{
                      position: "absolute", left: s.left, top: 0, width: s.w, height: s.h, borderRadius: 9999,
                      background: `linear-gradient(to top, transparent 0%, ${layer.tc}cc 60%, ${layer.tc} 100%)`,
                      animation: `shootUp ${s.dur}s linear ${s.delay}s infinite`,
                      zIndex: 0, filter: `blur(0.5px) drop-shadow(0 0 3px ${layer.tc})`,
                    }} />
                  ))}

                  {/* Header row */}
                  <div className="flex items-center gap-4 mb-4" style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 13, background: "rgba(0,0,0,0.25)", border: `1px solid ${layer.bc}`, display: "flex", alignItems: "center", justifyContent: "center", color: layer.tc, flexShrink: 0 }}>
                      <Icon name={layer.icon} size={26} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                        <span style={{ fontSize: 19, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{layer.label}</span>
                        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: layer.tc, padding: "3px 8px", borderRadius: 5, background: "rgba(0,0,0,0.3)", border: `1px solid ${layer.bc}` }}>{layer.tag}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>{layer.sub}</div>
                    </div>
                  </div>

                  {/* Body */}
                  <p style={{ position: "relative", zIndex: 1, fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif", maxWidth: 680 }}>
                    {layer.body}
                  </p>
                </div>
                {/* Connector */}
                {i < 2 && (
                  <div style={{ position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)", width: 1, height: 16, background: "linear-gradient(to bottom, rgba(91,127,255,0.45), rgba(91,127,255,0.1))" }} />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
