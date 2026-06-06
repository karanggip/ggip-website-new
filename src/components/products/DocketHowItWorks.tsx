import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const steps = [
  {
    number: "01",
    icon: "layers" as const,
    title: "Connect your portfolio",
    body: "Import your existing docket via bulk upload or connect directly from your current system. Free migration included — our team handles the transfer so there's no disruption to your workflow.",
  },
  {
    number: "02",
    icon: "sync" as const,
    title: "Sync with IP offices",
    body: "DocketEngine connects live to USPTO, EUIPO, WIPO, JPO, KIPO, and 100+ offices globally. Status updates, document retrieval, and deadline calculations run automatically — always current.",
  },
  {
    number: "03",
    icon: "chart" as const,
    title: "Manage with intelligence",
    body: "Your team sees a live, health-scored docket with AI risk flags, upcoming deadlines, and competitor activity. From administrative burden to strategic asset — in hours, not months.",
  },
];

export default function DocketHowItWorks() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.08) 0%, transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-white"
              style={{ fontSize: "clamp(30px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              Up and running in days, not months.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "0 auto", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
              Most firms complete onboarding in under a week. No professional services engagement. No 6-month implementation.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 900, margin: "0 auto" }}
          className="max-md:!grid-cols-1 max-md:!gap-4">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div style={{ position: "relative" }}>
                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="max-md:hidden" style={{ position: "absolute", top: 32, right: -1, width: 2, height: 2, zIndex: 1 }}>
                    <div style={{ position: "absolute", top: 0, left: "100%", width: 60, height: 1, background: "linear-gradient(to right, rgba(91,127,255,0.4), rgba(91,127,255,0.1))", transform: "translateY(50%)" }} />
                  </div>
                )}
                <div style={{ padding: "36px 32px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#5B7FFF", letterSpacing: "0.05em" }}>{step.number}</span>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(91,127,255,0.1)", border: "1px solid rgba(91,127,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7FFF" }}>
                      <Icon name={step.icon} size={20} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>{step.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", fontFamily: "'General Sans', sans-serif" }}>{step.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
