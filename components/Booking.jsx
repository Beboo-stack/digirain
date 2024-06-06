"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Booking = ({ title, className }) => {
  return (
    <section className={`bg-[#ff3301] text-white mb-20 ${className}`}>
      <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0, x: -100 }}
      className="w-full h-full px-4 py-8 sm:px-6 sm:py-14 lg:px-32 lg:py-20 flex flex-col md:flex-row justify-between items-center">
        {/* Text */}
        <div className="flex w-full flex-col gap-5">
          <h2 className="text-5xl font-bold">
            Unlock New Horizons with our Solutions
          </h2>
          <p>
            Ready to elevate your experience? Embrace the extraordinary with
            DIGIRAIN. Dive in now and let’s create something remarkable
            together!
          </p>
        </div>
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut"}}
        exit={{ opacity: 0, x: -100 }}
        className=" flex justify-start md:justify-end items-center w-full h-full">
          <p className=" font-bold py-4 px-5 bg-[#037f36] text-white w-fit rounded-lg mt-6 cursor-pointer">
            <Link href="/contact-us">{title}</Link>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Booking;
