import ProjectItem from "@/components/ProjectItem";
import TimelineSection from "@/components/TimelineSection";
import { Image, PortfolioConfig, Project } from "@/lib/types";

export default async function ProjectsSection({ config }: { config: PortfolioConfig }) {
  const assetsUrl = config.assetsUrl;
  const projects = config.projects.map((item) => ({
    ...item,
    startDate: new Date(item.startDate),
    endDate: new Date(item.endDate),
    links: {
      ...item.links,
      image: {
        ...item.links.image,
        url: `${assetsUrl}/${item.links.image.url}`,
      } as Image,
    },
  })) as Project[];

  const renderedItems = projects.map((project, i) => (
    <ProjectItem key={i} project={project} />
  ));

  return (
    <TimelineSection id="projects" title="Projects" items={renderedItems} />
  );
}
