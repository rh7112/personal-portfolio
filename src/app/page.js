import PortfolioShell from "./components/PortfolioShell";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { getHomepageData } from "@/lib/portfolio-data";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:rh25170@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    href: "tel:+13525800408",
    icon: <FaPhoneAlt />,
  },
  {
    label: "GitHub",
    href: "https://github.com/rh7112",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ryan-lee-hurd/",
    icon: <FaLinkedin />,
  },
  {
    label: "Resume",
    href: "/documents/ryan-hurd-resume.pdf",
    icon: <FaFileAlt />,
  },
  {
    label: "Indeed",
    href: "https://profile.indeed.com/p/ryanh-sv25zg9",
    icon: <SiIndeed />,
  },
];

export default async function Home() {
  const homeData = await getHomepageData();

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
      experienceHighlights={homeData.experienceHighlights}
      employerHighlights={homeData.employerHighlights}
      projectsHeading={homeData.projectsHeading}
      featuredProjects={homeData.featuredProjects}
      projectHistory={homeData.projectHistory}
      contactHeading={homeData.contactHeading}
      contactBody={homeData.contactBody}
      contactLinks={contactLinks}
    />
  );
}
