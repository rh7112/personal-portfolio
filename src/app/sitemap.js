import { getBlogPosts, getEmployers, getRecipes } from "@/lib/portfolio-data";

export const dynamic = "force-static";

const siteUrl = "https://ryan.hurd.cc";

// trailingSlash is on (next.config.mjs), so every URL here needs a trailing
// slash to match what the site actually serves -- otherwise crawlers see a
// redirect instead of a 200 for every entry.
export default async function sitemap() {
  const [posts, recipes, employers] = await Promise.all([getBlogPosts(), getRecipes(), getEmployers()]);

  const staticRoutes = ["", "/blog", "/recipes"].map((path) => ({
    url: `${siteUrl}${path}/`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}/`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
  }));

  const recipeRoutes = recipes.map((recipe) => ({
    url: `${siteUrl}/recipes/${recipe.slug}/`,
    lastModified: recipe.publishedAt ? new Date(recipe.publishedAt) : new Date(),
  }));

  const employerRoutes = employers.map((employer) => ({
    url: `${siteUrl}/experience/${employer.slug}/`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postRoutes, ...recipeRoutes, ...employerRoutes];
}
