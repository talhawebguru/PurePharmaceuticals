import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "./Components/home/Hero";
import { getHomeMetadata } from "./services/api";

// Lazy load components that are below the fold
const Verticals = dynamic(() => import("./Components/home/Verticals"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-200" />
});
const About = dynamic(() => import("./Components/home/About"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200" />
});
const PureCommitted = dynamic(() => import("./Components/home/PureCommitted"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200" />
});
const WhyPure = dynamic(() => import("./Components/home/WhyPure"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200" />
});
const Partners = dynamic(() => import("./Components/home/Partners"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200" />
});
const LatestNews = dynamic(() => import("./Components/home/LatestNews"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200" />
});

export async function generateMetadata() {
  const metadata = await getHomeMetadata();

  if (!metadata || metadata.data.length === 0) {
    return {
      title: 'Home - Pure Pharmaceuticals',
      description: 'Welcome to Pure Pharmaceuticals. We provide high-quality pharmaceutical products.',
    };
  }

  const metaData = metadata.data;
  const title = metaData?.metaTitle ;
  const description = metaData?.metaDescription;
  const keywords = metaData?.metaKeywords;
  const ogImage = metaData?.ogImage?.url ;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const canonicalUrl = `https://thepurepharma.com/`;
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

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={<div className="h-48 animate-pulse bg-gray-200" />}>
          <Verticals />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200" />}>
          <PureCommitted />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200" />}>
          <WhyPure />
        </Suspense>
        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-200" />}>
          <Partners />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200" />}>
          <LatestNews />
        </Suspense>
      </main>
    </>
  );
}
