"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Sweetwater Turkey Handout Application (ReTurkey)",
    description:
      "Developed a Retool application for Sweetwater's Guest Services team to efficiently distribute turkeys (and gift cards) to employees during Thanksgiving. This streamlined process improved employee satisfaction and reduced administrative tasks.",
    image: "/images/projects/1.png",
    url: null,
    gitUrl: null,
    tag: ["All", "Retool", "Javascript", "Guest Services"],
  },
  {
    id: 2,
    title: "Gear Exchange - BrainTree by Paypal Implementation",
    description:
      "Integrated BrainTree payment processing into Gear Exchange, enabling secure and seamless transactions. This implementation enhanced the overall user experience and increased sales conversions.",
    image: "/images/projects/2.png",
    url: "https://www.sweetwater.com/used",
    gitUrl: null,
    tag: ["All", "4D", "BrainTree", "Gear Exchange"],
  },
  {
    id: 3,
    title: "TTR's Tax Exemption Certification Management System (ECMS)",
    description:
      "Designed and developed the Tax Exemption Certification Management System to automate tax exemption data intake from schools, churches, and other organizations. This solution saved the tax team approximately two people's worth of hours per week.",
    image: "images/projects/3.png",
    url: "https://ttrecms.com/about",
    gitUrl: null,
    tag: ["All", "4D", "Accounting", "Python", "Sales"],
  },
  {
    id: 4,
    title: "Consumer Audio",
    description:
      "Reworked the round-robin system for assigning customers to sales engineers, routing consumer audio inquiries to a dedicated team. This optimization reduced the workload on specialized sales engineers and increased Sweetwater's throughput.",
    image: "images/projects/4.png",
    url: "https://www.sweetwater.com/shop/home-audio-and-electronics/",
    gitUrl: null,
    tag: ["All", "4D", "Sales"],
  },
  {
    id: 5,
    title: "In-House Credit Freezing/Thawing",
    description:
      "Modified the underlying logic to 'freeze' credits on customer accounts, complying with Indiana's updated laws. This change enabled the accounting team to efficiently manage credits and improve financial accuracy.",
    image: "images/projects/5.png",
    url: null,
    gitUrl: null,
    tag: ["All", "4D", "Accounting"],
  },
  {
    id: 6,
    title: "Price Management Platform",
    description:
      "Developed the Price Management Platform to help Merchandising determine optimal competitor pricing strategies. This tool analyzes statistics to identify 'winning prices' and inform pricing decisions.",
    image: "/images/projects/6.png",
    url: null,
    gitUrl: null,
    tag: ["All", "Retool", "Javascript", "Merchandising"],
  },
  {
    id: 7,
    title: "Personalized Tile Promotions",
    description:
      "Created personalized tile promotions to enhance user recommendations on Sweetwater.com. These promotions leverage browsing history to improve the user experience and increase engagement.",
    image: "/images/projects/7.png",
    url: null,
    gitUrl: null,
    tag: ["All", "4D", "Marketing"],
  },
  {
    id: 8,
    title: "Search Miner",
    description:
      "Developed the Search Miner tool to help a select group of users analyze Sweetwater.com search results. This tool improves website health, SEO, and various other aspects of the online presence.",
    image: "/images/projects/8.png",
    url: null,
    gitUrl: null,
    tag: ["All", "Retool", "Javascript", "Marketing"],
  },
  {
    id: 9,
    title: "DementiaTrack",
    description:
      "My senior capstone project, DementiaTrack, aimed to diagnose patients using sensor data from activities like sleep, daily activity, movement, and bathroom activities. This research project explored the potential of sensor-based diagnosis.",
    image: "/images/projects/9.png",
    url: null,
    gitUrl: "https://github.com/Memotexe/DementiaTrack",
    tag: ["All", "React", "Python", "Node"],
  },
  {
    id: 10,
    title: "Personal Portfolio",
    description:
      "Built this portfolio to expand my knowledge of technologies like NextJS, React, and Node. This project showcases my skills and experience in web development and technology stacks.",
    image: "images/projects/10.png",
    url: "https://ryan.hurd.cc",
    gitUrl: "https://github.com/rh7112/personal-portfolio",
    tag: ["All", "NextJS", "Node"],
  },
  {
    id: 11,
    title: "Mentor Managing Application",
    description:
      "This was an 'Orbital' class at Sweetwater, we conducted weekly mob coding sessions to build an application that enables mentees to select mentors for a set period. This process aimed to facilitate learning and skill acquisition in areas that might not have been explored otherwise.",
    image: "/images/projects/11.png",
    url: null,
    gitUrl: null,
    tag: ["All", "C#", ".Net", "Information Technology"],
  },
  {
    id: 12,
    title: "Website Development - Final Project",
    description:
      "My final project for website development in Spring 2018 was a website for Black's Concrete Construction, a former employer. Built using HTML5 and CSS3, it was a functional site that showcased the company's services and projects, despite being a basic design.",
    image: "images/projects/12.png",
    url: null,
    gitUrl: "https://github.com/rh7112/website-development-final-project",
    tag: ["All", "HTML5", "CSS3"],
  },
  {
    id: 13,
    title: "Inventory Variances",
    description:
      "This Retool app helps the Music Store to track variances in the inventory they hold. The application displays the item id, variance amount, notes, and other useful information for those in the Music Store to help them maintain their stock.",
    image: "images/projects/13.png",
    url: null,
    gitUrl: "",
    tag: ["All", "Retool", "Javascript", "Music Store"],
  },
  {
    id: 14,
    title: "End of Day Notes",
    description:
      "This application provided those working the Guitar Gallery with a way to provide notes to those who were on the alternate shift of the ongoings of the day. This application was built using the Retool platform. ",
    image: "images/projects/14.png",
    url: null,
    gitUrl: "",
    tag: ["All", "Retool", "Javascript", "Guitar Gallery"],
  },
  {
    id: 15,
    title: "Gitlab Permissions Lookup",
    description:
      "The Application and Platform Support teams were often contacted about 'who owns what Gitlab repository.' This issue was brought up to the Retool team, and I ultimately built out an applicaiton that uses the Gitlab REST API to pull project information, owners, etc. I displayed this information to the user and allowed them to send emails to owners and maintainers, to avoid the back and forth with other teams.",
    image: "images/projects/15.jpg",
    url: null,
    gitUrl: "",
    tag: ["All", "Retool", "Javascript", "Information Technology"],
  },
  {
    id: 16,
    title: "Sweetwater Crescendo Café Kiosk",
    description:
      "The original café management system used by staff was slow, unreliable, and difficult to maintain. I took ownership of rebuilding the application in Retool, redesigning the interface for clarity and speed, integrating live order data, and optimizing performance. The new version significantly improved usability for café staff and reduced support overhead for the engineering team.",
    image: "images/projects/16.jpg",
    url: null,
    gitUrl: "",
    tag: ["All", "Retool", "Javascript", "Kiosks"],
  },
  {
    id: 17,
    title: "Wavelengths Salon & Spa Kiosk",
    description:
      "I supported the existing codebase for Wavelengths Salon and Spa’s internal platform, assisting with maintenance and incremental improvements. Though I was not the sole developer, I helped address usability issues, resolved bugs, and provided suggestions for enhancing the application’s functionality.",
    image: "images/projects/17.png",
    url: null,
    gitUrl: "",
    tag: ["All", "Retool", "Javascript", "Kiosks"],
  },
  {
    id: 18,
    title: "Beverage Kiosks",
    description:
      "I contributed to the rewrite of the shared application used across multiple beverage kiosks, including Fermata North, Fermata South, Take 5, and Refresh. While not the sole developer, I assisted in improving functionality, refining the user interface, and ensuring the application could adapt dynamically based on kiosk context. My efforts supported a more consistent and maintainable experience across all locations.",
    image: "images/projects/18.jpg",
    url: null,
    gitUrl: "",
    tag: ["All", "Retool", "Javascript", "Kiosks"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
          department={false}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Accounting"
          isSelected={tag === "Accounting"}
          department={true}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Marketing"
          isSelected={tag === "Marketing"}
          department={true}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Merchandising"
          isSelected={tag === "Merchandising"}
          department={true}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Guest Services"
          isSelected={tag === "Guest Services"}
          department={true}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Gear Exchange"
          isSelected={tag === "Gear Exchange"}
          department={true}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Information Technology"
          isSelected={tag === "Information Technology"}
          department={true}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Music Store"
          isSelected={tag === "Music Store"}
          department={true}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Kiosks"
          isSelected={tag === "Kiosks"}
          department={true}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Javascript"
          isSelected={tag === "Javascript"}
          department={false}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="4D"
          isSelected={tag === "4D"}
          department={false}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
          department={false}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
          department={false}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Node"
          isSelected={tag === "Node"}
          department={false}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NextJS"
          isSelected={tag === "NextJS"}
          department={false}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="C#"
          isSelected={tag === "C#"}
          department={false}
        />
        <ProjectTag
          onClick={handleTagChange}
          name=".Net"
          isSelected={tag === ".Net"}
          department={false}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HTML5"
          isSelected={tag === "HTML5"}
          department={false}
        />
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
