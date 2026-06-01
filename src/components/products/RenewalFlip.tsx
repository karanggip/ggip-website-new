import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const stats = [
  { value: "27.7%", label: "Average savings vs traditional providers" },
  { value: "50%",   label: "Margin capture for your firm" },
  { value: "$35k+", label: "Annual profit uplift on 100 renewals" },
  { value: "190+",  label: "Jurisdictions covered" },
];

const painPoints = [
  {
    icon: "dollar" as const,
    title: "Renewals are a cost centre",
    body: "Traditional renewal providers take your client relationship, your margin, and charge you opaque fees on top. Your firm absorbs the cost and passes on minimal value.",
  },
  {
    icon: "lock" as const,
    title: "No visibility on pricing",
    body: "Bundled fees, hidden FX markups, opaque 'service charges.' You can't quote your clients with confidence because you don't know what you're actually paying.",
  },
  {
    icon: "layers" as const,
    title: "Operationally heavy",
    body: "Spreadsheets, email chains, manual status tracking. Every renewal involves coordination across teams, offices, and currencies — without a single source of truth.",
  },
];

export default function RenewalFlip() {
  return (
    <>
      {/* The Problem */}
      <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
        <div className="max-w-content mx-auto px-7">
          <FadeIn>
            <div style={{ maxWidth: 680 }}>
              <h2 className="font-display font-extrabold mb-5"
                style={{ fontSize: "clamp(30px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Renewals are broken.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>
                Most IP firms treat renewals as an unavoidable expense. The tools they use — or the providers they outsource to — make it that way.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}
            className="max-md:grid-cols-1">
            {painPoints.map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div style={{ padding: 32, borderRadius: 16, border: "1px solid #E2E2EA", background: "#fff", height: "100%", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "linear-gradient(135deg, #EEEDFA, #EEF2FF)"; el.style.transform = "translateY(-4px)"; el.style.borderColor = "#A78BFA44"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "#fff"; el.style.transform = "translateY(0)"; el.style.borderColor = "#E2E2EA"; }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: "#A78BFA", marginBottom: 20 }}>
                    <Icon name={p.icon} size={24} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Flip */}
      <section style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 600, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)", top: "10%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
        <div className="grid-bg absolute inset-0 opacity-25" />

        <div className="max-w-content mx-auto px-7 relative">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
            className="max-md:grid-cols-1 max-md:gap-12">
            <FadeIn>
              <div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "#A78BFA", textTransform: "uppercase", display: "block", marginBottom: 16 }}>The Flip</span>
                <h2 className="font-display font-extrabold text-white mb-5"
                  style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  Keep client ownership.<br />Run on automated infrastructure.
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", marginBottom: 24, fontFamily: "'General Sans', sans-serif" }}>
                  RenewalEngine doesn't replace your firm's relationship with your clients. It replaces the expensive, opaque renewal provider you've been using.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>
                  Wrap your services around our engine. Quote clients with confidence. Capture the margin yourself instead of passing it to a third party.
                </p>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={150}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ padding: "28px 24px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(167,139,250,0.15)", transition: "all 0.25s" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(167,139,250,0.4)"; el.style.background = "rgba(167,139,250,0.06)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(167,139,250,0.15)"; el.style.background = "rgba(255,255,255,0.03)"; }}>
                    <div style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#A78BFA", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontFamily: "'General Sans', sans-serif", lineHeight: 1.5 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
