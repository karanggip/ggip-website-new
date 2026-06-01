import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const channels = [
  {
    icon: "dollar" as const,
    label: "Sales",
    desc: "Pricing, demos, and questions about which plan fits.",
    email: "sales@guardedgrowthip.com",
    accent: "#5B7FFF",
  },
  {
    icon: "shield" as const,
    label: "Support",
    desc: "Existing customer help and technical issues.",
    email: "support@guardedgrowthip.com",
    accent: "#A78BFA",
  },
  {
    icon: "mail" as const,
    label: "General",
    desc: "Partnerships, press, careers, or anything else.",
    email: "info@guardedgrowthip.com",
    accent: "#16A34A",
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <FadeIn>
        <div>
          <h2 className="font-display font-bold mb-2" style={{ fontSize: 22, letterSpacing: "-0.02em" }}>Or email us directly</h2>
          <p style={{ fontSize: 14, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", lineHeight: 1.6 }}>
            We monitor all three inboxes. Use the one that fits your question.
          </p>
        </div>
      </FadeIn>

      {channels.map((c, i) => (
        <FadeIn key={c.label} delay={i * 80}>
          <a
            href={`mailto:${c.email}`}
            style={{ display: "block", padding: "20px 22px", borderRadius: 14, border: "1px solid #E2E2EA", background: "#fff", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = c.accent + "55"; el.style.background = "#F6F6F9"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = `0 6px 16px ${c.accent}11`; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#E2E2EA"; el.style.background = "#fff"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
          >
            <div className="flex items-start gap-3">
              <div style={{ width: 38, height: 38, borderRadius: 10, background: c.accent + "15", border: `1px solid ${c.accent}33`, display: "flex", alignItems: "center", justifyContent: "center", color: c.accent, flexShrink: 0 }}>
                <Icon name={c.icon} size={18} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0C0C0E", marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontSize: 13, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", lineHeight: 1.55, marginBottom: 6 }}>{c.desc}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: c.accent, fontFamily: "'General Sans', sans-serif", wordBreak: "break-all" }}>{c.email}</div>
              </div>
            </div>
          </a>
        </FadeIn>
      ))}

      {/* Mailing address */}
      <FadeIn delay={300}>
        <div style={{ padding: "20px 22px", borderRadius: 14, border: "1px solid #E2E2EA", background: "#fff" }}>
          <div className="flex items-start gap-3">
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "#EEEDFA", border: "1px solid #2D2A6E22", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D2A6E", flexShrink: 0 }}>
              <Icon name="landmark" size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0C0C0E", marginBottom: 2 }}>Mailing address</div>
              <div style={{ fontSize: 13, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", lineHeight: 1.6 }}>
                5900 Balcones Drive #28582<br />
                Austin, TX 78731<br />
                United States
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Response time block */}
      <FadeIn delay={380}>
        <div style={{ padding: "20px 22px", borderRadius: 14, background: "linear-gradient(135deg, #EEEDFA, #EEF2FF)", border: "1px solid #E2E2EA" }}>
          <div className="flex items-center gap-2 mb-2">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 6px #16A34A", display: "inline-block", animation: "pulseDot 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#16A34A", textTransform: "uppercase" }}>Currently responsive</span>
          </div>
          <p style={{ fontSize: 13, color: "#3D3D4E", fontFamily: "'General Sans', sans-serif", lineHeight: 1.6 }}>
            We typically reply within <strong style={{ color: "#0C0C0E", fontWeight: 600 }}>1 business day</strong> — often within hours during US/EU work hours.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
