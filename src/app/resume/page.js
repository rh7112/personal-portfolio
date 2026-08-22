import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ContactLinks from "@/app/components/ContactLinks";
import { educationTranscripts, getCertifications, getEducation, getEmployers } from "@/lib/portfolio-data";

export const metadata = {
  title: "Resume",
  description: "Ryan Hurd's resume -- experience, education, and certifications, in HTML form.",
  alternates: { canonical: "/resume/" },
  openGraph: {
    title: "Resume | Ryan Hurd",
    description: "Ryan Hurd's resume -- experience, education, and certifications, in HTML form.",
    url: "/resume/",
  },
};

export default async function ResumePage() {
  const [employers, education, certifications] = await Promise.all([
    getEmployers(),
    getEducation(),
    getCertifications(),
  ]);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="no-print inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
        >
          <FaArrowLeft /> Back home
        </Link>

        <div className="mt-6 rounded-3xl border border-stone-900/10 bg-white/80 p-8 dark:border-white/10 dark:bg-stone-900/70 lg:p-10">
          <h1 className="text-4xl font-semibold text-stone-900 dark:text-white">Ryan Hurd</h1>
          <p className="mt-2 text-lg text-stone-600 dark:text-stone-300">Software Engineer</p>

          <ContactLinks size="sm" className="no-print mt-6" />
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-stone-900 dark:text-white">Experience</h2>
          <div className="mt-4 space-y-6">
            {employers.map((employer) => (
              <div
                key={employer.slug}
                className="rounded-3xl border border-stone-900/10 bg-white/70 p-6 dark:border-white/10 dark:bg-stone-900/60"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-white">
                    {employer.title} &middot; {employer.name}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{employer.dateRange}</p>
                </div>
                {employer.location && (
                  <p className="text-sm text-stone-500 dark:text-stone-400">{employer.location}</p>
                )}
                {employer.highlights?.length > 0 && (
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                    {employer.highlights.map((highlight) => (
                      <li key={highlight}>&bull; {highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-stone-900 dark:text-white">Education</h2>
          <div className="mt-4 space-y-4">
            {education.map((item) => {
              const transcriptUrl = educationTranscripts[item.slug];
              const EducationTag = transcriptUrl ? "a" : "div";
              return (
                <EducationTag
                  key={item.slug}
                  {...(transcriptUrl ? { href: transcriptUrl, target: "_blank", rel: "noreferrer" } : {})}
                  className="block rounded-3xl border border-stone-900/10 bg-white/70 p-6 dark:border-white/10 dark:bg-stone-900/60"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-white">{item.institution}</h3>
                    <p className="text-sm text-stone-500 dark:text-stone-400">{item.dateRange}</p>
                  </div>
                  {item.degree && <p className="text-sm text-stone-600 dark:text-stone-300">{item.degree}</p>}
                  {item.location && (
                    <p className="text-sm text-stone-500 dark:text-stone-400">{item.location}</p>
                  )}
                  {transcriptUrl && (
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-orange-700 dark:text-orange-400">
                      View unofficial transcript →
                    </p>
                  )}
                </EducationTag>
              );
            })}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-stone-900 dark:text-white">Certifications</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => {
              const CertTag = cert.credentialUrl ? "a" : "div";
              return (
                <CertTag
                  key={cert.slug}
                  {...(cert.credentialUrl ? { href: cert.credentialUrl, target: "_blank", rel: "noreferrer" } : {})}
                  className="rounded-3xl border border-stone-900/10 bg-white/70 p-6 dark:border-white/10 dark:bg-stone-900/60"
                >
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{cert.name}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">
                    {cert.issuer}
                    {cert.dateEarnedDisplay ? ` — ${cert.dateEarnedDisplay}` : ""}
                    {cert.expired ? " (expired)" : ""}
                  </p>
                </CertTag>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
