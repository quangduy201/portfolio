import Image from "next/image";

import { Experience } from "@/lib/types";

export default function ExperienceItem({ exp }: { exp: Experience }) {
  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return `${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  };
  const formattedStartDate = formatDate(exp.startDate);
  const formattedEndDate = exp.endDate ? formatDate(exp.endDate) : "Present";

  return (
    <>
      <div className="flex w-full items-start justify-between">
        <div className="text-ellipsis">
          <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
          <p className="text-accent text-base">{exp.organization}</p>
          <p className="text-sm text-white/70">{exp.location}</p>
          <p className="text-accent text-sm">
            {formattedStartDate} - {formattedEndDate}
          </p>
        </div>
        <Image
          src={exp.logo}
          alt={exp.organization}
          width={80}
          height={80}
          style={{ width: 80, height: 80 }}
        />
      </div>
      {exp.descriptions.map(
        (description, index) =>
          description.length > 0 && (
            <p
              key={index}
              className="mt-2 text-xs font-light text-white/90 lg:text-sm"
            >
              <span className="text-accent font-black">{"-> "}</span>
              {description}
            </p>
          ),
      )}
    </>
  );
}
