import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

// MDX components mapping
const mdxComponents = {
  pre: (props: React.ComponentProps<"pre">) => (
    <CodeBlock {...props}>{props.children}</CodeBlock>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h1: (props: any) => (
    <h1
      className="text-3xl font-bold mt-10 mb-4 text-[var(--color-text-primary)]"
      {...props}
    />
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h2: (props: any) => (
    <h2
      className="text-2xl font-bold mt-8 mb-3 text-[var(--color-text-primary)]"
      {...props}
    />
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h3: (props: any) => (
    <h3
      className="text-xl font-semibold mt-6 mb-2 text-[var(--color-text-primary)]"
      {...props}
    />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors mb-10"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--color-accent-glow)] text-[var(--color-accent-secondary)] font-medium">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-[var(--color-text-primary)]">
            {post.title}
          </h1>

          <p className="text-lg text-[var(--color-text-muted)] mb-6">
            {post.description}
          </p>

          <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] pb-8 border-b border-[var(--color-border)]">
            <span className="font-medium text-[var(--color-text-secondary)]">
              Rohit Raj
            </span>
            <span>·</span>
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
        </header>

        {/* MDX Content */}
        <div className="prose-dark">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkMath, remarkGfm],
                rehypePlugins: [
                  rehypeKatex,
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-dark-dimmed",
                      keepBackground: true,
                    },
                  ],
                ],
              },
            }}
          />
        </div>

        {/* Post Footer */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">
                Written by
              </p>
              <p className="font-semibold text-[var(--color-text-primary)]">
                Rohit Raj
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Senior AI Engineer @ American Express
              </p>
            </div>
            <Link
              href="/blog"
              className="px-4 py-2 rounded-[var(--radius-button)] border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all"
            >
              More posts →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
