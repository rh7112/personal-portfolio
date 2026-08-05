import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { getEmployerBySlug, getEmployers } from "@/lib/portfolio-data";

export async function generateStaticParams() {
  const employers = await getEmployers();
  return employers.map((employer) => ({ slug: employer.slug }));
}

export default async function EmployerPage({ params }) {
  const { slug } = await params;
  const employer = await getEmployerBySlug(slug);

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
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Experience</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">{employer.name}</h1>
          <p className="mt-3 text-lg text-slate-300">
            {employer.title} • {employer.dateRange}
          </p>
          <p className="mt-2 text-sm text-slate-400">{employer.location}</p>
          <p className="mt-6 text-lg text-slate-300">{employer.description}</p>
        </div>
      </section>

      {employer.highlights?.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:p-10">
            <h2 className="text-3xl font-semibold text-white">What I worked on</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
              {employer.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {employer.caseStudies?.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:p-10">
            <h2 className="text-3xl font-semibold text-white">Featured work</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {employer.caseStudies.map((project) => (
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
      )}

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
