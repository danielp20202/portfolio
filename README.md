# Daniel Pinzon — Portfolio Website

Personal portfolio / CV site built with Next.js, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a blog post

Create a `.mdx` file in `/content/blog/` with frontmatter:

```mdx
---
title: "Post title"
date: "2026-07-02"
excerpt: "One-sentence summary shown on the blog index."
---

Post content in Markdown/MDX goes here.
```

The file name (minus `.mdx`) becomes the post's URL slug at `/blog/[slug]`. Reading time is estimated automatically from word count.

## Updating the CV PDF

Replace `/public/Daniel_Pinzon_CV.pdf` with the actual CV PDF before deploying — the current file is a placeholder.

## Setting the Formspree endpoint

Find `FORMSPREE_ENDPOINT` in [`components/ContactForm.tsx`](components/ContactForm.tsx) and replace it with your Formspree form endpoint.

## Deploy

Push to `main` — Vercel auto-deploys from the connected repository.
