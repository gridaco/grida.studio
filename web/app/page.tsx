import Image from "next/image";
import Link from "next/link";
import portfolios from "@/k/portfolio.json";
import type { Work } from "@/types/work";
import { Cover } from "@/components/cover";

export default function Home() {
  return (
    <div className="md:pb-40 pb-16">
      {/* <div className="h-[800px] w-full bg-slate-950"></div> */}
      <div style={{ height: 40 }} />
      <div style={{ height: 40 }} />
      <div style={{ height: 40 }} />
      <div className="flex flex-col gap-20">
        {Object.keys(portfolios).map((key) => {
          const data = (portfolios as any)[key] as Work;
          return (
            <Link key={key} href={`/works/${key}`}>
              <Card
                title={
                  <span>
                    {data.year} —<br />
                    {data.title}
                  </span>
                }
                worktype={data.tags[0]}
                description={data.description}
                image={data.cover}
                video={data.cover_video}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Card({
  title,
  worktype,
  description,
  image,
  video,
}: {
  title: React.ReactElement | string;
  worktype: string;
  description: string;
  image: string;
  video?: string;
}) {
  return (
    <div>
      <hr className="bg-black dark:bg-white mb-8 border-none h-[1px]" />
      <div className="flex flex-row gap-8 flex-wrap">
        <div className="flex-1 flex flex-row gap-8 lg:gap-12 flex-wrap">
          <h3 className="flex-1 md:text-4xl text-2xl break-words">{title}</h3>
          <h3 className="flex-1 md:text-4xl text-2xl">{worktype}</h3>
        </div>
        <div className="flex-1">
          <p className="md:text-sm text-xs">{description}</p>
        </div>
      </div>
      <Cover image={image} video={video} />
    </div>
  );
}
