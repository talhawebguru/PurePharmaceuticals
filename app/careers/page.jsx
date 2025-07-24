import React from "react";
import * as motion from "motion/react-client"
import PageNameBanner from "../Components/home/PageNameBanner";
import Banner from "@/public/images/careersBanner.svg";
import BreadCrumbs from "../Components/home/BreadCrumbs";
import { getCareerMetadata } from "@/app/services/api";

export async function generateMetadata() {
  const metadata = await getCareerMetadata();

  if (!metadata || metadata.data.length === 0) {
    return {
      title: 'Career - Pure Pharmaceuticals',
      description: 'Welcome to Pure Pharmaceuticals. We provide high-quality pharmaceutical products.',
    };
  }

  const metaData = metadata.data;
  const title = metaData?.metaTitle ;
  const description = metaData?.metaDescription;
  const keywords = metaData?.metaKeywords;
  const ogImage = metaData?.ogImage?.url ;
  const canonicalUrl = `https://thepurepharma.com/careers`;
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
      <BreadCrumbs name="Careers" />

      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-40 xl:px-[90px] lg:px-[40px] px-5">
        <div className="w-full mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-[32px] font-normal font-arial leading-[38.40px]">
              Careers
            </h2>
            <p className="mt-5 text-base font-normal font-secondary leading-normal text-[#1e1e1e]">
              Whether you are still at university or looking for a new
              professional opportunity, we at Pure Pharma may be able to meet
              your aspirations. We are continuously looking for talented and
              committed individuals that can further improve our organization.
              <br />
              <br />
              If you would like to be considered for a job opening, please send
              your application and CV, for the attention to hr@purepharma.com.
              We will respond directly, detailing when we will have reviewed
              your application.{" "}
            </p>
            <p className="mt-5 text-base font-normal font-secondary leading-normal text-[#1e1e1e]">
              If you are a university student looking for an internship, please
              let us know the duration, as well as your subject and level (BSc,
              MSc or PhD).
            </p>
            <a href="mailto:careers@thepurepharma.com" className="mt-5 inline-block text-base font-normal font-secondary leading-normal text-[#1e1e1e]">
              Email us at <span className="text-primary">careers@thepurepharma.com</span>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default page;
