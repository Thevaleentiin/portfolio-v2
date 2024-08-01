"use client";
import Button from "../ui/Button";
import CustomLink from "../ui/CustomLink";
import Image from "next/image";
import BlobCircle from "../BlobCircle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjetHero = ({title, imgHero, idProject, hrefWebsite}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="h-screen 2xl:h-1000 3xl:h-screen 4xl:h-screen 5xl:h-[1200px] 6xl:h-[1250px]  relative overflow-hidden">
            <BlobCircle gradientId="grad3" className="absolute z-0 -bottom-4/24 -left-5/12 xsmall:-left-5/12 xxs:-left-4/12 md:-left-14/24 lg:-left-14/24 lg:-bottom-[22%] xl:-left-12/24 2-5xl:-left-10/24 2xl:-left-8/24 3xl:-left-7/24 3xl:-bottom-4/24 4xl:-left-6/24 4xl:-bottom-6/24 w-1500 h-1500 4xl:w-[1700px] 4xl:h-[1700px] rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute z-0 -bottom-17/24 -right-8/24 xsmall:-bottom-17/24 xxs:-bottom-13/24 xs:-bottom-18/24 sm:-bottom-17/24 md:-bottom-15/24 lg:-bottom-14/24 lg:-right-9/24 2xl:-bottom-13/24 2xl:-right-7/24 5xl:-right-5/24 w-1000 h-1000 4xl:w-[1200px] 4xl:h-[1200px]" />
            <div className="flex flex-col lg:flex-row py-32 lg:py-0 justify-center h-full items-center gap-8">
                <motion.div ref={ref} initial={{opacity: 0, y: -100}} animate={isInView ? { opacity: 1, y: 0} : {}} transition={{ duration: 0.5 }} className="font-raleway basis-full h-auto lg:basis-2/5 lg:pl-8 xl:pl-0 flex flex-col justify-center lg:justify-start items-center">
                    <div className="z-10 text-center lg:text-left">
                        <p className="font-extrabold text-7xl sm:text-8xl md:text-9xl lg:text-10xl text-whiteprimary">0{idProject}.</p>
                        <p className="font-rubik font-bold uppercase text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-whiteprimary">{title}</p>
                        <CustomLink href={hrefWebsite}
                                target="_blank"
                                className="box-border border font-shanti rounded-xl"
                                bgWaveColor="bg-whiteprimary"
                                textColor="text-whiteprimary"
                                borderColor="before:border-whiteprimary"
                                BgColor="bg-transparent"
                                hoverTextColor="text-blackprimary">
                                Voir le site
                        </CustomLink>
                    </div>
                </motion.div>
                <motion.div ref={ref} initial={{opacity: 0, y: -100}} animate={isInView ? { opacity: 1, y: 0} : {}} transition={{ duration: 0.5, delay: 0.1 }} className="relative basis-full lg:basis-3/5 w-full h-full 3xl:h-[80%] z-10 px-5 xs:px-0">
                    <Image src={imgHero} className="w-full h-full object-contain" alt="" fill={true} quality={100} />
                </motion.div>
            </div>
        </div>
    );
}

export default ProjetHero;