import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  const features = [
    {
      icon: "/Characters/character 3.png",
      path: "/branding",
      title: "Branding",
      Content: [
        "A property branding agency that understands",
        "Creative",
        "Digital",
        "Stay one-step ahead with your property branding",
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: "/Characters/character 4.png",
      path: "/printing",
      title: "Printing",
      Content: [
        "Content Creation",
        "Content Management",
        "Content Optimization",
        "Content Strategy",
        "Content Writing",
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: "/Characters/character 8.png",
      path: "/social-media",
      title: "Social Media",
      Content: [
        "Digital Strategy",
        "Content Creation",
        "Community Management",
        "Reels Creation",
        "Influencers Management",
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },

    {
      icon: "/Characters/character 5.png",
      path: "/events",
      title: "Events",
      Content: [
        "Content Creation",
        "Content Management",
        "Content Optimization",
        "Content Strategy",
        "Content Writing",
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },

    {
      icon: "/Characters/character 6.png",
      path: "/media-production-and-motion-graphic",
      title: "Media Production and Motion Graphic",
      Content: [
        "Content Creation",
        "Content Management",
        "Content Optimization",
        "Content Strategy",
        "Content Writing",
      ],
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
              Looking to power up your digital strategy? DIGIRAIN offers a wide
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
            {/* Third Service */}
            {features.map((feature) => (
              <li
                key={feature.title}
                className="bg-[#ec5396] space-y-3 p-4 border-4 border-[#fff1dc] rounded-2xl"
              >
                <div className="text-indigo-600 pb-3 flex justify-center items-center w-full h-[200px]">
                  <Image
                    src={feature.icon}
                    alt=""
                    className="w-full h-full object-contain"
                    width={100}
                    height={100}
                  />
                </div>
                <h4 className="text-2xl text-white font-semibold">
                  {feature.title}
                </h4>
                <div className="h-1 w-full bg-gray-200"></div>
                <ul className="grid gap-1 ">
                  <ul className="underline flex flex-col gap-1">
                    {feature.Content.map((content) => (
                      <li key={content}>{content}</li>
                    ))}
                  </ul>
                  <p className="font-bold text-lg underline mt-8 cursor-pointer text-[#fbcb13]">
                    <Link href={feature.path}>Explore The Service</Link>
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
