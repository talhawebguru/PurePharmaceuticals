import React from 'react'
import Image from "next/image";
import Partner1 from "@/public/images/partner1.svg";
import Partner2 from "@/public/images/partner2.svg";
import Partner3 from "@/public/images/partner3.svg";
import Partner4 from "@/public/images/partner4.svg";
import Partner5 from "@/public/images/partner5.svg";
import Partner6 from "@/public/images/partner6.svg";

const CorporatePatners = () => {
  return (
    <>
     <div className="mt-16 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          <div className=" h-[150px] bg-white border border-black/10 flex justify-center items-center ">
            <Image src={Partner1} alt="Partners" />
          </div>
          <div className="h-[150px] bg-white border border-black/10 flex justify-center items-center ">
            <Image src={Partner2} alt="Partners" />
          </div>
          <div className="h-[150px] bg-white border border-black/10 flex justify-center items-center">
            <Image src={Partner3} alt="Partners" />
          </div>
          <div className=" h-[150px] bg-white border border-black/10 flex justify-center items-center  ">
            <Image src={Partner4} alt="Partners" />
          </div>
          <div className=" h-[150px] bg-white border border-black/10 flex justify-center items-center ">
            <Image src={Partner5} alt="Partners" />
          </div>
          <div className=" h-[150px] bg-white border border-black/10 flex justify-center items-center ">
            <Image src={Partner6} alt="Partners" />
          </div>
          
        </div>
    </>
  )
}

export default CorporatePatners