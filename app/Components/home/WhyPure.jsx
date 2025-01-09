"use client"
import React , { useState }from "react";
import Image from "next/image";
import Doctor from "@/public/images/doctor.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const WhyPure = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
    <div className="xl:px-[90px] lg:px-10 px-5 bg-[#0E493F] ">
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 flex flex-col lg:flex-row">
        <div className="lg:mt-32 mt-12 lg:w-[50%]">
          <button className="h-[37px] px-[15px] py-2.5 rounded-[71px] border border-white justify-center items-center gap-2.5 inline-flex text-white text-base font-normal font-arial leading-[16.86px]">
            Why Pure Pharmaceuticals
          </button>
          <h2 className="text-white xl:w-[85%] 2xl:w-[90%] sm:w-[90%] text-[42px] font-normal font-arial leading-[44.25px] mt-4">
            Your Reliable Partner in Exceptional Healthcare
          </h2>
          <div className="mt-11 flex flex-col gap-6 mb-16">
            <div className="border border-light-pink py-6 pl-9 pr-6">
              <div
                className="flex justify-between text-white text-2xl font-normal font-arial leading-relaxed items-center gap-2 cursor-pointer"
                onClick={() => toggleAccordion(0)}
              >
                <h2>Exceptional Quality Assurance</h2>{" "}
                {activeIndex === 0 ? (
                  <FaAngleUp className="w-6 h-6" />
                ) : (
                  <FaAngleDown className="w-6 h-6" />
                )}
              </div>
              {activeIndex === 0 && (
                <p className="mt-4 text-white text-base font-normal font-secondary leading-normal w-[90%]">
                  We uphold rigorous quality standards in every product we deliver. From sourcing the finest ingredients to following advanced manufacturing practices, we ensure our products meet global standards for safety and efficacy.
                </p>
              )}
            </div>
            <div className="border border-light-pink  py-6 pl-9 pr-6">
              <div
                className="flex justify-between text-white text-2xl font-normal font-arial leading-relaxed items-center gap-2 cursor-pointer"
                onClick={() => toggleAccordion(1)}
              >
                <h2>Innovative Healthcare Solutions</h2>{" "}
                {activeIndex === 1 ? (
                  <FaAngleUp className="w-6 h-6" />
                ) : (
                  <FaAngleDown className="w-6 h-6" />
                )}
              </div>
              {activeIndex === 1 && (
                <p className="mt-4 text-white text-base font-normal font-secondary leading-normal w-[90%]">
                  Our research-driven approach enables us to create cutting-edge solutions tailored to modern healthcare needs. We strive to improve lives through continuous innovation and technological advancement.
                </p>
              )}
            </div>
            <div className="border border-light-pink  py-6 pl-9 pr-6">
              <div
                className="flex justify-between text-white text-2xl font-normal font-arial leading-relaxed items-center gap-2 cursor-pointer"
                onClick={() => toggleAccordion(2)}
              >
                <h2>Customer-Centric Approach</h2>{" "}
                {activeIndex === 2 ? (
                  <FaAngleUp className="w-6 h-6" />
                ) : (
                  <FaAngleDown className="w-6 h-6" />
                )}
              </div>
              {activeIndex === 2 && (
                <p className="mt-4 text-white text-base font-normal font-secondary leading-normal w-[90%]">
                  At the heart of our mission is you—our customers. We believe in building trust and fostering long-lasting relationships by delivering reliable services and exceptional support.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] lg:relative">
          <Image
            src={Doctor}
            alt="Doctor"
            className="lg:absolute lg:bottom-0 max-h-full"
          />
        </div>
      </div>
    </div>
  </>
  );
};

export default WhyPure;
