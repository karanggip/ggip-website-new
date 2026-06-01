import { getCollection } from "astro:content";

export interface PostListItem {
  slug: string;
  title: string;
  date: Date;
  author: string;
  category: string;
  excerpt: string;
  coverColor: string;
  readTime: number;
}

/** All published blog posts, newest first. */
export async function getAllPosts(): Promise<PostListItem[]> {
  const posts = await getCollection("blog", ({ data }) => data.published);
  return posts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((p) => ({
      slug:       p.slug,
      title:      p.data.title,
      date:       p.data.date,
      author:     p.data.author,
      category:   p.data.category,
      excerpt:    p.data.excerpt,
      coverColor: p.data.coverColor,
      readTime:   p.data.readTime,
    }));
}

/** The N most recent published blog posts (default 3) — used in nav. */
export async function getLatestPosts(n: number = 3): Promise<Array<{ slug: string; title: string }>> {
  const all = await getAllPosts();
  return all.slice(0, n).map((p) => ({ slug: p.slug, title: p.title }));
}
