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

const legalLinks = [
  { label: "Privacy Policy",            href: "https://guardedgrowthip.com/privacy-policy", external: true },
  { label: "Terms of Use (DocketEngine)", href: url("/terms/"), external: false },
  { label: "Cookie Settings",           href: "https://guardedgrowthip.com/privacy-policy", external: true },
];

export default function Footer() {
  return (
    <footer style={{ paddingTop: 64, paddingBottom: 40, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-content mx-auto px-7">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}
          className="max-md:grid-cols-2 max-md:gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={url("/assets/icon-white.svg")} alt="" className="w-6 h-6" />
              <span className="text-sm font-bold text-white">Guarded Growth</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.3)", maxWidth: 280, fontFamily: "'General Sans', sans-serif", marginBottom: 16 }}>
              The data infrastructure for global intellectual property.
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.25)", fontFamily: "'General Sans', sans-serif" }}>
              5900 Balcones Drive #28582<br />
              Austin, TX 78731
            </p>
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
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", textDecoration: "none", transition: "color 0.15s" }}
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
