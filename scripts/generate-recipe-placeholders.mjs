// One-off generator for recipe placeholder SVGs (public/images/recipes/*.svg).
// Run with: node scripts/generate-recipe-placeholders.mjs
import { mkdirSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images", "recipes");
mkdirSync(outDir, { recursive: true });

const CREAM = "#f5f0e6";
const RUST = "#c2410c";
const RUST_SOFT = "#ea580c";
const INK = "#44403c";

// Each icon is a self-contained group of paths/shapes centered on (600, 330),
// drawn in RUST/RUST_SOFT/INK on the cream card background.
const icons = {
  pasta: `
    <ellipse cx="600" cy="380" rx="170" ry="42" fill="${RUST_SOFT}" opacity="0.15"/>
    <path d="M460 360 Q480 250 560 300 Q600 240 640 300 Q720 250 740 360" fill="none" stroke="${RUST}" stroke-width="10" stroke-linecap="round"/>
    <path d="M470 380 Q560 330 600 380 Q640 330 730 380" fill="none" stroke="${RUST_SOFT}" stroke-width="10" stroke-linecap="round"/>
    <path d="M600 200 L600 420" stroke="${INK}" stroke-width="12" stroke-linecap="round"/>
    <path d="M582 200 L582 260 M600 200 L600 260 M618 200 L618 260" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
  `,
  chicken: `
    <path d="M540 250 C480 250 460 320 500 370 C470 400 480 440 520 440 C560 440 640 440 660 410 C700 420 730 380 700 340 C730 300 700 250 640 260 C620 230 570 230 540 250 Z" fill="${RUST_SOFT}" opacity="0.9"/>
    <path d="M520 300 L540 320 M560 290 L580 315 M600 290 L615 318" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
  `,
  pita: `
    <path d="M470 260 Q600 220 730 260 L710 400 Q600 440 490 400 Z" fill="${RUST_SOFT}" opacity="0.85"/>
    <path d="M500 300 Q600 340 700 300" stroke="${CREAM}" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M510 340 Q600 375 690 340" stroke="${CREAM}" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle cx="560" cy="290" r="8" fill="${RUST}"/>
    <circle cx="620" cy="310" r="8" fill="${RUST}"/>
    <circle cx="650" cy="270" r="8" fill="${RUST}"/>
  `,
  cheese: `
    <path d="M470 400 L560 260 L730 300 L700 400 Z" fill="${RUST_SOFT}" opacity="0.9"/>
    <circle cx="620" cy="350" r="10" fill="${CREAM}"/>
    <circle cx="660" cy="320" r="7" fill="${CREAM}"/>
    <circle cx="590" cy="310" r="6" fill="${CREAM}"/>
    <path d="M540 240 Q560 200 580 240 M580 230 Q600 190 620 230 M615 240 Q635 200 655 240" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round" opacity="0.6"/>
  `,
  smokedMeat: `
    <path d="M480 400 Q470 300 560 280 Q600 260 640 280 Q730 300 720 400 Q600 430 480 400 Z" fill="${RUST}" opacity="0.9"/>
    <path d="M520 330 Q600 350 680 330" stroke="${CREAM}" stroke-width="6" fill="none" opacity="0.6"/>
    <path d="M540 220 Q560 170 540 130 M600 220 Q620 160 600 110 M660 220 Q680 170 660 130" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round" opacity="0.45"/>
  `,
  pulledPork: `
    <path d="M480 380 Q500 320 550 340 Q560 300 610 320 Q640 290 680 320 Q730 330 720 380 Q600 420 480 380 Z" fill="${RUST}" opacity="0.9"/>
    <path d="M520 360 L540 350 M560 370 L580 355 M610 365 L630 350 M650 372 L670 358" stroke="${CREAM}" stroke-width="6" stroke-linecap="round"/>
  `,
  turkey: `
    <path d="M600 240 C650 240 670 300 650 340 C680 360 670 410 620 410 C610 430 580 430 570 410 C530 405 520 360 550 340 C530 300 550 240 600 240 Z" fill="${RUST_SOFT}" opacity="0.9"/>
    <path d="M570 400 L555 440" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>
  `,
  ham: `
    <path d="M540 260 Q680 260 700 340 Q680 420 540 420 Q490 340 540 260 Z" fill="${RUST}" opacity="0.9"/>
    <path d="M560 290 L680 320 M555 330 L685 355 M560 370 L670 395" stroke="${CREAM}" stroke-width="5" stroke-linecap="round" opacity="0.7"/>
  `,
  steak: `
    <path d="M480 260 Q560 230 650 260 Q740 290 700 360 Q660 420 560 410 Q470 400 460 340 Q460 290 480 260 Z" fill="${RUST}" opacity="0.9"/>
    <path d="M510 290 L680 320 M500 330 L690 360 M520 370 L650 390" stroke="${INK}" stroke-width="6" stroke-linecap="round" opacity="0.5"/>
  `,
  sandwich: `
    <path d="M470 320 L730 320 L710 400 L490 400 Z" fill="${RUST_SOFT}" opacity="0.9"/>
    <path d="M470 320 Q600 270 730 320" fill="none" stroke="${RUST}" stroke-width="14" stroke-linecap="round"/>
    <path d="M500 340 L700 340 M510 365 L690 365" stroke="${CREAM}" stroke-width="6" stroke-linecap="round" opacity="0.7"/>
  `,
  carrots: `
    <path d="M560 260 L640 260 L610 400 Q600 420 590 400 Z" fill="${RUST_SOFT}" opacity="0.9"/>
    <path d="M570 260 Q555 210 520 200 M600 258 Q600 200 600 180 M630 260 Q650 210 685 200" fill="none" stroke="${INK}" stroke-width="8" stroke-linecap="round" opacity="0.6"/>
    <ellipse cx="600" cy="420" rx="140" ry="24" fill="${RUST}" opacity="0.25"/>
  `,
  pupusa: `
    <ellipse cx="600" cy="330" rx="110" ry="70" fill="${RUST_SOFT}" opacity="0.9"/>
    <ellipse cx="600" cy="330" rx="70" ry="42" fill="${CREAM}" opacity="0.5"/>
    <ellipse cx="600" cy="420" rx="150" ry="26" fill="${RUST}" opacity="0.2"/>
  `,
  quinoaBowl: `
    <path d="M470 320 Q470 420 600 420 Q730 420 730 320 Z" fill="${RUST_SOFT}" opacity="0.85"/>
    <ellipse cx="600" cy="320" rx="130" ry="30" fill="${RUST}" opacity="0.6"/>
    <circle cx="560" cy="315" r="6" fill="${CREAM}"/>
    <circle cx="600" cy="310" r="6" fill="${CREAM}"/>
    <circle cx="640" cy="317" r="6" fill="${CREAM}"/>
  `,
  medBowl: `
    <path d="M470 320 Q470 420 600 420 Q730 420 730 320 Z" fill="${RUST_SOFT}" opacity="0.85"/>
    <ellipse cx="600" cy="320" rx="130" ry="30" fill="${RUST}" opacity="0.5"/>
    <circle cx="560" cy="350" r="12" fill="${INK}" opacity="0.7"/>
    <circle cx="600" cy="365" r="12" fill="${INK}" opacity="0.7"/>
    <circle cx="640" cy="350" r="12" fill="${INK}" opacity="0.7"/>
  `,
  popcorn: `
    <path d="M520 300 L680 300 L660 420 L540 420 Z" fill="${RUST_SOFT}" opacity="0.9"/>
    <path d="M520 300 L540 260 L660 260 L680 300 Z" fill="${RUST}"/>
    <circle cx="560" cy="260" r="16" fill="${CREAM}"/>
    <circle cx="600" cy="250" r="18" fill="${CREAM}"/>
    <circle cx="640" cy="262" r="16" fill="${CREAM}"/>
    <circle cx="580" cy="280" r="14" fill="${CREAM}"/>
    <circle cx="620" cy="280" r="14" fill="${CREAM}"/>
  `,
  cake: `
    <path d="M480 380 L720 380 L700 300 L500 300 Z" fill="${RUST_SOFT}" opacity="0.9"/>
    <path d="M480 380 L720 380 L710 420 L490 420 Z" fill="${RUST}"/>
    <circle cx="600" cy="270" r="18" fill="${RUST}"/>
    <path d="M600 252 Q610 230 600 210" stroke="${INK}" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.6"/>
    <circle cx="540" cy="330" r="10" fill="${CREAM}" opacity="0.8"/>
    <circle cx="660" cy="330" r="10" fill="${CREAM}" opacity="0.8"/>
  `,
};

const recipes = [
  { slug: "butter-and-cheese-pasta", title: "Fettuccine with Butter and Cheese", icon: "pasta" },
  { slug: "blackened-chicken-breast", title: "Blackened Chicken Breast", icon: "chicken" },
  { slug: "blackened-chicken-spinach-blue-cheese-quinoa", title: "Blackened Chicken over Quinoa", icon: "quinoaBowl" },
  { slug: "blackened-chicken-pita-pockets", title: "Blackened Chicken Pita Pockets", icon: "pita" },
  { slug: "cold-smoked-cheese", title: "Cold-Smoked Cheese", icon: "cheese" },
  { slug: "smoked-brisket", title: "Smoked Brisket", icon: "smokedMeat" },
  { slug: "smoked-pork-shoulder", title: "Smoked Pork Shoulder", icon: "pulledPork" },
  { slug: "smoked-turkey", title: "Smoked Turkey", icon: "turkey" },
  { slug: "smoked-ham", title: "Smoked Ham", icon: "ham" },
  { slug: "marinated-steak", title: "Marinated Steak", icon: "steak" },
  { slug: "italian-beef-sandwiches", title: "Italian Beef Sandwiches", icon: "sandwich" },
  { slug: "honey-roasted-carrots-farro", title: "Honey-Roasted Carrots with Farro", icon: "carrots" },
  { slug: "costco-pupusa-bowls", title: "Costco Pupusa Bowls", icon: "pupusa" },
  { slug: "broth-cooked-quinoa", title: "Broth-Cooked Quinoa", icon: "quinoaBowl" },
  { slug: "mediterranean-grain-bowl", title: "Mediterranean Grain Bowl", icon: "medBowl" },
  { slug: "butter-popcorn", title: "Butter Popcorn", icon: "popcorn" },
  { slug: "pineapple-upside-down-cake", title: "Pineapple Upside-Down Cake", icon: "cake" },
];

function svgFor({ title, icon }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="${CREAM}"/>
  <rect x="40" y="40" width="1120" height="720" rx="28" fill="none" stroke="${RUST}" stroke-width="3" opacity="0.25"/>
  ${icons[icon]}
  <text x="600" y="600" text-anchor="middle" fill="${INK}" font-size="40" font-family="Arial, sans-serif" font-weight="600">${title}</text>
  <text x="600" y="650" text-anchor="middle" fill="${RUST}" font-size="22" font-family="Arial, sans-serif" letter-spacing="2" opacity="0.85">PHOTO COMING SOON</text>
</svg>
`;
}

for (const recipe of recipes) {
  const path = join(outDir, `${recipe.slug}.svg`);
  writeFileSync(path, svgFor(recipe));
  console.log(`wrote ${path}`);
}
