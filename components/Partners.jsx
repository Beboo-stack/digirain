"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Partners = ({ shadow, head1, head2, paragraph }) => {
  const logos = [
    {
      src: "/partners/partner (1).png",
    },
    {
      src: "/partners/partner (2).png",
    },
    {
      src: "/partners/partner (3).png",
    },
    {
      src: "/partners/partner (5).png",
    },
    {
      src: "/partners/partner (6).png",
    },
    {
      src: "/partners/partner (7).png",
    },
    {
      src: "/partners/partner (8).png",
    },
    {
      src: "/partners/partner (9).png",
    },
    {
      src: "/partners/partner (10).png",
    },
    {
      src: "/partners/partner (11).png",
    },
    {
      src: "/partners/partner (39).png",
    },
    {
      src: "/partners/partner (12).png",
    },
    {
      src: "/partners/partner (13).png",
    },
    {
      src: "/partners/partner (14).png",
    },
    {
      src: "/partners/partner (15).png",
    },
    {
      src: "/partners/partner (16).png",
    },
    {
      src: "/partners/partner (17).png",
    },
    {
      src: "/partners/partner (18).png",
    },
    {
      src: "/partners/partner (19).png",
    },
    {
      src: "/partners/partner (20).png",
    },
    {
      src: "/partners/partner (21).png",
    },
    {
      src: "/partners/partner (22).png",
    },
    {
      src: "/partners/partner (23).png",
    },
    {
      src: "/partners/partner (24).png",
    },
    {
      src: "/partners/partner (25).png",
    },
    {
      src: "/partners/partner (26).png",
    },
    {
      src: "/partners/partner (27).png",
    },
    {
      src: "/partners/partner (28).png",
    },
    {
      src: "/partners/partner (29).png",
    },
    {
      src: "/partners/partner (30).png",
    },
    {
      src: "/partners/partner (31).png",
    },
    {
      src: "/partners/partner (32).png",
    },
    {
      src: "/partners/partner (33).png",
    },
    {
      src: "/partners/partner (34).png",
    },
    {
      src: "/partners/partner (35).png",
    },
    {
      src: "/partners/partner (36).png",
    },
    {
      src: "/partners/partner (37).png",
    },
    {
      src: "/partners/partner (38).png",
    },

    {
      src: "/partners/partner (40).png",
    },
    {
      src: "/partners/partner (41).png",
    },
    {
      src: "/partners/partner (42).png",
    },
    {
      src: "/partners/partner (43).png",
    },
    {
      src: "/partners/partner (44).png",
    },
    {
      src: "/partners/partner (45).png",
    },
    {
      src: "/partners/partner (46).png",
    },
    {
      src: "/partners/partner (47).png",
    },
    {
      src: "/partners/partner (48).png",
    },
  ];

  const duplicatedLogos = [...logos, ...logos];

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
          x: ["20%", "-400%"],
          transition: {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          },
        }}
      >
        <ul className="flex max-w-full space-x-6 md:space-x-12 w-full">
          {duplicatedLogos.map((slide, index) => (
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
