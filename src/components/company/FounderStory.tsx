import FadeIn from "../ui/FadeIn";
import { url } from "../../utils/url";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const founders = [
  {
    name: "Valli S Challa",
    role: "LegalOps & Program Management",
    photo: url("/assets/valli-challa.jpg"),
    linkedin: "https://www.linkedin.com/in/vallischalla/",
    bio: "Having managed large-scale IP portfolios, Valli knew the pain from the inside. When she evaluated the available solutions, two things became impossible to ignore.",
    thread: [
      'The so-called "platforms" weren\'t really platforms. They were Frankenstein architectures — companies that had grown by acquiring smaller tools and stitching them together. The seams showed everywhere: inconsistent interfaces, duplicated data, workflows that broke at the boundaries.',
      "The price didn't match the experience. Enterprise pricing for a mid-2000s user experience. The value equation was broken — and every firm she spoke to felt it but assumed there was no alternative.",
    ],
    accent: "#A78BFA",
    accentRgb: "167,139,250",
  },
  {
    name: "Karan S Kumar",
    role: "Product & Technology",
    photo: url("/assets/karan-kumar.jpg"),
    linkedin: "https://www.linkedin.com/in/karanskumar/",
    bio: "A serial entrepreneur with a track record of building and scaling technology products, Karan audited the competitive landscape and found a structural opportunity no one was addressing.",
    thread: [
      "The market leaders were serving outdated UX on aging architectures — coasting on switching costs and contract lock-in rather than product quality. From a technology perspective, the gap between what modern infrastructure made possible and what the IP industry was getting was enormous.",
      "The bigger insight was structural: an entire mid-market segment was underserved. Firms too large for spreadsheets, too cost-conscious for enterprise bloat. No one was building for them.",
    ],
    accent: "#5B7FFF",
    accentRgb: "91,127,255",
  },
];

export default function FounderStory() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,127,255,0.08) 0%, transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)", filter: "blur(80px)" }} />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="max-w-content mx-auto px-7 relative">

        {/* Section heading */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-display font-extrabold text-white"
              style={{ fontSize: "clamp(30px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Meet the{" "}
              <span className="gradient-text">Founders</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "16px auto 0", fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
              The team behind Guarded Growth's mission to transform IP management.
            </p>
          </div>
        </FadeIn>

        {/* Founder cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}
          className="max-md:grid-cols-1">
          {founders.map((f, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div style={{ padding: "40px 36px", borderRadius: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Photo + name */}
                <div className="flex items-start gap-5 mb-6">
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <img
                      src={f.photo}
                      alt={f.name}
                      style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", border: `2px solid rgba(${f.accentRgb},0.35)` }}
                    />
                    <div style={{ position: "absolute", bottom: 0, right: 0, width: 22, height: 22, borderRadius: "50%", background: `rgba(${f.accentRgb},0.2)`, border: `1px solid rgba(${f.accentRgb},0.4)`, display: "flex", alignItems: "center", justifyContent: "center", color: f.accent }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 6px #16A34A" }} />
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4, letterSpacing: "-0.01em" }}>{f.name}</h3>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: f.accent, textTransform: "uppercase", marginBottom: 10 }}>{f.role}</div>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 8, background: `rgba(${f.accentRgb},0.1)`, border: `1px solid rgba(${f.accentRgb},0.25)`, color: f.accent, fontSize: 12, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `rgba(${f.accentRgb},0.2)`; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `rgba(${f.accentRgb},0.1)`; }}
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Story */}
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", fontFamily: "'General Sans', sans-serif", marginBottom: 16 }}>
                  {f.bio}
                </p>
                {f.thread.map((para, j) => (
                  <p key={j} style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", fontFamily: "'General Sans', sans-serif", marginBottom: j < f.thread.length - 1 ? 12 : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Convergence */}
        <FadeIn delay={300}>
          <div style={{ padding: "40px 48px", borderRadius: 20, background: "linear-gradient(135deg, rgba(45,42,110,0.4), rgba(91,127,255,0.1))", border: "1px solid rgba(91,127,255,0.2)", maxWidth: 820, margin: "0 auto" }}>
            <h3 className="font-display font-bold text-white mb-4" style={{ fontSize: 20, letterSpacing: "-0.02em" }}>The Convergence</h3>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", fontFamily: "'General Sans', sans-serif", marginBottom: 14 }}>
              Valli saw the problem from inside the workflow. Karan saw the opportunity from outside the industry. Together, they saw the same gap from two directions — and that convergence is what makes Guarded Growth different from both the legacy incumbents and the other challengers.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", fontFamily: "'General Sans', sans-serif" }}>
              This isn't a technology company guessing at what IP practitioners need. And it isn't an IP consultancy trying to build software. It's both — practitioner depth fused with product-engineering ambition. The combination means Guarded Growth builds tools that work the way IP professionals actually think, on infrastructure that's genuinely modern.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
