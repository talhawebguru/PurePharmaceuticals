import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client";

const PageNameBanner = (props) => {
  return (
    <div className="xl:mx-[90px] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 lg:mx-10 h-56 lg:mt-11 mt-6 relative xs:overflow-hidden xs:mt-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full"
      >
        <Image 
          src={props.image} 
          alt={`${props.title} banner - Pure Pharmaceuticals`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={props.priority || false}
          className="object-cover object-right"
          quality={85}
        />
      </motion.div>
      <motion.h1
        className="text-white font-bold shadow-md bg-black/50 px-4 py-2 rounded inline-block text-5xl xs:text-[32px] font-nohemi absolute bottom-9 left-9 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {props.title}
      </motion.h1>
    </div>
  );
};

export default PageNameBanner;