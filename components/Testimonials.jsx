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

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className=" px-5 mb-20 ">
      <div className="">
        <h2 className="text-center uppercase text-yellow font-bold text-base">
          TESTIMONIALS
        </h2>
        <h2 className="text-5xl font-bold text-center my-3">
          Read From Our Beloved Clients
        </h2>
      </div>
      <p className="w-[90%] text-center mx-auto mb-16">
        Explore our more than 500 client testimonials and experience the impact
        of digital marketing that drives revenue.
      </p>
      <Carousel
        plugins={[plugin.current]}
        className="w-full  max-w-xs md:max-w-3xl lg:max-w-[1300px] mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex h-[300px] rounded-2xl bg-[#FFF5D1] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
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

export default Testimonials;
