import { url } from "../utils/url";

const COLUMNS = [
  { title: "Products",  links: [
    { label: "DocketEngine",    href: url("/products/docketengine/") },
    { label: "RenewalEngine",   href: url("/products/renewalengine/") },
    { label: "Platform",        href: url("/platform/") },
    { label: "Pricing",         href: url("/pricing/") },
  ]},
  { title: "Solutions", links: [
    { label: "Solo Attorneys",       href: url("/solutions/solo-attorneys/") },
    { label: "IP Law Firms",         href: url("/solutions/ip-law-firms/") },
    { label: "Corporate In-House",   href: url("/solutions/corporate-in-house/") },
    { label: "Universities & TTOs",  href: url("/solutions/universities-tto/") },
  ]},
  { title: "Resources", links: [
    { label: "Blog & Insights", href: url("/blog/") },
  ]},
  { title: "Company",   links: [
    { label: "Our Story", href: url("/company/") },
    { label: "Careers",   href: url("/company/careers/") },
    { label: "Contact",   href: url("/contact/") },
  ]},
];

const legalLinks: Array<{ label: string; href: string; external: boolean; action?: "cookies" }> = [
  { label: "Privacy Policy",  href: url("/privacy-policy/"), external: false },
  { label: "Cookie Settings", href: "#cookie-settings",      external: false, action: "cookies" },
];

export default function Footer() {
  return (
    <footer style={{ paddingTop: 64, paddingBottom: 40, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-content mx-auto px-7">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}
          className="max-md:!grid-cols-2 max-md:!gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={url("/assets/icon-white.svg")} alt="" className="w-6 h-6" />
              <span className="text-sm font-bold text-white">Guarded Growth</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.3)", maxWidth: 280, fontFamily: "'General Sans', sans-serif", marginBottom: 16 }}>
              The data infrastructure for global intellectual property.
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.25)", fontFamily: "'General Sans', sans-serif", marginBottom: 8 }}>
              5900 Balcones Drive #28582<br />
              Austin, TX 78731
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.3)", fontFamily: "'General Sans', sans-serif", marginBottom: 16 }}>
              <a
                href="tel:+12818036492"
                style={{ color: "inherit", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                +1 (281) 803-6492
              </a>
            </p>
            <a
              href="https://www.linkedin.com/company/guardedgrowth/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Guarded Growth on LinkedIn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: 8,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.45)",
                transition: "all 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(91,127,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(91,127,255,0.3)";
                e.currentTarget.style.color = "#5B7FFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
              }}
            >
              {/* LinkedIn glyph */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
              </svg>
            </a>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>{col.title}</h4>
              {col.links.map((link) => (
                <div key={link.label} style={{ marginBottom: 10 }}>
                  <a
                    href={link.href}
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", fontFamily: "'General Sans', sans-serif", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>© 2026 Guarded Growth IP LLC</span>
          <div className="flex gap-6 flex-wrap">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cookie-settings={link.action === "cookies" ? "true" : undefined}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", textDecoration: "none", transition: "color 0.15s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
