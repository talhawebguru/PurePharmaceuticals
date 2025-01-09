import React from "react";
import Image from "next/image";
import CorporatePatners from "@/app/Components/about/CorporatePatners";
import Cmap from "@/public/images/cmap.svg";
import Banner from "@/public/images/corporateBanner.svg";
import PageNameBanner from "@/app/Components/home/PageNameBanner";
import BreadCrumbs from "@/app/Components/home/BreadCrumbs";
const page = () => {
  return (
    <>
      <PageNameBanner image={Banner} title="" />
      <BreadCrumbs name="Corporate"/>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-40 xl:px-[90px] lg:px-[40px] px-5">
        <div className="mt-9 md:mt-16">
          <div>
            <h2 className="text-primary text-[32px] font-normal font-arial leading-[38.40px]">
              Clients & Partners
            </h2>
            <CorporatePatners />

            <h2 className="text-primary text-[32px] font-normal font-arial leading-[38.40px] mt-20">
              Export
            </h2>
            <p className="mt-5 text-base font-normal font-secondary leading-normal text-[#1e1e1e] ">
              We are rapidly growing in the region to improve people’s quality
              of life with top quality products. Markets that we are serving or
              will be served soon are Qatar, Iraq, Bahrain, Jordan and Yemen.
              The list is rapidly changing so please contact us for more
              details.
            </p>
            <div className="mt-10 w-full">
              <Image src={Cmap} alt="Company" className="w-full mt-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
