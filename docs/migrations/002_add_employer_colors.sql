-- Adds brand-color fields to portfolio_employers, used to render a small
-- swatch dot next to the company name/badge on the homepage Experience
-- cards, Featured Projects badges, and Project History chips.
--
-- Requires portfolio_app to have ALTER privileges. If this fails with
-- "ALTER command denied", run this first as root:
--   GRANT ALTER, CREATE, DROP, INDEX, REFERENCES ON portfolio.* TO 'portfolio_app'@'%';
--   FLUSH PRIVILEGES;

ALTER TABLE portfolio_employers
  ADD COLUMN color VARCHAR(20) NULL AFTER sort_order,
  ADD COLUMN secondary_color VARCHAR(20) NULL AFTER color;

UPDATE portfolio_employers SET color = 'emerald', secondary_color = NULL WHERE slug = 'packaging-personified';
UPDATE portfolio_employers SET color = 'red',     secondary_color = 'blue' WHERE slug = 'sweetwater-sound';
UPDATE portfolio_employers SET color = 'blue',    secondary_color = NULL WHERE slug = 'zimmer-biomet';
UPDATE portfolio_employers SET color = 'amber',   secondary_color = NULL WHERE slug = 'staples';
UPDATE portfolio_employers SET color = 'red',     secondary_color = 'blue' WHERE slug = 'census-bureau';
UPDATE portfolio_employers SET color = 'black',   secondary_color = 'white' WHERE slug = 'blacks-concrete-construction';
