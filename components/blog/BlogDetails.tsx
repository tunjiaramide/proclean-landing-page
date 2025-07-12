import Image from "next/image";
import Link from "next/link";

type BlogProps = {
    imgUrl: string;
    authorName: string;
    date: string;
    title: string;
    content: string;
    href: string;
}

export default function BlogDetails({ imgUrl, authorName, date, title, content, href}: BlogProps) {
  return (
    <div className="flex flex-col space-y-5 border border-[#83A790] rounded-md mb-10">
        <Image src={imgUrl} alt="office cleaning" width={370} height={300} />
        <div className="px-4 space-y-5 pb-5 text-center">
            <h6 className="text-[#666666] space-x-2 text-sm mt-4"><span>{authorName}</span><span>{date}</span></h6>
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className="text-sm text-[#666666]">{content}</p>
            <button className="mt-2 py-3 w-full border-t border-t-gray-200 text-[#666666] hover:rounded-lg text-sm underline border-black hover:bg-[#36B864] hover:text-white hover:border-0">
                    <Link href={href}>Read More</Link>
            </button>
        </div>
    </div>
  )
}
