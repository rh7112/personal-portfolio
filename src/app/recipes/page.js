import Image from "next/image";
import Link from "next/link";
import { getRecipes } from "@/lib/portfolio-data";

export const metadata = {
  title: "Recipes | Ryan Hurd",
  description: "Recipes from Ryan Hurd's kitchen and smoker -- pasta, pita, grain bowls, and low-and-slow BBQ.",
};

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

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Recipes</p>
          <h1 className="mt-3 text-4xl font-semibold text-stone-900 sm:text-5xl dark:text-white">
            From the kitchen and the smoker.
          </h1>
          <p className="mt-5 text-lg text-stone-600 dark:text-stone-300">
            Everything from weeknight pasta to a 24-hour brisket. Looking for something else?{" "}
            <Link href="/blog" className="font-semibold text-orange-700 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
              Back to the blog
            </Link>
            .
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {recipes.map((recipe) => (
            <article key={recipe.slug} className="overflow-hidden rounded-3xl border border-stone-900/10 bg-white/80 dark:border-white/10 dark:bg-stone-900/70">
              {recipe.image && (
                <div className="relative h-40 w-full">
                  <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-orange-700 dark:text-orange-400">{recipe.category}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{formatServings(recipe.servings)}</p>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-stone-900 dark:text-white">{recipe.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">{recipe.excerpt}</p>
                <Link href={`/recipes/${recipe.slug}`} className="mt-6 inline-flex items-center text-sm font-semibold text-orange-700 transition hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
                  View recipe →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
