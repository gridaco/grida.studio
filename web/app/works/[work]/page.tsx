import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import type { Work } from "@/types/work";
import portfolios from "@/k/portfolio.json";
import { Layout } from "@/components/layout";

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
    <Layout
      meta={{
        ...work,
        next: nextwork,
      }}
    />
  );
}
