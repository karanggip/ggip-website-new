import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

export default function CareersHero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden", background: "#050510" }}>
      <div style={{ position: "absolute", width: 700, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,42,110,0.45) 0%, transparent 65%)", top: "-10%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.2) 0%, transparent 65%)", top: "20%", left: "10%", filter: "blur(60px)", animation: "orb1 14s ease-in-out infinite" }} />
      <div className="grid-bg-animated absolute inset-0" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div style={{ maxWidth: 820 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 20 }}>Careers</span>
            <h1 className="font-display font-extrabold text-white mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Build the infrastructure{" "}
              <span className="gradient-text">the IP industry needs.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: 620, marginBottom: 36, fontFamily: "'General Sans', sans-serif" }}>
              We're a small, deliberate team solving a problem the legacy giants have ignored for two decades. If you want to ship work that compounds over time — and join a company at the foundational moment — we'd love to hear from you.
            </p>
            <a href={url("#open-roles")}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "linear-gradient(135deg, #2D2A6E, #3D3A9E)", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", boxShadow: "0 0 24px rgba(91,127,255,0.2), 0 4px 12px rgba(0,0,0,0.3)" }}>
              View Open Positions <Icon name="arrowRight" size={15} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
