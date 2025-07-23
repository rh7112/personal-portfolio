"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleDownload = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "ryan-hurd-resume.pdf";
    link.click();
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 place-items-">
        <div className="col-span-6 text-left sm:text-left place-self-start mt-20 ml-20">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl front-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700  to-green-700">
              Hello, I&apos;m:
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ryan Hurds",
                5000,
                "a Father",
                1250,
                "a Husband",
                1250,
                "a Software Engineer",
                1250,
                "a Retool Specialist",
                1250,
                "a Builder of Internal Tools",
                1250,
                "a Problem Solver",
                1250,
                "a Home Cook",
                1250,
                "an Angler",
                1250,
                "a Plex Server Enthusiast",
                1250,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-700 via-blue-400 to-green-700 hover:bg-slate-200 text-black"
              onClick={() =>
                window.open(
                  "mailto:rh25170@gmail.com?subject=Project%20Opportunity%20for%20Ryan%20Hurd&body=Hi%20Ryan,%0D%0A%0D%0AI%20came%20across%20your%20profile%20and%20was%20impressed%20with%20your%20skills%20and%20experience.%20I%20am%20reaching%20out%20to%20discuss%20a%20potential%20project%20opportunity%20that%20I%20think%20you%20would%20be%20a%20great%20fit%20for.%20Could%20you%20please%20let%20me%20know%20if%20you%20are%20available%20and%20interested%20in%20discussing%20further?%0D%0A%0D%0ABest%20regards,%20[Your%20Name]"
                )
              }
            >
              Hire Me
            </button>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-700 via-blue-400 to-green-700 hover:bg-slate-800 text-white  mt-3"
              onClick={() => handleDownload("/documents/ryan-hurd-resume.pdf")}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/ryan_pfp.png"}
              alt="Ryan Hurd's profile picture"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
