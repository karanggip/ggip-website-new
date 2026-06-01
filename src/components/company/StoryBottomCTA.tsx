import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

export default function StoryBottomCTA() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden", background: "#fff", color: "#0C0C0E" }}>
      <div style={{ position: "absolute", width: 500, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,42,110,0.06) 0%, transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)", filter: "blur(60px)" }} />

      <div className="max-w-content mx-auto px-7 relative text-center">
        <FadeIn>
          <div style={{ width: 48, height: 48, margin: "0 auto 24px" }}>
            <img src={url("/assets/icon-color.svg")} alt="" className="w-full h-full" />
          </div>
          <h2 className="font-display font-extrabold mx-auto mb-5"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 600 }}>
            Join us in building the future of IP management<span style={{ color: "#5B7FFF" }}>.</span>
          </h2>
          <p style={{ fontSize: 16, color: "#5C5C6E", maxWidth: 460, margin: "0 auto 36px", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
            Whether you're a firm looking to modernise your practice or someone who wants to help build the infrastructure — we'd like to hear from you.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href={url("/demo")}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "#2D2A6E", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", boxShadow: "0 4px 16px rgba(45,42,110,0.2)" }}>
              Request a Demo <Icon name="arrowRight" size={15} />
            </a>
            <a href={url("/company/careers")}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, border: "1px solid #E2E2EA", background: "#fff", color: "#2D2A6E", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2D2A6E44"; (e.currentTarget as HTMLAnchorElement).style.background = "#F6F6F9"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E2E2EA"; (e.currentTarget as HTMLAnchorElement).style.background = "#fff"; }}>
              View Open Positions
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
