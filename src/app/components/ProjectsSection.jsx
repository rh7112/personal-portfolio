"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { PROJECTS_DATA } from "./DataFiles/ProjectsData";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.tag.includes(tag)
  );

  const tags = [
    "All",
    "Accounting",
    "Marketing",
    "Merchandising",
    "Guest Services",
    "Gear Exchange",
    "Information Technology",
    "Music Store",
    "Javascript",
    "4D",
    "React",
    "Python",
    "Node",
    "NextJS",
    "C#",
    ".Net",
    "HTML5",
  ].map((tag) => ({
    name: tag,
    department: ![
      "Javascript",
      "4D",
      "React",
      "Python",
      "Node",
      "NextJS",
      "C#",
      ".Net",
      "HTML5",
    ].includes(tag),
  }));

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        {tags.map((tag) => (
          <ProjectTag
            key={tag.name}
            onClick={() => handleTagChange(tag.name)}
            name={tag.name}
            isSelected={tag.name === tag}
            department={tag.department}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            url={project.url}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
