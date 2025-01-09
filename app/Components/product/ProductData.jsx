"use client"
import React , { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Product1 from "@/public/images/product1.webp";


const productData = [
  {
    id:"1",
    name: "one piece Colostomy Ostomy bag ",
    model: "Model: 1106",
    url: Product1,
    action: "View details",
    category: "Antihypertensives"
  },
  
];

const ProductData = ({initialLimit,gridSizeL,gridSizeM,gridSizeS, selectedCategory, mobileLimit}) => {

  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    const updateLimitBasedOnScreenSize = () => {
      if (window.innerWidth <= 640) { // Mobile screen size (<= 640px)
        setLimit(mobileLimit);
      } else {
        setLimit(initialLimit);
      }
    };

    updateLimitBasedOnScreenSize();
    
    window.addEventListener('resize', updateLimitBasedOnScreenSize);

    return () => {
      window.removeEventListener('resize', updateLimitBasedOnScreenSize);
    };
  }, [initialLimit, mobileLimit]);

  const filteredProducts = selectedCategory === "All Products" ? productData : productData.filter(product => product.category === selectedCategory);

const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;
  return (
    <>
      <div className={`grid gap-10 justify-center mt-14 grid-cols-1 sm:grid-cols-${gridSizeS} md:grid-cols-${gridSizeM} lg:grid-cols-${gridSizeL}`}>
  {displayedProducts.map((item, index) => (
    <div
      className="bg-white shadow-lg  flex flex-col  py-8  justify-center"
      key={index}
    >
      <Image src={item.url} alt={item.name} className="mx-auto " width={200} height={200} />
      <div className="ml-5">
        <h3 className="text-black text-[13px] font-normal font-primary mt-10">{item.model}</h3>
        <h2 className="text-black text-[13px] font-normal font-primary mt-1">
          {item.name}
        </h2>
        <div className="mt-6">
          <button className="px-[13px] py-[5px] border border-primary text-primary text-base font-medium font-primary">
            <Link href={`/product/singleP`} >{item.action}</Link>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
    </>
  );
};

export default ProductData;
