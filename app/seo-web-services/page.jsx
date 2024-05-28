import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="w-full h-full mb-48">
      <div className="w-full flex flex-col md:flex-row bg-[#FFF5D1] justify-center items-center h-full md:h-screen px-4 py-8 sm:px-6 sm:py-12  lg:py-36 xl:px-32 mb-20">
        {/* Text */}
        <div className=" h-full justify-center items-center lg:items-start w-full flex flex-col py-16">
          <h2 className="text-5xl font-bold leading-snug mb-3">
            improve your organic sales with SEO web services
          </h2>
          <p>
            As a leading agency in SEO web services, we’re a distinguished
            expert among the best performance marketing agencies. We are
            specialized in tailoring strategic SEO solutions to meet the diverse
            needs of businesses. we take the lead as a top-tier B2B SEO
            professional services providers, ensuring unparalleled visibility
            and the highest search rankings to your digital channels. Get a Free
            Consultation
          </p>
          <p className="font-bold mt-5 bg-yellow px-5 py-3 rounded-md">
            Get A Free Consultation
          </p>
        </div>
        {/* Balls */}
        <div className="h-full w-full justify-center items-center flex gap-10  ">
          <div className="w-full h-[450px] relative ">
            <p className="absolute top-0 left-0 xl:left-[20%] w-[160PX] h-[160px] flex flex-col justify-center items-center rounded-full bg-black text-white text-xs text-center">
              Improve Clicks By <br />{" "}
              <span className="text-5xl font-bold"> 220% </span>
              in 1 Month{" "}
            </p>
            <p className="absolute top-[-5%] right-[5%] lg:top-0 lg:right-[20%] w-[150PX] h-[150px] flex flex-col justify-center items-center rounded-full bg-black text-white text-xs text-center">
              Conversions <br />{" "}
              <span className="text-5xl font-bold"> 151% </span>
              in 1 Month{" "}
            </p>
            <p className="absolute top-[30%] left-[30%] lg:top-1/4 lg:right-[50%] xl:top-[35%]  w-[170PX] h-[170PX]  rounded-full bg-yellow text-white text-xs text-center flex flex-col justify-center items-center">
              Improve Impressions By <br />{" "}
              <span className="text-5xl font-bold"> 190% </span>
              In 1 Month{" "}
            </p>
            <p className=" absolute bottom-[-5%] right-0 lg:bottom-0 lg:right-[15%] w-[160PX] h-[160px] flex flex-col justify-center items-center rounded-full bg-black text-white text-xs text-center">
              Organic Sessions <br />{" "}
              <span className="text-5xl font-bold"> 310%</span> in 1 Month{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
