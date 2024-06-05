"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const subLinks = [
    {
      title: "Branding and Printing",
      path: "/branding-and-printing",
    },
    {
      title: "Social Media ",
      path: "/social-media",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "Websites Development and SEO",
      path: "/websites",
    },
    {
      title: "Influencer Marketing",
      path: "/influencer-marketing",
    },
    {
      title: "Media Production and Motion Graphic",
      path: "/media-production-and-motion-graphic",
    },
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

  const date = new Date();
  const year = date.getFullYear();

  return (
    <section>
      <div className="bg-[#ff3301] text-white">
        <div className="w-full h-full px-4 py-8 sm:px-6 sm:py-14 lg:px-32 lg:py-24 flex flex-col md:flex-row justify-between items-center">
          {/* Text */}
          <div className="flex flex-1 flex-col gap-5">
            <h2 className="text-5xl font-bold">
              Discover How We Can Help Your Business Grow
            </h2>
            <p>
              Get in touch with our team of digital marketing experts to help
              you reach your business goals.
            </p>
          </div>
          <div className="flex-1 flex justify-start md:justify-end items-center w-full h-full">
            <p className="capitalize font-bold py-4 px-5 bg-[#037f36] text-white w-fit rounded-lg mt-6 cursor-pointer">
              <Link href="/contact-us">Get a proposal</Link>
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-[#1A1A1A] text-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-white ">
                <Link href="/" className="">
                  <Image
                    src="/partners/partner (4).png"
                    alt="Digirain Logo"
                    width={150}
                    height={300}
                  />
                </Link>
              </div>

              <p className=" max-w-md leading-relaxed text-[#fbcb13] text-xl md:text-2xl sm:max-w-full text-center md:text-center">
                &quot;Where Costumers Pour Like Rain&quot;
              </p>

              <ul className="mt-8 flex gap-6 justify-center md:gap-8">
                <li>
                  <a
                    href="https://www.facebook.com/Digirain.Advertising"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/digirain.advertising?fbclid=IwZXh0bgNhZW0CMTAAAR0GqgN7pwnV41Bl0p7u0XJsGVaof02jy2tBVCOOiaT-EEPdKY0ETyBeOzI_aem_AbFJYo4jC3cmcR1Btr2gbOdy_U5W0VoRHac5Pce_BfrHkBf7NCOsns3nVXDEUL02_hHGCm2JIMpmS3fnDXJJpHxd"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white/75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg text-white">
                  <Link
                    href="/who-we-are"
                    className="text-[#042dcc] transition hover:text-[#ec5396] font-bold"
                  >
                    Who We Are
                  </Link>
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/who-we-are#our-vision"
                      className="text-white transition hover:text-[#ec5396]"
                    >
                      Our Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/who-we-are#our-mision"
                      className="text-white transition hover:text-[#ec5396]"
                    >
                      Our Mision
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/#case-studies"
                      className="text-white transition hover:text-[#ec5396]"
                    >
                      Meet Our Team
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg text-[#fbcb13] font-bold">Our Services</p>

                <ul className="mt-8 space-y-4 text-sm">
                  {subLinks.map((link) => (
                    <li key={link.title}>
                      <a
                        className="text-white transition hover:text-[#ec5396]"
                        href={link.path}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg  text-white">
                  <Link
                    href="/contact-us"
                    className="text-[#037f36] font-bold transition hover:text-[#ec5396]"
                  >
                    Contact Us
                  </Link>
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="flex-1 text-white">john@doe.com</span>
                    </a>
                  </li>

                  <li>
                    <p className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-white">01225773231</span>
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-white">01099184241</span>
                    </p>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 flex-1 not-italic text-white">
                      Address: 45 Kambez, Nadi Al Saeed, Dokki ‏الجيزة‏، ‏محافظة
                      الجيزة‏، ‏مصر‏ 12311
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy;DIGIRAIN {year}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
