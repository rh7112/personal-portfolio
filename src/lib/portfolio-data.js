import mysql from "mysql2/promise";

const fallbackHomeData = {};

// const fallbackHomeData =
// {
//   heroEyebrow: "Family-first • builder • software engineer",
//   heroTitle:
//     "I build practical internal tools that make teams faster, clearer, and more confident.",
//   heroBody:
//     "I’m Ryan Hurd, a software engineer focused on Retool, SQL-driven workflows, and operational tools that help people make better decisions with less friction.",
//   quickFacts: [
//     { label: "Current role", value: "Software Engineer" },
//     { label: "Experience", value: "5+ years building internal tools" },
//     { label: "Focus", value: "Retool, SQL, automation" },
//   ],
//   aboutTitle: "A calm, practical engineer with a strong product mindset.",
//   aboutBody:
//     "I enjoy turning messy processes into clear, reliable experiences. My work has centered on internal software, workflow automation, and cross-functional problem solving, with an emphasis on usability, maintainability, and measurable impact.",
//   aboutBullets: [
//     "Retool, PostgreSQL, SQL, and JavaScript for production and operations workflows",
//     "Clear, maintainable applications that balance speed, reliability, and usability",
//     "Collaboration with operations, accounting, compliance, and leadership teams",
//     "Training and mentoring others to use tools effectively and build with confidence",
//   ],
//   experienceHeading:
//     "Experience that spans engineering, operations, and teamwork.",
//   experienceHighlights: [
//     {
//       title: "Software Engineer",
//       company: "Packaging Personified, Inc.",
//       date: "Oct 2025–Present",
//       slug: "packaging-personified",
//       description:
//         "Building internal applications and operational tools for production, compliance, accounting, and leadership teams using Retool, PostgreSQL, SQL, and JavaScript.",
//     },
//     {
//       title: "Software Engineer",
//       company: "Sweetwater Sound",
//       date: "May 2021–Aug 2025",
//       slug: "sweetwater",
//       description:
//         "Delivered internal tools, workflow automations, and user-focused applications across support, accounting, customer experience, and Retool teams.",
//     },
//     {
//       title: "IT Intern",
//       company: "Zimmer Biomet",
//       date: "2020–2021",
//       slug: "zimmer-biomet",
//       description:
//         "Supported device deployment and IT operations while building a practical foundation in reliable systems and collaboration.",
//     },
//   ],
//   projectsHeading: "Some of my favorite projects.",
//   featuredProjects: [
//     {
//       title: "Yield Report",
//       summary:
//         "Built an operations reporting experience that surfaced production, material, and customer-job trends in a clearer, faster way for decision-making.",
//       image: "/images/projects/ppi-yield-report.svg",
//     },
//     {
//       title: "EPA Reporting",
//       summary:
//         "Consolidated reporting across multiple sources into a reliable workflow that supported compliance needs across several facilities.",
//       image: "/images/projects/ppi-epa-reporting.svg",
//     },
//     {
//       title: "Press WIP Optimization",
//       summary:
//         "Improved a production workflow by reducing friction and increasing throughput while preserving the reliability of the process.",
//       image: "/images/projects/ppi-press-wip.svg",
//     },
//   ],
//   // projectHistory: [
//   //   "Donut Duty",
//   //   "Synchrony Bonus Bucks promotions",
//   //   "Bonus Bucks GUI",
//   //   "ECMS tax certificate expiration workflow",
//   //   "Marketplace payments cancellation handling",
//   //   "Automated collection letters",
//   //   "Stop UT/CA auto-processing",
//   //   "Electronic delivery invoice splitting",
//   //   "CRM performance improvements",
//   //   "Press release admin tool",
//   //   "Merchandising price comparison report",
//   //   "Web text editor",
//   //   "Make Offer Tool",
//   //   "404 admin tool",
//   //   "Retool termination script",
//   //   "Usability Retool App",
//   //   "FileMaker purchase order and quote tooling",
//   //   "XChange management platform",
//   //   "Store SEO content management",
//   //   "Sales Engineer planning workspace",
//   //   "Drumfest check-in scanner workflow",
//   //   "Kiosk Manager",
//   // ],
//   projectHistory: await getProjectList(),

//   employerHighlights: [
//     {
//       title: "Packaging Personified",
//       blurb:
//         "Operations, compliance, and production tooling in a fast-moving manufacturing environment.",
//       slug: "packaging-personified",
//     },
//     {
//       title: "Sweetwater",
//       blurb:
//         "Cross-functional internal tools for support, accounting, and customer experience teams.",
//       slug: "sweetwater",
//     },
//     {
//       title: "Zimmer Biomet",
//       blurb:
//         "A grounded start in IT operations and dependable systems support.",
//       slug: "zimmer-biomet",
//     },
//   ],
//   contactHeading: "Open to thoughtful opportunities and conversations.",
//   contactBody:
//     "If you are looking for someone who can bring calm execution, strong communication, and practical problem solving to a team, I would love to hear from you.",
// };

const fallbackBlogPosts = [
  {
    slug: "building-clarity-with-retool",
    title: "Building clarity with Retool",
    excerpt:
      "A look at how thoughtful internal tooling helps teams move quickly without sacrificing reliability.",
    content:
      "Retool makes it possible to build practical systems quickly, but the real value comes from pairing fast iteration with clear constraints. I’ve learned that the best tools feel invisible to the people using them while still giving leadership a strong signal about what is happening day to day.\n\nThat balance is what I aim for in most of my work: a simple interface, a reliable workflow, and enough structure to support operations without creating unnecessary friction.",
    category: "Engineering",
    publishedAt: "2026-08-04",
  },
  {
    slug: "why-i-still-love-sql",
    title: "Why I still love SQL",
    excerpt:
      "A practical reminder that clear data structures save time and reduce risk across the whole organization.",
    content:
      "SQL is one of those tools that looks simple at first and becomes increasingly powerful the more you use it. It gives teams a way to ask hard questions with a small amount of syntax and a lot of clarity.\n\nWhen I’m working on reporting, automation, or operational analysis, I find that the time spent shaping the data carefully almost always pays off later. It reduces handoffs, improves trust, and makes the work easier to maintain.",
    category: "Data",
    publishedAt: "2026-08-03",
  },
];

const fallbackEmployers = [
  {
    slug: "packaging-personified",
    name: "Packaging Personified, Inc.",
    title: "Software Engineer",
    dateRange: "Oct 2025 - Current",
    location: "Remote",
    description:
      "At Packaging Personified, I’ve focused on building Retool applications that connect production data, reporting needs, and operational workflows in a way that is fast, usable, and reliable.",
    sortOrder: 1,
  },
  {
    slug: "sweetwater-sound",
    name: "Sweetwater Sound",
    title: "Software Engineer",
    dateRange: "May 2021 - Aug 2025",
    location: "Fort Wayne, IN",
    description:
      "At Sweetwater, I worked across multiple engineering pods and learned how to deliver solutions that balanced speed, reliability, and a strong user experience.",
    sortOrder: 2,
  },
  {
    slug: "zimmer-biomet",
    name: "Zimmer Biomet",
    title: "IT Intern",
    dateRange: "Oct 2020 - Aug 2021",
    location: "Fort Wayne, IN",
    description:
      "During my internship, I supported device deployment and IT operations while building a strong foundation in reliable systems and teamwork.",
    sortOrder: 3,
  },
];

async function getDatabaseConnection() {
  const {
    PORTFOLIO_DB_HOST,
    PORTFOLIO_DB_PORT,
    PORTFOLIO_DB_USER,
    PORTFOLIO_DB_PASSWORD,
    PORTFOLIO_DB_NAME,
  } = process.env;

  if (
    !PORTFOLIO_DB_HOST ||
    !PORTFOLIO_DB_USER ||
    !PORTFOLIO_DB_PASSWORD ||
    !PORTFOLIO_DB_NAME
  ) {
    return null;
  }

  try {
    return await mysql.createConnection({
      host: PORTFOLIO_DB_HOST,
      port: Number(PORTFOLIO_DB_PORT || 3306),
      user: PORTFOLIO_DB_USER,
      password: PORTFOLIO_DB_PASSWORD,
      database: PORTFOLIO_DB_NAME,
    });
  } catch {
    return null;
  }
}

function normalizeImagePath(image) {
  if (!image) {
    return "/images/projects/default-project.svg";
  }

  return image.startsWith("/") ? image : `/${image}`;
}

function normalizeProjectRows(rows) {
  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    summary: row.summary,
    image: normalizeImagePath(row.image),
    company: row.company,
    companySlug: row.company_slug || row.companySlug,
    color: row.color || "sky",
    featured: Boolean(row.featured),
    published: Boolean(row.published),
  }));
}

export async function getHomepageData() {
  const connection = await getDatabaseConnection();

  if (!connection) {
    return fallbackHomeData;
  }

  try {
    const [rows] = await connection.query(
      "SELECT `key`, `value` FROM portfolio_content WHERE scope = 'homepage' ORDER BY sort_order ASC",
    );

    if (!rows?.length) {
      return fallbackHomeData;
    }

    const parsedRows = rows.reduce((accumulator, row) => {
      try {
        accumulator[row.key] = JSON.parse(row.value);
      } catch {
        accumulator[row.key] = row.value;
      }
      return accumulator;
    }, {});

    const [projectRows] = await connection.query(
      "SELECT id, title, summary, image, company, company_slug, color, featured, published FROM portfolio_projects WHERE published = 1 ORDER BY RAND() LIMIT 3",
    );

    return {
      ...fallbackHomeData,
      ...parsedRows,
      featuredProjects: normalizeProjectRows(
        projectRows?.length ? projectRows : fallbackHomeData.featuredProjects,
      ),
      projectHistory: Array.isArray(parsedRows.projectHistory)
        ? parsedRows.projectHistory
        : fallbackHomeData.projectHistory,
    };
  } catch {
    return fallbackHomeData;
  } finally {
    await connection.end();
  }
}

export async function getProjectList() {
  const connection = await getDatabaseConnection();

  if (!connection) {
    return [];
  }

  try {
    const [rows] = await connection.query(
      "SELECT id, title, summary, image, company, company_slug, color, featured, published FROM portfolio_projects WHERE published = 1 ORDER BY title ASC",
    );
    return normalizeProjectRows(rows);
  } catch {
    return [];
  } finally {
    await connection.end();
  }
}

export async function getBlogPosts() {
  const connection = await getDatabaseConnection();

  if (!connection) {
    return fallbackBlogPosts;
  }

  try {
    const [rows] = await connection.query(
      "SELECT slug, title, excerpt, content, category, published_at AS publishedAt FROM blog_posts WHERE published_at IS NOT NULL ORDER BY published_at DESC, created_at DESC",
    );

    if (!rows?.length) {
      return fallbackBlogPosts;
    }

    return rows.map((row) => ({
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      content: row.content,
      category: row.category,
      publishedAt: row.publishedAt,
    }));
  } catch {
    return fallbackBlogPosts;
  } finally {
    await connection.end();
  }
}

export async function getBlogPostBySlug(slug) {
  const connection = await getDatabaseConnection();

  if (!connection) {
    return fallbackBlogPosts.find((post) => post.slug === slug) ?? null;
  }

  try {
    const [rows] = await connection.query(
      "SELECT slug, title, excerpt, content, category, published_at AS publishedAt FROM blog_posts WHERE slug = ? LIMIT 1",
      [slug],
    );

    if (!rows?.length) {
      return fallbackBlogPosts.find((post) => post.slug === slug) ?? null;
    }

    const [row] = rows;
    return {
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      content: row.content,
      category: row.category,
      publishedAt: row.publishedAt,
    };
  } catch {
    return fallbackBlogPosts.find((post) => post.slug === slug) ?? null;
  } finally {
    await connection.end();
  }
}

export async function getEmployers() {
  const connection = await getDatabaseConnection();

  if (!connection) {
    return fallbackEmployers;
  }

  try {
    const [rows] = await connection.query(
      "SELECT slug, name, title, date_range, location, description, sort_order FROM portfolio_employers",
    );

    if (!rows?.length) {
      return fallbackEmployers;
    }

    return rows.map((row) => ({
      slug: row.slug,
      name: row.name,
      title: row.title,
      dateRange: row.date_range,
      location: row.location,
      description: row.description,
      sortOrder: row.sort_order,
    }));
  } catch {
    return fallbackEmployers;
  } finally {
    await connection.end();
  }
}
