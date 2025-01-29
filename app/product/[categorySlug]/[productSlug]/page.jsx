import BreadCrumbs from '@/app/Components/home/BreadCrumbs'
import PageNameBanner from '@/app/Components/home/PageNameBanner'
import ProductDisplay from '@/app/Components/newProduct/ProductDisplay';
import Banner from "@/public/images/productBanner.png";
import React from 'react'

const page = () => {
  return (
    <>
    <PageNameBanner image={Banner} title="" />
    <BreadCrumbs name="Products" />
    <ProductDisplay />
    </>
  )
}

export default page