import Home from "@/components/sections/Home";
import About from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { fetchPortfolioConfig } from "@/lib/config";

export default async function Portfolio() {
  const config = await fetchPortfolioConfig();

  return (
    <main>
      <Home config={config} />
      <About config={config} />
      <Experience config={config} />
      <Education config={config} />
      <Skills config={config} />
      <Projects config={config} />
      <Contact config={config} />
    </main>
  );
}
