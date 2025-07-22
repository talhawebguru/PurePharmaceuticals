"use client";
import React, { useState, memo, useCallback } from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import Doctor from "@/public/images/doctor.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const accordionData = [
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
];

const AccordionItem = memo(({ item, index, activeIndex, onToggle }) => {
  const isActive = activeIndex === index;
  
  return (
    <motion.div
      className="border border-light-pink md:py-6 md:pl-9 md:pr-6 p-5 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div
        className="flex justify-between text-white text-xl md:text-2xl font-normal font-arial leading-relaxed items-center gap-2 cursor-pointer"
        onClick={() => onToggle(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onToggle(index);
          }
        }}
        aria-expanded={isActive}
        aria-controls={`accordion-content-${index}`}
      >
        <h3>{item.title}</h3>
        {isActive ? (
          <FaAngleUp className="w-6 h-6 flex-shrink-0" />
        ) : (
          <FaAngleDown className="w-6 h-6 flex-shrink-0" />
        )}
      </div>
      <motion.div
        id={`accordion-content-${index}`}
        initial={false}
        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        {isActive && (
          <p className="mt-4 text-white text-base font-normal font-secondary leading-normal w-[90%]">
            {item.description}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
});

AccordionItem.displayName = 'AccordionItem';

const WhyPure = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = useCallback((index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  }, [activeIndex]);

  return (
    <section className="xl:px-[90px] lg:px-10 px-5 bg-[#0b3931] overflow-hidden">
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 flex flex-col lg:flex-row">
        <motion.div
          className="lg:mt-32 mt-12 lg:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white md:w-[200px] text-4xl md:text-[42px] font-normal font-arial leading-[44.25px]">
           Why Pure Pharmaceuticals
          </h2>
          <h3 className="text-white text-xl md:text-[26px] font-normal font-arial leading-7 mt-4">
            Your Reliable Partner in Exceptional Healthcare
          </h3>
          <div className="mt-11 flex flex-col gap-6 mb-16">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
                onToggle={toggleAccordion}
              />
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
            alt="Healthcare Professional - Pure Pharmaceuticals"
            className="lg:absolute lg:bottom-0 max-h-full"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2k3RGiAdHzEd+MyFWzYfEQR1AAbE+U25E..."
          />
        </motion.div>
      </div>
    </section>
  );
});

WhyPure.displayName = 'WhyPure';

export default WhyPure;
