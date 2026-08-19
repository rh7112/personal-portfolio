import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { getProjectBySlug, getProjectsWithSlugs } from "@/lib/portfolio-data";

// output: "export" hard-fails a build if generateStaticParams returns zero
// routes. Until the 008_add_project_slug migration actually runs against
// the live DB, portfolio-api has no slugs to return -- this fallback list
// (the slugs assigned in docs/mariadb-setup.sql) keeps builds working in
// the meantime. Once the migration runs, the real fetch below takes over
// and this fallback is never reached.
const FALLBACK_SLUGS = [
  "ryans-portfolio",
  "yield-report",
  "epa-reporting",
  "press-wip-optimization",
  "gear-exchange-braintree",
  "price-management-platform",
  "ecms",
  "turkey-handout-application",
];

export async function generateStaticParams() {
  const projects = await getProjectsWithSlugs();

  if (projects.length === 0) {
    return FALLBACK_SLUGS.map((slug) => ({ slug }));
  }

  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}/`,
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: project.image ? "summary_large_image" : "summary",
      title: project.title,
      description: project.summary,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-stone-50 px-6 py-20 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <div className="mx-auto max-w-4xl rounded-3xl border border-stone-900/10 bg-white/90 p-10 dark:border-white/10 dark:bg-stone-900/80">
          <h1 className="text-3xl font-semibold text-stone-900 dark:text-white">Project not found</h1>
          <p className="mt-4 text-stone-600 dark:text-stone-300">The requested project could not be found.</p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 text-orange-700 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
          >
            <FaArrowLeft /> Return home
          </Link>
        </div>
      </main>
    );
  }

  const techStackItems = project.techStack
    ? project.techStack.split(",").map((item) => item.trim())
    : [];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
        >
          <FaArrowLeft /> Back to projects
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl border border-stone-900/10 bg-white/80 dark:border-white/10 dark:bg-stone-900/70">
          {project.image && (
            <div className="relative h-64 w-full sm:h-80">
              <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            </div>
          )}

          <div className="p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">
              {project.company}
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-stone-900 dark:text-white">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-stone-600 dark:text-stone-300">{project.summary}</p>

            {techStackItems.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {techStackItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-stone-900/10 bg-stone-100/70 px-3 py-1 text-xs font-medium text-stone-600 dark:border-white/10 dark:bg-stone-950/70 dark:text-stone-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 font-medium text-white transition hover:bg-orange-500 dark:bg-orange-500 dark:text-stone-950 dark:hover:bg-orange-400"
              >
                Visit project <FaArrowUpRightFromSquare />
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
