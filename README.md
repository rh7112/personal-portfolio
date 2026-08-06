# Personal Portfolio

A Next.js application for my personal portfolio, styled with Tailwind CSS. Content (employers, projects, education, certifications, blog posts, recipes) is stored in a MariaDB database and falls back to hard-coded defaults in [`src/lib/portfolio-data.js`](src/lib/portfolio-data.js) when the database is unreachable.

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

3. Copy `.env.example` (or create `.env`) with your `PORTFOLIO_DB_*` values if you want to develop against a real database. Without it, the app runs on the fallback content.

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Tech Stack

- **Next.js**: statically exported (`output: "export"`) React framework.
- **Tailwind CSS**: utility-first CSS framework.
- **MariaDB**: content storage, queried at build time.

## Deployment

The site is statically exported (`npm run build` produces the `out/` directory) and deployed to Cloudflare Pages via Wrangler (see [`wrangler.jsonc`](wrangler.jsonc)), served at `ryan.hurd.cc`.

Because content lives in a database rather than in the built HTML's source code, a scheduled GitHub Actions workflow ([`.github/workflows/scheduled-rebuild.yml`](.github/workflows/scheduled-rebuild.yml)) triggers a Cloudflare Pages rebuild hook hourly, so database edits show up on the site without a code push.

Database schema and seed data live in [`docs/mariadb-setup.sql`](docs/mariadb-setup.sql), with incremental schema changes tracked in [`docs/migrations/`](docs/migrations).

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
