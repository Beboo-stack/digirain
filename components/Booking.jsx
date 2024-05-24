import React from "react";

const Booking = () => {
  return (
    <section className="bg-[#FFCE26] text-black mb-20">
      <div className="w-full h-full px-4 py-8 sm:px-6 sm:py-14 lg:px-32 lg:py-20 flex flex-col md:flex-row justify-between items-center">
        {/* Text */}
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="text-5xl font-bold">
            Unlock New Horizons with our Solutions
          </h2>
          <p>
            Ready to elevate your experience? Embrace the extraordinary with
            Dottopia. Dive in now and let’s create something remarkable
            together!
          </p>
        </div>
        <div className="flex-1 flex justify-start md:justify-end items-center w-full h-full">
          <p className=" font-bold py-4 px-5 bg-white w-fit rounded-lg mt-6">
            Book a Meeting
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
