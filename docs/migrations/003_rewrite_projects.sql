-- Rewrites portfolio_projects with a complete, correctly-attributed project
-- catalog and fixes the root cause of "duplicated projects": this table
-- never had a unique key or ON DUPLICATE KEY UPDATE (unlike every other
-- table in this schema), so re-running the seed script silently re-inserted
-- every row again each time.
--
-- Back up first:
--   mysqldump -u root -p portfolio portfolio_projects > portfolio_projects_backup.sql

ALTER TABLE portfolio_projects
  ADD COLUMN tech_stack VARCHAR(255) DEFAULT NULL AFTER color;

-- Replace all existing rows with the authoritative list, then run the
-- INSERT ... ON DUPLICATE KEY UPDATE block from docs/mariadb-setup.sql.
DELETE FROM portfolio_projects;

ALTER TABLE portfolio_projects
  ADD UNIQUE KEY uq_project_title_company (title, company_slug);

-- See docs/mariadb-setup.sql for the full INSERT statement (49 rows).
