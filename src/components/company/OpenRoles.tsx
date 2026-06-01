import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

export interface RoleListItem {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
}

interface Props {
  roles: RoleListItem[];
}

const interestAreas = [
  { area: "Engineering",    desc: "Backend, infrastructure, frontend, data" },
  { area: "Product",        desc: "Product management, design, UX" },
  { area: "Go-to-Market",   desc: "Sales, customer success, marketing" },
  { area: "IP Operations",  desc: "Practitioners, paralegals, IP analysts" },
];

export default function OpenRoles({ roles }: Props) {
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
              {roles.length > 0
                ? `${roles.length} ${roles.length === 1 ? "role" : "roles"} currently open. We're a small team and we hire deliberately.`
                : "We're a small team and we hire deliberately. We don't post every role — but we're always looking for exceptional people in these areas."}
            </p>
          </div>
        </FadeIn>

        {/* Role tiles */}
        {roles.length > 0 && (
          <FadeIn delay={80}>
            <div className="flex flex-col gap-3 mb-10">
              {roles.map((role, i) => (
                <a key={role.slug} href={url(`/company/careers/${role.slug}/`)}
                  style={{
                    display: "block", padding: "24px 28px",
                    borderRadius: 14, border: "1px solid #E2E2EA", background: "#fff",
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#5B7FFF66"; el.style.background = "#F6F6F9"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 24px rgba(91,127,255,0.08)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#E2E2EA"; el.style.background = "#fff"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
                  <div className="flex items-center justify-between gap-6 flex-wrap">
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0C0C0E", letterSpacing: "-0.01em" }}>{role.title}</h3>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 9999, background: "#EEEDFA", color: "#2D2A6E", letterSpacing: "0.05em", textTransform: "uppercase" }}>{role.department}</span>
                      </div>
                      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", marginBottom: 8 }}>{role.summary}</p>
                      <div className="flex items-center gap-4 flex-wrap">
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: "#8B8B9E", fontFamily: "'General Sans', sans-serif" }}>
                          <span style={{ color: "#5B7FFF", display: "flex" }}><Icon name="globe" size={13} /></span>
                          {role.location}
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: "#8B8B9E", fontFamily: "'General Sans', sans-serif" }}>
                          <span style={{ color: "#5B7FFF", display: "flex" }}><Icon name="briefcase" size={13} /></span>
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#5B7FFF", flexShrink: 0 }}>
                      View role <Icon name="arrowRight" size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Interest areas card */}
        <FadeIn delay={150}>
          <div style={{ borderRadius: 16, border: "1px solid #E2E2EA", overflow: "hidden", background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
            {roles.length === 0 && (
              <div style={{ padding: "48px 36px", background: "linear-gradient(135deg, #F6F6F9, #EEF2FF)", borderBottom: "1px solid #E2E2EA", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fff", border: "1px solid #E2E2EA", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B7FFF", margin: "0 auto 16px" }}>
                  <Icon name="briefcase" size={22} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.01em" }}>No specific roles posted right now.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif", maxWidth: 480, margin: "0 auto" }}>
                  But if your background fits any of the areas below — or if you think you'd add something we don't know we need — please reach out.
                </p>
              </div>
            )}

            <div style={{ padding: "28px 32px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5C5C6E", textTransform: "uppercase", marginBottom: 14 }}>
                {roles.length > 0 ? "Don't see your role? We hire across" : "Areas we hire across"}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
                className="max-md:grid-cols-1">
                {interestAreas.map((a, i) => (
                  <div key={i} style={{ padding: "12px 16px", borderRadius: 10, border: "1px solid #E2E2EA", background: "#F6F6F9" }}>
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
