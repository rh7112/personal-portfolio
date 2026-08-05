'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import RetoolEmbed from "./RetoolEmbed";

import {
  FaArrowRight,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaBars,
  FaTimes,
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
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-200";
    case "violet":
      return "border-violet-500/30 bg-violet-500/10 text-violet-200";
    case "amber":
      return "border-amber-500/30 bg-amber-500/10 text-amber-200";
    default:
      return "border-sky-500/30 bg-sky-500/10 text-sky-200";
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
  experienceHighlights,
  employerHighlights,
  projectsHeading,
  featuredProjects,
  projectHistory,
  contactHeading,
  contactBody,
  contactLinks,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
            Ryan Hurd
          </Link>
          <div className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
            <Link href="#about" className="transition hover:text-white">
              About
            </Link>
            <Link href="#experience" className="transition hover:text-white">
              Experience
            </Link>
            <Link href="#projects" className="transition hover:text-white">
              Work
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link href="#about" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#experience" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </Link>
              <Link href="#projects" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Work
              </Link>
              <Link href="/blog" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="#contact" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      <section id="top" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              {heroEyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">{heroBody}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:rh25170@gmail.com?subject=Hello%20Ryan"
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

          <div className="order-1 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/50 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-white/10">
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
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-center"
                >
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
              <h2 className="mt-3 text-3xl font-semibold text-white">{aboutTitle}</h2>
              <p className="mt-4 text-lg text-slate-300">{aboutBody}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">What I bring</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{experienceHeading}</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {experienceHighlights.map((item) => (
            <Link key={item.slug} href={`/experience/${item.slug}`} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-sky-400 hover:bg-slate-800/90">
              <p className="text-sm text-sky-400">{item.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.company}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:p-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Projects</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">{projectsHeading}</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                <div className="relative h-48 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${getProjectChipClass(project.color)}`}>
                      {project.company}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Try it live</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
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
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Project history</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            A broad set of projects across operations, finance, commerce, and internal tools.
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {projectHistory.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">{contactHeading}</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{contactBody}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => {
              const Icon = icons[link.icon];
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
