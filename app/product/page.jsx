import React from "react";
import PageNameBanner from "../Components/home/PageNameBanner";
import Banner from "@/public/images/productBanner.png";
import BreadCrumbs from "../Components/home/BreadCrumbs";
import CategoryCard from "../Components/newProduct/CategoryCard";
import * as motion from "motion/react-client";
import { getProductPageMetadata } from "@/app/services/api";


export async function generateMetadata() {
  const metadata = await getProductPageMetadata();

  if (!metadata || metadata.data.length === 0) {
    return {
      title: 'About - Pure Pharmaceuticals',
      description: 'Welcome to Pure Pharmaceuticals. We provide high-quality pharmaceutical products.',
    };
  }

  const metaData = metadata.data;
  const title = metaData?.metaTitle ;
  const description = metaData?.metaDescription;
  const keywords = metaData?.metaKeywords;
  const ogImage = metaData?.ogImage?.url ;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const canonicalUrl = `https://thepurepharma.com/product`;
  let metaRobots = "index, follow";

  return {
    title,
    description,
    robots: metaRobots,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url:canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${process.env.NEXT_PUBLIC_SITE_URL}/${ogImage}`],
    },
  };
}
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
          Pure Pharma continues to discover and market therapies for the future
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
