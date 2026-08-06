-- Adds Education and Certifications as their own tables (recommended over
-- folding into portfolio_employers, since a degree isn't a job -- different
-- fields, no "job title", etc). See docs/mariadb-setup.sql for full seed
-- data.

CREATE TABLE IF NOT EXISTS portfolio_education (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(150) NOT NULL UNIQUE,
  institution VARCHAR(255) NOT NULL,
  degree VARCHAR(255) DEFAULT NULL,
  start_date DATE NOT NULL,
  end_date DATE NULL,
  location VARCHAR(150) DEFAULT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS portfolio_certifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(150) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  issuer VARCHAR(255) DEFAULT NULL,
  date_earned DATE NULL,
  credential_url VARCHAR(500) DEFAULT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
