# SignalScout

SignalScout is a Next.js dashboard for tracking early-stage AI companies, reviewing deal signals, and keeping a lightweight research watchlist. The app is currently backed by local TypeScript data files, so it runs without a database or external API.

## What This Project Does

- Shows the Startup Pipeline at `/` with startup names, descriptions, founding year, AI score, and AI stack.
- Opens detailed Deal Profiles at `/companies/[slug]` with company metadata, founder information, AI-generated style summaries, and radar scoring.
- Tracks AI research in the Research Watchlist at `/papers` with paper cards, trend visualization, timeline visualization, arXiv links, and related GitHub/project links.
- Displays Sourcing Analytics at `/analytics` using Recharts cards for reviewed startups, average scores, progress, category mix, radar metrics, and founder response rate.
- Uses a responsive sidebar/header layout with shadcn-style UI primitives, Radix UI, Tailwind CSS, lucide icons, and local image assets.

## Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Startup Pipeline and paginated sourcing table |
| `/companies/[slug]` | Deal Profile for one company from `data/companies.ts` |
| `/papers` | Research Watchlist sorted by paper date |
| `/analytics` | Sourcing Analytics dashboard |

Example company detail URLs include:

- `/companies/landscape`
- `/companies/brainbase`
- `/companies/retellai`
- `/companies/quno`

## Data Sources

The app uses local static data:

- `data/companies.ts` contains company records, founders, funding, stage, AI stack, summaries, and scoring dimensions.
- `data/papers.ts` contains research paper metadata, author lists, arXiv links, project links, categories, images, and helper stats.
- `public/companies/*` stores company logos.
- `public/papers/*` stores paper thumbnails.
- `public/icons/*` stores category and external-link icons.
- `public/users/jay-icon.png` is used as the current avatar in the header.

To add a new company, add a record to the `companies` array in `data/companies.ts`, give it a unique `slug`, and add a logo under `public/companies` if needed. The company will appear in the Startup Pipeline and its Deal Profile will be available at `/companies/<slug>`.

To add a new paper, add a record to the `papers` array in `data/papers.ts` and place any thumbnail under `public/papers`.

## Tech Stack

- Next.js 15 App Router
- React 18
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Recharts
- lucide-react icons
- better-react-mathjax for math rendering support

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start the production build:

```bash
npm run start
```

## Project Structure

```text
app/
  page.tsx                 Startup Pipeline
  analytics/page.tsx       Sourcing Analytics dashboard
  papers/page.tsx          Research Watchlist
  companies/[slug]/page.tsx
components/
  providers/               App-level providers
  ui/                      Reusable UI components and charts
data/
  companies.ts             Static company/deal data
  papers.ts                Static research paper data
public/
  companies/               Company logos
  papers/                  Paper thumbnails
  icons/                   UI and category icons
  users/                   User avatar assets
```

## Notes and Current Limitations

- Search inputs are present in the UI but are not wired to filtering logic yet.
- Several sidebar/mobile navigation items are placeholders that link to `#`.
- Company save/delete/account actions are UI-only and do not persist changes.
- Analytics charts currently use hard-coded sample data rather than computed live data.
- There is no database, authentication, or backend API in the current implementation.

## Useful Development Commands

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run start    # Serve the production build
npm run lint     # Run the configured lint command
```
