import FadeIn from "../ui/FadeIn";

export default function MissionVision() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}
          className="max-md:!grid-cols-1 max-md:!gap-12">

          <FadeIn>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 16 }}>Mission</span>
              <h2 className="font-display font-bold mb-5"
                style={{ fontSize: "clamp(22px, 2.5vw, 30px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                We build the data infrastructure and intelligent engines that modernise how the world manages intellectual property.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>
                Not another application. Not a feature bolted onto someone else's legacy platform. The foundational layer — global IP data, cleaned and structured — that everything else is built on top of.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#A78BFA", textTransform: "uppercase", display: "block", marginBottom: 16 }}>Vision</span>
              <h2 className="font-display font-bold mb-5"
                style={{ fontSize: "clamp(22px, 2.5vw, 30px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                Every IP decision in the world — from filing to renewal to strategy — will run on a single, intelligent data layer.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>
                We're building that layer. Every jurisdiction added, every engine shipped, every firm onboarded compounds the advantage. The architecture is the moat.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
