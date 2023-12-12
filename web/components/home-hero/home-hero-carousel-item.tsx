'use client'

import React from 'react';
import Image from 'next/image';

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
  backgroundColor
}: HomeHeroItemProps) => {
  return (
    <div className='h-screen min-w-full max-w-full'
      style={{
        backgroundColor,
      }}
    >
      <picture className='block relative h-screen min-w-full max-w-full overflow-hidden'>
        {coverVideo ? (
          <video
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover'
            src={coverVideo} autoPlay loop muted />
        ) : (
          <Image
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover'
            src={cover} alt={title} width={1080} height={1080} />
        )}
      </picture>
      <div className='absolute bottom-0 left-0 p-4 md:p-12'>
        <span
          className='text-white'
          style={{
            color: color,
          }}
        >
          <h1 className='text-3xl font-semibold'>{title}</h1>
          {description && <p className='text-xl'>{description}</p>}
        </span>
      </div>
    </div>
  );
};

export default HomeHeroItem;
