"use client";
import { ArrowDown, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  // const [issticky, setIsSticky] = useState(false);

  const [toggle, setToggle] = useState(false);

  const [subToggle, setSubToggle] = useState(false);

  // const links = [
  //   {
  //     path: "/who-we-are",
  //     name: "Who We Are",
  //   },
  //   {
  //     path: "",
  //     name: "Our Services",
  //   },
  //   {
  //     path: "/case-studies",
  //     name: "Case Studies",
  //   },
  //   {
  //     path: "/_blank",
  //     name: "Download Portfolio",
  //   },
  // ];

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

  const subLinks2 = [
    {
      title: "Our Vision",
      path: "/who-we-are#our-vision",
    },
    {
      title: "Our Mision",
      path: "/who-we-are#our-mision",
    },
  ];

  return (
    <div
      className={`w-full h-full py-7 px-6 z-[100]  md:px-10 xl:px-36 flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="">
        <Link href="/">
          <h2 className="text-2xl md:text-3xl lg:text-4xl cursor-pointer text-white hover:text-[#ec5695] font-bold">
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
      <div className="hidden w-full h-full items-center tablet:flex justify-end">
        <ul className="flex tablet:flex tablet:gap-5 lg:gap-10 items-center ">
          <div className="relative group">  
            <li className="">
              <Link
                href="/who-we-are"
                className="text-sm md:text-[15px] text-white  xl:text-[16px]  cursor-pointer  hover:text-[#ec5695] font-bold"
              >
                Who We Are
              </Link>
              <ul
                className={`absolute transition-all  invisible group-hover:visible flex  -left-[50%] top-[50px]  duration-700 ease-in-out flex-col submenu gap-5 z-50 bg-[#11b] shadow-lg p-5 w-[200px] rounded-lg `}
              >
                {subLinks2.map((link) => (
                  <li
                    key={link.title}
                    className="text-sm md:text-[15px] text-white  xl:text-[16px]  cursor-pointer hover:text-[#ec5695] font-bold"
                  >
                    <Link href={link.path}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </div>
          <li className=" flex text-sm md:text-[15px] text-white group  xl:text-[16px] relative cursor-pointer font-bold trasnsition-all duration-300 ease-in-out">
            <p className="flex text-sm md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#ec5695] font-bold">
              Our Services
            </p>
            <ul
              className={`absolute transition-all flex top-[50px] -left-[50%] duration-300 ease-in-out flex-col   submenu gap-5 z-50 bg-[#11b] shadow-lg p-5 w-[200px] rounded-lg invisible group-hover:visible `}
            >
              {subLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm md:text-[15px] text-white w-full  xl:text-sm  cursor-pointer  hover:text-[#ec5695] "
                >
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              href="/industries"
              className="text-sm md:text-[15px] text-white  xl:text-[16px]  cursor-pointer  hover:text-[#ec5695] font-bold"
            >
              Industries
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-sm md:text-[15px] text-white  xl:text-[16px]  cursor-pointer  hover:text-[#ec5695] font-bold"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/company profile.pdf"
              target="_blank"
              className="text-sm md:text-[15px] text-[#fff1dc]  xl:text-[16px]  cursor-pointer  hover:text-[#ec5695] font-bold bg-[#037f36] p-3 rounded-md"
            >
              Download Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`absolute lg:hidden  w-screen h-screen z-[1000] transition-all duration-300 ease-in-out bg-black/85 ${
          toggle ? "left-0 top-0" : "left-[-120%] top-0"
        }`}
      >
        <div className="w-[calc(100%-50px)] h-full p-5 bg-[#111b58]">
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
                className="text-lg md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#ec5695] font-bold"
              >
                Who We Are
              </Link>
            </li>
            <li onClick={() => setSubToggle(!subToggle)} className="w-full ">
              <p className="text-lg md:text-[15px] flex justify-between w-full xl:text-[16px]  cursor-pointer  hover:text-[#ec5695] font-bold">
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
                      className="text-sm  cursor-pointer  hover:text-[#ec5695] font-bold"
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
                href="/industries"
                className="text-lg md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#ec5695] font-bold"
              >
                Industries
              </Link>
            </li>
            <li className="w-full">
              <Link
                onClick={() => setToggle(!toggle)}
                href="/contact-us"
                className="text-lg md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#ec5695] font-bold"
              >
                Contact Us
              </Link>
            </li>
            <li className="w-full p-6">
              <Link
                onClick={() => setToggle(!toggle)}
                href="/company profile.pdf"
                target="_blank"
                className="text-lg md:text-[15px]  xl:text-[16px]  cursor-pointer  hover:text-[#ec5395] font-bold bg-[#037f36] text-[#fff1dc] p-3 rounded-md"
              >
                Download Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
