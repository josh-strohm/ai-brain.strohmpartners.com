# Company Brain Starter Landing Page

High-converting single-page marketing site for the **Company Brain Starter** offer from Strohm Partners.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Quick start

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
cd web
npm run build
npm start
```

## Deploy (Vercel)

1. Import the `web` folder (or monorepo root with `web` as the app root).
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output: Next.js default

## Customize before traffic

Edit `src/config/site.ts`:

- `formEndpoint` — Formspree / HubSpot / Tally endpoint
- `calendarUrl` — Cal.com / Calendly link
- `email` — public contact email
- CTA labels / brand strings if needed

Form submission lives in `src/components/LeadForm.tsx`.

## Project structure

```text
web/
  src/
    app/                 # layout, page, global styles
    components/          # shared UI + section components
    config/site.ts       # brand + CTA + endpoint placeholders
    lib/utils.ts
```

## Related docs

Offer source of truth lives one level up:

- `../Company-Brain-SOP-Agent-Offer-Brief.md`
- `../Grok-4.5-Company-Brain-Landing-Page-Prompt.md`
