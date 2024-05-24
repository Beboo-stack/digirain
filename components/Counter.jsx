import React from "react";

const Counter = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-lg text-yellow font-bold">DOTTOPIA NUMBERS</h1>
        <h2 className="text-5xl font-bold">Shaping Your Success Story</h2>
      </div>
      <p className="mt-5 text-center">
        Discover how our real-world experience translates to winning results in
        digital marketing
      </p>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-44 mt-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-yellow text-7xl font-bold">12M$+</h1>
          <p className="font-bold mt-2 text-lg">Revenue Driven for Clients</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-yellow text-7xl font-bold">500+</h1>
          <p className="font-bold mt-2 text-lg">Satisfied Clients</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-yellow text-7xl font-bold">10+</h1>
          <p className="font-bold mt-2 text-lg">Years in the Market</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
