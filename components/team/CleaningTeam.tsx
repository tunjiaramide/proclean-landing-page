import CleaningTeamDetails from "./CleaningTeamDetails"

type TeamProps = {
    imgurl: string;
    title: string;
    content: string;
    href: string;
}

const services: TeamProps[] = [
    {
        imgurl: "/team_1.png",
        title: "Erick Reynolds",
        content: "He is an expert cleaning staff member who provides thorough cleaning with precision,",
        href: "/"
    },
    {
        imgurl: "/team_2.png",
        title: "Erick Reynolds",
        content: "He is an expert cleaning staff member who provides thorough cleaning with precision,",
        href: "/"
    },
    {
        imgurl: "/team_3.png",
        title: "Erick Reynolds",
        content: "He is an expert cleaning staff member who provides thorough cleaning with precision,",
        href: "/"
    },
]

export default function CleaningTeam() {
  return (
        <div className="px-8 lg:px-24 py-8 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-2 border-b-1 mb-8">
                <div className="mb-3 md:mb-8">
                    <h2 className="text-[30px] md:text-[40px] leading-9 md:leading-12 font-semibold lg:w-[90%]">Effective Cleaning Requires an Expert Cleaning Team</h2>
                </div>
                <div>
                    <h4 className="text-[18px] mb-3 font-medium">Expert Team</h4>
                    <p className="text-[#666666] mb-3 md:mb-0">We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:gap-x-11">
                {services.map((service, index) => (
                    <CleaningTeamDetails key={index} imgurl={service.imgurl} title={service.title} content={service.content} href={service.href} />
                ))}
            </div>
        </div>
  )
}
