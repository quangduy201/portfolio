import Image from "next/image";

import { Experience } from "@/lib/types";

export default function ExperienceItem({ exp }: { exp: Experience }) {
  const start = new Date(exp.startDate);
  const end = new Date(exp.endDate);
  const formattedStartDate = `${(start.getMonth() + 1).toString().padStart(2, "0")}/${start.getFullYear()}`;
  const formattedEndDate = `${(end.getMonth() + 1).toString().padStart(2, "0")}/${end.getFullYear()}`;

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
}
