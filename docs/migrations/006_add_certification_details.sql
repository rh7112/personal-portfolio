-- Adds score and expired status to certifications (e.g. CompTIA A+ score,
-- and marking certifications that have since lapsed).

ALTER TABLE portfolio_certifications
  ADD COLUMN score VARCHAR(50) DEFAULT NULL AFTER credential_url,
  ADD COLUMN expired TINYINT(1) DEFAULT 0 AFTER score;
