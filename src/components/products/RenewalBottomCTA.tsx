import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import EngineIcon from "../ui/EngineIcon";
import { url } from "../../utils/url";

export default function RenewalBottomCTA() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 120, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 60%)", top: "-20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg absolute inset-0 opacity-25" />

      <div className="max-w-content mx-auto px-7 relative text-center">
        <FadeIn>
          <div style={{ display: "inline-flex", position: "relative", marginBottom: 32 }}>
            <div style={{ position: "absolute", inset: -20, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)", filter: "blur(10px)", animation: "iconGlow 3s ease-in-out infinite", pointerEvents: "none" }} />
            {[0, 1.0].map((delay, i) => (
              <div key={i} style={{ position: "absolute", inset: -5, borderRadius: 22, border: `1px solid rgba(167,139,250,${0.35 - i * 0.12})`, animation: `pingRing 2.8s ease-out ${delay}s infinite`, pointerEvents: "none" }} />
            ))}
            <div style={{ animation: "iconFloat 4s ease-in-out infinite", position: "relative", zIndex: 1 }}>
              <EngineIcon engine="renewal" size={64} variant="dark" />
            </div>
          </div>

          <h2 className="font-display font-extrabold text-white mx-auto mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 600 }}>
            Ready to transform your renewals<span style={{ color: "#A78BFA" }}>?</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", maxWidth: 460, margin: "0 auto 40px", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
            We'll build a custom quote showing your exact savings within 24 hours — no commitment required.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href={url("/contact")} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "linear-gradient(135deg, #A78BFA, #7C3AED)", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", boxShadow: "0 0 24px rgba(167,139,250,0.25)" }}>
              Calculate Your Savings <Icon name="arrowRight" size={16} />
            </a>
            <a href={url("/contact")} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
              Talk to Our Team
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
