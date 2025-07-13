import PlanPricing from "./PlanPricing";

type PlansProps = {
    title: string;
    price: number;
    content: string[]
    href: string;
}

const plans: PlansProps[] = [
    {
        title: "Basic Package",
        price: 59.00,
        content: ["All services in the Basic Plan",
                    "Detailed dusting",
                    "Wiping down of kitchen appt",
                    "Cleaning inside the microwave",
                    "Changing bed linens",
                    "Spot cleaning walls and doors"
                ],
        href: "/"
    },
    {
        title: "Enterprise Package",
        price: 69.00,
        content: ["Dusting of all surfaces", "Sweeping and mopping floors" ,"Vacuuming carpets and rugs",
        "Cleaning of kitchen surfaces", "Cleaning of bathroom surfaces", "Emptying trash bins"],
        href: "/"
    },
    {
        title: "Premium Package",
        price: 99.00,
        content: ["All services in the Clean Plan",
                    "Deep cleaning of kitchen appt",
                    "baseboards, door frames, & vents",
                    "Organization of closets pantries",
                    "Carpet, upholstery spot cleaning",
                    "Detailed bathroom cleaning"],
        href: "/"
    },
]

export default function Plans() {
  return (
    <div id="pricing" className="pb-8">
        <div className='bg-[#36B864] h-[690px]'>
        </div>
        <div className='-mt-150 bg-transparent px-8 lg:px-24 relative z-10 space-y-4'>
            <h3 className='text-center text-white text-[16px]'>Our Pricing</h3>
            <h1 className='text-center text-white text-[40px] leading-12 lg:w-[50%] mx-auto'>Choose From Our Lowest Plans and Prices</h1>
            <div className="mx-auto bg-white border rounded-4xl w-[80%] md:w-[40%] lg:w-[28%] flex justify-between p-1 border-gray-200 mt-6">
                    <div className='text-lg text-white border rounded-4xl bg-[#36B864] px-9 py-1'>Monthly</div>
                    <div className='text-lg border border-gray-200 rounded-4xl px-9 py-1'>Yearly</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-10 mt-10'>
                    {plans.map((plan, index) => (
                                        <PlanPricing key={index} price={plan.price} title={plan.title} content={plan.content} href={plan.href} />
                                    ))
                    }
            </div>
        </div>
    </div>
  )
}
