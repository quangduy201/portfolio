import ExperienceItem from "@/components/ExperienceItem";
import TimelineSection from "@/components/TimelineSection";
import { Experience, PortfolioConfig } from "@/lib/types";

export default async function ExperienceSection({ config }: { config: PortfolioConfig }) {
  const assetsUrl = config.assetsUrl;
  const experiences = config.experience.map((item) => ({
    ...item,
    startDate: new Date(item.startDate),
    endDate: new Date(item.endDate),
    logo: `${assetsUrl}/${item.logo}`,
  })) as Experience[];

  const renderedItems = experiences.map((exp, i) => (
    <ExperienceItem key={i} exp={exp} />
  ));

  return (
    <TimelineSection id="experience" title="Experience" items={renderedItems} />
  );
}
