import Link from "next/link";
import PortfolioShell from "./components/PortfolioShell";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const quickFacts = [
  { label: "Current role", value: "Software Engineer" },
  { label: "Location", value: "Warsaw, IN" },
  { label: "Focus", value: "Retool, SQL, automation" },
];

const experienceHighlights = [
  {
    title: "Software Engineer",
    company: "Packaging Personified, Inc.",
    date: "Oct 2025–Present",
    slug: "packaging-personified",
    description:
      "Building internal applications and operational tools for production, compliance, accounting, and leadership teams using Retool, PostgreSQL, SQL, and JavaScript.",
  },
  {
    title: "Software Engineer",
    company: "Sweetwater Sound",
    date: "May 2021–Aug 2025",
    slug: "sweetwater",
    description:
      "Delivered internal tools, workflow automations, and user-focused applications across support, accounting, customer experience, and Retool teams.",
  },
  {
    title: "IT Intern",
    company: "Zimmer Biomet",
    date: "2020–2021",
    slug: "zimmer-biomet",
    description:
      "Supported device deployment and IT operations while building a practical foundation in reliable systems and collaboration.",
  },
];

const featuredProjects = [
  {
    title: "Yield Report",
    summary:
      "Built a Retool-based reporting application to monitor company and customer job performance, material usage, production efficiency, and operational trends.",
    image: "/images/projects/ppi-yield-report.svg",
  },
  {
    title: "EPA Reporting",
    summary:
      "Consolidated spreadsheets and multiple data sources into reporting tools that support environmental compliance across Illinois and Michigan facilities.",
    image: "/images/projects/ppi-epa-reporting.svg",
  },
  {
    title: "Press WIP Optimization",
    summary:
      "Partnered with teammates to optimize a production workflow, improving processing speed by more than 40% while preserving reliability and usability.",
    image: "/images/projects/ppi-press-wip.svg",
  },
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:rh25170@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    href: "tel:+13525800408",
    icon: FaPhoneAlt,
  },
  {
    label: "GitHub",
    href: "https://github.com/rh7112",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryan-lee-hurd/",
    icon: FaLinkedin,
  },
  {
    label: "Resume",
    href: "/documents/ryan-hurd-resume.pdf",
    icon: FaFileAlt,
  },
  {
    label: "Indeed",
    href: "https://profile.indeed.com/p/ryanh-sv25zg9",
    icon: SiIndeed,
  },
];

export default function Home() {
  return (
    <PortfolioShell
      heroEyebrow="Software engineer • builder • family-first"
      heroTitle="I build practical internal tools that make teams faster, clearer, and more confident."
      heroBody="I’m Ryan Hurd, a software engineer focused on Retool, SQL-driven workflows, and operational tools that help people make better decisions with less friction."
      heroImageSrc="/images/ryan_pfp.png"
      heroImageAlt="Ryan Hurd"
      quickFacts={quickFacts}
      aboutTitle="A calm, practical engineer with a strong product mindset."
      aboutBody="I enjoy turning messy processes into clear, reliable experiences. My work has centered on internal software, workflow automation, and cross-functional problem solving, with an emphasis on usability, maintainability, and measurable impact."
      aboutBullets={[
        "Retool, PostgreSQL, SQL, and JavaScript for production and operations workflows",
        "Clear, maintainable applications that balance speed, reliability, and usability",
        "Collaboration with operations, accounting, compliance, and leadership teams",
        "Training and mentoring others to use tools effectively and build with confidence",
      ]}
      experienceHeading="Experience that spans engineering, operations, and teamwork."
      experienceHighlights={experienceHighlights}
      projectsHeading="Selected work from Sweetwater and Packaging Personified."
      featuredProjects={featuredProjects}
      contactHeading="Open to thoughtful opportunities and conversations."
      contactBody="If you are looking for someone who can bring calm execution, strong communication, and practical problem solving to a team, I would love to hear from you."
      contactLinks={contactLinks}
    />
  );
}
