import FadeIn from "../ui/FadeIn";

export default function Problem() {
  return (
    <section style={{ paddingTop: 64, paddingBottom: 96, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7" style={{ maxWidth: 720 }}>
        <FadeIn>
          <span className="overline block mb-4">The status quo</span>
          <h2 className="font-display font-extrabold mb-7"
            style={{ fontSize: "clamp(32px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            IP management is stuck<br />in the past.
          </h2>
        </FadeIn>
        <FadeIn delay={120}>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5C5C6E", marginBottom: 20, fontFamily: "'General Sans', sans-serif" }}>
            The platforms your firm relies on were built in a different era — and most weren't really built at all. They were assembled through acquisitions: a docketing tool from one company, a renewals module from another, stitched together under a single brand.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div style={{ padding: "24px 28px", borderRadius: 12, background: "linear-gradient(135deg, #EEEDFA, #EEF2FF)", borderLeft: "3px solid #5B7FFF" }}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3D3D4E", fontFamily: "'General Sans', sans-serif", fontStyle: "italic" }}>
              Mid-size firms feel this acutely. Enterprise suites are overengineered and overpriced. Point solutions are too narrow to grow with. You're caught between tools that weren't designed for you.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
