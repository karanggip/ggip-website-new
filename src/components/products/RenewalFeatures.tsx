import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

// Mini mockups
function OneClickMockup() {
  const assets = [
    { mark: "AURORA™",     j: "USPTO", status: "Renew",  c: "#16A34A" },
    { mark: "NEXAFLOW®",   j: "EUIPO", status: "Renew",  c: "#16A34A" },
    { mark: "STRATOSYNC™", j: "WIPO",  status: "Hold",   c: "#D97706" },
    { mark: "QUANTLEAP™",  j: "JPO",   status: "Lapse",  c: "#DC2626" },
  ];
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>ONE-CLICK ACTIONS</div>
      <div className="flex flex-col gap-2">
        {assets.map((a) => (
          <div key={a.mark} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)" }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#fff", flex: 1 }}>{a.mark}</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{a.j}</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, background: `${a.c}18`, color: a.c, fontWeight: 700, fontSize: 11 }}>{a.status}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, padding: "8px 12px", borderRadius: 8, background: "rgba(91,127,255,0.06)", border: "1px solid rgba(91,127,255,0.15)", fontSize: 12, color: "#5B7FFF" }}>
        ✓ Bulk action applied to 47 assets
      </div>
    </div>
  );
}

function TransparencyMockup() {
  const countries = [
    { country: "🇺🇸 USPTO",  provider: "$620", ours: "$432", saving: "30%" },
    { country: "🇪🇺 EUIPO",  provider: "€1,200", ours: "€918", saving: "24%" },
    { country: "🇯🇵 JPO",    provider: "¥72,000", ours: "¥52,800", saving: "27%" },
  ];
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)" }}>TRANSPARENT PRICING</div>
        <span style={{ fontSize: 10, color: "#16A34A", fontWeight: 600 }}>No hidden fees</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr 0.7fr 0.5fr", fontSize: 10, color: "rgba(255,255,255,0.25)", fontWeight: 600, letterSpacing: "0.06em", padding: "0 4px 8px", gap: 8 }}>
        <span>OFFICE</span><span>PROVIDER</span><span>OURS</span><span>SAVE</span>
      </div>
      <div className="flex flex-col gap-2">
        {countries.map((c) => (
          <div key={c.country} style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr 0.7fr 0.5fr", padding: "10px 4px", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 12, gap: 8, alignItems: "center" }}>
            <span style={{ color: "#fff", fontWeight: 500 }}>{c.country}</span>
            <span style={{ color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}>{c.provider}</span>
            <span style={{ color: "#A78BFA", fontWeight: 600 }}>{c.ours}</span>
            <span style={{ color: "#16A34A", fontWeight: 700 }}>{c.saving}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ForecastMockup() {
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>RENEWAL FORECAST — NEXT 12 MONTHS</div>
      <div style={{ display: "flex", align: "flex-end", gap: 3, alignItems: "flex-end", height: 80, marginBottom: 12 }}>
        {[40, 65, 35, 80, 55, 90, 45, 70, 60, 85, 50, 75].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: i === 5 || i === 9 ? "rgba(167,139,250,0.8)" : "rgba(167,139,250,0.25)", transition: "all 0.2s" }} />
        ))}
      </div>
      <div className="flex gap-8 mt-2">
        {[
          { l: "Q3 renewals", v: "23", c: "#A78BFA" },
          { l: "Projected cost", v: "$8.4k", c: "#fff" },
          { l: "Projected savings", v: "$2.3k", c: "#16A34A" },
        ].map((s, i) => (
          <div key={i}>
            <div style={{ fontSize: 16, fontWeight: 700, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "'General Sans', sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecurityMockup() {
  const items = [
    { icon: "shield" as const, label: "SOC2-aligned security",   status: "Active",  c: "#16A34A" },
    { icon: "lock" as const,   label: "Role-based permissions",  status: "Enabled", c: "#16A34A" },
    { icon: "file" as const,   label: "Full audit trail",        status: "Active",  c: "#16A34A" },
    { icon: "bell" as const,   label: "Invoice repository",      status: "Synced",  c: "#5B7FFF" },
  ];
  return (
    <div style={{ background: "#0d0d1a", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>COMPLIANCE & SECURITY</div>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.02)" }}>
            <span style={{ color: item.c, display: "flex" }}><Icon name={item.icon} size={16} /></span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", flex: 1, fontFamily: "'General Sans', sans-serif" }}>{item.label}</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: item.c, padding: "2px 8px", borderRadius: 9999, background: `${item.c}18` }}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    icon: "target" as const,
    title: "One-Click Workflow",
    body: "Renew, hold, or let lapse — one click per asset. Bulk actions for portfolio-wide decisions. Live status tracking across every jurisdiction. No spreadsheets, no email chains.",
    side: "right",
    mockup: <OneClickMockup />,
  },
  {
    icon: "dollar" as const,
    title: "190+ Jurisdictions. Transparent Pricing.",
    body: "See exactly what you're paying, country by country. No bundled fees. No hidden FX markups. No opaque 'service charges.' Complete cost breakdowns so you can quote clients with confidence.",
    side: "left",
    mockup: <TransparencyMockup />,
  },
  {
    icon: "chart" as const,
    title: "Forecasting & Budgeting",
    body: "Forward-looking cost projections by portfolio, jurisdiction, or client. Export-ready reports for internal budgeting and client billing. Know what's coming before it arrives.",
    side: "right",
    mockup: <ForecastMockup />,
  },
  {
    icon: "shield" as const,
    title: "Enterprise-Grade Security",
    body: "SOC2-aligned security standards. Role-based permissions. Full audit trails. Centralised document repository for invoices and disbursements. Built for the compliance requirements mid-size firms actually face.",
    side: "left",
    mockup: <SecurityMockup />,
  },
];

export default function RenewalFeatures() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
              Built to run your renewals.
            </h2>
            <p style={{ fontSize: 16, color: "#5C5C6E", maxWidth: 480, margin: "0 auto", fontFamily: "'General Sans', sans-serif" }}>
              Every feature designed to reduce the operational burden and capture the margin your firm deserves.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div style={{ display: "grid", gridTemplateColumns: f.side === "right" ? "1fr 420px" : "420px 1fr", gap: 56, alignItems: "center", padding: "52px 48px", borderRadius: 20, border: "1px solid #E2E2EA", background: "#fff", transition: "box-shadow 0.2s" }}
                className="max-md:!grid-cols-1 max-md:!gap-8 max-md:p-8"
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}>
                <div style={{ order: f.side === "right" ? 1 : 2 }} className="max-md:!order-1">
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(167,139,250,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#A78BFA", marginBottom: 20 }}>
                    <Icon name={f.icon} size={24} />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>{f.title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.75, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{f.body}</p>
                </div>
                <div style={{ order: f.side === "right" ? 2 : 1 }} className="max-md:!order-2">
                  {f.mockup}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
