"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { Button } from "@/components/shadcnui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcnui/popover";
import { Skeleton } from "@/components/shadcnui/skeleton";
import { Project } from "@/lib/types";

export default function ProjectItem({ project }: { project: Project }) {
  const start = new Date(project.startDate);
  const end = new Date(project.endDate);
  const formattedStartDate = `${(start.getMonth() + 1).toString().padStart(2, "0")}/${start.getFullYear()}`;
  const formattedEndDate = `${(end.getMonth() + 1).toString().padStart(2, "0")}/${end.getFullYear()}`;
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <div className={"flex flex-col gap-3 lg:flex-row"}>
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-lg bg-white/10 lg:w-8/12 xl:w-7/12">
        {imageError
        ? <>
          <Skeleton className="h-full w-full relative" />
          <div className="absolute z-50">{project.title}</div>
        </>
        :
        <Image
          src={project.links.image.url}
          alt={project.title}
          fill
          // unoptimized={project.links.image.endsWith(".gif")}
          style={{
            objectFit:
              project.links.image.platform === "mobile" ? "contain" : "cover",
          }}
          onError={() => setImageError(true)}
        />
        }
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
}
