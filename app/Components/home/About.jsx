import React from "react";
import Image from "next/image";
import AboutImg from "@/public/images/aboutPure.svg";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 flex flex-col lg:flex-row items-center 2xl:justify-between  xl:px-[90px] lg:px-10 px-5 lg:mt-44 mt-14 gap-20">
        <div className="xl:w-[640px]">
          <Image src={AboutImg} alt="About Image " className="xl:w-full" />
        </div>
        <div className="lg:w-6/12  lg:pt-24 pt-5">
          <Link href="/about/company">
            <button className="p-[10px] text-[#0E493F] text-base font-normal leading-[16.86px] font-arial border rounded-3xl border-[#0E493F]">
              About Pure Pharmaceuticals
            </button>
          </Link>

          <h2 className="text-[#0E493F] font-normal font-arial leading-[44.25px] text-[42px] mt-4">
            Raising Pharmaceutical Standards from Abu Dhabi to Worldwide
            Excellence
          </h2>
          <p className="text-black text-base font-normal font-secondary leading-normal mt-4">
            Pure Pharmaceuticals is committed to upholding the highest standards
            of quality and safety in the production of pharmaceuticals, from our
            base in Abu Dhabi to our global reach. Our state-of-the-art
            facilities employ rigorous quality control measures at every stage
            of the manufacturing process, ensuring that our products meet or
            exceed international regulatory requirements. We adhere strictly to
            Good Manufacturing Practices (GMP) and employ cutting-edge
            technology to guarantee the purity, potency, and efficacy of our
            medications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
