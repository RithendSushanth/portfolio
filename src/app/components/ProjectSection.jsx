"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Prompter : Discover, Create and Share Creative Prompts",
        description: "Prompter is an AI prompting tool for modern world to discover, create and share creative prompts. Built with NextJs 13",
        image: "/images/projects/Prompter.png",
        tag: ["All", "Web", "nextjs"],
        githubUrl: "https://github.com/RithendSushanth/Prompter",
        deployedUrl: "https://prompter-7g01ve2py-rithend-sushanths-projects.vercel.app/",
    },
    {
        id: 2,
        title: "Authentication Webapplication",
        description: "This Web Application is is made when i was learning about NextJs NextAuth Functionalities and NodeMailer for Email Authentication. I have used MongoDB for data storage.",
        image: "/images/projects/Authentication.png",
        tag: ["All", "Web", "NEXTJS"],
        githubUrl: "https://github.com/RithendSushanth/Next-Auth",
        deployedUrl: "https://next-auth-pied-xi.vercel.app/",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "This is my personal Portfolio Website",
        image: "/images/projects/Portfolio.png",
        tag: ["All", "Web", "NEXTJS"],
        githubUrl: "https://github.com/RithendSushanth/portfolio",
        deployedUrl: "https://portfolio-rithend-sushanths-projects.vercel.app/",
    },
    {
        id: 4,
        title: "iNotebook",
        description: "iNotebook is an open-source web application for managing your notes. It is built with React.js and Node.js. It is designed to be user-friendly and easy to use. It is fully responsive and works on all devices.",
        image: "/images/projects/iNotebook.png",
        tag: ["All", "Web", "MERN"],
        githubUrl: "https://github.com/RithendSushanth/iNotebook",
        deployedUrl: "https://github.com/RithendSushanth/iNotebook",
    },
    {
        id: 5,
        title: "DailyBugle : A News App",
        description: "DailyBugle is a news app built with React.js and Node.js. It is designed to be user-friendly and easy to use. It is fully responsive and works on all devices. It is built with newsapi.org API.",
        image: "/images/projects/Dailybugle2.png",
        tag: ["All", "Web", "MERN"],
        githubUrl: "https://github.com/RithendSushanth/DailyBugle-ReactJs",
        deployedUrl: "https://github.com/RithendSushanth/DailyBugle-ReactJs",
    },
    {
        id: 6,
        title: "Hype : A Clothing Ecommerce Website",
        description: "Hype is an ecommerce website built with React.js and Node.js. It is designed to be user-friendly and easy to use. It is fully responsive and works on all devices. Its Payment gateway is built with Razorpay API. Firebase for backend. ",
        image: "/images/pc1.jpg",
        tag: ["All", "Web", "MERN"],
        githubUrl: "/",
        deployedUrl: "/",
    },
];
const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const filteredProjects = projectsData.filter((project) =>
        project.tag.map(tag => tag.toLowerCase()).includes(tag.toLowerCase())
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }




    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" id="project">
                My Projects
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-white my-6">
                <ProjectTag
                    name="All"
                    onClick={handleTagChange}
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    name="Web"
                    onClick={handleTagChange}
                    isSelected={tag === "Web"}
                />
                {/* <ProjectTag
                    name="Mobile"
                    onClick={handleTagChange}
                    isSelected={tag == "Mobile"}
                /> */}
                <ProjectTag
                    name="NextJS"
                    onClick={handleTagChange}
                    isSelected={tag === "NEXTJS"}
                />
                <ProjectTag
                    name="MERN"
                    onClick={handleTagChange}
                    isSelected={tag === "MERN"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            githubUrl={project.githubUrl}  
                            deployedUrl={project.deployedUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;