import Hero from "./Components/home/Hero";
import Verticals from "./Components/home/Verticals";
import About from "./Components/home/About";
import Partners from "./Components/home/Partners";
import WhyPure from "./Components/home/WhyPure";
import PureCommitted from "./Components/home/PureCommitted";
import LatestNews from "./Components/home/LatestNews";
import { getHomeMetadata } from "./services/api";

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
        <Verticals />
        <About />
        <PureCommitted />
        <WhyPure />
        <Partners />
        <LatestNews />
      </main>
    </>
  );
}
