import React from "react";
import Image from "next/image";
import AboutImg from "@/public/images/aboutPure.svg";

const ProductOverview = () => {
  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 flex flex-col lg:flex-row items-center 2xl:justify-between  xl:px-[90px] lg:px-10 px-5 lg:mt-44 mt-14 gap-20">
        <div className="lg:w-6/12  lg:pt-24 pt-5">
          <button className="p-[10px] text-[#0E493F] text-base font-normal leading-[16.86px] font-arial border rounded-3xl border-[#0E493F]">
            Product Overview
          </button>
          <h2 className="text-[#0E493F] font-normal font-arial leading-[44.25px] text-[42px] mt-4">
            Antiseptic Solution
          </h2>
          <p className="text-light-black text-base font-normal font-secondary leading-normal mt-4">
            Antiseptic are substances which inhibit the growth and development
            of microorganisms. They are antimicrobial substances that are
            applied to living tissue/skin to reduce the possibility of
            infection, sepsis, or putrefaction. For practical purposes,
            antiseptics are routinely thought of as topical agents, for
            application to skin, mucous membranes, and inanimate objects.
          </p>
          <p className="text-light-black text-base font-normal font-secondary leading-normal mt-4">
            PurePharma Product portfolio of Antiseptic solutions includes 30
            products and some among are depicted below :-
          </p>
          <p className="text-light-black text-base mt-5 font-normal font-secondary leading-normal ">
            PurePharma Product portfolio of Antiseptic solutions includes 30
            products and some among are depicted below :-
          </p>
          <p className="text-light-black text-xl font-semibold font-secondary leading-[30px] mt-4">
          Povidone Iodine, Surgical Spirit, Benzyl Benzoate, Potassium Permanganate, Hydrogen Peroxide, Chlorhexidine gluconate , Salicylic Acid, etc.
          </p>

        </div>
        <div className="xl:w-[640px]">
          <Image src={AboutImg} alt="About Image " className="xl:w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
