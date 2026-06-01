import FadeIn from "../ui/FadeIn";

export default function PlatformHero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden", background: "#050510" }}>
      {/* Background */}
      <div className="mesh-bg absolute inset-0 opacity-50" style={{ filter: "blur(60px)" }} />
      <div style={{ position: "absolute", width: 700, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,42,110,0.5) 0%, transparent 65%)", top: "-10%", left: "10%", filter: "blur(80px)", animation: "orb1 12s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.25) 0%, transparent 65%)", bottom: "5%", right: "5%", filter: "blur(80px)", animation: "orb2 13s ease-in-out infinite" }} />
      <div className="grid-bg-animated absolute inset-0" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div style={{ maxWidth: 820 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 20 }}>The Platform</span>
            <h1 className="font-display font-extrabold text-white mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              We didn't build another application.{" "}
              <span className="gradient-text">We're building the infrastructure layer.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: 640, fontFamily: "'General Sans', sans-serif" }}>
              Most IP software companies start with an application and try to become a platform. We started with the infrastructure — and we're building the engines on top.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
