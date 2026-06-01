"use client";
import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const faqs = [
  {
    q: "How fast will I hear back?",
    a: "Typically within one business day — often within hours during US and EU working hours. Sales inquiries usually get a same-day reply.",
  },
  {
    q: "Can I book a demo without going through the form?",
    a: "Yes. Email sales@guardedgrowthip.com with a few sentences about your firm and what you're looking for, and we'll send a calendar link directly.",
  },
  {
    q: "Do you offer custom enterprise terms?",
    a: "Yes — for firms on the Scale plan we offer SSO/SAML, SOC2-aligned controls, dedicated CSM, custom integrations, SLAs, and tailored pricing. Use the Sales channel and we'll set up a scoping conversation.",
  },
  {
    q: "I'm an existing customer — should I use this form or in-app support?",
    a: "If you're logged into DocketEngine or RenewalEngine, in-app support is fastest. For anything broader, email support@guardedgrowthip.com.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ paddingTop: 56, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7" style={{ maxWidth: 760 }}>
        <FadeIn>
          <h2 className="font-display font-bold mb-7" style={{ fontSize: "clamp(24px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
            Common questions.
          </h2>
        </FadeIn>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 40}>
              <div style={{ borderBottom: "1px solid #E2E2EA" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "18px 0" }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#0C0C0E", lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ color: "#5B7FFF", flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(180deg)" : "rotate(0)" }}>
                    <Icon name="chevronDown" size={18} />
                  </span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: 18 }}>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{faq.a}</p>
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
