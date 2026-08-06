'use client';

import Image from "next/image";
import Link from "next/link";

import RetoolEmbed from "./RetoolEmbed";

import {
  FaArrowRight,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const icons = {
  email: FaEnvelope,
  phone: FaPhoneAlt,
  github: FaGithub,
  linkedin: FaLinkedin,
  resume: FaFileAlt,
  indeed: SiIndeed,
};

function getProjectChipClass(color) {
  switch (color) {
    case "emerald":
      return "border-emerald-600/30 bg-emerald-500/10 text-emerald-800 dark:border-emerald-500/30 dark:text-emerald-200";
    case "violet":
      return "border-red-600/30 bg-red-500/10 text-red-800 dark:border-red-500/30 dark:text-red-200";
    case "amber":
      return "border-amber-600/30 bg-amber-500/10 text-amber-800 dark:border-amber-500/30 dark:text-amber-200";
    default:
      return "border-orange-600/30 bg-orange-500/10 text-orange-800 dark:border-orange-500/30 dark:text-orange-200";
  }
}

export default function PortfolioShell({
  heroEyebrow,
  heroTitle,
  heroBody,
  heroImageSrc,
  heroImageAlt,
  quickFacts,
  aboutTitle,
  aboutBody,
  aboutBullets,
  experienceHeading,
  employers,
  projectsHeading,
  featuredProjects,
  projects,
  contactHeading,
  contactBody,
  contactLinks,
}) {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <section id="top" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">
              {heroEyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-white">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-stone-600 dark:text-stone-300">{heroBody}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:rh25170@gmail.com?subject=Hello%20Ryan"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 font-medium text-white transition hover:bg-orange-500 dark:bg-orange-500 dark:text-stone-950 dark:hover:bg-orange-400"
              >
                Let’s connect <FaArrowRight />
              </a>
              <a
                href="/documents/ryan-hurd-resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900 dark:border-stone-700 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:text-white"
              >
                View resume <FaFileAlt />
              </a>
            </div>
          </div>

          <div className="order-1 rounded-3xl border border-stone-900/10 bg-white/80 p-6 shadow-2xl shadow-stone-900/10 lg:order-2 dark:border-white/10 dark:bg-stone-900/70 dark:shadow-stone-950/50">
            <div className="overflow-hidden rounded-2xl border border-stone-900/10 dark:border-white/10">
              <Image
                src={heroImageSrc}
                alt={heroImageAlt}
                width={1200}
                height={1200}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-stone-900/10 bg-stone-100/70 p-3 text-center dark:border-white/10 dark:bg-stone-950/70"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">{fact.label}</p>
                  <p className="mt-1 text-sm font-semibold text-stone-900 dark:text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-stone-900/10 bg-white/70 p-8 dark:border-white/10 dark:bg-stone-900/60 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-900 dark:text-white">{aboutTitle}</h2>
              <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">{aboutBody}</p>
            </div>
            <div className="rounded-2xl border border-stone-900/10 bg-stone-100/60 p-6 dark:border-white/10 dark:bg-stone-950/60">
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">What I bring</h3>
              <ul className="mt-4 space-y-3 text-sm text-stone-600 dark:text-stone-300">
                {aboutBullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-900 dark:text-white">{experienceHeading}</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {employers.map((employer) => (
            <Link
              key={employer.slug}
              href={`/experience/${employer.slug}`}
              className="rounded-3xl border border-stone-900/10 bg-white/80 p-6 transition hover:border-orange-600 hover:bg-stone-100 dark:border-white/10 dark:bg-stone-900/70 dark:hover:border-orange-400 dark:hover:bg-stone-800/90"
            >
              <p className="text-sm text-orange-700 dark:text-orange-400">{employer.dateRange}</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900 dark:text-white">{employer.title}</h3>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{employer.name}</p>
              <p className="mt-4 text-sm leading-7 text-stone-600 dark:text-stone-300">{employer.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-stone-900/10 bg-white/70 p-8 dark:border-white/10 dark:bg-stone-900/60 lg:p-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Projects</p>
              <h2 className="mt-2 text-3xl font-semibold text-stone-900 dark:text-white">{projectsHeading}</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-stone-900/10 bg-stone-100/70 dark:border-white/10 dark:bg-stone-950/70"
              >
                <div className="relative h-48 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-white">{project.title}</h3>
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${getProjectChipClass(project.color)}`}>
                      {project.company}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-stone-900/10 bg-white/70 p-8 dark:border-white/10 dark:bg-stone-900/60 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Try it live</p>
          <h3 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-white">
            Interactive Retool apps you can try right now.
          </h3>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <RetoolEmbed
              title="Minesweeper"
              description="A classic Minesweeper build in Retool, showing off custom component logic and state management."
              src="https://rh25170.retool.com/embedded/public/3098f072-da08-4876-b3aa-0f14f020ea8a"
            />
            <RetoolEmbed
              title="Debt Calculator"
              description="A debt payoff planner built in Retool, using sample data to demonstrate snowball/avalanche-style payoff ordering."
              src="https://rh25170.retool.com/embedded/public/96c4c2b3-ea63-4a91-8ef1-f00aa2497253"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-stone-900/10 bg-white/70 p-8 dark:border-white/10 dark:bg-stone-900/60 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Project history</p>
          <h3 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-white">
            A broad set of projects across operations, finance, commerce, and internal tools.
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {projects.map((project) => (
              <span
                key={project.id}
                title={project.company}
                className={`rounded-full border px-3 py-2 text-sm ${getProjectChipClass(project.color)}`}
              >
                {project.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-orange-600/20 bg-gradient-to-br from-stone-100 to-stone-50 p-8 dark:border-orange-500/20 dark:from-stone-900 dark:to-stone-950 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold text-stone-900 dark:text-white">{contactHeading}</h2>
          <p className="mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-300">{contactBody}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => {
              const Icon = icons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-stone-100/70 px-4 py-3 text-sm font-medium text-stone-700 transition hover:border-orange-600 hover:text-stone-900 dark:border-white/10 dark:bg-stone-950/70 dark:text-stone-200 dark:hover:border-orange-400 dark:hover:text-white"
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
