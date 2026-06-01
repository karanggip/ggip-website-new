import FadeIn from "../ui/FadeIn";
import EngineIcon from "../ui/EngineIcon";

export default function PricingHero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden", background: "#050510" }}>
      <div style={{ position: "absolute", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.1) 0%, transparent 65%)", top: "-10%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg absolute inset-0 opacity-25" />

      <div className="max-w-content mx-auto px-7 relative text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-8">
            <EngineIcon engine="docket" size={40} variant="dark" />
            <EngineIcon engine="renewal" size={40} variant="dark" />
          </div>
          <h1 className="font-display font-extrabold text-white mx-auto mb-5"
            style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: 720 }}>
            Transparent pricing.<br />No surprises.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: "0 auto", fontFamily: "'General Sans', sans-serif" }}>
            Enterprise-grade capability. Mid-size firm economics. Priced by matter count so your whole team is always included.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
