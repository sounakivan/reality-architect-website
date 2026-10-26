# Sounak Ghosh — Portfolio

Portfolio for an XR designer & creative technologist, live at [hellosounak.com](https://hellosounak.com).

## Stack
- Next.js (App Router, static export) + Tailwind CSS v4, in `reality-architect-v2/`
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`

## Structure (`reality-architect-v2/src`)
- `data/projects.ts` — all case-study content, focus areas, display order and featured flags
- `data/site.ts` — name, availability line, contact links, nav
- `app/page.tsx` — homepage; `app/projects` — Work index + case studies; `app/about`; `app/contact`
- `components/` — `SiteNav`, `SiteFooter`, `ProjectCard`, `WorkGrid` (filters), `HudFrame`, `CaseStudyLayout`
- `app/globals.css` — design tokens (colors, fonts) in `@theme`
- `public/projects/` — project media; `public/sounak-ghosh-resume-2026.pdf`

## Content gaps
See `CONTENT_CHECKLIST.md`. Gaps are tracked per project as `todo` entries and shown as dashed notes in `npm run dev` only;
`draft: true` projects are excluded from the production build.

## Adding a project
Add an entry to `projects` in `data/projects.ts` (set `focus`, `highlight`, `caseStudyMeta`, `challenge`, `impact`, `content`),
then add its slug to the `order` list at the bottom of the file. Set `featured: true` to show it on the homepage.

## Run locally
```bash
cd reality-architect-v2
npm install
npm run dev        # http://localhost:3000
npm run build      # static output in out/
```

## Contact form
Uses [FormSubmit](https://formsubmit.co) — no backend required.
