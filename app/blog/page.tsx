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
      <p className="kicker">Writing</p>
      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        Notes on CS & AI
      </h1>

      {posts.length === 0 ? (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink">
          I occasionally write about customer success, AI tools, and building
          things at the intersection of both. First post coming soon.
        </p>
      ) : (
        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-surface block p-6">
              <h2 className="font-heading text-lg font-semibold text-navy">{post.title}</h2>
              <p className="mt-1 font-mono text-xs text-subtle">
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
