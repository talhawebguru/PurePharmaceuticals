import React from "react";
import Image from "next/image";
import Partner1 from "@/public/images/partner1.svg";
import Partner2 from "@/public/images/partner2.svg";
import Partner3 from "@/public/images/partner3.svg";
import Partner4 from "@/public/images/partner4.svg";
import Partner5 from "@/public/images/partner5.svg";
import Partner6 from "@/public/images/partner6.svg";
import Partner7 from "@/public/images/partner7.svg";
import Partner8 from "@/public/images/partner8.svg";
import Partner9 from "@/public/images/partner9.svg";

const Partners = () => {
  return (
    <>
      <div className="mt-24 2xl:w-[1500px] 2xl:mx-auto ">
        <h2 className="text-black text-2xl font-normal font-['Arial'] leading-relaxed text-center">
          Our Trusted Partners
        </h2>
        <div className="mt-16 flex flex-wrap justify-center">
          <div className="w-[400px] h-[150px] flex justify-center items-center xl:border-r xl:border-[#c4c4c4]">
            <Image src={Partner1} alt="Partners" />
          </div>
          <div className="w-[400px] h-[150px] flex justify-center items-center xl:border-r xl:border-[#c4c4c4]">
            <Image src={Partner2} alt="Partners" />
          </div>
          <div className="w-[400px] h-[150px] flex justify-center items-center  xl:border-[#c4c4c4]">
            <Image src={Partner3} alt="Partners" />
          </div>
          <div className="w-[400px] h-[150px] flex justify-center items-center xl:border-r xl:border-t xl:border-[#c4c4c4]">
            <Image src={Partner4} alt="Partners" />
          </div>
          <div className="w-[400px] h-[150px] flex justify-center items-center xl:border-r xl:border-t xl:border-[#c4c4c4]">
            <Image src={Partner5} alt="Partners" />
          </div>
          <div className="w-[400px] h-[150px] flex justify-center items-center xl:border-t xl:border-[#c4c4c4]">
            <Image src={Partner6} alt="Partners" />
          </div>
          <div className="w-[400px] h-[150px] flex justify-center items-center xl:border-r xl:border-t xl:border-[#c4c4c4]">
            <Image src={Partner7} alt="Partners" />
          </div>
          <div className="w-[400px] h-[150px] flex justify-center items-center xl:border-r xl:border-t xl:border-[#c4c4c4]">
            <Image src={Partner8} alt="Partners" />
          </div>
          <div className="w-[400px] h-[150px] flex justify-center items-center xl:border-t xl:border-[#c4c4c4]">
            <Image src={Partner9} alt="Partners" />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Partners;
