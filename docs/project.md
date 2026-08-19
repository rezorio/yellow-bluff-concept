---
title: Yellow Bluff Concept — Architecture & Design
doc: project-guide
status: pitch-mock
version: 0.1.0
updated: 2026-08-19
live: https://rezorio.github.io/yellow-bluff-concept/
source_site: https://dentalcareonyellowbluff.com
repo: https://github.com/rezorio/yellow-bluff-concept
practice: Dental Care on Yellow Bluff
city: Jacksonville, FL
phone: "(904) 204-7496"
stack:
  framework: Vue 3 (Composition API, <script setup>)
  bundler: Vite 8
  router: Vue Router 5 (history)
  css: Tailwind CSS 4 (@theme tokens)
  icons: "@lucide/vue"
scope: frontend-only
pages:
  - /
  - /services
  - /team
  - /visit
tokens:
  brand: "#0f6b73"
  brand-dark: "#0a555c"
  brand-deep: "#083f45"
  sand: "#c5b48a"
  mist: "#d7e6e5"
  cream: "#e4ebe9"
  card: "#f3eee4"
  ink: "#1a2423"
  ink-muted: "#44514f"
type:
  display: Fraunces
  body: Figtree
change_map:
  colors: src/style.css (@theme)
  fonts: index.html + src/style.css
  practice_copy: src/data/practice.js
  doctors: src/data/doctors.js
  services: src/data/services.js
  nav: src/data/nav.js
  routes: src/router/index.js
  layout: src/components/layout/
  home_sections: src/components/home/
  shared_ui: src/components/shared/
  pages: src/views/
  images: public/images/
  deploy_base: package.json (build:pages)
---

# Yellow Bluff concept site

Frontend-only pitch mock. Keep the Orahh Care teal / sand / charcoal so the office recognizes it. Do not add a backend, real booking, insurance lookup, search, or live chat.

Always keep the concept banner. This is not the live website.

## Change this first

| If you want to change… | Edit |
|---|---|
| Teal, sand, cream, ink | `src/style.css` `@theme` block, then use Tailwind classes (`bg-brand`, `text-ink`) |
| Heading / body fonts | Google Fonts link in `index.html` **and** `--font-serif` / `--font-sans` in `src/style.css` |
| Phone, address, hours, reviews | `src/data/practice.js` |
| Doctor names, quotes, photos | `src/data/doctors.js` + files in `public/images/` |
| Service list / homepage featured cards | `src/data/services.js` (`featured: true` shows on Home) |
| Nav labels / paths | `src/data/nav.js` **and** `src/router/index.js` |
| Page layout / new section | `src/views/*` + a component under `src/components/` |
| GitHub Pages URL prefix | `npm run build:pages` uses `--base=/yellow-bluff-concept/` |

Do not hardcode phone, hours, or doctor copy inside Vue files. Read from `src/data/`.

## Architecture

```
src/
  main.js                 # createApp + router + style.css
  App.vue                 # banner → header → <RouterView> → footer → sticky call bar
  router/index.js         # history mode, BASE_URL for GitHub Pages
  style.css               # Tailwind v4 tokens
  data/                   # all practice content
  components/layout/      # chrome
  components/home/        # homepage sections only
  components/shared/      # reuse across pages
  views/                  # one view per route
public/images/            # hero, office, doctor headshots
```

**Data flow:** views and sections import from `src/data/` → render shared cards/forms. `RequestVisitForm` validates in the browser and flips to a success state. Nothing is posted.

**Shell:** `App.vue` always renders `ConceptBanner`, `AppHeader`, `AppFooter`, `StickyCallBar` (mobile only). Main has `pb-28` so content clears the sticky bar.

**Routes**

| Path | View | Purpose |
|---|---|---|
| `/` | `HomeView.vue` | Hero, reviews, hours/map, doctors, 6 services, CTA form |
| `/services` | `ServicesView.vue` | Full service grid |
| `/team` | `TeamView.vue` | Two doctor cards (`detailed`) |
| `/visit` | `VisitView.vue` | Address, hours, map, form |
| `*` | redirect `/` | |

Unknown routes bounce home. Router uses `createWebHistory(import.meta.env.BASE_URL)` so nested GitHub Pages paths work.

## Design

Keep-brand pitch: same palette as the live Orahh Care template, cleaner hierarchy, real desktop nav, stronger reviews.

### Color

Defined in `src/style.css`. Tailwind classes match the token name (`bg-brand`, `text-sand`, `bg-cream`).

| Token | Hex | Use |
|---|---|---|
| `brand` | `#0f6b73` | Buttons, links, icon wells, 4px header strip |
| `mist` | `#d7e6e5` | Alternate section fills (services) |
| `sand` | `#c5b48a` | Stars, Popular badge, labels on teal |
| `cream` | `#e4ebe9` | Page background |
| `card` | `#f3eee4` | Solid cards (`.card`) |
| `ink` | `#1a2423` | Type, footer |

Locked Mist direction. No theme switcher. Section rhythm: cream → mist → cream → photo → teal visit → cream.

### Style

- Glass (`.glass-frost`) only on the hero copy panel and reviews pill
- All other cards: `.card` (solid off-white)
- Visit hours: solid `bg-brand`
- Header: sticky cream + 4px teal identity strip
- Radius: `rounded-lg` / `rounded-2xl`
- Buttons: 44px, `rounded-lg`

### Type

| Role | Font | Tailwind |
|---|---|---|
| Display / H1–H3 | Fraunces 500–700 | `font-serif` |
| UI / body | Figtree 400–700 | `font-sans` (default) |
| Eyebrows | Figtree, 11–12px, uppercase, wide tracking | `text-xs font-semibold uppercase tracking-[0.2em]` |

Loaded from Google Fonts in `index.html`. Headings stay serif; do not put long paragraphs in Fraunces. Fraunces is warmer and more “care” than Playfair. Figtree has a large x-height so hours and phone numbers stay readable.

### Shape & motion

- Max width: `max-w-6xl` with `px-4 sm:px-6`
- Buttons / chips: `rounded-full`, height `h-11` or `h-12` (44px+ tap)
- Cards: `rounded-3xl`, white, light ring/shadow
- Hero photo: arch (`rounded-t-[12rem] rounded-b-3xl`)
- Header is sticky; mobile call bar is `fixed` bottom with iOS safe-area padding

### Components to reuse

- `SectionHeading` — eyebrow + serif title + copy
- `PageHero` — inner-page title band (`bg-sand-light`)
- `ServiceCard` / `DoctorCard` — grids
- `RequestVisitForm` — Home CTA and Visit page
- `SiteLogo` — `light` prop on ink backgrounds

## Content rules

- Phone: `(904) 204-7496` / `tel:+19042047496`
- Address: 12517 Yellow Bluff Rd, Jacksonville, FL 32226
- Reviews: 4.6 / 871 Google
- Hours: Mon/Wed/Thu/Fri 8–5, Tue 9–5, Sat/Sun closed (America/New_York)
- Doctors: Lorraine Polite-Clark, DMD and Chloe Ways, DMD
- Form is a demo: success copy must say nothing was sent

## Deploy

- Local: `npm run dev` (base `/`)
- GitHub Pages: `npm run build:pages` then publish `dist/` (base `/yellow-bluff-concept/`)
- Netlify: `npm run build` (base `/`) + `netlify.toml` SPA redirect
