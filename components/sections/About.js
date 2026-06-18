"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CustomLink from "../ui/CustomLink";
import { siteConfig } from "@component/lib/site";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div id="a-propos" className="w-full bg-surface relative overflow-hidden">
            <div className="container pt-44 pb-44 5xl:px-48">
                <h2 className="uppercase text-redprimary text-6xl lg:text-7xl font-raleway font-extrabold">à Propos</h2>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="font-shanti w-10/12 xs:w-9/12 md:w-7/12 lg:w-7/12 mx-auto mt-14 leading-relaxed tracking-wide"
                >
                    <p>
                        <span className="text-redprimary font-rubik font-extrabold">Salut,</span>{" "}
                        moi c&apos;est Valentin — <span className="text-blueprimary font-rubik font-bold">développeur front-end</span> basé à Paris, diplômé de l&apos;<span className="text-blueprimary font-rubik font-bold">IIM Digital School</span>.
                        {" "}Je conçois des interfaces avec <span className="text-blueprimary font-rubik font-bold">React</span>, <span className="text-blueprimary font-rubik font-bold">Next.js</span> et <span className="text-blueprimary font-rubik font-bold">WordPress</span>, en m&apos;appuyant sur une expérience terrain en agence (ISOBAR) et en freelance.
                    </p>
                    <p className="mt-4">
                        Curieux et autodidacte, j&apos;aime transformer des besoins métier en interfaces claires, performantes et accessibles — ce portfolio est d&apos;ailleurs construit avec Next.js 16 et Framer Motion.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="w-10/12 xs:w-9/12 md:w-7/12 lg:w-7/12 mx-auto mt-10"
                >
                    <h3 className="font-rubik font-bold text-blueprimary text-lg mb-4">Réalisations marquantes</h3>
                    <ul className="font-shanti space-y-3 list-disc list-inside">
                        {siteConfig.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="w-10/12 xs:w-9/12 md:w-7/12 lg:w-7/12 mx-auto mt-10 rounded-2xl border border-blueprimary/20 bg-blueprimary/5 p-6"
                >
                    <h3 className="font-rubik font-bold text-redprimary text-lg">En ce moment</h3>
                    <p className="font-shanti mt-2">{siteConfig.availability}</p>
                    <p className="font-shanti mt-1 text-blackprimary/70">{siteConfig.jobSearch}</p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <CustomLink
                            href={siteConfig.cvPath}
                            target="_blank"
                            className="box-border border font-shanti rounded-xl !mt-0"
                            bgWaveColor="bg-redprimary"
                            textColor="text-redprimary"
                            borderColor="before:border-redprimary"
                            BgColor="bg-transparent"
                            hoverTextColor="text-whiteprimary"
                        >
                            Télécharger mon CV
                        </CustomLink>
                        <CustomLink
                            href={siteConfig.linkedin}
                            target="_blank"
                            className="box-border border font-shanti rounded-xl !mt-0"
                            bgWaveColor="bg-blueprimary"
                            textColor="text-blueprimary"
                            borderColor="before:border-blueprimary"
                            BgColor="bg-transparent"
                            hoverTextColor="text-whiteprimary"
                        >
                            Voir mon LinkedIn
                        </CustomLink>
                    </div>
                </motion.div>

                <div className="container mt-10">
                    <ul className="flex flex-row items-center justify-center gap-6 flex-wrap" aria-label="Technologies maîtrisées">
                        <li>
                            <Image src="/images/react_logo.png" alt="React" width={55} height={55} sizes="55px" quality={75} />
                        </li>
                        <li>
                            <Image src="/images/tailwindcss-logo.png" alt="Tailwind CSS" width={55} height={31} sizes="55px" quality={75} />
                        </li>
                        <li>
                            <Image src="/images/wordpress-logo.png" alt="WordPress" width={55} height={55} sizes="55px" quality={75} />
                        </li>
                        <li>
                            <Image src="/images/git-logo.png" alt="Git" width={55} height={55} sizes="55px" quality={75} />
                        </li>
                    </ul>
                    <p className="text-center font-shanti text-sm mt-4 text-blackprimary/60">
                        Stack principal : React, Next.js, Tailwind CSS, WordPress, PHP
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
