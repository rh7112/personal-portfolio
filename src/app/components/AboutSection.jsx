"use client";

import React, {
    useTransition,
    useState
} from "react";

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

import {
    FaC
} from "react-icons/fa6";

import {
    IoLogoJavascript,
    IoIosDocument
} from "react-icons/io";

import {

    SiDatadog,

    SiJira,

    SiNextui,

    SiRetool,

    Si4D,

    SiDotnet,

} from "react-icons/si";

import {
    TbBrandCSharp
} from "react-icons/tb";

import {
    TbBrandCpp,
    TbBrandNextjs
} from "react-icons/tb";

import {
    BsRegex
} from "react-icons/bs";

import {
    GrGraphQl
} from "react-icons/gr";

import SkillCard from "./SkillCard";

import ExperienceCard from "./ExperienceCard";

import EducationCard from "./EducationCard";

import {
    GiDiploma
} from "react-icons/gi";

const sweetwaterAccordionItems = [

    {

        title: "Production Support",

        description:

            "While part of the Production Support team, I handled various tasks improving Sweetwater's Customer Relationship Management (CRM) system, 4D. These tasks include bug fixes, permissions updates, and 'quick hits,' small bite-sized improvements to improve end-user's lives. I worked on performing code reviews, and learning the ins and outs of not only the CRM's system, but also the entire Sweetwater ecosystem. This was a team of seven to twelve.",
    },

    {

        title: "Maintenance, Accounting, Tax, and Human Resource (MATH) Pod",

        description:

            "On the MATH Pod, we handled tasks related to the Maintenance, Accounting, Tax,and Human Resources departments. Some of the major projects I worked on during this time includes integrating TTR's Exemtpion Certification Management System, integrating Paypal's Braintree system into the Customer Relationship Management (CRM) system. I was taken under the wing of a wickedly smart Senior Engineer who mentored me on the complex logic related to the companies accounting systems. I worked on bug fixes in accounting logic, projects, and automating processes usually using Python. This was a team of two to three.",
    },

    {

        title: "Customer Experience Pod",

        description:

            "The MATH pod was dissolved and enveloped into the Customer Experience pod. This team was geared towards addressing areas of the Customer Relationship Management (CRM)  that are used in other employee's day-to-day workflows to impact customer's lives. This meant modules like Invoices, Quotes, Names, Customer Email, Inventory, and many more. Major projects on this team included rewriting the "lead bucket" (a round-robin queue) system for the Consumer Audio project In-House Credit Freezing/Thawing. I worked on projects, bug fixes, and attempting automate some of my day-to-day processes. This was a team of seven to ten.",

    },

    {

        title: "Retool Pod",

        description:

            "The Retool team was formed in the Fall of '22, and I was offered a spot on the team. We leveraged the Retool platform to build internal applications, varying from simple and easy, to entire multi-month projects. I contributed to projects like Price Management Platform, Wavelengths Salon & Spa kiosk rewrite and Beverage kiosk rewrite. I developed rewrite applications for the Crescendo Café kiosk, Search Miner, Personalized Tile Promotions. I developed new solutions for Web Text Editor, Turkey giveaway, DC Cookout giveaway. The deadlines on this team were often tight, but rhe work was much more rewarding. This was a team of two to three.",

    },

];

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

const TAB_DATA = [

    {

        title: "Experience",

        id: "experience",

        content: (

            <
            div className = "grid grid-cols-1 gap-4 md:grid-cols-1" >

            <
            ExperienceCard

            title = "Sweetwater Sound Inc."

            dateRange = "Since May 2021"

            jobTitle = "Software Engineer"

            description = "In my time at Sweetwater I've spent time on the Production Support team, MATH Pod (Maintenance, Accounting, Tax, and Human Resource), Customer Experience Pod, and Retool Pod. I've gained a breadth of software engineering knowledge throughout my tenure at Sweetwater. See the sections below for more details on each team!"

            accordionItems = {
                sweetwaterAccordionItems
            }

            />

            <
            ExperienceCard

            title = "Zimmer Biomet"

            dateRange = "Oct. 2020 - May 2021"

            jobTitle = "Information Technology Intern"

            accordionItems = {
                zimmerBiomentAccordionItems
            }

            />

            <
            ExperienceCard

            title = "United States Census Bureau"

            dateRange = "Jan. 2020 - Oct. 2020"

            jobTitle = "Post-Enumeration Surveyor"

            accordionItems = {
                null
            }

            />

            <
            ExperienceCard

            title = "Staples"

            dateRange = "Jun. 2018 - May 2019"

            jobTitle = "Technology Sales Associate"

            accordionItems = {
                null
            }

            />

            <
            ExperienceCard

            title = "Black's Concrete Construction"

            dateRange = "Jun. 2016 - Feb. 2017"

            jobTitle = "Concrete Former, Laborer, and Finisher"

            description = "Concrete Construction taught me the meaning of a hard days work, instilling a strong work ethic, and becoming a valuable team member. I'm proud to have been part of the Black's Concrete Construction team."

            accordionItems = {
                concreteAccordionItems
            }

            />

            <
            /div>

        ),

    },

    {

        title: "Skills",

        id: "skills",

        content: (

            <
            div className = "grid auto-rows-fr lg:grid-cols-3 sm:grid-cols-2 gap-2" >

            {
                SkillCard(IoLogoJavascript, "Javascript", "Experienced")
            }

            {
                SkillCard(SiRetool, "Retool", "Experienced")
            }

            {
                SkillCard(FaDatabase, "SQL (MySQL, PostGreSQL)", "Experienced")
            }

            {
                SkillCard(Si4D, "Fourth Dimensional Programming (4D)", "Experienced")
            }

            {
                SkillCard(FaPython, "Python", "Experienced")
            }

            {
                SkillCard(FaGit, "Git (Github, Gitlab)", "Experienced")
            }

            {
                SkillCard(BsRegex, "Regex", "Experienced")
            }

            {
                SkillCard(IoIosDocument, "Documentation", "Experienced")
            }

            {
                SkillCard(IoLogoJavascript, "User-Interface Design", "Intermediate")
            }

            {
                SkillCard(IoLogoJavascript, "User-Experience Design", "Intermediate")
            }

            {
                SkillCard(TbBrandCpp, "C++", "Intermediate")
            }

            {
                SkillCard(FaC, "C", "Intermediate")
            }

            {
                SkillCard(SiJira, "Jira Query Language (JQL)", "Intermediate")
            }

            {
                SkillCard(SiDatadog, "Datadog", "Intermediate")
            }

            {
                SkillCard(FaReact, "React", "Beginner")
            }

            {
                SkillCard(FaNodeJs, "Node", "Beginner")
            }

            {
                SkillCard(GrGraphQl, "GraphQL", "Beginner")
            }

            {
                SkillCard(TbBrandNextjs, "NextJS", "Beginner")
            }

            {
                SkillCard(SiNextui, "NextUI", "Beginner")
            }

            {
                SkillCard(TbBrandCSharp, "C#", "Beginner")
            }

            {
                SkillCard(SiDotnet, ".Net", "Beginner")
            }

            <
            /div>

        ),

    },

    {

        title: "Education",

        id: "education",

        content: (

            <
            div className = "grid grid-cols-1 gap-4 md:grid-cols-2" >

            <
            EducationCard

            degree = "Bachelor of Science in Computer Science"

            institution = "Purdue University - Fort Wayne"

            icon = {
                < FaUserGraduate size = {
                    24
                }
                color = "#fff" / >
            }

            />

            <
            EducationCard

            degree = "Associate of Science in Computer Science"

            institution = "Ivy Tech Community College"

            icon = {
                < FaGraduationCap size = {
                    24
                }
                color = "#fff" / >
            }

            />

            <
            EducationCard

            degree = "Core 40 - Academic Honors Diploma"

            institution = "Whitko High School"

            icon = {
                < GiDiploma size = {
                    24
                }
                color = "#fff" / >
            }

            />

            <
            /div>

        ),

    },

    {

        title: "Certifications",

        id: "certifications",

        content: (

            <
            div className = "grid grid-cols-1 gap-4 md:grid-cols-2" >

            <
            p className = "bg-slate-800 rounded-lg shadow p-4 mb-4 flex items-center" >

            Python - Certified Entry - Level Python Programmer

            <
            /p>

            <
            /div>

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

        <
        section className = "text-white" >

        <
        div className = "md:grid md:grid-cols-1 gap-8 py-8 px04 xl:gap-16 sm:py-16 xl:px-16" >

        <
        div className = "mt-4 md:mt-0 text-left flex flex-col h-full" >

        <
        h2 className = "text-4xl font-bold text-white mb-4" > About Me < /h2>

        <
        p className = "text-base lg:text-lg" >

        I’ m a father and husband.Family is the foundation of everything I do,
        and it’ s what drives me to solve problems with care, intention, and integrity— both in life and in code.

        <
        /p>

        <
        p className = "text-base lg:text-lg" >

        Professionally, I’ m a software engineer with 4 + years of experience building internal tools and business applications that make work easier, faster, and more reliable.I specialize in full - stack development with JavaScript, Python, SQL, and Retool, and I’ ve delivered high - impact solutions— from a price management platform that boosted revenue by $4M, to system integrations that gave back entire workdays to internal teams.

        <
        /p>

        <
        p className = "text-base lg:text-lg" >

        I thrive when bridging the gap between non - technical stakeholders and clean, scalable code.I’ ve worked in Agile, Scrum, Kanban, and Waterfall environments, and I’ m comfortable wearing multiple hats— from frontend to backend, deployment to support.

        <
        /p>

        <
        p className = "text-base lg:text-lg" >

        When I’ m not coding, you’ ll probably find me cooking at home, casting a line in a bass tournament or frozen lake, or tweaking my Plex server just
        for fun.I value clarity, consistency, and building tools that people actually enjoy using.

        <
        /p>

        <
        div className = "flex flex-row justify-start mt-8 flex-wrap gap-3" >

        <
        TabButton

        selectTab = {
            () => handleTabChange("experience")
        }

        active = {
            tab === "experience"
        }

        >

        {
            " "
        }

        Experience {
            " "
        }

        <
        /TabButton>

        <
        TabButton

        selectTab = {
            () => handleTabChange("skills")
        }

        active = {
            tab === "skills"
        }

        >

        {
            " "
        }

        Skills {
            " "
        }

        <
        /TabButton>

        <
        TabButton

        selectTab = {
            () => handleTabChange("education")
        }

        active = {
            tab === "education"
        }

        >

        {
            " "
        }

        Education {
            " "
        }

        <
        /TabButton>

        <
        TabButton

        selectTab = {
            () => handleTabChange("certifications")
        }

        active = {
            tab === "certifications"
        }

        >

        {
            " "
        }

        Certifications {
            " "
        }

        <
        /TabButton>

        <
        /div>

        <
        div className = "mt-8" >

        {
            TAB_DATA.find((t) => t.id === tab).content
        }

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /section>

    );

};

export default AboutSection;