import React from "react";
import Image from "next/image";
import HeroImg from "@/public/images/Hero.svg";
import RightArrow from "@/public/images/rightArrow.svg";

const Hero = () => {
  return (
    <>
      <div className="xl:px-[90px] lg:px-10 px-5 xl:pt-[135px] lg:pt-32 sm:pt-10 xs:pt-5 bg-[#ECF8F2] xl:pb-44">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[55%] mt-1">
            <h2 className="text-[#0b3931] xl:text-[52px] text-5xl xs:text-4xl font-normal font-['Arial] leading-[54.79px] mt-7 ">Welcome to <br/> Pure Pharmaceuticals</h2>
            <p className="text-[#2f2f2f] text-base font-normal font-['Inter'] leading-normal mt-5 xl:w-[90%]">
              Welcome to Pure Pharmaceuticals, your trusted source for
              high-quality pharmaceutical products in Kisad, Abu Dhabi. We are
              committed to excellence and customer satisfaction, ensuring all
              our products meet the highest standards of quality, safety, and
              efficacy. Whether you need over-the-counter medications,
              prescription drugs, or specialty pharmaceuticals, you can rely on
              us for effective solutions.
            </p>
            <button className="flex gap-3 items-center mt-14 bg-[#0e493f] py-4 px-6 text-white text-base font-normal font-['Arial'] leading-[16.86px] ">Get Start <Image src={RightArrow} alt="Arrow"/></button>
          </div>
          <div className="flex mt-10 md:mt-0 xs:pb-5">
            <Image src={HeroImg} alt="Company Img" />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Hero;
