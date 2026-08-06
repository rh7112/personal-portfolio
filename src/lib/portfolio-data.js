import mysql from "mysql2/promise";

const fallbackHomeData = {
  heroEyebrow: "Family-first • builder • software engineer",
  heroTitle:
    "I build practical internal tools that make teams faster, clearer, and more confident.",
  heroBody:
    "I’m Ryan Hurd, a software engineer focused on Retool, SQL-driven workflows, and operational tools that help people make better decisions with less friction.",
  quickFacts: [
    { label: "Current role", value: "Software Engineer" },
    { label: "Experience", value: "5+ years building internal tools" },
    { label: "Focus", value: "Retool, SQL, automation" },
  ],
  aboutTitle: "A calm, practical engineer with a strong product mindset.",
  aboutBody:
    "I enjoy turning messy processes into clear, reliable experiences. My work has centered on internal software, workflow automation, and cross-functional problem solving, with an emphasis on usability, maintainability, and measurable impact.",
  aboutBullets: [
    "Retool, PostgreSQL, SQL, and JavaScript for production and operations workflows",
    "Clear, maintainable applications that balance speed, reliability, and usability",
    "Collaboration with operations, accounting, compliance, and leadership teams",
    "Training and mentoring others to use tools effectively and build with confidence",
  ],
  experienceHeading:
    "Experience that spans engineering, operations, and teamwork.",
  projectsHeading: "Some of my projects.",
  featuredProjects: [
    {
      title: "Yield Report",
      summary:
        "Built an operations reporting experience that surfaced production, material, and customer-job trends in a clearer, faster way for decision-making.",
      image: "/images/projects/ppi-yield-report.svg",
    },
    {
      title: "EPA Reporting",
      summary:
        "Consolidated reporting across multiple sources into a reliable workflow that supported compliance needs across several facilities.",
      image: "/images/projects/ppi-epa-reporting.svg",
    },
    {
      title: "Press WIP Optimization",
      summary:
        "Improved a production workflow by reducing friction and increasing throughput while preserving the reliability of the process.",
      image: "/images/projects/ppi-press-wip.svg",
    },
  ],
  employerHighlights: [
    {
      title: "Packaging Personified",
      blurb:
        "Operations, compliance, and production tooling in a fast-moving manufacturing environment.",
      slug: "packaging-personified",
    },
    {
      title: "Sweetwater",
      blurb:
        "Cross-functional internal tools for support, accounting, and customer experience teams.",
      slug: "sweetwater",
    },
    {
      title: "Zimmer Biomet",
      blurb:
        "A grounded start in IT operations and dependable systems support.",
      slug: "zimmer-biomet",
    },
  ],
  projectHistory: [
    "Donut Duty",
    "Synchrony Bonus Bucks promotions",
    "Bonus Bucks GUI",
    "ECMS tax certificate expiration workflow",
    "Marketplace payments cancellation handling",
    "Automated collection letters",
    "Stop UT/CA auto-processing",
    "Electronic delivery invoice splitting",
    "CRM performance improvements",
    "Press release admin tool",
    "Merchandising price comparison report",
    "Web text editor",
    "Make Offer Tool",
    "404 admin tool",
    "Retool termination script",
    "Usability Retool App",
    "FileMaker purchase order and quote tooling",
    "XChange management platform",
    "Store SEO content management",
    "Sales Engineer planning workspace",
    "Drumfest check-in scanner workflow",
    "Kiosk Manager",
  ],

  contactHeading: "Open to thoughtful opportunities and conversations.",
  contactBody:
    "If you are looking for someone who can bring calm execution, strong communication, and practical problem solving to a team, I would love to hear from you.",
};

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
    startDate: "2025-10-01",
    endDate: null,
    location: "Warsaw, IN",
    summary:
      "Building internal Retool applications for production, compliance, accounting, and operations teams.",
    description:
      "Building internal Retool applications for production, compliance, accounting, and operations teams, including a Yield Report tool for tracking job performance and material usage, and consolidated EPA reporting for Illinois and Michigan compliance. Created reusable shared modules and delivered a 40%+ performance improvement to the Press WIP application while training managers and end users on Retool best practices.",
    sortOrder: 1,
    color: "emerald",
    secondaryColor: null,
    highlights: [
      "Developed and maintained internal applications using Retool, PostgreSQL, SQL, and JavaScript for production, compliance, accounting, and operations teams.",
      "Built the Yield Report application to track company and customer job performance, material usage, production efficiency, and operational trends.",
      "Consolidated spreadsheets and multiple data sources into EPA reporting tools supporting environmental compliance workflows for Illinois and Michigan facilities.",
      "Created reusable tools, including a standardized Header Module and scalable Location Swap application, to improve consistency across Retool applications.",
      "Optimized applications and automated workflows for performance, reliability, and usability, including improving Press WIP processing speed by more than 40%.",
      "Trained managers, developers, company owners, and end users on Retool functionality, application workflows, and development best practices.",
    ],
    caseStudies: [
      {
        title: "Yield Report",
        summary:
          "A reporting tool for tracking production and customer performance trends using operational data from multiple sources.",
        image: "/images/projects/ppi-yield-report.svg",
      },
      {
        title: "EPA Reporting",
        summary:
          "A compliance-oriented reporting workflow that combines spreadsheets and source data into a more maintainable reporting experience.",
        image: "/images/projects/ppi-epa-reporting.svg",
      },
      {
        title: "Press WIP Optimization",
        summary:
          "A performance-focused workflow improvement project that reduced processing time and simplified day-to-day operations.",
        image: "/images/projects/ppi-press-wip.svg",
      },
    ],
  },
  {
    slug: "sweetwater-sound",
    name: "Sweetwater Sound",
    title: "Software Engineer",
    startDate: "2021-05-01",
    endDate: "2025-08-01",
    location: "Fort Wayne, IN",
    summary:
      "Delivered internal tools, workflow automations, and revenue-driving platforms across accounting, commerce, and merchandising.",
    description:
      "Sole developer of Avalara's Exemption Certificate Management System, saving the tax team 160+ hours of manual validation per month, and integrated PayPal's Braintree system into the CRM to help launch Gear Exchange, which generated over $1M in sales within months. Also built a dynamic Price Management Platform that drove $4M in revenue in under a month, alongside daily-use internal tools across departments.",
    sortOrder: 2,
    color: "red",
    secondaryColor: "blue",
    highlights: [
      "Sole developer on the implementation of Avalara's Exemption Certificate Management System (ECMS), saving the tax team the equivalent of 160+ hours of validating exemption certificates per month.",
      "Integrated PayPal's GraphQL-based Braintree system into the CRM to help launch Gear Exchange, which saw over $1M in sales between users within its first few months.",
      "Built and deployed a Price Management Platform used by merchandising to adjust pricing dynamically, resulting in $4M in increased revenue in under a month.",
      "Provided a Turkey Handout application for Sweetwater's Thanksgiving giveaway within 72 hours, allowing the campus events team to hand out turkeys and gift cards to 2,500 employees.",
      "Contributed to internal software development by designing scalable features, debugging production issues, and delivering tools used daily across multiple departments.",
    ],
    caseStudies: [
      {
        title: "Turkey Handout App",
        summary: "A fast-turnaround internal tool that made holiday employee gifting easier and more organized.",
        image: "/images/projects/1.png",
      },
      {
        title: "Gear Exchange",
        summary: "Helped support commerce workflows and secure payment integration for a rapidly growing platform.",
        image: "/images/projects/2.jpg",
      },
      {
        title: "DementiaTrack",
        summary: "A capstone project that combined thoughtful software design with practical analytics.",
        image: "/images/projects/9.jpg",
      },
    ],
  },
  {
    slug: "zimmer-biomet",
    name: "Zimmer Biomet",
    title: "Information Technology Intern",
    startDate: "2020-10-01",
    endDate: "2021-05-01",
    location: "Warsaw, IN",
    summary: "Supported device deployment and IT operations across campuses in the Warsaw area.",
    description:
      "Imaged and deployed company devices, issued laptops and accessories, and performed hardware upgrades for onboarding and refresh cycles. Delivered devices to campuses across the Warsaw area as part of IT operations support.",
    sortOrder: 3,
    color: "blue",
    secondaryColor: null,
    highlights: [
      "Imaged and prepared company devices with software for deployment.",
      "Issued laptops, accessories, and performed hardware upgrades for onboarding and refreshing hardware.",
      "Used a company vehicle to deliver devices to various campuses in the Warsaw area.",
    ],
    caseStudies: [
      {
        title: "Device Deployment Support",
        summary: "Helped prepare and configure systems for company use in a structured, detail-focused workflow.",
        image: "/images/projects/zimmer-biomet.jpg",
      },
    ],
  },
  {
    slug: "census-bureau",
    name: "United States Census Bureau",
    title: "Post-Enumeration Surveyor",
    startDate: "2020-01-01",
    endDate: "2020-10-01",
    location: "Warsaw, IN",
    summary: "Collected population data door-to-door for the U.S. Census Bureau's Post-Enumeration Survey.",
    description:
      "Conducted in-person interviews to collect population data for the Post-Enumeration Survey, ensuring census accuracy while complying with strict federal confidentiality guidelines. Maintained detailed activity logs and navigated difficult resident interactions with calm, professional de-escalation.",
    sortOrder: 4,
    color: "red",
    secondaryColor: "blue",
    highlights: [
      "Performed interviews at addresses within assigned blocks to collect population data as part of the Post-Enumeration Survey, ensuring census accuracy.",
      "Complied with strict federal guidelines and confidentiality rules for gathering demographic and housing information.",
      "Recorded information using a government-issued laptop, maintaining hour logs, mileage, and case activity.",
      "Navigated difficult or uncooperative situations by calmly diffusing tensions with hesitant or hostile residents.",
    ],
    caseStudies: [],
  },
  {
    slug: "staples",
    name: "Staples",
    title: "Technology Sales Associate",
    startDate: "2018-06-01",
    endDate: "2019-05-01",
    location: "Warsaw, IN",
    summary: "Helped customers find the right technology products as a top-performing sales associate.",
    description:
      "Assessed customer needs and guided them to the right technology products, consistently ranking as the top store in Northern Indiana for several consecutive weeks. Stayed current on promotions and product launches to support sales goals.",
    sortOrder: 5,
    color: "amber",
    secondaryColor: null,
    highlights: [
      "Asked customers pertinent questions to assess and determine their needs, guiding them to the correct product.",
      "Answered questions, explained product features, and gave honest input based on customer needs.",
      "Used Staples sales strategies to become the number one store in Northern Indiana for several weeks straight.",
      "Stayed up to date on weekly promotions and product launches to best support customers and hit sales goals.",
    ],
    caseStudies: [],
  },
  {
    slug: "blacks-concrete-construction",
    name: "Black's Concrete Construction",
    title: "Concrete Laborer",
    startDate: "2016-06-01",
    endDate: "2017-03-01",
    location: "Warsaw, IN",
    summary: "Handled nearly every phase of residential concrete work on a small, hands-on crew.",
    description:
      "Worked as part of a small 2-3 person crew handling nearly every phase of residential concrete work, including driving the company truck, forming, pouring, finishing, cutting, cleaning, sealing, and stamping. Gained hands-on versatility and a strong work ethic from taking on broad responsibility within a lean, close-knit team.",
    sortOrder: 6,
    color: "black",
    secondaryColor: "white",
    highlights: [
      "Drove the company truck and handled nearly every phase of residential concrete work on a lean 2-3 person crew.",
      "Performed forming, pouring, finishing, cutting, cleaning, sealing, and stamping across a wide range of jobs.",
      "Gained hands-on versatility and a strong work ethic from taking on broad responsibility within a small, close-knit team.",
    ],
    caseStudies: [],
  },
];

const fallbackEducation = [
  {
    slug: "whitko",
    institution: "Whitko Community High School",
    degree: "High School Diploma",
    startDate: "2011-08-01",
    endDate: "2016-05-01",
    location: "South Whitley, IN",
    sortOrder: 1,
  },
  {
    slug: "ivy-tech",
    institution: "Ivy Tech Community College",
    degree: "Associate of Science, Computer Science",
    startDate: "2017-01-01",
    endDate: "2019-05-01",
    location: "Warsaw/Fort Wayne, IN",
    sortOrder: 2,
  },
  {
    slug: "purdue-fort-wayne",
    institution: "Purdue University Fort Wayne",
    degree: "Bachelor of Science, Computer Science",
    startDate: "2019-08-01",
    endDate: "2021-05-01",
    location: "Fort Wayne, IN",
    sortOrder: 3,
  },
];

const fallbackCertifications = [
  {
    slug: "python-pcep",
    name: "Python PCEP Certification",
    issuer: "Python Institute",
    dateEarned: "2021-09-01",
    credentialUrl: null,
    sortOrder: 1,
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

  const missing = Object.entries({
    PORTFOLIO_DB_HOST,
    PORTFOLIO_DB_USER,
    PORTFOLIO_DB_PASSWORD,
    PORTFOLIO_DB_NAME,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length) {
    console.log(`Skipping DB connection, missing env vars: ${missing.join(", ")}`);
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
  } catch (err) {
    console.error(`DB connection failed: ${err.code || ""} ${err.message}`);
    return null;
  }
}

function normalizeDate(value) {
  return value instanceof Date ? value.toISOString().slice(0, 10) : value;
}

function formatMonthYear(value) {
  if (!value) {
    return null;
  }

  const date = value instanceof Date ? value : new Date(value);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatDateRange(startDate, endDate) {
  const start = formatMonthYear(startDate);
  if (!start) {
    return null;
  }

  return `${start} – ${endDate ? formatMonthYear(endDate) : "Present"}`;
}

function normalizeEmployerRow(row) {
  return {
    slug: row.slug,
    name: row.name,
    title: row.title,
    startDate: normalizeDate(row.start_date ?? row.startDate),
    endDate: normalizeDate(row.end_date ?? row.endDate),
    dateRange: formatDateRange(row.start_date ?? row.startDate, row.end_date ?? row.endDate),
    location: row.location,
    summary: row.summary,
    description: row.description,
    sortOrder: row.sort_order ?? row.sortOrder,
    color: row.color,
    secondaryColor: row.secondary_color ?? row.secondaryColor,
  };
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
    techStack: row.tech_stack ?? row.techStack ?? null,
    featured: Boolean(row.featured),
    published: Boolean(row.published),
  }));
}

export async function getHomepageData() {
  const connection = await getDatabaseConnection();

  if (!connection) {
    console.log("Using fallbackHomeData because DB connection failed");
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
      "SELECT id, title, summary, image, company, company_slug, color, tech_stack, featured, published FROM portfolio_projects WHERE published = 1 AND featured = 1 ORDER BY RAND() LIMIT 3",
    );

    return {
      ...fallbackHomeData,
      ...parsedRows,
      featuredProjects: normalizeProjectRows(
        projectRows?.length ? projectRows : fallbackHomeData.featuredProjects,
      ),
    };
  } catch (err) {
    console.error(err);
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
      "SELECT id, title, summary, image, company, company_slug, color, tech_stack, featured, published FROM portfolio_projects WHERE published = 1 AND featured = 0 ORDER BY title ASC",
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
      publishedAt: normalizeDate(row.publishedAt),
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
      publishedAt: normalizeDate(row.publishedAt),
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
    return fallbackEmployers.map(normalizeEmployerRow);
  }

  try {
    const [rows] = await connection.query(
      "SELECT slug, name, title, start_date, end_date, location, summary, description, sort_order, color, secondary_color FROM portfolio_employers ORDER BY sort_order ASC",
    );

    if (!rows?.length) {
      return fallbackEmployers.map(normalizeEmployerRow);
    }

    return rows.map(normalizeEmployerRow);
  } catch (err) {
    console.error(`Employer query failed: ${err.code || ""} ${err.message}`);
    return fallbackEmployers.map(normalizeEmployerRow);
  } finally {
    await connection.end();
  }
}

export async function getEmployerBySlug(slug) {
  const connection = await getDatabaseConnection();

  if (!connection) {
    const fallback = fallbackEmployers.find((employer) => employer.slug === slug);
    return fallback ? { ...normalizeEmployerRow(fallback), highlights: fallback.highlights, caseStudies: fallback.caseStudies } : null;
  }

  try {
    const [rows] = await connection.query(
      "SELECT id, slug, name, title, start_date, end_date, location, summary, description, color, secondary_color FROM portfolio_employers WHERE slug = ? LIMIT 1",
      [slug],
    );

    if (!rows?.length) {
      const fallback = fallbackEmployers.find((employer) => employer.slug === slug);
      return fallback ? { ...normalizeEmployerRow(fallback), highlights: fallback.highlights, caseStudies: fallback.caseStudies } : null;
    }

    const [row] = rows;

    const [highlightRows] = await connection.query(
      "SELECT highlight FROM portfolio_employer_highlights WHERE employer_id = ? ORDER BY sort_order ASC",
      [row.id],
    );

    const [caseStudyRows] = await connection.query(
      "SELECT title, summary, image FROM portfolio_employer_case_studies WHERE employer_id = ? ORDER BY sort_order ASC",
      [row.id],
    );

    return {
      ...normalizeEmployerRow(row),
      highlights: highlightRows.map((highlightRow) => highlightRow.highlight),
      caseStudies: caseStudyRows.map((caseStudyRow) => ({
        title: caseStudyRow.title,
        summary: caseStudyRow.summary,
        image: normalizeImagePath(caseStudyRow.image),
      })),
    };
  } catch (err) {
    console.error(`Employer query failed: ${err.code || ""} ${err.message}`);
    const fallback = fallbackEmployers.find((employer) => employer.slug === slug);
    return fallback ? { ...normalizeEmployerRow(fallback), highlights: fallback.highlights, caseStudies: fallback.caseStudies } : null;
  } finally {
    await connection.end();
  }
}

function normalizeEducationRow(row) {
  const startDate = row.start_date ?? row.startDate;
  const endDate = row.end_date ?? row.endDate;
  return {
    slug: row.slug,
    institution: row.institution,
    degree: row.degree,
    startDate: normalizeDate(startDate),
    endDate: normalizeDate(endDate),
    dateRange: formatDateRange(startDate, endDate),
    location: row.location,
    sortOrder: row.sort_order ?? row.sortOrder,
  };
}

export async function getEducation() {
  const connection = await getDatabaseConnection();

  if (!connection) {
    return fallbackEducation.map(normalizeEducationRow);
  }

  try {
    const [rows] = await connection.query(
      "SELECT slug, institution, degree, start_date, end_date, location, sort_order FROM portfolio_education ORDER BY sort_order ASC",
    );

    if (!rows?.length) {
      return fallbackEducation.map(normalizeEducationRow);
    }

    return rows.map(normalizeEducationRow);
  } catch (err) {
    console.error(`Education query failed: ${err.code || ""} ${err.message}`);
    return fallbackEducation.map(normalizeEducationRow);
  } finally {
    await connection.end();
  }
}

function normalizeCertificationRow(row) {
  const dateEarned = row.date_earned ?? row.dateEarned;
  return {
    slug: row.slug,
    name: row.name,
    issuer: row.issuer,
    dateEarned: normalizeDate(dateEarned),
    dateEarnedDisplay: formatMonthYear(dateEarned),
    credentialUrl: row.credential_url ?? row.credentialUrl ?? null,
    sortOrder: row.sort_order ?? row.sortOrder,
  };
}

export async function getCertifications() {
  const connection = await getDatabaseConnection();

  if (!connection) {
    return fallbackCertifications.map(normalizeCertificationRow);
  }

  try {
    const [rows] = await connection.query(
      "SELECT slug, name, issuer, date_earned, credential_url, sort_order FROM portfolio_certifications ORDER BY sort_order ASC",
    );

    if (!rows?.length) {
      return fallbackCertifications.map(normalizeCertificationRow);
    }

    return rows.map(normalizeCertificationRow);
  } catch (err) {
    console.error(`Certifications query failed: ${err.code || ""} ${err.message}`);
    return fallbackCertifications.map(normalizeCertificationRow);
  } finally {
    await connection.end();
  }
}
