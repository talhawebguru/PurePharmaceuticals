import React from "react";
import Image from "next/image";
import AboutUs1 from "@/public/images/aboutSection1.svg";
import AboutUs2 from "@/public/images/aboutSection2.svg";
import LinePrimary from "@/public/images/lineP.svg";

const AboutUs = () => {
  return (
    <>
      <div className="mt-32 xl:px-[90px] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 lg:px-[40px] px-5 flex flex-wrap justify-center xl:justify-normal ">
        <div className="xl:w-[40%] ">
          <div className=" lg:w-[90%] text-neutral-gray text-xl font-semibold font-primary leading-[30px] flex gap-3 mt-10 ">
            <Image src={LinePrimary} alt="Line" className="" />
            Hubei Hendry Medical Appliance Co.,Ltd, was founded in September
            2014.
          </div>
          <p className=" text-neutral-gray text-base font-normal font-primary leading-normal mt-5">
            Which is a enterprise integrating the R&D, production and sales of
            stoma care, incontinence care, wound care products, mainly produce
            colostomy series product, at present, we have passed ISOI 3485 and
            CE quality certification. Most of our products exported to Europe,
            Africa, Southeast Asia etc. more than 30 countries and regions. We
            have strictly management system, starting from raw materials,
            production processing, packing, to ensure high quality products.
          </p>
          <div className="mt-10 flex gap-3 pb-10 xl:pb-56">
            <button className="py-3 px-[18px] bg-primary text-white text-base font-normal font-primary">
              Enquire now
            </button>
            <button className="py-3 px-[18px] text-primary bg-white text-base font-normal font-primary">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-wrap  justify-center xl:justify-end gap-10 xl:w-[60%]">
          <Image src={AboutUs2} alt="About Us Image"  className="xl:w-[300px] xl:h-[435px]" />
          <Image src={AboutUs1} alt="About Us Image" className="xl:w-[300px] xl:h-[435px]" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
