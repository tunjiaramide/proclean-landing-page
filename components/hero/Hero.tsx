import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="px-8 md:px-24 h-[500px] bg-[url('/hero_image.png')] bg-center bg-cover bg-amber-800 flex flex-col justify-center">
      <h3 className='text-[20px]'>Quality cleaning at a fair price.</h3>
      <h1 className='text-[52px] font-bold w-[60%] leading-13 my-3'>Specialized, efficient, and thorough cleaning services</h1>
      <p className='text-base w-[50%] font-normal mb-6 text-[#666666]'>We provide performing cleaning tasks using the least amount of time, energy, and money.</p>
      <div className='flex flex-row space-x-3'>
        <button className="px-8 py-3 rounded-md bg-[#36B864] text-white text-sm"><Link href="#">Get Started Now</Link></button>
        <button className="px-8 py-3 border rounded-md text-black text-sm"><Link href="#">View all Services</Link></button>
      </div>
    </div>
  )
}
