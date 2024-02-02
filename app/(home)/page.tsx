import Link from "next/link";
import { Card } from "@/components/card";
import { allWorks, Work } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import HomeHeroCarousel from "@/components/home-hero/home-hero-carousel";
import HomeHeroItem from "@/components/home-hero/home-hero-carousel-item";

export default function Home() {
  const works = allWorks.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const hero_works = works.filter((work) => work.featured);

  return (
    <main className="relative">
      <HomeHeroCarousel interval={6000}>
        {hero_works.map((work, i) => (
          <Link key={i} href={`/works/${work._raw.flattenedPath}`}>
            <HomeHeroItem
              key={i}
              title={work.title}
              description={work.description_short}
              cover={work.cover}
              coverVideo={work.cover_video}
              color={work.cover_foreground}
              backgroundColor={work.cover_background}
            />
          </Link>
        ))}
      </HomeHeroCarousel>

      <main className="md:pl-12 md:pr-12 m-auto max-w-screen-2xl pl-4 pr-4 min-h-screen ">
        <section className="md:pb-40 pb-16">
          <div style={{ height: 40 }} />
          <div style={{ height: 40 }} />
          <div style={{ height: 40 }} />
          <div className="flex flex-col gap-20">
            {works.map((work) => {
              // const data = (portfolios as any)[key] as Work;
              const y = new Date(work.date).getFullYear();

              return (
                <Link key={work._id} href={work.url}>
                  <Card
                    title={
                      <span>
                        {y} —<br />
                        {work.title}
                      </span>
                    }
                    worktype={work.tags?.[0] ?? ""}
                    description={work.description}
                    image={work.cover}
                    video={work.cover_video}
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </main>
  );
}
