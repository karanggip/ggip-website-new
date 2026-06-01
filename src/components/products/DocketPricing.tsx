import type React from "react";
import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

const tiers = [
  {
    name: "Start",
    price: "$99",
    period: "/month",
    desc: "For solo attorneys and small practices getting started with modern docketing.",
    matters: "Up to 100 matters",
    users: "Up to 5 users",
    features: [
      "Real-time sync with all 100+ IP offices",
      "Automated deadline tracking & alerts",
      "Bulk import & free migration",
      "Calendar sync (Outlook & Google)",
      "Basic portfolio reporting",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$399",
    period: "/month",
    desc: "For growing IP practices that need AI insights, API access, and more capacity.",
    matters: "100–500 matters",
    users: "Up to 10 users",
    features: [
      "Everything in Start",
      "AI portfolio health scoring",
      "Risk detection & compliance alerts",
      "Competitor watch & filing alerts",
      "Advanced reporting & custom exports",
      "API access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "For large IP departments and multi-office firms with complex requirements.",
    matters: "500+ matters",
    users: "Unlimited users",
    features: [
      "Everything in Growth",
      "SSO / SAML",
      "SOC2-aligned security",
      "Dedicated customer success manager",
      "Custom integrations",
      "SLA & uptime guarantees",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export default function DocketPricing() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-display font-extrabold"
              style={{ fontSize: "clamp(30px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              Transparent pricing that scales<br />with your practice.
            </h2>
            <p style={{ fontSize: 16, color: "#5C5C6E", maxWidth: 440, margin: "0 auto", fontFamily: "'General Sans', sans-serif" }}>
              No hidden fees. No per-user surprises. Priced by matter count so your whole team is always included.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}
          className="max-md:grid-cols-1">
          {tiers.map((tier, i) => {
            const cardInner = (
              <div style={{
                position: "relative", zIndex: 1,
                borderRadius: 16,
                border: tier.highlight ? "none" : "1px solid #E2E2EA",
                background: tier.highlight ? "linear-gradient(135deg, #2D2A6E, #1e1b5e)" : "#fff",
                padding: 32,
              }}>
                {tier.badge && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#5B7FFF", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 9999, letterSpacing: "0.05em", whiteSpace: "nowrap", zIndex: 2 }}>
                    {tier.badge}
                  </div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: tier.highlight ? "rgba(255,255,255,0.6)" : "#5C5C6E", marginBottom: 8, letterSpacing: "0.02em" }}>{tier.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.04em", color: tier.highlight ? "#fff" : "#0C0C0E" }}>{tier.price}</span>
                    {tier.period && <span style={{ fontSize: 15, color: tier.highlight ? "rgba(255,255,255,0.5)" : "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{tier.period}</span>}
                  </div>
                  <p style={{ fontSize: 14, color: tier.highlight ? "rgba(255,255,255,0.55)" : "#5C5C6E", lineHeight: 1.6, marginTop: 8, fontFamily: "'General Sans', sans-serif" }}>{tier.desc}</p>
                </div>
                <div style={{ padding: "12px 0", borderTop: `1px solid ${tier.highlight ? "rgba(255,255,255,0.12)" : "#E2E2EA"}`, borderBottom: `1px solid ${tier.highlight ? "rgba(255,255,255,0.12)" : "#E2E2EA"}`, marginBottom: 20 }}>
                  {[tier.matters, tier.users].map((line, j) => (
                    <div key={j} style={{ fontSize: 13, color: tier.highlight ? "rgba(255,255,255,0.7)" : "#0C0C0E", fontWeight: 600, padding: "4px 0", fontFamily: "'General Sans', sans-serif" }}>{line}</div>
                  ))}
                </div>
                <div className="flex flex-col gap-2.5 mb-8">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span style={{ color: tier.highlight ? "#A78BFA" : "#5B7FFF", flexShrink: 0, marginTop: 1, display: "flex" }}>
                        <Icon name="check" size={15} stroke={2.5} />
                      </span>
                      <span style={{ fontSize: 14, color: tier.highlight ? "rgba(255,255,255,0.7)" : "#5C5C6E", fontFamily: "'General Sans', sans-serif", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href={tier.cta === "Talk to Sales" ? "/contact" : "/demo"}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "13px 24px", borderRadius: 10, fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", transition: "all 0.2s", background: tier.highlight ? "#fff" : "#2D2A6E", color: tier.highlight ? "#2D2A6E" : "#fff" }}>
                  {tier.cta} <Icon name="arrowRight" size={15} />
                </a>
              </div>
            );
            return (
              <FadeIn key={i} delay={i * 120}>
                {tier.highlight ? (
                  <div style={{
                    padding: 3,
                    borderRadius: 19,
                    background: "conic-gradient(from var(--angle, 0deg), transparent 40%, #5B7FFF 55%, #A78BFA 68%, #5B7FFF 80%, transparent 90%)",
                    animation: "borderSpin 5s linear infinite",
                    boxShadow: "0 16px 48px rgba(45,42,110,0.3)",
                  } as React.CSSProperties}>
                    {cardInner}
                  </div>
                ) : cardInner}
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={400}>
          <p style={{ textAlign: "center", fontSize: 14, color: "#8B8B9E", marginTop: 32, fontFamily: "'General Sans', sans-serif" }}>
            All plans include a 14-day free trial.{" "}
            <a href="/pricing" style={{ color: "#5B7FFF", textDecoration: "none", fontWeight: 600 }}>View full pricing details →</a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
