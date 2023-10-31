import Image from "next/image";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import type { Work } from "@/types/work";
import portfolios from "@/k/portfolio.json";
import Link from "next/link";

interface Props {
  params: {
    work: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const work: Work = (portfolios as any)[params.work];

  return {
    title: { absolute: work.title },
    description: work.title,
    metadataBase: new URL("https://studio.grida.co"),
    openGraph: {
      images: [work.images[0], ...previousImages],
    },
  };
}

export default function WorkDetailPage({ params }: Props) {
  const work: Work = (portfolios as any)[params.work];
  const nextworkkey = work.related[0];
  const nextwork: Work = (portfolios as any)[nextworkkey];

  if (!work) {
    return <div>404</div>;
  }

  return (
    <div className="mt-40">
      <WorkHeader
        title={work.title}
        tags={work.tags}
        description={work.description}
      />
      <div className="flex flex-col gap-4">
        {work.images.map((image, i) => (
          <Image key={i} src={image} alt="" width={1920} height={1080} />
        ))}
      </div>
      <div className="mt-80">
        <Link href={`/works/${nextworkkey}`}>
          <div>
            <hr className="bg-neutral-200 border-none h-[1px] mt-8 mb-8" />
            <h4 className="mb-16 underline">Next project</h4>
            <WorkHeader
              title={nextwork.title}
              tags={nextwork.tags}
              description={nextwork.description}
            />
            <div className="mt-8 max-h-[200px] overflow-hidden">
              <Image src={nextwork.cover} alt="" width={1920} height={1080} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function WorkHeader({
  title,
  tags,
  description,
}: {
  title: string;
  tags: string[];
  description: string;
}) {
  return (
    <header className="flex md:flex-row flex-col justify-between mb-20">
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-6xl font-bold">{title}</h1>
        <span className="text-xl font-regular text-neutral-500">
          {tags.join(", ")}
        </span>
      </div>
      <div className="flex-1 md:mt-0 mt-8">
        <p className="text-3xl font-semibold">{description}</p>
      </div>
    </header>
  );
}
