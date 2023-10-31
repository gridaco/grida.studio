import Link from "next/link";
import portfolios from "@/k/portfolio.json";
import type { Work } from "@/types/work";
import { Card } from "@/components/card";

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
