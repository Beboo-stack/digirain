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
    message: z.string().min(10),
    companyUrl: z.string().url().optional(),
    companyName: z.string().nonempty().min(3).optional(),
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
        from_name: formData.name,
        to_name: "johnathan",
        message: formData.message,
        companyUrl: formData.companyUrl,
        companyName: formData.companyName,
        phone: formData.phone,
        email: formData.email,
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
    }
  };

  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  0151 475 4450{" "}
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
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
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm text-black bg-white "
                    placeholder="Name"
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
                        placeholder="Company Name"
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
                        placeholder="Company Url"
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
                    placeholder="Message"
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
