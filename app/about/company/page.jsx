import PageNameBanner from '@/app/Components/home/PageNameBanner'
import React from 'react'
import Banner from '@/public/images/companyBanner.svg';
import BreadCrumbs from '@/app/Components/home/BreadCrumbs';
import CompanyProfile from '@/app/Components/about/CompanyProfile';

const page = () => {
  return (
    <>
        <PageNameBanner image={Banner} title=""/>
        <BreadCrumbs name="Company Profile"/>
        <main>
            <CompanyProfile/>
        </main>
    </>
  )
}

export default page