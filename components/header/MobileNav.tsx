'use client';

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { FiMenu } from "react-icons/fi";

export default function MobileNav() {

    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="flex justify-between items-center">
            <h1> <Image src="/Logo.svg" alt="logo" width={204} height={50}/></h1>
            
            <div>
                <FiMenu />
            </div>

           { toggleMenu && (
                <div>
                    <div className="flex space-x-6 justify-between">
                        <Link className="text-[#36B864] font-semibold" href="#">Home</Link>
                        <Link className="hover:text-[#36B864]" href="#">About us</Link>
                        <Link className="hover:text-[#36B864]" href="#">Services</Link>
                        <Link className="hover:text-[#36B864]" href="#">Blog</Link>
                        <Link className="hover:text-[#36B864]" href="#">Contact</Link>
                    </div>
                    <div>
                        <button className="px-8 py-3 border rounded-md bg-[#36B864] text-white text-sm">
                        <Link href="#">Get a Quote</Link></button>
                    </div>
            </div>
           )}    
    </div>
  )
}
