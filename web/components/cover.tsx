"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

export function Cover({ image, video }: { image: string; video?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="mt-8 max-h-[800px] w-full object-cover aspect-video"
        src={image}
        width={1920}
        height={800}
        alt={""}
      />

      {video && (
        <video
          className={`cover-video mt-8 max-h-[800px] w-full object-cover aspect-video ${
            isHovered ? "show" : ""
          }`}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          width={1920}
          height={800}
        ></video>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  .cover-video {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .cover-video.show {
    opacity: 1;
  }
`;
