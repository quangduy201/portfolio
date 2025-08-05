import EducationItem from "@/components/EducationItem";
import TimelineSection from "@/components/TimelineSection";
import { Education, PortfolioConfig } from "@/lib/types";

export default async function EducationSection({ config }: { config: PortfolioConfig }) {
  const assets = config.assets;
  const education = config.education.map((item) => ({
    ...item,
    startDate: new Date(item.startDate),
    endDate: new Date(item.endDate),
    logo: item.logo.startsWith("/assets/")
      ? `${item.logo}`
      : `${assets.url}/${assets.edu}/${item.logo}`,
  })) as Education[];

  const renderedItems = education.map((edu, i) => (
    <EducationItem key={i} edu={edu} />
  ));

  return (
    <TimelineSection id="education" title="Education" items={renderedItems} />
  );
}
