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

-- Single source of truth for work history: the homepage Experience cards, the
-- header's "Work" dropdown, and /experience/[slug] pages are all driven by
-- this table (plus its two child tables below).
CREATE TABLE IF NOT EXISTS portfolio_employers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(150) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NULL, -- NULL means "current / present"
  location VARCHAR(150) DEFAULT NULL,
  summary VARCHAR(500) NOT NULL, -- short blurb for the homepage preview card
  description TEXT NOT NULL,     -- longer intro shown on the employer's own page
  sort_order INT DEFAULT 0,
  color VARCHAR(20) DEFAULT NULL,           -- brand color swatch, e.g. "red"
  secondary_color VARCHAR(20) DEFAULT NULL, -- optional second swatch, e.g. "blue"
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Short bullet points shown under "What I worked on" on the employer page.
CREATE TABLE IF NOT EXISTS portfolio_employer_highlights (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employer_id INT NOT NULL,
  highlight TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (employer_id) REFERENCES portfolio_employers(id) ON DELETE CASCADE
);

-- Case-study cards shown under "Featured work" on the employer page.
CREATE TABLE IF NOT EXISTS portfolio_employer_case_studies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employer_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  image VARCHAR(255) DEFAULT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (employer_id) REFERENCES portfolio_employers(id) ON DELETE CASCADE
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

-- Employers: single source of truth for homepage Experience cards, the
-- header's Work dropdown, and /experience/[slug] pages.
INSERT INTO portfolio_employers (slug, name, title, start_date, end_date, location, summary, description, sort_order, color, secondary_color) VALUES
('packaging-personified', 'Packaging Personified, Inc.', 'Software Engineer', '2025-10-01', NULL, 'Warsaw, IN', 'Building internal Retool applications for production, compliance, accounting, and operations teams.', 'Building internal Retool applications for production, compliance, accounting, and operations teams, including a Yield Report tool for tracking job performance and material usage, and consolidated EPA reporting for Illinois and Michigan compliance. Created reusable shared modules and delivered a 40%+ performance improvement to the Press WIP application while training managers and end users on Retool best practices.', 1, 'emerald', NULL),
('sweetwater-sound', 'Sweetwater Sound', 'Software Engineer', '2021-05-01', '2025-08-01', 'Fort Wayne, IN', 'Delivered internal tools, workflow automations, and revenue-driving platforms across accounting, commerce, and merchandising.', 'Sole developer of Avalara''s Exemption Certificate Management System, saving the tax team 160+ hours of manual validation per month, and integrated PayPal''s Braintree system into the CRM to help launch Gear Exchange, which generated over $1M in sales within months. Also built a dynamic Price Management Platform that drove $4M in revenue in under a month, alongside daily-use internal tools across departments.', 2, 'red', 'blue'),
('zimmer-biomet', 'Zimmer Biomet', 'Information Technology Intern', '2020-10-01', '2021-05-01', 'Warsaw, IN', 'Supported device deployment and IT operations across campuses in the Warsaw area.', 'Imaged and deployed company devices, issued laptops and accessories, and performed hardware upgrades for onboarding and refresh cycles. Delivered devices to campuses across the Warsaw area as part of IT operations support.', 3, 'blue', NULL),
('census-bureau', 'United States Census Bureau', 'Post-Enumeration Surveyor', '2020-01-01', '2020-10-01', 'Warsaw, IN', 'Collected population data door-to-door for the U.S. Census Bureau''s Post-Enumeration Survey.', 'Conducted in-person interviews to collect population data for the Post-Enumeration Survey, ensuring census accuracy while complying with strict federal confidentiality guidelines. Maintained detailed activity logs and navigated difficult resident interactions with calm, professional de-escalation.', 4, 'red', 'blue'),
('staples', 'Staples', 'Technology Sales Associate', '2018-06-01', '2019-05-01', 'Warsaw, IN', 'Helped customers find the right technology products as a top-performing sales associate.', 'Assessed customer needs and guided them to the right technology products, consistently ranking as the top store in Northern Indiana for several consecutive weeks. Stayed current on promotions and product launches to support sales goals.', 5, 'amber', NULL),
('blacks-concrete-construction', 'Black''s Concrete Construction', 'Concrete Laborer', '2016-06-01', '2017-03-01', 'Warsaw, IN', 'Handled nearly every phase of residential concrete work on a small, hands-on crew.', 'Worked as part of a small 2-3 person crew handling nearly every phase of residential concrete work, including driving the company truck, forming, pouring, finishing, cutting, cleaning, sealing, and stamping. Gained hands-on versatility and a strong work ethic from taking on broad responsibility within a lean, close-knit team.', 6, 'black', 'white')
ON DUPLICATE KEY UPDATE name = VALUES(name), title = VALUES(title), start_date = VALUES(start_date), end_date = VALUES(end_date), location = VALUES(location), summary = VALUES(summary), description = VALUES(description), sort_order = VALUES(sort_order), color = VALUES(color), secondary_color = VALUES(secondary_color);

-- Highlights and case studies are seed-only (no natural unique key), so clear
-- any existing rows for these employers before re-inserting on a fresh run.
DELETE h FROM portfolio_employer_highlights h JOIN portfolio_employers e ON e.id = h.employer_id
  WHERE e.slug IN ('packaging-personified', 'sweetwater-sound', 'zimmer-biomet', 'census-bureau', 'staples', 'blacks-concrete-construction');
DELETE c FROM portfolio_employer_case_studies c JOIN portfolio_employers e ON e.id = c.employer_id
  WHERE e.slug IN ('packaging-personified', 'sweetwater-sound', 'zimmer-biomet');

INSERT INTO portfolio_employer_highlights (employer_id, highlight, sort_order)
SELECT e.id, h.highlight, h.sort_order FROM portfolio_employers e
JOIN (
  SELECT 'packaging-personified' AS slug, 1 AS sort_order, 'Developed and maintained internal applications using Retool, PostgreSQL, SQL, and JavaScript for production, compliance, accounting, and operations teams.' AS highlight
  UNION ALL SELECT 'packaging-personified', 2, 'Built the Yield Report application to track company and customer job performance, material usage, production efficiency, and operational trends.'
  UNION ALL SELECT 'packaging-personified', 3, 'Consolidated spreadsheets and multiple data sources into EPA reporting tools supporting environmental compliance workflows for Illinois and Michigan facilities.'
  UNION ALL SELECT 'packaging-personified', 4, 'Created reusable tools, including a standardized Header Module and scalable Location Swap application, to improve consistency across Retool applications.'
  UNION ALL SELECT 'packaging-personified', 5, 'Optimized applications and automated workflows for performance, reliability, and usability, including improving Press WIP processing speed by more than 40%.'
  UNION ALL SELECT 'packaging-personified', 6, 'Trained managers, developers, company owners, and end users on Retool functionality, application workflows, and development best practices.'
  UNION ALL SELECT 'sweetwater-sound', 1, 'Sole developer on the implementation of Avalara''s Exemption Certificate Management System (ECMS), saving the tax team the equivalent of 160+ hours of validating exemption certificates per month.'
  UNION ALL SELECT 'sweetwater-sound', 2, 'Integrated PayPal''s GraphQL-based Braintree system into the CRM to help launch Gear Exchange, which saw over $1M in sales between users within its first few months.'
  UNION ALL SELECT 'sweetwater-sound', 3, 'Built and deployed a Price Management Platform used by merchandising to adjust pricing dynamically, resulting in $4M in increased revenue in under a month.'
  UNION ALL SELECT 'sweetwater-sound', 4, 'Provided a Turkey Handout application for Sweetwater''s Thanksgiving giveaway within 72 hours, allowing the campus events team to hand out turkeys and gift cards to 2,500 employees.'
  UNION ALL SELECT 'sweetwater-sound', 5, 'Contributed to internal software development by designing scalable features, debugging production issues, and delivering tools used daily across multiple departments.'
  UNION ALL SELECT 'zimmer-biomet', 1, 'Imaged and prepared company devices with software for deployment.'
  UNION ALL SELECT 'zimmer-biomet', 2, 'Issued laptops, accessories, and performed hardware upgrades for onboarding and refreshing hardware.'
  UNION ALL SELECT 'zimmer-biomet', 3, 'Used a company vehicle to deliver devices to various campuses in the Warsaw area.'
  UNION ALL SELECT 'census-bureau', 1, 'Performed interviews at addresses within assigned blocks to collect population data as part of the Post-Enumeration Survey, ensuring census accuracy.'
  UNION ALL SELECT 'census-bureau', 2, 'Complied with strict federal guidelines and confidentiality rules for gathering demographic and housing information.'
  UNION ALL SELECT 'census-bureau', 3, 'Recorded information using a government-issued laptop, maintaining hour logs, mileage, and case activity.'
  UNION ALL SELECT 'census-bureau', 4, 'Navigated difficult or uncooperative situations by calmly diffusing tensions with hesitant or hostile residents.'
  UNION ALL SELECT 'staples', 1, 'Asked customers pertinent questions to assess and determine their needs, guiding them to the correct product.'
  UNION ALL SELECT 'staples', 2, 'Answered questions, explained product features, and gave honest input based on customer needs.'
  UNION ALL SELECT 'staples', 3, 'Used Staples sales strategies to become the number one store in Northern Indiana for several weeks straight.'
  UNION ALL SELECT 'staples', 4, 'Stayed up to date on weekly promotions and product launches to best support customers and hit sales goals.'
  UNION ALL SELECT 'blacks-concrete-construction', 1, 'Drove the company truck and handled nearly every phase of residential concrete work on a lean 2-3 person crew.'
  UNION ALL SELECT 'blacks-concrete-construction', 2, 'Performed forming, pouring, finishing, cutting, cleaning, sealing, and stamping across a wide range of jobs.'
  UNION ALL SELECT 'blacks-concrete-construction', 3, 'Gained hands-on versatility and a strong work ethic from taking on broad responsibility within a small, close-knit team.'
) h ON h.slug = e.slug;

INSERT INTO portfolio_employer_case_studies (employer_id, title, summary, image, sort_order)
SELECT e.id, c.title, c.summary, c.image, c.sort_order FROM portfolio_employers e
JOIN (
  SELECT 'packaging-personified' AS slug, 'Yield Report' AS title, 'A reporting tool for tracking production and customer performance trends using operational data from multiple sources.' AS summary, '/images/projects/ppi-yield-report.svg' AS image, 1 AS sort_order
  UNION ALL SELECT 'packaging-personified', 'EPA Reporting', 'A compliance-oriented reporting workflow that combines spreadsheets and source data into a more maintainable reporting experience.', '/images/projects/ppi-epa-reporting.svg', 2
  UNION ALL SELECT 'packaging-personified', 'Press WIP Optimization', 'A performance-focused workflow improvement project that reduced processing time and simplified day-to-day operations.', '/images/projects/ppi-press-wip.svg', 3
  UNION ALL SELECT 'sweetwater-sound', 'Turkey Handout App', 'A fast-turnaround internal tool that made holiday employee gifting easier and more organized.', '/images/projects/1.png', 1
  UNION ALL SELECT 'sweetwater-sound', 'Gear Exchange', 'Helped support commerce workflows and secure payment integration for a rapidly growing platform.', '/images/projects/2.jpg', 2
  UNION ALL SELECT 'sweetwater-sound', 'DementiaTrack', 'A capstone project that combined thoughtful software design with practical analytics.', '/images/projects/9.jpg', 3
  UNION ALL SELECT 'zimmer-biomet', 'Device Deployment Support', 'Helped prepare and configure systems for company use in a structured, detail-focused workflow.', '/images/projects/zimmer-biomet.jpg', 1
) c ON c.slug = e.slug;