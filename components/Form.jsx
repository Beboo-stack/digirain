"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    companyUrl: "",
    companyName: "",
    email: "",
  });

  const schema = z.object({
    name: z.string().nonempty().min(3),
    phone: z.string().min(11),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters" }),
    // companyUrl: z.string().url().optional(),
    // companyName: z.string().min(3).optional(),
    email: z.string().email(),
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const validatedData = schema.parse(formData);

      const submitButton = document.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      const seviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      const templateParams = {
        to_name: "johnathan",
        From_Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        message: formData.message,
        Company_Url: formData.companyUrl,
        Company_Name: formData.companyName,
      };

      if (!formData.name || !formData.phone) return;

      const response = await emailjs.send(
        seviceId,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          companyUrl: "",
          message: "",
        });
        router.push("/successfull");
      } else {
        console.log(err);
        submitButton.disabled = false;
        submitButton.textContent = "Send Enquiry";
      }
      submitButton.textContent = "Send Enquiry";
      submitButton.disabled = false;
    } catch (error) {
      const submitButton = document.querySelector('button[type="submit"]');
      console.error("Form validation failed:", error.errors);
      submitButton.disabled = false;
      submitButton.textContent = "Send Enquiry";
      const message = error.errors[0].message;
      alert(message);
    }
  };

  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <h2 className="text-4xl font-bold leading-snug text-white capitalize">
                <span className="text-[#037f36]">Welcome to digirain</span>{" "}
                <br /> Where Gen Z will make storms <br /> our{" "}
                <span className="text-[#ec5396]">
                  {" "}
                  professional, young, and creative
                </span>{" "}
                team
              </h2>
              <div className="mt-4 w-full flex flex-col">
                <h2 className="text-2xl font-bold leading-snug text-[#fbcb00] capitalize text-center">
                  Contact Us
                </h2>
                <div className="w-[60%] mx-auto md:w-full flex flex-col justify-center items-center text-3xl">
                  <p>01225773231 - 01208767624</p>
                  <p>01208767624 - 01099184241</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" onSubmit={handleSubmit} className="space-y-4">
                <div className="">
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    name="name"
                    minLength={3}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm text-black bg-white "
                    placeholder="Full Name"
                    type="text"
                    id="name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm text-black bg-white"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      name="phone"
                      minLength={11}
                      value={formData.phone}
                      onChange={handleChange}
                      title="000-000-0000"
                      className="w-full rounded-lg border-gray-200 p-3 text-sm text-black  bg-white"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                  <div>
                    <label className="" htmlFor="company">
                      <input
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        title="Company Name"
                        type="text"
                        placeholder="Company Name   (Optional)"
                        className="text-black w-full p-3 rounded-lg border-gray-500 bg-white"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="website">
                      <input
                        name="companyUrl"
                        value={formData.companyUrl}
                        onChange={handleChange}
                        title="Company Url"
                        type="url"
                        placeholder="Company Url   (Optional)"
                        className="text-black w-full p-3 rounded-lg border-gray-500 bg-white"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm text-black bg-white"
                    placeholder="Tell us more about your project.
                    "
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-[#037f36] px-5 py-3 font-medium text-white sm:w-auto disabled:cursor-not-allowed disabled:bg-gray-400 "
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
