import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on AI engineering, LLMs, agentic workflows, and machine learning in production.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl">
            Thoughts, deep dives, and practical guides on AI engineering,
            large language models, and building intelligent systems.
          </p>
        </div>

        {/* Posts List */}
        {posts.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <p className="text-[var(--color-text-muted)] text-lg">
              Posts coming soon. Stay tuned!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card glow-border p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4 group"
                id={`blog-list-${post.slug}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--color-accent-glow)] text-[var(--color-accent-secondary)] font-medium">
                      {post.category}
                    </span>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-secondary)] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <div className="hidden md:flex items-center text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-secondary)] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
