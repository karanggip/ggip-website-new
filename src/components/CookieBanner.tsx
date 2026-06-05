"use client";
import { useEffect, useState } from "react";
import { url } from "../utils/url";

const STORAGE_KEY = "ggip-cookie-consent";
const PRIVACY_URL = url("/privacy-policy/");

// Read window.gtag / analytics tools should check localStorage.getItem("ggip-cookie-consent") === "accepted"
// before initialising. Necessary cookies (e.g. session) load unconditionally.

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(STORAGE_KEY);
      if (!choice) {
        // Small delay so it doesn't pop in immediately on page load
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage unavailable (private browsing in some browsers) — leave hidden
    }
  }, []);

  function setChoice(value: "accepted" | "rejected") {
    try { localStorage.setItem(STORAGE_KEY, value); } catch {}
    setVisible(false);
    // If you later add analytics, dispatch an event here so it can initialise
    // window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie preferences"
      style={{
        position: "fixed",
        left: 20,
        right: 20,
        bottom: 20,
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        animation: "ggipCookieIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
      }}
    >
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
              We use essential cookies to run this site and (with your consent) analytics cookies to understand how it's used. You can change your choice anytime in{" "}
              <a href={PRIVACY_URL} style={{ color: "#5B7FFF", textDecoration: "underline" }}>cookie settings</a>.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, flexShrink: 0, flexWrap: "wrap" }}>
            <button
              onClick={() => setChoice("rejected")}
              style={{
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
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            >
              Reject all
            </button>
            <button
              onClick={() => setChoice("accepted")}
              style={{
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
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 18px rgba(45,42,110,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(45,42,110,0.3)"; }}
            >
              Accept all
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ggipCookieIn {
          from { transform: translateY(40px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}
