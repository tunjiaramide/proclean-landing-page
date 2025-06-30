import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="px-8 md:px-24 py-8 md:py-16 flex items-center gap-x-16">
            <div>
                <Image src="/about_us.png" alt="Cleaning" width={478} height={421} />
            </div>
            <div className="flex flex-col space-y-5 w-1/2">
                <h2 className="text-[44px] font-bold leading-[120%]">Welcome To Our <br/> Pro-cleaning Company!</h2>
                <p className="text-[16px] text-[#666666] font-normal">We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!"</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {[
                        "Vetted professionals",
                        "Next day availability",
                        "Standard cleaning tasks",
                        "Affordable Prices",
                        "Best Quality",
                        "Affordable Prices"
                    ].map((text, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <FaCheckCircle className="text-green-500" />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-6 space-x-2">
                <button className="inline-flex items-center gap-2 px-8 py-3 border rounded-md text-sm w-auto bg-[#36B864] text-white hover:bg-transparent hover:text-black">
                    <Link href="">Book Now</Link>
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-3 border rounded-md text-sm w-auto hover:bg-[#36B864] hover:text-white text-black">
                    <Link href="">Know More</Link>
                </button>
                </div>
            </div> 
    </div>
  )
}
