import AboutUs from "@/components/about/AboutUs";
import Blog from "@/components/blog/Blog";
import ContactUs from "@/components/contact/ContactUs";
import Hero from "@/components/hero/Hero";
import Plans from "@/components/plans/Plans";
import GetaQuote from "@/components/quote/GetaQuote";
import Service from "@/components/service/Service";
import CleaningTeam from "@/components/team/CleaningTeam";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <GetaQuote />
      <CleaningTeam />
      <AboutUs />
      <Plans />
      <Testimonials />
      <Blog />
      <ContactUs />
    </>
  );
}
