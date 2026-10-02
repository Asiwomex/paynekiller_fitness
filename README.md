# PayneKiller Fitness

Marketing site for PayneKiller Fitness (Accra, Ghana). Next.js App Router, TypeScript, Tailwind CSS v4, GSAP + Lenis.

```bash
npm run dev     # local development
npm run build   # production build (all routes are static)
npm run lint
npm run media   # compress originals from media-src/ into public/media/
```

## Editing content

Everything a non-developer needs to change lives in `content/`:

| File | What it holds |
| --- | --- |
| `site.ts` | Name, phones, WhatsApp number, address, hours, socials, stats |
| `programs.ts` | The four programs, prices, doses |
| `schedule.ts` | Weekly timetable |
| `supplements.ts` | Product list and prices |
| `testimonials.ts` | Client quotes |
| `reels.ts` | Clips shown in The Feed |

Values marked `PLACEHOLDER` were invented for the first build and need real details.

## Adding a video

1. Put the original in `media-src/` (not committed to git).
2. Add it to the `clips` list in `scripts/optimize-media.mjs` (slug, loop start, poster time).
3. Run `npm run media`. It writes `<slug>.mp4` (full, with sound), `<slug>-loop.mp4` (muted 8s preview) and `<slug>.jpg` (poster) to `public/media/`.
4. Add an entry to `content/reels.ts`.

## Notes

- Every call to action goes to WhatsApp through `lib/whatsapp.ts`.
- Videos load only when near the viewport, and not at all under Save-Data or reduced motion (`components/ui/LazyVideo.tsx`).
