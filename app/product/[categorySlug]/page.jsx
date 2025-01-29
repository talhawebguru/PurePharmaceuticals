import BreadCrumbs from '@/app/Components/home/BreadCrumbs'
import PageNameBanner from '@/app/Components/home/PageNameBanner'
import ProductCard from '@/app/Components/newProduct/ProductCard';
import Banner from "@/public/images/productBanner.png";
import React from 'react'


const page = () => {
  return (
    <>
    <PageNameBanner image={Banner} title="" />
    <BreadCrumbs name="Products" />
    <ProductCard />
    </>

  )
}


export default page