import React from "react";

const Insights = () => {
  const Insights = [
    {
      num: "7+",
      desc: "Years on the local and the global market",
    },
    {
      num: "500+",
      desc: "Satisfied Clients on the local and the global market",
    },
    {
      num: "2K+",
      desc: "Projects Delivered across all services we deliver",
    },
    {
      num: "2M$+",
      desc: "Ads Spending on different platforms",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden px-4">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-lg text-yellow font-bold">INSIGHTS</h1>
        <h2 className="text-5xl font-bold">Over The Last Decade</h2>
      </div>
      <div className="w-full  lg:max-w-6xl flex flex-col md:flex-row justify-center items-center  md:gap-12 mt-10">
        {Insights.map((insight, index) => (
          <div
            className="flex flex-col text-center justify-center items-center"
            key={index}
          >
            <h1 className="text-yellow text-[90px] md:text-5xl lg:text-[90px] font-bold">{insight.num}</h1>
            <p className="font-bold mt-2 text-lg md:text-base lg:text-lg">{insight.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
