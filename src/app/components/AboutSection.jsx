"use client";
import React, { useTransition, useState } from "react";
import NextImage from "next/image";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  FaDatabase,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGraduationCap,
  FaUserGraduate,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { IoLogoJavascript, IoIosDocument } from "react-icons/io";
import {
  SiDatadog,
  SiJira,
  SiNextui,
  SiRetool,
  Si4D,
  SiBraintree,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { BsRegex } from "react-icons/bs";
import { GrGraphQl } from "react-icons/gr";
import SkillCard from "./SkillCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { GiDiploma } from "react-icons/gi";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ExperienceCard
          title="Sweetwater Sound Inc."
          dateRange="Since May 2021"
          jobTitle="Software Engineer"
          description="In my time at Sweetwater I've spent time on the Production Support, MATH (Maintenance, Accounting, Tax, and Human Resource), Customer Experience, and Retool teams."
        />
        <ExperienceCard
          title="Zimmer Biomet"
          dateRange="Oct. 2020 - May 2021"
          jobTitle="Information Technology Intern"
        />
        <ExperienceCard
          title="United States Census Bureau"
          dateRange="Jan. 2020 - Oct. 2020"
          jobTitle="Post-Enumeration Surveyor"
        />
        <ExperienceCard
          title="Staples"
          dateRange="Jun. 2018 - May 2019"
          jobTitle="Technology Sales Associate"
        />
        <ExperienceCard
          title="Black's Concrete Construction"
          dateRange="Jun. 2016 - Feb. 2017"
          jobTitle="Concrete Former, Pourer, Laborer, Finisher"
        />
      </div>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid auto-rows-fr lg:grid-cols-3 sm:grid-cols-2 gap-2">
        {SkillCard(IoLogoJavascript, "Javascript", "Experienced")}
        {SkillCard(SiRetool, "Retool", "Experienced")}
        {SkillCard(FaDatabase, "SQL (MySQL, PostGreSQL)", "Experienced")}
        {SkillCard(Si4D, "Fourth Dimensional Programming (4D)", "Experienced")}
        {SkillCard(FaPython, "Python", "Experienced")}
        {SkillCard(FaGit, "Git (Github, Gitlab)", "Experienced")}
        {SkillCard(BsRegex, "Regex", "Experienced")}
        {SkillCard(IoIosDocument, "Documentation", "Experienced")}
        {SkillCard(IoLogoJavascript, "User-Interface Design", "Intermediate")}
        {SkillCard(IoLogoJavascript, "User-Experience Design", "Intermediate")}
        {SkillCard(TbBrandCpp, "C++", "Intermediate")}
        {SkillCard(FaC, "C", "Intermediate")}
        {SkillCard(SiJira, "Jira Query Language (JQL)", "Intermediate")}
        {SkillCard(SiDatadog, "Datadog", "Intermediate")}
        {SkillCard(FaReact, "React", "Beginner")}
        {SkillCard(FaNodeJs, "Node", "Beginner")}
        {SkillCard(GrGraphQl, "GraphQL", "Beginner")}
        {SkillCard(TbBrandNextjs, "NextJS", "Beginner")}
        {SkillCard(SiNextui, "NextUI", "Beginner")}
        {SkillCard(SiCsharp, "C#", "Beginner")}
        {SkillCard(SiDotnet, ".Net", "Beginner")}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <EducationCard
          degree="Bachelor of Science in Computer Science"
          institution="Purdue University - Fort Wayne"
          icon={<FaUserGraduate size={24} color="#fff" />}
        />
        <EducationCard
          degree="Associate of Science in Computer Science"
          institution="Ivy Tech Community College"
          icon={<FaGraduationCap size={24} color="#fff" />}
        />
        <EducationCard
          degree="Core 40 - Academic Honors Diploma"
          institution="Whitko High School"
          icon={<GiDiploma size={24} color="#fff" />}
        />
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <p className="bg-slate-800 rounded-lg shadow p-4 mb-4 flex items-center">
          Python - Certified Entry-Level Python Programmer
        </p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px04 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/personal-portfolio/images/projects/1.png"
          alt="ryan profile picture"
          width={500}
          height={500}
        />
        <Image
          src={"/images/projects/1.png"}
          alt="ryan profile picture (next image)"
          width={500}
          height={500}
        />
        <Image
          src={
            "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          }
          alt="ryan profile picture (next image123)"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            With a propencity for technology and a passion for solving complex
            problems, I am a Software Engineer. I have worked on many projects,
            between a few different teams. Believe communication and
            collaboration are key to a successful project.
          </p>
          <div className="flex flex-row justify-start mt-8 flex-wrap gap-3">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
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
