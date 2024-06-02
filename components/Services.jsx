import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden px-5 mt-48">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-lg text-yellow font-bold">SERVICES</h1>
        <h2 className="text-5xl font-bold">
          Boost your Website Traffic With SEO Web Services
        </h2>
      </div>
      <div className="w-full h-full lg:max-w-7xl mx-auto flex flex-col  justify-center items-center gap-32 md:gap-12 mt-20">
        {/* <---First---> */}
        <div className="w-full h-[500px] flex flex-col-reverse md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col h-full w-full justify-center">
            <h1 className="text-xl font-bold mb-3">Technical SEO</h1>
            <p>
              Technical SEO is the process for optimizing a website search
              engine to improve website speed and ensures that search engine
              crawlers can easily navigate and index the content on your
              website. in order to guarantee that fresh and relevant content is
              promptly included in search results
            </p>
          </div>
          <div className="w-full h-full flex justify-end items-end">
            <Image
              src="/ilustration/code.svg"
              alt="technical-seo"
              className="w-full h-full "
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* <---Second---> */}
        <div className="w-full h-[700px] flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-8">
          <div className="flex flex-col h-full w-full justify-center">
            <h1 className="text-xl font-bold mb-3">Technical SEO</h1>
            <p>
              Technical SEO is the process for optimizing a website search
              engine to improve website speed and ensures that search engine
              crawlers can easily navigate and index the content on your
              website. in order to guarantee that fresh and relevant content is
              promptly included in search results
            </p>
          </div>
          <div className="w-full h-full flex justify-center items-end">
            <Image
              src="/seo.png"
              alt="technical-seo"
              className="w-full h-full object-cover object-top"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* <---Third---> */}
        <div className="w-full h-[500px] flex flex-col-reverse md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col h-full w-full justify-center">
            <h1 className="text-xl font-bold mb-3">Technical SEO</h1>
            <p>
              Technical SEO is the process for optimizing a website search
              engine to improve website speed and ensures that search engine
              crawlers can easily navigate and index the content on your
              website. in order to guarantee that fresh and relevant content is
              promptly included in search results
            </p>
          </div>
          <div className="w-full h-full flex justify-end items-end">
            <Image
              src="/ilustration/code.svg"
              alt="technical-seo"
              className="w-full h-full "
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* <---Fourth---> */}
        <div className="w-full h-[500px] flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-8">
          <div className="flex flex-col h-full w-full justify-center">
            <h1 className="text-xl font-bold mb-3">Technical SEO</h1>
            <p>
              Technical SEO is the process for optimizing a website search
              engine to improve website speed and ensures that search engine
              crawlers can easily navigate and index the content on your
              website. in order to guarantee that fresh and relevant content is
              promptly included in search results
            </p>
          </div>
          <div className="w-full h-full flex justify-end items-end">
            <Image
              src="/ilustration/code.svg"
              alt="technical-seo"
              className="w-full h-full "
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* <---Fifth---> */}
        <div className="w-full h-[700px] flex flex-col-reverse md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col h-full w-full justify-center">
            <h1 className="text-xl font-bold mb-3">Technical SEO</h1>
            <p>
              Technical SEO is the process for optimizing a website search
              engine to improve website speed and ensures that search engine
              crawlers can easily navigate and index the content on your
              website. in order to guarantee that fresh and relevant content is
              promptly included in search results
            </p>
          </div>
          <div className="w-full h-full flex justify-end items-end">
            <Image
              src="/seo.png"
              alt="technical-seo"
              className="w-full h-full object-cover object-top"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
