-- Adds an optional URL-friendly slug to projects, so featured/notable
-- projects can get a dedicated detail page at /projects/[slug] instead of
-- only showing as a carousel card or Project History pill.

ALTER TABLE portfolio_projects
  ADD COLUMN slug VARCHAR(255) DEFAULT NULL AFTER id,
  ADD UNIQUE KEY uq_project_slug (slug);
