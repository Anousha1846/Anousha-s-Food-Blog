import React from 'react'
import Image from 'next/image'
import AFB2 from "../../../public/AFB2.webp";

const BannerAbout = () => {
   
  return (
    <div className='w-[100%] h-[585px]'>
   <Image
  src={AFB2}
  alt='banner-img'
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: '100%' }} 
  quality={100}
  className='saturate-10  '
/>

    </div>
  )
}

export default BannerAbout