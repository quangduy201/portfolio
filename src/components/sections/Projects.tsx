"use client";

import Image from "next/image";
import Link from "next/link";

import { portfolioConfig } from "@/config/portfolio.config";
import { Button } from "@/components/shadcnui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcnui/popover";
import TimelineSection from "@/components/TimelineSection";
import { monthYearFormatter as formatter } from "@/lib/utils";
import { FiArrowDown, FiChevronDown } from "react-icons/fi";

type Source = {
  title: string;
  url: string;
};

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate: Date;
  links: {
    image: string;
    sources: Source[];
    demo: string;
  };
}

const projects: Project[] = portfolioConfig.projects;

const ProjectItem: React.FC<Project> = (project) => {
  const formattedStartDate = `${project.startDate.getMonth().toString().padStart(2, "0")}/${project.startDate.getFullYear()}`;
  const formattedEndDate = `${project.endDate.getMonth().toString().padStart(2, "0")}/${project.endDate.getFullYear()}`;

  return (
    <div className={"flex flex-col gap-3 lg:flex-row"}>
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-lg lg:w-8/12 xl:w-7/12">
        <Image
          src={project.links.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex w-full flex-col lg:h-60 lg:justify-between">
        <div className="overflow-hidden">
          <h2 className="text-xl font-semibold text-white">{project.title}</h2>
          <p className="text-base text-accent">{project.description}</p>
          <p className="mt-2 text-sm text-white/70 lg:line-clamp-4">
            {project.technologies.join(", ")}
          </p>
          <p className="text-sm text-accent">
            {formattedStartDate} - {formattedEndDate}
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          {project.links.sources.length === 1 && (
            <Button asChild variant={"outline"}>
              <Link href={project.links.sources[0].url} target="_blank">
                Source
              </Link>
            </Button>
          )}

          {project.links.sources.length > 1 && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="flex gap-2">
                  <span>Sources</span> <FiChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex h-fit w-fit flex-col gap-2 bg-primary">
                {project.links.sources.map((source, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-accent px-2 text-center text-white hover:bg-accent hover:text-black"
                  >
                    <Link href={source.url} target="_blank">
                      {source.title}
                    </Link>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
          )}

          {project.links.demo && (
            <Button asChild>
              <Link href={project.links.demo} target="_blank">
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <TimelineSection
      id="projects"
      title="Projects"
      items={projects}
      renderItem={(item) => ProjectItem(item)}
    />
  );
}
