import FadeIn from "../ui/FadeIn";
import GlowCard from "../ui/GlowCard";
import Icon from "../ui/Icon";

const cases = [
  { icon: "scale" as const, title: "Solo Attorneys", desc: "Professional-grade docketing without the professional-grade price tag.", href: "/solutions/solo-attorneys", glow: "91,127,255" },
  { icon: "building" as const, title: "IP Law Firms", desc: "Enterprise capability. Mid-size firm economics.", href: "/solutions/ip-law-firms", glow: "167,139,250" },
  { icon: "landmark" as const, title: "Corporate In-House", desc: "One platform for your entire IP portfolio, every jurisdiction.", href: "/solutions/corporate-in-house", glow: "91,127,255" },
  { icon: "graduation" as const, title: "Universities & TTOs", desc: "From invention disclosure to patent protection, managed in one place.", href: "/solutions/universities-tto", glow: "74,71,163" },
];

export default function UseCases() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)", bottom: "-10%", left: "20%", filter: "blur(60px)" }} />

      <div className="max-w-content mx-auto px-7 relative">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-display font-extrabold text-white"
              style={{ fontSize: "clamp(32px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Built for how you work.
            </h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="max-md:!grid-cols-2 max-sm:!grid-cols-1">
          {cases.map((uc, i) => (
            <FadeIn key={i} delay={i * 100}>
              <a href={uc.href} className="no-underline block h-full">
                <GlowCard className="p-7 h-full cursor-pointer" glowColor={uc.glow}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(91,127,255,0.1)", border: "1px solid rgba(91,127,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7FFF", marginBottom: 20 }}>
                    <Icon name={uc.icon} size={24} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: "-0.01em" }}>{uc.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.4)", fontFamily: "'General Sans', sans-serif", marginBottom: 20 }}>{uc.desc}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#5B7FFF", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Explore <Icon name="arrowRight" size={13} />
                  </span>
                </GlowCard>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
