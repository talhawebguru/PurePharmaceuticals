import React from 'react';
import * as motion from "motion/react-client"
import ContactInformation from '../Components/contact/ContactInformation';
import TouchUs from '../Components/contact/TouchUs';
import Hero from '../Components/contact/Hero';
import { getContactMetadata } from "@/app/services/api";

export async function generateMetadata() {
  const metadata = await getContactMetadata();

  if (!metadata || metadata.data.length === 0) {
    return {
      title: 'Contact - Pure Pharmaceuticals',
      description: 'Welcome to Pure Pharmaceuticals. We provide high-quality pharmaceutical products.',
    };
  }

  const metaData = metadata.data;
  const title = metaData?.metaTitle ;
  const description = metaData?.metaDescripition;
  const keywords = metaData?.metaKeywords;
  const ogImage = metaData?.ogImage?.url ;
  const url = `${process.env.NEXT_PUBLIC_API_URL}`;
  const canonicalUrl = `https://thepurepharma.com/contact`;
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

const page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <TouchUs />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <ContactInformation />
      </motion.div>
    </>
  );
};

export default page;