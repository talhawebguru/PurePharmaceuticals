import React from "react";
import PageNameBanner from "../Components/home/PageNameBanner";
import Banner from "@/public/images/productBanner.png";
import BreadCrumbs from "../Components/home/BreadCrumbs";
import CategoryCard from "../Components/newProduct/CategoryCard";
import * as motion from "motion/react-client";


const page = () => {
  return (
    <>
      <PageNameBanner image={Banner} title="" />
      <BreadCrumbs name="Products Category" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.3 // Delay to start after PageNameBanner and BreadCrumbs animations
        }}
        className="xl:px-[90px] lg:px-[40px] px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 mt-12"
      >
        <motion.p 
          className="text-black text-base font-normal font-arial leading-normal xl:px-20 lg:px-10 sm:px-5 px-2.5"
        >
          At Pure Pharma , we focus on balancing state-of-the-art medicinal
          science with clinically effective, compassionate care. Through
          strategic partnerships with a range of companies across the globe,
          Highnoon continues to discover and market therapies for the future
          advancement of healthcare.
          <br />
          <br />
          For details of products, please consult the relevant Brands Portfolio
          or you may like to search through Generic Names or Therapeutic Class.
        </motion.p>
      </motion.div>
      <CategoryCard />
    </>
  );
};

export default page;
