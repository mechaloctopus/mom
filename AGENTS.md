# Repository Guidelines

## Project Overview

A React SPA serving as a personal medical research journal — compiling treatment options, drug protocols, nutrition plans, and symptom tracking for a glioblastoma patient. Built with Vite + React 18, styled with Tailwind CSS, and deployed as static files to GitHub Pages.

## Project Structure & Module Organization

- **`src/App.jsx`** — Root layout. Defines the `Chapter` collapsible component (wraps every section) and the table of contents. All section imports are registered here.
- **`src/sections/`** — One file per content chapter (e.g., `DrugProtocol.jsx`, `NutritionProtocol.jsx`). Each exports a single default React component and is self-contained.
- **`src/pages/`** — Full-page views (`BiopsyMethodology.jsx`, `DoxycyclineAnomaly.jsx`) used outside the main chapter layout.
- **`src/components/`** — Shared UI primitives: `Cards.jsx` (card variants), `Navigation.jsx`, `XEmbed.jsx` (X/Twitter embed wrapper).
- **`docs/`** — Vite build output directory (committed for GitHub Pages). Do not edit manually.
- **`medical_data/`** — Source images referenced by `MedicalReports.jsx`.

New sections should be added to `src/sections/`, imported into `App.jsx`, and wrapped in a `<Chapter>` with the next Roman numeral.

## Build & Development Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Production build → docs/
npm run preview    # Preview production build locally
```

No test runner is configured.

## Coding Style & Naming Conventions

- **React**: Functional components only, hooks allowed. No class components.
- **Styling**: Tailwind CSS utility classes exclusively — no inline styles, no CSS modules. Custom palette tokens (`primary-*`, `warm-*`, `sage-*`) are defined in `tailwind.config.js`; dynamic color classes for `teal`, `pink`, `indigo`, `orange` are safelisted.
- **Icons**: `lucide-react` only.
- **Font**: Inter (set via Tailwind `fontFamily`).
- **No linter or formatter config** is present — follow the style of existing files.
- File names use PascalCase for components (`DrugProtocol.jsx`).

## Deployment

`vite.config.js` sets `base: './'` and `outDir: 'docs'` so the built site is served directly from the `docs/` folder on GitHub Pages. After `npm run build`, commit the updated `docs/` directory.
