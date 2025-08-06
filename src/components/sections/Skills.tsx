import SkillItem from "@/components/SkillItem";
import TimelineSection from "@/components/TimelineSection";
import { PortfolioConfig } from "@/lib/types";

export default async function SkillsSection({ config }: { config: PortfolioConfig }) {
  const assetsUrl = config.assetsUrl;
  const skills = config.skills.map((item) => ({
    title: item.title,
    skills: item.skills.map((skill) => ({
      name: skill.name,
      icon: `${assetsUrl}/${skill.icon}`,
    })),
  }));

  const renderedItems = skills.map((skillGroup, i) => (
    <SkillItem key={i} skillGroup={skillGroup} />
  ));

  return <TimelineSection id="skills" title="Skills" items={renderedItems} />;
}
