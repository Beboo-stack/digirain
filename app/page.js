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
      <Partners />
      <Team />
      <Counter />
      <Proplems />
      <Partners2 />
      <Booking />
      <OurServices />
      <CarouselSec />
      <Testimonials />
      <Blog />
    </div>
  );
}
