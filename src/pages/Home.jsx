import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Contact } from "../components/ContactSection";
import { RevealOnScroll } from "../RevealOnScroll";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <RevealOnScroll />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
