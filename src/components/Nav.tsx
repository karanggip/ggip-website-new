"use client";
import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import EngineIcon from "./ui/EngineIcon";
import Button from "./ui/Button";
import { url } from "../utils/url";

const NAV_ITEMS = [
  { label: "Products",  key: "products"  },

  { label: "Solutions", key: "solutions" },
  { label: "Pricing",   key: null,        href: url("/pricing")  },
  { label: "Resources", key: "resources" },
  { label: "Company",   key: "company"   },
];

export default function Nav() {
  const [scrolled, setScrolled]           = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav
        onMouseLeave={() => setActiveDropdown(null)}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, height: 64,
          background: scrolled ? "rgba(5,5,16,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "all 0.4s",
        }}
      >
        <div className="max-w-content mx-auto px-7 h-full flex items-center justify-between">
          {/* Logo */}
          <a href={url("/")} className="flex items-center gap-2.5 no-underline">
            <img src={url("/assets/icon-white.svg")} alt="" className="w-7 h-7" />
            <span className="text-base font-bold tracking-tight text-white" style={{ letterSpacing: "-0.02em" }}>
              Guarded Growth
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => item.key && setActiveDropdown(item.key)}
              >
                <a
                  href={url(item.href ?? "/")}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 no-underline"
                  style={{ background: item.key && activeDropdown === item.key ? "rgba(255,255,255,0.06)" : "transparent" }}
                  onClick={(e) => { if (item.key) e.preventDefault(); }}
                >
                  {item.label}
                  {item.key && (
                    <span style={{ fontSize: 10, opacity: 0.4, transition: "transform 0.2s", transform: activeDropdown === item.key ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
                  )}
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button href={url("/demo")} className="hidden md:inline-flex !py-2 !px-5 !text-xs">
              Request a Demo
            </Button>
            {/* Hamburger */}
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={mobileOpen ? "x" : "menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mega menus */}
        {activeDropdown && (
          <div
            style={{ position: "absolute", top: 64, left: 0, right: 0, paddingTop: 4 }}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-content mx-auto px-7">
              <div style={{
                background: "rgba(10,10,22,0.97)", backdropFilter: "blur(32px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20,
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)", overflow: "hidden",
              }}>

                {activeDropdown === "products" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 280px", minHeight: 280 }}>
                    {[
                      { engine: "docket" as const, name: "DocketEngine", href: url("/products/docketengine"), color: "#5B7FFF", desc: "Automated IP docketing powered by global data infrastructure. Real-time sync across 100+ IP offices.", features: ["Real-time USPTO, EUIPO, WIPO sync", "AI portfolio health insights", "Bulk import & free migration", "Competitor watch"] },
                      { engine: "renewal" as const, name: "RenewalEngine", href: url("/products/renewalengine"), color: "#A78BFA", desc: "IP renewals that generate margin, not just cost. Full transparency across 190+ jurisdictions.", features: ["27.7% avg savings vs providers", "50% margin capture for firms", "One-click renew/hold/lapse", "Complete cost breakdowns"] },
                    ].map((p, i) => (
                      <a key={i} href={p.href} style={{ padding: 28, borderRight: "1px solid rgba(255,255,255,0.06)", display: "block", textDecoration: "none", transition: "background 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                        <div className="flex items-center gap-2.5 mb-3.5">
                          <EngineIcon engine={p.engine} size={40} variant="dark" />
                          <div>
                            <div className="text-sm font-bold text-white">{p.name}</div>
                            <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: "rgba(22,163,74,0.15)", color: "#4ADE80", border: "1px solid rgba(22,163,74,0.3)" }}>LIVE</span>
                          </div>
                        </div>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 18, fontFamily: "'General Sans', sans-serif" }}>{p.desc}</p>
                        <div className="flex flex-col gap-2">
                          {p.features.map((f, j) => (
                            <div key={j} className="flex items-center gap-2 text-xs text-white/40" style={{ fontFamily: "'General Sans', sans-serif" }}>
                              <span style={{ color: p.color, display: "flex" }}><Icon name="check" size={13} stroke={2.5} /></span>{f}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center gap-1.5" style={{ color: p.color }}>
                          <span className="text-sm font-semibold">Explore {p.name}</span>
                          <Icon name="arrowRight" size={14} />
                        </div>
                      </a>
                    ))}
                    <div style={{ padding: 28, background: "rgba(91,127,255,0.04)" }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 16 }}>The platform</div>
                      <div style={{ width: "100%", padding: "16px 12px", borderRadius: 12, background: "linear-gradient(135deg, rgba(45,42,110,0.4), rgba(91,127,255,0.1))", border: "1px solid rgba(91,127,255,0.15)", marginBottom: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                        {[{ l: "Engines", w: "55%" }, { l: "AI Layer", w: "75%" }, { l: "Data Infrastructure", w: "95%" }].map((layer, i) => (
                          <div key={i} style={{ width: layer.w, height: 22, borderRadius: 5, background: `rgba(91,127,255,${0.2 + i * 0.15})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{layer.l}</div>
                        ))}
                      </div>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: 14, fontFamily: "'General Sans', sans-serif" }}>Proprietary data infrastructure with AI intelligence on top.</p>
                      <a href={url("/platform")} className="flex items-center gap-1.5 no-underline" style={{ color: "#5B7FFF" }}>
                        <span className="text-sm font-semibold">Platform Overview</span>
                        <Icon name="arrowRight" size={14} />
                      </a>
                    </div>
                  </div>
                )}

                {activeDropdown === "solutions" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 300px" }}>
                    <div style={{ padding: 28 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 16 }}>By audience</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                        {[
                          { icon: "scale" as const, title: "Solo Attorneys", href: url("/solutions/solo-attorneys"), desc: "Professional-grade docketing without the professional-grade price tag." },
                          { icon: "building" as const, title: "IP Law Firms", href: url("/solutions/ip-law-firms"), desc: "Enterprise capability. Mid-size firm economics. Built for your team." },
                          { icon: "landmark" as const, title: "Corporate In-House", href: url("/solutions/corporate-in-house"), desc: "One platform for your entire portfolio. Every jurisdiction." },
                          { icon: "graduation" as const, title: "Universities & TTOs", href: url("/solutions/universities-tto"), desc: "From invention disclosure to protection, managed in one place." },
                        ].map((s, i) => (
                          <a key={i} href={s.href} className="flex gap-3 p-3.5 rounded-xl no-underline transition-all duration-150"
                            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                            <span className="text-accent flex-shrink-0 flex"><Icon name={s.icon} size={20} /></span>
                            <div>
                              <div className="text-sm font-semibold text-white mb-1">{s.title}</div>
                              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.5, fontFamily: "'General Sans', sans-serif" }}>{s.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 12 }}>
                        <a href={url("/solutions/managed-services")} className="flex items-center gap-2.5 p-3 rounded-xl no-underline transition-all duration-150 mt-3"
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                          <span className="text-accent flex"><Icon name="handshake" size={20} /></span>
                          <div>
                            <div className="text-sm font-semibold text-accent">Managed Services</div>
                            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'General Sans', sans-serif" }}>Let us run your IP operations infrastructure.</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div style={{ padding: 28, borderLeft: "1px solid rgba(255,255,255,0.06)", background: "rgba(91,127,255,0.04)" }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 16 }}>The mid-market gap</div>
                      <div style={{ padding: 20, borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 16 }}>
                        <div className="text-3xl font-extrabold mb-1 gradient-text">17.5%</div>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "'General Sans', sans-serif" }}>CAGR for mid-size IP firms — the fastest-growing segment.</div>
                      </div>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, fontFamily: "'General Sans', sans-serif" }}>Legacy vendors forgot this market. We built for it.</p>
                    </div>
                  </div>
                )}

                {activeDropdown === "resources" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                    {[
                      { icon: "book" as const, title: "Blog & Insights", href: url("/blog"), desc: "Thought leadership, product updates, and IP strategy.", items: [{ label: "IP Management Trends 2026", href: url("/blog") }, { label: "Why Mid-Size Firms Switch", href: url("/blog") }, { label: "The Infrastructure Approach", href: url("/blog") }], color: "#5B7FFF" },
                      { icon: "file" as const, title: "Help Docs", href: url("/docs"), desc: "Step-by-step guides, API reference, and setup.", items: [{ label: "Getting Started Guide", href: url("/docs") }, { label: "DocketEngine Setup", href: url("/docs") }, { label: "API Documentation", href: url("/docs") }], color: "#A78BFA" },
                      { icon: "shield" as const, title: "Trust Center", href: url("/trust"), desc: "Security, compliance, and data handling.", items: [{ label: "Security Overview", href: url("/trust") }, { label: "SOC2 Compliance", href: url("/trust") }, { label: "Data Handling & Privacy", href: url("/trust") }], color: "#4ADE80" },
                    ].map((r, i) => (
                      <div key={i} style={{ padding: 28, borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                        <div className="flex items-center gap-2.5 mb-3">
                          <span style={{ color: r.color, display: "flex" }}><Icon name={r.icon} size={22} /></span>
                          <span className="text-sm font-bold text-white">{r.title}</span>
                        </div>
                        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: 16, fontFamily: "'General Sans', sans-serif" }}>{r.desc}</p>
                        <div className="flex flex-col gap-1.5">
                          {r.items.map((item, j) => (
                            <a key={j} href={url(item.href ?? "/")} className="flex items-center gap-2 text-sm text-white/50 no-underline px-2.5 py-1.5 rounded-lg transition-all duration-150"
                              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                              style={{ fontFamily: "'General Sans', sans-serif" }}>
                              <span style={{ color: r.color, display: "flex" }}><Icon name="arrowRight" size={12} /></span>
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeDropdown === "company" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 300px" }}>
                    {[
                      { icon: "book" as const, title: "Our Story", href: url("/company"), desc: "Founded by an IP operations expert and a serial technology entrepreneur who saw the same gap from two directions.", cta: "Read Our Story", color: "#5B7FFF" },
                      { icon: "briefcase" as const, title: "Careers", href: url("/company/careers"), desc: "Build the infrastructure the IP industry needs. We're looking for exceptional people.", cta: "View Open Positions", color: "#A78BFA" },
                    ].map((c, i) => (
                      <a key={i} href={c.href} style={{ padding: 28, borderRight: "1px solid rgba(255,255,255,0.06)", display: "block", textDecoration: "none", transition: "background 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                        <div className="flex items-center gap-2.5 mb-3.5">
                          <span style={{ color: c.color, display: "flex" }}><Icon name={c.icon} size={22} /></span>
                          <span className="text-sm font-bold text-white">{c.title}</span>
                        </div>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, marginBottom: 18, fontFamily: "'General Sans', sans-serif" }}>{c.desc}</p>
                        <div className="flex items-center gap-1.5" style={{ color: c.color }}>
                          <span className="text-sm font-semibold">{c.cta}</span>
                          <Icon name="arrowRight" size={14} />
                        </div>
                      </a>
                    ))}
                    <div style={{ padding: 28, background: "rgba(91,127,255,0.04)" }}>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="text-accent flex"><Icon name="mail" size={22} /></span>
                        <span className="text-sm font-bold text-white">Get in Touch</span>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {[{ label: "Sales", email: "sales@guardedgrowthip.com", href: url("/contact") }, { label: "Support", email: "support@guardedgrowthip.com", href: url("/contact") }, { label: "General", email: "info@guardedgrowthip.com", href: url("/contact") }].map((contact, i) => (
                          <a key={i} href={contact.href} style={{ padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", transition: "border-color 0.15s", display: "block" }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(91,127,255,0.2)")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                            <span className="text-sm font-semibold text-white">{contact.label}</span>
                            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'General Sans', sans-serif", marginTop: 2 }}>{contact.email}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col" style={{ background: "rgba(5,5,16,0.98)", backdropFilter: "blur(20px)" }}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
            <a href={url("/")} className="flex items-center gap-2.5 no-underline" onClick={() => setMobileOpen(false)}>
              <img src={url("/assets/icon-white.svg")} alt="" className="w-7 h-7" />
              <span className="text-base font-bold text-white" style={{ letterSpacing: "-0.02em" }}>Guarded Growth</span>
            </a>
            <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <Icon name="x" size={22} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.key ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.key ? null : item.key!)}
                      className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                      <span style={{ transition: "transform 0.2s", transform: mobileExpanded === item.key ? "rotate(180deg)" : "rotate(0)" }}>
                        <Icon name="chevronDown" size={18} />
                      </span>
                    </button>
                    {mobileExpanded === item.key && (
                      <div className="pl-4 pb-3 flex flex-col gap-2">
                        {item.key === "products" && (
                          <>
                            <a href={url("/products/docketengine")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>DocketEngine</a>
                            <a href={url("/products/renewalengine")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>RenewalEngine</a>
                            <a href={url("/platform")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Platform Overview</a>
                          </>
                        )}
                        {item.key === "solutions" && (
                          <>
                            <a href={url("/solutions/solo-attorneys")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Solo Attorneys</a>
                            <a href={url("/solutions/ip-law-firms")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>IP Law Firms</a>
                            <a href={url("/solutions/corporate-in-house")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Corporate In-House</a>
                            <a href={url("/solutions/universities-tto")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Universities & TTOs</a>
                            <a href={url("/solutions/managed-services")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Managed Services</a>
                          </>
                        )}
                        {item.key === "resources" && (
                          <>
                            <a href={url("/blog")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Blog & Insights</a>
                            <a href={url("/docs")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Help Docs</a>
                            <a href={url("/trust")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Trust Center</a>
                          </>
                        )}
                        {item.key === "company" && (
                          <>
                            <a href={url("/company")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Our Story</a>
                            <a href={url("/company/careers")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Careers</a>
                            <a href={url("/contact")} className="text-sm text-white/50 hover:text-white py-2 no-underline transition-colors" onClick={() => setMobileOpen(false)}>Contact</a>
                          </>
                        )}
                      </div>
                    )}
                    <div className="h-px bg-white/[0.05]" />
                  </>
                ) : (
                  <>
                    <a href={url(item.href ?? "/")} className="flex py-3.5 text-sm font-semibold text-white/70 hover:text-white no-underline transition-colors" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </a>
                    <div className="h-px bg-white/[0.05]" />
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="px-6 pb-8 pt-4 border-t border-white/[0.06]">
            <Button href={url("/demo")} className="w-full justify-center">Request a Demo</Button>
          </div>
        </div>
      )}
    </>
  );
}
