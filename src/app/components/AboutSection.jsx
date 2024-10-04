"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TAB_DATA } from "./DataFiles/AboutSectionData";

const tabs = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
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
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="https://rh7112.github.io/personal-portfolio/images/ryan-pic.png"
          alt="ryan hurd's profile picture"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            With a propensity for technology and a passion for solving complex
            problems, I am a Software Engineer. I have worked on many projects,
            between a few different teams. Believe communication and
            collaboration are key to a successful project.
          </p>
          <div className="flex flex-row justify-start mt-8 flex-wrap gap-3">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                selectTab={() => handleTabChange(tab.id)}
                active={tab.id === tab}
              >
                {tab.label}
              </TabButton>
            ))}
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
