"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaMale } from "react-icons/fa";
import { BsFillKeyboardFill } from "react-icons/bs";
import { GiFishingHook } from "react-icons/gi";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl front-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700  to-green-700">
              Hello, Im{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ryan Hurd",
                5000,
                "a Father",
                1500,
                "a Software Engineer",
                1500,
                "a Fisherman",
                1500,
                "an Amateur Chef",
                1500,
                "a Gamer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Software Developer
          </p> */}
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-700 via-blue-400 to-green-700 hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-700 via-blue-400 to-green-700 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/ryan_pfp.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
