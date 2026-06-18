"use client";
import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import BlobCircle from "../BlobCircle";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const BLOB_CLASSES_RIGHT = {
    primary: "absolute -bottom-3/24 sm:bottom-0 lg:-bottom-11/24 xl:-bottom-18/24 -right-20/24 lg:-right-3/5 2-5xl:-right-2/5 2xl:-right-15/24 2xl:-bottom-22/24 4xl:-bottom-19/24 4xl:-right-11/24 5xl:-bottom-13/24 5xl:-right-14/24 7xl:-right-10/24 7xl:-bottom-13/24 -z-10 w-750 h-750 lg:w-750 lg:h-750 xl:w-950 xl:h-950 2xl:w-1200 2xl:h-1200 3xl:w-1300 3xl:h-1300 5xl:w-[1400px] 5xl:h-[1400px] 7xl:w-[1800px] 7xl:h-[1800px]",
    secondary: "absolute -bottom-1/4 -right-4/12 hidden lg:block lg:-bottom-20/24 lg:-right-6/12 xl:-right-4/12 xl:-bottom-23/24 3xl:-right-4/12 5xl:-bottom-13/24 5xl:-right-14/24 7xl:-right-9/24 7xl:-bottom-12/24 3xl:w-411 3xl:h-411 5xl:w-[511px] 5xl:h-[511px] -z-10 w-96 h-96",
};

const BLOB_CLASSES_LEFT = {
    primary: "absolute -bottom-3/24 sm:bottom-0 lg:-bottom-11/24 xl:-bottom-18/24 -left-20/24 lg:-left-3/5 2xl:-left-15/24 2-5xl:-left-2/5 2xl:-bottom-17/24 3xl:-bottom-16/24 4xl:-bottom-9/24 4xl:-left-11/24 5xl:-bottom-13/24 5xl:-left-14/24 7xl:-left-10/24 7xl:-bottom-12/24 -z-10 w-750 h-750 xl:w-950 xl:h-950 2xl:w-1200 2xl:h-1200 3xl:w-1300 3xl:h-1300 5xl:w-[1400px] 5xl:h-[1400px] 7xl:w-[1800px] 7xl:h-[1800px] rotate-180",
    secondary: "absolute -bottom-1/4 -left-4/12 hidden lg:block lg:-bottom-22/24 lg:-left-6/12 xl:-left-4/12 xl:-bottom-23/24 -z-10 w-96 h-96 3xl:-left-4/12 4xl:-bottom-13/24 5xl:-left-14/24 5xl:-bottom-13/24 7xl:-left-9/24 7xl:-bottom-12/24 3xl:w-411 3xl:h-411 5xl:w-[511px] 5xl:h-[511px] rotate-180",
};

const MARGIN_CLASSES = [
    "",
    "mt-32 lg:mt-72 2xl:mt-96 4xl:mt-[500px]",
    "mt-96",
    "mt-32 lg:mt-96 2xl:mt-96 4xl:mt-[500px]",
    "mt-96",
];

const ProjectImages = ({ project, featured, parallax, isReversed }) => {
    const imageBlock = (
        <div
            className="relative w-full max-w-[920px] md:w-5/6"
            style={parallax ? { perspective: "1100px", transformStyle: "preserve-3d" } : undefined}
            onMouseMove={parallax?.onMove}
            onMouseLeave={parallax?.onLeave}
        >
            <motion.div
                className="rounded-xl overflow-hidden"
                style={parallax ? { x: parallax.mainX, y: parallax.mainY, rotate: parallax.mainR, scale: parallax.mainScale, transformStyle: "preserve-3d" } : undefined}
            >
                <Image
                    src={project.homeImage}
                    className="h-auto w-full object-cover pointer-events-none"
                    alt={`Capture d'écran du projet ${project.title}`}
                    quality={featured ? 85 : 75}
                    width={project.homeImageWidth}
                    height={project.homeImageHeight}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    draggable={false}
                    priority={featured}
                />
            </motion.div>
            {project.homeImage2 && (
                <motion.div
                    className="absolute -left-5 -bottom-10 w-[72%] sm:w-[68%] md:w-[62%] rounded-xl overflow-hidden"
                    style={parallax ? { x: parallax.subX, y: parallax.subY, rotate: parallax.subR, scale: parallax.subScale, transformStyle: "preserve-3d" } : undefined}
                >
                    <Image
                        src={project.homeImage2}
                        className="h-auto w-full object-cover pointer-events-none"
                        alt={`Seconde capture d'écran du projet ${project.title}`}
                        quality={75}
                        width={project.homeImage2Width}
                        height={project.homeImage2Height}
                        sizes="(max-width: 1024px) 72vw, 36vw"
                        draggable={false}
                    />
                </motion.div>
            )}
        </div>
    );

    return (
        <div className={`z-10 col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative flex items-center justify-center select-none ${isReversed ? "lg:order-2" : ""}`}>
            {imageBlock}
        </div>
    );
};

const ProjectCard = ({ project, index, featured = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const parallax = useParallaxMotion();
    const isReversed = index % 2 === 1;
    const blobClasses = isReversed ? BLOB_CLASSES_LEFT : BLOB_CLASSES_RIGHT;
    const paddedIndex = String(index + 1).padStart(2, "0");

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-9 ${MARGIN_CLASSES[index] || "mt-96"}`}>
            <ProjectImages project={project} featured={featured} parallax={parallax} isReversed={isReversed} />
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className={`flex flex-col mt-8 z-0 col-span-1 lg:col-span-5 relative ${isReversed ? "lg:order-1 md:mt-0" : "lg:mt-0"}`}
            >
                <BlobCircle gradientId="grad3" className={blobClasses.primary} />
                <BlobCircle gradientId="grad4" className={blobClasses.secondary} />
                <h2 className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-rubik font-bold">
                    <span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl block font-bold font-raleway">{paddedIndex}.</span>
                    {project.title.toUpperCase()}
                </h2>
                <p className="mt-2">{project.shortdescription}</p>
                <ul className="flex flex-row gap-2 justify-between mt-3">
                    <li className="flex flex-col justify-center items-center">
                        <span className="font-rubik font-bold">Rôle</span>
                        <p className="font-shanti">{project.role}</p>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <span className="font-rubik font-bold">Contexte</span>
                        <p className="font-shanti">{project.contexte}</p>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <span className="font-rubik font-bold">Année</span>
                        <p className="font-shanti">{project.annee}</p>
                    </li>
                </ul>
                <div className="mt-6">
                    <CustomLink
                        href={`/projects/${project.id}`}
                        className="box-border border font-shanti rounded-xl"
                        bgWaveColor="bg-whiteprimary"
                        textColor="text-whiteprimary"
                        borderColor="before:border-whiteprimary"
                        BgColor="bg-transparent"
                        hoverTextColor="text-blacksecondary"
                    >
                        Voir Plus
                    </CustomLink>
                </div>
            </motion.div>
        </div>
    );
};

export const useParallaxMotion = () => {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 140, damping: 22, mass: 0.25 });
    const sy = useSpring(my, { stiffness: 140, damping: 22, mass: 0.25 });

    return {
        mainX: useTransform(sx, (v) => v * 18),
        mainY: useTransform(sy, (v) => v * 14),
        mainR: useTransform(sx, (v) => v * -4),
        mainScale: useTransform(sx, (v) => 1 + Math.abs(v) * 0.04),
        subX: useTransform(sx, (v) => v * 28),
        subY: useTransform(sy, (v) => v * 22),
        subR: useTransform(sx, (v) => v * 5),
        subScale: useTransform(sx, (v) => 1 + Math.abs(v) * 0.06),
        onMove: (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mx.set((e.clientX - rect.left) / rect.width - 0.5);
            my.set((e.clientY - rect.top) / rect.height - 0.5);
        },
        onLeave: () => {
            mx.set(0);
            my.set(0);
        },
    };
};

export default ProjectCard;
