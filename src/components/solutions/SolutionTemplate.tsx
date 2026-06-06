import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

type IconName =
  | "scale" | "building" | "landmark" | "graduation" | "dollar" | "lock"
  | "user" | "globe" | "shield" | "target" | "engine" | "ai" | "data"
  | "sync" | "chart" | "eye" | "layers" | "book" | "file" | "bell"
  | "briefcase" | "handshake" | "sparkles";

export interface SolutionConfig {
  audienceIcon: IconName;
  eyebrow: string;
  headline: React.ReactNode;
  subheadline: string;
  accent: { c: string; rgb: string; gradFrom: string; gradTo: string };
  painPoints: Array<{ icon: IconName; title: string; body: string }>;
  solution: {
    headline: React.ReactNode;
    intro: string;
    capabilities: Array<{ icon: IconName; title: string; body: string }>;
  };
  proofPoints: Array<{ value: string; label: string }>;
  recommendation: {
    plan: string;
    price: string;
    period?: string;
    reasoning: string;
    href: string;
    bullets: string[];
  };
  bottomCTA: {
    headline: string;
    subheadline: string;
  };
}

export default function SolutionTemplate({ config }: { config: SolutionConfig }) {
  const { audienceIcon, eyebrow, headline, subheadline, accent, painPoints, solution, proofPoints, recommendation, bottomCTA } = config;

  return (
    <>
      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 72, position: "relative", overflow: "hidden", background: "#050510" }}>
        <div style={{ position: "absolute", width: 700, height: 500, borderRadius: "50%", background: `radial-gradient(circle, rgba(${accent.rgb},0.18) 0%, transparent 65%)`, top: "-10%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, rgba(${accent.rgb},0.12) 0%, transparent 65%)`, top: "20%", right: "8%", filter: "blur(60px)", animation: "orb2 14s ease-in-out infinite" }} />
        <div className="grid-bg-animated absolute inset-0" />

        <div className="max-w-content mx-auto px-7 relative">
          <FadeIn>
            <div style={{ maxWidth: 820 }}>
              <div className="flex items-center gap-3 mb-6">
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(${accent.rgb},0.12)`, border: `1px solid rgba(${accent.rgb},0.3)`, display: "flex", alignItems: "center", justifyContent: "center", color: accent.c }}>
                  <Icon name={audienceIcon} size={22} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: accent.c, textTransform: "uppercase" }}>{eyebrow}</span>
              </div>
              <h1 className="font-display font-extrabold text-white mb-6"
                style={{ fontSize: "clamp(36px, 4.8vw, 58px)", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
                {headline}
              </h1>
              <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 640, fontFamily: "'General Sans', sans-serif" }}>
                {subheadline}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
        <div className="max-w-content mx-auto px-7">
          <FadeIn>
            <div style={{ marginBottom: 48 }}>
              <h2 className="font-display font-extrabold mb-3"
                style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Sound familiar?
              </h2>
              <p style={{ fontSize: 16, color: "#5C5C6E", maxWidth: 540, fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
                Three frustrations we hear consistently from this segment.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
            className="max-md:!grid-cols-1">
            {painPoints.map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{ padding: "32px 28px", borderRadius: 16, border: "1px solid #E2E2EA", background: "#fff", height: "100%", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = accent.c + "55"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = `0 12px 32px rgba(${accent.rgb},0.1)`; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#E2E2EA"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
                  <div style={{ width: 44, height: 44, borderRadius: 11, background: `rgba(${accent.rgb},0.1)`, display: "flex", alignItems: "center", justifyContent: "center", color: accent.c, marginBottom: 18 }}>
                    <Icon name={p.icon} size={22} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden", background: "#0d0d1a" }}>
        <div style={{ position: "absolute", width: 600, height: 500, borderRadius: "50%", background: `radial-gradient(circle, rgba(${accent.rgb},0.08) 0%, transparent 70%)`, top: "20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
        <div className="grid-bg absolute inset-0 opacity-25" />

        <div className="max-w-content mx-auto px-7 relative">
          <FadeIn>
            <div style={{ maxWidth: 700, marginBottom: 48 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: accent.c, textTransform: "uppercase", display: "block", marginBottom: 14 }}>How we solve it</span>
              <h2 className="font-display font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                {solution.headline}
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>
                {solution.intro}
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
            className="max-md:!grid-cols-1">
            {solution.capabilities.map((cap, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ padding: "28px 30px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", height: "100%", transition: "border-color 0.25s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${accent.rgb},0.35)`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(${accent.rgb},0.1)`, border: `1px solid rgba(${accent.rgb},0.2)`, display: "flex", alignItems: "center", justifyContent: "center", color: accent.c, marginBottom: 16 }}>
                    <Icon name={cap.icon} size={22} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>{cap.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>{cap.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF POINTS */}
      <section style={{ paddingTop: 64, paddingBottom: 64, background: "#fff", color: "#0C0C0E" }}>
        <div className="max-w-content mx-auto px-7">
          <FadeIn>
            <div style={{ padding: "44px 48px", borderRadius: 20, background: `linear-gradient(135deg, ${accent.gradFrom}, ${accent.gradTo})`, border: `1px solid rgba(${accent.rgb},0.2)` }}>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${proofPoints.length}, 1fr)`, gap: 24 }}
                className="max-md:!grid-cols-2 max-sm:!grid-cols-1">
                {proofPoints.map((stat, i) => (
                  <div key={i}>
                    <div style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.04em", color: accent.c, lineHeight: 1, marginBottom: 6 }}>{stat.value}</div>
                    <div style={{ fontSize: 13, color: "#3D3D4E", fontFamily: "'General Sans', sans-serif", lineHeight: 1.5 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* RECOMMENDATION */}
      <section style={{ paddingTop: 64, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
        <div className="max-w-content mx-auto px-7" style={{ maxWidth: 880 }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", padding: "44px 48px", borderRadius: 20, border: "1px solid #E2E2EA", background: "#F6F6F9" }}
              className="max-md:!grid-cols-1 max-md:!p-8">
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: accent.c, textTransform: "uppercase", display: "block", marginBottom: 12 }}>Recommended for you</span>
                <h3 className="font-display font-bold mb-3" style={{ fontSize: 26, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  {recommendation.plan} plan
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#5C5C6E", marginBottom: 20, fontFamily: "'General Sans', sans-serif" }}>
                  {recommendation.reasoning}
                </p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.04em", color: "#0C0C0E" }}>{recommendation.price}</span>
                  {recommendation.period && <span style={{ fontSize: 15, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{recommendation.period}</span>}
                </div>
                <a href={url(recommendation.href)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 10, background: "#2D2A6E", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", boxShadow: "0 4px 16px rgba(45,42,110,0.2)" }}>
                  View pricing details <Icon name="arrowRight" size={14} />
                </a>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#8B8B9E", textTransform: "uppercase", marginBottom: 14 }}>What's included</div>
                <div className="flex flex-col gap-2.5">
                  {recommendation.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span style={{ color: accent.c, flexShrink: 0, marginTop: 2, display: "flex" }}>
                        <Icon name="target" size={14} stroke={2.5} />
                      </span>
                      <span style={{ fontSize: 14, color: "#3D3D4E", fontFamily: "'General Sans', sans-serif", lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 700, height: 600, borderRadius: "50%", background: `radial-gradient(circle, rgba(${accent.rgb},0.1) 0%, transparent 60%)`, top: "-15%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
        <div className="grid-bg-animated absolute inset-0" />

        <div className="max-w-content mx-auto px-7 relative text-center">
          <FadeIn>
            <h2 className="font-display font-extrabold text-white mx-auto mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 620 }}>
              {bottomCTA.headline}
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 480, margin: "0 auto 32px", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
              {bottomCTA.subheadline}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href={url("/demo")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "linear-gradient(135deg, #2D2A6E, #3D3A9E)", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", boxShadow: "0 0 24px rgba(91,127,255,0.2), 0 4px 12px rgba(0,0,0,0.3)" }}>
                Request a Demo <Icon name="arrowRight" size={15} />
              </a>
              <a href={url("/contact")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 10, background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
                Talk to Our Team
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
