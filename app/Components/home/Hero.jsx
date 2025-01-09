import React from "react";
import Image from "next/image";
import RightArrow from "@/public/images/rightArrow.svg";
import HeroImg from "@/public/images/heroImg.svg";

const Hero = () => {
  return (
    <>
      <div className="md:bg-hero-pattern sm:bg-no-repeat sm:bg-cover sm:bg-center xs:bg-origin-content mt-7 2xl:px-0 xl:px-[90px] lg:px-10 px-5 xl:pt-[115px] lg::pt-20 sm:pt-10 xs:mt-0  xl:pb-44">
      <div className="md:hidden mt-0">
            <Image src={HeroImg} alt="Company Img" className="w-full "  />
          </div>
        <div className="flex flex-col md:flex-row 2xl:max-w-[1440px] 2xl:mx-auto mt-4 md:mt-0">
          <div className="md:w-[55%] mt-1">
            <h2 className="text-[#0b3931] xl:text-[52px] text-5xl xs:text-4xl font-normal font-arial leading-[54.79px] xl:mt-7 ">Welcome to <br className="hidden xl:block"/> Pure Pharmaceuticals</h2>
            <p className="text-[#2f2f2f] text-base font-normal font-secondary leading-normal mt-5 xl:w-[78%] lg:w-[80%]">
              Welcome to Pure Pharmaceuticals, your trusted source for
              high-quality pharmaceutical products in Kizad, Abu Dhabi. We are
              committed to excellence and customer satisfaction, ensuring all
              our products meet the highest standards of quality, safety, and
              efficacy. Whether you need over-the-counter medications,
              prescription drugs, or specialty pharmaceuticals, you can rely on
              us for effective solutions.
            </p>
            <button className="flex gap-3 items-center mt-14 bg-[#0e493f] py-4 px-6 text-white text-base font-normal font-arial leading-[16.86px] mb-8">Get Start <Image src={RightArrow} alt="Arrow"/></button>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Hero;
