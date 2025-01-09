"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import Doctor from "@/public/images/doctor.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const WhyPure = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <div className="xl:px-[90px] lg:px-10 px-5 bg-[#0b3931] ">
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 flex flex-col lg:flex-row">
        <motion.div
          className="lg:mt-32 mt-12 lg:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className=" text-white md:w-[200px] text-4xl md:text-[42px] font-normal font-arial leading-[44.25px]"
          >
           Why Pure 
           Pharmaceuticals
          </h2>
          <h3 className="text-white text-xl md:text-[26px] font-normal font-arial leading-7 mt-4">
            Your Reliable Partner in Exceptional Healthcare
          </h3>
          <div className="mt-11 flex flex-col gap-6 mb-16">
            {[
              {
                title: "Exceptional Quality Assurance",
                description:
                  "We uphold rigorous quality standards in every product we deliver. From sourcing the finest ingredients to following advanced manufacturing practices, we ensure our products meet global standards for safety and efficacy.",
              },
              {
                title: "Innovative Healthcare Solutions",
                description:
                  "Our research-driven approach enables us to create cutting-edge solutions tailored to modern healthcare needs. We strive to improve lives through continuous innovation and technological advancement.",
              },
              {
                title: "Customer-Centric Approach",
                description:
                  "At the heart of our mission is you—our customers. We believe in building trust and fostering long-lasting relationships by delivering reliable services and exceptional support.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="border border-light-pink py-6 pl-9 pr-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="flex justify-between text-white text-2xl font-normal font-arial leading-relaxed items-center gap-2 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2>{item.title}</h2>
                  {activeIndex === index ? (
                    <FaAngleUp className="w-6 h-6" />
                  ) : (
                    <FaAngleDown className="w-6 h-6" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-white text-base font-normal font-secondary leading-normal w-[90%]">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="lg:w-[50%] lg:relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={Doctor}
            alt="Doctor"
            className="lg:absolute lg:bottom-0 max-h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyPure;
