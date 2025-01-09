import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client"
import CompanyContent from "@/public/images/companyContent.svg";
import CompanyContent2 from "@/public/images/companyContent2.svg";

const CompanyProfile = () => {
  return (
    <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-40 xl:px-[90px] lg:px-[40px] px-5">
      <div className="mt-9 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <h2 className='text-primary text-[32px] font-normal font-arial leading-[38.40px]'>Company Profile:</h2>
          <p className='mt-3 text-base font-secondary text-[#1e1e1e] leading-normal'>
            Pure Pharmaceutical manufacturing L.L.C is a leading manufacturer of pharmaceuticals products in United Arab Emirates (UAE) by Mr. Cherukappilliyil Ommer Ali Kunju (CEO of Pure Pharma), committed to manufacturing high quality medicines that meet patient’s needs. We aim to protect, enable and support people facing health challenges, across the globe at every stage of life.
          </p>
          <div className='mt-10 w-full'>
            <Image src={CompanyContent} alt='Company' className='w-full' />
          </div>
          <p className='mt-10 text-base font-secondary text-[#1e1e1e] leading-normal'>
            The state of art manufacturing facilities with an average area of 10,000 sq. mtr. Located in Kizad industrial area, Abu Dhabi, UAE. We are engaged in developing, Manufacturing, Marketing & Exporting of high-quality products such as Oral Solids for Local and MENA region. Quality has been the foremost priority for our brands. it’s our endeavor to manufacture quality products as per the guidelines. While producing world class products, we strictly adhere to National and International Regulatory Requirements. We are committed to continuous improvement and value additions to the quality standards to satisfy our customers’ needs.
          </p>
          <h2 className='text-primary text-[32px] font-normal font-arial leading-[38.40px] mt-16'>Our Vision</h2>
          <p className='mt-3 text-base font-secondary text-[#1e1e1e] leading-normal'>
            Pure Pharmaceutical manufacturing L.L.C is a leading manufacturer of pharmaceuticals products in United Arab Emirates (UAE) by Mr. Cherukappilliyil Ommer Ali Kunju (CEO of Pure Pharma), committed to manufacturing high quality medicines that meet patient’s needs. We aim to protect, enable and support people facing health challenges, across the globe at every stage of life.
          </p>
          <h2 className='text-primary text-[32px] font-normal font-arial leading-[38.40px] mt-16'>Our Mission</h2>
          <p className='mt-3 text-base font-secondary text-[#1e1e1e] leading-normal'>
            Pure Pharmaceutical manufacturing L.L.C is a leading manufacturer of pharmaceuticals products in United Arab Emirates (UAE) by Mr. Cherukappilliyil Ommer Ali Kunju (CEO of Pure Pharma), committed to manufacturing high quality medicines that meet patient’s needs. We aim to protect, enable and support people facing health challenges, across the globe at every stage of life.
          </p>
          <div className='mt-10 w-full'>
            <Image src={CompanyContent2} alt='Company' className='w-full' />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyProfile;