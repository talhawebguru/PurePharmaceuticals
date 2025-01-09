import React from "react";
import Image from "next/image";
import PageNameBanner from "../Components/home/PageNameBanner";
import Banner from "@/public/images/careersBanner.svg";
import BreadCrumbs from "../Components/home/BreadCrumbs";

const page = () => {
  return (
    <>
      <PageNameBanner image={Banner} title="" />
      <BreadCrumbs name="Careers" />

      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-40 xl:px-[90px] lg:px-[40px] px-5">
        <div className="w-full mt-16">
          <div>
            <h2 className="text-primary text-[32px] font-normal font-arial leading-[38.40px] ">Careers</h2>
            <p className="mt-5 text-base font-normal font-secondary leading-normal text-[#1e1e1e]">
              Whether you are still at university or looking for a new
              professional opportunity, we at QLife Pharma may be able to meet
              your aspirations. We are continuously looking for talented and
              committed individuals that can further improve our organization.<br/><br/>
              If you would like to be considered for a job opening, please send
              your application and CV, for the attention to hr@purepharma.com. We will respond directly, detailing when we
              will have reviewed your application.{" "}
            </p>
            <p className="mt-5 text-base font-normal font-secondary leading-normal text-[#1e1e1e]">If you are a university student looking for an internship, please let us know the duration, as well as your subject and level (BSc, MSc or PhD).</p>
          
            <h2 className="text-primary text-[32px] font-normal font-arial leading-[38.40px] mt-16">Company Key values are:</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
