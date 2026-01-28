import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/app/insights/getBlogBySlug";
import Footer from "@/components/Footer";

export default async function BlogDetailPage({ params }) {
  const blog = await getBlogBySlug((await params).slug);

  if (!blog) notFound();

  return (
    <div className="">
      <div className="bg-primary text-black pt-40 flex flex-col items-center justify-center gap-y-18">
        <section className="flex flex-col lg:flex-row justify-between lg:items-center w-[87vw] gap-y-10">
          <div className="flex flex-col justify-center gap-y-10">
            <div className="flex gap-10">
              <p className="text-[14px] lg:text-[18px]">
                {new Date(blog.publishedAt).toDateString().substring(4)}
              </p>
              <p className="text-[14px] lg:text-[18px]">
                {blog.category}
              </p>
            </div>
            <h1 className="text-[28px] lg:text-[45px] font-semibold italic w-[380px] lg:w-[700px] leading-tight">
              {blog.title}
            </h1>
            <p className="text-[14px] lg:text-[18px]">
              {blog.excerpt}
            </p>
          </div>
          <p className="text-[18px] lg:text-[24px] font-medium">
            {blog.author}
          </p>
        </section>

        {blog.coverImage && (
          <div className="relative w-[87vw] h-[300px] lg:h-[517px]">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        )}

        <div
          className="flex flex-col gap-5 w-[87vw] lg:w-[55vw] pb-26"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
      <Footer/>
    </div>
  );
}