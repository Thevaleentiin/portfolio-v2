"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@component/lib/projects";
import Button from "@component/components/ui/Button";
import ProjetHero from "@component/components/projet/ProjetHero";
import ProjectDescription from "@component/components/projet/ProjectDescription";
import ProjectAbout from "@component/components/projet/ProjectAbout";
import CustomLink from "@component/components/ui/CustomLink";
import BlobCircle from "@component/components/BlobCircle";

const extractImageName = (url) => {
    const parts = url.split('/');
    const fileName = parts[parts.length - 1];
    return fileName;
}

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

    const imageLinks = [project.stackLogo, project.stackLogo2, project.stackLogo3];
    const imageNames = imageLinks.map(link => extractImageName(link));
    
    return (
        <div className="w-full bg-whiteprimary pb-96 relative overflow-hidden">
            <ProjetHero title={project.title} hrefWebsite={project.website} imgHero={project.imageHero} idProject={project.id} />
            <ProjectDescription imgNames={imageNames} role={project.role} contexte={project.contexte} annee={project.annee} stackLogo={project.stackLogo} stackLogo2={project.stackLogo2} stackLogo3={project.stackLogo3} description={project.description} />
            <ProjectAbout imgAbout={project.imgAbout} fontTitle={project.fontTitle} fontText={project.fontText} imgAbout2={project.imgAbout2} idProject={project.id} colors={project.colors} />
            {/* <img src={project.image} alt={project.title} className="w-full mb-4" /> */}
            {/* <p className="mb-4">{project.description}</p> */}
            <div className="flex flex-col xs:flex-row gap-8 mt-10 mb-96 justify-center items-center xs:items-start">
                <CustomLink href={project.website}
                    target="_blank"
                    className="box-border border font-shanti rounded-xl"
                    bgWaveColor="bg-redprimary"
                    textColor="text-redprimary"
                    borderColor="before:border-redprimary"
                    BgColor="bg-transparent"
                    hoverTextColor="text-whiteprimary">
                    Voir le site
                </CustomLink>
                {/* <Button text="Retour à l'accueil" type="button" style="text-redprimary inline-block box-border border border-redprimary rounded mt-2 px-10 py-3" color="primary" onClick={() => router.push("/")} /> */}
                <CustomLink href="/"
                    className="box-border border font-shanti rounded-xl"
                    bgWaveColor="bg-redprimary"
                    textColor="text-redprimary"
                    borderColor="before:border-redprimary"
                    BgColor="bg-transparent"
                    hoverTextColor="text-whiteprimary">
                    Retour à l'accueil
                </CustomLink>
            </div>
            <BlobCircle gradientId="grad1" className="absolute -bottom-14% z-40 -left-2/24 4xl:-bottom-11% 5xl:-bottom-10% w-1000 h-1000 rotate-90 4xl:rotate-45" /> {/* cercle bleu */}
            <BlobCircle gradientId="grad2" className="absolute -bottom-3/24 z-40 left-9/24 4xl:-bottom-14% 6xl:-bottom-[9%] 7xl:-bottom-[10%] w-1000 h-1000 4xl:w-1200 4xl:h-1200 rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-1/12 z-30 -right-26% 4xl:-bottom-2/24 4xl:-right-4/24 5xl:-bottom-[7%] w-1000 h-1000 5xl:w-1200 5xl:h-1200 rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-9% z-40 -right-3/12 4xl:-right-5/24 4xl:-bottom-2/24 5xl:-bottom-2/24 5xl:-right-3/24 6xl:-bottom-[5.5%] 7xl:-bottom-[6%] w-750 h-750 md:-rotate-45 4xl:-rotate-12" />
            <BlobCircle gradientId="grad5" className="absolute -bottom-40 z-30 -left-3/24 w-500 h-500 rotate-[145deg]" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-14% z-20 left-1/12 4xl:-bottom-11% w-1200 h-1200 rotate-90" />
        </div>
    );
};

export default ProjectDetails;
