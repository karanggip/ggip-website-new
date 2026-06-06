"use client";
import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const faqs = [
  {
    q: "What counts as a matter?",
    a: "A matter is a single registered IP asset — one trademark, one patent, or one design registration. It doesn't matter how many jurisdictions that asset is filed in; each unique IP asset counts as one matter.",
  },
  {
    q: "Is there really a 14-day free trial?",
    a: "Yes — all DocketEngine plans include a 14-day free trial with full access to every feature on your chosen plan. You can import your portfolio, test the sync, and explore the platform before committing.",
  },
  {
    q: "Does DocketEngine handle patent docketing?",
    a: "DocketEngine today handles trademark docketing across 100+ IP offices in real time. Patent docketing is on our near-term roadmap — firms that come aboard early help shape exactly what we build. In the meantime, RenewalEngine already handles patent renewals across 190+ jurisdictions, so if patent renewal cost is your bigger pain, you can capture that value today.",
  },
  {
    q: "What's included in the free migration?",
    a: "Our team handles the full data transfer from your current system — whether that's AltLegal, AppColl, a spreadsheet, or a legacy platform. We clean, format, and import your portfolio data with no downtime. Most firms are fully onboarded within a week.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "You can upgrade at any time — upgrades take effect immediately. Downgrades require a quick support request so we can confirm your matter count fits the lower tier and walk you through the change. No penalties, no lock-in periods either way.",
  },
  {
    q: "How does annual billing work?",
    a: "Toggle to Annual at the top of this page to see annual pricing. Annual billing saves you the equivalent of 2 months — a ~17% discount versus monthly billing. Available on every plan with a numeric price; the same 14-day free trial still applies.",
  },
  {
    q: "Do you offer education pricing for universities and non-profits?",
    a: "Yes. We offer discounted pricing for accredited universities, public research institutions, and non-profit research labs. The effective cost typically lands meaningfully below list. Tell us about your portfolio size and we'll send a tailored quote.",
  },
  {
    q: "What happens if I exceed my matter limit?",
    a: "We'll notify you as you approach your plan's matter limit. You won't be cut off — but we'll work with you to move to the appropriate plan. We never charge overage fees without notice.",
  },
  {
    q: "When will AI Portfolio Health, Risk Detection, and Competitor Watch be available?",
    a: "These intelligence features are in active development. Where they're shown as 'In progress' in the comparison table, that means the capability is on its way for that plan — and will activate automatically for qualifying subscribers when it ships. No plan change or additional fee required at launch.",
  },
  {
    q: "Can I use both DocketEngine and RenewalEngine together?",
    a: "Yes — and that's how they're designed to work. Both engines run on the same shared data layer, so your portfolio data flows between them without re-entry. Contact us for bundled pricing if you're interested in both.",
  },
  {
    q: "How does RenewalEngine cover patent and trademark renewals across 190+ jurisdictions?",
    a: "RenewalEngine runs in strategic partnership with a market leader in IP renewals — which means you get real coverage across 190+ jurisdictions on day one, with line-item pricing instead of opaque markups. Pricing is per-renewal and depends on jurisdiction and asset count; request a quote and we'll model your portfolio.",
  },
];

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7" style={{ maxWidth: 760 }}>
        <FadeIn>
          <h2 className="font-display font-bold mb-10" style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Frequently asked questions.
          </h2>
        </FadeIn>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 40}>
              <div style={{ borderBottom: "1px solid #E2E2EA" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "20px 0" }}
                >
                  <span style={{ fontSize: 16, fontWeight: 600, color: "#0C0C0E", lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ color: "#5B7FFF", flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(180deg)" : "rotate(0)" }}>
                    <Icon name="chevronDown" size={20} />
                  </span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: 20 }}>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
