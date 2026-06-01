"use client";
import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const faqs = [
  {
    q: "What counts as a matter?",
    a: "A matter is a single IP asset — one trademark, one patent, or one design registration. It doesn't matter how many jurisdictions that asset is filed in; each unique IP asset counts as one matter. For example, a trademark filed in 5 countries counts as 1 matter.",
  },
  {
    q: "Is there really a 14-day free trial?",
    a: "Yes — all DocketEngine plans include a 14-day free trial with full access to every feature on your chosen plan. No credit card required to start. You can import your portfolio, test the sync, and explore the platform before committing.",
  },
  {
    q: "What's included in the free migration?",
    a: "Our team handles the full data transfer from your current system — whether that's AltLegal, AppColl, a spreadsheet, or a legacy platform. We clean, format, and import your portfolio data with no downtime. Most firms are fully onboarded within a week.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately. Downgrades apply at the start of the next billing period. There are no penalties or lock-in periods.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Annual billing is available on all plans and saves you the equivalent of 2 months (a ~17% discount versus monthly billing). Contact us to set up annual billing.",
  },
  {
    q: "What happens if I exceed my matter limit?",
    a: "We'll notify you as you approach your plan's matter limit. You won't be cut off — but we'll work with you to move to the appropriate plan. We never charge overage fees without notice.",
  },
  {
    q: "When will AI Portfolio Health and Competitor Watch be available?",
    a: "Both features are currently in active development. AI Portfolio Health and Competitor Watch are available on the Growth and Scale plans — and will activate automatically for all qualifying subscribers when they launch. No plan changes or additional fees required.",
  },
  {
    q: "Can I use both DocketEngine and RenewalEngine together?",
    a: "Yes — and that's how they're designed to work. Both engines run on the same shared data infrastructure, so your portfolio data syncs seamlessly between them. Contact us for bundled pricing if you're interested in both.",
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
