"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const isMobile = useMediaQuery("(max-width: 1024px)");

  const images = [
    {
      className: "w-full h-full object-cover",
      textStyle: "",
      title: "",
      link: "/industries",
      target: "",
      mobilePath: "/Banners/2 SVG.svg",
      screenPath: "/Banners/1 SVG.svg",
    },
    {
      className: "w-full h-full object-cover",
      textStyle:
        "text-xl md:text-3xl font-bold text-[#ffce26] w-[70%] md:w-[30%] mx-auto text-center py-2 px-0 border border-white rounded-xl",
      title: "Get In Touch With Us",
      link: "/contact-us",
      target: "",
      mobilePath: "/Banners/contact us 2.svg",
      screenPath: "/Banners/contact us SVG.svg",
    },
    {
      className: "w-full h-full object-cover",
      textStyle:
        "text-xl md:text-3xl font-bold text-[#ffce26] w-[70%] md:w-[30%] mx-auto text-center py-2 px-0 border border-white rounded-xl",
      title: "Download Our Company Profile",
      link: "/company profile.pdf",
      target: "_blank",
      mobilePath: "/Banners/portfolio 2.svg",
      screenPath: "/Banners/portfolio SVG.svg",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-screen bg-[#111b58]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((item) => (
          <CarouselItem key={item}>
            <div className="">
              <CardContent className="flex w-full h-screen items-center justify-center p-0 relative">
                <Image
                  src={isMobile ? item.mobilePath : item.screenPath}
                  alt="profile"
                  className={item.className}
                  width={500}
                  height={500}
                />
                <div className="absolute  bottom-[-35%] left-0 w-full h-full ">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <Link
                      href={item.link}
                      target={item.target}
                      className={item.textStyle}
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Hero;
