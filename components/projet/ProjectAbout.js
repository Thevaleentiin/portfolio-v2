"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const TITLE_FONT_CLASSES = {
    "changa-one": "font-changa_one",
    cantarell: "font-cantarell",
    montserrat: "font-montserrat",
    "josefin-sans": "font-josefin-sans",
};

const TEXT_FONT_CLASSES = {
    assistant: "font-assistant",
    montserrat: "font-montserrat",
    raleway: "font-raleway",
    "open-sans": "font-open-sans",
    inter: "font-inter",
};

const ProjectAbout = ({ imgAbout, fontTitle, fontText, imgAbout2, colors, idProject, title }) => {
    const imgRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("auto");
    const animRef = useRef(null);
    const isInView = useInView(animRef, { once: true });
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const handleImageLoad = () => {
            if (!imgRef.current) return;

            const imageHeight = imgRef.current.clientHeight;
            let offset = 250;

            if (window.innerWidth < 481) offset = 100;
            else if (window.innerWidth < 641) offset = 150;
            else if (window.innerWidth < 769) offset = 170;
            else if (window.innerWidth < 1025) offset = 180;

            setMaxHeight(`${imageHeight - offset}px`);
        };

        const imgElement = imgRef.current;
        if (imgElement) {
            imgElement.addEventListener("load", handleImageLoad);
            if (imgElement.complete) handleImageLoad();
        }

        return () => {
            if (imgElement) {
                imgElement.removeEventListener("load", handleImageLoad);
            }
        };
    }, []);

    const colorsListBubble = colors.map((color, index) => {
        const style = {
            width: "6rem",
            height: "6rem",
            borderRadius: "50%",
            backgroundColor: color.startsWith("#") ? color : `#${color}`,
        };
        return <li key={index} className="ColorBubble" style={style} />;
    });

    return (
        <div className="w-full">
            <div className="w-full bg-surface pb-0">
                <div className="container h-auto" style={{ maxHeight }}>
                    <Image
                        src={imgAbout}
                        className="w-4/5 -translate-y-12 xs:-translate-y-14 sm:-translate-y-[4rem] md:-translate-y-[4rem] lg:-translate-y-28 mx-auto h-auto"
                        alt={`Maquette du projet ${title}`}
                        quality={80}
                        sizes="(max-width: 768px) 80vw, 60vw"
                        ref={imgRef}
                        width={2560}
                        height={idProject === "1" ? 1535 : 2363}
                    />
                </div>
            </div>
            <div className="w-full bg-blacksecondary text-whiteprimary pt-56 pb-56">
                <div className="container">
                    <motion.div
                        ref={animRef}
                        initial={prefersReducedMotion ? false : { opacity: 0, y: -100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                        className="w-20/24 xxs:w-18/24 sm:w-3/5 mx-auto"
                    >
                        <h2 className="font-rubik text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold">Typographie</h2>
                        <div className="flex flex-col justify-start items-center">
                            <div className="w-full">
                                <p className={`text-lg pt-6 capitalize ${TITLE_FONT_CLASSES[fontTitle] || "font-montserrat"}`}>
                                    {fontTitle} - Titre
                                </p>
                                <p className={`text-4xl font-bold ${TITLE_FONT_CLASSES[fontTitle] || "font-montserrat"}`}>
                                    The quick brown fox jumps over the lazy dog
                                </p>
                            </div>
                            <div className="w-full">
                                <p className={`text-lg capitalize ${TEXT_FONT_CLASSES[fontText] || "font-montserrat"}`}>
                                    {fontText} - Texte
                                </p>
                                <p className={`text-4xl ${TEXT_FONT_CLASSES[fontText] || "font-montserrat"}`}>
                                    The quick brown fox jumps over the lazy dog
                                </p>
                            </div>
                        </div>
                        <div className="mt-16">
                            <h2 className="font-rubik text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold mb-6">Couleurs utilisées</h2>
                            <ul className="flex flex-row justify-start items-center flex-wrap gap-3 xxs:gap-5 xs:gap-8 sm:gap-10">
                                {colorsListBubble}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="w-full bg-surface">
                <div className="container">
                    <Image
                        src={imgAbout2}
                        className="w-4/5 -translate-y-12 xs:-translate-y-14 sm:-translate-y-[4rem] md:-translate-y-[4rem] lg:-translate-y-28 mx-auto h-auto"
                        alt={`Seconde maquette du projet ${title}`}
                        quality={80}
                        sizes="(max-width: 768px) 80vw, 60vw"
                        width={2560}
                        height={idProject === "1" ? 1591 : 2880}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectAbout;
