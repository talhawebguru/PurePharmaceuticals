import React, { memo } from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import Product1 from "@/public/images/committed1.svg";
import Product2 from "@/public/images/committed2.svg";
import Product3 from "@/public/images/committed3.svg";
import Product4 from "@/public/images/committed4.svg";
import Product5 from "@/public/images/committed5.svg";
import Product6 from "@/public/images/committed6.svg";

const commitmentData = [
  {
    src: Product1,
    alt: "Manufacturing Excellence",
    title: "To Manufacture",
    description: "World Class Pharma Formulations",
  },
  {
    src: Product2,
    alt: "Customer Satisfaction",
    title: "To Satisfy",
    description: "Need And Expectations Of Customers",
  },
  {
    src: Product3,
    alt: "Employee Engagement",
    title: "To Ensure",
    description: "Employee Involvement",
  },
  {
    src: Product4,
    alt: "Quality Assurance",
    title: "To Build",
    description: "Quality At Each And Every Level",
  },
  {
    src: Product5,
    alt: "Safety Standards",
    title: "To Assure",
    description: "Commitment To Safety",
  },
  {
    src: Product6,
    alt: "Continuous Innovation",
    title: "To Invest In",
    description: "Continuous Improvement",
  },
];

const CommitmentItem = memo(({ src, alt, title, description, index }) => (
  <motion.div
    className="bg-white flex flex-col justify-center items-center min-w-[30%] h-[330px] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="w-[97px] h-[97px] bg-[#ecf8f2] rounded-full flex justify-center items-center">
      <Image src={src} alt={alt} width={40} height={40} loading="lazy" />
    </div>
    <h3 className="text-[#0a362f] text-2xl font-normal font-arial leading-relaxed mt-10">
      {title}
    </h3>
    <p className="mt-4 text-[#0b372f] text-base font-normal font-['Inter'] leading-[16.86px] text-center px-4">
      {description}
    </p>
  </motion.div>
));

CommitmentItem.displayName = 'CommitmentItem';

const PureCommitted = memo(() => {
  return (
    <section className="xl:px-[90px] lg:px-10 px-5 lg:mt-40 mt-14 2xl:px-0 bg-light-pink">
      <motion.h2
        className="text-primary text-2xl md:text-[42px] pt-28 2xl:max-w-[1440px] 2xl:mx-auto font-normal font-arial leading-[44.25px] text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Purepharma Committed
      </motion.h2>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto pb-40">
        <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 mt-12">
          {commitmentData.map((item, index) => (
            <CommitmentItem
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

PureCommitted.displayName = 'PureCommitted';

export default PureCommitted;
