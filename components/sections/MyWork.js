"use client";
import { projects } from "@component/lib/projects";
import ProjectCard from "./ProjectCard";

const MyWork = () => {
    return (
        <div id="realisations" className="w-full bg-redprimary dark:bg-[#4A1714] text-white overflow-hidden">
            <div className="container pt-56 pb-64 lg:pb-80 xl:pb-96 5xl:px-48 5xl:pb-96 7xl:pb-[700px]">
                <h2 className="uppercase text-6xl lg:text-7xl font-raleway font-bold">Projets</h2>
                <div className="mt-56">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            featured={index === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyWork;
