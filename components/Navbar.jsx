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
      {/* Menu */}
      <div className="hidden w-full h-full items-center md:flex justify-end">
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
