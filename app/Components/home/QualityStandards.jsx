import React from "react";
import * as motion from "motion/react-client"
import Quality1 from "@/public/images/quality1.png";
import Quality2 from "@/public/images/quality2.png";
import QualityStandardItem from "./QualityStandardItem";

const qualityStandardsData = [
  {
    src: Quality1,
    alt: "Quality Standards",
    title: "UAE GMP Certificate from Ministry of Health and Prevention",
    description: "وزارة الصحة و وقاية المجتمع - الإمارات",
  },
  {
    src: Quality2,
    alt: "Quality Standards",
    title: "450001:2018",
    description: "International Organization for Standardization",
  },
  {
    src: Quality2,
    alt: "Quality Standards",
    title: "450001:2018",
    description: "International Organization for Standardization",
  },
  {
    src: Quality2,
    alt: "Quality Standards",
    title: "450001:2018",
    description: "International Organization for Standardization",
  },
];

const QualityStandards = () => {
  return (
    <section className="py-20 md:py-40 xl:px-[90px] lg:px-[40px] px-5 2xl:max-w-[1440px] 2xl:mx-auto">
      <motion.h2
        className="text-primary text-2xl md:text-[42px] font-normal font-arial leading-[44.25px] text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Quality Standards
      </motion.h2>
      <motion.p
        className="text-black text-sm md:text-base font-normal font-secondary leading-normal text-center mt-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Pure Pharma utilizes its quality system to drive improvement.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20">
        {qualityStandardsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <QualityStandardItem
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QualityStandards;
