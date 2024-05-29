"use client";
import { ArrowDown, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  // const [issticky, setIsSticky] = useState(false);

  const [toggle, setToggle] = useState(false);

  const [subToggle, setSubToggle] = useState(false);

  const links = [
    {
      path: "/who-we-are",
      name: "Who We Are",
    },
    {
      path: "",
      name: "Our Services",
    },
    {
      path: "/case-studies",
      name: "Case Studies",
    },
    {
      path: "/insights",
      name: "Insights",
    },
  ];

  const subLinks = [
    {
      title: "Search Engine Optimization",
      path: "/seo-web-services",
    },
    {
      title: "Digital Communication Services",
      path: "/digital-communication-services",
    },
    {
      title: "Performance Marketing",
      path: "/performance-marketing",
    },
  ];

  

  return (
    <div
      className={`w-full h-full py-7 px-6 z-[100]  md:px-10 xl:px-36 flex justify-between items-center `}
    >
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
        className="md:hidden hs-collapse-toggle flex justify-center items-center gap-x-2 font-bold rounded-full bg-[#FBFBFB]/10 p-2 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
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
      <div className="hidden w-full h-full items-center md:flex justify-end">
        <ul className="flex gap-10 items-center">
          <li>
            <Link
              href="/who-we-are"
              className="text-sm md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold"
            >
              Who We Are
            </Link>
          </li>
          <li
            onClick={() => setSubToggle(!subToggle)}
            className="relative flex text-sm md:text-[15px]  xl:text-[16px]  cursor-pointer font-bold"
          >
            <p className="flex text-sm md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold">
              Our Services
              <ArrowDown
                className={`ml-1 size-5 ${
                  subToggle ? "rotate-180" : ""
                } transition-all duration-200`}
              />
            </p>
            <ul
              className={`absolute flex flex-col top-[50px] -left-[50%]  gap-5 z-50 bg-white shadow-lg p-5 w-[200px] rounded-lg ${
                subToggle ? "block" : "hidden"
              } `}
            >
              {subLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-sm md:text-[15px]  xl:text-sm  cursor-pointer  hover:text-[#6F6F6F] "
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              href="/case-studies"
              className="text-sm md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold"
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-sm md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold"
            >
              Insights
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`absolute lg:hidden  w-screen h-screen z-[1000] transition-all duration-300 ease-in-out bg-black/85 ${
          toggle ? "left-0 top-0" : "left-[-120%] top-0"
        }`}
      >
        <div className="w-[calc(100%-50px)] h-full p-5 bg-white">
          <button
            onClick={() => setToggle(!toggle)}
            type=""
            className="lg:hidden hs-collapse-toggle flex justify-center items-center gap-x-2 mb-10 font-bold rounded-full bg-[#FBFBFB]/10 p-2    hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <Image src="/close.svg" alt="close" width={30} height={20} />
          </button>
          <ul className="flex flex-col gap-5 items-start">
            <li className="w-full">
              <Link
                onClick={() => setToggle(!toggle)}
                href="/who-we-are"
                className="text-lg md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold"
              >
                Who We Are
              </Link>
            </li>
            <li onClick={() => setSubToggle(!subToggle)} className="w-full ">
              <p className="text-lg md:text-[15px] flex justify-between w-full xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold">
                Our Services
                <Plus
                  className={`ml-1 size-5 ${
                    subToggle ? "rotate-45  " : ""
                  } transition-all duration-200`}
                />
              </p>
              <ul
                className={`flex flex-col gap-5 p-5 ${
                  subToggle ? " block " : "hidden"
                }  transition-all duration-200 ease-in-out`}
              >
                {subLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      onClick={() => setToggle(!toggle)}
                      href={link.path}
                      className="text-sm  cursor-pointer  hover:text-[#6F6F6F] font-bold"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="w-full">
              <Link
                onClick={() => setToggle(!toggle)}
                href="/case-studies"
                className="text-lg md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold"
              >
                Case Studies
              </Link>
            </li>
            <li className="w-full">
              <Link
                onClick={() => setToggle(!toggle)}
                href=""
                className="text-lg md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#6F6F6F] font-bold"
              >
                Insights
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
