import FadeIn from "../ui/FadeIn";
import { url } from "../../utils/url";

export default function StoryHero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden", background: "#050510" }}>
      <div style={{ position: "absolute", width: 800, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,42,110,0.5) 0%, transparent 65%)", top: "-15%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.15) 0%, transparent 65%)", bottom: "0%", right: "10%", filter: "blur(60px)", animation: "orb2 14s ease-in-out infinite" }} />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div style={{ maxWidth: 820 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 20 }}>Our Story</span>
            <h1 className="font-display font-extrabold text-white mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              We didn't build another application.{" "}
              <span className="gradient-text">We're building the infrastructure layer.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: 620, fontFamily: "'General Sans', sans-serif" }}>
              Guarded Growth started with a straightforward audit. What we found wasn't a technology problem. It was an infrastructure problem — and no one had solved it.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
