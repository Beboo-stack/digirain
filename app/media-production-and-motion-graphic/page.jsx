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
          <h2 className="text-4xl font-bold leading-snug text-white capitalize">
            Rain can make you see the{" "}
            <span className="text-[#ec5396]">rainbow</span> but digirain can
            make you see the <span className="text-[#ec5396]">magic</span> of
            Media Production/Motion Graphic Design.
          </h2>
          <p className="text-2xl mt-3">
            As video content is an essential part of a brand&apos;s online presence,
            DIGIRain offers you online and offline video production services. We
            handle the creative conceptualization and execution of 2D animation
            and video production.
          </p>
          <p className="text-3xl mt-5 text-[#037f36] font-bold uppercase">
            Includes <span className="text-white">:</span> <br />
            <ul className="list-disc ml-10 text-yellow flex flex-col md:flex-row gap-3 text-base mt-3">
              <li>Creative concepts Videos</li>
              <li>Scriptwriting ReelsVideos</li>
              <li>Storyboards Motion Video Production</li>
            </ul>
          </p>
        </div>
        {/* SVG */}
        <div className="h-full flex-1 justify-center items-center">
          <Image
            src="/Characters/character 2.png"
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
