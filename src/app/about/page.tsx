import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rohit Raj — Senior AI Engineer at American Express. Background in ML, NLP, computer vision, and AI infrastructure.",
};

const timeline = [
  {
    company: "American Express",
    role: "Senior AI Engineer",
    period: "Present",
    description:
      "Building enterprise-scale AI systems: LLM-powered agentic workflows, RAG pipelines, and ML infrastructure for financial products.",
    current: true,
  },
  {
    company: "Allstate India",
    role: "Data Scientist — AI Center of Excellence",
    period: "Mar 2018 – Prior",
    description:
      "Distracted driving detection via deep learning (99% recall), real-time recommendation engines (LSTM/GRU, 2 min avg response), and defect prediction saving ~$50M/year.",
    current: false,
  },
  {
    company: "Wipro Holmes",
    role: "Data Scientist — Machine Learning",
    period: "Nov 2015 – Mar 2018",
    description:
      "Knowledge graph construction with NLP, image classification via SVM, and regression testing bots reducing cost by 40%.",
    current: false,
  },
];

const skills = [
  { category: "LLMs & GenAI", items: ["LLM Architecture", "RAG", "Prompt Engineering", "Fine-tuning", "Agents"] },
  { category: "ML/DL", items: ["PyTorch", "TensorFlow", "scikit-learn", "Transformers", "Computer Vision"] },
  { category: "Languages", items: ["Python", "TypeScript", "Java", "SQL", "R"] },
  { category: "Infrastructure", items: ["AWS SageMaker", "Docker", "MLflow", "Kubernetes", "FastAPI"] },
  { category: "Data", items: ["pandas", "Spark", "PostgreSQL", "Redis", "Vector DBs"] },
];

export default function AboutPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
            I&apos;m a Senior AI Engineer at{" "}
            <span className="text-[var(--color-text-accent)]">
              American Express
            </span>
            , building intelligent systems at the intersection of large language
            models, agentic workflows, and financial technology. With over 10
            years in the industry, I&apos;ve shipped production ML systems
            across insurance, enterprise AI, and fintech.
          </p>

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <a
              href="/files/Rohit_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-button)] bg-[var(--color-accent-primary)] text-white text-sm font-medium hover:brightness-110 transition-all shadow-lg shadow-indigo-500/20"
              id="download-resume"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
            <a
              href="mailto:devrohitraj@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-button)] border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Me
            </a>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Career <span className="gradient-text">Timeline</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--color-border)]" />

            <div className="flex flex-col gap-8">
              {timeline.map((item) => (
                <div key={item.company} className="relative pl-12">
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                      item.current
                        ? "bg-[var(--color-accent-primary)] border-[var(--color-accent-primary)] shadow-lg shadow-indigo-500/40"
                        : "bg-[var(--color-bg-card)] border-[var(--color-border)]"
                    }`}
                  />

                  <div className="glass-card p-6">
                    <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                          {item.company}
                        </h3>
                        <p className="text-sm text-[var(--color-accent-secondary)]">
                          {item.role}
                        </p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-bg-card)] text-[var(--color-text-muted)] whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div key={group.category} className="glass-card p-5">
                <h3 className="text-sm font-semibold text-[var(--color-accent-secondary)] uppercase tracking-wider mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Education
          </h2>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
              MIT Muzaffarpur, Bihar
            </h3>
            <p className="text-sm text-[var(--color-accent-secondary)]">
              Bachelor of Information Technology
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Graduated June 2015
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">
              Relevant coursework: Data Structures, Algorithms, OOP, Database
              Systems, Distributed Computing, Artificial Intelligence.
              Co-founded the Technical Club and organized the first Technical
              Fest.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 glass-card p-8 text-center animate-pulse-glow">
          <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-primary)]">
            Let&apos;s connect
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">
            Interested in AI, LLMs, or collaboration? I&apos;d love to hear from you.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:devrohitraj@gmail.com"
              className="px-5 py-2.5 rounded-[var(--radius-button)] bg-[var(--color-accent-primary)] text-white text-sm font-medium hover:brightness-110 transition-all shadow-lg shadow-indigo-500/20"
            >
              Say hello
            </a>
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-[var(--radius-button)] border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-all"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
