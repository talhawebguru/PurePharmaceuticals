"use client"
import React from "react";
import categoryList from "@/data/CategoryList";


const CategoryList = ({ onCategorySelect, selectedCategory  }) => {
  return (
    <>
      <div className="pb-4 lg:pb-0">
        {categoryList.map((info,id) => ( 
          <div className="flex gap-3 mx-4 mt-4 cursor-pointer" key={id} onClick={() => onCategorySelect(info.name)}>
          <div
            className={`w-6 h-6 border ${
              selectedCategory === info.name ? 'border-primary' : 'border-divi-gray-300'
            } rounded-full flex justify-center items-center content-center`}
          >
            <div
              className={`w-4 h-4 border ${
                selectedCategory === info.name ? 'border-primary bg-primary' : 'border-white'
              } rounded-full`}
            ></div>
            </div>
            <div>
              <h2 className="text-divi-gray-300 text-base font-normal font-primary leading-normal">
                {info.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
