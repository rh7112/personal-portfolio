import Image from "next/image";
import Link from "next/link";
import { getRecipeBySlug, getRecipes } from "@/lib/portfolio-data";
import PrintRecipeButton from "@/app/components/PrintRecipeButton";

export async function generateStaticParams() {
  const recipes = await getRecipes();
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) {
    return { title: "Recipe not found" };
  }

  return {
    title: recipe.title,
    description: recipe.excerpt,
    alternates: { canonical: `/recipes/${recipe.slug}/` },
    openGraph: {
      type: "article",
      title: recipe.title,
      description: recipe.excerpt,
      url: `/recipes/${recipe.slug}/`,
      publishedTime: recipe.publishedAt ?? undefined,
      images: recipe.image ? [{ url: recipe.image }] : undefined,
    },
    twitter: {
      card: recipe.image ? "summary_large_image" : "summary",
      title: recipe.title,
      description: recipe.excerpt,
      images: recipe.image ? [recipe.image] : undefined,
    },
  };
}

function formatServings(servings) {
  if (!servings) {
    return null;
  }
  const { min, max } = servings;
  if (min && max && min !== max) {
    return `Serves ${min}-${max}`;
  }
  return `Serves ${min ?? max}`;
}

function formatMinutes(minutes) {
  if (!minutes && minutes !== 0) {
    return null;
  }
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return remainder ? `${hours} hr ${remainder} min` : `${hours} hr`;
}

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const [recipe, allRecipes] = await Promise.all([getRecipeBySlug(slug), getRecipes()]);

  if (!recipe) {
    return (
      <main className="min-h-screen bg-stone-50 px-6 py-20 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Recipes</p>
          <h1 className="mt-3 text-4xl font-semibold text-stone-900 dark:text-white">Recipe not found.</h1>
          <Link href="/recipes" className="no-print mt-6 inline-flex text-orange-700 transition hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
            Back to all recipes →
          </Link>
        </div>
      </main>
    );
  }

  const pairedRecipes = recipe.pairsWith
    .map((pairedSlug) => allRecipes.find((item) => item.slug === pairedSlug))
    .filter(Boolean);

  const stats = [
    ["Servings", formatServings(recipe.servings)],
    ["Prep", formatMinutes(recipe.prepMinutes)],
    ["Cook", formatMinutes(recipe.cookMinutes)],
    ["Difficulty", recipe.difficulty],
  ].filter(([, value]) => value);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="no-print flex flex-wrap items-center justify-between gap-4">
          <Link href="/recipes" className="inline-flex items-center text-orange-700 transition hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
            ← Back to all recipes
          </Link>
          <PrintRecipeButton />
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-stone-900/10 bg-white/80 dark:border-white/10 dark:bg-stone-900/70">
          {recipe.image && (
            <div className="no-print relative h-64 w-full">
              <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
            </div>
          )}
          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">{recipe.category}</p>
            <h1 className="mt-3 text-4xl font-semibold text-stone-900 dark:text-white">{recipe.title}</h1>
            <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">Published {recipe.publishedAt}</p>

            {stats.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-stone-900/10 bg-stone-100/70 p-3 text-center dark:border-white/10 dark:bg-stone-950/70">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-stone-900 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>
            )}

            <p className="mt-6 whitespace-pre-line text-lg leading-8 text-stone-600 dark:text-stone-300">{recipe.content}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {recipe.ingredients.length > 0 && (
            <div className="rounded-3xl border border-stone-900/10 bg-white/70 p-8 dark:border-white/10 dark:bg-stone-900/60">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white">Ingredients</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-600 dark:text-stone-300">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>• {ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {recipe.steps.length > 0 && (
            <div className="rounded-3xl border border-stone-900/10 bg-white/70 p-8 dark:border-white/10 dark:bg-stone-900/60">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white">Steps</h2>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
                {recipe.steps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-semibold text-orange-700 dark:text-orange-400">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {recipe.notes.length > 0 && (
          <div className="mt-8 rounded-3xl border border-stone-900/10 bg-white/70 p-8 dark:border-white/10 dark:bg-stone-900/60">
            <h2 className="text-xl font-semibold text-stone-900 dark:text-white">Notes</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-600 dark:text-stone-300">
              {recipe.notes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </div>
        )}

        {recipe.sourceNote && (
          <p className="mt-6 text-sm italic text-stone-500 dark:text-stone-400">{recipe.sourceNote}</p>
        )}

        {pairedRecipes.length > 0 && (
          <div className="mt-8 rounded-3xl border border-orange-600/20 bg-gradient-to-br from-stone-100 to-stone-50 p-8 dark:border-orange-500/20 dark:from-stone-900 dark:to-stone-950">
            <h2 className="text-xl font-semibold text-stone-900 dark:text-white">Pairs well with</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {pairedRecipes.map((paired) => (
                <Link
                  key={paired.slug}
                  href={`/recipes/${paired.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/80 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-orange-600 hover:text-stone-900 dark:border-white/10 dark:bg-stone-950/70 dark:text-stone-200 dark:hover:border-orange-400 dark:hover:text-white"
                >
                  {paired.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link href="/recipes" className="no-print mt-8 inline-flex text-orange-700 transition hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
          Back to all recipes →
        </Link>
      </div>
    </main>
  );
}
