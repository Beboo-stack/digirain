import CoreValues from "@/components/CoreValues";
import Insights from "@/components/Insights";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="mb-48  w-full h-full">
      {/* Hero Section */}
      <div className="w-full flex flex-col-reverse md:flex-row bg-yellow justify-center items-center h-full md:h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-32 lg:py-36 mb-20">
        {/* Text */}
        <div className=" h-full flex-1 flex-col justify-center items-center py-16">
          <h2 className="text-5xl font-bold leading-snug">
            Creative doers,
            <br /> dreamy realists, <br />
            artistic scientists.
          </h2>
          <p>
            Propel your business to new heights with our award-winning digital
            marketing services and technology based platform.
          </p>
        </div>
        {/* SVG */}
        <div className=" h-full flex-1">
          <Image
            src="/meeting.svg"
            alt="profile"
            className=" bg-yellow w-full h-full"
            width={500}
            height={500}
          />
        </div>
      </div>
      <Insights />
      <CoreValues />
    </section>
  );
};

export default page;
