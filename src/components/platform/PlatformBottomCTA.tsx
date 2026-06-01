import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

export default function PlatformBottomCTA() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 700, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.12) 0%, transparent 60%)", top: "-15%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg-animated absolute inset-0" />

      <div className="max-w-content mx-auto px-7 relative text-center">
        <FadeIn>
          <div style={{ width: 48, height: 48, margin: "0 auto 24px", opacity: 0.6 }}>
            <img src={url("/assets/icon-white.svg")} alt="" className="w-full h-full" />
          </div>
          <h2 className="font-display font-extrabold text-white mx-auto mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 620 }}>
            See the platform in action<span style={{ color: "#5B7FFF" }}>.</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "0 auto 36px", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
            Talk to our team — we'll walk you through the architecture, show you the engines, and answer any technical questions.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/demo">Request a Demo <Icon name="arrowRight" size={16} /></Button>
            <Button variant="ghost" href="/contact">Talk to Our Team</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
