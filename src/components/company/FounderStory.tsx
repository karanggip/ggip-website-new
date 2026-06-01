import FadeIn from "../ui/FadeIn";

export default function FounderStory() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.08) 0%, transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-white"
              style={{ fontSize: "clamp(30px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              One saw the broken workflow.<br />
              <span className="gradient-text">The other saw the technological gap.</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 48 }}
          className="max-md:grid-cols-1">

          {/* Valli */}
          <FadeIn delay={100}>
            <div style={{ padding: 40, borderRadius: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #2D2A6E, #A78BFA)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, color: "#fff", flexShrink: 0 }}>V</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Valli</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'General Sans', sans-serif" }}>Co-founder · IP Operations</div>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif", marginBottom: 16 }}>
                Having managed large-scale IP portfolios, Valli knew the pain from the inside. When she evaluated the available solutions, two things became impossible to ignore.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif", marginBottom: 16 }}>
                First, the "platforms" weren't really platforms. They were Frankenstein architectures — companies that had grown by acquiring smaller tools and stitching them together. The seams showed everywhere: inconsistent interfaces, duplicated data, workflows that broke at the boundaries.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif" }}>
                Second, the price. Enterprise pricing for a mid-2000s user experience. The value equation was broken — and every firm she spoke to felt it.
              </p>
            </div>
          </FadeIn>

          {/* Karan */}
          <FadeIn delay={200}>
            <div style={{ padding: 40, borderRadius: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #5B7FFF, #2D2A6E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, color: "#fff", flexShrink: 0 }}>K</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Karan</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'General Sans', sans-serif" }}>Co-founder · Technology</div>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif", marginBottom: 16 }}>
                When Valli brought the problem to Karan — a serial entrepreneur with a track record of building and scaling technology products — he did what any product-minded founder would: he audited the competition.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif", marginBottom: 16 }}>
                The market leaders were serving outdated UX on aging architectures — coasting on switching costs and contract lock-in rather than product quality. The gap between what modern infrastructure made possible and what the IP industry was getting was enormous.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif" }}>
                The bigger insight was structural: the entire mid-market segment was underserved. No one was building for them.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Convergence */}
        <FadeIn delay={300}>
          <div style={{ padding: "40px 48px", borderRadius: 20, background: "linear-gradient(135deg, rgba(45,42,110,0.4), rgba(91,127,255,0.1))", border: "1px solid rgba(91,127,255,0.2)", maxWidth: 800, margin: "0 auto" }}>
            <h3 className="font-display font-bold text-white mb-4" style={{ fontSize: 20, letterSpacing: "-0.02em" }}>The Convergence</h3>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", fontFamily: "'General Sans', sans-serif", marginBottom: 12 }}>
              Valli saw the problem from inside the workflow. Karan saw the opportunity from outside the industry. Together, they saw the same gap from two directions — and that convergence is what makes Guarded Growth different.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", fontFamily: "'General Sans', sans-serif" }}>
              This isn't a technology company guessing at what IP practitioners need. And it isn't an IP consultancy trying to build software. It's both — practitioner depth fused with product-engineering ambition.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
