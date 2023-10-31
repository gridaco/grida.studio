import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/types/work";
import { Picture } from "./picture";

/**
 * Portfolio (Work) page layout
 */
export function Layout({
  meta,
  children,
}: React.PropsWithChildren<{
  meta: Work & {
    next: Work;
  };
}>) {
  return (
    <div>
      <WorkHeader
        title={meta.title}
        tags={meta.tags}
        description={meta.description}
      />
      <div className="flex flex-col gap-6">
        {meta.images.map((image, i) => (
          <Picture key={i} src={image} alt="" width={1920} height={1080} />
        ))}
      </div>
      <NextWork
        work={meta.next.work}
        title={meta.next.title}
        tags={meta.next.tags}
        description={meta.next.description}
        cover={meta.next.cover}
      />
    </div>
  );
}

interface WorkPreviewProps {
  work: string;
  title: string;
  tags: string[];
  description: string;
  cover: string;
}

export function NextWork({
  work,
  title,
  tags,
  description,
  cover,
}: WorkPreviewProps) {
  return (
    <div className="mt-80">
      <Link href={`/works/${work}`}>
        <div>
          <hr className="bg-neutral-200 border-none h-[1px] mt-8 mb-8" />
          <h4 className="mb-16 underline">Next project</h4>
          <WorkHeader title={title} tags={tags} description={description} />
          <div className="mt-8 max-h-[200px] overflow-hidden">
            <Image src={cover} alt="" width={1920} height={1080} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export function WorkHeader({
  title,
  tags,
  description,
}: Omit<WorkPreviewProps, "work" | "cover">) {
  return (
    <header className="flex md:flex-row flex-col justify-between mb-20">
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-6xl font-bold">{title}</h1>
        <span className="text-xl font-regular text-neutral-500">
          {tags?.join(", ")}
        </span>
      </div>
      <div className="flex-1 md:mt-0 mt-8">
        <p className="text-3xl font-semibold">{description}</p>
      </div>
    </header>
  );
}
