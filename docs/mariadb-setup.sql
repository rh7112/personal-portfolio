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

CREATE TABLE IF NOT EXISTS portfolio_projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  image VARCHAR(255) DEFAULT NULL,
  company VARCHAR(150) NOT NULL,
  company_slug VARCHAR(150) DEFAULT NULL,
  color VARCHAR(50) DEFAULT 'sky',
  featured TINYINT(1) DEFAULT 0,
  published TINYINT(1) DEFAULT 1,
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

INSERT INTO portfolio_projects (title, summary, image, company, company_slug, color, featured, published) VALUES
('Yield Report', 'A reporting experience that surfaced production, material, and customer-job trends in a clearer way for operations and leadership.', '/images/projects/ppi-yield-report.svg', 'Packaging Personified', 'packaging-personified', 'sky', 1, 1),
('EPA Reporting', 'A compliance-focused reporting workflow that consolidated multiple sources into a more maintainable experience.', '/images/projects/ppi-epa-reporting.svg', 'Packaging Personified', 'packaging-personified', 'emerald', 1, 1),
('Press WIP Optimization', 'A workflow efficiency project that reduced processing time and improved usability for day-to-day operations.', '/images/projects/ppi-press-wip.svg', 'Packaging Personified', 'packaging-personified', 'violet', 1, 1),
('Turkey Handout Application', 'Developed a Retool application for Sweetwater\'s Guest Services team to efficiently distribute turkeys and gift cards to employees before Thanksgiving, improving satisfaction and reducing administrative work.', '/images/projects/1.png', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Gear Exchange - BrainTree Implementation', 'Integrated BrainTree payment processing into Gear Exchange, enabling secure and seamless transactions and helping bring the platform to life.', '/images/projects/2.jpg', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Tax Exemption Certification Management System (ECMS)', 'Integrated TTR\'s ECMS to automate tax exemption certificate reviews and save the tax team substantial weekly time.', '/images/projects/3.jpg', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Consumer Audio', 'Reworked the round-robin assignment flow for less specialized audio equipment sales to reduce sales engineer workload and increase throughput.', '/images/projects/4.jpg', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('In-House Credit Freezing/Thawing', 'Modified the logic related to credits to freeze and thaw balances to comply with Indiana state law and improve financial accuracy.', '/images/projects/5.png', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Price Management Platform', 'Built a pricing-tracking tool for the merchandising team that helped sharpen competitor pricing insight and drove significant sales uplift.', '/images/projects/6.png', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Personalized Tile Promotions', 'Rewrote the Personalized Tile Promotions application into Retool to show targeted promotions based on browsing history.', '/images/projects/7.jpg', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Search Miner', 'Developed a Search Miner tool to help the SEO engineer analyze Sweetwater.com search results and improve website health and performance.', '/images/projects/8.png', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('DementiaTrack', 'A Purdue University senior capstone project that analyzed patient sensor data to explore sensor-based health monitoring and machine learning insights.', '/images/projects/9.jpg', 'Purdue University', 'purdue-university', 'violet', 1, 1),
('Personal Portfolio', 'Built this portfolio to expand knowledge of Next.js, React, Tailwind, Node, and PM2 while showcasing professional experience.', '/images/projects/10.png', 'Personal Portfolio', 'personal-portfolio', 'amber', 1, 1),
('Mentor Management Application', 'Built with Sweetwater\'s Orbital class team, this app helped mentees select mentors over a set period to support learning and skill-building.', '/images/projects/11.png', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Website Development - Final Project', 'Built a website for Black\'s Concrete Construction using HTML5 and CSS3 as a functional final project for coursework.', '/images/projects/12.png', 'Black\'s Concrete Construction', 'blacks-concrete-construction', 'emerald', 1, 1),
('Inventory Variances', 'Built a Retool app to help the Music Store track inventory variances and maintain stock more effectively.', '/images/projects/13.png', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('End of Day Notes', 'Created a shared handoff application for the Guitar Gallery to centralize daily notes and improve shift transitions.', '/images/projects/14.png', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Gitlab Permissions Lookup', 'Created a Retool application that uses the GitLab REST API to surface repository ownership and maintainers for support teams.', '/images/projects/15.jpg', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Sweetwater Crescendo Café Kiosk', 'Rebuilt the café management system with Retool to improve usability, performance, and long-term maintainability.', '/images/projects/16.jpg', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Wavelengths Salon & Spa Kiosk', 'Provided support and maintenance for the Wavelengths Salon and Spa internal platform with a focus on usability and bug fixes.', '/images/projects/17.jpg', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Beverage Kiosks', 'Rewrote the shared beverage kiosk application to improve consistency and maintainability across multiple kiosk locations.', '/images/projects/18.jpg', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1),
('Flashcards Android Application', 'Built a Flashcards app in Android Studio and Kotlin as part of a software engineering course at Purdue University.', '/images/projects/19.jpg', 'Purdue University', 'purdue-university', 'violet', 1, 1),
('Phase 10 Dice', 'Developed the Phase 10 Dice game in C++ as the final project for CS101 at Ivy Tech.', '/images/projects/20.jpg', 'Ivy Tech', 'ivy-tech', 'emerald', 1, 1),
('Accessibility Website', 'Built a website teaching accessibility concepts using Agile methodologies as part of a Purdue University project management course.', '/images/projects/21.jpg', 'Purdue University', 'purdue-university', 'violet', 1, 1),
('Distribution Center - Cookout Giveaway', 'Built a badge-based raffle application for the Sweetwater Distribution Center to manage employee prizes and winners at a cookout event.', '/images/projects/22.jpg', 'Sweetwater Sound', 'sweetwater', 'sky', 1, 1);