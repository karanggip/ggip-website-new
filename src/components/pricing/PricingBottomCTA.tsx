import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

export default function PricingBottomCTA() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.1) 0%, transparent 60%)", top: "-20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg absolute inset-0 opacity-25" />

      <div className="max-w-content mx-auto px-7 relative text-center">
        <FadeIn>
          <h2 className="font-display font-extrabold text-white mx-auto mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 560 }}>
            Not sure which plan is right for you<span style={{ color: "#5B7FFF" }}>?</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", maxWidth: 420, margin: "0 auto 36px", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
            Our team can walk you through the options and help you find the right fit for your practice size and workflow.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/demo">Start Free Trial <Icon name="arrowRight" size={16} /></Button>
            <Button variant="ghost" href="/contact">Talk to Sales</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
