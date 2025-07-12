'use client';
import React, { useState } from 'react';
import SocailMedail from '../_components/socailMedai/page';

export default function Contact() {
  const [info, setInfo] = useState([
    {
      name: 'Email',
      icon: 'fa-regular fa-envelope',
      info: 'O4V9O@example.com',
    },
    {
      name: 'Phone',
      icon: 'fa-solid fa-phone',
      info: '01159635438',
    },
    {
      name: 'Location',
      icon: 'fa-solid fa-location-dot',
      info: 'Cairo, Egypt',
    },
  ]);
  return (
    <div className="relative min-h-screen  flex justify-center items-center">
      <div className="flex w-full rounded-2xl flex-col gap-12 justify-center items-center  py-5 px-2 ">
        <div className="text-center flex flex-col  ">
          <h1 className="text-4xl font-bold text-[#FF9D23] sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-white/50">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="info">
            <div className=" info flex flex-col gap-5">
              <div>
                <SocailMedail />
              </div>
              {info?.map((info, index) => (
                <div
                  key={index}
                  className="bg-[#9ec8b920] text-white/50 rounded-lg"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-[#FF9D23] rounded-full flex items-center justify-center">
                          <i
                            className={`${info.icon} text-white text-[18px]`}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {info.name}
                        </h3>
                        <p className="">{info.info}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form">
            <div className="rounded-lg bg-[#9ec8b920] text-white">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-[#FF9D23] mb-6">
                  Send us a Message
                </h2>
                <form className="flex flex-col gap-6">
                  {/* Name Fields */}
                  <div className="w-full">
                    <input
                      id="name"
                      name="Name"
                      type="text"
                      placeholder="Enter your last name"
                      required
                      className="w-full px-3 py-2 border  border-gray-500 rounded-md shadow-sm outline-none   focus:border-white placeholder-gray-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full px-3 py-2 border  border-gray-500 rounded-md shadow-sm outline-none   focus:border-white placeholder-gray-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      required
                      className="w-full px-3 py-2 border  border-gray-500 rounded-md shadow-sm outline-none   focus:border-white placeholder-gray-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#FF9D23] text-white py-2 px-4 rounded-md font-medium hover:bg-[#ff9c23bb] transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// </div>
