'use client'

import React from 'react';

interface HomeHeroItemProps {
  title: string;
  description?: string;
  cover?: string;
  coverVideo?: string;
}

const HomeHeroItem = ({ title, description, cover, coverVideo }: HomeHeroItemProps) => {
  return (
    <div className='h-screen min-w-full max-w-full'>
      <picture className='block relative h-screen min-w-full max-w-full overflow-hidden'>
        {coverVideo ? (
          <video
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover'
            src={coverVideo} autoPlay loop muted />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover'
            src={cover} alt={title} width='100%' height='100%' />
        )}
      </picture>
      <div className='absolute bottom-0 left-0 p-12'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        {description && <p className='text-xl'>{description}</p>}
      </div>
    </div>
  );
};

export default HomeHeroItem;
