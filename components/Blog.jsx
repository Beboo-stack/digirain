import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="w-full h-full ">
        <h2 className="text-center uppercase text-yellow font-bold text-base">
          Blog
        </h2>
        <h2 className="text-5xl font-bold text-center my-3">Recent Insights</h2>
      </div>
      <p className="text-center mx-auto w-[90%] lg:w-1/2">
        Welcome to our world! At our marketing agency, we don’t just focus on
        marketing, we’re passionate about sharing our knowledge with our
        visitors.
      </p>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* <!-- Card --> */}
          <a className="group relative block rounded-xl" href="#">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <Image
                width={46}
                height={46}
                className="size-full absolute top-0 start-0 object-cover"
                src={"/disney.svg"}
                alt="Image Description"
              />
            </div>

            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6">
                {/* <!-- Avatar --> */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="size-[46px] border-2 border-white rounded-full"
                      width={46}
                      height={46}
                      alt="Image Description"
                      src={"/profile.jpg"}
                    />
                  </div>
                  <div className="ms-2.5 sm:ms-4">
                    <h4 className="font-semibold text-white">Gloria</h4>
                    <p className="text-xs text-white">Jan 09, 2021</p>
                  </div>
                </div>
                {/* <!-- End Avatar --> */}
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                  Facebook is creating a news section in Watch to feature
                  breaking news
                </h3>
                <p className="mt-2 text-white/80">
                  Facebook launched the Watch platform in August
                </p>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a className="group relative block rounded-xl" href="#">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <Image
                width={46}
                height={46}
                className="size-full absolute top-0 start-0 object-contain"
                src={"/spark-1.svg"}
                alt="Image Description"
              />
            </div>

            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6">
                {/* <!-- Avatar --> */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      width={46}
                      height={46}
                      className="size-[46px] border-2 border-white rounded-full"
                      src={"/profile.jpg"}
                      alt="Image Description"
                    />
                  </div>
                  <div className="ms-2.5 sm:ms-4">
                    <h4 className="font-semibold text-white">Gloria</h4>
                    <p className="text-xs text-white">May 30, 2021</p>
                  </div>
                </div>
                {/* <!-- End Avatar --> */}
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                  What CFR (Conversations, Feedback, Recognition) really is
                  about
                </h3>
                <p className="mt-2 text-white/80">
                  For a lot of people these days, Measure What Matters.
                </p>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </div>
  );
};

export default Blog;
