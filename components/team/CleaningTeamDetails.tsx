import Image from "next/image";
import Link from "next/link";
import { FaStar, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type TeamProps = {
    imgurl: string;
    title: string;
    content: string;
    href: string;
}


export default function CleaningTeamDetails({ imgurl, title, content, href}: TeamProps ) {
  return (
    <div className="flex flex-col space-y-5 border border-[#83A790] rounded-md mb-10">
        <Image src={imgurl} alt="office cleaning" width={370} height={300} />
        <div className="px-4 space-y-5 pb-5">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <div className="inline-flex space-x-0.5">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
            </div>
            <p className="text-sm text-[#666666] w-[90%]">{content}</p>
            <div className="inline-flex space-x-4">
                <Link href={href}><FaFacebookF /></Link>
                <Link href={href}><FaXTwitter /></Link>
                <Link href={href}><FaInstagram /></Link>
                <Link href={href}><FaLinkedinIn /></Link>
            </div>
        </div>
    </div>
  )
}
