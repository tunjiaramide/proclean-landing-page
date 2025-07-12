import Image from "next/image";
import Link from "next/link";

export default function GetaQuote() {
  return (
    <div className="px-8 md:px-24 py-8 md:py-16 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col space-y-3.5 md:w-1/2 mb-10">
                <h6 className="font-normal text-[16px]">Affordable cleaning solutions</h6>
                <h2 className="text-[34px] md:text-[44px] font-bold leading-[120%]">High-Quality and Friendly Services at Fair Prices</h2>
                <p className="text-[18px] text-[#666666] font-normal">We provide comprehensive cleaning services tailored to your needs. From residential cleaning  services</p>
                <div className="mt-6">
                <button className="inline-flex items-center gap-2 px-8 py-3 border rounded-md text-sm w-auto bg-[#36B864] text-white">
                    <Link href="">Get a Quote</Link>
                </button>
                </div>
            </div>
            <div className="">
                <Image src="/service_4.png" alt="Cleaning" width={478} height={421} />
            </div> 
    </div>
  )
}
