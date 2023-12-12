'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlashIcon } from '@radix-ui/react-icons';

const HomeHeroCarousel = ({ children, interval = 5000, transition = { duration: 0.4 } }: React.PropsWithChildren<{
  interval?: number;
  transition?: { duration: number; }
}>) => {
  const [current, setCurrent] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const hasMounted = useRef(false);

  useEffect(() => {
    const preloadNextSource = () => {
      // logic to preload next slide's source
    };

    preloadNextSource();

    const __interval = setInterval(() => {
      setCurrent((prev) => (prev === childrenArray.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(__interval);
  }, [childrenArray.length, interval]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
    }
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <AnimatePresence>
        {React.Children.map(children, (child, index) =>
          index === current ? (
            <motion.div
              className='absolute h-full w-full'
              key={index}
              initial={hasMounted.current ? { x: '100vw' } : {}}
              animate={{ x: 0 }}
              exit={{ x: '-100vw' }}
              transition={
                hasMounted.current ?
                  { ...transition, ease: 'easeInOut' }
                  : {}
              }
            >
              {child}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 right-0 p-4 md:p-12 text-white">
        <span className='text-xl font-medium flex items-center gap-2'>
          {current + 1}
          <SlashIcon />
          {childrenArray.length}
        </span>
      </div>
    </div>
  );
};

export default HomeHeroCarousel;
