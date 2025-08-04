import BreadCrumbs from '@/app/Components/home/BreadCrumbs';
import PageNameBanner from '@/app/Components/home/PageNameBanner';
import ProductDisplay from '@/app/Components/newProduct/ProductDisplay';
import Banner from "@/public/images/productBanner.png";
import React from 'react';
import { getProductBySlug, getAllProducts } from '@/app/services/api';
import { notFound } from 'next/navigation';

// Generate static params for all products at build time
export async function generateStaticParams() {
  try {
    const response = await getAllProducts();
    return response.data.map((product) => ({
      categorySlug: product.categories[0]?.slug || 'uncategorized',
      productSlug: product.slug,
    }));
  } catch (error) {
    // Return empty array in case of error to prevent build failure
    return [];
  }
}

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
  const defaultOgImage = product?.image?.url;
  const imageAlt = product.name;
  let metaRobots = "index, follow";
  return {
    title: metaTitle,
    description: metaDescription,
    robots: metaRobots,
     alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'Pure Pharmaceutical',
      type: 'website',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL}/${defaultOgImage}`,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      site: '@thepurepharma',
      creator: '@thepurepharma',
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [`${process.env.NEXT_PUBLIC_API_URL}/${defaultOgImage}`],
    },
  };
}


const page = async ({ params }) => {
  const { categorySlug, productSlug } = params;

  // Fetch product data to get the content
  let productData = null;
  try {
    const response = await getProductBySlug(productSlug);
    productData = response.data[0];
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching product data:', error);
    }
  }

  // If product not found, show 404
  if (!productData) {
    notFound();
  }

  // Check if the categorySlug matches any of the product's categories
  const productCategories = productData.categories?.map(cat => cat.slug) || [];
  if (!productCategories.includes(categorySlug)) {
    notFound();
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