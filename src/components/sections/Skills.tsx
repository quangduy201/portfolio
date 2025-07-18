"use client";

import { portfolioConfig } from "@/config/portfolio.config";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcnui/tooltip";
import TimelineSection from "@/components/TimelineSection";

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = portfolioConfig.skills;

const SkillIcon: React.FC<Skill> = ({ name, icon }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="group relative flex h-12 w-12 items-center justify-center rounded-2xl transition hover:-translate-y-1 hover:scale-110 hover:bg-white/10 lg:h-16 lg:w-16"
          data-cursor={"pointer"}
        >
          <div
            className="[&>svg]:h-full [&>svg]:max-h-full [&>svg]:w-full [&>svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  );
};

const SkillGroup: React.FC<SkillGroup> = (skillGroup) => {
  return (
    <>
      <h2 className="mb-3 text-xl font-semibold text-white">
        {skillGroup.title}
      </h2>
      <div className="flex flex-wrap gap-2 lg:gap-3">
        {skillGroup.skills.map((skill, index) => (
          <div key={index}>
            <SkillIcon name={skill.name} icon={skill.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default function Skills() {
  return (
    <TimelineSection
      id="skills"
      title="Skills"
      items={skillGroups}
      renderItem={(item) => SkillGroup(item)}
    />
  );
}
