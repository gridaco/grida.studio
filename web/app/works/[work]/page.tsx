import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import type { Work } from "@/types/work";
// import portfolios from "@/k/portfolio.json";
import { Layout } from "@/components/layout";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

interface Props {
  params: {
    work: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const work = allPosts.find((post) => post._raw.flattenedPath === params.work);

  if (!work) {
    throw new Error(`Could not find work with path ${params.work}`);
  }

  return {
    title: { absolute: work.title },
    description: work.title,
    openGraph: {
      images: [work.cover],
    },
  };
}

export default function WorkDetailPage({ params }: Props) {
  const work = allPosts.find((post) => post._raw.flattenedPath === params.work);
  if (!work) {
    return <div>404</div>;
  }
  // const work: Work = (portfolios as any)[params.work];
  const nextworkkey = work.related?.[0];
  const nextwork = allPosts.find(
    (post) => post._raw.flattenedPath === nextworkkey
  );

  const Content = getMDXComponent(work.body.code);

  return (
    <Layout
      meta={{
        ...work,
        // @ts-ignore
        next: nextwork,
      }}
    >
      <Content />
    </Layout>
  );
}
