import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";

const interestAreas = [
  { area: "Engineering",    desc: "Backend, infrastructure, frontend, data" },
  { area: "Product",        desc: "Product management, design, UX" },
  { area: "Go-to-Market",   desc: "Sales, customer success, marketing" },
  { area: "IP Operations",  desc: "Practitioners, paralegals, IP analysts" },
];

export default function OpenRoles() {
  return (
    <section id="open-roles" style={{ paddingTop: 80, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7" style={{ maxWidth: 880 }}>
        <FadeIn>
          <div style={{ marginBottom: 40 }}>
            <h2 className="font-display font-extrabold mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Open positions.
            </h2>
            <p style={{ fontSize: 17, color: "#5C5C6E", maxWidth: 600, fontFamily: "'General Sans', sans-serif", lineHeight: 1.65 }}>
              We're a small team and we hire deliberately. We don't post every role — but we're always looking for exceptional people in these areas.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div style={{ borderRadius: 16, border: "1px solid #E2E2EA", overflow: "hidden", background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
            {/* Empty state */}
            <div style={{ padding: "48px 36px", background: "linear-gradient(135deg, #F6F6F9, #EEF2FF)", borderBottom: "1px solid #E2E2EA", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fff", border: "1px solid #E2E2EA", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7FFF", margin: "0 auto 16px" }}>
                <Icon name="briefcase" size={22} />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.01em" }}>No specific roles posted right now.</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", maxWidth: 480, margin: "0 auto" }}>
                But if your background fits any of the areas below — or if you think you'd add something we don't know we need — please reach out.
              </p>
            </div>

            {/* Interest areas */}
            <div style={{ padding: "32px 36px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5C5C6E", textTransform: "uppercase", marginBottom: 16 }}>Areas we hire across</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
                className="max-md:grid-cols-1">
                {interestAreas.map((a, i) => (
                  <div key={i} style={{ padding: "14px 18px", borderRadius: 10, border: "1px solid #E2E2EA", background: "#F6F6F9" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0C0C0E", marginBottom: 3 }}>{a.area}</div>
                    <div style={{ fontSize: 13, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
