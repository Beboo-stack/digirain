import { Check, X } from "lucide-react";
import React from "react";

const WhyUs = () => {
  const strategy1 = [
    {
      item: "Dedicated account manager, interfacing with a team of 50+ digital marketing experts.",
    },
    {
      item: "Custom strategies, crafted uniquely for your brand by our marketing and content creation teams      ",
    },
    {
      item: "Measurable results rooted in clear analytics.      ",
    },
    {
      item: "Consistency & unwavering commitment that builds trust.      ",
    },
    {
      item: "Weekly client meetings for regular updates and progress.      ",
    },
    {
      item: "Quarterly strategy, elevate your strategic planning for each quarterby our digital strategy services.      ",
    },
  ];
  const strategy2 = [
    {
      icon: (
        <Check className="w-[6%] h-[6%] text-white rounded-full bg-green-500 font-bold" />
      ),
      item: "Dedicated account manager responsible for strategy, but will need your help implementing solutions.",
    },
    {
      icon: (
        <X className="w-[6%] h-[6%] text-white rounded-full bg-red-500 font-bold" />
      ),
      item: "Third-party tracking and analysis with subscription costs passed to you.      ",
    },
    {
      icon: (
        <X className="w-[6%] h-[6%] text-white rounded-full bg-red-500 font-bold" />
      ),
      item: "Cookie-cutter checklists and solutions for optimizing your campaigns.      ",
    },
    {
      icon: (
        <Check className="w-[6%] h-[6%] text-white rounded-full bg-green-500 font-bold" />
      ),
      item: "Regular, but unreliable support when issues arise with your account.",
    },
  ];
  const strategy3 = [
    {
      icon: (
        <X className="w-[6%] h-[6%] text-white rounded-full bg-red-500 font-bold" />
      ),
      item: "One or two team members trying to keep up with fast-paced marketing advancements      ",
    },
    {
      icon: (
        <X className="w-[6%] h-[6%] text-white rounded-full bg-red-500 font-bold" />
      ),
      item: "Analytics suite for measuring and improving campaign performance      ",
    },
    {
      icon: (
        <Check className="w-[6%] h-[6%] text-white rounded-full bg-green-500 font-bold" />
      ),
      item: "S.M.A.R.T. goals, but limited resources needed to execute      ",
    },
    {
      icon: (
        <X className="w-[6%] h-[6%] text-white rounded-full bg-red-500 font-bold" />
      ),
      item: "Reporting roadblocks leading to project delays and wasted spend      ",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="w-full h-full flex flex-col justifcy-center items-center gap-3 mb-20 ">
        <p className="text-center capitalize font-bold text-base text-yellow max-w-xs md:max-w-full mx-auto">
          WHY CHOOSE US
        </p>
        <h2 className={` text-center font-bold text-5xl w-[70%]`}>
          Discover the Spark That Sets Us Apart
        </h2>
        <p className="text-center max-w-[70%]">
          We craft strategies that drive results. Here’s a glimpse into why
          choosing us is choosing to illuminate your path to success.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-2 lg:grid-cols-3  md:gap-16">
        {/* <---First---> */}
        <div className=" rounded-2xl border border-yellow shadow-sm bg-[#FFF5D1]">
          <div className="pt-6 px-5 mb-5 ">
            <h2 className="text-4xl font-bold text-gray-900">DIGIRAIN</h2>
          </div>

          <div className="px-5 pb-10 ">
            <ul className="mt-2 space-y-2 gap-3 flex flex-col">
              {strategy1.map((item) => (
                <div className="flex gap-x-2" key={item.item}>
                  <Check className="w-[6%] h-[6%] text-white rounded-full bg-green-500 font-bold" />
                  <li className="w-[94%] items-start justify-center gap-5">
                    {item.item}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        {/* <---Second---> */}
        <div className=" rounded-2xl border border-gray-300  shadow-sm ">
          <div className="pt-6 px-5 mb-5 ">
            <h2 className="text-2xl font-bold text-gray-900">
              Local Marketing Agency
            </h2>
          </div>

          <div className="px-5 pb-10 ">
            <ul className="mt-2 space-y-2 gap-3 flex flex-col">
              {strategy2.map((item) => (
                <div className="flex gap-x-2" key={item.item}>
                  {/* <Check className="w-[6%] h-[6%] text-white rounded-full bg-green-500 font-bold" /> */}
                  {item.icon}
                  <li className="w-[94%] items-start justify-center gap-5">
                    {item.item}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        {/* <---Third---> */}
        <div className=" rounded-2xl border border-gray-300  shadow-sm">
          <div className="pt-6 px-5 mb-5 ">
            <h2 className="text-2xl font-bold text-gray-900">
              In-House Marketing
            </h2>
          </div>

          <div className="px-5 pb-10 ">
            <ul className="mt-2 space-y-2 gap-3 flex flex-col">
              {strategy3.map((item) => (
                <div className="flex gap-x-2" key={item.item}>
                  {item.icon}
                  <li className="w-[94%] items-start justify-center gap-5">
                    {item.item}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
