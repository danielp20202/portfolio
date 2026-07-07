@AGENTS.md

# Project context for Claude

This is Daniel Pinzon's personal portfolio/CV site (Next.js App Router + TypeScript + Tailwind v4, no backend). Full docs live in [README.md](README.md) — read that first for site map, design system, and content sources. This file is session-to-session working notes.

## Status as of last session

Deployed to Vercel, connected to custom domain `danielpi.me`, auto-deploys on push to `main`. Working tree was clean (no uncommitted changes) as of the last commit `d07dc63`.

## Standing rules for this project

- **No em dashes anywhere in copy.** Use commas, periods, or semicolons. This was an explicit, repeated user instruction — check any new copy you write.
- **No dark mode, with one explicit exception.** The default ("Classic") theme has no `dark:` variants, that decision stands. However, the user explicitly requested and approved a dark alt-theme ("Night Shift") as one of three opt-in styles in the theme switcher (see below) — it's selectable, not the default, and that distinction matters if asked to touch dark-mode-adjacent code.
- **Heading hierarchy must be sequential (no h1→h3 skips).** This has bitten us before — a `.kicker` label sitting above nested `<h3>`s needs to itself be an `<h2>`, not a `<p>`. `.kicker` as a plain `<p>` is only correct when it directly precedes an `<h1>` (a tagline, not a section header).
- **Content accuracy**: `data/experience.ts` bio/skills/bullets were cross-checked against Daniel's real CV PDF (`/Users/danielpi/Documents/Claude/Projects/CV - Daniel 2026/Daniel_Pinzon_CustomerSuccess_Leader.pdf` at the time). If asked to update career facts, treat that PDF (or whatever the user provides fresh) as source of truth, not assumptions.
- **Never screenshot internal Unity tools with real data.** Three projects (Hook dashboard, PRM Hero Stories, H1 Check-in) are internal work tools with real customer/employee data. Their `public/projects/*.png` screenshots were captured from sanitized copies running fictional placeholder data in a scratch directory, never the real repos. If asked to update these screenshots, repeat that pattern: copy to a scratch dir, replace data files with obviously fake names/companies, scrub any embedded API keys/tokens (one was found live in `uai-config.js` during this work — always check for secrets before running a copy), screenshot, then delete the scratch copy. Also check for and preserve the "Screenshot shows sanitized example data..." disclosure rendered on those cards.
- **Formspree endpoint and CV PDF are still placeholders.** Don't remove the `// TODO` comment in `components/ContactForm.tsx` or treat `public/Daniel_Pinzon_CV.pdf` as real content.

## Sitewide theme switcher

Added a real (non-mockup) theme system, evolved from the 5 static `public/design-proposals/` concepts: the user picked concepts 2/3/4 and asked for them site-wide behind a small dropdown, with fun names. Architecture:

- `lib/themes.ts` — registry of theme ids/labels/blurbs. Names as of this session: **Classic** (default, id omitted/no `data-theme` attr), **Block Party** (`block-party`, ex-"Neo-Brutalist"), **Aurora** (`aurora`, ex-"Glass/SaaS"), **Night Shift** (`night-shift`, ex-"Dark Premium"). Renaming is just editing the `label` strings here.
- `components/ThemeProvider.tsx` — client context, persists to `localStorage["theme"]`, sets `data-theme` on `<html>`. Also exports `noFlashThemeScript`, an inline blocking `<script>` string injected as the first child of `<body>` in `app/layout.tsx` so a saved theme applies before first paint (standard `next-themes`-style no-flash pattern; `<html>` has `suppressHydrationWarning` for this reason).
- `components/ThemeSwitcher.tsx` — the actual dropdown (native `<select>`), rendered in `components/Nav.tsx` (desktop bar + mobile panel).
- `app/globals.css` — does almost all the actual re-skinning via `[data-theme="..."]` blocks that override the CSS variables already used everywhere (`--color-navy`, `--color-blue`, `--font-heading`, etc.) plus full rule overrides for `.card-surface`, `.btn`/`.btn-primary`/`.btn-ghost`/`.btn-accent`, `.site-header`, `.site-footer`, `.portrait-ring`. This works with almost no page-level changes because every page/component already funnels colors and card styling through this shared vocabulary — see the plan file this was built from (`shiny-brewing-flute.md` if it still exists in `~/.claude/plans/`) for the full reasoning.
- 3 extra `next/font/google` fonts loaded in `app/layout.tsx` (Archivo Black, Sora, IBM Plex Mono) purely for the alt themes; `--font-sans` (body text) intentionally stays Inter in every theme for readability, only headings/mono labels change per theme.
- `components/ThemeChrome.tsx` — an always-rendered, empty-by-default decorative div for Aurora's drifting gradient blobs (`display:none` unless `[data-theme="aurora"]`).

If asked to add a 4th/5th theme or rename these, the pattern is: add an entry to `lib/themes.ts`, then add one `[data-theme="..."]` block near the bottom of `globals.css` following the existing ones as a template.

## Known tooling quirk

The preview screenshot tool sometimes returns a blank white image when the page is scrolled away from `scrollY: 0`, even though the DOM content is correct (verified repeatedly via `getBoundingClientRect`/`elementFromPoint` in `preview_eval`). This is a tool/environment limitation, not a site bug. Workarounds that have worked: resize the viewport tall enough to fit the target content without scrolling, or reload immediately before scrolling. Don't conclude a layout is broken based on a blank screenshot alone — verify via DOM query first.

## Local dev server

A `.claude/launch.json` config named `cv-website-prod` exists (both in this repo and in the primary working directory `/Users/danielpi/Claude/.claude/launch.json`, which is where `preview_start` actually looks). It runs `npm run start` (production build), not `npm run dev` — rebuild with `npm run build` before restarting the server to pick up changes, since `next start` serves a static build snapshot.

## Open decisions (ask before acting)

- Whether to generalize "Microsoft (ID@Xbox)" and "Nintendo" in the About page bio to something like "major console and platform partners", given the site is now public at a real domain rather than a privately-shared CV PDF. Flagged, not yet decided as of last session.
