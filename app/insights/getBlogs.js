import he from "he";
import { htmlToText } from "html-to-text";

export async function getBlogs() {
  const baseUrl = process.env.NEXT_PUBLIC_BLOG_API_BASE;
  const res = await fetch(
    `${baseUrl}?_embed`,
    { cache: "no-store" }
  );


  const data = await res.json();

  return data.map((item) => ({
    id: item.id,
    title: he.decode(item.title.rendered),
    excerpt: htmlToText(item.excerpt.rendered),
    slug: item.slug,
    coverImage: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    publishedAt: item.date,
    tags:
    item._embedded?.["wp:term"]
      ?.find((term) => term[0]?.taxonomy === "post_tag")
      ?.map((tag) => tag.slug) || [],
  }));
}