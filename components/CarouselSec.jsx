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
      <div className="">
        <h2 className="text-center uppercase text-yellow font-bold text-base">
          Case Studies
        </h2>
        <h2 className="text-5xl font-bold text-center my-3">
          Read Some Of Our Successful Cases
        </h2>
      </div>
      <p className="w-3/4 text-center mx-auto mb-16">
        Get ready to be blown away by our team’s ability to turn businesses
        around 360 degrees! We have a collection of web design, SEO, and social
        media case studies that will leave you speechless.
      </p>
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
