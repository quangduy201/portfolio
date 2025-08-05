import ExperienceItem from "@/components/ExperienceItem";
import TimelineSection from "@/components/TimelineSection";
import { Experience, PortfolioConfig } from "@/lib/types";

export default async function Experience({ config }: {config: PortfolioConfig}) {
  const assets = config.assets;
  const experiences = config.experience.map((item) => ({
    ...item,
    startDate: new Date(item.startDate),
    endDate: new Date(item.endDate),
    logo: item.logo.startsWith("/assets/")
      ? `${item.logo}`
      : `${assets.url}/${assets.exp}/${item.logo}`,
  })) as Experience[];

  const renderedItems = experiences.map((exp, i) => (
    <ExperienceItem key={i} exp={exp} />
  ));

  return (
    <TimelineSection id="experience" title="Experience" items={renderedItems} />
  );
}
