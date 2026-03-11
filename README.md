# devrohitraj.github.io

Personal blog and portfolio of **Rohit Raj**, Senior AI Engineer @ American Express.

🌐 **Live site**: [https://devrohitraj.github.io](https://devrohitraj.github.io)

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, static export) |
| Styling | Tailwind CSS v4 (dark-mode-first) |
| Content | MDX with frontmatter |
| Math | KaTeX via `rehype-katex` |
| Code highlighting | Shiki via `rehype-pretty-code` |
| Deployment | GitHub Actions → GitHub Pages |

---

## Local Development

```bash
npm install --legacy-peer-deps
npm run dev        # localhost:3000
npm run build      # static export → out/
```

---

## Project Structure

```
├── .github/workflows/deploy.yml   # CI/CD: build + deploy to GitHub Pages
├── content/posts/                  # MDX blog posts
│   ├── agentic-workflows-fintech.mdx
│   ├── scaling-llm-inference.mdx
│   ├── rag-beyond-naive.mdx
│   ├── evaluating-llm-systems.mdx
│   └── fine-tuning-domain-llms.mdx
├── public/
│   ├── images/                     # Profile photo, header image
│   └── files/                      # Resume PDFs
├── src/
│   ├── app/
│   │   ├── globals.css             # Design system (Tailwind v4 @theme tokens)
│   │   ├── layout.tsx              # Root layout + SEO metadata
│   │   ├── page.tsx                # Homepage
│   │   ├── about/page.tsx          # About page
│   │   └── blog/
│   │       ├── page.tsx            # Blog listing
│   │       └── [slug]/page.tsx     # Individual post (MDX renderer)
│   ├── components/
│   │   ├── Navigation.tsx          # Frosted-glass sticky navbar
│   │   ├── Footer.tsx              # Footer with social links
│   │   └── CodeBlock.tsx           # Code block with copy button
│   └── lib/
│       └── mdx.ts                  # MDX file reading + frontmatter parsing
├── next.config.ts                  # Static export config
└── postcss.config.mjs             # Tailwind v4 PostCSS
```

---

## Adding a Blog Post

Create a new `.mdx` file in `content/posts/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
description: "A short description for previews and SEO."
date: "2026-03-11"
tags: ["LLM", "Fintech", "AI"]
category: "AI Research"
published: true
---

Your content here. Supports **Markdown**, `inline code`, LaTeX math $E = mc^2$, and code blocks with syntax highlighting.
```

---

## Deployment

Push to `master` — GitHub Actions will automatically build and deploy to GitHub Pages.

> **First-time setup**: Go to repo **Settings → Pages → Source → GitHub Actions**

---

## Blog Posts

| Post | Category |
|------|----------|
| Agentic Workflows in Fintech | AI Research |
| Scaling LLM Inference at Enterprise Scale | Engineering |
| RAG Beyond the Basics | AI Research |
| Evaluating LLM Systems | Engineering |
| Fine-Tuning Domain-Specific LLMs | AI Research |
