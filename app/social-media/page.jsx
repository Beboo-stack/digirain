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
            Even in <span className=" text-[#fbcb13]">summer</span> or{" "}
            <span className=" text-[#042dcc]">winter</span> Now we can start
            your social media storm together from scratch or hop on at any of
            these stations. Whether you are a beginner or an expert, we have a
            place for you.{" "}
            <span className=" text-[#fbcb13]">Business Conversations</span> -{" "}
            <span className=" text-[#ea0e1a]">Build Networks</span>-{" "}
            <span className=" text-[#fff1dc]">Analyze Competitors</span> -
            Increase Sales Pipeline-{" "}
            <span className=" text-[#037f36]">Strengthening Brand</span> -
            Create Relationships with Clients. Creating and managing social
            media accounts - Content Creation - <span className=" text-[#ec5396]">Application Development</span> -
            Conducting research and surveys - Advertising Campaigns -Viral
            Videos-Insights-Reports.
          </h2>
        </div>
        {/* SVG */}
        <div className="h-full flex-1 justify-center items-center">
          <Image
            src="/Characters/character 8.png"
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
