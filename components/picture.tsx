"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PlusIcon } from "@radix-ui/react-icons";

interface PictureProps extends React.ComponentProps<typeof Image> {
  onClick?: () => void;
  disableEnlarge?: boolean;
}

export function Picture({ disableEnlarge, ...props }: PictureProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      <Image {...props} alt={props.alt} />

      {hovered && !disableEnlarge && (
        <div className="absolute z-10 inset-0 cursor-pointer">
          <button
            className="absolute left-4 bottom-4 z-10 p-4 pt-2 pb-2 bg-neutral-700 bg-opacity-50 flex items-center gap-2 rounded-3xl text-white"
            onClick={() => {
              // Handle the pin action here
              console.log("Pinned!");
            }}
          >
            <PlusIcon /> Enlarge
          </button>
        </div>
      )}
    </div>
  );
}
