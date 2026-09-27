# PropManager — Property Management Dashboard

A **property and maintenance management dashboard** for landlords and facility managers: track properties, log repairs and work orders, manage contractors, and keep a parts inventory — all in one clean interface.

> **Live demo:** https://girishlade111.github.io/property-management/
>
> *Note: the UI is in Spanish ("PropManager — Sistema de gestión de inmuebles y mantenimiento"); the code and this README are in English.*

## What it does

- **Dashboard** — at-a-glance stats: total properties, pending repairs, active contractors, parts in inventory
- **Properties** — property listings and detail views
- **Repairs** — maintenance / work-order tracking (plumbing, electrical, painting, HVAC, etc.)
- **Contractors** — contractor directory and management
- **Parts** — spare-parts inventory tracking
- Landing page with feature cards linking into each module

> Note: the app currently renders **static mock data** — there is no backend. Data is hardcoded in the page components; connect your own API or database to make it live.

## Features

- Dashboard with summary stat cards
- Property, repair, contractor, and parts sections under `/dashboard`
- Responsive sidebar navigation
- Dark / light theme toggle (next-themes)
- shadcn/ui component library (Radix UI primitives)

## Tech stack

- **Framework:** Next.js 15 (App Router, static export)
- **UI:** React 19, Tailwind CSS 3, shadcn/ui (Radix UI), lucide-react icons
- **Forms & utils:** react-hook-form, zod, date-fns, cmdk, vaul, sonner
- **Charts:** Recharts (dependency installed)
- **Analytics:** Vercel Analytics

## Quick start

```bash
# install dependencies
npm install --legacy-peer-deps

# run the dev server
npm run dev
# open http://localhost:3000
```

Build a production static bundle (exports to `./out`):

```bash
npm run build
```

Then serve the `out/` directory with any static server, e.g. `npx serve out`.

## Project structure

```
app/
  page.tsx                 # Landing page
  layout.tsx               # Root layout
  dashboard/
    layout.tsx             # Dashboard shell (sidebar nav)
    page.tsx               # Stats dashboard
    properties/page.tsx    # Property listings
    repairs/page.tsx       # Work orders / repairs
    contractors/page.tsx   # Contractor directory
    parts/page.tsx         # Parts inventory
components/                # UI components (incl. shadcn/ui in components/ui/)
lib/                       # Shared utilities
public/                    # Static assets
```

## Environment variables

None required. Fully static, no backend, no API keys.

## Deployment

The app uses `output: 'export'` in `next.config.mjs`, so it deploys as plain static files.

- **GitHub Pages:** this repo auto-deploys `out/` to the `gh-pages` branch → https://girishlade111.github.io/property-management/
- **Any static host** (Netlify, Cloudflare Pages, Vercel, nginx): run `npm run build` and serve `out/`.

> **Note on `basePath`:** `next.config.mjs` sets `basePath: '/property-management'` so assets resolve under the GitHub Pages sub-path. If you deploy to a custom domain or root path (e.g. Vercel), **remove the `basePath` line** before building.

## Security notes

- Next.js is pinned at **15.2.8+** (patched against CVE-2025-55182 React2Shell and related 2025 advisories — 15.2.4 is affected).

---

Built by Girish Lade — https://ladestack.in
