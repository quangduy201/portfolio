"use client";

import Image from "next/image";

import { portfolioConfig } from "@/config/portfolio.config";
import TimelineSection from "@/components/TimelineSection";

export interface Education {
  title: string;
  organization: string;
  location: string;
  startDate: Date;
  endDate: Date;
  descriptions: string[];
  logo: string;
}

const education: Education[] = portfolioConfig.education;

const EducationItem: React.FC<Education> = (edu) => {
  const formattedStartDate = `${edu.startDate.getMonth().toString().padStart(2, "0")}/${edu.startDate.getFullYear()}`;
  const formattedEndDate = `${edu.endDate.getMonth().toString().padStart(2, "0")}/${edu.endDate.getFullYear()}`;

  return (
    <>
      <Image
        src={edu.logo}
        alt={edu.organization}
        width={70}
        height={70}
        className="absolute right-6 top-6"
      />
      <h2 className="text-xl font-semibold text-white">{edu.title}</h2>
      <p className="text-base text-accent">{edu.organization}</p>
      <p className="text-sm text-white/70">{edu.location}</p>
      <p className="text-sm text-accent">
        {formattedStartDate} - {formattedEndDate}
      </p>
      {edu.descriptions.map(
        (description, index) =>
          description.length > 0 && (
            <p key={index} className="mt-2 text-xs text-white/90 lg:text-sm">
              <span className="font-black text-accent">{"-> "}</span>
              {description}
            </p>
          ),
      )}
    </>
  );
};

export default function Education() {
  return (
    <TimelineSection
      id="education"
      title="Education"
      items={education}
      renderItem={(item) => EducationItem(item)}
    />
  );
}
