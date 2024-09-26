"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaDatabase, FaPython, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { IoLogoJavascript, IoIosDocument } from "react-icons/io";
import {
  SiDatadog,
  SiJira,
  SiNextui,
  SiRetool,
  Si4D,
  SiBraintree,
} from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { BsRegex } from "react-icons/bs";
import { GrGraphQl } from "react-icons/gr";
import SkillBlock from "./SkillBlock";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid auto-rows-fr lg:grid-cols-3 sm:grid-cols-2 gap-1">
        {SkillBlock(IoLogoJavascript, "Javascript", "Experienced")}
        {SkillBlock(SiRetool, "Retool", "Experienced")}
        {SkillBlock(FaDatabase, "SQL (MySQL, PostGreSQL)", "Experienced")}
        {SkillBlock(Si4D, "Fourth Dimensional Programming (4D)", "Experienced")}
        {SkillBlock(FaPython, "Python", "Experienced")}
        {SkillBlock(FaGit, "Git (Github, Gitlab)", "Experienced")}
        {SkillBlock(BsRegex, "Regex", "Experienced")}
        {SkillBlock(IoIosDocument, "Documentation", "Experienced")}
        {SkillBlock(IoLogoJavascript, "User-Interface Design", "Intermediate")}
        {SkillBlock(IoLogoJavascript, "User-Experience Design", "Intermediate")}
        {SkillBlock(TbBrandCpp, "C++", "Intermediate")}
        {SkillBlock(FaC, "C", "Intermediate")}
        {SkillBlock(SiJira, "Jira Query Language (JQL)", "Intermediate")}
        {SkillBlock(SiDatadog, "Datadog", "Intermediate")}
        {SkillBlock(FaReact, "React", "Beginner")}
        {SkillBlock(FaNodeJs, "Node", "Beginner")}
        {SkillBlock(GrGraphQl, "GraphQL", "Beginner")}
        {SkillBlock(TbBrandNextjs, "NextJS", "Beginner")}
        {SkillBlock(SiNextui, "NextUI", "Beginner")}
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Developer - Sweetwater Sound Inc.</li>
        <li>Information Technology Intern - Zimmer Biomet</li>
        <li>Post-Enumeration Survey Enumerator - Census Bureau</li>
        <li>Technology Sales Associate - Staples</li>
        <li>
          Concrete Former, Pourer, Laborer, Finisher - Black's Concrete
          Construction
        </li>
      </ul>
    ),
  },
  {
    title: "Projects",
    id: "projects",
    content: (
      <ul className="list-disc pl-2">
        <li>Sweetwater Turkey Handout Application (ReTurkey)</li>
        <li>Gear Exchange - BrainTree by Paypal Implementation</li>
        <li>
          The Tax Resource's (TTR) Tax Exemption Certification Management System
          (ECMS)
        </li>
        <li>Consumer Audio</li>
        <li>In-House Credit Freezing/Thawing</li>
        <li>Price Management Platform</li>
        <li>Personalized Tile Promotions</li>
        <li>Search Miner</li>
        <li>DementiaTrack</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Associate of Science in Computer Science - Ivy Tech Community College
        </li>
        <li>Bachelor of Science in Computer Science - Purdue Fort Wayne</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Python - Certified Entry-Level Python Programmer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px04 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/ryan_pfp.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem Ipsum somethign sometihng something
          </p>
          <div className="flex flex-row justify-start mt-8 flex-wrap gap-3">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("projects")}
              active={tab === "projects"}
            >
              {" "}
              Projects{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
