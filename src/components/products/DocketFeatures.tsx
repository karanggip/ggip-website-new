import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const InProgressBadge = () => (
  <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 10px", borderRadius: 9999, background: "rgba(217,119,6,0.12)", color: "#D97706", border: "1px solid rgba(217,119,6,0.28)", letterSpacing: "0.05em", verticalAlign: "middle" }}>
    IN PROGRESS
  </span>
);

// ── Mini mockup components ─────────────────────────────────────────────────

function SyncMockup() {
  const offices = [
    { name: "USPTO", flag: "🇺🇸", status: "Synced", time: "2m ago" },
    { name: "EUIPO", flag: "🇪🇺", status: "Synced", time: "2m ago" },
    { name: "WIPO",  flag: "🌐", status: "Synced", time: "3m ago" },
    { name: "JPO",   flag: "🇯🇵", status: "Synced", time: "3m ago" },
    { name: "KIPO",  flag: "🇰🇷", status: "Synced", time: "5m ago" },
  ];
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>LIVE SYNC STATUS</div>
      <div className="flex flex-col gap-2">
        {offices.map((o) => (
          <div key={o.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,255,0.03)" }}>
            <span style={{ fontSize: 16 }}>{o.flag}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", flex: 1 }}>{o.name}</span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 6px #16A34A", display: "inline-block", animation: "pulseDot 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'General Sans', sans-serif" }}>{o.time}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "'General Sans', sans-serif", textAlign: "center" }}>+ 95 more offices connected</div>
    </div>
  );
}

function MigrationMockup() {
  const types = [
    { label: "Trademarks", count: "1,203", pct: 100 },
  ];
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>MIGRATION COMPLETE</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 16 }}>1,203 <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.4)" }}>assets</span></div>
      <div style={{ height: 4, borderRadius: 9999, background: "rgba(255,255,255,0.06)", marginBottom: 16, overflow: "hidden" }}>
        <div style={{ height: "100%", width: "100%", borderRadius: 9999, background: "linear-gradient(90deg, #5B7FFF, #A78BFA)" }} />
      </div>
      <div className="flex flex-col gap-2.5">
        {types.map((t) => (
          <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#16A34A", display: "flex" }}><Icon name="check" size={14} stroke={2.5} /></span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", flex: 1, fontFamily: "'General Sans', sans-serif" }}>{t.label}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{t.count}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, padding: "8px 12px", borderRadius: 8, background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.2)", fontSize: 12, color: "#4ADE80", fontFamily: "'General Sans', sans-serif" }}>
        ✓ Completed in 4m 23s — zero downtime
      </div>
    </div>
  );
}

function AutomationMockup() {
  const items = [
    { mark: "AURORA™",    office: "USPTO", due: "Jun 12", urgent: true  },
    { mark: "NEXAFLOW®",  office: "EUIPO", due: "Jun 18", urgent: false },
    { mark: "QUANTLEAP™", office: "JPO",   due: "Jul 02", urgent: false },
  ];
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)" }}>UPCOMING DEADLINES</div>
        <div style={{ fontSize: 10, color: "#5B7FFF", fontWeight: 600 }}>Calendar synced</div>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((it) => (
          <div key={it.mark} style={{ padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: `1px solid ${it.urgent ? "rgba(220,38,38,0.2)" : "rgba(255,255,255,0.05)"}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{it.mark}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: it.urgent ? "#DC2626" : "rgba(255,255,255,0.35)" }}>{it.due}</span>
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 3, fontFamily: "'General Sans', sans-serif" }}>
              {it.office} {it.urgent && <span style={{ color: "#D97706" }}>· 7 days — notice sent</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompetitorMockup() {
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>COMPETITOR ACTIVITY</div>
      <div style={{ padding: "14px", borderRadius: 10, background: "rgba(91,127,255,0.06)", border: "1px solid rgba(91,127,255,0.15)", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B7FFF", display: "inline-block", animation: "pulseDot 2s ease-in-out infinite" }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#5B7FFF", letterSpacing: "0.05em" }}>NEW FILING DETECTED</span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginLeft: "auto" }}>2h ago</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4 }}>"AURORA PLUS"</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "'General Sans', sans-serif" }}>Filed by NEXUS TECH in EUIPO · Class 42</div>
      </div>
      <div style={{ padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'General Sans', sans-serif" }}>Similarity to <span style={{ color: "#fff", fontWeight: 600 }}>AURORA™</span> in your portfolio</div>
        <div style={{ marginTop: 6, display: "flex", gap: 4 }}>
          {[...Array(8)].map((_, i) => <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < 6 ? "#D97706" : "rgba(255,255,255,0.08)" }} />)}
        </div>
        <div style={{ fontSize: 11, color: "#D97706", marginTop: 4 }}>75% match — review recommended</div>
      </div>
    </div>
  );
}

function TeamsMockup() {
  const members = [
    { name: "Sarah K.",  role: "Admin",     color: "#5B7FFF" },
    { name: "James M.",  role: "Attorney",  color: "#A78BFA" },
    { name: "Lisa R.",   role: "Paralegal", color: "#16A34A" },
    { name: "Alex T.",   role: "Read only", color: "rgba(255,255,255,0.3)" },
  ];
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)" }}>TEAM ACCESS</div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>8 members</div>
      </div>
      <div className="flex flex-col gap-2 mb-3">
        {members.map((m) => (
          <div key={m.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,255,0.03)" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${m.color}22`, border: `1px solid ${m.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: m.color }}>
              {m.name[0]}
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#fff", flex: 1 }}>{m.name}</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'General Sans', sans-serif" }}>{m.role}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 8, border: "1px dashed rgba(91,127,255,0.25)", cursor: "pointer" }}>
        <span style={{ color: "#5B7FFF" }}><Icon name="user" size={14} /></span>
        <span style={{ fontSize: 12, color: "#5B7FFF", fontWeight: 600 }}>+ Invite team member</span>
      </div>
    </div>
  );
}

function PortfolioHealthMockup() {
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>
      {/* Coming soon overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,26,0.7)", backdropFilter: "blur(3px)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, borderRadius: 14 }}>
        <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 9999, background: "rgba(217,119,6,0.15)", color: "#D97706", border: "1px solid rgba(217,119,6,0.3)", letterSpacing: "0.05em" }}>IN PROGRESS</span>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif" }}>Preview coming soon</span>
      </div>
      {/* Blurred content underneath */}
      <div style={{ opacity: 0.5 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>PORTFOLIO HEALTH</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "conic-gradient(#16A34A 0% 78%, rgba(255,255,255,0.06) 78%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#0d0d1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#16A34A" }}>94</div>
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>Excellent</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>2,847 assets analysed</div>
          </div>
        </div>
        {[{ l: "Low risk", n: "2,817", c: "#16A34A" }, { l: "At risk", n: "23", c: "#D97706" }, { l: "Critical", n: "7", c: "#DC2626" }].map(r => (
          <div key={r.l} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: r.c, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", flex: 1 }}>{r.l}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{r.n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Feature data ───────────────────────────────────────────────────────────

const features = [
  {
    icon: "sync" as const,
    title: "Real-Time Sync Across 100+ Offices",
    body: "Direct integration with every major IP office. Automatic status updates and deadline calculation. Your docket is always current — no manual checking, no stale data.",
    side: "right",
    mockupKey: "sync",
  },
  {
    icon: "layers" as const,
    title: "Bulk Import & Free Migration",
    body: "Migrate your entire portfolio in minutes, not weeks. We handle the data transfer so your team stays focused on work. No migration fees. No downtime. Most firms are fully onboarded in under a week.",
    side: "left",
    mockupKey: "migration",
  },
  {
    icon: "bell" as const,
    title: "Workflow Automation",
    body: "Daily and weekly docket digests. One-way calendar sync with Google Calendar. Smart reminders that escalate as deadlines approach. The administrative work runs itself.",
    side: "right",
    mockupKey: "automation",
  },
  {
    icon: "user" as const,
    title: "Built for Teams",
    body: "Role-based permissions. Custom reporting for stakeholders. Scales from solo practice to 50-person IP departments without configuration headaches.",
    side: "left",
    mockupKey: "teams",
  },
  {
    icon: "eye" as const,
    title: "Competitor Watch",
    body: "Track competitor filings and activity automatically. Know when a competitor files in your client's space before they do. Stay ahead with real-time alerts and weekly intelligence summaries.",
    side: "right",
    mockupKey: "competitor",
    inProgress: true,
  },
  {
    icon: "ai" as const,
    title: "AI Portfolio Health",
    body: "Go beyond deadline management. DocketEngine's intelligence layer will surface portfolio health scores, risk indicators, and compliance status in real time — turning your docket into a strategic asset.",
    side: "left",
    mockupKey: "health",
    inProgress: true,
  },
];

function Mockup({ type }: { type: string }) {
  switch (type) {
    case "sync":       return <SyncMockup />;
    case "migration":  return <MigrationMockup />;
    case "automation": return <AutomationMockup />;
    case "competitor": return <CompetitorMockup />;
    case "teams":      return <TeamsMockup />;
    case "health":     return <PortfolioHealthMockup />;
    default:           return null;
  }
}

export default function DocketFeatures() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <h2 className="font-display font-extrabold"
              style={{ fontSize: "clamp(30px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              Everything your docket needs.
            </h2>
            <p style={{ fontSize: 17, color: "#5C5C6E", maxWidth: 520, margin: "0 auto", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
              Built from the ground up — not bolted onto a legacy platform.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div style={{
                display: "grid",
                gridTemplateColumns: f.side === "right" ? "1fr 420px" : "420px 1fr",
                gap: 56,
                alignItems: "center",
                padding: "56px 48px",
                borderRadius: 20,
                border: "1px solid #E2E2EA",
                background: f.inProgress ? "#FFFBEB" : "#fff",
                transition: "box-shadow 0.2s",
              }}
                className="max-md:!grid-cols-1 max-md:!gap-8 max-md:p-8"
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
              >
                {/* Text */}
                <div style={{ order: f.side === "right" ? 1 : 2 }} className="max-md:!order-1">
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: f.inProgress ? "rgba(217,119,6,0.1)" : "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: f.inProgress ? "#D97706" : "#2D2A6E", marginBottom: 20 }}>
                    <Icon name={f.icon} size={24} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{f.title}</h3>
                    {f.inProgress && <InProgressBadge />}
                  </div>
                  <p style={{ fontSize: 16, lineHeight: 1.75, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{f.body}</p>
                </div>

                {/* Mockup */}
                <div style={{ order: f.side === "right" ? 2 : 1 }} className="max-md:!order-2">
                  <Mockup type={f.mockupKey} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
