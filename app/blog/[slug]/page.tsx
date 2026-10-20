import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Pixelorid Blog`,
    description: post.excerpt || "",
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <a href="/blog" className="text-blue-600 hover:underline text-sm">
        Back to Blog
      </a>
      <h1 className="text-4xl font-bold mt-6 mb-4">{post.title}</h1>
      {post.publishedAt && (
        <p className="text-sm text-gray-400 mb-8">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric", month: "long", day: "numeric"
          })}
          {post.author?.name && ` - ${post.author.name}`}
        </p>
      )}
      {post.body && (
        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} />
        </div>
      )}
    </main>
  );
}