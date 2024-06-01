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
            <span className="text-[#037f36]">Welcome to digirain</span> <br />{" "}
            Where Gen Z will make storms <br /> our{" "}
            <span className="text-[#ec5396]">
              {" "}
              professional, young, and creative
            </span>{" "}
            team
          </h2>
          <p className="text-2xl mt-3">
            team will change the social landscape we provide services that
            exceed your expectations to{" "}
            <span className="text-[#ec5396]"> achieve</span> your goals and give
            you the edge solution that makes you achieve your goals{" "}
            <span className="text-[#ec5396]">
              {" "}
              and Make customers fall like rain in your business
            </span>
          </p>
          <p className="text-3xl mt-5 text-[#037f36] font-bold uppercase">
            let&apos;s make it rainy
          </p>
        </div>
        {/* SVG */}
        <div className="h-full flex-1 justify-center items-center">
          <Image
            src="/meeting.svg"
            alt="profile"
            className=" w-full h-full"
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
