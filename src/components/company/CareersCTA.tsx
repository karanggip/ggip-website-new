import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

export default function CareersCTA() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 700, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.1) 0%, transparent 60%)", top: "-15%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg-animated absolute inset-0" />

      <div className="max-w-content mx-auto px-7 relative" style={{ maxWidth: 720 }}>
        <FadeIn>
          <div style={{ padding: "48px 56px", borderRadius: 20, background: "linear-gradient(135deg, rgba(45,42,110,0.5), rgba(91,127,255,0.15))", border: "1px solid rgba(91,127,255,0.25)", backdropFilter: "blur(16px)", textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(91,127,255,0.15)", border: "1px solid rgba(91,127,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7FFF", margin: "0 auto 20px" }}>
              <Icon name="mail" size={28} />
            </div>
            <h2 className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(26px, 3vw, 36px)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Tell us about you.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 28, fontFamily: "'General Sans', sans-serif", lineHeight: 1.7 }}>
              Send a brief note — what you've built, what you're interested in, and why Guarded Growth. We read every email and reply to anything that resonates.
            </p>
            <a href="mailto:careers@guardedgrowthip.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "#fff", color: "#2D2A6E", fontSize: 15, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(91,127,255,0.2)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(91,127,255,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(91,127,255,0.2)"; }}>
              <Icon name="mail" size={16} />
              careers@guardedgrowthip.com
            </a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 24, fontFamily: "'General Sans', sans-serif" }}>
              No formal application form. No ATS. Just an email.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
