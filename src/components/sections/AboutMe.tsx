import BioCard from "@/components/BioCard";
import ImageCard from "@/components/ImageCard";
import SummaryCard from "@/components/SummaryCard";
import { PortfolioConfig } from "@/lib/types";

export default async function AboutMe({ config }: { config: PortfolioConfig }) {
  const assets = config.assets;
  const raw = config.about;
  const about = {
    ...raw,
    personal: {
      ...raw.personal,
      dob: new Date(raw.personal.dob),
    },
    image: raw.image.startsWith("/assets/") ? raw.image : `${assets.url}/${raw.image}`,
  }

  return (
    <section id={"about"} className={"flex w-full flex-col items-center pt-24"}>
      <h1>About Me</h1>

      <div className="mt-4 flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-stretch lg:justify-center">
        <ImageCard url={about.image} />

        <div className="flex w-full flex-col items-center justify-center gap-4 px-4 lg:w-5/12">
          <SummaryCard personal={about.personal} />
          <BioCard title={about.title} bio={about.bio} />
        </div>
      </div>
    </section>
  );
}
