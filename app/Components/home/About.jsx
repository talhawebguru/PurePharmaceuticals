import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import AboutImg from "@/public/images/aboutPure.svg";
import Link from "next/link";

const About = () => {
  return (
    <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 flex flex-col lg:flex-row items-center 2xl:justify-between xl:px-[90px] lg:px-10 px-5 lg:mt-44 mt-14 gap-20">
      <motion.div
        className="xl:w-[640px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image src={AboutImg} alt="About Image" className="xl:w-full" />
      </motion.div>
      <motion.div
        className="lg:w-6/12 lg:pt-24 pt-5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link href="/about/company">
          <h2
            className="text-[#0e493f] w-60 text-4xl md:text-[42px] font-normal font-arial leading-[44.25px]"
       
          >
            About Pure Pharmaceuticals
          </h2>
        </Link>

        <h3 className="sm:w-[523px] text-[#0e493f] text-2xl  md:text-[26px] font-normal font-arial mt-4 leading-7mt-4">
          Raising Pharmaceutical Standards from Abu Dhabi to Worldwide Excellence
        </h3>
        <p className="text-black text-base font-normal font-secondary leading-normal mt-4">
          Pure Pharmaceuticals is committed to upholding the highest standards of quality and safety in the production of pharmaceuticals, from our base in Abu Dhabi to our global reach. Our state-of-the-art facilities employ rigorous quality control measures at every stage of the manufacturing process, ensuring that our products meet or exceed international regulatory requirements. We adhere strictly to Good Manufacturing Practices (GMP) and employ cutting-edge technology to guarantee the purity, potency, and efficacy of our medications.
        </p>

        <motion.button 
          className="mt-6 bg-[#0e493f] text-white text-base font-bold font-secondary px-6 py-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/about/company">Learn More</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
