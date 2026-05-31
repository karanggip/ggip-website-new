import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const layers = [
  {
    w: "55%", icon: "engine" as const, label: "Purpose-built engines",
    sub: "DocketEngine · RenewalEngine", tag: "APPLICATION",
    grad: "linear-gradient(135deg, rgba(91,127,255,0.25), rgba(91,127,255,0.1))",
    bc: "rgba(91,127,255,0.35)", tc: "#5B7FFF", delay: 0,
  },
  {
    w: "75%", icon: "ai" as const, label: "AI & intelligence layer",
    sub: "Portfolio health · Risk · Competitive watch · Predictions", tag: "INTELLIGENCE",
    grad: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(91,127,255,0.1))",
    bc: "rgba(167,139,250,0.3)", tc: "#A78BFA", delay: 200,
  },
  {
    w: "100%", icon: "data" as const, label: "Proprietary data infrastructure",
    sub: "100+ IP offices · Cleaned · Structured · Standardized · Real-time", tag: "FOUNDATION",
    grad: "linear-gradient(135deg, rgba(45,42,110,0.4), rgba(91,127,255,0.12))",
    bc: "rgba(91,127,255,0.4)", tc: "#7B9FFF", delay: 400,
  },
];

// Shooting pulses per layer — more streaks in the wider Foundation block
const layerStreaks = [
  // Engines (narrowest, i=0)
  [
    { left: "18%", h: 36, w: 1.5, dur: 2.0, delay: 0.2 },
    { left: "48%", h: 52, w: 1,   dur: 2.6, delay: 1.1 },
    { left: "78%", h: 32, w: 1.5, dur: 1.8, delay: 0.7 },
  ],
  // AI (medium, i=1)
  [
    { left: "12%", h: 44, w: 1,   dur: 2.2, delay: 0 },
    { left: "32%", h: 58, w: 2,   dur: 2.8, delay: 0.8 },
    { left: "58%", h: 38, w: 1,   dur: 2.0, delay: 1.5 },
    { left: "82%", h: 48, w: 1.5, dur: 2.4, delay: 0.4 },
  ],
  // Foundation (widest, i=2)
  [
    { left: "6%",  h: 48, w: 1,   dur: 2.3, delay: 0.3 },
    { left: "20%", h: 38, w: 2,   dur: 1.9, delay: 1.0 },
    { left: "36%", h: 60, w: 1,   dur: 2.7, delay: 0 },
    { left: "54%", h: 44, w: 1.5, dur: 2.1, delay: 1.4 },
    { left: "70%", h: 52, w: 1,   dur: 2.5, delay: 0.6 },
    { left: "86%", h: 36, w: 2,   dur: 1.8, delay: 1.8 },
  ],
];

export default function Architecture() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.1) 0%, transparent 70%)", top: "30%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-white mx-auto mb-5"
              style={{ fontSize: "clamp(32px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 600 }}>
              Infrastructure first.<br />
              <span className="gradient-text">Intelligence second.</span><br />
              Engines on top.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto", fontFamily: "'General Sans', sans-serif" }}>
              We didn't start by building features. We started by building the foundation.
            </p>
          </div>
        </FadeIn>

        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          {layers.map((layer, i) => (
            <FadeIn key={i} delay={layer.delay}>
              <div style={{ width: layer.w, margin: "0 auto 12px", position: "relative", zIndex: 2 }}>
                <div style={{
                  position: "relative", background: layer.grad, backdropFilter: "blur(16px)",
                  border: `1px solid ${layer.bc}`, borderRadius: 16, padding: "24px 28px",
                  display: "flex", alignItems: "center", gap: 18, overflow: "hidden",
                }}>
                  {/* Shooting pulses */}
                  {layerStreaks[i].map((s, j) => (
                    <div key={j} style={{
                      position: "absolute",
                      left: s.left,
                      top: 0,
                      width: s.w,
                      height: s.h,
                      borderRadius: 9999,
                      background: `linear-gradient(to top, transparent 0%, ${layer.tc}cc 60%, ${layer.tc} 100%)`,
                      animation: `shootUp ${s.dur}s linear ${s.delay}s infinite`,
                      zIndex: 0,
                      filter: `blur(0.5px) drop-shadow(0 0 3px ${layer.tc})`,
                    }} />
                  ))}

                  {/* Icon */}
                  <div style={{ position: "relative", zIndex: 1, width: 48, height: 48, borderRadius: 12, background: "rgba(0,0,0,0.25)", border: `1px solid ${layer.bc}`, display: "flex", alignItems: "center", justifyContent: "center", color: layer.tc, flexShrink: 0 }}>
                    <Icon name={layer.icon} size={24} />
                  </div>

                  {/* Text */}
                  <div style={{ position: "relative", zIndex: 1, flex: 1, minWidth: 0 }}>
                    <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                      <span style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>{layer.label}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: layer.tc, padding: "3px 8px", borderRadius: 5, background: "rgba(0,0,0,0.3)", border: `1px solid ${layer.bc}` }}>{layer.tag}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "'General Sans', sans-serif" }}>{layer.sub}</div>
                  </div>
                </div>
                {i < 2 && (
                  <div style={{ position: "absolute", bottom: -12, left: "50%", transform: "translateX(-50%)", width: 1, height: 12, background: "linear-gradient(to bottom, rgba(91,127,255,0.4), rgba(91,127,255,0.1))" }} />
                )}
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={650}>
            <div className="text-center mt-7">
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", maxWidth: 520, margin: "0 auto", lineHeight: 1.6, fontFamily: "'General Sans', sans-serif" }}>
                <span style={{ color: "#fff", fontWeight: 600 }}>The architecture is the moat.</span> Every jurisdiction added makes the data layer more complete. Every engine built on top compounds the advantage.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
