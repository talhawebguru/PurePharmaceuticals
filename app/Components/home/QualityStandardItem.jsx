import React from 'react'
import Image from 'next/image';


const QualityStandardItem = ({ src, alt, title, description }) => (
    <div className="flex flex-col items-center justify-between">
      <Image src={src} alt={alt} width={90} height={120} className="object-contain mx-auto" />
      <h3 className="text-center text-black text-xl font-medium font-secondary leading-[30px] mt-5">
        {title}
      </h3>
      <p className="w-[198px] text-center text-black text-base font-normal font-secondary leading-normal mt-2">
        {description}
      </p>
    </div>
  );

export default QualityStandardItem