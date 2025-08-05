import SkillItem from "@/components/SkillItem";
import TimelineSection from "@/components/TimelineSection";
import { PortfolioConfig } from "@/lib/types";

export default async function SkillsSection({ config }: { config: PortfolioConfig }) {
  const assets = config.assets;
  const skills = config.skills.map((item) => ({
    title: item.title,
    skills: item.skills.map((skill) => ({
      name: skill.name,
      icon: skill.icon.startsWith("/assets/")
        ? `${skill.icon}`
        : `${assets.url}/${assets.skills}/${skill.icon}`,
    })),
  }));

  const renderedItems = skills.map((skillGroup, i) => (
    <SkillItem key={i} skillGroup={skillGroup} />
  ));

  return <TimelineSection id="skills" title="Skills" items={renderedItems} />;
}
