# Site Roadmap & Future Plans

This document captures planned improvements for [devrohitraj.github.io](https://devrohitraj.github.io) across content, features, and infrastructure.

---

## 🎯 Near-Term (1–4 Weeks)

### Content
- [ ] Add author profile photo to blog post pages
- [ ] Write 5+ deeper technical posts with full worked examples
- [ ] Create a dedicated **"Projects"** page showcasing OSS work and internal AI tools
- [ ] Add a **"Uses"** or **"Toolbox"** page — tech stack, hardware, and tooling
- [ ] Add a **"TIL"** (Today I Learned) section for short-form atomic notes

### UI / UX
- [ ] Add a **reading progress bar** on individual blog posts
- [ ] Add a **Table of Contents** sidebar for long MDX posts (auto-generated from headings)
- [ ] Add **tag filter** on the blog listing page (client-side filtering by tag)
- [ ] Add subtle **hover animations** on bento cards (Framer Motion)
- [ ] Add **light mode** toggle with system preference detection

### SEO
- [ ] Add `sitemap.xml` auto-generation (Next.js `generateSitemaps()`)
- [ ] Add `robots.txt`
- [ ] Add Open Graph image generation for blog posts (`next/og`)

---

## 🔭 Mid-Term (1–3 Months)

### Features
- [ ] **Newsletter / RSS feed** — `feed.xml` for blog subscribers
- [ ] **Search** — client-side full-text search with Fuse.js or Pagefind
- [ ] **Related posts** — show semantically similar posts at the bottom of each article
- [ ] **Code playground** — embed interactive Python/JS sandboxes in blog posts (Sandpack)
- [ ] **Talk / Presentation** page — slides, recordings, conference appearances

### AI Research Section
- [ ] Dedicated `/research` route with a **paper reading log** (annotated summaries of arXiv papers)
- [ ] **LLM Benchmarks tracker** — live table comparing model performance on key tasks
- [ ] **Experiment notebooks** — embed Jupyter notebooks or Observable notebooks

### Analytics & Monitoring
- [ ] Add **Plausible Analytics** (privacy-first, GDPR compliant)
- [ ] Add **Core Web Vitals** tracking
- [ ] Set up Lighthouse CI in GitHub Actions for perf regression detection

---

## 🚀 Long-Term (3–6 Months)

### Platform Evolution
- [ ] **Custom domain** — point `rohitraj.dev` or `devrohitraj.com` to GitHub Pages
- [ ] **Comments** — Giscus (GitHub Discussions–based comments on blog posts)
- [ ] **MDX interactive components** — custom `<Collapse>`, `<Note>`, `<Comparison>` MDX components
- [ ] **i18n** — Hindi language option for broader reach

### Content Strategy
- [ ] Publish at least **1 long-form technical post per month**
- [ ] Start a **"Readings"** page — curated papers, books, and links (updated monthly)
- [ ] Cross-post to **Towards Data Science** or **The Gradient** for visibility
- [ ] Build a **YouTube / talk** presence around the AI research posts

### Infrastructure
- [ ] Migrate to **Vercel** (free tier) for preview deployments on PRs
- [ ] Set up **GitHub branch protection** — require build pass before merge to master
- [ ] Add **spell check + prose linting** (`cspell`, `textlint`) in CI

---

## 📊 Success Metrics

| Metric | Current | Target (6 months) |
|--------|---------|-------------------|
| Blog posts | 10 | 30+ |
| Monthly visitors | 0 (new) | 1,000+ |
| Newsletter subscribers | 0 | 200+ |
| GitHub stars | — | 50+ |
| Lighthouse score | — | 95+ all categories |

---

## Tech Debt

- [ ] Add proper TypeScript types for MDX frontmatter (`zod` schema validation)
- [ ] Move inline Tailwind classes to CSS utilities where repeated
- [ ] Add unit tests for `src/lib/mdx.ts` parsing functions
- [ ] Add E2E tests with Playwright for key user flows
