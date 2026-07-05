"use client";

import Image from "next/image";
import { useState } from "react";

import { Skeleton } from "@/components/shadcnui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcnui/tooltip";
import { Skill, SkillGroup } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SkillIcon({ name, icon }: Skill) {
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="group relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:-translate-y-1 hover:scale-110 hover:bg-white/10 lg:h-16 lg:w-16"
          data-cursor={"pointer"}
        >
          {imageError ? (
            <Skeleton className="h-full w-full" />
          ) : (
            <Image
              src={icon}
              alt={name}
              fill
              sizes="(min-width: 1024px) 64px, 48px"
              className="object-contain"
              onError={() => setImageError(true)}
            />
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  );
}

export default function SkillItem({ skillGroup }: { skillGroup: SkillGroup }) {
  return (
    <>
      <h2 className="mb-3 text-xl font-semibold text-white">
        {skillGroup.title}
      </h2>
      <div
        className={cn(
          "grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] justify-items-center gap-2",
          "lg:grid-cols-[repeat(auto-fill,minmax(64px,1fr))] lg:gap-3",
        )}
      >
        {skillGroup.skills.map((skill, index) => (
          <SkillIcon key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </>
  );
}
