"use client";
import { useState } from "react";
import { url } from "../utils/url";
import { getRecaptchaToken, recaptchaEnabled } from "../utils/recaptcha";

// Self-contained demo request form. Used by:
//   - DemoModal.tsx          (variant="modal")  — inside the overlay dialog
//   - src/pages/demo.astro   (variant="inline") — embedded under the page hero

const DEMO_INBOX = "info@guardedgrowthip.com";

export type Engine = "DocketEngine" | "RenewalEngine";
export type DemoSubmitMode = "api" | "mailto" | null;

interface Props {
  variant?: "modal" | "inline";
  source?: string;
  /** Called after a successful submission (api or mailto). */
  onSubmitted?: (mode: DemoSubmitMode) => void;
}

export default function DemoForm({ variant = "inline", source = "demo-page", onSubmitted }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<DemoSubmitMode>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState<Engine[]>([]);
  const [message, setMessage] = useState("");

  function toggleInterest(e: Engine) {
    setInterests((prev) => prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]);
  }

  function resetAll() {
    setName(""); setEmail(""); setCompany(""); setPhone("");
    setInterests([]); setMessage("");
    setSubmitted(null); setSubmitting(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    // Grab a reCAPTCHA v3 token (no-op in dev without a key).
    const recaptchaToken = await getRecaptchaToken("demo");

    const payload = { name, email, company, phone, interests, message, source, recaptchaToken };

    // 1) Real API (Resend on Railway, when wired up).
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });
      const ct = res.headers.get("content-type") || "";
      if (res.ok && ct.includes("application/json")) {
        const data = await res.json().catch(() => ({}));
        if (data.ok) {
          setSubmitted("api");
          setSubmitting(false);
          onSubmitted?.("api");
          return;
        }
      }
    } catch { /* fall through */ }

    // 2) Fallback to mailto.
    const subjectLine = encodeURIComponent(
      `Demo request — ${name || "Prospect"}${company ? ` / ${company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Company: ${company}\n` +
      `Phone: ${phone}\n` +
      `Interested in: ${interests.length ? interests.join(", ") : "—"}\n\n` +
      `Message:\n${message || "(none)"}\n`
    );
    window.location.href = `mailto:${DEMO_INBOX}?subject=${subjectLine}&body=${body}`;
    setSubmitted("mailto");
    setSubmitting(false);
    onSubmitted?.("mailto");
  }

  const isInline = variant === "inline";

  if (submitted) {
    return (
      <SuccessState
        mode={submitted}
        inline={isInline}
        onReset={resetAll}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      padding: isInline ? 0 : "26px 30px 28px",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="max-md:grid-cols-1">
        <Field label="Name" required inline={isInline}>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" style={inputStyle} />
        </Field>
        <Field label="Email" required inline={isInline}>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@firm.com" style={inputStyle} />
        </Field>
        <Field label="Company" required inline={isInline}>
          <input type="text" required value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme IP LLP" style={inputStyle} />
        </Field>
        <Field label="Phone" inline={isInline}>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" style={inputStyle} />
        </Field>
      </div>

      <div style={{ marginTop: 20 }}>
        <Label inline={isInline}>
          Interested in <span style={{ fontWeight: 500, color: "#8B8B9E" }}>(select one or both)</span>
        </Label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="max-md:grid-cols-1">
          <EngineTile
            label="DocketEngine"
            sub="IP docket management"
            iconColor={url("/assets/docketengine-color.svg")}
            iconWhite={url("/assets/docketengine-white.svg")}
            selected={interests.includes("DocketEngine")}
            onToggle={() => toggleInterest("DocketEngine")}
          />
          <EngineTile
            label="RenewalEngine"
            sub="IP renewal services"
            iconColor={url("/assets/renewalengine-color.svg")}
            iconWhite={url("/assets/renewalengine-white.svg")}
            selected={interests.includes("RenewalEngine")}
            onToggle={() => toggleInterest("RenewalEngine")}
          />
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <Field label="Message (optional)" inline={isInline}>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your firm and what you're hoping to see…"
            style={{ ...inputStyle, resize: "vertical", minHeight: 96 }}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          marginTop: 24,
          width: "100%",
          padding: "15px 22px",
          borderRadius: 12,
          border: "none",
          background: submitting
            ? "linear-gradient(135deg, #5C5C6E, #5C5C6E)"
            : "linear-gradient(135deg, #2D2A6E 0%, #4A47A3 50%, #5B7FFF 100%)",
          color: "#fff",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          cursor: submitting ? "wait" : "pointer",
          boxShadow: "0 10px 24px rgba(45,42,110,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          letterSpacing: "-0.005em",
          transition: "transform 0.15s, box-shadow 0.15s",
        }}
        onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 14px 30px rgba(45,42,110,0.45)"; } }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 24px rgba(45,42,110,0.35)"; }}
      >
        {submitting ? "Sending…" : <>Schedule your demo <span style={{ fontSize: 17 }}>→</span></>}
      </button>

      <p style={{
        fontSize: 12.5,
        color: isInline ? "#8B8B9E" : "#8B8B9E",
        textAlign: "center",
        marginTop: 14,
        fontFamily: "'General Sans', sans-serif"
      }}>
        We'll reach out within 24 hours to schedule your personalized demo.
      </p>

      {recaptchaEnabled && (
        <p style={{
          fontSize: 11,
          color: "#A0A0B0",
          textAlign: "center",
          marginTop: 10,
          fontFamily: "'General Sans', sans-serif",
          lineHeight: 1.5,
        }}>
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

/* ----- bits ----- */

function Label({ children, inline }: { children: React.ReactNode; inline?: boolean }) {
  return (
    <div style={{
      fontSize: 11.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: inline ? "#5C5C6E" : "#5C5C6E",
      marginBottom: 8,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>{children}</div>
  );
}

function Field({ label, required, children, inline }: { label: string; required?: boolean; children: React.ReactNode; inline?: boolean }) {
  return (
    <label style={{ display: "block" }}>
      <Label inline={inline}>{label}{required && <span style={{ color: "#DC2626", marginLeft: 4 }}>*</span>}</Label>
      {children}
    </label>
  );
}

function EngineTile(p: {
  label: string;
  sub: string;
  iconColor: string;
  iconWhite: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={p.onToggle}
      aria-pressed={p.selected}
      style={{
        textAlign: "left",
        padding: "14px 16px",
        borderRadius: 12,
        border: `1.5px solid ${p.selected ? "#5B7FFF" : "#E2E2EA"}`,
        background: p.selected ? "linear-gradient(135deg, #EEEDFA, #EEF2FF)" : "#fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12,
        transition: "all 0.15s",
        boxShadow: p.selected ? "0 0 0 3px rgba(91,127,255,0.12)" : "none",
        position: "relative",
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
        background: p.selected ? "#2D2A6E" : "linear-gradient(135deg, #EEEDFA, #EEF2FF)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <img src={p.selected ? p.iconWhite : p.iconColor} alt="" style={{ width: 26, height: 26 }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#0C0C0E", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.label}</div>
        <div style={{ fontSize: 12, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", marginTop: 1 }}>{p.sub}</div>
      </div>
      {p.selected && (
        <div style={{
          position: "absolute", top: 8, right: 8,
          width: 18, height: 18, borderRadius: "50%",
          background: "#5B7FFF", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 800,
        }}>✓</div>
      )}
    </button>
  );
}

function SuccessState({ mode, inline, onReset }: { mode: DemoSubmitMode; inline: boolean; onReset: () => void }) {
  const apiSuccess = mode === "api";
  return (
    <div style={{
      padding: inline ? "48px 36px" : "40px 36px 36px",
      textAlign: "center",
      borderRadius: inline ? 16 : 0,
      border: inline ? "1px solid #E2E2EA" : "none",
      background: inline ? "linear-gradient(135deg, #EEEDFA, #EEF2FF)" : "transparent",
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: "50%",
        background: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 18px",
        color: "#16A34A",
        fontSize: 28, fontWeight: 800,
        border: "1px solid rgba(22,163,74,0.25)",
      }}>✓</div>
      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#0C0C0E", letterSpacing: "-0.015em" }}>
        {apiSuccess ? "Demo request received" : "Almost there"}
      </h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", maxWidth: 420, margin: "0 auto 22px" }}>
        {apiSuccess
          ? "Thanks. We'll be in touch within 24 hours to schedule your personalized walkthrough."
          : "Your email client should be opening with the message prefilled. Just hit send and we'll be in touch within 24 hours."}
      </p>
      <button
        onClick={onReset}
        style={{
          padding: "10px 22px", borderRadius: 10,
          background: "#0C0C0E", color: "#fff",
          border: "none", fontSize: 13, fontWeight: 700,
          fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer",
        }}
      >
        Submit another
      </button>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #E2E2EA",
  background: "#fff",
  fontSize: 14.5,
  color: "#0C0C0E",
  fontFamily: "'General Sans', sans-serif",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
  boxSizing: "border-box",
};
