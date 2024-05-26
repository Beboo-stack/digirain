import Link from "next/link";
import React from "react";

const Navbar = () => {
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
    <div className="w-full h-full py-7 px-6  md:px-10 xl:px-36 flex justify-between items-center bg-">
      {/* Logo */}
      <div className="">
        <Link href="/">
          <h2 className="text-2xl md:text-3xl lg:text-4xl cursor-pointer text-gray-800 hover:text-[#6F6F6F] font-bold">
            DIGIRAIN
          </h2>
        </Link>
      </div>
      <button
        type="button"
        className="md:hidden hs-collapse-toggle flex justify-center items-center gap-x-2 size-16 font-bold rounded-full bg-[#FBFBFB]/10 p-1    hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
        data-hs-collapse="#navbar-collapse-with-animation"
        aria-controls="navbar-collapse-with-animation"
        aria-label="Toggle navigation"
      >
        <svg
          class="hs-collapse-open:hidden flex-shrink-0 size-4"
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
          class="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
    </div>
  );
};

export default Navbar;
