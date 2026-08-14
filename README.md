# Personal Portfolio

A Next.js application for my personal portfolio, styled with Tailwind CSS. Homepage content, projects, employers, education, and certifications are fetched at build time from [`portfolio-api`](https://github.com/rh7112/portfolio-api), a Go REST API backed by MariaDB. Blog posts and recipes still query MariaDB directly (see "Blog/recipes" below) until they move to `blog.hurd.cc`. Everything falls back to hard-coded defaults in [`src/lib/portfolio-data.js`](src/lib/portfolio-data.js) when its data source is unreachable.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/rh7112/personal-portfolio.git
```

2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` (or create `.env`) and fill in:
   - `PORTFOLIO_API_BASE_URL` — base URL of a running `portfolio-api` instance (e.g. `https://api.hurd.cc`), for homepage/projects/employers/education/certifications.
   - `PORTFOLIO_DB_*` — direct MariaDB connection, used only by blog posts/recipes for now.
   - `PSN_TROPHIES_ENABLED` / `PSN_NPSSO` — optional, for the "Outside of work" PlayStation trophies section (see `src/lib/psn-data.js` for how to get an NPSSO token). The section is off by default (`PSN_TROPHIES_ENABLED=false`/unset) even with a token present -- set it to `true` when ready to actually show it.

   All of these can be omitted; the app falls back to hard-coded content (or hides the PSN section) for whatever's unreachable.

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Tech Stack

- **Next.js**: statically exported (`output: "export"`) React framework.
- **Tailwind CSS**: utility-first CSS framework.
- **portfolio-api**: Go REST API (MariaDB-backed) that serves homepage/projects/employers/education/certifications content at build time.
- **MariaDB**: queried directly (not via the API) for blog posts/recipes only, for now.

## Deployment

The site is statically exported (`npm run build` produces the `out/` directory) and deployed to Cloudflare Pages via Wrangler (see [`wrangler.jsonc`](wrangler.jsonc)), served at `ryan.hurd.cc`. The Cloudflare Pages project needs `PORTFOLIO_API_BASE_URL` and the `PORTFOLIO_DB_*` vars set in its environment for production builds to pull live content instead of falling back.

Because content lives in a database rather than in the built HTML's source code, a scheduled GitHub Actions workflow ([`.github/workflows/scheduled-rebuild.yml`](.github/workflows/scheduled-rebuild.yml)) triggers a Cloudflare Pages rebuild hook hourly, so content edits show up on the site without a code push.

Database schema and seed data live in [`docs/mariadb-setup.sql`](docs/mariadb-setup.sql), with incremental schema changes tracked in [`docs/migrations/`](docs/migrations). This covers the blog posts/recipes tables still queried directly; schema for everything served via `portfolio-api` now lives in that project instead.

## Blog/recipes

`/blog` and `/recipes` still live in this repo and query MariaDB directly — they haven't moved to `portfolio-api` yet. They're slated to move to a separate site at `blog.hurd.cc` (not live yet), at which point these sections and their data-fetching code will be removed from here in favor of linking out.

## Customization

- **Tailwind config**: [`tailwind.config.js`](tailwind.config.js)
- **Next.js config**: [`next.config.mjs`](next.config.mjs)

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Acknowledgements

- Kiosk Photo by <a href="https://unsplash.com/@paul_siewert?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Siewert</a> on <a href="https://unsplash.com/photos/a-display-case-filled-with-lots-of-drinks-QjFfLfa9qWA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Turkey Photo by <a href="https://unsplash.com/@heathergill">Heather Gill</a> on <a href="https://unsplash.com/photos/a-group-of-chickens-in-a-fenced-in-area-o9vQS5XXaAM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- In-House Credit Photo by <a href="https://unsplash.com/@leekos">Kostiantyn Li</a> on <a href="https://unsplash.com/photos/a-house-made-out-of-money-on-a-white-background-1sCXwVoqKAw">Unsplash</a>
- Search Miner Photo by <a href="https://unsplash.com/@rlldied">Valeria Nikitina</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-button-on-a-wall-n99YXHGyQj8">Unsplash</a>
- Personal Portfolio Photo by <a href="https://unsplash.com/@ilyapavlov">Ilya Pavlov</a> on <a href="https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw">Unsplash</a>
- Mentor Management Photo by <a href="https://unsplash.com/@gettyimages">Getty Images</a> on <a href="https://unsplash.com/photos/group-of-people-analysis-business-accounting-working-with-individual-income-tax-return-accounting-concept-discussion-meeting-concept-iquyJ5GbsEg">Unsplash</a>
- Website Development Photo by <a href="https://unsplash.com/@carzmaiquez">Carriza Maiquez</a> on <a href="https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-wooden-table-IiHHmOcnnSA">Unsplash</a>
- Gear Exchange Photo by <a href="https://unsplash.com/@fiveinthemorning?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">T O</a> on <a href="https://unsplash.com/photos/a-group-of-guitars-on-display-cuBfRZ5TA50?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Tax Exemptoin Photo by <a href="https://unsplash.com/@walkingondream?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Olga DeLawrence</a> on <a href="https://unsplash.com/photos/black-and-silver-pen-on-white-paper-5616whx5NdQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Consumer Audio Photo by <a href="https://unsplash.com/@saif71?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Saif71.com</a> on <a href="https://unsplash.com/photos/white-round-ornament-on-black-and-brown-surface-zaykvAcGRks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Forget Me Nots Photo by <a href="https://unsplash.com/@robpumphrey?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rob Pumphrey</a> on <a href="https://unsplash.com/photos/white-and-blue-flowers-with-green-leaves-QHWFAlp3idg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Cafe Photo by <a href="https://unsplash.com/@abdslll?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Azizov Azim</a> on <a href="https://unsplash.com/photos/a-coffee-shop-with-a-neon-sign-above-it-kE7ZrYzmgNk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Salon & Spa Photo by <a href="https://unsplash.com/@atikahakhtar?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Atikah Akhtar</a> on <a href="https://unsplash.com/photos/black-office-rolling-chair-beside-white-wooden-desk-hOk9aETAS7Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Deals Photo by <a href="https://unsplash.com/@markuswinkler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Markus Winkler</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-scrabble-type-word-on-a-table-wczwcPl1gEo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Gitlab Photo by <a href="https://unsplash.com/@pankajpatel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pankaj Patel</a> on <a href="https://unsplash.com/photos/gitlab-application-screengrab-ZV_64LdGoao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Flashcards Photo by <a href="https://unsplash.com/@kelsymichael?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kelsy Gagnebin</a> on <a href="https://unsplash.com/photos/a-pair-of-glasses-8uMlIEJe6cU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Dice Photo by <a href="https://unsplash.com/@aakashdhage?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aakash Dhage</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-dice-l5IfKMJVTFs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Accessibility Photo by <a href="https://unsplash.com/@introspectivedsgn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Erik Mclean</a> on <a href="https://unsplash.com/photos/accessible-signage-LJVieYcw56g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Cookout Photo by <a href="https://unsplash.com/@rosssneddon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ross Sneddon</a> on <a href="https://unsplash.com/photos/a-person-is-cooking-food-on-a-grill-vZL0umR59gk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
