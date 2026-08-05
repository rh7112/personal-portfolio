import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const employerContent = {
  "packaging-personified": {
    name: "Packaging Personified, Inc.",
    title: "Software Engineer",
    date: "Oct 2025–Present",
    location: "Warsaw, IN",
    heroTitle: "Building practical tools for operations, production, and compliance teams.",
    heroBody:
      "At Packaging Personified, I’ve focused on building Retool applications that connect production data, reporting needs, and operational workflows in a way that is fast, usable, and reliable.",
    intro:
      "My work has centered on creating internal tools for production, compliance, accounting, and operations groups. I’ve built applications that reduce manual effort, make data more accessible, and improve consistency across teams.",
    bullets: [
      "Developed and maintained internal applications using Retool, PostgreSQL, SQL, and JavaScript for production, compliance, accounting, and operations teams.",
      "Built the Yield Report application to track company and customer job performance, material usage, production efficiency, and operational trends.",
      "Consolidated spreadsheets and multiple data sources into EPA reporting tools supporting environmental compliance workflows for Illinois and Michigan facilities.",
      "Created reusable tools, including a standardized Header Module and scalable Location Swap application, to improve consistency across Retool applications.",
      "Optimized applications and automated workflows for performance, reliability, and usability, including improving Press WIP processing speed by more than 40%.",
      "Trained managers, developers, company owners, and end users on Retool functionality, application workflows, and development best practices.",
    ],
    projects: [
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
  sweetwater: {
    name: "Sweetwater Sound",
    title: "Software Engineer",
    date: "May 2021–Aug 2025",
    location: "Fort Wayne, IN",
    heroTitle: "Creating tools that support teams across operations, support, and customer experience.",
    heroBody:
      "At Sweetwater, I worked across multiple engineering pods and learned how to deliver solutions that balanced speed, reliability, and a strong user experience.",
    intro:
      "My work spanned several internal initiatives that improved business workflows, supported teams in daily operations, and helped modernize internal tooling.",
    bullets: [
      "Built and maintained Retool applications that served internal teams and business operations.",
      "Worked on accounting, compliance, and customer-facing workflow functionality in a fast-moving environment.",
      "Developed features that improved reliability and streamlined everyday task completion.",
      "Partnered with teammates to solve practical problems with thoughtful, maintainable software.",
    ],
    projects: [
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
  "zimmer-biomet": {
    name: "Zimmer Biomet",
    title: "IT Intern",
    date: "2020–2021",
    location: "Warsaw, IN",
    heroTitle: "Learning dependable systems and operational support in a hands-on environment.",
    heroBody:
      "During my internship, I supported device deployment and IT operations while building a strong foundation in reliable systems and teamwork.",
    intro:
      "This role helped me grow in practical problem solving, structured workflows, and the importance of dependable support work behind the scenes.",
    bullets: [
      "Prepared and deployed company devices for use across the organization.",
      "Supported inventory, configuration, and delivery workflows.",
      "Learned how careful systems work and good operational support improve team productivity.",
    ],
    projects: [
      {
        title: "Device Deployment Support",
        summary: "Helped prepare and configure systems for company use in a structured, detail-focused workflow.",
        image: "/images/projects/zimmer-biomet.jpg",
      },
    ],
  },
};

export function generateStaticParams() {
  return [{ slug: "packaging-personified" }, { slug: "sweetwater" }, { slug: "zimmer-biomet" }];
}

export default function EmployerPage({ params }) {
  const { slug } = params;
  const employer = employerContent[slug];

  if (!employer) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/80 p-10">
          <h1 className="text-3xl font-semibold text-white">Employer not found</h1>
          <p className="mt-4 text-slate-300">The requested employer page could not be found.</p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 text-sky-400 hover:text-sky-300">
            <FaArrowLeft /> Return home
          </Link>
        </div>
      </main>
    );
  }

  const contactLinks = [
    { label: "Email", href: "mailto:rh25170@gmail.com", icon: FaEnvelope },
    { label: "Phone", href: "tel:+13525800408", icon: FaPhoneAlt },
    { label: "GitHub", href: "https://github.com/rh7112", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ryan-lee-hurd/", icon: FaLinkedin },
    { label: "Resume", href: "/documents/ryan-hurd-resume.pdf", icon: FaFileAlt },
    { label: "Indeed", href: "https://profile.indeed.com/p/ryanh-sv25zg9", icon: SiIndeed },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
            Ryan Hurd
          </Link>
          <Link href="/" className="text-sm text-slate-300 transition hover:text-white">
            Back home
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Experience</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">{employer.name}</h1>
              <p className="mt-3 text-lg text-slate-300">{employer.title} • {employer.date}</p>
              <p className="mt-2 text-sm text-slate-400">{employer.location}</p>
              <p className="mt-6 text-lg text-slate-300">{employer.heroBody}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image src={employer.image || "/images/ryan_pfp.png"} alt={employer.name} width={1200} height={900} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-white">What I worked on</h2>
          <p className="mt-4 text-lg text-slate-300">{employer.intro}</p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
            {employer.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-white">Featured work</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {employer.projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                <div className="relative h-48 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-white">Contact</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-white"
                >
                  <Icon /> {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
