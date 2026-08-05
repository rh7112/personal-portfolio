-- Migration for an EXISTING portfolio_employers table (created before this
-- migration only had: id, slug, name, title, date_range, location,
-- description, sort_order, created_at).
--
-- Run each step in order against your live database.
--
-- Back up first:
--   mysqldump -u root -p portfolio portfolio_employers > portfolio_employers_backup.sql

-- ----------------------------------------------------------------------
-- Step 1: Add the new columns (nullable for now, so this is safe to run
-- even with existing rows).
-- ----------------------------------------------------------------------
ALTER TABLE portfolio_employers
  ADD COLUMN start_date DATE NULL AFTER title,
  ADD COLUMN end_date DATE NULL AFTER start_date,
  ADD COLUMN summary VARCHAR(500) NULL AFTER location;

-- ----------------------------------------------------------------------
-- Step 2: Backfill start_date/end_date for the rows that already exist
-- (packaging-personified, sweetwater-sound, zimmer-biomet). If any of
-- these dates don't match what's actually in date_range, double check
-- with: SELECT slug, date_range FROM portfolio_employers;
-- ----------------------------------------------------------------------
UPDATE portfolio_employers SET start_date = '2025-10-01', end_date = NULL         WHERE slug = 'packaging-personified';
UPDATE portfolio_employers SET start_date = '2021-05-01', end_date = '2025-08-01' WHERE slug = 'sweetwater-sound';
UPDATE portfolio_employers SET start_date = '2020-10-01', end_date = '2021-05-01' WHERE slug = 'zimmer-biomet';

-- Backfill the short "summary" blurb (shown on homepage preview cards) --
-- description will keep the existing longer text for the full employer page.
UPDATE portfolio_employers SET summary = 'Building internal Retool applications for production, compliance, accounting, and operations teams.' WHERE slug = 'packaging-personified';
UPDATE portfolio_employers SET summary = 'Delivered internal tools, workflow automations, and revenue-driving platforms across accounting, commerce, and merchandising.' WHERE slug = 'sweetwater-sound';
UPDATE portfolio_employers SET summary = 'Supported device deployment and IT operations across campuses in the Warsaw area.' WHERE slug = 'zimmer-biomet';

-- ----------------------------------------------------------------------
-- Step 3: Once every existing row has start_date and summary set, make
-- them required and drop the old free-text date_range column.
-- ----------------------------------------------------------------------
ALTER TABLE portfolio_employers
  MODIFY start_date DATE NOT NULL,
  MODIFY summary VARCHAR(500) NOT NULL,
  DROP COLUMN date_range;

-- ----------------------------------------------------------------------
-- Step 4: Add the two normalized child tables (safe to run any time,
-- IF NOT EXISTS makes this idempotent).
-- ----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS portfolio_employer_highlights (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employer_id INT NOT NULL,
  highlight TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (employer_id) REFERENCES portfolio_employers(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS portfolio_employer_case_studies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employer_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  image VARCHAR(255) DEFAULT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (employer_id) REFERENCES portfolio_employers(id) ON DELETE CASCADE
);

-- ----------------------------------------------------------------------
-- Step 5: Add the new employers (Census Bureau, Staples, Black's Concrete
-- Construction) and seed highlights/case studies for every employer. See
-- docs/mariadb-setup.sql for the full ready-to-run INSERT statements --
-- copy the portfolio_employers / portfolio_employer_highlights /
-- portfolio_employer_case_studies blocks from there. Those INSERTs use
-- ON DUPLICATE KEY UPDATE for the employer rows, so they're safe to run
-- even though packaging-personified/sweetwater-sound/zimmer-biomet
-- already exist.
-- ----------------------------------------------------------------------
