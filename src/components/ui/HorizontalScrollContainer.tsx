'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScrollContainer = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <section ref={containerRef} className='relative h-[300vh]'>
      <div className='sticky top-0 flex h-[100vh] items-center overflow-hidden'>
        <motion.div style={{ x: scrollX }} className='flex gap-3'>
          {Array(10)
            .fill(1)
            .map((n, i) => n + i)
            .map((n) => (
              <div
                key={n}
                className='w-[100vw] border-2 rounded-xl aspect-square flex items-center justify-center text-5xl'
              >
                {n}
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollContainer;
