import BreadCrumbs from '@/app/Components/home/BreadCrumbs'
import PageNameBanner from '@/app/Components/home/PageNameBanner'
import ProductCard from '@/app/Components/newProduct/ProductCard';
import Banner from "@/public/images/productBanner.png";
import React from 'react'
import { getCategories } from "@/app/services/api";



export async function generateMetadata({params}) {

  const { categorySlug } = params;

  const data = await getCategories();
  // Find the matching category by slug
  const metadata = data.data.find(cat => cat.slug === categorySlug);

  if (!metadata) {
    return {
      title: 'Category - Pure Pharmaceuticals',
      description: 'Welcome to Pure Pharmaceuticals. We provide high-quality pharmaceutical products.',
    };
  }

  const metaData = metadata;
  const title = metaData?.metaTitle ;
  const description = metaData?.metaDescription;
  const keywords = metaData?.metaKeywords;
  const ogImage = metaData?.ogImage?.url ;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const canonicalUrl = `https://thepurepharma.com/product/${categorySlug}`;
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
    <BreadCrumbs name="Products" />
    <ProductCard />
    </>

  )
}


export default page