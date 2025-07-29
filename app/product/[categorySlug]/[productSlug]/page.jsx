import BreadCrumbs from '@/app/Components/home/BreadCrumbs';
import PageNameBanner from '@/app/Components/home/PageNameBanner';
import ProductDisplay from '@/app/Components/newProduct/ProductDisplay';
import Banner from "@/public/images/productBanner.png";
import React from 'react';
import { getProductBySlug } from '@/app/services/api';

export async function generateMetadata({ params }) {
  const { productSlug } = params;
  const product = await getProductBySlug(productSlug);

  if (!product || product.data.length === 0) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  const productData = product.data[0];
  const metaTitle = productData.metaTitle;
  const metaDescription = productData.metaDescripition || 'Product description not available.';
  const canonicalUrl = `https://thepurepharma.com/product/${params.categorySlug}/${productSlug}`;
  const defaultOgImage = product?.Image?.url;
  const imageAlt = product.name;
  let metaRobots = "index, follow";
  return {
    title: metaTitle,
    description: metaDescription,
    robots: metaRobots,
     // Canonical URL
     alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'Pure Pharmaceutical', // Replace with your site name
      type: 'website',
      images: [
        {
          url: `https://thepurepharma.com/${defaultOgImage}`, // Replace with your default OG image
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [`https://thepurepharma.com/${defaultOgImage}`], // Replace with your default Twitter image
    },
  };
}

const page = async ({params}) => {
  console.log(params,"params product page")
  const { productSlug } = params;

  // Fetch product data to get the content
  let productData = null;
  try {
    const response = await getProductBySlug(productSlug);
    productData = response.data[0];
  } catch (error) {
    console.error('Error fetching product data:', error);
  }

  return (
    <>
      <PageNameBanner image={Banner} title={`${productData?.name || "Product"}`}/>
      <BreadCrumbs name={`Products / ${productData?.name || "Product"}`} />
      <ProductDisplay />
    </>
  );
};

export default page;