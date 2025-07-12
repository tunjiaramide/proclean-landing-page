import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="px-8 lg:px-24 py-8 md:h-[500px] bg-[url('/hero_image.png')] bg-cover md:bg-cover bg-no-repeat bg-center bg-amber-800 flex flex-col justify-center">
      <h3 className='text-[14px] md:text-[20px]'>Quality cleaning at a fair price.</h3>
      <h1 className='text-[24px] md:text-[52px] font-bold w-[90%] md:w-[60%] leading-8 md:leading-13 my-3'>Specialized, efficient, and thorough cleaning services</h1>
      <p className='hidden md:block text-base md:w-[50%] font-normal mb-6 text-[#666666]'>We provide performing cleaning tasks using the least amount of time, energy, and money.</p>
      <div className='flex space-x-3'>
        <button className="px-4 py-3 md:px-8 md:py-3 rounded-md bg-[#36B864] text-white text-sm"><Link href="#">Get Started Now</Link></button>
        <button className="px-4 py-3 md:px-8 md:py-3 border rounded-md text-white md:text-black text-sm"><Link href="#">View all Services</Link></button>
      </div>
    </div>
  )
}
