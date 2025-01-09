import React from 'react';
import * as motion from "motion/react-client"

const BreadCrumbs = (props) => {
  return (
    <div className='flex items-center xl:px-[90px] lg:px-[40px] px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 mt-4'>
      <motion.h3
        className='text-neutral-800 text-base font-bold font-arial leading-normal'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Home&nbsp;
      </motion.h3>
      <motion.span
        className='text-neutral-800 text-base font-normal font-arial leading-normal'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        : {props.name}
      </motion.span>
    </div>
  );
};

export default BreadCrumbs;