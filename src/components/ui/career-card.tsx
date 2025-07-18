import * as React from "react";
import Image from "next/image";

export interface CareerCardProps {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
  logo: string;
}

const CareerCard: React.FC<CareerCardProps> = (info) => {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md">
      <Image
        src={info.logo}
        alt={info.organization}
        width={80}
        height={80}
        className="absolute right-6 top-6"
      />
      <h2 className="text-xl font-semibold text-white">{info.title}</h2>
      <p className="text-base text-accent">{info.organization}</p>
      <p className="text-sm text-white/70">{info.location}</p>
      <p className="text-sm text-accent">{`${info.startDate} - ${info.endDate}`}</p>
      {info.descriptions.map(
        (description, index) =>
          description.length > 0 && (
            <p key={index} className="mt-2 text-xs text-white/90">
              <span className="text-accent">{"-> "}</span>
              {description}
            </p>
          ),
      )}
    </div>
  );
};

export default CareerCard;
