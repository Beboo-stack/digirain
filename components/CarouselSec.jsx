"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const CarouselSec = () => {
  const images = [
    {
      path: "/profile.jpg",
    },
    {
      path: "/profile.jpg",
    },
    {
      path: "/profile.jpg",
    },
    {
      path: "/profile.jpg",
    },
    {
      path: "/profile.jpg",
    },
    {
      path: "/profile.jpg",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full h-full grid justify-center items-center mb-20">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        className="max-w-xs md:max-w-3xl lg:max-w-[1300px] mx-auto"
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 ">
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex aspect-square items-center  justify-center p-6">
                    <Image
                      src={item.path}
                      alt="profile"
                      width={300}
                      height={300}
                      className="w-full rounded-2xl "
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSec;
