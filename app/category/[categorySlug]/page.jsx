import BreadCrumbs from '@/app/Components/home/BreadCrumbs'
import PageNameBanner from '@/app/Components/home/PageNameBanner'
import ProductCard from '@/app/Components/newProduct/ProductCard';
import Banner from "@/public/images/productBanner.png";
import React from 'react'
import { getCategories } from "@/app/services/api";
import dynamic from 'next/dynamic';
import { ContentSkeleton } from '@/app/Components/ui/SkeletonComponents';

// Dynamic import for CategoryContent (loads only when needed)
const CategoryContent = dynamic(() => import('@/app/Components/product/CategoryContent'), {
  loading: () => <ContentSkeleton />,
  ssr: true // Enable server-side rendering for SEO
});

// Generate static params for all categories at build time
export async function generateStaticParams() {
  try {
    const response = await getCategories();
    return response.data.map((category) => ({
      categorySlug: category.slug,
    }));
  } catch (error) {
    return [];
  }
}



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
  const description = metaData?.metaDescripition;
  const keywords = metaData?.metaKeywords;
  const ogImage = metaData?.ogImage?.url ;
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  const canonicalUrl = `https://thepurepharma.com/category/${categorySlug}`;
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
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL}/${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      site: '@thepurepharma',
      creator: '@thepurepharma',
      card: 'summary_large_image',
      title,
      description,
      images: [`${process.env.NEXT_PUBLIC_API_URL}/${ogImage}`],
    },
  };
}

const page = async ({ params }) => {
  const { categorySlug } = params;
  
  // Fetch category data to get the content
  let categoryData = null;
  try {
    const response = await getCategories();
    categoryData = response.data.find(cat => cat.slug === categorySlug);
  } catch (error) {
    // Log error only in development, use fallback in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching category data:', error);
    }
  }

  return (
    <>
      <PageNameBanner 
        image={Banner} 
        title={categoryData?.name || "Products"} 
      />
      <BreadCrumbs name={`Category / ${categoryData?.name}` || "Products"} />
      <ProductCard />
      <CategoryContent 
        categoryContent={categoryData?.categoryContent} 
        categoryName={categoryData?.name}
      />
    </>
  )
}


export default page