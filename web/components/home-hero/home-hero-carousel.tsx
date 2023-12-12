'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const HomeHeroCarousel = ({ children, interval = 5000 }: React.PropsWithChildren<{
  interval?: number;
}>) => {
  const [current, setCurrent] = useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const preloadNextSource = () => {
      // logic to preload next slide's source
    };

    preloadNextSource();

    const __interval = setInterval(() => {
      setCurrent((prev) => (prev === childrenArray.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(__interval);
  }, [childrenArray.length, current, interval]);

  return (
    <div className="w-screen h-screen relative">
      <AnimatePresence>
        {React.Children.map(children, (child, index) =>
          index === current ? (
            <motion.div
              className='h-full w-full'
              key={index}
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '-100vw' }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
            >
              {child}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 right-0 p-12">
        <span>{`${current + 1}/${childrenArray.length}`}</span>
      </div>
    </div>
  );
};

export default HomeHeroCarousel;
