"use client";

import { useRef } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcnui/tabs";

import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";

const tabs = [
  { name: "Experience", value: "experience" },
  { name: "Education", value: "education" },
  { name: "Skills", value: "skills" },
  { name: "About", value: "about" },
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToAboutTop = () => {
    console.log("sectionRef.current:" + sectionRef.current);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={"about"}
      ref={sectionRef}
      className={"flex min-h-screen w-full flex-col items-center pt-24"}
    >
      <h1
        className={
          "relative text-xl font-semibold text-accent after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-accent after:content-[''] lg:text-3xl"
        }
      >
        About Me
      </h1>

      <Tabs
        orientation="vertical"
        defaultValue={tabs[0].value}
        className="mt-4 flex w-full items-start justify-center gap-4"
      >
        <div className="relative flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-evenly">
          <TabsList className="sticky top-24 z-40 grid h-fit w-fit shrink-0 grid-cols-4 gap-1 bg-[#1e2834] p-1 lg:grid-cols-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-md py-1.5 hover:bg-accent-hover data-[state=active]:bg-accent"
                onClick={scrollToAboutTop}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="text-muted-foreground flex items-center justify-center font-medium lg:w-4/5">
            <TabsContent value="experience">
              <Experience />
            </TabsContent>

            <TabsContent value="education">
              <Education />
            </TabsContent>

            <TabsContent value="skills">
              <Skills />
            </TabsContent>

            <TabsContent value="about">
              <About />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
}
