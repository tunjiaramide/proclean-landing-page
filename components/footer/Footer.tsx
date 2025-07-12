import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#111D15] px-8 md:px-24 py-8 md:pt-18 md:pb-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-5 text-white pb-12 gap-1">
            <div className="space-y-5 col-span-2 mb-6">
              <Image src="/logo_footer.png" alt="Pro Clean" width={203} height={50} />
              <p className="text-sm leading-[160%] w-[80%] font-normal">Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.</p>
            </div>
            <div className="space-y-6 mb-6">
              <h3 className="text-base font-semibold">Company</h3>
              <p className="text-sm"><Link href="/">About Us</Link></p>
              <p className="text-sm"><Link href="/">Services</Link></p>
              <p className="text-sm"><Link href="/">Our Team</Link></p>
            </div>
            <div className="space-y-6 mb-6">
              <h3 className="text-base font-semibold">Know More</h3>
              <p className="text-sm"><Link href="/">Support</Link></p>
              <p className="text-sm"><Link href="/">Privacy Policy</Link></p>
              <p className="text-sm"><Link href="/">Terms & Condition</Link></p>
            </div>
            <div className="flex flex-col space-y-6 items-start">
              <h3 className="text-base font-semibold">Newsletter</h3>
              <input type="text" placeholder="Email Goes here" className="border px-5 py-2 text-sm rounded-sm text-gray-400"/>
              <button className="px-6 py-2 border-0 rounded-sm bg-[#36B864]">Send</button>
            </div>
        </div>
        <div className="flex items-center justify-center border-t border-t-gray-100 pt-6">
          <p className="text-sm">2024 “Procleaning” All Rights Received</p>
        </div>
    </footer>
  )
}
