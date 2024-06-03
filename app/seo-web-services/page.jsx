import Accordion from "@/components/Accordion";
import Benefits from "@/components/Benefits";
import Blog from "@/components/Blog";
import Booking from "@/components/Booking";
import CarouselSec from "@/components/CarouselSec";
import Partners from "@/components/Partners";
import Partners2 from "@/components/Partners2";
import Services from "@/components/Services";
import Services1 from "@/components/Services1";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Link from "next/link";
import React from "react";

/**
 * This is the SEO Web Services page component.
 * It displays the SEO Web Services page content.
 * @returns {JSX.Element} The SEO Web Services page.
 */
const page = () => {
  return (
    // The SEO Web Services page
    <section className="w-full h-full mb-48 ">
      {/* The main content section */}
      <div className="w-full flex flex-col md:flex-row  justify-center items-center h-full md:h-screen px-4 py-8 sm:px-6 sm:py-12  lg:py-36 xl:px-32 mb-20">
        {/* The text section */}
        <div className=" h-full justify-center items-center lg:items-start w-full flex flex-col py-16">
          {/* The title */}
          <h2 className="text-5xl font-bold leading-snug mb-3">
            Improve your organic sales with SEO web services
          </h2>
          {/* The description */}
          <p>
            As a leading agency in SEO web services, we’re a distinguished
            expert among the best performance marketing agencies. We are
            specialized in tailoring strategic SEO solutions to meet the diverse
            needs of businesses. We take the lead as a top-tier B2B SEO
            professional services provider, ensuring unparalleled visibility and
            the highest search rankings to your digital channels. Get a Free
            Consultation
          </p>
          {/* The button */}
          <Link href="/contact-us">
            <p className="font-bold mt-5 bg-[#037f36] hover:text-[#ec5396] cursor-pointer px-5 py-3 rounded-md">
              Get A Free Consultation
            </p>
          </Link>
        </div>
        {/* The balls section */}
        <div className="h-full w-full justify-center items-center flex gap-10">
          <div className="w-full h-[450px] relative">
            {/* The click stats section */}
            <p className="absolute top-0 left-0 xl:left-[20%] w-[160PX] h-[160px] flex flex-col justify-center items-center rounded-full bg-black text-white text-xs text-center">
              Improve Clicks By <br />{" "}
              <span className="text-5xl font-bold"> 220% </span>
              in 1 Month
            </p>
            {/* The conversion stats section */}
            <p className="absolute top-[-5%] right-[5%] lg:top-0 lg:right-[20%] w-[150PX] h-[150px] flex flex-col justify-center items-center rounded-full bg-black text-white text-xs text-center">
              Conversions <br />{" "}
              <span className="text-5xl font-bold"> 151% </span>
              in 1 Month
            </p>
            {/* The impression stats section */}
            <p className="absolute top-[30%] left-[30%] lg:top-1/4 lg:right-[50%] xl:top-[35%]  w-[170PX] h-[170PX]  rounded-full bg-yellow text-white text-xs text-center flex flex-col justify-center items-center">
              Improve Impressions By <br />{" "}
              <span className="text-5xl font-bold"> 190% </span>
              In 1 Month
            </p>
            {/* The sessions stats section */}
            <p className="absolute bottom-[-5%] right-0 lg:bottom-0 lg:right-[15%] w-[160PX] h-[160px] flex flex-col justify-center items-center rounded-full bg-black text-white text-xs text-center">
              Organic Sessions <br />{" "}
              <span className="text-5xl font-bold"> 310%</span> in 1 Month
            </p>
          </div>
        </div>
      </div>
      <Benefits />
      <Services />
      <Booking title={"Get a Proposal"} className={"mt-28 mb-0"} />
      <Partners2
        className={"mt-0 mb-0"}
        title={"Elevate your Digital Presence with SEO Technical Tools"}
        desc={
          "We craft strategies that drive results. Here’s a glimpse into why choosing us illuminates your path to success."
        }
        text={"text-5xl"}
      />
      <WhyUs />
      <Partners
        head1={"Businesses Growing with DIGIRAIN"}
        head2={"OUR CLIENTS"}
        paragraph={"Explore our beloved clients who trust in DIGIRAIN."}
      />
      <CarouselSec />
      {/* <Testimonials /> */}
      {/* <Accordion /> */}
      {/* <Services1 /> */}
      {/* <Blog /> */}
    </section>
  );
};

export default page;
