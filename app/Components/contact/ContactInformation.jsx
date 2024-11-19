import React from "react";
import LocationIcon from "@/public/images/locationIcon.svg";
import EmailIcon from "@/public/images/emailIcon.svg";
import PhoneIcon from "@/public/images/phoneIcon.svg";
import CardContact from "./CardContact";

const ContactInformation = () => {
  return (
    <>
      <h2 className="text-black text-center text-[32px] font-normal font-arial mt-36">
        Contact Information
      </h2>
      <p className="lg:w-[548px] mx-auto text-center text-black text-base font-normal font-secondary leading-normal mt-2">
We’re here to answer your queries and provide the best solutions for your pharmaceutical needs.
      </p>
      <div className="flex flex-wrap gap-5 justify-center 2xl:max-w-[1440px] 2xl:mx-auto">
        <CardContact image={PhoneIcon} title="Phone:" info="+97125067345"/>
        <CardContact image={EmailIcon} title="Email:" info="info@thepurepharma.com"/>
        <CardContact image={LocationIcon} title="Location:" info="PPGH+X76 - Kizad - Khalifa Industrial Zone - Abu Dhabi"/>
      </div>
    </>
  );
};

export default ContactInformation;
