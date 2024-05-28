import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col max-w-3xl px-4 pt-[6rem] mx-auto  lg:py-[200px] sm:px-6 lg:max-w-4xl justify-center items-center">
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
        <div class="relative w-full p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-row justify-between rounded-2xl md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 border-gray-700 focus-within:border-yellow">
          <input
            type="text"
            name="email"
            placeholder="Your Brand Name"
            class="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full"
          />
          <button class="bg-yellow rounded-2xl py-3 px-7 text-base font-bold text-black hover:bg-orange-500 cursor-pointer transition-all duration-500 w-fit">
            Get a Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
