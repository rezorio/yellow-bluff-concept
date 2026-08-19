# Dental Care on Yellow Bluff — concept redesign

Frontend-only Vue 3 mock for a cold-email pitch. It is **not** the live website and is not affiliated with Orahh Care, Heartland Dental, or AARP.

**Concept site:** [https://rezorio.github.io/yellow-bluff-concept/](https://rezorio.github.io/yellow-bluff-concept/)

Live practice: [dentalcareonyellowbluff.com](https://dentalcareonyellowbluff.com)

**Architecture, colors, type, and “where to edit”:** [docs/project.md](docs/project.md)

## What’s in this mock

- Home, Services, Team, and Visit pages
- Working `tel:` call links
- Request-a-visit form with a client-side success state (nothing is sent)
- Google Maps embed for 12517 Yellow Bluff Rd, Jacksonville, FL
- Concept banner so nobody confuses this with the real site

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Netlify)

```bash
npm run build
npx netlify deploy --dir=dist --prod
```

Or drag the `dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

After deploy, put the public URL in the cold email and say this is a **free concept mock**, not a live replacement.
