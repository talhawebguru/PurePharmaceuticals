import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client"

const PageNameBanner = (props) => {
  return (
    <div className="xl:mx-[90px] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 lg:mx-10 h-56 lg:mt-11 mt-6 relative xs:overflow-hidden xs:mt-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={props.image} alt='Banner' className='absolute -z-10 w-full h-full object-cover object-right inset-0' />
      </motion.div>
      <motion.h2
        className="text-white font-bold shadow-md bg-black/50 px-4 py-2 rounded inline-block text-5xl xs:text-[32px] font-nohemi absolute bottom-9 left-9"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {props.title}
      </motion.h2>
    </div>
  );
};

export default PageNameBanner;