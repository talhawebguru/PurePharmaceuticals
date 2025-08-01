import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import RightArrow from "@/public/images/rightArrow.svg";
import HeroImg from "@/public/images/heroImg.svg";

const Hero = () => {
  return (
    <div className="md:bg-hero-pattern sm:bg-no-repeat sm:bg-cover sm:bg-center xs:bg-origin-content mt-7 2xl:px-0 xl:px-[90px] lg:px-10 px-5 xl:pt-[115px] lg::pt-20 sm:pt-10 xs:mt-0 xl:pb-44 overflow-x-hidden">
      <motion.div
        className="md:hidden mt-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image 
          src={HeroImg} 
          alt="Pure Pharmaceuticals - High-quality pharmaceutical products" 
          className="w-full" 
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2k3RGiAdHzEd+MyFWzYfEQR1AAbE+U25E..."
        />
      </motion.div>
      <div className="flex flex-col md:flex-row 2xl:max-w-[1440px] 2xl:mx-auto  mt-4 md:mt-0">
        <motion.div
          className="md:w-[55%] mt-1 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#0b3931] xl:text-[52px] text-5xl xs:text-4xl font-normal font-arial leading-[54.79px] xl:mt-7">
            Welcome to <br className="hidden xl:block" /> Pure Pharmaceuticals
          </h1>
          <p className="text-[#2f2f2f] text-base font-normal font-secondary leading-normal mt-5 xl:w-[78%] lg:w-[80%]">
            Welcome to Pure Pharmaceuticals, your trusted source for
            high-quality pharmaceutical products in Kizad, Abu Dhabi. We are
            committed to excellence and customer satisfaction, ensuring all our
            products meet the highest standards of quality, safety, and
            efficacy. Whether you need over-the-counter medications,
            prescription drugs, or specialty pharmaceuticals, you can rely on
            us for effective solutions.
          </p>
          <motion.button
            className="flex gap-3 items-center mt-14 bg-[#0e493f] py-4 px-6 text-white text-base font-normal font-arial leading-[16.86px] mb-8 hover:bg-[#0d4439] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get started with Pure Pharmaceuticals"
          >
            Get Started <Image src={RightArrow} alt=" Right Arrow" width={16} height={16} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
