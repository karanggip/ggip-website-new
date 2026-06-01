import type React from "react";
import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import EngineIcon from "../ui/EngineIcon";
import { url } from "../../utils/url";

const InProgressBadge = () => (
  <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 9999, background: "rgba(217,119,6,0.12)", color: "#D97706", border: "1px solid rgba(217,119,6,0.25)", letterSpacing: "0.05em" }}>
    IN PROGRESS
  </span>
);

const tiers = [
  {
    name: "Start",
    price: "$99",
    period: "/month",
    desc: "For solo attorneys and small practices.",
    matters: "Up to 100 matters",
    users: "Up to 5 users",
    highlight: false,
    cta: "Start Free Trial",
    ctaHref: "/demo",
    features: [
      "Real-time sync with 100+ IP offices",
      "Automated deadline tracking & alerts",
      "Bulk import & free migration",
      "Calendar sync (Google Calendar)",
      "Basic portfolio reporting",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$399",
    period: "/month",
    desc: "For growing practices that need AI insights and more capacity.",
    matters: "100–500 matters",
    users: "Up to 10 users",
    highlight: true,
    badge: "Most Popular",
    cta: "Start Free Trial",
    ctaHref: "/demo",
    features: [
      "Everything in Start",
      "AI portfolio health scoring",
      "Risk detection & compliance alerts",
      "Competitor watch & filing alerts",
      "Advanced reporting & custom exports",
      "API access",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "For large IP departments and multi-office firms.",
    matters: "500+ matters",
    users: "Unlimited users",
    highlight: false,
    cta: "Talk to Sales",
    ctaHref: "/contact",
    features: [
      "Everything in Growth",
      "SSO / SAML",
      "SOC2-aligned security",
      "Dedicated customer success manager",
      "Custom integrations",
      "SLA & uptime guarantees",
    ],
  },
];

// Full comparison matrix
const matrixGroups = [
  {
    group: "Capacity",
    rows: [
      { label: "Matters",       values: ["Up to 100", "100–500", "500+"] },
      { label: "Users",         values: ["Up to 5",   "Up to 10", "Unlimited"] },
    ],
  },
  {
    group: "Docketing",
    rows: [
      { label: "IP offices covered",        values: [true, true, true] },
      { label: "Real-time sync",            values: [true, true, true] },
      { label: "Deadline tracking & alerts",values: [true, true, true] },
      { label: "Bulk import",               values: [true, true, true] },
      { label: "Free migration",            values: [true, true, true] },
      { label: "Calendar sync (Google)",    values: [true, true, true] },
    ],
  },
  {
    group: "Intelligence",
    rows: [
      { label: "AI portfolio health scoring",  values: [false, "progress", "progress"] },
      { label: "Risk detection & alerts",      values: [false, "progress", "progress"] },
      { label: "Competitor watch",             values: [false, "progress", "progress"] },
    ],
  },
  {
    group: "Reporting & API",
    rows: [
      { label: "Basic reporting",              values: [true, true, true] },
      { label: "Advanced reporting & exports", values: [false, true, true] },
      { label: "API access",                   values: [false, true, true] },
    ],
  },
  {
    group: "Enterprise",
    rows: [
      { label: "SSO / SAML",                   values: [false, false, true] },
      { label: "SOC2-aligned security",        values: [false, false, true] },
      { label: "Dedicated CSM",               values: [false, false, true] },
      { label: "Custom integrations",          values: [false, false, true] },
      { label: "SLA & uptime guarantees",      values: [false, false, true] },
    ],
  },
  {
    group: "Support",
    rows: [
      { label: "Support level", values: ["Email", "Priority", "Dedicated"] },
    ],
  },
];

function MatrixCell({ value }: { value: boolean | string }) {
  if (value === true) return (
    <div className="flex justify-center">
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#16A34A" }}>
        <Icon name="check" size={13} stroke={2.5} />
      </span>
    </div>
  );
  if (value === false) return <div className="flex justify-center"><span style={{ fontSize: 18, color: "#E2E2EA", lineHeight: 1 }}>—</span></div>;
  if (value === "progress") return (
    <div className="flex justify-center">
      <InProgressBadge />
    </div>
  );
  return <span style={{ fontSize: 13, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{value as string}</span>;
}

export default function PricingPlans() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">

        {/* DocketEngine header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <EngineIcon engine="docket" size={48} variant="dark" />
            <div>
              <h2 className="font-display font-bold" style={{ fontSize: 28, letterSpacing: "-0.02em" }}>DocketEngine</h2>
              <p style={{ fontSize: 14, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>Automated IP docketing · Starts at $99/month</p>
            </div>
          </div>
        </FadeIn>

        {/* Tier cards */}
        <FadeIn delay={80}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }}
            className="max-md:grid-cols-1">
            {tiers.map((tier, i) => {
              const cardInner = (
                <div style={{
                  position: "relative", zIndex: 1,
                  borderRadius: tier.highlight ? 14 : 16,
                  border: tier.highlight ? "none" : "1px solid #E2E2EA",
                  background: tier.highlight ? "linear-gradient(135deg, #2D2A6E, #1e1b5e)" : "#fff",
                  padding: 28,
                  height: "100%",
                }}>
                  {tier.badge && (
                    <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#5B7FFF", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 9999, letterSpacing: "0.05em", whiteSpace: "nowrap", zIndex: 2 }}>
                      {tier.badge}
                    </div>
                  )}
                  <div style={{ fontSize: 13, fontWeight: 700, color: tier.highlight ? "rgba(255,255,255,0.5)" : "#5C5C6E", marginBottom: 6, letterSpacing: "0.02em" }}>{tier.name}</div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em", color: tier.highlight ? "#fff" : "#0C0C0E" }}>{tier.price}</span>
                    {tier.period && <span style={{ fontSize: 14, color: tier.highlight ? "rgba(255,255,255,0.45)" : "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{tier.period}</span>}
                  </div>
                  <p style={{ fontSize: 13, color: tier.highlight ? "rgba(255,255,255,0.5)" : "#5C5C6E", lineHeight: 1.5, marginBottom: 16, fontFamily: "'General Sans', sans-serif" }}>{tier.desc}</p>
                  <div style={{ padding: "10px 0", borderTop: `1px solid ${tier.highlight ? "rgba(255,255,255,0.1)" : "#E2E2EA"}`, borderBottom: `1px solid ${tier.highlight ? "rgba(255,255,255,0.1)" : "#E2E2EA"}`, marginBottom: 16 }}>
                    {[tier.matters, tier.users].map((line, j) => (
                      <div key={j} style={{ fontSize: 12, color: tier.highlight ? "rgba(255,255,255,0.65)" : "#0C0C0E", fontWeight: 600, padding: "3px 0", fontFamily: "'General Sans', sans-serif" }}>{line}</div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 mb-6">
                    {tier.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span style={{ color: tier.highlight ? "#A78BFA" : "#5B7FFF", flexShrink: 0, marginTop: 1, display: "flex" }}>
                          <Icon name="check" size={14} stroke={2.5} />
                        </span>
                        <span style={{ fontSize: 13, color: tier.highlight ? "rgba(255,255,255,0.65)" : "#5C5C6E", fontFamily: "'General Sans', sans-serif", lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href={url(tier.ctaHref)}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "12px 20px", borderRadius: 10, fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", transition: "all 0.2s", background: tier.highlight ? "#fff" : "#2D2A6E", color: tier.highlight ? "#2D2A6E" : "#fff" }}>
                    {tier.cta} <Icon name="arrowRight" size={14} />
                  </a>
                </div>
              );
              return (
                <div key={i}>
                  {tier.highlight ? (
                    <div style={{ padding: 3, borderRadius: 17, background: "conic-gradient(from var(--angle, 0deg), transparent 40%, #5B7FFF 55%, #A78BFA 68%, #5B7FFF 80%, transparent 90%)", animation: "borderSpin 5s linear infinite", boxShadow: "0 12px 40px rgba(45,42,110,0.2)", height: "100%" } as React.CSSProperties}>
                      {cardInner}
                    </div>
                  ) : (
                    <div style={{ height: "100%" }}>{cardInner}</div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>

        <p style={{ fontSize: 13, color: "#8B8B9E", marginBottom: 48, fontFamily: "'General Sans', sans-serif" }}>
          All plans include a 14-day free trial. Annual billing available — save 2 months.{" "}
          <a href={url("/contact")} style={{ color: "#5B7FFF", textDecoration: "none", fontWeight: 600 }}>Talk to us about custom pricing →</a>
        </p>

        {/* Full comparison matrix */}
        <FadeIn delay={150}>
          <h3 className="font-display font-bold mb-6" style={{ fontSize: 20, letterSpacing: "-0.01em" }}>Full plan comparison</h3>
          <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #E2E2EA" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #E2E2EA", background: "#F6F6F9" }}>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontSize: 12, fontWeight: 600, color: "#5C5C6E", width: "40%" }}>Feature</th>
                  {tiers.map((t) => (
                    <th key={t.name} style={{ padding: "14px 20px", textAlign: "center", fontSize: 13, fontWeight: 700, color: t.highlight ? "#2D2A6E" : "#0C0C0E", background: t.highlight ? "#EEEDFA" : "transparent", position: "relative" }}>
                      {t.highlight && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #5B7FFF, #A78BFA)" }} />}
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixGroups.map((group) => (
                  <>
                    <tr key={group.group} style={{ background: "#F6F6F9" }}>
                      <td colSpan={4} style={{ padding: "8px 20px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#8B8B9E", textTransform: "uppercase" }}>
                        {group.group}
                      </td>
                    </tr>
                    {group.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderBottom: "1px solid #F6F6F9" }}>
                        <td style={{ padding: "12px 20px", fontSize: 13, color: "#0C0C0E", fontFamily: "'General Sans', sans-serif" }}>{row.label}</td>
                        {row.values.map((val, vi) => (
                          <td key={vi} style={{ padding: "12px 20px", textAlign: "center", background: vi === 1 ? "rgba(238,237,250,0.4)" : "transparent" }}>
                            <MatrixCell value={val} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
