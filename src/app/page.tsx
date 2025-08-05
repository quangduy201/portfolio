import HeroSection from "@/components/sections/Hero";
import AboutMeSection from "@/components/sections/AboutMe";
import ExperienceSection from "@/components/sections/Experience";
import EducationSection from "@/components/sections/Education";
import SkillsSection from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";
import { fetchPortfolioConfig } from "@/lib/config";

export default async function Portfolio() {
  const config = await fetchPortfolioConfig();

  return (
    <main>
      <HeroSection config={config} />
      <AboutMeSection config={config} />
      <ExperienceSection config={config} />
      <EducationSection config={config} />
      <SkillsSection config={config} />
      <ProjectsSection config={config} />
      <ContactSection config={config} />
    </main>
  );
}
