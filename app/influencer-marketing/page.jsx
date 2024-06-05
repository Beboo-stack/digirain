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
            When we wake up to the
            <span className=" text-[#ea0e1a]"> weather</span> news that it{" "}
            <span className=" text-[#042dcc]">will rain today</span> Our day is
            affected by all its plans due to the effect of rain on us This
            explains the influence of influencers on business life, which
            changes the attitudes of your customers to trust you and the service
            or product you provide. At{" "}
            <span className=" text-[#ec5396]">DIGIRAIN</span> we believe in the
            power of influencer marketing so.. we{" "}
            <span className=" text-[#037f36]">DIGIRAIN</span> have a large
            number of influencers on your target audience and business area
            through social media.
          </h2>
        </div>
        {/* SVG */}
        <div className="h-full flex-1 justify-center items-center">
          <Image
            src="/Characters/character 4.png"
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
