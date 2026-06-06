// Careers application → Resend email endpoint.
// Mirrors src/pages/api/contact.ts and src/pages/api/demo.ts.

import type { APIRoute } from "astro";
import { Resend } from "resend";
import { verifyRecaptcha } from "../../lib/recaptcha";

export const prerender = false;

const CAREERS_INBOX = "info@guardedgrowthip.com";
const FROM = "Guarded Growth <hello@guardedgrowthip.com>";

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

  const name     = (payload.name     ?? "").toString().trim();
  const email    = (payload.email    ?? "").toString().trim();
  const phone    = (payload.phone    ?? "").toString().trim();
  const country  = (payload.country  ?? "").toString().trim();
  const role     = (payload.role     ?? "").toString().trim();
  const linkedin = (payload.linkedin ?? "").toString().trim();
  const message  = (payload.message  ?? "").toString().trim();
  const source   = (payload.source   ?? "").toString().trim();

  if (!name || !email || !country) return bad("name, email, country are required");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Invalid email");
  if (message.length > 5000) return bad("Message too long");

  // Bot check
  const recaptcha = await verifyRecaptcha(payload.recaptchaToken, "careers");
  if (!recaptcha.ok) return bad(`reCAPTCHA failed: ${recaptcha.reason || "unknown"}`, 403);

  const subjectLine = `Careers — ${name}${role ? ` / ${role}` : ""}`;
  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: FROM,
      to: CAREERS_INBOX,
      replyTo: email,
      subject: subjectLine,
      text:
        `New careers application${source ? ` (via ${source})` : ""}\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "—"}\n` +
        `Country: ${country}\n` +
        `Role: ${role || "—"}\n` +
        `LinkedIn / Portfolio: ${linkedin || "—"}\n\n` +
        `Note:\n${message || "(none)"}\n`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0C0C0E;max-width:560px;line-height:1.6">
          <h2 style="font-size:18px;margin:0 0 14px;color:#2D2A6E">New careers application</h2>
          ${source ? `<p style="font-size:12px;color:#8B8B9E;margin:0 0 14px">Source: ${escapeHtml(source)}</p>` : ""}
          <table style="border-collapse:collapse;font-size:14px">
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>Phone</strong></td><td>${escapeHtml(phone || "—")}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>Role</strong></td><td>${escapeHtml(role || "—")}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#5C5C6E"><strong>LinkedIn</strong></td><td>${linkedin ? `<a href="${escapeHtml(linkedin)}">${escapeHtml(linkedin)}</a>` : "—"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #E2E2EA;margin:16px 0">
          <div style="white-space:pre-wrap;font-size:14px;color:#0C0C0E">${escapeHtml(message || "(no note)")}</div>
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
