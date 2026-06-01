import FadeIn from "../ui/FadeIn";

const countries = [
  { country: "United States",    flag: "🇺🇸", office: "USPTO",   official: "$400",     provider: "$620",     ours: "$432",     saving: "$188",  pct: "30%" },
  { country: "European Union",   flag: "🇪🇺", office: "EUIPO",   official: "€850",     provider: "€1,240",   ours: "€918",     saving: "€322",  pct: "26%" },
  { country: "Japan",            flag: "🇯🇵", office: "JPO",     official: "¥48,000",  provider: "¥72,000",  ours: "¥52,800",  saving: "¥19,200", pct: "27%" },
  { country: "United Kingdom",   flag: "🇬🇧", office: "UKIPO",   official: "£200",     provider: "£360",     ours: "£228",     saving: "£132",  pct: "37%" },
  { country: "Canada",           flag: "🇨🇦", office: "CIPO",    official: "CA$350",   provider: "CA$520",   ours: "CA$385",   saving: "CA$135", pct: "26%" },
  { country: "Australia",        flag: "🇦🇺", office: "IP Aus.", official: "AU$400",   provider: "AU$620",   ours: "AU$444",   saving: "AU$176", pct: "28%" },
];

export default function RenewalCompare() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#0d0d1a" }}>
      <div className="max-w-content mx-auto px-7">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              See the numbers.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "0 auto", fontFamily: "'General Sans', sans-serif" }}>
              Sample renewal costs across 6 jurisdictions — RenewalEngine vs a typical traditional provider. We show you these numbers before you commit.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  {["Jurisdiction", "IP Office", "Official Fee", "Traditional Provider", "RenewalEngine", "Savings", "% Saved"].map((h, i) => (
                    <th key={h} style={{
                      padding: "14px 16px",
                      textAlign: i === 0 ? "left" : "center",
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
                      color: i === 4 ? "#A78BFA" : "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      background: i === 4 ? "rgba(167,139,250,0.06)" : "rgba(255,255,255,0.02)",
                      borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
                      position: "relative",
                    }}>
                      {i === 4 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #A78BFA, #7C3AED)" }} />}
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {countries.map((c, i) => (
                  <tr key={i} style={{ borderBottom: i < countries.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <td style={{ padding: "14px 16px", fontSize: 13, color: "#fff", fontWeight: 500 }}>
                      <span style={{ marginRight: 8 }}>{c.flag}</span>{c.country}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'General Sans', sans-serif", borderLeft: "1px solid rgba(255,255,255,0.04)" }}>{c.office}</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'General Sans', sans-serif", borderLeft: "1px solid rgba(255,255,255,0.04)" }}>{c.official}</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "line-through", fontFamily: "'General Sans', sans-serif", borderLeft: "1px solid rgba(255,255,255,0.04)" }}>{c.provider}</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: 13, color: "#A78BFA", fontWeight: 700, background: "rgba(167,139,250,0.04)", borderLeft: "1px solid rgba(255,255,255,0.04)" }}>{c.ours}</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", fontSize: 13, color: "#16A34A", fontWeight: 600, fontFamily: "'General Sans', sans-serif", borderLeft: "1px solid rgba(255,255,255,0.04)" }}>{c.saving}</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.04)" }}>
                      <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 9999, background: "rgba(22,163,74,0.12)", color: "#16A34A", border: "1px solid rgba(22,163,74,0.2)" }}>{c.pct}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                  <td colSpan={2} style={{ padding: "14px 16px", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Average savings</td>
                  <td colSpan={2} style={{ padding: "14px 16px" }} />
                  <td style={{ padding: "14px 16px", background: "rgba(167,139,250,0.06)", borderLeft: "1px solid rgba(255,255,255,0.04)" }} />
                  <td colSpan={2} style={{ padding: "14px 16px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: "#16A34A" }}>27.7%</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 16, textAlign: "center", fontFamily: "'General Sans', sans-serif" }}>
            Based on a sample 6-jurisdiction benchmark. Actual savings vary by portfolio and jurisdiction mix. We'll build you a personalised comparison.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
