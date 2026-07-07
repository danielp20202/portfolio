# Daniel Pinzon's Portfolio Website

Personal portfolio / CV site for Daniel Pinzon (Partner Relations & Customer Success leader at Unity Technologies). Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. No database, no auth — static/edge-rendered marketing site.

Live at [danielpi.me](https://danielpi.me), deployed on Vercel with auto-deploy from `main`.

## Site map

| Route | Purpose |
|---|---|
| `/` | Hero (photo, stats, CTAs), teaser cards, skills strip, closing "View Projects" CTA |
| `/about` | Full bio, skills breakdown, experience timeline (`#experience` anchor), education |
| `/projects` | Project grid with status legend |
| `/projects/[slug]` | Per-project deep dive: screenshot, architecture flow diagram, key decisions, tech stack |
| `/blog`, `/blog/[slug]` | MDX blog (currently empty; nav item hides itself until a post exists) |
| `/contact` | Contact details + Formspree-backed form |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To preview a production build locally: `npm run build && npm run start`.

## Design system

- **Colors**: Navy `#1B2A4A` (primary/headings), Blue `#2563A8` (accent/links), Ink `#2C2C2C` (body), Muted `#666666`, Subtle `#999999` (decorative only — fails contrast for body text, see `app/globals.css`), Surface `#F8F9FB`.
- **Fonts**: Inter (body, `font-sans`), Space Grotesk (headings, `font-heading`), JetBrains Mono (kickers/metadata/tags, `font-mono`).
- **Patterns**: `.kicker` (small mono uppercase label, used as `<h2>` when it introduces a section, plain `<p>` when it precedes an `<h1>`), `.card-surface` (bento-style card with hover lift), `.dot-grid` / `.glow-blob` (subtle hero texture), `.portrait-ring` (conic-gradient photo ring).
- **No dark mode** (explicit scope decision). **No em dashes** in copy anywhere on the site — use commas, periods, or semicolons instead.
- Accessibility: global `:focus-visible` ring (see `globals.css`), skip-to-content link, sequential heading hierarchy (h1→h2→h3, no skips) on every page — check this whenever adding a new section.

## Content sources

- **`data/experience.ts`** — bio facts, skills, work history, education. This has been cross-checked against Daniel's actual CV PDF; treat the CV as source of truth if the two ever diverge. Some skill/bullet wording is deliberately more generic than the CV's raw internal-system references (e.g., "digital CS platform implementation" instead of naming the specific vendor tool) — keep that discretion when editing.
- **`data/projects.ts`** — each project has `title`, `description`, `tech`, `status`, `image`, and an optional `architecture` block (`summary`, `steps[]`, `decisions[]`) that powers the `/projects/[slug]` deep-dive page and the "View architecture" link on its card.

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

The file name (minus `.mdx`) becomes the post's URL slug at `/blog/[slug]`. Reading time is estimated automatically from word count. The "Blog" nav item and its own link in the footer are mutually exclusive and both driven by `getAllPosts().length > 0` in `app/layout.tsx` — once a post exists, "Blog" appears in the main nav automatically and drops out of the footer.

## Project screenshots (`public/projects/`)

- `casa-salsa.jpg` is a real screenshot (public/client-facing project).
- `hook-dashboard.png`, `prm-hero-stories.png`, `h1-checkin.png` are internal Unity work tools — their screenshots were captured from a **sanitized copy running fake placeholder data** (fictional names/companies), never the real tool. Each card that uses one of these renders a disclosure line ("Screenshot shows sanitized example data...") — keep that disclosure if you ever swap the image.
- `expense-tracker.png` is a real screenshot of a private personal app, with the profile photo/partner's name hidden via a script before capture, showing only a generic (no dollar amounts) categories page.
- If you need to recapture any of these, do **not** run the real internal tools with real data for a public screenshot — see git history around the "Add project screenshots" commit for the sanitization approach used.

## Updating the CV PDF

Replace `/public/Daniel_Pinzon_CV.pdf` with the actual CV PDF before deploying; the current file is a placeholder (a minimal valid PDF, not the real CV).

## Setting the Formspree endpoint

Find `FORMSPREE_ENDPOINT` in [`components/ContactForm.tsx`](components/ContactForm.tsx) and replace it with your real Formspree form endpoint. It currently points to a non-functional placeholder.

## Deploy

Push to `main`; Vercel auto-deploys from the connected repository. Custom domain `danielpi.me` is connected in Vercel.

## Known open items

- CV PDF and Formspree endpoint are still placeholders (see above).
- `danielpi.me` threw `ERR_CERT_COMMON_NAME_INVALID` shortly after the domain was added to Vercel — likely still provisioning its TLS certificate; recheck if it persists.
- Open discussion, not yet decided: whether to keep specific partner/platform names (Microsoft ID@Xbox, Nintendo) in the About page bio, or generalize them (e.g., "major console and platform partners") given the site is public rather than a privately-shared CV PDF.
- `og-image.png` referenced in metadata (`app/layout.tsx`) doesn't exist yet — OpenGraph/Twitter card previews will be missing an image until one is added to `/public/`.
