import CoreValues from "@/components/CoreValues";
import Insights from "@/components/Insights";
import OurMision from "@/components/OurMision";
import OurVision from "@/components/OurVision";
import Results from "@/components/Results";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="mb-48  w-full h-full">
      {/* Hero Section */}
      <div className="w-full flex flex-col-reverse md:flex-row  justify-center items-center h-full md:h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-32 lg:py-36 mb-20">
        {/* Text */}
        <div className=" h-full justify-center items-center lg:items-start flex-1 flex flex-col py-16">
          <h2 className="text-2xl font-bold leading-snug text-white capitalize">
            <span className="text-[#ec5396]">Different Types Of Rain Different Ways To Tell Your Unique Story.</span>
            DIGIRain uses a range of diverse tools and strategies, such as
            logos, colors, messages, stories, promotion, and distribution, to
            create a unique name, image, and personality for your product,
            service, or company in the minds of customers. Our goal is to
            attract and persuade customers that your product, service, or
            company is the best and most appropriate for their needs and
            desires.
          </h2>
        </div>
        {/* SVG */}
        <div className="h-full flex-1 justify-center items-center">
          <Image
            src="/Characters/character 3.png"
            alt="profile"
            className=" w-full h-full object-cover md:object-fill lg:object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
      <OurVision />
      <OurMision />
      {/* <CoreValues /> */}
      <Results />
      <Insights />
    </section>
  );
};

export default page;
