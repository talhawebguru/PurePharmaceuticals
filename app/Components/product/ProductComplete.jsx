"use client"
import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "@/public/images/arrowDown.svg";
import CategoryList from "./CategoryList";
import ProductData from "./ProductData";
import ProductDataNew from "./ProductDataNew";

const ProductComplete = () => {

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);


  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <div
              className="flex items-center content-center justify-between pt-6 mx-4 ">
              <h2 className="text-divi-gray text-2xl font-normal font-nohemi leading-[28.80px]">
                Categories
              </h2>
              <div onClick={toggleDropdown} className="cursor-pointer">
                <Image src={ArrowDown} className={`${isDropdownOpen ? "" : "rotate-180"}`}   alt="Arrow" />
              </div>
            </div>
            {isDropdownOpen && (
              <>
                <div className="w-full h-[0px] border border-[#eae9e8] mt-6"></div>
                {/* Categories List Call */}
                <CategoryList
                  onCategorySelect={handleCategorySelect}
                  selectedCategory={selectedCategory}
                />
              </>
            )}
          </div>
          </div>
        <div className="xl:w-[70%] md:w-[74%] w-full">
          <ProductDataNew selectedCategory={selectedCategory} />
        </div>
      </div>
    </>
  );
};

export default ProductComplete;
