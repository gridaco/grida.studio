"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@uidotdev/usehooks";

interface HomeHeroItemProps {
  title: string;
  description?: string;
  cover: string;
  coverVideo?: string;
  color?: string;
  backgroundColor?: string;
}

const HomeHeroItem = ({
  title,
  description,
  cover,
  coverVideo,
  color,
  backgroundColor,
}: HomeHeroItemProps) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  return (
    <div
      className="h-screen min-w-full max-w-full"
      style={{
        backgroundColor,
      }}
    >
      <picture className="block relative h-screen min-w-full max-w-full overflow-hidden">
        {coverVideo ? (
          <video
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
            src={coverVideo}
            autoPlay
            loop
            muted
          />
        ) : (
          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
            src={cover}
            alt={title}
            width={1080}
            height={1080}
          />
        )}
      </picture>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-screen-2xl mx-auto p-4 md:p-12">
          <motion.span
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={entry?.isIntersecting ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ delay: 0.5 }}
            className="text-white"
            style={{
              color: color,
            }}
          >
            <h1 className="text-3xl font-bold opacity-90 hover:underline">
              {title}
            </h1>
            {description && (
              <p className="text-xl opacity-80 max-w-[80vw]">{description}</p>
            )}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroItem;
