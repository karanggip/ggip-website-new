"use client";
import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import { getRecaptchaToken, recaptchaEnabled } from "../../utils/recaptcha";

// Form opens the user's email client with the message prefilled,
// routing to the appropriate inbox based on the selected subject.
const subjects = ["Sales", "Support", "Partnerships", "Press", "General"];

// All inquiries route to a single inbox; the chosen subject category lives in
// the Subject header for in-inbox triage.
const subjectEmail: Record<string, string> = {
  Sales:        "info@guardedgrowthip.com",
  Support:      "info@guardedgrowthip.com",
  Partnerships: "info@guardedgrowthip.com",
  Press:        "info@guardedgrowthip.com",
  General:      "info@guardedgrowthip.com",
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #E2E2EA",
  background: "#fff",
  fontSize: 15,
  color: "#0C0C0E",
  fontFamily: "'General Sans', sans-serif",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#0C0C0E",
  marginBottom: 6,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

type SubmitMode = "api" | "mailto" | null;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState<SubmitMode>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name    = String(fd.get("name") || "");
    const email   = String(fd.get("email") || "");
    const company = String(fd.get("company") || "");
    const subject = String(fd.get("subject") || "General");
    const message = String(fd.get("message") || "");

    setSubmitting(true);

    // Grab a reCAPTCHA v3 token (no-op in dev without a key).
    const recaptchaToken = await getRecaptchaToken("contact");

    // Try the API endpoint first. On Railway + Resend this delivers the email
    // server-side. On GitHub Pages there's no API → 404 → fall through to mailto.
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name, email, company, subject, message, recaptchaToken }),
      });
      // Static hosts often serve a 404 HTML page (not JSON). Check both status
      // and content-type so we don't mistakenly count a 404 page as success.
      const ct = res.headers.get("content-type") || "";
      if (res.ok && ct.includes("application/json")) {
        const data = await res.json().catch(() => ({}));
        if (data.ok) {
          setSubmitted("api");
          form.reset();
          setSubmitting(false);
          return;
        }
      }
    } catch {
      // Network error / endpoint absent — fall through to mailto
    }

    // Fallback: open the user's email client with the message prefilled
    const to = subjectEmail[subject] || "info@guardedgrowthip.com";
    const subjectLine = encodeURIComponent(`[${subject}] ${name ? `from ${name}` : "Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}\n\n${message}`
    );
    window.location.href = `mailto:${to}?subject=${subjectLine}&body=${body}`;
    setSubmitted("mailto");
    setSubmitting(false);
    form.reset();
  }

  if (submitted) {
    const apiSuccess = submitted === "api";
    return (
      <div style={{ padding: "48px 36px", borderRadius: 16, border: "1px solid #E2E2EA", background: "linear-gradient(135deg, #EEEDFA, #EEF2FF)", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#16A34A", margin: "0 auto 18px", border: "1px solid rgba(22,163,74,0.25)" }}>
          <Icon name="check" size={26} stroke={2.5} />
        </div>
        <h3 className="font-display font-bold mb-2" style={{ fontSize: 22, letterSpacing: "-0.02em" }}>
          {apiSuccess ? "Message sent." : "Almost there."}
        </h3>
        <p style={{ fontSize: 15, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
          {apiSuccess
            ? "We've received your note and will reply within one business day. Talk soon."
            : "Your email client should have opened with the message prefilled — just hit send. We'll reply within one business day."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "36px 32px", borderRadius: 16, border: "1px solid #E2E2EA", background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
      <h2 className="font-display font-bold mb-1.5" style={{ fontSize: 22, letterSpacing: "-0.02em" }}>Send us a message</h2>
      <p style={{ fontSize: 14, color: "#5C5C6E", marginBottom: 24, fontFamily: "'General Sans', sans-serif" }}>
        We typically respond within one business day.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}
        className="max-md:grid-cols-1">
        <div>
          <label htmlFor="name" style={labelStyle}>Name *</label>
          <input id="name" name="name" type="text" required autoComplete="name" style={fieldStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "#5B7FFF"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(91,127,255,0.12)"; }}
            onBlur={(e) =>  { e.currentTarget.style.borderColor = "#E2E2EA"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" style={fieldStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "#5B7FFF"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(91,127,255,0.12)"; }}
            onBlur={(e) =>  { e.currentTarget.style.borderColor = "#E2E2EA"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="company" style={labelStyle}>Company / Firm</label>
        <input id="company" name="company" type="text" autoComplete="organization" style={fieldStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = "#5B7FFF"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(91,127,255,0.12)"; }}
          onBlur={(e) =>  { e.currentTarget.style.borderColor = "#E2E2EA"; e.currentTarget.style.boxShadow = "none"; }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="subject" style={labelStyle}>Subject *</label>
        <select id="subject" name="subject" required style={{ ...fieldStyle, appearance: "none", paddingRight: 36, backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235C5C6E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "#5B7FFF"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(91,127,255,0.12)"; }}
          onBlur={(e) =>  { e.currentTarget.style.borderColor = "#E2E2EA"; e.currentTarget.style.boxShadow = "none"; }}>
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label htmlFor="message" style={labelStyle}>Message *</label>
        <textarea id="message" name="message" required rows={6}
          placeholder="Tell us what you're looking for, your firm size, and anything else useful."
          style={{ ...fieldStyle, resize: "vertical", minHeight: 140, lineHeight: 1.6 }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "#5B7FFF"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(91,127,255,0.12)"; }}
          onBlur={(e) =>  { e.currentTarget.style.borderColor = "#E2E2EA"; e.currentTarget.style.boxShadow = "none"; }}
        />
      </div>

      <button type="submit" disabled={submitting}
        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "14px 24px", borderRadius: 10, background: submitting ? "#5C5C6E" : "linear-gradient(135deg, #2D2A6E, #3D3A9E)", color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", border: "none", cursor: submitting ? "wait" : "pointer", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(45,42,110,0.2)" }}>
        {submitting ? "Sending..." : <>Send Message <Icon name="arrowRight" size={15} /></>}
      </button>

      {recaptchaEnabled && (
        <p style={{ fontSize: 11, color: "#A0A0B0", textAlign: "center", marginTop: 12, fontFamily: "'General Sans', sans-serif", lineHeight: 1.5 }}>
          Protected by reCAPTCHA — Google's{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#5B7FFF", textDecoration: "underline" }}>Privacy Policy</a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: "#5B7FFF", textDecoration: "underline" }}>Terms</a>{" "}
          apply.
        </p>
      )}
    </form>
  );
}
