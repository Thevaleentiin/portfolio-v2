"use client";
import Image from "next/image";
import Banner from "../ui/Banner";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectDescription = ({role, contexte, annee, stackLogo, stackLogo2, stackLogo3, description, imgNames }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="bg-redprimary text-whiteprimary pb-60">
            <div className="container relative">
                <Banner role={role} contexte={contexte} annee={annee} />
                <motion.div ref={ref} initial={{opacity: 0, y: -100}} animate={isInView ? { opacity: 1, y: 0} : {}} transition={{ duration: 1, delay: 0.3 }} className="w-20/24 xxs:w-18/24 sm:w-3/5 mx-auto pt-44">
                    <h2 className="font-rubik text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold">Présentation</h2>
                    <p className="font-shanti mt-6">
                        {description}
                    </p>
                    <h2 className="font-rubik text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold mt-6">Stack</h2>
                    <ul className="flex flex-row items-center gap-4 justify-start mt-3">
                        <li><Image src={stackLogo} className="" alt={imgNames[0]} width={55} height={31} /></li>
                        <li><Image src={stackLogo2} className="" alt={imgNames[1]} width={55} height={31} /></li>
                        <li><Image src={stackLogo3} className="" alt={imgNames[2]} width={55} height={31} /></li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}

export default ProjectDescription;