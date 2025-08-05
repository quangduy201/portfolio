import HeroPhoto from "@/components/HeroPhoto";
import HeroProfile from "@/components/HeroProfile";
import { PortfolioConfig } from "@/lib/types";

export default async function Home({ config }: { config: PortfolioConfig }) {
  const { assets, info, socials } = config;
  const image = info.image.startsWith("/assets/") ? info.image : `${assets.url}/${info.image}`;

  return (
    <section
      id={"home"}
      className={"flex min-h-screen items-center pt-24 lg:pt-0"}
    >
      <div className={"container mx-auto h-full lg:self-center"}>
        <div
          className={
            "flex flex-col-reverse items-center justify-around lg:flex-row"
          }
        >
          <HeroProfile info={info} socials={socials} />
          <HeroPhoto url={image} />
        </div>
      </div>
    </section>
  );
}
