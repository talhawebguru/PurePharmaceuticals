import React from "react";
import Image from "next/image";
import Product1 from "@/public/images/homeProduct1.svg";
import Product2 from "@/public/images/homeProduct2.svg";
import Product3 from "@/public/images/homeProduct3.svg";
import Product4 from "@/public/images/homeProduct4.svg";

const Products = () => {
  return (
    <>
      <div className="xl:px-[90px] lg:px-10 px-5 lg:mt-44 mt-14 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <div className="flex justify-start ">
          <button className="py-[10px] px-[18px]  border border-[#0e493f] rounded-3xl text-[#0e493f] text-base font-normal font-arial leading-[16.86px]">
            Shop By Category
          </button>
        </div>
        <h2 className="text-[#0e493f] text-[42px] font-normal font-arial leading-[44.25px] mt-4">
          Leading the Way to Better Health
        </h2>
        <div className="grid gap-5 lg:grid-cols-4 sm:grid-cols-2 mt-12">
          <div className="bg-light-green flex flex-col justify-center items-center min-w-[30%] h-[330px]">
            <div>
              <Image src={Product1} alt="Products" />
            </div>
            <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">Solid Dosage Forms</h2>
            <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">Purepharma Product</p>
          </div>
          <div className="bg-light-green flex flex-col justify-center items-center min-w-[30%] h-[330px]">
            <div>
              <Image src={Product2} alt="Products" />
            </div>
            <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">Antiseptic Solution</h2>
            <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">Purepharma Product</p>
          </div>
          <div className="bg-light-green flex flex-col justify-center items-center min-w-[30%] h-[330px]">
            <div>
              <Image src={Product3} alt="Products" />
            </div>
            <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">Cream & Ointments</h2>
            <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">Purepharma Product</p>
          </div>
          <div className="bg-light-green flex flex-col justify-center items-center min-w-[30%] h-[330px]">
            <div>
              <Image src={Product4} alt="Products" />
            </div>
            <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">Oral Liquid</h2>
            <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">Purepharma Product</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Products;
