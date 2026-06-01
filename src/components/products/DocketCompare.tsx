import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const rows = [
  { feature: "Jurisdictions covered",     docket: "100+",          altlegal: "US & Canada",    appcoll: "US & Canada",    clarivate: "100+" },
  { feature: "Pricing model",             docket: "Per matter",    altlegal: "Per user",       appcoll: "Per user",       clarivate: "Enterprise" },
  { feature: "Entry price",               docket: "$99/mo",        altlegal: "$99/user/mo",    appcoll: "$45/user/mo",    clarivate: "$50k+/yr" },
  { feature: "AI portfolio health",       docket: true,            altlegal: false,            appcoll: false,            clarivate: "Limited" },
  { feature: "Free migration",            docket: true,            altlegal: false,            appcoll: false,            clarivate: false },
  { feature: "Competitor watch",          docket: true,            altlegal: false,            appcoll: false,            clarivate: true },
  { feature: "Calendar sync",             docket: true,            altlegal: true,             appcoll: true,             clarivate: true },
  { feature: "Self-serve onboarding",     docket: true,            altlegal: true,             appcoll: true,             clarivate: false },
  { feature: "Platform extensibility",    docket: "DocketEngine + RenewalEngine + more", altlegal: "Docketing only", appcoll: "Docketing only", clarivate: "Suite (bundled)" },
];

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (value === true) return (
    <div style={{ display: "flex", justifyContent: highlight ? "center" : "center" }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(22,163,74,0.15)", border: "1px solid rgba(22,163,74,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#16A34A" }}>
        <Icon name="check" size={13} stroke={2.5} />
      </span>
    </div>
  );
  if (value === false) return (
    <div className="flex justify-center">
      <span style={{ fontSize: 18, color: "rgba(255,255,255,0.15)", lineHeight: 1 }}>—</span>
    </div>
  );
  return <span style={{ fontSize: 13, color: highlight ? "#fff" : "rgba(255,255,255,0.5)", fontWeight: highlight ? 600 : 400, fontFamily: "'General Sans', sans-serif" }}>{value as string}</span>;
}

export default function DocketCompare() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, background: "#0d0d1a" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-white"
              style={{ fontSize: "clamp(30px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              How DocketEngine compares.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "0 auto", fontFamily: "'General Sans', sans-serif" }}>
              Be factual, not aggressive. Let the table speak.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.35)", fontFamily: "'General Sans', sans-serif", background: "rgba(255,255,255,0.02)", width: "28%" }}>Feature</th>
                  {[
                    { name: "DocketEngine", highlight: true,  sub: "You're here" },
                    { name: "AltLegal",     highlight: false, sub: "US/Canada only" },
                    { name: "AppColl",      highlight: false, sub: "Per user pricing" },
                    { name: "Clarivate",    highlight: false, sub: "Enterprise only" },
                  ].map((col) => (
                    <th key={col.name} style={{ padding: "16px 20px", textAlign: "center", background: col.highlight ? "rgba(91,127,255,0.08)" : "rgba(255,255,255,0.02)", borderLeft: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
                      {col.highlight && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #5B7FFF, #A78BFA)" }} />}
                      <div style={{ fontSize: 14, fontWeight: 700, color: col.highlight ? "#fff" : "rgba(255,255,255,0.5)" }}>{col.name}</div>
                      <div style={{ fontSize: 11, color: col.highlight ? "#5B7FFF" : "rgba(255,255,255,0.25)", fontFamily: "'General Sans', sans-serif", marginTop: 2 }}>{col.sub}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <td style={{ padding: "14px 20px", fontSize: 13, color: "rgba(255,255,255,0.6)", fontFamily: "'General Sans', sans-serif", background: "rgba(255,255,255,0.01)" }}>{row.feature}</td>
                    <td style={{ padding: "14px 20px", textAlign: "center", background: "rgba(91,127,255,0.05)", borderLeft: "1px solid rgba(255,255,255,0.04)" }}><Cell value={row.docket} highlight /></td>
                    <td style={{ padding: "14px 20px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.04)" }}><Cell value={row.altlegal} /></td>
                    <td style={{ padding: "14px 20px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.04)" }}><Cell value={row.appcoll} /></td>
                    <td style={{ padding: "14px 20px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.04)" }}><Cell value={row.clarivate} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
