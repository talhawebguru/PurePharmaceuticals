"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductImage from "@/public/images/productImage.png";
import { LuDownload } from "react-icons/lu";
import { getProductBySlug } from "@/app/services/api";
import { useParams } from "next/navigation";
import RichTextRenderer from "./RichTextRenderer";
import { motion } from "motion/react";
import { TbInfoTriangleFilled } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDisplay = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductBySlug(params.productSlug);
        if (response.data && response.data.length > 0) {
          setProduct(response.data[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    if (params.productSlug) {
      fetchProduct();
    }
  }, [params.productSlug]);

  if (loading) {
    return (
      <div className="xl:mx-[90px] lg:mx-[40px] mx-5 2xl:max-w-[1440px] 2xl:mx-auto mt-12 xl:px-20 lg:px-10 sm:px-5 px-2.5">
        <div className="grid grid-cols-12 gap-5">
          <div className="flex flex-col gap-5 xl:col-span-8 md:col-span-6 col-span-12">
            <Skeleton height={40} width={300} />
            <Skeleton height={20} width={150} />
            <Skeleton height={20} width={200} />
            <Skeleton height={20} width={150} />
            <Skeleton height={20} width={200} />
            <Skeleton height={100} width={500} />
          </div>
          <div className="flex flex-col gap-5 justify-end items-end xl:col-span-4 md:col-span-6 col-span-12">
            <Skeleton height={38} width={129} />
            <Skeleton height={220} width={470} />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="xl:mx-[90px] lg:mx-[40px] mx-5 2xl:max-w-[1440px] 2xl:mx-auto mt-12 xl:px-20 lg:px-10 sm:px-5 px-2.5"
      >
        <div className="grid grid-cols-12 gap-5">
          <div className="flex flex-col gap-5 xl:col-span-8 md:col-span-6 col-span-12">
            <h1 className="text-[#18130f] text-[32px] font-normal font-arial leading-[38.40px]">
              {product.name}
            </h1>

            <h3 className="text-[#005948] text-base font-normal font-arial leading-tight">
              Generic Name:
            </h3>
            <h2 className="text-[#18130f] text-lg font-normal font-arial leading-snug">
              {product.name}
            </h2>

            <h3 className="text-[#005948] text-base font-normal font-arial leading-tight">
              Therapeutic Segment:
            </h3>
            <h2 className="text-[#18130f] text-lg font-normal font-arial leading-snug">
              {product.therapeutic_segments?.[0]?.name}
            </h2>

            <div>
              <h3 className="text-[#005948] text-base font-normal font-arial leading-tight">
                Description:
              </h3>
              <div className="text-[#18130f] mt-3 text-base font-normal font-arial leading-normal">
                <RichTextRenderer content={product.description} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-end items-end xl:col-span-4 md:col-span-6 col-span-12">
            {product?.resource_url && (
              <div className="w-[129px] h-[38px] bg-[#f4f4f4] rounded justify-center items-center gap-3 flex cursor-pointer">
                <LuDownload />
                <div className="text-black text-base font-semibold font-['Open Sans'] capitalize">
                  Resource
                </div>
              </div>
            )}
            <Image
              src={product.image?.url || ProductImage}
              alt={product.name}
              className="w-[470px] h-[220px]"
              width={470}
              height={220}
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[#005948] text-base font-normal font-arial leading-tight">
            Indications:
          </h3>
          <div className="text-[#18130f] mt-3 text-base font-normal font-arial leading-normal">
            <RichTextRenderer content={product.indications} />
          </div>
          <h3 className="text-[#005948] text-base font-normal font-arial leading-tight">
            Presentation:
          </h3>
          <div className="text-[#18130f] mt-3 text-base font-normal font-arial leading-normal">
            <RichTextRenderer content={product.Presentation} />
          </div>
        </div>
        <div className="w-fit h-fit bg-[#f1f1f1] rounded-md flex items-center gap-4 p-5 mt-10 ">
          <div>
            <TbInfoTriangleFilled  size={20}/>
          </div>
          <div>
            <p className="text-[#18130f] text-base font-normal font-arial">
              {product.note.note}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductDisplay;
