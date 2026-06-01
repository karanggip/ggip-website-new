import FadeIn from "../ui/FadeIn";

export default function ContactHero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 64, position: "relative", overflow: "hidden", background: "#050510" }}>
      <div style={{ position: "absolute", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,42,110,0.45) 0%, transparent 65%)", top: "-10%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.2) 0%, transparent 65%)", top: "20%", right: "8%", filter: "blur(60px)", animation: "orb2 14s ease-in-out infinite" }} />
      <div className="grid-bg-animated absolute inset-0" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div style={{ maxWidth: 720 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 18 }}>Contact</span>
            <h1 className="font-display font-extrabold text-white mb-5"
              style={{ fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Get in touch.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif", maxWidth: 580 }}>
              Sales questions, support requests, partnerships, press — whatever you need, we'd like to hear from you. We aim to respond within one business day.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
