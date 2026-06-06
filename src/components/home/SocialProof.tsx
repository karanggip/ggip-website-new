import FadeIn from "../ui/FadeIn";

export default function SocialProof() {
  return (
    <section style={{ paddingTop: 64, paddingBottom: 64, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7" style={{ maxWidth: 800 }}>
        <FadeIn>
          <div style={{ padding: "40px 48px", borderRadius: 20, border: "1px solid #E2E2EA", background: "#F6F6F9", position: "relative" }}>
            <div style={{ fontSize: 64, lineHeight: 1, color: "#5B7FFF", fontFamily: "Georgia, serif", position: "absolute", top: 24, left: 40, opacity: 0.4 }}>"</div>
            <blockquote style={{ fontSize: 20, lineHeight: 1.7, color: "#0C0C0E", fontFamily: "'General Sans', sans-serif", fontStyle: "italic", paddingLeft: 32, marginBottom: 24 }}>
              The infrastructure powering IP management was built for a world that no longer exists. We're building what should replace it, the foundational layer the industry has been waiting for, and the firms that adopt it early will have a compounding advantage over those that wait.
            </blockquote>
            <div className="flex items-center gap-3 pl-8">
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #2D2A6E, #5B7FFF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "#fff" }}>K</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0C0C0E" }}>Karan</div>
                <div style={{ fontSize: 13, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>Co-founder, Guarded Growth IP</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
