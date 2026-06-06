import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import EngineIcon from "../ui/EngineIcon";
import { url } from "../../utils/url";

const stats = [
  { value: "27.7%",  label: "Average savings vs traditional providers" },
  { value: "50%",    label: "Margin capture for your firm" },
  { value: "190+",   label: "Jurisdictions covered" },
  { value: "$35k+",  label: "Annual profit uplift on 100 renewals" },
];

export default function RenewalPricing() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#050510", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg absolute inset-0 opacity-20" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <EngineIcon engine="renewal" size={48} variant="dark" />
            <div>
              <h2 className="font-display font-bold text-white" style={{ fontSize: 28, letterSpacing: "-0.02em" }}>RenewalEngine</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontFamily: "'General Sans', sans-serif" }}>IP renewals · Portfolio-based pricing</p>
            </div>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}
          className="max-md:!grid-cols-1">

          {/* Left: explanation */}
          <FadeIn delay={80}>
            <div>
              <h3 className="font-display font-bold text-white mb-4" style={{ fontSize: 22, letterSpacing: "-0.02em" }}>
                Pricing based on your portfolio.
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", marginBottom: 20, fontFamily: "'General Sans', sans-serif" }}>
                RenewalEngine pricing depends on the number of assets, jurisdictions, and service level. We'll build a custom quote based on your portfolio — and show you the exact savings before you commit.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "No hidden markups or opaque FX fees",
                  "Line-item cost breakdown per asset and jurisdiction",
                  "We show you the savings before you sign",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span style={{ color: "#A78BFA", display: "flex", flexShrink: 0, marginTop: 2 }}>
                      <Icon name="check" size={15} stroke={2.5} />
                    </span>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif" }}>{point}</span>
                  </div>
                ))}
              </div>
              <a href={url("/contact")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "linear-gradient(135deg, #A78BFA, #7C3AED)", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 0 24px rgba(167,139,250,0.25)" }}>
                Get a Custom Quote <Icon name="arrowRight" size={15} />
              </a>
            </div>
          </FadeIn>

          {/* Right: stats */}
          <FadeIn delay={160}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: "24px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", color: "#A78BFA", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontFamily: "'General Sans', sans-serif", lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
