import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Pixelorid",
  description: "Tips and guides for small business owners.",
};

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-500 mb-12">Tips, guides, and resources for small business owners.</p>
      {posts.length === 0 ? (
        <p className="text-gray-400">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post._id} className="border-b pb-8">
              <Link href={`/blog/${post.slug.current}`}>
                <h2 className="text-2xl font-semibold hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              {post.publishedAt && (
                <p className="text-sm text-gray-400 mt-1">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric", month: "long", day: "numeric"
                  })}
                </p>
              )}
              {post.excerpt && (
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
              )}
              <Link href={`/blog/${post.slug.current}`} className="inline-block mt-3 text-blue-600 hover:underline text-sm font-medium">
                Read more ?
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
