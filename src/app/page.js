import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const quickFacts = [
  { label: "Current role", value: "Software Engineer" },
  { label: "Experience", value: "5+ years" },
  { label: "Focus", value: "Internal tools & automation" },
];

const experienceHighlights = [
  {
    title: "Software Engineer",
    company: "Sweetwater Sound",
    date: "2021–Present",
    description:
      "Building internal tools, automations, and user-centered workflows that improve daily operations for teams across the organization.",
  },
  {
    title: "IT Intern",
    company: "Zimmer Biomet",
    date: "2020–2021",
    description:
      "Supported device deployment and systems setup while learning how reliable infrastructure helps people get their work done.",
  },
  {
    title: "Computer Science Student",
    company: "Purdue Fort Wayne / Ivy Tech",
    date: "2018–2020",
    description:
      "Developed a strong foundation in problem solving, software design, and collaborative engineering practices.",
  },
];

const featuredProjects = [
  {
    title: "Turkey Handout App",
    summary:
      "A fast-turnaround Retool workflow that made holiday employee gifting easier, simpler, and more organized.",
    image: "/images/projects/1.png",
  },
  {
    title: "Gear Exchange",
    summary:
      "Helped enable secure payment flow for a major commerce initiative that scaled quickly and delivered measurable business value.",
    image: "/images/projects/2.jpg",
  },
  {
    title: "DementiaTrack",
    summary:
      "A capstone project that combined sensor-based insights with thoughtful design and a modern web experience.",
    image: "/images/projects/9.jpg",
  },
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:rh25170@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    href: "https://github.com/rh7112",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryan-hurd-b9bbab121/",
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
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="#top" className="text-lg font-semibold tracking-[0.2em] text-white uppercase">
            Ryan Hurd
          </Link>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <Link href="#about" className="transition hover:text-white">About</Link>
            <Link href="#experience" className="transition hover:text-white">Experience</Link>
            <Link href="#contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </nav>

      <section id="top" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Software engineer • builder • family-first
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              I build thoughtful tools that make work feel simpler, faster, and more human.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              I’m Ryan Hurd, a software engineer focused on practical solutions, clean interfaces, and reliable automation for teams that need to move with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:rh25170@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-sky-400"
              >
                Let’s connect <FaArrowRight />
              </a>
              <a
                href="/documents/ryan-hurd-resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                View resume <FaFileAlt />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/50">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/ryan_pfp.png"
                alt="Ryan Hurd"
                width={1200}
                height={1200}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{fact.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">A calm, practical engineer with a strong product mindset.</h2>
              <p className="mt-4 text-lg text-slate-300">
                I enjoy turning messy processes into clear, reliable experiences. My background spans internal software, workflow automation, and cross-functional problem solving, and I bring that same care to every project I take on.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">What I care about</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Clean, maintainable code with clear intent</li>
                <li>• Tools that save time without adding complexity</li>
                <li>• Building for the people who will use it every day</li>
                <li>• Balancing professional work with family and home projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Experience that spans engineering, operations, and teamwork.</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {experienceHighlights.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm text-sky-400">{item.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.company}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:p-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Selected work</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">A few projects that reflect my style of problem solving.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
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

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Open to thoughtful opportunities and conversations.</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            If you are looking for someone who can bring calm execution, strong communication, and practical problem solving to a team, I would love to hear from you.
          </p>

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
