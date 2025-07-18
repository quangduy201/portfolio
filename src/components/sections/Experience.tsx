"use client";

import Image from "next/image";

import { portfolioConfig } from "@/config/portfolio.config";
import TimelineSection from "@/components/TimelineSection";

export interface Experience {
  title: string;
  organization: string;
  location: string;
  startDate: Date;
  endDate: Date;
  descriptions: string[];
  logo: string;
}

const experiences: Experience[] = portfolioConfig.experience;

const ExperienceItem: React.FC<Experience> = (exp) => {
  const formattedStartDate = `${exp.startDate.getMonth().toString().padStart(2, "0")}/${exp.startDate.getFullYear()}`;
  const formattedEndDate = `${exp.endDate.getMonth().toString().padStart(2, "0")}/${exp.endDate.getFullYear()}`;

  return (
    <>
      <Image
        src={exp.logo}
        alt={exp.organization}
        width={80}
        height={80}
        className="absolute right-6 top-6"
      />
      <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
      <p className="text-base text-accent">{exp.organization}</p>
      <p className="text-sm text-white/70">{exp.location}</p>
      <p className="text-sm text-accent">
        {formattedStartDate} - {formattedEndDate}
      </p>
      {exp.descriptions.map(
        (description, index) =>
          description.length > 0 && (
            <p
              key={index}
              className="mt-2 text-xs font-light text-white/90 lg:text-sm"
            >
              <span className="font-black text-accent">{"-> "}</span>
              {description}
            </p>
          ),
      )}
    </>
  );
};

export default function Experience() {
  return (
    <TimelineSection
      id="experience"
      title="Experience"
      items={experiences}
      renderItem={(item) => ExperienceItem(item)}
    />
  );
}
