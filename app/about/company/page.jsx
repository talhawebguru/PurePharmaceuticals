import PageNameBanner from '@/app/Components/home/PageNameBanner'
import React from 'react'
import Banner from '@/public/images/companyBanner.svg';
import BreadCrumbs from '@/app/Components/home/BreadCrumbs';
import CompanyProfile from '@/app/Components/about/CompanyProfile';
import { getAboutMetadata } from "@/app/services/api";



export async function generateMetadata() {
  const metadata = await getAboutMetadata();

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
  const canonicalUrl = `https://thepurepharma.com/about/company`;
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
        <PageNameBanner image={Banner} title="Company Profile"/>
        <BreadCrumbs name="About / Company Profile"/>
        <main>
            <CompanyProfile/>
        </main>
    </>
  ) 
}

export default page