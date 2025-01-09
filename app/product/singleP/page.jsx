import BreadCrumbs from "@/app/Components/home/BreadCrumbs";
import PageNameBanner from "@/app/Components/home/PageNameBanner";
import SingleProducts from "@/app/Components/product/SingleProducts";
import Banner from '@/public/images/companyBanner.svg';
import React from "react";

const page = () => {
  return (
    <>
      <PageNameBanner image={Banner} title="" />
      <BreadCrumbs/>
      <main>
        <SingleProducts/>
      </main>
    </>
  );
};

export default page;
