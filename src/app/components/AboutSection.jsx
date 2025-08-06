"use client";

import React, { useState, useEffect, useTransition } from "react";

import TabButton from "./TabButton";
import ExperienceCard from "./ExperienceCard";
import SkillCard from "./SkillCard";
import EducationCard from "./EducationCard";
import { FaDatabase, FaPython, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiRetool, Si4D } from "react-icons/si";
import { GiDiploma } from "react-icons/gi";

const zimmerBiomentAccordionItems = [
  {
    title: "Imaging Devices",
    description:
      "One of the key responsibilities in this role involved preparing newly delivered devices for deployment. This included installing company-approved operating images and software, configuring the machines, and storing them for future assignment. The process entailed unboxing devices, setting them up on designated racks, connecting them to the network, and utilizing the BIOS to configure settings. Once complete, devices were re-boxed and stored for later distribution.",
  },
  {
    title: "Computer Assignment",
    description:
      "Following the imaging process, we prioritized customer requests and assigned machines accordingly. This involved recording the serial number, attributing the device to the correct user, and preparing it for either shipment or delivery to technicians at various locations in Warsaw, Indiana.",
  },
  {
    title: "Computer Deliveries",
    description:
      "Assigned devices were delivered daily to Zimmer-Biomet buildings across town. I utilized a company vehicle to make these deliveries, typically around 3 p.m.",
  },
];

const concreteAccordionItems = [
  {
    title: "Formwork",
    description:
      "Establishing a solid foundation is crucial in concrete construction. This involves carefully placing rebar and other strengthening materials, followed by the installation of forms to contain the concrete. We utilized a variety of form types, including 2x4s, Dee forms, wall forms, and basement forms, to ensure that the finished product met the customer's specifications.",
  },
  {
    title: "Concrete Placement and Laboring",
    description:
      "Upon arrival of the concrete truck, our team sprang into action to ensure timely and efficient placement of the material. This involved wheelbarrowing concrete to the designated areas, achieving the optimal consistency and coverage. Additionally, this task included removing forms after the concrete had set, which sometimes occurred on the same day or after a few days. In some cases, this process also involved sealing or cutting the concrete to achieve the desired finish or to make relief cuts as needed.",
  },
  {
    title: "Finishing Touches",
    description:
      "The final stage of the process involved achieving the desired aesthetic and functional finish. This included applying a high-gloss finish to garage floors, creating precise brush lines on sidewalks, and ensuring level bases on walls. For stamped concrete projects, this entailed adding external colorants, applying the stamp pattern, and tamping it down to achieve the desired texture and design.",
  },
];

const AboutSection = () => {
  const [sweetwaterAccordionItems, setSweetwaterAccordionItems] = useState([]);
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
        setSweetwaterAccordionItems(data);
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
                  title="Concrete Construction"
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
