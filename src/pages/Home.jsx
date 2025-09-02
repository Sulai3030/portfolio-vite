//import { Footer } from "../components/Footer";
//import { HeroSection } from "../components/HeroSection";
//import { AboutSection } from "../components/AboutSection";
//import { SkillsSection } from "../components/SkillsSection";
//import { ProjectsSection } from "../components/ProjectsSection";
//import { ContactSection } from "../components/ContactSection";
import { RevealOnScroll } from "../RevealOnScroll";

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

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
