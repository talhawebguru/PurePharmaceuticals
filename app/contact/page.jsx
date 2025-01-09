import React from 'react'
import ContactInformation from '../Components/contact/ContactInformation'
import PageNameBanner from '../Components/home/PageNameBanner'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import TouchUs from '../Components/contact/TouchUs'
import Hero from '../Components/contact/Hero';

const page = () => {
  return (
    <>
      <Hero/>
      <TouchUs/>
      <ContactInformation/>
    </>
  )
}

export default page