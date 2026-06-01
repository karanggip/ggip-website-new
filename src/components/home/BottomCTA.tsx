import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

export default function BottomCTA() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 120, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.12) 0%, transparent 60%)", top: "-20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg-animated absolute inset-0" />

      <div className="max-w-content mx-auto px-7 relative text-center">
        <FadeIn>
          <div style={{ width: 48, height: 48, margin: "0 auto 28px", opacity: 0.5 }}>
            <img src={url("/assets/icon-white.svg")} alt="" className="w-full h-full" />
          </div>
          <h2 className="font-display font-extrabold text-white mx-auto mb-5"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 640 }}>
            Your IP infrastructure should be as modern as your practice<span style={{ color: "#5B7FFF" }}>.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto 40px", fontFamily: "'General Sans', sans-serif" }}>
            See why mid-size firms and in-house teams are switching to Guarded Growth.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Button href="/demo">Request a Demo <Icon name="arrowRight" size={16} /></Button>
            <Button variant="ghost" href="/contact">Talk to Our Team</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
