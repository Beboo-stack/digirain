"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <div className="flex overflow-hidden flex-col md:flex-row w-full h-full justify-center items-center px-4 max-w-[1350px] mx-auto sm:px-[45px] my-[80px]">
      {/* Text */}
      <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}

      className=" flex flex-col flex-1  justify-center">
        <div className="">
          <h2 className="text-xl font-bold text-yellow">WHO ARE WE</h2>
          <h2 className="text-5xl font-bold ">
            Crafting Your <br /> Digital Future
          </h2>
        </div>
        <p className="my-8">
          We are a leading digital agency specializing in performance marketing,
          content creation and data analysis. With a deep understanding of the
          digital landscape and a commitment to data-driven strategies, we have
          consistently delivered measurable results for our clients
        </p>
        <div className="flex w-full justify-center items-center md:justify-start">
          <Link href="/who-we-are">
            <p className="bg-[#ffce26] px-4 py-3 w-fit font-bold rounded-md text-black cursor-pointer text-center">
              See More
            </p>
          </Link>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="flex-1 items-center flex justify-center h-full relative  ">
        <div className="w-[70%] h-1/2 relative z-[3]">
          <Image
            alt="profile"
            src="/download.jpeg"
            width={500}
            height={500}
            className=" w-full h-full rounded-3xl z-[2]"
          />
          <div className="w-full h-full absolute top-0 start-0 rotate-[5deg] bg-yellow rounded-3xl z-[-1]"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
