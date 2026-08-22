import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import ContactLinks from "@/app/components/ContactLinks";
import { getEmployerBySlug, getEmployers, getProjectsByCompanySlug } from "@/lib/portfolio-data";

export async function generateStaticParams() {
  const employers = await getEmployers();
  return employers.map((employer) => ({ slug: employer.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const employer = await getEmployerBySlug(slug);

  if (!employer) {
    return { title: "Employer not found" };
  }

  const title = `${employer.title} at ${employer.name}`;

  return {
    title,
    description: employer.summary,
    alternates: { canonical: `/experience/${employer.slug}/` },
    openGraph: {
      type: "profile",
      title,
      description: employer.summary,
      url: `/experience/${employer.slug}/`,
    },
    twitter: {
      card: "summary",
      title,
      description: employer.summary,
    },
  };
}

export default async function EmployerPage({ params }) {
  const { slug } = await params;
  const employer = await getEmployerBySlug(slug);

  if (!employer) {
    return (
      <main className="min-h-screen bg-stone-50 px-6 py-20 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <div className="mx-auto max-w-4xl rounded-3xl border border-stone-900/10 bg-white/90 p-10 dark:border-white/10 dark:bg-stone-900/80">
          <h1 className="text-3xl font-semibold text-stone-900 dark:text-white">Employer not found</h1>
          <p className="mt-4 text-stone-600 dark:text-stone-300">The requested employer page could not be found.</p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 text-orange-700 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
            <FaArrowLeft /> Return home
          </Link>
        </div>
      </main>
    );
  }

  const projects = await getProjectsByCompanySlug(slug);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-stone-900/10 bg-white/80 p-8 dark:border-white/10 dark:bg-stone-900/70 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Experience</p>
          <h1 className="mt-3 text-4xl font-semibold text-stone-900 dark:text-white">{employer.name}</h1>
          <p className="mt-3 text-lg text-stone-600 dark:text-stone-300">
            {employer.title} • {employer.dateRange}
          </p>
          <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{employer.location}</p>
          <p className="mt-6 text-lg text-stone-600 dark:text-stone-300">{employer.description}</p>
        </div>
      </section>

      {employer.highlights?.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
          <div className="rounded-3xl border border-stone-900/10 bg-white/70 p-8 dark:border-white/10 dark:bg-stone-900/60 lg:p-10">
            <h2 className="text-3xl font-semibold text-stone-900 dark:text-white">What I worked on</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
              {employer.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
          <div className="rounded-3xl border border-stone-900/10 bg-white/70 p-8 dark:border-white/10 dark:bg-stone-900/60 lg:p-10">
            <h2 className="text-3xl font-semibold text-stone-900 dark:text-white">Projects</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => {
                const href = project.slug ? `/projects/${project.slug}` : project.link;
                const card = (
                  <article className="overflow-hidden rounded-3xl border border-stone-900/10 bg-stone-100/70 dark:border-white/10 dark:bg-stone-950/70">
                    {project.image && (
                      <div className="relative h-48 w-full">
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-stone-900 dark:text-white">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">{project.summary}</p>
                    </div>
                  </article>
                );

                if (!href) {
                  return <div key={project.id}>{card}</div>;
                }

                return (
                  <Link
                    key={project.id}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="block transition hover:-translate-y-0.5"
                  >
                    {card}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-orange-600/20 bg-gradient-to-br from-stone-100 to-stone-50 p-8 dark:border-orange-500/20 dark:from-stone-900 dark:to-stone-950 lg:p-10">
          <h2 className="text-3xl font-semibold text-stone-900 dark:text-white">Contact</h2>
          <ContactLinks className="mt-8" />
        </div>
      </section>
    </main>
  );
}
