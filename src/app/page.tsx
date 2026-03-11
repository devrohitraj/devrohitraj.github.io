import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

const bentoItems = [
  {
    title: "LLM Systems",
    description: "Production LLM architectures, inference optimization, and scalable deployment patterns.",
    icon: "🧠",
    gradient: "from-indigo-500/10 to-purple-500/10",
  },
  {
    title: "Agentic Workflows",
    description: "Autonomous AI agents, tool-use orchestration, and multi-agent collaboration for enterprise.",
    icon: "🤖",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "RAG & Retrieval",
    description: "Advanced retrieval-augmented generation, vector databases, and semantic search pipelines.",
    icon: "🔍",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "ML Infrastructure",
    description: "MLOps, model serving, feature stores, and end-to-end training pipelines at scale.",
    icon: "⚙️",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    title: "NLP & Language",
    description: "Transformer architectures, fine-tuning strategies, and domain-specific language models.",
    icon: "📝",
    gradient: "from-rose-500/10 to-pink-500/10",
  },
  {
    title: "Fintech AI",
    description: "AI applications in financial services: risk modeling, compliance, fraud detection.",
    icon: "💳",
    gradient: "from-violet-500/10 to-fuchsia-500/10",
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="gradient-mesh relative min-h-[85vh] flex items-center justify-center">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Status badge */}
          <div className="fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[var(--color-text-muted)] tracking-wide">
              Building AI @ American Express
            </span>
          </div>

          <h1 className="fade-in fade-in-delay-1 text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Rohit Raj</span>
          </h1>

          <p className="fade-in fade-in-delay-2 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Senior AI Engineer crafting intelligent systems at the intersection of
            {" "}<span className="text-[var(--color-text-accent)]">large language models</span>,{" "}
            <span className="text-[var(--color-text-accent)]">agentic workflows</span>, and
            {" "}<span className="text-[var(--color-text-accent)]">financial technology</span>.
          </p>

          <div className="fade-in fade-in-delay-3 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/blog"
              className="px-6 py-3 rounded-[var(--radius-button)] bg-[var(--color-accent-primary)] text-white text-sm font-medium hover:brightness-110 transition-all duration-200 shadow-lg shadow-indigo-500/20"
              id="hero-blog-link"
            >
              Read the Blog
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-[var(--radius-button)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-medium hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
              id="hero-about-link"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-border)] flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-[var(--color-accent-primary)] animate-pulse" />
          </div>
        </div>
      </section>

      {/* ─── Bento Grid: Focus Areas ─── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Focus <span className="gradient-text">Areas</span>
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
              Deep expertise across the AI/ML stack, from research to production systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bentoItems.map((item, i) => (
              <div
                key={item.title}
                className={`glass-card glow-border p-6 fade-in fade-in-delay-${i + 1}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Latest Posts ─── */}
      {posts.length > 0 && (
        <section className="py-24 px-6 bg-[var(--color-bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                  Latest <span className="gradient-text">Posts</span>
                </h2>
                <p className="text-[var(--color-text-muted)]">
                  Thoughts on AI, engineering, and building at scale.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex text-sm text-[var(--color-text-accent)] hover:text-[var(--color-accent-secondary)] transition-colors"
              >
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-card glow-border p-6 flex flex-col"
                  id={`post-card-${post.slug}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--color-accent-glow)] text-[var(--color-accent-secondary)] font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[var(--color-text-primary)] leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                href="/blog"
                className="text-sm text-[var(--color-text-accent)] hover:text-[var(--color-accent-secondary)] transition-colors"
              >
                View all posts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── AI Research & LLM Insights Section ─── */}
      <section className="py-24 px-6 gradient-mesh" id="research-section">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              AI Research &{" "}
              <span className="gradient-text">LLM Insights</span>
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Deep dives into production AI systems, model architectures, and lessons from deploying
              LLMs in regulated industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured topics */}
            {[
              {
                title: "Agentic Architectures",
                desc: "How autonomous AI agents are reshaping enterprise workflows in financial services.",
                tags: ["Agents", "LLM", "Fintech"],
              },
              {
                title: "Inference at Scale",
                desc: "Techniques for optimizing LLM inference: quantization, batching, speculative decoding.",
                tags: ["Performance", "Infrastructure", "LLM"],
              },
              {
                title: "Retrieval-Augmented Generation",
                desc: "Building RAG systems that actually work: chunking, reranking, and evaluation.",
                tags: ["RAG", "Search", "NLP"],
              },
              {
                title: "Evaluation & Safety",
                desc: "Frameworks for evaluating LLM outputs in high-stakes financial applications.",
                tags: ["Evaluation", "Safety", "Compliance"],
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="glass-card p-6 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-text-primary)]">
                  {topic.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
                  {topic.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-button)] bg-[var(--color-bg-card)] border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all duration-200"
            >
              Explore all research posts
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
