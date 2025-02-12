"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`w-full sm:w-fit rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const HeroSection = () => {
  const handleDownload = (filePath) => {
    const blob = new Blob([filePath], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ryan-hurd-resume.pdf";
    a.click();
  };

  const textValues = [
    "Ryan Hurd",
    "A Husband",
    "A Father",
    "A Software Engineer",
    "A Home Cook",
    "A Baker",
    "An Amateur Mixologist",
    "A Plex Server Admin",
    "A Gamer",
    "An Angler",
    "A Pickleball-er",
    "A Bowler",
    "A Bass Guitarist",
  ];

  const sequence = textValues.flatMap((text, index) => [
    text,
    index === 0 ? 5000 : 1250,
  ]);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 place-items-">
        <div className="col-span-6 text-left sm:text-left place-self-start mt-20">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl front-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700  to-green-700">
              Hello, I&apos;m!!
            </span>
            <br />
            <TypeAnimation sequence={sequence} speed={50} repeat={Infinity} />
          </h1>
          <div>
            <Button className="px-6 py-3 mr-4 bg-gradient-to-br from-orange-700 via-blue-400 to-green-700 hover:bg-slate-200 text-black">
              Not sure what this button will be for yet{/* Hire Me */}
            </Button>
            <Button
              className="px-1 py-1 bg-gradient-to-br from-orange-700 via-blue-400 to-green-700 hover:bg-slate-800 text-white mt-3"
              onClick={() => handleDownload("/documents/ryan-hurd-resume.pdf")}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={
                "https://rh7112.github.io/personal-portfolio/images/ryan-pfp.png"
              }
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
