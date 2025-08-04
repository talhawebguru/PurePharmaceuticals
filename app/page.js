import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "./Components/home/Hero";
import { getHomeMetadata } from "./services/api";
import { 
  ContentSkeleton, 
  PartnersSkeleton, 
  NewsSkeleton, 
  VerticalsSkeleton 
} from "./Components/ui/SkeletonComponents";

// Lazy load components that are below the fold with proper skeleton loaders
const Verticals = dynamic(() => import("./Components/home/Verticals"), {
  loading: () => <VerticalsSkeleton />
});
const About = dynamic(() => import("./Components/home/About"), {
  loading: () => <ContentSkeleton variant="about" />
});
const PureCommitted = dynamic(() => import("./Components/home/PureCommitted"), {
  loading: () => <ContentSkeleton variant="grid" />
});
const WhyPure = dynamic(() => import("./Components/home/WhyPure"), {
  loading: () => <ContentSkeleton />
});
const Partners = dynamic(() => import("./Components/home/Partners"), {
  loading: () => <PartnersSkeleton />
});
const LatestNews = dynamic(() => import("./Components/home/LatestNews"), {
  loading: () => <NewsSkeleton />
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
  const description = metaData?.metaDescripition;
  const keywords = metaData?.metaKeywords;
  const ogImage = metaData?.ogImage?.url ;
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
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
          url: `${process.env.NEXT_PUBLIC_API_URL}/${ogImage} `,
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

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={<VerticalsSkeleton />}>
          <Verticals />
        </Suspense>
        <Suspense fallback={<ContentSkeleton variant="about" />}>
          <About />
        </Suspense>
        <Suspense fallback={<ContentSkeleton variant="grid" />}>
          <PureCommitted />
        </Suspense>
        <Suspense fallback={<ContentSkeleton />}>
          <WhyPure />
        </Suspense>
        <Suspense fallback={<PartnersSkeleton />}>
          <Partners />
        </Suspense>
        <Suspense fallback={<NewsSkeleton />}>
          <LatestNews />
        </Suspense>
      </main>
    </>
  );
}
