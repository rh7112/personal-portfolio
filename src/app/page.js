import PortfolioShell from "./components/PortfolioShell";
import { getEmployers, getHomepageData } from "@/lib/portfolio-data";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:rh25170@gmail.com",
    icon: "email",
  },
  {
    label: "Phone",
    href: "tel:+13525800408",
    icon: "phone",
  },
  {
    label: "GitHub",
    href: "https://github.com/rh7112",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryan-lee-hurd/",
    icon: "linkedin",
  },
  {
    label: "Resume",
    href: "/documents/ryan-hurd-resume.pdf",
    icon: "resume",
  },
  {
    label: "Indeed",
    href: "https://profile.indeed.com/p/ryanh-sv25zg9",
    icon: "indeed",
  },
];

export default async function Home() {
  const [homeData, employers] = await Promise.all([getHomepageData(), getEmployers()]);

  return (
    <PortfolioShell
      heroEyebrow={homeData.heroEyebrow}
      heroTitle={homeData.heroTitle}
      heroBody={homeData.heroBody}
      heroImageSrc="/images/ryan_pfp.png"
      heroImageAlt="Ryan Hurd"
      quickFacts={homeData.quickFacts}
      aboutTitle={homeData.aboutTitle}
      aboutBody={homeData.aboutBody}
      aboutBullets={homeData.aboutBullets}
      experienceHeading={homeData.experienceHeading}
      employers={employers.slice(0, 3)}
      projectsHeading={homeData.projectsHeading}
      featuredProjects={homeData.featuredProjects}
      projectHistory={homeData.projectHistory}
      contactHeading={homeData.contactHeading}
      contactBody={homeData.contactBody}
      contactLinks={contactLinks}
    />
  );
}
