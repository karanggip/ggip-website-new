// ─────────────────────────────────────────────────────────────────────────
// Contact form → Resend email endpoint
// ─────────────────────────────────────────────────────────────────────────
// This file is DORMANT on GitHub Pages (static output) — Astro doesn't
// build API routes in static mode.
//
// TO ACTIVATE (when migrating to Railway):
//   1. Rename this file: contact.ts.disabled  →  contact.ts
//   2. In astro.config.mjs:
//        - Change `output: "static"` → `output: "hybrid"`
//        - Add the Node adapter:
//            import node from "@astrojs/node";
//            adapter: node({ mode: "standalone" }),
//        - Remove the `base: "/ggip-website-new"` (you'll be on a real domain)
//   3. Install resend:    npm install resend
//   4. In Railway: set env var RESEND_API_KEY = <your key>
//   5. Deploy. The form will start sending real emails.
// ─────────────────────────────────────────────────────────────────────────

import type { APIRoute } from "astro";
import { Resend } from "resend";
import { verifyRecaptcha } from "../../lib/recaptcha";

export const prerender = false;

// All form mail routes to a single inbox for now. The Subject header still
// carries the chosen category (Sales/Support/etc.) so triage is easy in-inbox.
const FALLBACK_TO = "info@guardedgrowthip.com";
const SUBJECT_TO: Record<string, string> = {
  Sales:        "info@guardedgrowthip.com",
  Support:      "info@guardedgrowthip.com",
  Partnerships: "info@guardedgrowthip.com",
  Press:        "info@guardedgrowthip.com",
  General:      "info@guardedgrowthip.com",
};

// You must verify a sending domain in Resend before emails will deliver.
// Once verified, set this to e.g. "Guarded Growth <contact@mail.guardedgrowthip.com>"
const FROM = "Guarded Growth <onboarding@resend.dev>";

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

function bad(msg: string, status = 400) {
  return new Response(JSON.stringify({ ok: false, error: msg }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
  if (!apiKey) return bad("Server not configured (RESEND_API_KEY missing)", 500);

  let payload: Record<string, string>;
  try {
    payload = await request.json();
  } catch {
    return bad("Invalid JSON body");
  }

  const name    = (payload.name    ?? "").toString().trim();
  const email   = (payload.email   ?? "").toString().trim();
  const company = (payload.company ?? "").toString().trim();
  const subject = (payload.subject ?? "General").toString().trim();
  const message = (payload.message ?? "").toString().trim();

  if (!name || !email || !message) return bad("name, email, message are required");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Invalid email");
  if (message.length > 5000) return bad("Message too long");

  // Bot check
  const recaptcha = await verifyRecaptcha(payload.recaptchaToken, "contact");
  if (!recaptcha.ok) return bad(`reCAPTCHA failed: ${recaptcha.reason || "unknown"}`, 403);

  const to = SUBJECT_TO[subject] || FALLBACK_TO;
  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: FROM,
      to,
      replyTo: email,
      subject: `[${subject}] ${name ? `from ${name}` : "New inquiry"}`,
      text: `Name: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}\n\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0C0C0E;max-width:560px;line-height:1.6">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr style="border:none;border-top:1px solid #E2E2EA;margin:16px 0">
          <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (result.error) return bad(result.error.message || "Resend error", 502);

    return new Response(JSON.stringify({ ok: true, id: result.data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return bad(msg, 500);
  }
};
