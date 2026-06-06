import { useState } from "react";
import FadeIn from "../ui/FadeIn";
import Icon from "../ui/Icon";
import { url } from "../../utils/url";

export interface PostCard {
  slug: string;
  title: string;
  dateISO: string;
  dateFmt: string;
  author: string;
  category: string;
  excerpt: string;
  coverColor: string;
  coverImage?: string;
  readTime: number;
}

interface Props {
  posts: PostCard[];
}

const categoryAccents: Record<string, { c: string; bg: string }> = {
  "Docketing":       { c: "#5B7FFF", bg: "rgba(91,127,255,0.12)"  },
  "Renewals":        { c: "#A78BFA", bg: "rgba(167,139,250,0.12)" },
  "IP Strategy":     { c: "#2D2A6E", bg: "rgba(45,42,110,0.12)"   },
  "Product Updates": { c: "#16A34A", bg: "rgba(22,163,74,0.12)"   },
};

const coverGradients: Record<string, string> = {
  indigo: "linear-gradient(135deg, #2D2A6E, #5B7FFF)",
  violet: "linear-gradient(135deg, #5B3FA8, #A78BFA)",
  blue:   "linear-gradient(135deg, #1E3A8A, #3B82F6)",
  slate:  "linear-gradient(135deg, #1e1b5e, #4A47A3)",
};

const categories = ["All", "Docketing", "Renewals", "IP Strategy", "Product Updates"];

export default function BlogIndex({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const visiblePosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featured = visiblePosts[0];
  const rest = visiblePosts.slice(1);

  return (
    <section style={{ paddingTop: 64, paddingBottom: 80, background: "#fff", color: "#0C0C0E" }}>
      <div className="max-w-content mx-auto px-7">

        {/* Category filters */}
        <FadeIn>
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "7px 16px", borderRadius: 9999, border: "1px solid #E2E2EA",
                  background: activeCategory === cat ? "#2D2A6E" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#5C5C6E",
                  fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* No results */}
        {visiblePosts.length === 0 && (
          <div style={{ padding: "64px 24px", textAlign: "center", color: "#8B8B9E" }}>
            <p style={{ fontSize: 16, fontFamily: "'General Sans', sans-serif" }}>No posts in this category yet.</p>
          </div>
        )}

        {/* Featured post */}
        {featured && (
          <FadeIn delay={80}>
            <a href={url(`/blog/${featured.slug}/`)}
              style={{ display: "block", marginBottom: 48, borderRadius: 20, overflow: "hidden", border: "1px solid #E2E2EA", background: "#fff", textDecoration: "none", transition: "all 0.25s", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; el.style.borderColor = "#5B7FFF44"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.04)"; el.style.borderColor = "#E2E2EA"; }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 0 }} className="max-md:grid-cols-1">
                <div style={{ background: coverGradients[featured.coverColor] || coverGradients.indigo, minHeight: 280, position: "relative", overflow: "hidden" }}>
                  {featured.coverImage && (
                    <img src={url(featured.coverImage)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  )}
                  {!featured.coverImage && <div className="grid-bg absolute inset-0 opacity-30" />}
                  <div style={{ position: "absolute", top: 20, left: 20, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", padding: "4px 10px", borderRadius: 9999, background: "rgba(5,5,16,0.45)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(6px)" }}>Featured</div>
                </div>
                <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 9999, background: categoryAccents[featured.category]?.bg, color: categoryAccents[featured.category]?.c, letterSpacing: "0.05em", textTransform: "uppercase" }}>{featured.category}</span>
                    <time dateTime={featured.dateISO} style={{ fontSize: 12, color: "#8B8B9E", fontFamily: "'General Sans', sans-serif" }}>{featured.dateFmt}</time>
                  </div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 14, color: "#0C0C0E" }}>{featured.title}</h2>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#5C5C6E", marginBottom: 20, fontFamily: "'General Sans', sans-serif" }}>{featured.excerpt}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span style={{ fontSize: 13, color: "#5C5C6E", fontFamily: "'General Sans', sans-serif" }}>
                      By <strong style={{ color: "#0C0C0E", fontWeight: 600 }}>{featured.author}</strong> · {featured.readTime} min read
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#5B7FFF", display: "inline-flex", alignItems: "center", gap: 6 }}>
                      Read article <Icon name="arrowRight" size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>
        )}

        {/* Grid of remaining posts */}
        {rest.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
            className="max-md:grid-cols-1">
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 80}>
                <a href={url(`/blog/${post.slug}/`)}
                  style={{ display: "flex", flexDirection: "column", borderRadius: 16, overflow: "hidden", border: "1px solid #E2E2EA", background: "#fff", textDecoration: "none", height: "100%", transition: "all 0.25s" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.06)"; el.style.borderColor = "#5B7FFF44"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.borderColor = "#E2E2EA"; }}>
                  <div style={{ background: coverGradients[post.coverColor] || coverGradients.indigo, height: 160, position: "relative", overflow: "hidden" }}>
                    {post.coverImage ? (
                      <img src={url(post.coverImage)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <div className="grid-bg absolute inset-0 opacity-25" />
                    )}
                  </div>
                  <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 9999, background: categoryAccents[post.category]?.bg, color: categoryAccents[post.category]?.c, letterSpacing: "0.05em", textTransform: "uppercase" }}>{post.category}</span>
                      <time dateTime={post.dateISO} style={{ fontSize: 11, color: "#8B8B9E", fontFamily: "'General Sans', sans-serif" }}>{post.dateFmt}</time>
                    </div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.3, marginBottom: 10, color: "#0C0C0E" }}>{post.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "#5C5C6E", marginBottom: 16, fontFamily: "'General Sans', sans-serif", flex: 1 }}>{post.excerpt}</p>
                    <div className="flex items-center justify-between gap-2" style={{ marginTop: "auto" }}>
                      <span style={{ fontSize: 12, color: "#8B8B9E", fontFamily: "'General Sans', sans-serif" }}>By <strong style={{ color: "#5C5C6E", fontWeight: 600 }}>{post.author}</strong></span>
                      <span style={{ fontSize: 12, color: "#8B8B9E", fontFamily: "'General Sans', sans-serif" }}>{post.readTime} min</span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
