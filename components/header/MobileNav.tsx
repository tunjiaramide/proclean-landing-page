'use client';

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export default function MobileNav() {

 const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="flex justify-between items-center">
            <h1> <Image src="/Logo.svg" alt="logo" width={204} height={50}/></h1>
            <div>
                <button onClick={() => setToggleMenu(true)}>
                        <FiMenu />
                </button>
            </div>
           {toggleMenu && (
            <div
                className={`fixed top-0 left-0 h-full w-[80%] bg-white z-40 px-8 py-6 flex flex-col transform transition-transform duration-300 ease-in-out ${
                    toggleMenu ? 'translate-x-0' : '-translate-x-full' 
                }`}
                >
                <div className="flex justify-end mb-6">
                    <button onClick={() => setToggleMenu(false)}>
                        <MdClose size={26} />
                    </button>
                </div>

                <div className="flex flex-col space-y-6 items-start">
                <Link className="text-[#36B864] font-semibold text-lg" href="#">Home</Link>
                <Link className="hover:text-[#36B864]" href="#aboutus">About us</Link>
                <Link className="hover:text-[#36B864]" href="#service">Services</Link>
                <Link className="hover:text-[#36B864]" href="#pricing">Pricing</Link>
                <Link className="hover:text-[#36B864]" href="#contact">Contact</Link>

                <button className="mt-6 px-8 py-3 border rounded-md bg-[#36B864] text-white text-sm">
                    <Link href="#">Get a Quote</Link>
                </button>
                </div>
            </div>
            )}
  
    </div>
  )
}
