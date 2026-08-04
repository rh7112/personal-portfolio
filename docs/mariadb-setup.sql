CREATE DATABASE IF NOT EXISTS portfolio;

USE portfolio;

CREATE TABLE IF NOT EXISTS portfolio_content (
  id INT AUTO_INCREMENT PRIMARY KEY,
  scope VARCHAR(50) NOT NULL,
  `key` VARCHAR(100) NOT NULL,
  `value` TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(150) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100) DEFAULT 'General',
  published_at DATE NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO portfolio_content (scope, `key`, `value`, sort_order) VALUES
('homepage', 'heroEyebrow', '"Family-first • software engineer • builder"', 1),
('homepage', 'heroTitle', '"I build practical internal tools that make teams faster, clearer, and more confident."', 2),
('homepage', 'heroBody', '"I’m Ryan Hurd, a software engineer focused on Retool, SQL-driven workflows, and operational tools that help people make better decisions with less friction."', 3)
ON DUPLICATE KEY UPDATE `value` = VALUES(`value`);

INSERT INTO blog_posts (slug, title, excerpt, content, category, published_at) VALUES
('building-clarity-with-retool', 'Building clarity with Retool', 'A look at how thoughtful internal tooling helps teams move quickly without sacrificing reliability.', 'Retool makes it possible to build practical systems quickly, but the real value comes from pairing fast iteration with clear constraints. I’ve learned that the best tools feel invisible to the people using them while still giving leadership a strong signal about what is happening day to day.\n\nThat balance is what I aim for in most of my work: a simple interface, a reliable workflow, and enough structure to support operations without creating unnecessary friction.', 'Engineering', '2026-08-04'),
('why-i-still-love-sql', 'Why I still love SQL', 'A practical reminder that clear data structures save time and reduce risk across the whole organization.', 'SQL is one of those tools that looks simple at first and becomes increasingly powerful the more you use it. It gives teams a way to ask hard questions with a small amount of syntax and a lot of clarity.\n\nWhen I’m working on reporting, automation, or operational analysis, I find that the time spent shaping the data carefully almost always pays off later. It reduces handoffs, improves trust, and makes the work easier to maintain.', 'Data', '2026-08-03')
ON DUPLICATE KEY UPDATE title = VALUES(title), excerpt = VALUES(excerpt), content = VALUES(content), category = VALUES(category), published_at = VALUES(published_at);