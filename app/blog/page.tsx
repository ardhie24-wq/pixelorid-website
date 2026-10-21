import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Pixelorid",
  description: "Tips, guides, and resources for small business owners — templates, tools, and productivity.",
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  categories: { title: string }[];
  author: { name: string };
};

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <p className="font-bold text-pixel-green">PIXELORID BLOG</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Tips & Resources for Small Businesses
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Practical guides, templates, and tools to help you run and grow your business.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        {posts.length === 0 ? (
          <p className="text-slate-400">No posts yet. Check back soon!</p>
        ) : (
          <div className="flex flex-col gap-0">
            {posts.map((post: Post) => (
              <article key={post._id} className="group border-b border-slate-100 py-10">
                <div className="flex flex-col gap-3">
                  {post.categories?.length > 0 && (
                    <div className="flex gap-2">
                      {post.categories.map((cat) => (
                        <span key={cat.title} className="text-xs font-bold text-pixel-green uppercase tracking-wide">
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link href={`/blog/${post.slug.current}`}>
                    <h2 className="text-2xl font-extrabold text-slate-950 group-hover:text-pixel-green transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  {post.excerpt && (
                    <p className="text-slate-600 leading-7">{post.excerpt}</p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      {post.publishedAt && (
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric", month: "long", day: "numeric"
                          })}
                        </span>
                      )}
                      {post.author?.name && (
                        <>
                          <span>&#183;</span>
                          <span>{post.author.name}</span>
                        </>
                      )}
                    </div>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="text-sm font-bold text-pixel-green hover:text-pixel-green-hover transition-colors"
                    >
                      Read more &#8594;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}