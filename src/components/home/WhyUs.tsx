import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const items = [
  { icon: "architecture" as const, title: "Modern architecture", desc: "Cloud-native from day one. Not a legacy platform with a new coat of paint. Not acquisitions wearing a single logo.", grad: "linear-gradient(135deg, #EEEDFA, #EEF2FF)", border: "#5B7FFF" },
  { icon: "globe" as const, title: "Global by default", desc: "100+ IP offices. 70M+ trademarks. Global from the start — not domestic-first with international patched on later.", grad: "linear-gradient(135deg, #EEF2FF, #E8F4FD)", border: "#A78BFA" },
  { icon: "user" as const, title: "Practitioner-designed", desc: "Built by a team that's managed 10,000+ IP assets. We've lived the workflows we're automating.", grad: "linear-gradient(135deg, #F0EDFF, #EEEDFA)", border: "#2D2A6E" },
];

export default function WhyUs() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <h2 className="font-display font-extrabold mb-14"
            style={{ fontSize: "clamp(32px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Built, not bolted<span style={{ color: "#5B7FFF" }}>.</span>
          </h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="max-md:!grid-cols-1">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div
                className="anim-border-light"
                style={{ height: "100%", background: "#fff", borderRadius: 16, transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
              >
              <div
                style={{ position: "relative", zIndex: 1, padding: 32, borderRadius: 16, border: "1px solid #E2E2EA", background: "linear-gradient(135deg, #ffffff, #ffffff)", height: "100%", transition: "background 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = item.grad; el.style.boxShadow = `0 12px 40px ${item.border}11`; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "linear-gradient(135deg, #ffffff, #ffffff)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#EEEDFA", display: "flex", alignItems: "center", justifyContent: "center", color: item.border, marginBottom: 20 }}>
                  <Icon name={item.icon} size={24} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.01em" }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{item.desc}</p>
              </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
