# Mario Quiroga — Portfolio

Personal landing page / portfolio for **Mario D. A. Quiroga**, Full Stack Engineer.
Plain HTML, CSS and JavaScript (no framework, no build step) served by **Cloudflare Workers Static Assets**.

- Bilingual: English / Spanish (auto-detected from the browser, toggle in the nav)
- Dark / light theme (follows the OS, toggle in the nav)
- Responsive, accessible (skip link, focus styles, `prefers-reduced-motion`)
- Downloadable CV in PDF
- ~0 JS dependencies at runtime: only Google Fonts are loaded from outside

## Stack

| Layer      | Choice                                   | Why                                                     |
| ---------- | ---------------------------------------- | ------------------------------------------------------- |
| Page       | Static HTML + CSS + vanilla JS           | A one-page landing doesn't need a framework or a build |
| Hosting    | Cloudflare Workers (Static Assets)       | Free tier, global CDN, HTTPS, custom domains            |
| CI/CD      | Cloudflare Workers Builds (GitHub)       | Every push to `main` deploys automatically              |
| Local dev  | Wrangler                                 | Runs the same Workers runtime locally                   |

## Project structure

```
.
├── public/                     # Everything here is served as-is
│   ├── index.html              # The landing (English content lives here)
│   ├── styles.css              # Design tokens + all styles
│   ├── main.js                 # i18n (Spanish strings), theme, animations
│   ├── 404.html                # Served for unknown routes
│   ├── favicon.svg
│   ├── img/mario.png           # Profile photo
│   └── Mario_Quiroga_CV_EN.pdf # Downloadable CV
├── wrangler.jsonc              # Worker config (assets-only Worker)
├── package.json                # dev / deploy scripts
├── AGENTS.md                   # Instructions for AI coding assistants
└── CLAUDE.md                   # Points Claude Code to AGENTS.md
```

## Run locally

Requirements: Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:8787.

## Deploy

### Option A — Automatic from GitHub (recommended)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Import a repository**.
3. Pick the repo. Use these settings:
   - **Project name:** `mario-quiroga-portfolio` (must match `name` in `wrangler.jsonc`)
   - **Build command:** _(leave empty)_
   - **Deploy command:** `npx wrangler deploy`
4. Deploy. The site will be live at `https://mario-quiroga-portfolio.<your-subdomain>.workers.dev`.

From then on, every `git push` to `main` redeploys the site.

### Option B — Manually from the terminal

```bash
npx wrangler login
npm run deploy
```

### Custom domain (optional)

Workers & Pages → your Worker → **Settings → Domains & Routes → Add → Custom domain**.
The domain must be managed by Cloudflare DNS.

## Editing content

- **English text:** edit it directly in `public/index.html`.
- **Spanish text:** edit the `ES` dictionary in `public/main.js`. Each key matches a
  `data-i18n="..."` attribute in the HTML. If a key is missing, the English text is shown.
- **Colors / fonts:** change the tokens at the top of `public/styles.css` (`:root` for dark,
  the `light` blocks for light mode).
- **CV:** replace `public/Mario_Quiroga_CV_EN.pdf` (keep the name or update the links).
- **Photo:** replace `public/img/mario.png` (square image, ~400×400 px or larger).

## Cost

Cloudflare's free plan covers this: requests for static assets are free and unlimited.
No Terraform needed for a single Worker; `wrangler.jsonc` already is the infrastructure as code.

## Contact

- Email: marioquiro17@gmail.com
- LinkedIn: [marioquiroga-1748b3193](https://www.linkedin.com/in/marioquiroga-1748b3193)
- GitHub: [MarioQuiroga](https://github.com/MarioQuiroga)
