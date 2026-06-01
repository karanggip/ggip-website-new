import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const features = [
  {
    icon: "sync" as const,
    title: "Real-Time Sync Across 100+ Offices",
    body: "Direct integration with every major IP office. Automatic status updates, document retrieval, and deadline calculation. Your docket is always current — no manual checking, no stale data.",
    stat: "100+", statLabel: "IP offices connected",
    side: "right",
  },
  {
    icon: "ai" as const,
    title: "AI Portfolio Health",
    body: "Go beyond deadline management. DocketEngine's intelligence layer surfaces portfolio health scores, risk indicators, and compliance status in real time — turning your docket from an administrative list into a strategic asset.",
    stat: "94%", statLabel: "Average portfolio health score",
    side: "left",
  },
  {
    icon: "layers" as const,
    title: "Bulk Import & Free Migration",
    body: "Migrate your entire portfolio in minutes, not weeks. We handle the data transfer so your team stays focused on work. No migration fees. No downtime. Most firms are fully onboarded in under a week.",
    stat: "< 1 week", statLabel: "Typical onboarding time",
    side: "right",
  },
  {
    icon: "bell" as const,
    title: "Workflow Automation",
    body: "Daily and weekly docket digests. Two-way calendar sync with Outlook and Google Calendar. Automated client notices. Smart reminders that escalate as deadlines approach. The administrative work runs itself.",
    stat: "Zero", statLabel: "Manual deadline checks",
    side: "left",
  },
  {
    icon: "eye" as const,
    title: "Competitor Watch",
    body: "Track competitor filings and activity automatically. Know when a competitor files in your client's space before they do. Stay ahead with real-time alerts and weekly intelligence summaries.",
    stat: "Real-time", statLabel: "Competitor filing alerts",
    side: "right",
  },
  {
    icon: "user" as const,
    title: "Built for Teams",
    body: "Role-based permissions. Client-level access controls. Custom reporting for stakeholders. Scales from solo practice to 50-person IP departments without configuration headaches.",
    stat: "Unlimited", statLabel: "Team members on Growth plan",
    side: "left",
  },
];

export default function DocketFeatures() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 className="font-display font-extrabold"
              style={{ fontSize: "clamp(30px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              Everything your docket needs.
            </h2>
            <p style={{ fontSize: 17, color: "#5C5C6E", maxWidth: 520, margin: "0 auto", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
              Built from the ground up — not bolted onto a legacy platform.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ display: "grid", gridTemplateColumns: f.side === "right" ? "1fr 420px" : "420px 1fr", gap: 48, alignItems: "center", padding: "48px 0", borderBottom: i < features.length - 1 ? "1px solid #E2E2EA" : "none" }}
                className="max-md:grid-cols-1 max-md:gap-8">

                {/* Text block */}
                <div style={{ order: f.side === "right" ? 1 : 2 }} className="max-md:!order-1">
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D2A6E", marginBottom: 20 }}>
                    <Icon name={f.icon} size={24} />
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>{f.title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.75, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{f.body}</p>
                </div>

                {/* Stat block */}
                <div style={{ order: f.side === "right" ? 2 : 1, padding: "36px 40px", borderRadius: 16, background: "linear-gradient(135deg, #EEEDFA, #EEF2FF)", display: "flex", flexDirection: "column", alignItems: f.side === "right" ? "flex-end" : "flex-start", justifyContent: "center", minHeight: 160 }}
                  className="max-md:!order-2">
                  <div style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#2D2A6E", lineHeight: 1 }}>{f.stat}</div>
                  <div style={{ fontSize: 14, color: "#5C5C6E", marginTop: 8, fontFamily: "'General Sans', sans-serif", textAlign: f.side === "right" ? "right" : "left" }}>{f.statLabel}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
