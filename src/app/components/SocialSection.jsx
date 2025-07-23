"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  TbBrandLeetcode,
  TbBrandGithub,
  TbBrandLinkedin,
} from "react-icons/tb";
import { SiIndeed, SiRetool } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const SocialSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        Social Links
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <div className="flex flex-row justify-center items-center gap-4">
          <a
            href="mailto:rh25170@gmail.com?subject=Hello%20from%20your%20website!&body=Hi%20Ryan,%20I%20came%20across%20your%20website%20and%20wanted%20to%20reach%20out."
            target="_blank"
            rel="noopener noreferrer"
            title="Send an Email"
          >
            <MdEmail size={30} color="#fff" />
          </a>
          <a
            href="https://github.com/rh7112"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <TbBrandGithub size={30} color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-hurd-b9bbab121/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <TbBrandLinkedin size={30} color="#fff" />
          </a>
          <a
            href="https://profile.indeed.com/p/ryanh-sv25zg9"
            target="_blank"
            rel="noopener noreferrer"
            title="Indeed Resume"
          >
            <SiIndeed size={30} color="#fff" />
          </a>
          <a
            href="https://leetcode.com/u/rh7112/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Profile"
          >
            <TbBrandLeetcode size={30} color="#fff" />
          </a>
          <a
            href="https://community.retool.com/u/rh25170/summary"
            target="_blank"
            rel="noopener noreferrer"
            title="Retool Forums Profile"
          >
            <SiRetool size={30} color="#fff" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialSection;
