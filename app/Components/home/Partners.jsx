import React, { memo } from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import Partner1 from "@/public/images/partner1.svg";
import Partner2 from "@/public/images/partner2.svg";
import Partner3 from "@/public/images/partner3.svg";
import Partner4 from "@/public/images/partner4.svg";
import Partner5 from "@/public/images/partner5.svg";
import Partner6 from "@/public/images/partner6.svg";
import Partner7 from "@/public/images/partner7.svg";
import Partner8 from "@/public/images/partner8.svg";
import Partner9 from "@/public/images/partner9.svg";

const partnersData = [
  { src: Partner1, alt: "Healthcare Partner 1" },
  { src: Partner2, alt: "Healthcare Partner 2" },
  { src: Partner3, alt: "Healthcare Partner 3" },
  { src: Partner4, alt: "Healthcare Partner 4" },
  { src: Partner5, alt: "Healthcare Partner 5" },
  { src: Partner6, alt: "Healthcare Partner 6" },
  { src: Partner7, alt: "Healthcare Partner 7" },
  { src: Partner8, alt: "Healthcare Partner 8" },
  { src: Partner9, alt: "Healthcare Partner 9" },
];

const Partners = memo(() => {
  return (
    <section className="mt-24 2xl:w-[1500px] 2xl:mx-auto">
      <motion.h2
        className="text-[#0e493f] text-2xl md:text-[42px] font-normal font-arial leading-[44.25px] text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Trusted Partners
      </motion.h2>
      <div className="mt-16 flex flex-wrap justify-center">
        {partnersData.map((partner, index) => (
          <motion.div
            key={index}
            className="w-[400px] h-[150px] flex justify-center items-center xl:border-r xl:border-t xl:border-[#c4c4c4] hover:bg-gray-50 transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image 
              src={partner.src} 
              alt={partner.alt} 
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
});

Partners.displayName = 'Partners';

export default Partners;
