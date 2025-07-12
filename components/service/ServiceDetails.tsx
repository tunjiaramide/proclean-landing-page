import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

type ServicesProps = {
    imgurl: string;
    title: string;
    content: string;
    href: string;
}

export default function ServiceDetails({ imgurl, title, content, href}: ServicesProps ) {
  return (
    <div className="flex flex-col space-y-5 mb-10">
        <Image src={imgurl} alt="office cleaning" width={370} height={262} />
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="text-sm text-[#666666]">{content}</p>
        <div>
          <button className="inline-flex items-center gap-2 px-8 py-3 border rounded-md text-black text-sm w-auto hover:bg-[#36B864] hover:text-white">
            <Link href={href}>Book Now</Link>
            <MdOutlineArrowOutward />
          </button>
        </div>
    </div>
  )
}
