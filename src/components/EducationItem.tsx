import Image from "next/image";

import { Education } from "@/lib/types";

export default function EducationItem({ edu }: { edu: Education }) {
  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return `${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  };
  const formattedStartDate = formatDate(edu.startDate);
  const formattedEndDate = edu.endDate ? formatDate(edu.endDate) : "Present";

  return (
    <>
      <div className="flex w-full items-start justify-between">
        <div className="text-ellipsis">
          <h2 className="text-xl font-semibold text-white">{edu.title}</h2>
          <p className="text-accent text-base">{edu.organization}</p>
          <p className="text-sm text-white/70">{edu.location}</p>
          <p className="text-accent text-sm">
            {formattedStartDate} - {formattedEndDate}
          </p>
        </div>
        <Image
          src={edu.logo}
          alt={edu.organization}
          width={80}
          height={80}
          style={{ width: 80, height: 80 }}
        />
      </div>
      {edu.descriptions.map(
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
