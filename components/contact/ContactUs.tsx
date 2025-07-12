import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";


export default function ContactUs() {
  return (
    <div className="px-8 lg:px-24 py-8 lg:py-16 flex flex-col md:flex-row items-center justify-center gap-x-10">
        <div className='md:w-1/2 space-y-10 mb-10'>
            <h2 className="text-4xl">Find us</h2>
            <div className="flex space-x-4">
                    <div className="flex items-center">
                        <span className="p-4 bg-[#36B864] rounded-full">
                            <FaPhoneVolume color="white"/>
                        </span>
                    </div>
                    <div>
                        <h6 className="text-lg font-semibold">Call Us</h6>
                        <p className="text-[#666666] text-sm">+(08) 255 201 888</p>
                    </div>
            </div>
            <div className="flex space-x-4">
                    <div className="flex items-center">
                        <span className="p-4 bg-[#36B864] rounded-full">
                            <HiOutlineMail color="white"/>
                        </span>
                    </div>
                    <div>
                        <h6 className="text-lg font-semibold">Email Now</h6>
                        <p className="text-[#666666] text-sm">hello@proclean.com</p>
                    </div>
            </div>
            <div className="flex space-x-4">
                    <div className="flex items-center">
                        <span className="p-4 bg-[#36B864] rounded-full">
                            <FaLocationDot color="white"/>
                        </span>
                    </div>
                    <div>
                        <h6 className="text-lg font-semibold">Address</h6>
                        <p className="text-[#666666] text-sm">7510, Brand Tower, New York, USA</p>
                    </div>
            </div>
        </div>
        <div className="md:w-1/2 space-y-4">
            <h6 className="text-base">Contact Info</h6>
            <h2 className="text-4xl font-semibold">Keep in Touch</h2>
            <p className="text-[#666666] text-sm">We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner</p>
            <div>
                <form className="space-y-5">
                    <input className="py-3 pl-3 border border-gray-200 w-full" type="text" placeholder="Name" />
                    <input className="py-3 pl-3 border border-gray-200 w-full" type="text" placeholder="Name" />
                    <textarea placeholder="Message" cols={4} className="py-3 pl-3 border border-gray-200 w-full">
                    </textarea>
                    <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 border rounded-md text-sm w-auto bg-[#36B864] text-white">
                    Send Message
                </button>
                </form>
            </div>
        </div>
    </div>
  )
}
