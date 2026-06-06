"use client";
import { useState } from "react";
import { getRecaptchaToken, recaptchaEnabled } from "../utils/recaptcha";

// Self-contained careers application form. Used inside CareersModal.
// Submits to /api/careers (Resend-backed); falls back to mailto on failure.

const CAREERS_INBOX = "info@guardedgrowthip.com";

export type CareersSubmitMode = "api" | "mailto" | null;

interface Props {
  /** Pre-fill role name (e.g. "Founding Engineer" when triggered from a job page). */
  initialRole?: string;
  source?: string;
  onSubmitted?: (mode: CareersSubmitMode) => void;
}

export default function CareersForm({ initialRole = "", source = "careers", onSubmitted }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<CareersSubmitMode>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState(initialRole);
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState("");

  function resetAll() {
    setName(""); setEmail(""); setPhone(""); setCountry("");
    setRole(initialRole); setLinkedin(""); setMessage("");
    setSubmitted(null); setSubmitting(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const recaptchaToken = await getRecaptchaToken("careers");

    const payload = {
      name, email, phone, country, role, linkedin, message, source, recaptchaToken,
    };

    try {
      const res = await fetch("/api/careers", {
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

    // Fallback: mailto with subject "Careers — Name / Role"
    const subjectLine = encodeURIComponent(
      `Careers — ${name || "Applicant"}${role ? ` / ${role}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "—"}\n` +
      `Country: ${country}\n` +
      `Role: ${role || "—"}\n` +
      `LinkedIn / Portfolio: ${linkedin || "—"}\n\n` +
      `Note:\n${message || "(none)"}\n`
    );
    window.location.href = `mailto:${CAREERS_INBOX}?subject=${subjectLine}&body=${body}`;
    setSubmitted("mailto");
    setSubmitting(false);
    onSubmitted?.("mailto");
  }

  if (submitted) {
    return (
      <SuccessState mode={submitted} onReset={resetAll} />
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="max-md:!grid-cols-1">
        <Field label="Name" required>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" style={inputStyle} />
        </Field>
        <Field label="Email" required>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" style={inputStyle} />
        </Field>
        <Field label="Phone">
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" style={inputStyle} />
        </Field>
        <Field label="Country" required>
          <input type="text" required value={country} onChange={(e) => setCountry(e.target.value)} placeholder="United States" style={inputStyle} />
        </Field>
        <Field label="Role of interest">
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. Founding Engineer" style={inputStyle} />
        </Field>
        <Field label="LinkedIn / portfolio">
          <input type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="https://linkedin.com/in/…" style={inputStyle} />
        </Field>
      </div>

      <div style={{ marginTop: 18 }}>
        <Field label="Why this role / why Guarded Growth?">
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="A short note: what you've built, what you're interested in, anything else that helps us understand the fit."
            style={{ ...inputStyle, resize: "vertical", minHeight: 96 }}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          marginTop: 22,
          width: "100%",
          padding: "14px 22px",
          borderRadius: 11,
          border: "none",
          background: submitting
            ? "linear-gradient(135deg, #5C5C6E, #5C5C6E)"
            : "linear-gradient(135deg, #2D2A6E 0%, #4A47A3 50%, #5B7FFF 100%)",
          color: "#fff",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          cursor: submitting ? "wait" : "pointer",
          boxShadow: "0 8px 20px rgba(45,42,110,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {submitting ? "Sending…" : <>Submit application <span style={{ fontSize: 17 }}>→</span></>}
      </button>

      <p style={{ fontSize: 12, color: "#8B8B9E", textAlign: "center", marginTop: 14, fontFamily: "'General Sans', sans-serif" }}>
        We read every application and reply to anything that resonates.
      </p>

      {recaptchaEnabled && (
        <p style={{ fontSize: 11, color: "#A0A0B0", textAlign: "center", marginTop: 10, fontFamily: "'General Sans', sans-serif", lineHeight: 1.5 }}>
          Protected by reCAPTCHA — Google's{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#5B7FFF", textDecoration: "underline" }}>Privacy Policy</a>{" "}and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: "#5B7FFF", textDecoration: "underline" }}>Terms</a>{" "}apply.
        </p>
      )}
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 11.5, fontWeight: 700, textTransform: "uppercase",
      letterSpacing: "0.06em", color: "#5C5C6E", marginBottom: 8,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>{children}</div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      <Label>{label}{required && <span style={{ color: "#DC2626", marginLeft: 4 }}>*</span>}</Label>
      {children}
    </label>
  );
}

function SuccessState({ mode, onReset }: { mode: CareersSubmitMode; onReset: () => void }) {
  const apiSuccess = mode === "api";
  return (
    <div style={{ padding: "40px 24px", textAlign: "center" }}>
      <div style={{
        width: 56, height: 56, borderRadius: "50%",
        background: "linear-gradient(135deg, #EEEDFA, #EEF2FF)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 18px", color: "#16A34A",
        fontSize: 28, fontWeight: 800,
      }}>✓</div>
      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#0C0C0E", letterSpacing: "-0.015em" }}>
        {apiSuccess ? "Application received" : "Almost there"}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", maxWidth: 420, margin: "0 auto 22px" }}>
        {apiSuccess
          ? "Thanks for applying. We read every application and will reply to anything that resonates."
          : "Your email client should be opening with your application prefilled. Just hit send and we'll be in touch."}
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
