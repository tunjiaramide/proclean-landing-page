import { FaStar, FaQuoteRight } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"


export default function CarouselUI() {
  return (
    <Carousel className="w-full p-5">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex space-x-5">
                <div className="w-1/2 space-y-5">
                    <h2 className="text-[38px] leading-11 font-semibold">Feedback About Their Experience With Us</h2>
                    <p className="text-[16px] text-[#666666] w-[80%]">Read testimonials from our satisfied clients. See how our cleaning services have made a difference in their lives and homes</p>
                    <div className="flex space-x-2">
                        <CarouselPrevious  className="static mt-3 rounded-sm text-[#36B864] font-bold" />
                        <CarouselNext className="static mt-3 rounded-sm bg-[#36B864] border-transparent text-white" />
                    </div>
                </div>
                <div className="w-1/2">
                     <Card className="shadow-md shadow-green-400">
                        <CardContent className="flex items-center space-x-5 px-6 py-2">
                            <Image src="/client_1.png" alt="Testimonial" width={170} height={244} />
                            <div className="w-2/3 space-y-4">
                                <div className="flex justify-between">
                                        <div className="space-y-0.5">
                                            <h6 className="text-xl">Robert Fox</h6>
                                            <p className="text-base text-[#666666]">Business Man</p>
                                            <div className="inline-flex space-x-2">
                                                            <FaStar color="orange" />
                                                            <FaStar color="orange" />
                                                            <FaStar color="orange" />
                                                            <FaStar color="orange" />
                                                            <FaStar color="orange" />
                                            </div>
                                        </div>
                                        <div className="p-4 text-center items-center bg-[#36B864]">
                                            <FaQuoteRight size={50} color="white" />
                                        </div>
                                </div>
                                <div>
                                    <p className="text-[#666666] text-sm">Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}