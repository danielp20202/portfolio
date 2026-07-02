import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on customer success, AI tools, and building things at the intersection of both.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="section-heading text-sm">Writing</h1>

      {posts.length === 0 ? (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink">
          I occasionally write about customer success, AI tools, and building
          things at the intersection of both. First post coming soon.
        </p>
      ) : (
        <div className="mt-10 space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-lg border border-gray-100 bg-surface p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-navy">{post.title}</h2>
              <p className="mt-1 text-xs text-subtle">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                &nbsp;&middot;&nbsp; {post.readingTime} min read
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
