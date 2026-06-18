import { projects } from "@component/lib/projects";
import { siteConfig } from "@component/lib/site";

export default function sitemap() {
    const projectUrls = projects.map((project) => ({
        url: `${siteConfig.url}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...projectUrls,
    ];
}
