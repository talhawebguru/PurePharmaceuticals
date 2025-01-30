"use client";
import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "@/app/services/api";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsByCategory(params.categorySlug);
        if (response.data) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setLoading(false);
      }
    };

    if (params.categorySlug) {
      fetchProducts();
    }
  }, [params.categorySlug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#179f8e]"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-gray-500">No products found for this category.</p>
      </div>
    );
  }

  return (
    <>
      <div className="xl:mx-[90px] lg:mx-[40px] mx-5 2xl:max-w-[1440px] 2xl:mx-auto mt-12 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 xl:px-20 lg:px-10 sm:px-5 px-2.5">
        {products.map((product, index) => (
          <Link
            href={`/product/${params.categorySlug}/${product.slug}`}
            key={index}
          >
            <div
              key={index}
              className="w-full h-28 bg-[#179f8e]/5 rounded-[20px] flex items-center justify-start gap-5"
            >
              <div className="w-[0px] h-[50px] border-4 border-[#179f8e] ml-5"></div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h2 className="text-[#18130f] text-2xl font-normal font-['Arial'] leading-[28.80px]">
                  {product.name}
                </h2>
                <p>{product.therapeutic_segments[0]?.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
