import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col max-w-3xl px-4 pt-[11rem] mx-auto  lg:py-[200px] sm:px-6 lg:max-w-4xl justify-center items-center">
      <h2 className="text-6xl  text-center font-bold leading-normal">
        Increase Your <span className="text-[#ffce26]">Feluence</span>
      </h2>
      <div className="w-full  mt-1 flex justify-center items-center">
        <h2 className="text-6xl font-bold text-center">
          And Grow Your Business
        </h2>
      </div>
      <p className="mt-8  text-center">
        Dive into a world of growth opportunities powered by data-driven
        techniques, creative content solutions, and an unwavering commitment to
        your success, pushing your brand to lead in your industry
      </p>
      <div className="w-full h-full flex justify-center">
        <div className="relative w-full mt-10">
          <svg
            className="w-6 h-6  absolute right-3 inset-y-0 my-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-[60px] pl-12 pr-3 py-2 text-black outline-black bg-transparent outline-none border shadow-sm rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
