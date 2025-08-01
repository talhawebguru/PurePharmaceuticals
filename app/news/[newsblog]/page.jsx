import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import Banner from "@/public/images/newsBanner.svg";
import PageNameBanner from "@/app/Components/home/PageNameBanner";
import BreadCrumbs from "@/app/Components/home/BreadCrumbs";
import Blog1 from "@/public/images/Blog1.png";
import RelatedProducts from "@/app/Components/product/RelatedProducts";
import LatestNews from "@/app/Components/home/LatestNews";

// Generate static params for all news articles at build time
export async function generateStaticParams() {
  // Return static news items - you can connect this to your news API
  return [
    { newsblog: 'news1' },
    // Add more news slugs as needed when you have more articles
  ];
}

const page = () => {
  return (
    <>
      <PageNameBanner image={Banner} title="Blog 1" />
      <BreadCrumbs name="News and Events / Blog 1" />
      <main>
        <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-40 xl:px-[90px] lg:px-[40px] px-5 mt-6">
          <h2 className="text-[#0e493f] text-[32px] font-normal font-arial leading-[38.40px]">
            News & Events
          </h2>
          <Image src={Blog1} alt="banner" className="w-full mt-7" />
          <h2 className="text-[#0e493f] text-[32px] font-normal font-arial leading-[38.40px] mt-8">
            Akses Swiss Scientific office
          </h2>
          <p className="text-[#222222] text-base font-normal font-secondary leading-tight mt-4">
            Purepharma's CEO, Mr. Musthafa, Meets with Manas Varalwar in
            Abudhabi
          </p>
          <p className="text-[#222222] text-base font-normal font-secondary leading-normal mt-8">
            Your content goes here. Edit or remove this text inline or in the
            module Content settings. You can also style every aspect of this
            content in the module Design settings and even apply custom CSS to
            this text in the module Advanced settings.Your content goes here.
            Edit or remove this text inline or in the module Content settings.
            You can also style every aspect of this content in the module Design
            settings and even apply custom CSS to this text in the module
            Advanced settings.Your content goes here. Edit or remove this text
            inline or in the module Content settings. You can also style every
            aspect of this content in the module Design settings and even apply
            custom CSS to this text in the module Advanced settings.
          </p>
          <p className=" text-[#222222] text-base font-normal font-secondary leading-normal mt-8">
            Your content goes here. Edit or remove this text inline or in the
            module Content settings. You can also style every aspect of this
            content in the module Design settings and even apply custom CSS to
            this text in the module Advanced settings.Your content goes here.
            Edit or remove this text inline or in the module Content settings.
            You can also style every aspect of this content in the module Design
            settings and even apply custom CSS to this text in the module
            Advanced settings.Your content goes here. Edit or remove this text
            inline or in the module Content settings. You can also style every
            aspect of this content in the module Design settings and even apply
            custom CSS to this text in the module Advanced settings.
          </p>
        </div>
      </main>
      <LatestNews/>
    </>
  );
};

export default page;
