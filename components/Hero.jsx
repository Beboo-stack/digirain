"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

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

  const images = [
    {
      title: " Dreamy Realists",
      link: "/industries",
      path: "/meeting.svg",
    },
    {
      title: "Dreamy Realists",
      link: "/performance-marketing",
      path: "/1.svg",
    },
    {
      title: "Dreamy Realists",
      link: "/performance-marketing",
      path: "/2.svg",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-screen"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((item) => (
          <CarouselItem key={item}>
            <div className="">
              <CardContent className="flex w-full h-screen items-center justify-center p-0 relative">
                <Image
                  src={item.path}
                  alt="profile"
                  className="w-full h-full object-fill"
                  width={500}
                  height={500}
                />
                <div className="absolute top-0 left-0 w-full h-full ">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold text-white">
                      {item.title}
                    </h1>
                    <Link href={item.link} className="text-white">
                      Link{" "}
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
