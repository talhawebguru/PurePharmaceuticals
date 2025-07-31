import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Card Skeleton for products and categories
export const CardSkeleton = ({ count = 8, variant = "product" }) => {
  if (variant === "category") {
    return (
      <div className="xl:mx-[90px] lg:mx-[40px] mx-5 2xl:max-w-[1440px] 2xl:mx-auto mt-12 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 xl:px-20 lg:px-10 sm:px-5 px-2.5">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="w-full h-[213px] bg-[#179f8e]/5 rounded-[20px] flex flex-col items-center justify-center cursor-pointer gap-5 animate-pulse">
            <Skeleton circle={true} height={65} width={65} />
            <Skeleton width={180} height={28} />
          </div>
        ))}
      </div>
    );
  }

  // Product card skeleton
  return (
    <div className="xl:mx-[90px] lg:mx-[40px] mx-5 2xl:max-w-[1440px] 2xl:mx-auto mt-12 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 xl:px-20 lg:px-10 sm:px-5 px-2.5">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-full h-28 bg-[#179f8e]/5 rounded-[20px] flex items-center justify-start gap-5 animate-pulse">
          <Skeleton width={6} height={50} className="ml-5" />
          <div className="flex flex-col items-start justify-center gap-2">
            <Skeleton width={150} height={28} />
            <Skeleton width={100} height={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

// Hero Section Skeleton
export const HeroSkeleton = () => (
  <div className="md:bg-hero-pattern sm:bg-no-repeat sm:bg-cover sm:bg-center xs:bg-origin-content mt-7 2xl:px-0 xl:px-[90px] lg:px-10 px-5 xl:pt-[115px] lg::pt-20 sm:pt-10 xs:mt-0 xl:pb-44 overflow-x-hidden">
    <div className="md:hidden mt-0 animate-pulse">
      <Skeleton height={200} className="w-full" />
    </div>
    <div className="flex flex-col md:flex-row 2xl:max-w-[1440px] 2xl:mx-auto mt-4 md:mt-0">
      <div className="md:w-[55%] mt-1 animate-pulse">
        <Skeleton height={60} width="80%" className="mb-4" />
        <Skeleton height={20} count={3} className="mb-2" />
        <div className="flex items-center gap-4 mt-8">
          <Skeleton height={50} width={150} />
          <Skeleton height={50} width={150} />
        </div>
      </div>
      <div className="md:w-[45%] mt-8 md:mt-0 animate-pulse hidden md:block">
        <Skeleton height={400} />
      </div>
    </div>
  </div>
);

// Page Banner Skeleton
export const PageBannerSkeleton = () => (
  <div className="xl:mx-[90px] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 lg:mx-10 h-56 lg:mt-11 mt-6 relative xs:overflow-hidden xs:mt-5 animate-pulse">
    <Skeleton height={224} className="w-full" />
    <div className="absolute bottom-9 left-9 z-10">
      <Skeleton height={50} width={200} />
    </div>
  </div>
);

// Content Section Skeleton
export const ContentSkeleton = ({ variant = "default" }) => {
  if (variant === "about") {
    return (
      <section className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 flex flex-col lg:flex-row items-center 2xl:justify-between xl:px-[90px] lg:px-10 px-5 lg:mt-44 mt-14 gap-20 overflow-x-hidden">
        <div className="xl:w-[640px] animate-pulse">
          <Skeleton height={400} />
        </div>
        <div className="xl:w-[640px] animate-pulse">
          <Skeleton height={40} width="80%" className="mb-4" />
          <Skeleton height={20} count={4} className="mb-2" />
          <Skeleton height={50} width={150} className="mt-6" />
        </div>
      </section>
    );
  }

  if (variant === "grid") {
    return (
      <section className="xl:px-[90px] lg:px-10 px-5 lg:mt-40 mt-14 2xl:px-0">
        <div className="2xl:max-w-[1440px] 2xl:mx-auto animate-pulse">
          <Skeleton height={50} width="40%" className="mx-auto mb-12" />
          <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 mt-12">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white flex flex-col justify-center items-center min-w-[30%] h-[330px] rounded-lg animate-pulse">
                <Skeleton circle height={97} width={97} className="mb-4" />
                <Skeleton height={30} width={150} className="mb-2" />
                <Skeleton height={20} width={200} count={2} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default content skeleton
  return (
    <div className="xl:mx-[90px] lg:mx-[40px] mx-5 2xl:max-w-[1440px] 2xl:mx-auto mt-16 mb-12 animate-pulse">
      <Skeleton height={40} width="60%" className="mb-6" />
      <Skeleton height={20} count={4} className="mb-2" />
      <Skeleton height={20} width="80%" className="mb-4" />
      <Skeleton height={300} className="mt-8" />
    </div>
  );
};

// Partners Section Skeleton
export const PartnersSkeleton = () => (
  <section className="mt-24 2xl:w-[1500px] 2xl:mx-auto animate-pulse">
    <Skeleton height={50} width="40%" className="mx-auto mb-16" />
    <div className="mt-16 flex flex-wrap justify-center">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="w-[400px] h-[150px] flex justify-center items-center xl:border-r xl:border-t xl:border-[#c4c4c4]">
          <Skeleton height={60} width={120} />
        </div>
      ))}
    </div>
  </section>
);

// News/Blog Skeleton
export const NewsSkeleton = ({ count = 3 }) => (
  <section className="xl:px-[90px] lg:px-10 px-5 lg:mt-40 mt-14">
    <div className="2xl:max-w-[1440px] 2xl:mx-auto animate-pulse">
      <Skeleton height={50} width="40%" className="mx-auto mb-12" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Skeleton height={200} />
            <div className="p-6">
              <Skeleton height={24} width="80%" className="mb-2" />
              <Skeleton height={16} count={3} className="mb-2" />
              <Skeleton height={14} width={100} className="mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Header Skeleton (for mega menu loading)
export const HeaderSkeleton = () => (
  <div className="animate-pulse">
    <Skeleton height={60} className="w-full" />
  </div>
);

// Footer Skeleton
export const FooterSkeleton = () => (
  <div className="mt-44 lg:pt-16 pt-5 bg-[#FBFBFB] animate-pulse">
    <div className="2xl:max-w-[1440px] 2xl:mx-auto flex flex-col lg:flex-row gap-7 lg:justify-between xl:mx-[90px] lg:mx-[40px] mx-5">
      <div className="lg:w-[70%]">
        <Skeleton height={40} width={200} className="mb-6" />
        <Skeleton height={16} count={4} className="mb-2" />
      </div>
      <div className="lg:w-[30%]">
        <Skeleton height={24} width={150} className="mb-4" />
        <Skeleton height={16} count={3} className="mb-2" />
      </div>
    </div>
  </div>
);

// Table Skeleton (for product data tables)
export const TableSkeleton = ({ rows = 5, columns = 4 }) => (
  <div className="overflow-x-auto w-full mt-16 animate-pulse">
    <table className="min-w-full w-full max-w-full bg-white">
      <thead>
        <tr>
          {Array.from({ length: columns }).map((_, index) => (
            <th key={index} className="py-2 px-4 border-b">
              <Skeleton height={20} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <td key={colIndex} className="py-4 px-4 border-b text-center">
                <Skeleton height={16} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Form Skeleton
export const FormSkeleton = () => (
  <div className="lg:py-20 py-10 lg:pl-14 xs:pl-3 pl-5 shadow-lg lg:w-6/12 animate-pulse">
    <Skeleton height={32} width="60%" className="mb-4" />
    <Skeleton height={16} count={2} className="mb-8" />
    <div className="flex flex-col gap-5">
      <Skeleton height={48} width="80%" />
      <Skeleton height={48} width="80%" />
      <Skeleton height={120} width="80%" />
      <Skeleton height={48} width={140} />
    </div>
  </div>
);

// Accordion Skeleton
export const AccordionSkeleton = ({ count = 3 }) => (
  <div className="lg:w-[50%] lg:mt-16 mt-8 animate-pulse">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="border-b border-white/20 py-4">
        <Skeleton height={24} width="80%" className="mb-2" />
        <Skeleton height={16} count={2} />
      </div>
    ))}
  </div>
);

// Verticals Skeleton (for marquee)
export const VerticalsSkeleton = () => (
  <section className="mt-24 px-14 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 mb-40 animate-pulse">
    <Skeleton height={50} width="40%" className="mx-auto mb-14" />
    <div className="flex gap-16 overflow-hidden">
      {Array.from({ length: 7 }).map((_, index) => (
        <Skeleton key={index} height={60} width={120} />
      ))}
    </div>
  </section>
);

// Quality Standards Skeleton
export const QualityStandardsSkeleton = () => (
  <section className="xl:px-[90px] lg:px-10 px-5 lg:mt-40 mt-14 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto animate-pulse">
    <Skeleton height={50} width="50%" className="mx-auto mb-4" />
    <Skeleton height={20} width="60%" className="mx-auto mb-20" />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center">
          <Skeleton height={120} width={90} className="mb-5" />
          <Skeleton height={24} width={150} className="mb-2" />
          <Skeleton height={16} width={198} count={2} />
        </div>
      ))}
    </div>
  </section>
);
