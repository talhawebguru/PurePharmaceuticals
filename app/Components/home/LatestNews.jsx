import React, { memo } from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import LatestNewsImage from "@/public/images/latestNews.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const newsData = [
  {
    src: LatestNewsImage,
    alt: "Akses Swiss Scientific office meeting",
    title: "Akses Swiss Scientific office",
    description: "Purepharma's CEO, Mr. Musthafa, Meets with Manas Varalwar in Abudhabi",
    date: "January 15, 2024"
  },
  {
    src: LatestNewsImage,
    alt: "Strategic partnership announcement",
    title: "Strategic Partnership Announcement",
    description: "Pure Pharmaceuticals expands global reach through new strategic partnerships",
    date: "January 10, 2024"
  },
  {
    src: LatestNewsImage,
    alt: "Quality certification achievement",
    title: "Quality Certification Achievement",
    description: "Pure Pharmaceuticals receives international quality certification for excellence",
    date: "January 5, 2024"
  },
];

const NewsItem = memo(({ src, alt, title, description, date, index }) => (
  <motion.article
    className="p-5 sm:p-6 w-auto sm:w-[407px] xl:w-auto h-auto bg-neutral-50 rounded-xl border border-black/10 hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <Image 
      src={src} 
      alt={alt} 
      width={365} 
      height={200} 
      loading="lazy"
      className="rounded-lg"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2k3RGiAdHzEd+MyFWzYfEQR1AAbE+U25E..."
    />
    <div className="mt-5">
      {date && (
        <time className="text-gray-500 text-sm font-normal font-secondary">
          {date}
        </time>
      )}
      <h3 className="text-[#151515] text-xl font-normal font-arial leading-normal mt-2">
        {title}
      </h3>
      <p className="text-[#222222] text-[13px] font-normal font-secondary leading-relaxed mt-3">
        {description}
      </p>
    </div>
    <div className="mt-8 cursor-pointer">
      <Link 
        href="/news" 
        className="w-28 flex items-center gap-3 text-[#0e493f] hover:text-[#0d4439] transition-colors duration-200"
        aria-label={`Read more about ${title}`}
      >
        <span className="underline underline-offset-2">Read More</span>
        <FaLongArrowAltRight />
      </Link>
    </div>
  </motion.article>
));

NewsItem.displayName = 'NewsItem';

const LatestNews = memo(() => {
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
            date={item.date}
            index={index}
          />
        ))}
      </div>
    </section>
  );
});

LatestNews.displayName = 'LatestNews';

export default LatestNews;
