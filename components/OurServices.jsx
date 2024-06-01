import Image from "next/image";
import React from "react";

const OurServices = () => {
  const features = [
    {
      icon: "/1.svg",
      title: "Build on your terms",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: "/2.svg",
      title: "Safe to use",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: "/3.svg",
      title: "Flexible",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
  ];

  const links = [
    {
      title: "Digital Strategy",
    },
    {
      title: "Content Creation",
    },
    {
      title: "Community Management",
    },
    {
      title: "Reels Creation",
    },
    {
      title: "Influencers Management",
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4  md:px-8 ">
        <div className="relative max-w-5xl mx-auto sm:text-center ">
          <div className="relative z-10 text-center">
            <h1 className="uppercase text-yellow font-bold">our services</h1>
            <h3 className=" text-5xl font-bold ">How we drive revenue</h3>
            <p className="mt-3">
              Looking to power up your digital strategy? Dottopia offers a wide
              range of digital marketing services that work together to attract,
              delight, and convert leads.
            </p>
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <div className="relative mt-20">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="bg-[#ec5396] space-y-3 p-4 border-4 border-[#fff1dc] rounded-2xl"
              >
                <div className="text-indigo-600 pb-3 flex justify-center items-center w-full h-[200px]">
                  <Image
                    alt=""
                    className="w-full h-full  "
                    src={item.icon}
                    width={100}
                    height={100}
                  />
                </div>
                <h4 className="text-2xl text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <div className="h-1 w-full bg-gray-200"></div>
                <ul className="grid gap-1">
                  {links.map((item, idx) => (
                    <li key={idx} className="underline">
                      {" "}
                      {item.title}{" "}
                    </li>
                  ))}
                  <p className="font-bold text-lg underline mt-8 cursor-pointer text-[#fbcb13]">
                    Explore The Service
                  </p>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
