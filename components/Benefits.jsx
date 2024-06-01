import Image from "next/image";
import React from "react";

const Benefits = () => {
  const Insights = [
    {
      png: "/marketing.png",
      title: "Increased Visibility and Traffic",
      desc: "SEO improves your website’s visibility in search engine results which leads to more traffic",
    },
    {
      png: "/responsive.png",
      title: "Higher Credibility and Trust",
      desc: "Websites that appear higher in search results are often perceived as more trustworthy and credible by users",
    },
    {
      png: "/web-analysis.png",
      title: "Long-Term Results",
      desc: "Once your website ranks well, it can maintain its position for an extended period while providing ongoing value",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden px-5">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-lg text-yellow font-bold">Benefits</h1>
        <h2 className="text-5xl font-bold">Experts in SEO WEB Services</h2>
      </div>
      <p className="mt-5 text-center w-full lg:w-3/4">
        Our performance marketing agency’s qualified SEO web services resonate
        specifically with a personalized strategy to align with your business
        goals. We delve deep into market trends, competitor analysis and user
        behavior to ensure every optimization tactic is purposeful and
        results-driven with our SEO services packages.
      </p>
      <div className="w-full lg:max-w-6xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mt-20">
        {Insights.map((insight, index) => (
          <div
            className="flex flex-col text-center justify-center items-center"
            key={index}
          >
            <Image
              src={insight.png}
              alt="insight"
              className="w-24 h-24 mb-5"
              width={100}
              height={100}
            />
            <h1 className="text-lg font-bold">{insight.title}</h1>
            <p className=" mt-2 text-base">{insight.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
