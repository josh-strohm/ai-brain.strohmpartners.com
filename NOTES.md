# NOTES — Company Brain Starter Landing Page

## Copy decisions

- Lead with owner-bottleneck pain: "You're Tired of Being the Company Manual."
- Keep language plain for first-time AI buyers.
- Sell **Company Brain Pilot** as the front door, not a big enterprise package.
- Packaging order on page: Pilot → Starter Build → Brain Care Lite.
- No fake testimonials, logos, or fabricated ROI numbers.
- Pattern interrupt used in pain section: "You don't need more folders..."

## Headline variants (in HeroSection comments)

1. You're Tired of Being the Company Manual. (shipped)
2. Stop Answering the Same Questions. Build a Company Brain Instead.
3. Turn "Ask the Owner" Into "Ask the Brain."
4. AI That Knows How Your Business Works — Without the Tech Headache.

## Where to plug production values

| Item | File | Field / note |
|------|------|--------------|
| Form provider | `src/config/site.ts` | `formEndpoint` |
| Calendar booking | `src/config/site.ts` | `calendarUrl` |
| Public email | `src/config/site.ts` | `email` |
| Brand strings | `src/config/site.ts` | `brand`, `offer`, CTAs |
| Analytics | `src/app/layout.tsx` | add script/tag after provider choice |

If `formEndpoint` is empty, the form validates and logs a placeholder success in the browser console so local demos still work.

## Design system

- Navy/charcoal + warm amber accent
- Cream background (operator brand, not purple AI cliché)
- CSS variables in `src/app/globals.css`
- Fonts: Fraunces (headings) + DM Sans (body)

## Assumptions

- Single landing page route is the product for V1
- No backend / auth / dashboard
- Local/regional service-business audience with little AI experience
- Pilot-first monetization path from the redesigned offer brief

## Suggested next polish

1. Replace placeholders with real form + calendar endpoints
2. Add favicon + OG image
3. Add real testimonials after first pilots
4. Optional A/B hero config from NOTES headline variants
