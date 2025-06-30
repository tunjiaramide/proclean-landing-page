import Link from "next/link";
import { FaStar, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type PlansProps = {
    title: string;
    price: number;
    content: string[]
    href: string;
}

export default function PlanPricing({ title, price, content, href}: PlansProps) {
  return (
    <div className="flex flex-col space-y-5 rounded-md p-10 bg-white shadow-md">
            <h2 className="text-center text-lg uppercase">{title}</h2>
            <div className="bg-[#36B864] px-5 py-3 rounded-md text-white text-center">
                <h6 className="text-2xl"><span className="text-sm">$</span>{price}/<span className="text-sm">Monthly</span></h6>
            </div>
            <div className="flex flex-col space-y-5 mt-4 mb-8 text-sm text-[#666666]">
                    {content.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
            </div>
            <button className=" gap-2 px-8 py-2.5 border rounded-md text-sm border-black hover:bg-[#36B864] hover:text-white">
                    <Link href="">Book Now</Link>
            </button>
    </div>
  )
}
