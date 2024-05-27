"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    {
      path: "/who-we-are",
      name: "Who We Are",
    },
    {
      path: "/ourServices",
      name: "Our Services",
    },
    {
      path: "/caseStudies",
      name: "Case Studies",
    },
    {
      path: "/insights",
      name: "Insights",
    },
  ];

  return (
    <div className="w-full h-full py-7 px-6  md:px-10 xl:px-36 flex justify-between items-center">
      {/* Logo */}
      <div className="">
        <Link href="/">
          <h2 className="text-2xl md:text-3xl lg:text-4xl cursor-pointer text-gray-800 hover:text-[#6F6F6F] font-bold">
            DIGIRAIN
          </h2>
        </Link>
      </div>
      <button
        onClick={() => setToggle(!toggle)}
        type="button"
        className="lg:hidden hs-collapse-toggle flex justify-center items-center gap-x-2 font-bold rounded-full bg-[#FBFBFB]/10 p-2    hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
        data-hs-collapse="#navbar-collapse-with-animation"
        aria-controls="navbar-collapse-with-animation"
        aria-label="Toggle navigation"
      >
        <svg
          class="hs-collapse-open:hidden flex-shrink-0 size-7"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
        <svg
          class="hs-collapse-open:block hidden flex-shrink-0 size-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      {/* Menu */}
      <div className="hidden w-full h-full items-center lg:flex justify-end">
        <ul className="flex gap-10 items-center">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="text-sm md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`absolute  w-screen h-screen z-[1000] transition-all duration-300 ease-in-out bg-black/85 ${
          toggle ? "left-0 top-0" : "left-[-120%] top-0"
        }`}
      >
        <div className="w-[calc(100%-50px)] h-full p-5 bg-white">
          <button
            onClick={() => setToggle(!toggle)}
            type="button"
            className="lg:hidden hs-collapse-toggle flex justify-center items-center gap-x-2 mb-10 font-bold rounded-full bg-[#FBFBFB]/10 p-2    hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <Image src="/close.svg" alt="close" width={30} height={20} />
          </button>
          <ul className="flex flex-col gap-5 items-start">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={() => setToggle(!toggle)}
                  href={link.path}
                  className="text-lg md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
