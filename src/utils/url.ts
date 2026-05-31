// Prepends Astro's base path to any internal URL.
// import.meta.env.BASE_URL is inlined at build time by Vite.
// e.g. url("/products/docketengine") → "/ggip-website-new/products/docketengine"
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
