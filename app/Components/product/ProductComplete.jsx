"use client"
import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "@/public/images/arrowDown.svg";
import CategoryList from "./CategoryList";
import ProductData from "./ProductData";
import ProductDataNew from "./ProductDataNew";

const ProductComplete = () => {

  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap  2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0  md:justify-between justify-center xl:px-[90px] lg:px-[40px] px-5 gap-5">
        <div className=" md:w-[26%] xl:w-[350px] w-full  mt-14 ">
          <div className="xl:w-[350px] pb-3 bg-white shadow">
            <form className="flex mb-3">
              <input
                type="text"
                className="w-full xl:w-[350px]  h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#bdbab8] text-[13px] font-normal font-primary leading-tight"
                placeholder="Search"
              />
            </form>
            <div className="flex items-center content-center justify-between pt-6 mx-4">
              <h2 className="text-divi-gray text-2xl font-normal font-nohemi leading-[28.80px]">
                Categories
              </h2>
              <div>
                <Image src={ArrowDown} alt="Arrow Down" />
              </div>
            </div>
            <div className="w-full h-[0px] border border-[#eae9e8] mt-6"></div>
            {/* Categories List Call */}
            <CategoryList  onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
          </div>
        </div>
        <div className="xl:w-[70%] md:w-[74%] w-full">
          {/* <ProductData gridSizeL={3} gridSizeM={2} gridSizeS={2} limit={12}  selectedCategory={selectedCategory}/> */}
          <ProductDataNew selectedCategory={selectedCategory} />
          {/* <div className="flex gap-2 justify-center lg:mt-16 mt-5 lg:mb-20 mb-5 ">
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center rotate-90">
              <Image src={ArrowDown} alt="Arrow Down" />
            </div>
            <div className="w-10 h-10  shadow flex justify-center items-center bg-primary text-[white] text-base font-normal font-primary leading-normal">
              1
            </div>
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center text-[#554e49] text-base font-normal font-primary leading-normal">
              2
            </div>
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center text-[#554e49] text-base font-normal font-primary leading-normal">
              3
            </div>
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center text-[#554e49] text-base font-normal font-primary leading-normal">
              4
            </div>
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center -rotate-90">
              <Image src={ArrowDown} alt="Arrow Down" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductComplete;
