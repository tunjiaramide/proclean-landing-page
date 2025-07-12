import ServiceDetails from "./ServiceDetails"

type ServicesProps = {
    imgurl: string;
    title: string;
    content: string;
    href: string;
}

const services: ServicesProps[] = [
    {
        imgurl: "/service_1.png",
        title: "Office Cleaning",
        content: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services",
        href: "/"
    },
    {
        imgurl: "/service_2.png",
        title: "Spring Cleaning",
        content: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services",
        href: "/"
    },
    {
        imgurl: "/service_3.png",
        title: "House Cleaning",
        content: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services",
        href: "/"
    },
]
export default function Service() {
  return (
    <div className="px-8 md:px-24 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-2 border-b-1 mb-8">
            <div className="mb-3 md:mb-8 md:w-[80%]">
                <h2 className="text-[30px] md:text-[40px] leading-9 md:leading-12 font-semibold capitalize">We always provide the best service</h2>
            </div>
            <div>
                <h4 className="text-[18px] mb-3 font-medium">Services</h4>
                <p className="text-[#666666] mb-3 md:mb-0">While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
            {services.map((service, index) => (
                <ServiceDetails key={index} imgurl={service.imgurl} title={service.title} content={service.content} href={service.href} />
            ))}
        </div>
    </div>
  )
}
