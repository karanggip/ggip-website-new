import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const stats = [
  { value: "100+",  label: "IP offices connected",  c: "#5B7FFF" },
  { value: "70M+",  label: "Trademark records",     c: "#A78BFA" },
  { value: "Real-time", label: "Sync cadence",      c: "#5B7FFF" },
  { value: "24/7", label: "Continuous ingestion",   c: "#A78BFA" },
];

// Globe of IP offices as a visual element
const offices = [
  { name: "USPTO", flag: "🇺🇸", region: "North America" },
  { name: "EUIPO", flag: "🇪🇺", region: "Europe" },
  { name: "WIPO",  flag: "🌐", region: "Global" },
  { name: "JPO",   flag: "🇯🇵", region: "Asia" },
  { name: "KIPO",  flag: "🇰🇷", region: "Asia" },
  { name: "UKIPO", flag: "🇬🇧", region: "Europe" },
  { name: "CIPO",  flag: "🇨🇦", region: "North America" },
  { name: "INPI",  flag: "🇫🇷", region: "Europe" },
  { name: "DPMA",  flag: "🇩🇪", region: "Europe" },
  { name: "IP Aus", flag: "🇦🇺", region: "Oceania" },
  { name: "CNIPA", flag: "🇨🇳", region: "Asia" },
  { name: "INPI BR", flag: "🇧🇷", region: "S. America" },
];

export default function DataLayer() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">

        <FadeIn>
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5B7FFF", textTransform: "uppercase", display: "block", marginBottom: 14 }}>Layer 1 · The Foundation</span>
            <h2 className="font-display font-extrabold mb-4"
              style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Proprietary data infrastructure.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>
              We ingest, clean, and standardise IP data from 100+ offices worldwide — each with its own formats, protocols, and update cadences. The result is a normalised schema that lets us build any IP workflow on top of a single source of truth.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
          className="max-md:grid-cols-1 max-md:gap-10">

          {/* Left: capability list */}
          <FadeIn delay={100}>
            <div className="flex flex-col gap-4">
              {[
                { icon: "globe" as const,  title: "Global ingestion",        desc: "100+ IP offices across every major jurisdiction — Americas, Europe, Asia-Pacific. Each office connector built and maintained by our infrastructure team." },
                { icon: "sync" as const,   title: "Real-time synchronisation", desc: "Continuous polling and webhook ingestion where supported. Status changes appear in your dashboard within minutes of being posted by the office." },
                { icon: "layers" as const, title: "Normalised schema",       desc: "Inconsistent formats from every office mapped into a single standardised data model — so every engine, every report, every export works the same way." },
                { icon: "shield" as const, title: "Verified at the source",  desc: "All data sourced directly from official IP office APIs and bulletins — never scraped, never aggregated through third parties. Audit-ready provenance." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D2A6E", flexShrink: 0 }}>
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, letterSpacing: "-0.01em" }}>{item.title}</h4>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: jurisdiction grid */}
          <FadeIn delay={150}>
            <div style={{ padding: 28, borderRadius: 18, background: "linear-gradient(135deg, #050510, #0d0d1a)", border: "1px solid rgba(91,127,255,0.15)", boxShadow: "0 16px 48px rgba(45,42,110,0.15)" }}>
              <div className="flex justify-between items-center mb-5">
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}>CONNECTED OFFICES</div>
                <div className="flex items-center gap-1.5">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 6px #16A34A", display: "inline-block", animation: "pulseDot 2s ease-in-out infinite" }} />
                  <span style={{ fontSize: 11, color: "#4ADE80", fontWeight: 600 }}>All synced</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {offices.map((o) => (
                  <div key={o.name} style={{ padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ fontSize: 14, marginBottom: 4 }}>{o.flag}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{o.name}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "'General Sans', sans-serif" }}>{o.region}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, padding: "10px 14px", borderRadius: 8, background: "rgba(91,127,255,0.06)", border: "1px solid rgba(91,127,255,0.15)", textAlign: "center" }}>
                <span style={{ fontSize: 12, color: "#5B7FFF", fontWeight: 600 }}>+ 88 more offices · Adding ~2 per month</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats strip */}
        <FadeIn delay={250}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 56, padding: "32px 0", borderTop: "1px solid #E2E2EA", borderBottom: "1px solid #E2E2EA" }}
            className="max-md:grid-cols-2">
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", color: s.c, lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
