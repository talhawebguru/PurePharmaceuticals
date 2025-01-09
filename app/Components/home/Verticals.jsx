"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Vertical1 from "@/public/images/binAli.svg";
import Vertical2 from "@/public/images/safeGreen.svg";
import Vertical3 from "@/public/images/safeBlue.svg";
import Vertical4 from "@/public/images/safeEx.svg";
import Vertical5 from "@/public/images/careMedical.svg";
import Vertical6 from "@/public/images/ajDrugs.svg";
import Vertical7 from "@/public/images/jurhy.svg";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client"


const Verticals = () => {
  return (
    <>
      <div className="mt-24 px-14 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 mb-40">
        <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{once: true}}
        className="text-primary text-2xl md:text-[42px] font-normal font-arial leading-[44.25px] text-center">
          Our Verticals
        </motion.h2>
        <div className="mt-14">
          <div >
            <Marquee autoFill className="">
              <Image
                src={Vertical1}
                alt="COMPANY name"
                className="grayscale hover:grayscale-0 ml-16"
              />
              <Image
                src={Vertical2}
                alt="COMPANY name"
                className="grayscale hover:grayscale-0 ml-16"
              />
              <Image
                src={Vertical3}
                alt="COMPANY name"
                className="grayscale hover:grayscale-0 ml-16"
              />
              <Image
                src={Vertical4}
                alt="COMPANY name"
                className="grayscale hover:grayscale-0 ml-16"
              />
              <Image
                src={Vertical5}
                alt="COMPANY name"
                className="grayscale hover:grayscale-0 ml-16"
              />
              <Image
                src={Vertical6}
                alt="COMPANY name"
                className="grayscale hover:grayscale-0 ml-16"
              />
              <Image
                src={Vertical7}
                alt="COMPANY name"
                className="grayscale hover:grayscale-0 ml-16"
              />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verticals;
