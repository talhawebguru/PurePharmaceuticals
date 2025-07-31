"use client";
import React, { useEffect, useState } from "react";
import { getCategories } from "@/app/services/api";
import { motion } from "motion/react"
import Link from "next/link";
import Image from "next/image";
import { CardSkeleton } from "../ui/SkeletonComponents";

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error("Error fetching categories:", error);
        }
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Container variant for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each card animation
      },
    },
  };

  // Individual card variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return <CardSkeleton count={15} variant="category" />;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="xl:mx-[90px] lg:mx-[40px] mx-5 2xl:max-w-[1440px] 2xl:mx-auto mt-12 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 xl:px-20 lg:px-10 sm:px-5 px-2.5"
    >
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.id}>
          <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 },
                }}
                className="w-full h-[213px] bg-[#179f8e]/5 rounded-[20px] flex flex-col items-center justify-center cursor-pointer gap-5"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${category.categoryicon.url}`}
                    alt={category.name}
                    className=" "
                    width={65}
                    height={65}
                  />
                </div>

                <h2 className="text-[#18130f] text-2xl font-normal font-arial leading-[28.80px] text-center px-5">
                  {category.name}
                </h2>
              </motion.div>
            </Link>
          ))}
    </motion.div>
  );
};

export default CategoryCard;