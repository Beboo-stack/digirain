import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Results = () => {
  return (
    <section className="bg-[#FFF5D1] text-black mt-20">
      <div className="w-full h-full px-4 py-8 sm:px-6 sm:py-14 lg:px-32 lg:py-20 flex flex-col md:flex-row justify-between items-center">
        {/* Text */}
        <div className="flex flex-1 flex-col gap-5">
          <Image
            src="/meeting.svg"
            className=""
            alt="Results"
            width={450}
            height={450}
          />
        </div>
        <div className="flex-1 flex flex-col justify-start md:justify-start items-start w-full h-full">
          <div className="mb-5">
            <p className=" font-bold text-yellow ">RESULTS DRIVEN</p>
            <h2 className="text-5xl font-bold">
              We Keep The Focus On Driving Results.
            </h2>
          </div>
          <p className="mb-5">
            Want to learn more about the results we’ve driven for our clients?
            Check out our portfolio for examples of our work.
          </p>
          <Button variant="default" className="bg-yellow text-black font-bold capitalize text-base py-6">our work</Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
