"use client";
import { useEffect, useState } from "react";
import { url } from "../utils/url";
import DemoForm from "./DemoForm";

// Public API:
//   window.openDemoModal()                — opens the modal
//   window.dispatchEvent(new CustomEvent("ggip:open-demo"))
// Any anchor whose href resolves to /demo or /demo/ is intercepted and opens the
// modal instead of navigating, so existing "Request a Demo" buttons just work.

const OPEN_EVENT = "ggip:open-demo";

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0); // bump to remount DemoForm fresh

  function openIt() {
    setResetKey((k) => k + 1);
    setOpen(true);
  }
  function close() {
    setOpen(false);
  }

  // Expose openDemoModal + listen for triggers + delegate-click on /demo links
  useEffect(() => {
    (window as any).openDemoModal = openIt;
    window.addEventListener(OPEN_EVENT, openIt);
    try { window.dispatchEvent(new CustomEvent("ggip:demo-ready")); } catch { /* noop */ }

    function onDocClick(e: MouseEvent) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const a = target.closest("a") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const path = (() => {
        try { return new URL(a.href, window.location.origin).pathname; } catch { return ""; }
      })();
      const isDemoLink =
        href === "/demo" || href === "/demo/" ||
        path.endsWith("/demo") || path.endsWith("/demo/");
      if (isDemoLink) {
        e.preventDefault();
        openIt();
      }
    }
    document.addEventListener("click", onDocClick);

    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener(OPEN_EVENT, openIt);
      document.removeEventListener("click", onDocClick);
      window.removeEventListener("keydown", onKey);
      if ((window as any).openDemoModal === openIt) delete (window as any).openDemoModal;
    };
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a demo"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "5vh 20px",
        background: "rgba(5,5,16,0.65)",
        backdropFilter: "blur(8px)",
        overflowY: "auto",
        animation: "ggipDemoIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 600,
          background: "#fff",
          color: "#0C0C0E",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          border: "1px solid rgba(91,127,255,0.18)",
        }}
      >
        {/* Header */}
        <div style={{
          position: "relative",
          padding: "26px 30px",
          background: "linear-gradient(135deg, #2D2A6E 0%, #4A47A3 100%)",
          color: "#fff",
        }}>
          <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.18 }} />
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 11,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.22)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <img src={url("/assets/icon-white.svg")} alt="" style={{ width: 26, height: 26 }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 19, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.01em" }}>
                Request a demo
              </div>
              <div style={{ fontSize: 13, opacity: 0.7, fontFamily: "'General Sans', sans-serif", marginTop: 2 }}>
                See DocketEngine and RenewalEngine in action
              </div>
            </div>
            <button
              onClick={close}
              aria-label="Close"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "rgba(255,255,255,0.85)",
                width: 32, height: 32, borderRadius: 8,
                fontSize: 18, lineHeight: 1, cursor: "pointer",
              }}
            >×</button>
          </div>
        </div>

        {/* Form (DemoForm applies its own padding in "modal" variant) */}
        <DemoForm key={resetKey} variant="modal" source="demo-modal" />
      </div>

      <style>{`
        @keyframes ggipDemoIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
