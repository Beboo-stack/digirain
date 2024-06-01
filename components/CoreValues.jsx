import Image from "next/image";
import React from "react";

const CoreValues = () => {
  const CoreValues = [
    {
      id: 1,
      title: "Work Smart Play Hard",
      description:
        "Always strive for efficient productivity. Then, enjoy parties and fun!",
      svg: "/1.svg",
    },
    {
      id: 2,
      title: "Make it Happen",
      description:
        "Success demands dedication and time management to achieve our goals.",
      svg: "/meeting.svg",
    },
    {
      id: 3,
      title: "Make it Happen",
      description:
        "Success demands dedication and time management to achieve our goals.",
      svg: "/3.svg",
    },
    {
      id: 4,
      title: "Make your customer happy",
      description:
        "Customers are valued partners in achieving remarkable success, which brings us joy.",
      svg: "/meeting.svg",
    },
    {
      id: 4,
      title: "Think Like an Owner",
      description:
        "Customers are valued partners in achieving remarkable success, which brings us joy.",
      svg: "/1.svg",
    },
  ];

  return (
    <section className=" text-white mt-12">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl text-center mb-24">
          <div className="">
            <h2 className="text-center text-white font-bold">CORE VALUES</h2>
            <h2 className="text-3xl font-bold sm:text-5xl">
              What makes us different
            </h2>
          </div>

          <p className="mt-4 w-3/4 mx-auto">
            Our values shape the way we work with our clients, delivering
            outstanding user experience supported by cutting-edge technologies
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CoreValues.map((item) => (
            <div
              className=" flex rounded-xl  space-x-3 bg-[#ec5396]  py-5 px-3 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              key={item.id}
            >
              <div className="w-full h-[200px]  rounded-xl flex-1 flex justify-center items-center">
                <Image
                  src={item.svg}
                  className="w-full"
                  alt={item.title}
                  width={50}
                  height={50}
                />
              </div>

              <div className="w-full h-ful1 flex-1 flex flex-col justify-center items-start">
                <h2 className="mt-4 text-base font-bold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
