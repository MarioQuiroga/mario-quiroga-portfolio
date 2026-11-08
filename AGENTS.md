# AGENTS.md — instructions for AI coding assistants

This repository is the personal portfolio of Mario D. A. Quiroga (Full Stack Engineer).
It is a **static site** served by a **Cloudflare Workers assets-only Worker**.

## Hard rules

- **No frameworks, no bundler, no build step.** Plain HTML + CSS + vanilla JS only.
  Do not add React, Next.js, Tailwind, TypeScript compilation or npm runtime dependencies.
  `wrangler` is the only (dev) dependency.
- **Everything served lives in `public/`.** Paths in HTML are root-relative (`/styles.css`).
- **Do not add a Worker script (`main`) to `wrangler.jsonc`** unless explicitly asked.
  If server logic is ever needed (e.g. a contact form), add `src/index.js`, set `"main"`,
  and set `"assets": { "binding": "ASSETS", ... }` so static files keep being served.
- **Keep `name` in `wrangler.jsonc` equal to the Worker name in the Cloudflare dashboard**
  (`mario-quiroga-portfolio`), otherwise Workers Builds deployments fail.
- **Never publish the phone number** from the CV. Email, LinkedIn and GitHub are the public contacts.
- **Do not invent facts.** All career content must come from the CV
  (`public/Mario_Quiroga_CV_EN.pdf`). Numbers to keep exact: 5+ years, ~5M monthly conversations,
  58M+ conversations in 2022, 100+ partners, 4 betting platforms, 4 engineers mentored.

## Bilingual content (EN / ES)

- English is the source text, written directly in `public/index.html`.
- Every translatable element has `data-i18n="some.key"`.
- Spanish lives in the `ES` object in `public/main.js`, keyed by the same `some.key`.
- **When you add or change visible text, update both languages.** Spanish uses Argentine
  voseo where it addresses the reader ("Contactame", not "Contáctame").
- Values may contain inline HTML (e.g. `<strong>`); escape `&` as `&amp;`.

## Styling

- Design tokens are CSS custom properties at the top of `public/styles.css`.
  Dark is the default; light is defined twice (OS preference + `[data-theme="light"]`) —
  keep both blocks in sync when changing a color.
- Never hard-code colors in components; use the tokens.
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/code).
- Must work at 360 px wide with no horizontal scroll. Breakpoints: 960 px and 720 px.
- Respect `prefers-reduced-motion` (already handled globally — don't bypass it).
- Elements with class `reveal` fade in on scroll via `IntersectionObserver` in `main.js`;
  they are only hidden when the `js` class is on `<html>`, so the page works without JS.

## Accessibility

- Keep semantic landmarks (`header`, `main`, `section`, `footer`), one `h1`, ordered headings.
- Icon-only buttons and links need `aria-label`. Decorative SVGs get `aria-hidden="true"`.
- External links use `target="_blank" rel="noopener"`.

## Commands

```bash
npm install      # once
npm run dev      # local server on http://localhost:8787 (Workers runtime)
npm run deploy   # manual deploy (normally CI deploys on push to main)
```

## Before finishing a change

1. Run `npm run dev` and check the page in both languages and both themes.
2. Check mobile width (≈375 px) for overflow.
3. Make sure no console errors appear.
