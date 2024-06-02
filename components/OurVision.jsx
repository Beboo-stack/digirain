import React from "react";

const OurVision = () => {
  return (
    <div
      id="our-vision"
      className="flex flex-col w-full h-full justify-center items-center overflow-hidden mt-[50px] py-8 sm:px-6 sm:py-12 lg:px-32 lg:py-36"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl text-yellow font-bold mb-5">Our Vision</h1>
        <h2 className="text-2xl font-bold w-[80%]">
          At DigiRain, our vision is to saturate the global landscape <br />{" "}
          <span className="text-[#ec5396]">
            {" "}
            like rain-reaching every corner, nurturing growth, and leaving an
            indelible impact
          </span>
        </h2>
      </div>
      <p className="mt-10 text-2xl text-center w-[90%]">
        We aspire not only to thrive in Egypt and the Arab countries but also to
        cascade our success across continents. Our commitment is to be the
        downpour that transforms businesses, empowers brands, and fosters
        connections worldwide. Choose DigiRain, where success knows no
        boundaries.
      </p>
    </div>
  );
};

export default OurVision;
