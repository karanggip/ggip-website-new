// Client-side reCAPTCHA v3 helper — lazy-loads the script on first use,
// then returns a token for any action passed in.
//
// In dev without PUBLIC_RECAPTCHA_SITE_KEY set, returns null (forms still work
// — the server-side verify also no-ops when the secret is missing, see
// src/lib/recaptcha.ts).

const SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_URL = SITE_KEY ? `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}` : "";

let loaderPromise: Promise<any> | null = null;

function loadScript(): Promise<any> {
  if (!SITE_KEY) return Promise.resolve(null);
  if ((window as any).grecaptcha?.execute) return Promise.resolve((window as any).grecaptcha);
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_URL;
    s.async = true;
    s.defer = true;
    s.onload = () => {
      const g = (window as any).grecaptcha;
      if (!g) return reject(new Error("grecaptcha missing after script load"));
      g.ready(() => resolve(g));
    };
    s.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
    document.head.appendChild(s);
  });
  return loaderPromise;
}

/** Get a reCAPTCHA v3 token for the given action. Returns null in dev (no key) or on failure. */
export async function getRecaptchaToken(action: string): Promise<string | null> {
  if (!SITE_KEY) return null;
  try {
    const g = await loadScript();
    if (!g) return null;
    return await g.execute(SITE_KEY, { action });
  } catch {
    return null;
  }
}

/** Whether reCAPTCHA is configured (used to render the legal-required notice). */
export const recaptchaEnabled = !!SITE_KEY;
