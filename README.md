# NFL Photo Finder

An editorial style discovery app for NFL photography. It is built with Next.js App Router, TypeScript, Tailwind CSS, Lucide icons and browser localStorage. It is intended as a personal discovery and source linking tool: third party images remain credited to their original publishers and every result links back to its source.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run typecheck`, `npm run lint`, and `npm run build` for project checks. Copy `.env.example` to `.env.local` to configure optional integrations.

## MVP features

- Discover feed with 56 seeded records, responsive editorial masonry, search, facets, sort and natural language query parsing.
- Radar scan animation and API flow that simulates four source scans and ranks new results.
- Photo detail modal, source links, saved collection, preferences and recommendation scoring. Saves/preferences persist in this browser.
- JSON endpoints: `GET /api/photos`, `GET /api/search`, `POST /api/radar`, `GET|PUT /api/preferences`.
- Optional live Google Images search via SerpApi (`SERPAPI_KEY`). Without a key, the search API falls back to local fixtures. Search results link to their originating pages. Search provider results may not provide player/team metadata.
- Browser side MobileNet image classification on a selected image. It returns generic visual labels and does not identify players, positions, teams or verify NFL context.

## Sources and architecture

`src/types/photo.ts` defines the unified `PhotoItem`. Source adapters live under `src/lib/sources/`; `mock.ts` is the complete offline seed. `src/app/api/search/route.ts` contains the optional search provider adapter and normalizes results. `src/lib/search.ts` owns local query parsing/filtering; `src/lib/recommend.ts` owns ranking. UI components consume this normalized shape.

The current NFL, team, sports media and community source statuses and Radar results are simulations backed by mock records. No NFL/team publisher APIs or community API credentials are bundled. To connect them, add individual adapters in `src/lib/sources/` that map permitted metadata and publisher URLs into `PhotoItem`, then register those adapters in `/api/photos` and `/api/radar`. Set `SERPAPI_KEY` only on the server for live web image search. Respect publisher terms, attribution, robots policies and image rights; this product links out and does not provide bulk downloads.

## Delivery phases

1. **Frontend + Mock Data** — completed: feed, filters, ranking, detail, saved items, preferences, responsive shell and simulated radar.
2. **Real web search** — optional SerpApi Google Images adapter implemented. Configure `SERPAPI_KEY`; otherwise the experience remains fully usable offline.
3. **NFL / team / media sources** — normalized source boundary and source registry are ready. Source scanning currently uses mock data; individual publisher integrations require provider access/credentials and policy review.
4. **AI image classification** — browser MobileNet visual labels implemented. NFL specific player/action detection needs an appropriate model and should be added behind the same classification boundary.
5. Personalized recommendation with richer signals.
6. Automatic daily radar.
7. User accounts and cloud collections.

Longer term, a specialized model could analyze player detection, position, action type, image quality/composition/style and duplicates. This is a personal NFL photo intelligence direction; model outputs should be presented as suggestions until verified.
