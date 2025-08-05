import Image from "next/image";

import { Education } from "@/lib/types";

export default function EducationItem({ edu }: { edu: Education }) {
  const start = new Date(edu.startDate);
  const end = new Date(edu.endDate);
  const formattedStartDate = `${(start.getMonth() + 1).toString().padStart(2, "0")}/${start.getFullYear()}`;
  const formattedEndDate = `${(end.getMonth() + 1).toString().padStart(2, "0")}/${end.getFullYear()}`;

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
}
