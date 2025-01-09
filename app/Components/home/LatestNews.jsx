import React from "react";
import Image from "next/image";
import LatestNewsImage from "@/public/images/latestNews.png";
import { FaLongArrowAltRight } from "react-icons/fa";

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
  <div className="p-6 sm:w-[407px] xl:w-auto h-auto sm:h-[409px] bg-neutral-50 rounded-xl border border-black/10">
    <Image src={src} alt={alt} width={365} height={200} />
    <h3 className="text-[#151515] text-xl font-normal font-arial leading-normal mt-5">
      {title}
    </h3>
    <p className="w-[269px] text-[#222222] text-[13px] font-normal font-secondary leading-none mt-3">
      {description}
    </p>
    <div className="mt-8 w-28 flex items-center gap-3 cursor-pointer">
      <p className="underline underline-offset-2">Read More</p>
      <FaLongArrowAltRight />
    </div>
  </div>
);

const LatestNews = () => {
  return (
    <section className="lg:pt-40 pt-20 xl:px-[90px] lg:px-10 px-5 2xl:max-w-[1440px] 2xl:mx-auto">
      <h2 className="text-primary text-center text-2xl md:text-[42px] font-normal font-arial leading-[44.25px]">
        Pure Pharma Latest News
      </h2>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 place-items-center gap-10">
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
