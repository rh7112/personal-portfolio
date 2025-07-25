import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SocialSection from "./components/SocialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121213]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <section id="projects" />
        <ProjectsSection />
        <section id="social" />
        <SocialSection />
      </div>
    </main>
  );
}
