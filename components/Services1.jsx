import Image from "next/image";
import React from "react";

const Services1 = () => {
  return (
    <section className=" text-black mt-12">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold sm:text-5xl text-white">
            Digital Roadblocks? No Problem
          </h2>

          <p className="mt-4 text-white">
            Transform your Digital Challenges into Opportunities for Success and
            Embrace the power of digital transformation with DIGIRAIN. We
            specialize in identifying and resolving your digital bottlenecks.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* First */}
          <div className="block rounded-xl bg-[#ec5396] border border-[#fff1dc] py-8 px-5 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <Image
              src="/code.svg"
              alt="Picture of the author"
              width={300}
              height={300}
            />
            <p className="mt-5 text-2xl font-bold text-white">
              Web design & Development
            </p>
          </div>
          {/* Second */}
          <div className="block rounded-xl bg-[#ec5396] border border-[#fff1dc]  py-8 px-5 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <Image
              src="/meeting.svg"
              alt="Picture of the author"
              width={300}
              height={300}
            />
            <p className="mt-5 text-2xl font-bold text-white">
              Performance marketing
            </p>
          </div>
          {/* Third */}
          <div className="block rounded-xl bg-[#ec5396] border border-[#fff1dc] py-8 px-5 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <Image
              src="/1.svg"
              alt="Picture of the author"
              width={300}
              height={300}
            />
            <p className="mt-5 text-2xl font-bold text-white">Branding</p>
          </div>
          {/* Fourth */}
          <div className=" rounded-xl bg-[#ec5396] border border-[#fff1dc] py-8 px-5 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <Image
              src="/3.svg"
              alt="Picture of the author"
              width={300}
              height={300}
            />
            <p className="mt-20 text-2xl font-bold text-white">
              Search engine optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
