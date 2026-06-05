// Prepends Astro's base path to any internal URL and ensures a trailing slash
// (matches `trailingSlash: "always"` in astro.config.mjs). Required so that
// e.g. /pricing resolves to /pricing/ on GitHub Pages instead of 404ing.
//
// e.g.  url("/products/docketengine")  → "/ggip-website-new/products/docketengine/"
//       url("/")                       → "/ggip-website-new/"
//       url("mailto:x@y.com")          → "mailto:x@y.com"  (unchanged)
//       url("/contact/#form")          → "/ggip-website-new/contact/#form"
//       url("/api/contact")            → "/ggip-website-new/api/contact"  (file paths, no slash)

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  // Skip external / non-path URLs unchanged
  if (!path.startsWith("/")) return path;

  // Split off any hash or query so we can normalize just the path segment
  const hashIdx  = path.indexOf("#");
  const queryIdx = path.indexOf("?");
  const cutAt = [hashIdx, queryIdx].filter((i) => i >= 0).sort((a, b) => a - b)[0];

  let purePath = cutAt !== undefined ? path.slice(0, cutAt) : path;
  const suffix = cutAt !== undefined ? path.slice(cutAt) : "";

  // Don't add trailing slash to paths that look like files (have an extension
  // in the last segment) or API routes — only to "directory-style" page routes.
  const lastSegment = purePath.split("/").pop() || "";
  const looksLikeFile = lastSegment.includes(".");
  const isApiRoute = purePath.startsWith("/api/");

  if (!purePath.endsWith("/") && !looksLikeFile && !isApiRoute) {
    purePath = purePath + "/";
  }

  return `${base}${purePath}${suffix}`;
}
