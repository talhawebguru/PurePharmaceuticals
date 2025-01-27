"use client";
import React, { useState, useEffect } from "react";
import productData from "@/data/products";

const ProductDataNew = ({ selectedCategory }) => {
  const filteredProducts =
    selectedCategory === "All Products"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const displayedProducts = filteredProducts.flatMap((category) =>
    category.products.map((product) => ({
      name: product.product,
      strength: product.strength,
      packSize: product.packSize,
      forms: product.forms,
    }))
  );

  return (
    <div className="overflow-x-auto w-full mt-16">
      <table className="min-w-full w-full max-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Strength</th>
            <th className="py-2 px-4 border-b">Pack Size</th>
            <th className="py-2 px-4 border-b">Forms</th>
          </tr>
        </thead>
        <tbody>
          {displayedProducts.map((info, id) => (
            <tr key={id} className="">
              <td className="py-4 px-4 border-b text-center">{info.name}</td>
              <td className="py-4 px-4 border-b text-center">{info.strength}</td>
              <td className="py-4 px-4 border-b text-center">{info.packSize}</td>
              <td className="py-4 px-4 border-b text-center">{info.forms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDataNew;