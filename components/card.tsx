import { Cover } from "./cover";

export function Card({
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
