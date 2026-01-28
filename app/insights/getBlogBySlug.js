import he from "he";
import { htmlToText } from "html-to-text";

export async function getBlogBySlug(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_BLOG_API_BASE;
  const res = await fetch(
    `${baseUrl}?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  const post = data[0];

  if (!post) return null;

  return {
    id: post.id,
    title: he.decode(post.title.rendered),
    content: he.decode(post.content.rendered),
    excerpt: htmlToText(post.excerpt.rendered),
    publishedAt: post.date,
    coverImage:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    author: he.decode(post._embedded.author[0].name),
    category: post._embedded?.["wp:term"]?.[0]?.[0].name,
  };
}
