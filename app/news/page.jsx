import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import PageNameBanner from "../Components/home/PageNameBanner";
import Banner from "@/public/images/newsBanner.svg";
import BreadCrumbs from "../Components/home/BreadCrumbs";
import Newss from "@/public/images/newss.svg";
import Link from "next/link";
import { getNewsMetadata } from "@/app/services/api";



export async function generateMetadata() {
  const metadata = await getNewsMetadata();

  if (!metadata || metadata.data.length === 0) {
    return {
      title: 'News - Pure Pharmaceuticals',
      description: 'Welcome to Pure Pharmaceuticals. We provide high-quality pharmaceutical products.',
    };
  }

  const metaData = metadata.data;
  const title = metaData?.metaTitle ;
  const description = metaData?.metaDescripition;
  const keywords = metaData?.metaKeywords;
  const ogImage = metaData?.ogImage?.url ;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const canonicalUrl = `https://thepurepharma.com/news`;
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
      <PageNameBanner image={Banner} title="News and Events" />
      <BreadCrumbs name="News and Events" />
      <main>
        <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-40 xl:px-[90px] lg:px-[40px] px-5">
          <div className="mt-9 md:mt-16">
            <motion.h2
              className="text-primary text-[32px] font-normal font-arial leading-[38.40px]"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              News & Events
            </motion.h2>
            <div className="mt-10">
              <motion.div
                className="border border-[#D9D9D9] py-5 px-4 flex flex-col sm:flex-row gap-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <Image
                    src={Newss}
                    alt="banner"
                    className="w-full h-full"
                    width={280}
                    height={440}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-normal font-arial leading-normal text-[#151515] mt-5 w-[72%]">
                    Purepharma office
                  </h2>
                  <p className="mt-3 text-[13px] font-normal font-secondary leading-none text-[#222222]">
                    Purepharma meeting with Manas Varalwar in Abudhabi
                  </p>
                  <div className="mt-9">
                    <Link href={"/news/news1"} >
                      <span className="underline text-[13px] font-normal font-secondary leading-none text-[#222222]">
                        Read More
                      </span>
                    </Link>
                   
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
