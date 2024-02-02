import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Work } from "contentlayer/generated";

/**
 * Portfolio (Work) page layout
 */
export function Layout({
  meta,
  children,
}: React.PropsWithChildren<{
  meta: Work & {
    next?: Work;
  };
}>) {
  const { artists } = meta;

  return (
    <article>
      <WorkHeader
        title={meta.title}
        tags={meta.tags}
        description={meta.description}
        url={meta.external_url}
      />
      {children}
      {artists?.length && <Artists artists={artists} />}
      {meta.next && (
        <NextWork
          work={meta.next._raw.flattenedPath}
          title={meta.next.title}
          tags={meta.next.tags}
          description={meta.next.description_short ?? meta.next.description}
          cover={meta.next.cover}
        />
      )}
    </article>
  );
}

interface WorkPreviewProps {
  work: string;
  title: string;
  tags: string[];
  description: string;
  cover: string;
  url?: string;
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
  url,
  description,
}: Omit<WorkPreviewProps, "work" | "cover">) {
  return (
    <header className="flex md:flex-row flex-col justify-between mb-20">
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-6xl font-bold">{title}</h1>
        <span className="text-xl font-regular text-neutral-500">
          {tags?.join(", ")}
          {url && (
            <div className="mt-2">
              <Link href={url} target="_blank" className="underline">
                View Project
              </Link>
            </div>
          )}
        </span>
      </div>
      <div className="flex-1 md:mt-0 mt-8">
        <p className="text-3xl font-semibold">{description}</p>
      </div>
    </header>
  );
}

export function Artists({
  artists,
}: {
  artists: NonNullable<Work["artists"]>;
}) {
  return (
    <div className="my-10 flex flex-wrap gap-8">
      {artists.map((artist, i) => (
        <div key={i} className="">
          <h3>{artist.name}</h3>
          <p className="opacity-50 text-sm">{artist.role}</p>
          {artist.instagram && (
            <Link
              className="opacity-50 hover:underline"
              href={`https://instagram.com/${artist.instagram}`}
            >
              @{artist.instagram}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
