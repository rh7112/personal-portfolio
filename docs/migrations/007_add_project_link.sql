-- Adds an optional external link to projects (repo, live docs, etc.), so
-- ryans-portfolio can render the project as clickable instead of static text.

ALTER TABLE portfolio_projects
  ADD COLUMN link VARCHAR(500) DEFAULT NULL AFTER tech_stack;
