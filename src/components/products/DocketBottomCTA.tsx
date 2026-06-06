import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import EngineIcon from "../ui/EngineIcon";

export default function DocketBottomCTA() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 120, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.1) 0%, transparent 60%)", top: "-20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg-animated absolute inset-0" />

      <div className="max-w-content mx-auto px-7 relative text-center">
        <FadeIn>
          <div style={{ display: "inline-flex", position: "relative", marginBottom: 32 }}>
            <div style={{ position: "absolute", inset: -20, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.2) 0%, transparent 70%)", filter: "blur(10px)", animation: "iconGlow 3s ease-in-out infinite", pointerEvents: "none" }} />
            {[0, 1.0].map((delay, i) => (
              <div key={i} style={{ position: "absolute", inset: -5, borderRadius: 22, border: `1px solid rgba(91,127,255,${0.35 - i * 0.12})`, animation: `pingRing 2.8s ease-out ${delay}s infinite`, pointerEvents: "none" }} />
            ))}
            <div style={{ animation: "iconFloat 4s ease-in-out infinite", position: "relative", zIndex: 1 }}>
              <EngineIcon engine="docket" size={64} variant="dark" />
            </div>
          </div>

          <h2 className="font-display font-extrabold text-white mx-auto mb-5"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 600 }}>
            Ready to automate your docket<span style={{ color: "#5B7FFF" }}>?</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", maxWidth: 460, margin: "0 auto 40px", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
            Start your free trial today. Most firms are fully onboarded within a week — no professional services, no downtime.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="https://docket.guardedgrowthip.com/signup">Start Free Trial <Icon name="arrowRight" size={16} /></Button>
            <Button variant="ghost" href="/contact">Talk to Sales</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
