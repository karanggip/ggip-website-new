"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ggip-cookie-consent";
const OPEN_EVENT = "ggip:open-cookie-settings";

// Public API:
//   window.openCookieSettings()  — opens the full preferences panel
//   localStorage["ggip-cookie-consent"] = JSON.stringify({essential:true, analytics:bool, marketing:bool, ts})
// Analytics / marketing scripts should read this object before firing.

export interface ConsentState {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  ts: string;
}

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    // Backwards-compat with the prior "accepted" / "rejected" string format
    if (raw === "accepted") return { essential: true, analytics: true,  marketing: true,  ts: "" };
    if (raw === "rejected") return { essential: true, analytics: false, marketing: false, ts: "" };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return {
        essential: true,
        analytics: !!parsed.analytics,
        marketing: !!parsed.marketing,
        ts: typeof parsed.ts === "string" ? parsed.ts : "",
      };
    }
  } catch { /* noop */ }
  return null;
}

function writeConsent(c: Omit<ConsentState, "essential" | "ts">) {
  const payload: ConsentState = { essential: true, analytics: c.analytics, marketing: c.marketing, ts: new Date().toISOString() };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(payload)); } catch { /* noop */ }
  try { window.dispatchEvent(new CustomEvent("cookie-consent", { detail: payload })); } catch { /* noop */ }
}

type Mode = "hidden" | "banner" | "prefs";

export default function CookieBanner() {
  const [mode, setMode] = useState<Mode>("hidden");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    } else {
      const t = setTimeout(() => setMode("banner"), 600);
      return () => clearTimeout(t);
    }
  }, []);

  // Listen for footer / external triggers
  useEffect(() => {
    function open() {
      const existing = readConsent();
      if (existing) { setAnalytics(existing.analytics); setMarketing(existing.marketing); }
      setMode("prefs");
    }
    (window as any).openCookieSettings = open;
    window.addEventListener(OPEN_EVENT, open);

    // Document-level delegate for static (non-hydrated) anchors,
    // e.g. the Footer "Cookie Settings" link.
    function onDocClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const a = target.closest("a") as HTMLAnchorElement | null;
      if (!a) return;
      const isCookieLink =
        a.dataset.cookieSettings === "true" ||
        (a.getAttribute("href") || "").endsWith("#cookie-settings");
      if (isCookieLink) {
        e.preventDefault();
        open();
      }
    }
    document.addEventListener("click", onDocClick);

    return () => {
      window.removeEventListener(OPEN_EVENT, open);
      document.removeEventListener("click", onDocClick);
      if ((window as any).openCookieSettings === open) delete (window as any).openCookieSettings;
    };
  }, []);

  function acceptAll() {
    writeConsent({ analytics: true, marketing: true });
    setAnalytics(true); setMarketing(true);
    setMode("hidden");
  }
  function rejectAll() {
    writeConsent({ analytics: false, marketing: false });
    setAnalytics(false); setMarketing(false);
    setMode("hidden");
  }
  function savePrefs() {
    writeConsent({ analytics, marketing });
    setMode("hidden");
  }

  if (mode === "hidden") return null;

  return (
    <div
      role="dialog"
      aria-modal={mode === "prefs"}
      aria-label="Cookie preferences"
      style={{
        position: "fixed",
        inset: mode === "prefs" ? 0 : "auto 20px 20px 20px",
        zIndex: 9999,
        display: "flex",
        alignItems: mode === "prefs" ? "center" : "flex-end",
        justifyContent: "center",
        pointerEvents: mode === "prefs" ? "auto" : "none",
        background: mode === "prefs" ? "rgba(5,5,16,0.55)" : "transparent",
        backdropFilter: mode === "prefs" ? "blur(4px)" : undefined,
        animation: "ggipCookieIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards",
        padding: mode === "prefs" ? 20 : 0,
      }}
      onClick={(e) => {
        if (mode === "prefs" && e.target === e.currentTarget) setMode("hidden");
      }}
    >
      {mode === "banner" ? (
        <BannerCard
          onAccept={acceptAll}
          onReject={rejectAll}
          onCustomize={() => setMode("prefs")}
        />
      ) : (
        <PrefsCard
          analytics={analytics}
          marketing={marketing}
          setAnalytics={setAnalytics}
          setMarketing={setMarketing}
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onSave={savePrefs}
          onClose={() => setMode("hidden")}
        />
      )}

      <style>{`
        @keyframes ggipCookieIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ----- Mini banner ----- */
function BannerCard({ onAccept, onReject, onCustomize }: { onAccept: () => void; onReject: () => void; onCustomize: () => void }) {
  return (
    <div
      style={{
        pointerEvents: "auto",
        maxWidth: 720,
        width: "100%",
        background: "rgba(13,13,26,0.95)",
        backdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(91,127,255,0.25)",
        borderRadius: 16,
        padding: "20px 24px",
        boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 6 }}>
            We use cookies
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif", margin: 0 }}>
            We use essential cookies to run this site and (with your consent) analytics &amp; marketing cookies to improve it. Manage your choice in{" "}
            <a
              href="#cookie-settings"
              onClick={(e) => { e.preventDefault(); onCustomize(); }}
              style={{ color: "#5B7FFF", textDecoration: "underline" }}
            >
              cookie settings
            </a>.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexShrink: 0, flexWrap: "wrap" }}>
          <button onClick={onCustomize} style={ghostBtn}>Customize</button>
          <button onClick={onReject} style={ghostBtn}>Reject all</button>
          <button onClick={onAccept} style={primaryBtn}>Accept all</button>
        </div>
      </div>
    </div>
  );
}

/* ----- Detailed preferences panel ----- */
function PrefsCard(p: {
  analytics: boolean;
  marketing: boolean;
  setAnalytics: (v: boolean) => void;
  setMarketing: (v: boolean) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSave: () => void;
  onClose: () => void;
}) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        pointerEvents: "auto",
        width: "100%",
        maxWidth: 560,
        background: "rgba(13,13,26,0.98)",
        backdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(91,127,255,0.25)",
        borderRadius: 18,
        boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "22px 26px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14 }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 6 }}>
            Cookie preferences
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", fontFamily: "'General Sans', sans-serif", margin: 0 }}>
            Choose which categories of cookies we can use. Essential cookies are always on.
          </p>
        </div>
        <button
          onClick={p.onClose}
          aria-label="Close"
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.5)",
            fontSize: 22,
            lineHeight: 1,
            cursor: "pointer",
            padding: 4,
          }}
        >
          ×
        </button>
      </div>

      <div style={{ padding: "8px 26px 4px" }}>
        <Row
          title="Essential"
          desc="Required for the site to function — session, security, and your consent choice itself. Cannot be disabled."
          on={true}
          locked
        />
        <Row
          title="Analytics"
          desc="Helps us understand how visitors use the site so we can improve it. No personally identifying data is sold."
          on={p.analytics}
          onChange={p.setAnalytics}
        />
        <Row
          title="Marketing"
          desc="Used to measure the effectiveness of our marketing and personalize the experience across channels."
          on={p.marketing}
          onChange={p.setMarketing}
        />
      </div>

      <div style={{ padding: "18px 26px 22px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
        <button onClick={p.onRejectAll} style={ghostBtn}>Reject all</button>
        <button onClick={p.onAcceptAll} style={ghostBtn}>Accept all</button>
        <button onClick={p.onSave} style={primaryBtn}>Save preferences</button>
      </div>
    </div>
  );
}

function Row({ title, desc, on, onChange, locked }: { title: string; desc: string; on: boolean; onChange?: (v: boolean) => void; locked?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{title}</span>
          {locked && (
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "2px 7px", borderRadius: 9999, background: "rgba(91,127,255,0.18)", color: "#9CB1FF" }}>Always on</span>
          )}
        </div>
        <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif", margin: 0 }}>
          {desc}
        </p>
      </div>
      <Toggle on={on} disabled={!!locked} onChange={onChange} />
    </div>
  );
}

function Toggle({ on, disabled, onChange }: { on: boolean; disabled?: boolean; onChange?: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      disabled={disabled}
      onClick={() => onChange && onChange(!on)}
      style={{
        position: "relative",
        width: 40,
        height: 22,
        flexShrink: 0,
        borderRadius: 9999,
        border: "1px solid rgba(255,255,255,0.12)",
        background: on ? "linear-gradient(135deg, #2D2A6E, #5B7FFF)" : "rgba(255,255,255,0.08)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.7 : 1,
        transition: "background 0.18s",
        padding: 0,
      }}
    >
      <span style={{
        position: "absolute",
        top: 2,
        left: on ? 20 : 2,
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "#fff",
        transition: "left 0.18s",
        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
      }} />
    </button>
  );
}

const ghostBtn: React.CSSProperties = {
  padding: "9px 18px",
  borderRadius: 8,
  background: "rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.85)",
  border: "1px solid rgba(255,255,255,0.12)",
  fontSize: 13,
  fontWeight: 600,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  cursor: "pointer",
  transition: "all 0.15s",
};

const primaryBtn: React.CSSProperties = {
  padding: "9px 18px",
  borderRadius: 8,
  background: "linear-gradient(135deg, #2D2A6E, #3D3A9E)",
  color: "#fff",
  border: "none",
  fontSize: 13,
  fontWeight: 700,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  cursor: "pointer",
  transition: "all 0.15s",
  boxShadow: "0 4px 12px rgba(45,42,110,0.3)",
};
