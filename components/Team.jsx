import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-center items-center px-4 max-w-[1350px] mx-auto sm:px-[45px] my-[80px]">
      {/* Text */}
      <div className=" flex flex-col flex-1  justify-center">
        <div className="">
          <h2 className="text-xl font-bold text-yellow">WHO ARE WE</h2>
          <h2 className="text-5xl font-bold ">
            Crafting Your <br /> Digital Future
          </h2>
        </div>
        <p className="my-8">
          We are a leading digital agency specializing in performance marketing,
          content creation and data analysis. With a deep understanding of the
          digital landscape and a commitment to data-driven strategies, we have
          consistently delivered measurable results for our clients
        </p>
        <div className="flex w-full justify-center items-center md:justify-start">
          <p className="bg-[#ffce26] px-4 py-3 w-fit font-bold rounded-md text-black cursor-pointer text-center">
            See More
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 items-center justify-center h-full relative overflow-hidden">
        <Image
          alt="profile"
          src="/profile.jpg"
          width={500}
          height={500}
          className="object-cover w-full h-auto rounded-3xl overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Team;
