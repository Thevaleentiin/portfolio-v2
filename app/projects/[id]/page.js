"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@component/lib/projects";
import Button from "@component/components/ui/Button";

const ProjectDetails = () => {
    const params = useParams();
    const router = useRouter();
    const { id } = params;
    const [project, setProject] = useState(null);
    
    useEffect(() => {
        if (id) {
            const foundProject = projects.find((project) => project.id === id);
            setProject(foundProject || null);
        }
    }, [id]);
    
    if (!project) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <img src={project.image} alt={project.title} className="w-full mb-4" />
            <p className="mb-4">{project.description}</p>
            <Button text="Retour à l'accueil" color="primary" onClick={() => router.push("/")} />
        </div>
    );
};

export default ProjectDetails;
