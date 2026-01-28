import { getBlogs } from "../getBlogs";

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map(blog => ({
    slug: blog.slug,
  }));
}
