import { notFound } from "next/navigation";
import { projects, getProjectById } from "@component/lib/projects";
import { siteConfig } from "@component/lib/site";
import ProjectDetails from "@component/components/projet/ProjectDetails";

export async function generateStaticParams() {
    return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        return { title: "Projet introuvable" };
    }

    const title = `${project.title} — ${siteConfig.name}`;
    const description = project.shortdescription;
    const url = `${siteConfig.url}/projects/${project.id}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: "fr_FR",
            type: "website",
            images: [
                {
                    url: project.imageHero,
                    width: 1200,
                    height: 630,
                    alt: `Aperçu du projet ${project.title}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [project.imageHero],
        },
    };
}

export default async function ProjectPage({ params }) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
}
