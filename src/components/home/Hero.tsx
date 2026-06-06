import Icon from "../ui/Icon";
import Button from "../ui/Button";

const floatingCards = [
  {
    style: { top: "18%", left: "5%", zIndex: 2 },
    delay: "0s", duration: "7s",
    content: (
      <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 16px", minWidth: 160 }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 6, fontWeight: 600, letterSpacing: "0.05em" }}>PORTFOLIO HEALTH</div>
        <div className="flex items-center gap-2">
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #16A34A, #059669)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff" }}>94</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Excellent</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>2,847 assets</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    style: { top: "25%", right: "6%", zIndex: 2 },
    delay: "1.5s", duration: "8s",
    content: (
      <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 16px" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 8, fontWeight: 600, letterSpacing: "0.05em" }}>LIVE SYNC</div>
        <div className="flex gap-1.5 flex-wrap">
          {["USPTO","EUIPO","WIPO","JPO","KIPO"].map(j => (
            <span key={j} style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: "rgba(91,127,255,0.15)", color: "#5B7FFF", border: "1px solid rgba(91,127,255,0.2)" }}>{j}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    style: { bottom: "22%", left: "7%", zIndex: 2 },
    delay: "2.5s", duration: "9s",
    content: (
      <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 16px" }}>
        <div className="flex items-center gap-2">
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 8px rgba(22,163,74,0.5)", animation: "pulseDot 2s ease-in-out infinite" }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>NEXAFLOW® — Status updated</span>
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 4, marginLeft: 14 }}>Registered · EUIPO · 2 min ago</div>
      </div>
    ),
  },
  {
    style: { bottom: "18%", right: "5%", zIndex: 2 },
    delay: "3.5s", duration: "6.5s",
    content: (
      <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", border: "1px solid rgba(91,127,255,0.15)", borderRadius: 12, padding: "12px 16px" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 6, fontWeight: 600, letterSpacing: "0.05em" }}>UPCOMING DEADLINES</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>23</div>
        <div style={{ fontSize: 10, color: "#D97706" }}>7 due this week</div>
      </div>
    ),
  },
];

const nodes = [
  { x: "12%", y: "30%", d: 0 }, { x: "88%", y: "25%", d: 1 },
  { x: "20%", y: "70%", d: 2 }, { x: "78%", y: "72%", d: 3 },
  { x: "45%", y: "15%", d: 1.5 }, { x: "60%", y: "80%", d: 2.5 },
  { x: "35%", y: "55%", d: 0.5 }, { x: "70%", y: "40%", d: 3.5 },
];

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: 64 }}>
      {/* Background layers */}
      <div className="mesh-bg absolute inset-0 opacity-60" style={{ filter: "blur(60px)" }} />
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,42,110,0.5) 0%, transparent 65%)", top: "-15%", left: "5%", filter: "blur(80px)", animation: "orb1 10s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.3) 0%, transparent 65%)", bottom: "0%", right: "0%", filter: "blur(80px)", animation: "orb2 13s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 65%)", top: "30%", right: "20%", filter: "blur(60px)", animation: "orb3 16s ease-in-out infinite" }} />
      <div className="grid-bg-animated absolute inset-0" />

      {/* Rotating beam */}
      <div style={{ position: "absolute", top: "-30%", left: "50%", width: 800, height: 800, transform: "translateX(-50%)", opacity: 0.08, animation: "beamRotate 30s linear infinite" }}>
        {[0, 120, 240].map((deg, i) => (
          <div key={i} style={{ position: "absolute", top: "50%", left: "50%", width: 2, height: "50%", background: `linear-gradient(to bottom, ${i === 1 ? "#A78BFA" : "#5B7FFF"}, transparent)`, transformOrigin: "top center", transform: `rotate(${deg}deg)` }} />
        ))}
      </div>

      {/* Light streaks */}
      {[0, 1, 2].map((i) => (
        <div key={`streak-${i}`} style={{ position: "absolute", width: 200 + i * 60, height: 1, background: `linear-gradient(90deg, transparent, rgba(91,127,255,${0.15 + i * 0.05}), transparent)`, top: `${20 + i * 25}%`, left: 0, transform: "rotate(-35deg)", animation: `streak ${6 + i * 3}s linear ${i * 4}s infinite` }} />
      ))}

      {/* Network nodes */}
      {nodes.map((node, i) => (
        <div key={`node-${i}`} style={{ position: "absolute", left: node.x, top: node.y, width: 4 + (i % 3) * 2, height: 4 + (i % 3) * 2, borderRadius: "50%", background: i % 2 === 0 ? "rgba(91,127,255,0.4)" : "rgba(167,139,250,0.3)", boxShadow: `0 0 ${8 + i * 2}px rgba(91,127,255,${0.15 + (i % 3) * 0.1})`, animation: `nodeFloat ${5 + i * 0.7}s ease-in-out ${node.d}s infinite` }} />
      ))}

      {/* Vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 45%, rgba(5,5,16,0.3) 0%, rgba(5,5,16,0.6) 40%, #050510 75%)" }} />

      {/* Floating UI cards — hidden on mobile */}
      {floatingCards.map((card, i) => (
        <div key={i} className="max-lg:hidden" style={{ position: "absolute", animation: `floatCard ${card.duration} ease-in-out ${card.delay} infinite`, ...card.style }}>
          {card.content}
        </div>
      ))}

      {/* Hero content */}
      <div className="max-w-content mx-auto px-7 relative text-center pt-16 pb-20 z-10 w-full">
        <div className="hero-animate delay-0 mb-6">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 9999, background: "rgba(91,127,255,0.1)", border: "1px solid rgba(91,127,255,0.2)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 8px rgba(22,163,74,0.5)", animation: "pulseDot 2s ease-in-out infinite", display: "inline-block" }} />
            DocketEngine now covering 100+ IP offices globally
          </span>
        </div>

        <h1 className="hero-animate delay-150 font-display font-extrabold text-white mx-auto mb-7"
          style={{ fontSize: "clamp(40px, 5.5vw, 72px)", letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: 820 }}>
          Building the data infrastructure for global intellectual{" "}
          <span className="gradient-text">property</span>
        </h1>

        <p className="hero-animate delay-300 font-body mx-auto mb-10"
          style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: 520 }}>
          Data layer spanning 100+ IP offices. AI intelligence and purpose-built engines on top. Modern docketing. Automated renewals. One platform.
        </p>

        <div className="hero-animate delay-450 flex gap-3.5 justify-center flex-wrap">
          <Button href="/demo">Request a Demo <Icon name="arrowRight" size={16} /></Button>
          <Button variant="ghost" href="/platform">See How It Works</Button>
        </div>
      </div>
    </section>
  );
}
