import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client"
import Logo from "@/public/images/logo.svg";
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='mt-44 lg:pt-16 pt-5 bg-[#FBFBFB]'>
        <div className='2xl:max-w-[1440px] 2xl:mx-auto flex flex-col lg:flex-row gap-7 lg:justify-between xl:mx-[90px] lg:mx-[40px] mx-5 flex-wrap lg:flex-nowrap'>
          <motion.div
            className='lg:w-[70%]'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div><Image src={Logo} alt='Logo' /></div>
            <h2 className="xl:w-[407px] w-[80%] text-black text-base font-normal font-secondary leading-normal mt-7">
              Pure Pharmaceuticals is committed to upholding the highest standards of quality and safety in the production of pharmaceuticals, from our base in Abu Dhabi to our global reach.
            </h2>
          </motion.div>
          <motion.div
            className='lg:w-[50%]'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="text-black text-2xl font-normal font-arial leading-9">Quick Links</h2>
            <div>
              <ul className='flex flex-col gap-3 mt-3 text-black text-base font-normal font-secondary leading-normal"'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about/company'>About us</Link></li>
                <li><Link href='/product'>Product</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <h2 className="text-black text-2xl font-normal font-arial leading-9">Location</h2>
            <p className="xl:w-80 w-[75%] lg:w-52 text-black text-base font-normal font-secondary leading-normal mt-3">
              PPGH+X76 - Kizad - Khalifa Industrial Zone - Abu Dhabi
            </p>
          </motion.div>
        </div>
        <div className='sm:h-16 bg-[#0B3931] lg:mt-20 mt-6'>
          <div className='2xl:max-w-[1440px] 2xl:mx-auto flex flex-wrap lg:flex-nowrap lg:mx-[90px] mx-3 justify-between py-5 text-white text-base font-normal font-secondary leading-normal'>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false }}
            >
              © Pure Pharmaceutical. All Rights Reserved {currentYear}
            </motion.h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;