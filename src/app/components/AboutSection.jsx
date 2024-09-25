"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Retool</li>
        <li>JavaScript</li>
        <li>Fourth Dimensional Programming (4D)</li>
        <li>SQL (PostgreSQL, MySQL, )</li>
        <li>JQL</li>
        <li>Git (Github and Gitlab)</li>
        <li>Python</li>
        <li>Regex</li>
        <li>C++</li>
        <li>C</li>
        <li>React</li>
        <li>Node</li>
        <li>Next.js</li>
        <li>Linux</li>
        <li>Windows</li>
        <li>Mac</li>
        <li>GraphQL</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
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
      <ul>
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
      <ul>
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
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem Ipsum somethign sometihng something
          </p>
          <div className="flex flex-row mt-8">
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
