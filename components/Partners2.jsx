"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Partners2 = ({ className, desc, title, text}) => {
  const logos = [
    {
      src: "/airbnb.svg",
    },
    {
      src: "/disney.svg",
    },
    {
      src: "/apple-music-3.svg",
    },
    {
      src: "/disney.svg",
    },
    {
      src: "/airbnb.svg",
    },
    {
      src: "/disney.svg",
    },
    {
      src: "/apple-music-3.svg",
    },
    {
      src: "/disney.svg",
    },
    {
      src: "/spark-1.svg",
    },
    {
      src: "/samsung.svg",
    },
    {
      src: "/spark-1.svg",
    },
    {
      src: "/samsung.svg",
    },
    {
      src: "/spark-1.svg",
    },
  ];

  const duplicatedSlides = [...logos, ...logos];

  return (
    <div
      className={`relative  h-full overflow-hidden py-12 bg-white mx-auto max-w-screen-lg ${className}`}
      style={{ width: "100%%" }}
    >
      <div className="w-full h-full flex flex-col justifcy-center items-center gap-3 mb-5 ">
        <p className="text-center capitalize font-bold text-base text-yellow max-w-xs md:max-w-full mx-auto">
          our partners
        </p>
        <h2 className={` text-center font-bold ${text}`}>
          {title}
        </h2>
        <p className="text-center max-w-[90%]">
        {desc}
        </p>
      </div>
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0  before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0   after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

      <motion.div
        className="flex w-full"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        <ul className="flex max-w-full space-x-6 md:space-x-12 w-full">
          {duplicatedSlides.map((slide, index) => (
            <li key={index} className=" w-full ">
              <Image
                alt=""
                src={slide.src}
                width={100}
                height={100}
                className="max-w-[50px] md:max-w-[100px] h-full"
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Partners2;
