"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Partners = ({ shadow, head1, head2, paragraph }) => {
  const logos = [
    {
      src: "/Dr Aseel.png",
    },
    {
      src: "/Dr lobna.png",
    },
    {
      src: "/Edward.png",
    },
    {
      src: "/Godablaze.png",
    },
    {
      src: "/Greecap.png",
    },
    {
      src: "/Moses.png",
    },
    {
      src: "/Wild valley honey.png",
    },
    {
      src: "/Dr Aseel.png",
    },
    {
      src: "/Dr lobna.png",
    },
    {
      src: "/Edward.png",
    },
    {
      src: "/Godablaze.png",
    },
    {
      src: "/Greecap.png",
    },
    {
      src: "/Moses.png",
    },
    {
      src: "/Wild valley honey.png",
    },
  ];

  const duplicatedSlides = [...logos, ...logos];

  // before:w-1/4 after:w-1/4
  return (
    <div
      className="relative w-full h-full mt-20 overflow-hidden py-12 mb-[80px]  mx-auto max-w-full"
      style={{ width: "100%%" }}
    >
      <h2 className="text-center capitalize font-bold text-base text-yellow max-w-xs md:max-w-full mx-auto">
        {head2}
      </h2>
      <h1 className={` text-center mx-auto mb-7 font-bold text-5xl w-[70%]`}>
        {" "}
        {head1}
      </h1>
      <p className="text-center font-bold mb-20 text-lg max-w-xs md:max-w-full mx-auto">
        {paragraph}
      </p>
      <div
        className={`absolute inset-0 z-20 before:absolute before:left-0 before:top-0  before:h-full before:bg-gradient-to-r before:from-[#111b58] before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0  after:h-full after:bg-gradient-to-l after:from-[#111b58] after:to-transparent after:filter after:blur-3 ${shadow}`}
      ></div>

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
                className="max-w-[70px] md:max-w-[80px] h-full object-contain"
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Partners;
