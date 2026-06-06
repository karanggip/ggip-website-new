// Server-side reCAPTCHA v3 token verification.
//
// If RECAPTCHA_SECRET_KEY is unset (local dev without the secret), verification
// no-ops and returns {ok: true} — so the form still works in dev. In production
// (Railway), the secret must be set.

const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const MIN_SCORE = 0.5;

export interface RecaptchaResult {
  ok: boolean;
  score?: number;
  action?: string;
  reason?: string;
}

export async function verifyRecaptcha(token: string | undefined | null, expectedAction: string): Promise<RecaptchaResult> {
  const secret = import.meta.env.RECAPTCHA_SECRET_KEY || process.env.RECAPTCHA_SECRET_KEY;

  // No secret configured (local dev) — skip verification.
  if (!secret) return { ok: true, reason: "no-secret-skip" };

  if (!token) return { ok: false, reason: "missing-token" };

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    });
    const data = (await res.json()) as {
      success: boolean;
      score?: number;
      action?: string;
      "error-codes"?: string[];
    };

    if (!data.success) {
      return { ok: false, reason: `recaptcha-failed:${(data["error-codes"] || []).join(",") || "unknown"}` };
    }
    if (data.action && data.action !== expectedAction) {
      return { ok: false, score: data.score, action: data.action, reason: "action-mismatch" };
    }
    if (typeof data.score === "number" && data.score < MIN_SCORE) {
      return { ok: false, score: data.score, action: data.action, reason: "low-score" };
    }
    return { ok: true, score: data.score, action: data.action };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown";
    return { ok: false, reason: `recaptcha-network:${msg}` };
  }
}
