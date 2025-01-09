import React from "react";
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

const Partners = () => {
  return (
    <div className="mt-24 2xl:w-[1500px] 2xl:mx-auto ">
      <motion.h2
        className="text-[#0e493f] text-[42px] font-normal font-arial leading-[44.25px] text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Trusted Partners
      </motion.h2>
      <div className="mt-16 flex flex-wrap justify-center">
        {[Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7, Partner8, Partner9].map((src, index) => (
          <motion.div
            key={index}
            className="w-[400px] h-[150px] flex justify-center items-center xl:border-r xl:border-t xl:border-[#c4c4c4]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image src={src} alt="Partners" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
