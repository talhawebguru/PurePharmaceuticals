import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import LatestNewsImage from "@/public/images/latestNews.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const newsData = [
  {
    src: LatestNewsImage,
    alt: "Latest News",
    title: "Akses Swiss Scientific office",
    description: "Purepharma's CEO, Mr. Musthafa, Meets with Manas Varalwar in Abudhabi",
  },
  {
    src: LatestNewsImage,
    alt: "Latest News",
    title: "Akses Swiss Scientific office",
    description: "Purepharma's CEO, Mr. Musthafa, Meets with Manas Varalwar in Abudhabi",
  },
  {
    src: LatestNewsImage,
    alt: "Latest News",
    title: "Akses Swiss Scientific office",
    description: "Purepharma's CEO, Mr. Musthafa, Meets with Manas Varalwar in Abudhabi",
  },
];

const NewsItem = ({ src, alt, title, description }) => (
  <motion.div
    className="p-6 sm:w-[407px] xl:w-auto h-auto sm:h-[409px] bg-neutral-50 rounded-xl border border-black/10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <Image src={src} alt={alt} width={365} height={200} />
    <h3 className="text-[#151515] text-xl font-normal font-arial leading-normal mt-5">
      {title}
    </h3>
    <p className="w-[269px] text-[#222222] text-[13px] font-normal font-secondary leading-none mt-3">
      {description}
    </p>
    <div className="mt-8 cursor-pointer">
      <Link href="/news" className="w-28 flex items-center gap-3">
      <p className="underline underline-offset-2">Read More</p>
      <FaLongArrowAltRight />
      </Link>
      
    </div>
  </motion.div>
);

const LatestNews = () => {
  return (
    <section className="lg:pt-40 pt-20 xl:px-[90px] lg:px-10 px-5 2xl:max-w-[1440px] 2xl:mx-auto">
      <motion.h2
        className="text-primary text-center text-2xl md:text-[42px] font-normal font-arial leading-[44.25px]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Pure Pharma Latest News
      </motion.h2>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10">
        {newsData.map((item, index) => (
          <NewsItem
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
