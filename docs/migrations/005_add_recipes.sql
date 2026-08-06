-- Splits blog_posts into articles vs. recipes via a `type` column, with a
-- JSON `details` column holding recipe-specific structured data (servings,
-- prep/cook time, difficulty, ingredients, steps, notes, and a pairsWith
-- array of slugs for linking recipes into a "meal"). Chosen over separate
-- tables for ingredients/steps since these are simple ordered lists that
-- don't need independent querying -- a JSON array preserves order fine,
-- and it's much less migration overhead to extend later (e.g. nutrition).
--
-- `content` continues to hold the free-text body -- for recipes, that's
-- the intro/story write-up before the recipe card itself.

ALTER TABLE blog_posts
  ADD COLUMN type ENUM('article', 'recipe') NOT NULL DEFAULT 'article' AFTER category,
  ADD COLUMN details JSON DEFAULT NULL AFTER content;

-- See docs/mariadb-setup.sql for the full seed data (the fettuccine, chicken,
-- smoked cheese, brisket, steak, and cake recipes, plus the 2 original
-- articles re-inserted with type='article').
