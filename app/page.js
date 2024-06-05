import Blog from "@/components/Blog";
import Booking from "@/components/Booking";
import CarouselSec from "@/components/CarouselSec";
import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Partners2 from "@/components/Partners2";
import Proplems from "@/components/Proplems";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="w-full h-full  ">
      <Hero />
      <Partners
        shadow={"before:w-[15%] after:w-[15%]"}
        paragraph={"JOIN OVER 500 PARTNERS WHO HAVE CHOSEN US."}
      />
      <Team />
      <Counter />
      {/* <Proplems /> */}
      <Partners2
        title={"Step Into Success With Industry Giants"}
        desc={
          "Our collaboration allows us to hardness the latest innovations, insights, and cutting-edge tools to elevate your digital presence and marketing strategies."
        }
        text={"text-5xl md:text-6xl"}
      />
      <Booking title={"Book a Meeting"} />
      <OurServices />
      <CarouselSec />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
    </div>
  );
}
