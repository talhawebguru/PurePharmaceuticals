import React from 'react'

const BreadCrumbs = (props) => {
  return (
    <>
        <div className='flex items-center xl:px-[90px] lg:px-[40px] px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 mt-4'>
            <h3 className='text-neutral-800 text-base font-bold font-arial leading-normal'>Home&nbsp;</h3>
            <span className='text-neutral-800 text-base font-normal font-arial leading-normal'> : {props.name}</span>
        </div>
    </>
  )
}

export default BreadCrumbs