"use client";

import React, { useState, useEffect, useTransition } from "react";

import TabButton from "./TabButton";
import ExperienceCard from "./ExperienceCard";
import SkillCard from "./SkillCard";
import EducationCard from "./EducationCard";
import { FaDatabase, FaPython, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiRetool, Si4D } from "react-icons/si";
import { GiDiploma } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io";
import { BsRegex } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { FaC, FaReact } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiDatadog } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";


const TAB_DATA = [
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

        {SkillCard(TbBrandCSharp, "C#", "Beginner")}

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
          Python - Certified Entry - Level Python Programmer
        </p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [sweetwaterAccordionItems, setSweetwaterAccordionItems] = useState([]);
  const [zimmerBiomentAccordionItems, setZimmerBiomentAccordionItems] =
    useState([]);
  const [concreteAccordionItems, setConcreteAccordionItems] = useState([]);
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/about");
        const data = await res.json();
        const sweetwaterItems = data.filter((item) => item.company_id == 5);
        const zimmerBiometItems = data.filter((item) => item.company_id == 4);
        const concreteItems = data.filter((item) => item.company_id == 1);
        setSweetwaterAccordionItems(sweetwaterItems);
        setZimmerBiomentAccordionItems(zimmerBiometItems);
        setConcreteAccordionItems(concreteItems);
        console.log("sweetwaterAccordionItems: ", data);
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-1 gap-8 py-8 px04 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4"> About Me </h2>

          <p className="text-base lg:text-lg">
            I’m a father and husband.Family is the foundation of everything I
            do, and it’s what drives me to solve problems with care, intention,
            and integrity— both in life and in code.
            <br />
            <br />
            Professionally, I’m a software engineer with 4 + years of experience
            building internal tools and business applications that make work
            easier, faster, and more reliable.I specialize in full - stack
            development with JavaScript, Python, SQL, and Retool, and I’ve
            delivered high - impact solutions— from a price management platform
            that boosted revenue by $4M, to system integrations that gave back
            entire workdays to internal teams.
            <br />
            <br />
            I thrive when bridging the gap between non - technical stakeholders
            and clean, scalable code.I’ve worked in Agile, Scrum, Kanban, and
            Waterfall environments, and I’m comfortable wearing multiple hats—
            from frontend to backend, deployment to support.
            <br />
            <br />
            When I’m not coding, you’ll probably find me cooking at home,
            casting a line in a bass tournament or frozen lake, or tweaking my
            Plex server just for fun.I value clarity, consistency, and building
            tools that people actually enjoy using.
          </p>

          <div className="flex flex-row justify-start mt-8 flex-wrap gap-3">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8">
            {tab === "experience" && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                <ExperienceCard
                  title="Sweetwater Sound Inc."
                  startDate="05/17/2021"
                  endDate=""
                  jobTitle="Software Engineer"
                  description="In my time at Sweetwater I've spent time on the Production Support team, MATH Pod (Maintenance, Accounting, Tax, and Human Resource), Customer Experience Pod, and Retool Pod. I've gained a breadth of software engineering knowledge throughout my tenure at Sweetwater. See the sections below for more details on each team!"
                  accordionItems={sweetwaterAccordionItems}
                />
                <ExperienceCard
                  title="Zimmer Biomet"
                  startDate="10/20/2020"
                  endDate="05/17/2021"
                  jobTitle="IT Technician"
                  description="During my time at Zimmer Biomet, I helped prepare and deploy imaging devices across the organization. I managed imaging workflows, device assignment, and on-site delivery."
                  accordionItems={zimmerBiomentAccordionItems}
                />

                <ExperienceCard
                  title="United States Census Bureau"
                  startDate="01/01/2020"
                  endDate="05/17/2021"
                  jobTitle="Post-Enumeration Surveyor"
                  accordionItems={null}
                />

                <ExperienceCard
                  title="Staples"
                  startDate="06/01/2018"
                  endDate="05/01/2019"
                  jobTitle="Technology Sales Associate"
                  accordionItems={null}
                />

                <ExperienceCard
                  title="Black's Concrete Construction"
                  startDate="06/01/2016"
                  endDate="02/01/2017"
                  jobTitle="Laborer"
                  description="Worked in a variety of roles for residential concrete projects, assisting with formwork, concrete placement, and finishing tasks."
                  accordionItems={concreteAccordionItems}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
