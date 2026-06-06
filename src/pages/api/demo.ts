// ─────────────────────────────────────────────────────────────────────────
// Demo request → Resend email endpoint
// ─────────────────────────────────────────────────────────────────────────
// Mirrors src/pages/api/contact.ts.disabled. DORMANT on GitHub Pages — Astro
// doesn't build API routes in static mode.
//
// TO ACTIVATE (when migrating to Railway, do this for both endpoints together):
//   1. Rename:  contact.ts.disabled  →  contact.ts
//               demo.ts.disabled     →  demo.ts
//   2. In astro.config.mjs:
//        - output: "static"  →  output: "hybrid"
//        - add: import node from "@astrojs/node";
//               adapter: node({ mode: "standalone" }),
//        - remove the `base: "/ggip-website-new"` (you'll be on a real domain)
//   3. resend is already in package.json.
//   4. On Railway, set env var: RESEND_API_KEY = <your key>
//      (locally it's already in .env)
//   5. Deploy.
//
// The DemoForm component already POSTs to /api/demo and silently falls back to
// mailto when the endpoint isn't there, so the frontend needs zero changes.
// ─────────────────────────────────────────────────────────────────────────

import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const DEMO_INBOX = "info@guardedgrowthip.com";

// You must verify a sending domain in Resend before emails will deliver.
// Until then, the onboarding.resend.dev sender lets you test in the Resend dashboard.
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

  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return bad("Invalid JSON body");
  }

  const name      = (payload.name      ?? "").toString().trim();
  const email     = (payload.email     ?? "").toString().trim();
  const company   = (payload.company   ?? "").toString().trim();
  const phone     = (payload.phone     ?? "").toString().trim();
  const message   = (payload.message   ?? "").toString().trim();
  const source    = (payload.source    ?? "").toString().trim();
  const interests: string[] = Array.isArray(payload.interests)
    ? payload.interests.map((x: unknown) => String(x).trim()).filter(Boolean).slice(0, 4)
    : [];

  if (!name || !email || !company) return bad("name, email, company are required");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Invalid email");
  if (message.length > 5000) return bad("Message too long");

  const interestsLabel = interests.length ? interests.join(", ") : "—";
  const subjectLine = `Demo request — ${name}${company ? ` / ${company}` : ""}`;
  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: FROM,
      to: DEMO_INBOX,
      replyTo: email,
      subject: subjectLine,
      text:
        `New demo request${source ? ` (via ${source})` : ""}\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company}\n` +
        `Phone: ${phone || "—"}\n` +
        `Interested in: ${interestsLabel}\n\n` +
        `Message:\n${message || "(none)"}\n`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0C0C0E;max-width:560px;line-height:1.6">
          <h2 style="font-size:18px;margin:0 0 14px;color:#2D2A6E">New demo request</h2>
          ${source ? `<p style="font-size:12px;color:#8B8B9E;margin:0 0 14px">Source: ${escapeHtml(source)}</p>` : ""}
          <table style="border-collapse:collapse;font-size:14px">
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>Phone</strong></td><td>${escapeHtml(phone || "—")}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E;vertical-align:top"><strong>Interested in</strong></td><td>${escapeHtml(interestsLabel)}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #E2E2EA;margin:16px 0">
          <div style="white-space:pre-wrap;font-size:14px;color:#0C0C0E">${escapeHtml(message || "(no message)")}</div>
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
