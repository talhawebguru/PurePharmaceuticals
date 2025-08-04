import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import CorporatePatners from "@/app/Components/about/CorporatePatners";
import Cmap from "@/public/images/cmap.svg";
import Banner from "@/public/images/corporateBanner.svg";
import PageNameBanner from "@/app/Components/home/PageNameBanner";
import BreadCrumbs from "@/app/Components/home/BreadCrumbs";
import { getAboutCorporateMetadata } from "@/app/services/api";



export async function generateMetadata() {
  const metadata = await getAboutCorporateMetadata();

  if (!metadata || metadata.data.length === 0) {
    return {
      title: 'About corporate - Pure Pharmaceuticals',
      description: 'Welcome to Pure Pharmaceuticals. We provide high-quality pharmaceutical products.',
    };
  }

  const metaData = metadata.data;
  const title = metaData?.metaTitle ;
  const description = metaData?.metaDescripition;
  const keywords = metaData?.metaKeywords;
  const ogImage = metaData?.ogImage?.url ;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const canonicalUrl = `https://thepurepharma.com/about/corporate`;
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
      <PageNameBanner image={Banner} title="Corporate" />
      <BreadCrumbs name="About / Corporate" />
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-40 xl:px-[90px] lg:px-[40px] px-5">
        <div className="mt-9 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h2 className="text-primary text-[32px] font-normal font-arial leading-[38.40px]">
              Clients & Partners
            </h2>
            <CorporatePatners />

            <h2 className="text-primary text-[32px] font-normal font-arial leading-[38.40px] mt-20">
              Export
            </h2>
            <p className="mt-5 text-base font-normal font-secondary leading-normal text-[#1e1e1e] ">
              We are rapidly growing in the region to improve people’s quality
              of life with top quality products. Markets that we are serving or
              will be served soon are Qatar, Iraq, Bahrain, Jordan and Yemen.
              The list is rapidly changing so please contact us for more
              details.
            </p>
            <div className="mt-10 w-full">
              <Image src={Cmap} alt="Company" className="w-full mt-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default page;
