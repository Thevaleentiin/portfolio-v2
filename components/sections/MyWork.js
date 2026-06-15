"use client";
import Image from "next/image";
import Button from "../ui/Button";
import CustomLink from "../ui/CustomLink";
import BlobCircle from "../BlobCircle";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const MyWork = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const isInView = useInView(ref, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const isInView3 = useInView(ref3, { once: true });
    const isInView4 = useInView(ref4, { once: true });  
    const isInView5 = useInView(ref5, { once: true });
    // Parallax (mouse) for the first project screenshots
    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const sx = useSpring(mx, { stiffness: 140, damping: 22, mass: 0.25 });
    const sy = useSpring(my, { stiffness: 140, damping: 22, mass: 0.25 });

    // Main image moves a bit
    const mainX = useTransform(sx, (v) => v * 18);
    const mainY = useTransform(sy, (v) => v * 14);
    const mainR = useTransform(sx, (v) => v * -4);
    const mainScale = useTransform(sx, (v) => 1 + Math.abs(v) * 0.04);

    // Secondary image moves a bit more (gives depth)
    const subX = useTransform(sx, (v) => v * 28);
    const subY = useTransform(sy, (v) => v * 22);
    const subR = useTransform(sx, (v) => v * 5);
    const subScale = useTransform(sx, (v) => 1 + Math.abs(v) * 0.06);

    const handleParallaxMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5..0.5
        mx.set(x);
        my.set(y);
    };

    const handleParallaxLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <div id="realisations" className="w-full bg-redprimary text-white overflow-hidden">
            <div className="container pt-56 pb-64 lg:pb-80 xl:pb-96 5xl:px-48 5xl:pb-96 7xl:pb-[700px]">
                <h1 className="uppercase text-6xl lg:text-7xl font-raleway font-bold">Projets</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-56 gap-8 xl:gap-9">
                    <div className="z-10 col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative flex items-center justify-center select-none">
                        <div
                            className="relative w-full max-w-[920px] md:w-5/6"
                            style={{ perspective: "1100px", transformStyle: "preserve-3d" }}
                            onMouseMove={handleParallaxMove}
                            onMouseLeave={handleParallaxLeave}
                        >
                            {/* Main screenshot */}
                            <motion.div
                                className="rounded-xl overflow-hidden"
                                style={{ x: mainX, y: mainY, rotate: mainR, scale: mainScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/evalujeu_sample_img.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - evalujeu"
                                    quality={100}
                                    width={2560}
                                    height={1394}
                                    draggable={false}
                                    priority
                                />
                            </motion.div>

                            {/* Secondary screenshot (overlap) */}
                            <motion.div
                                className="absolute -left-5 -bottom-10 w-[72%] sm:w-[68%] md:w-[62%] rounded-xl overflow-hidden"
                                style={{ x: subX, y: subY, rotate: subR, scale: subScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/evalujeu_sample_img_2.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - evalujeu"
                                    quality={100}
                                    width={2560}
                                    height={1413}
                                    draggable={false}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div ref={ref} initial={{ opacity: 0, y: -50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
                    className="flex flex-col mt-8 lg:mt-0 z-0 col-span-1 lg:col-span-5 relative">
                        <BlobCircle gradientId="grad3" className="absolute -bottom-3/24 sm:bottom-0 lg:-bottom-11/24 xl:-bottom-18/24 -right-20/24 lg:-right-3/5 2-5xl:-right-2/5 2xl:-right-15/24 2xl:-bottom-22/24 4xl:-bottom-19/24 4xl:-right-11/24 5xl:-bottom-13/24 5xl:-right-14/24 7xl:-right-10/24 7xl:-bottom-13/24 -z-10 w-750 h-750 lg:w-750 lg:h-750 xl:w-950 xl:h-950 2xl:w-1200 2xl:h-1200 3xl:w-1300 3xl:h-1300 5xl:w-[1400px] 5xl:h-[1400px] 7xl:w-[1800px] 7xl:h-[1800px]" />
                        <BlobCircle gradientId="grad4" className="absolute -bottom-1/4  -right-4/12 hidden lg:block lg:-bottom-20/24 lg:-right-6/12 xl:-right-4/12 xl:-bottom-23/24 3xl:-right-4/12 5xl:-bottom-13/24 5xl:-right-14/24 7xl:-right-9/24 7xl:-bottom-12/24 3xl:w-411 3xl:h-411 5xl:w-[511px] 5xl:h-[511px] -z-10 w-96 h-96" />
                        <h2 className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-rubik font-bold"><span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl block font-bold font-raleway">01.</span> EVALUJEU</h2>
                        <p className="mt-2">Evalujeu est un dispositif de prévention du jeu excessif. Il propose aux joueurs de tester leur pratique de jeu en répondant à un questionnaire. C’est l’ANJ, l’autorité nationale des jeux qui gère la plateforme.</p>
                        <ul className="flex flex-row gap-2 justify-between mt-3">
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Rôle</span>
                                <p className="font-shanti">Front-end</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Contexte</span>
                                <p className="font-shanti">Agence Digitale</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Année</span>
                                <p className="font-shanti">2022</p>
                            </li>
                        </ul>
                        <div className="mt-6">
                            {/* <CustomLink href="/projects/1" className="" isHomePage>
                                Voir Plus
                            </CustomLink> */}
                            <CustomLink href="/projects/1"
                                className="box-border border font-shanti rounded-xl"
                                bgWaveColor="bg-whiteprimary"
                                textColor="text-whiteprimary"
                                borderColor="before:border-whiteprimary"
                                BgColor="bg-transparent"
                                hoverTextColor="text-blackprimary">
                                Voir Plus
                            </CustomLink>
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-32 lg:mt-72 2xl:mt-96 4xl:mt-[500px] gap-8 xl:gap-9">
                    <div className="z-10 lg:order-2 col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative flex items-center justify-center select-none">
                        <div
                            className="relative w-full max-w-[920px] md:w-5/6"
                            style={{ perspective: "1100px", transformStyle: "preserve-3d" }}
                            onMouseMove={handleParallaxMove}
                            onMouseLeave={handleParallaxLeave}
                        >
                            <motion.div
                                className="rounded-xl overflow-hidden"
                                style={{ x: mainX, y: mainY, rotate: mainR, scale: mainScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/ecarmotors-sample_img.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - ecarmotors"
                                    quality={100}
                                    width={2560}
                                    height={1794}
                                    draggable={false}
                                />
                            </motion.div>
                            <motion.div
                                className="absolute -left-5 -bottom-10 w-[72%] sm:w-[68%] md:w-[62%] rounded-xl overflow-hidden"
                                style={{ x: subX, y: subY, rotate: subR, scale: subScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/ecarmotors-sample_img_1.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - ecarmotors"
                                    quality={100}
                                    width={2560}
                                    height={960}
                                    draggable={false}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div ref={ref2} initial={{ opacity: 0, y: -50 }} animate={isInView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
                    className="flex flex-col mt-8 lg:order-1 md:mt-0 z-0 col-span-1 lg:col-span-5 relative">
                        <BlobCircle gradientId="grad3" className="absolute -bottom-3/24 sm:bottom-0 lg:-bottom-11/24 xl:-bottom-18/24 -left-20/24 lg:-left-3/5 2xl:-left-15/24 2-5xl:-left-2/5 2xl:-bottom-17/24 3xl:-bottom-16/24 4xl:-bottom-9/24 4xl:-left-11/24 5xl:-bottom-13/24 5xl:-left-14/24 7xl:-left-10/24 7xl:-bottom-12/24 -z-10 w-750 h-750 xl:w-950 xl:h-950 2xl:w-1200 2xl:h-1200 3xl:w-1300 3xl:h-1300 5xl:w-[1400px] 5xl:h-[1400px] 7xl:w-[1800px] 7xl:h-[1800px] rotate-180" />
                        <BlobCircle gradientId="grad4" className="absolute -bottom-1/4  -left-4/12 hidden lg:block lg:-bottom-22/24 lg:-left-6/12 xl:-left-4/12 xl:-bottom-23/24 -z-10 w-96 h-96 3xl:-left-4/12 4xl:-bottom-13/24 5xl:-left-14/24 5xl:-bottom-13/24 7xl:-left-9/24 7xl:-bottom-12/24 3xl:w-411 3xl:h-411 5xl:w-[511px] 5xl:h-[511px] rotate-180" />
                        <h2 className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-rubik font-bold"><span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl block font-bold font-raleway">02.</span> ECARMOTORS</h2>
                        <p className="mt-2">Site de vente pour un garage spécialisé dans les voitures premium et de luxe, réalisé en collaboration avec l'agence Radiant. Utilisation de Wordpress avec un plugin sur mesure pour l'importation des véhicules via la plateforme de gestion des stocks du client. Participation à l'intégration front-end.</p>
                        <ul className="flex flex-row gap-2 justify-between mt-3">
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Rôle</span>
                                <p className="font-shanti">Full Stack</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Contexte</span>
                                <p className="font-shanti">Freelance</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Année</span>
                                <p className="font-shanti">2023</p>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <CustomLink href="/projects/2"
                                className="box-border border font-shanti rounded-xl"
                                bgWaveColor="bg-whiteprimary"
                                textColor="text-whiteprimary"
                                borderColor="before:border-whiteprimary"
                                BgColor="bg-transparent"
                                hoverTextColor="text-blackprimary">
                                Voir Plus
                            </CustomLink>
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-96 gap-8 xl:gap-9">
                    <div className="z-10 col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative flex items-center justify-center select-none">
                        <div
                            className="relative w-full max-w-[920px] md:w-5/6"
                            style={{ perspective: "1100px", transformStyle: "preserve-3d" }}
                            onMouseMove={handleParallaxMove}
                            onMouseLeave={handleParallaxLeave}
                        >
                            <motion.div
                                className="rounded-xl overflow-hidden"
                                style={{ x: mainX, y: mainY, rotate: mainR, scale: mainScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/fika_sample_img.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - evalujeu"
                                    quality={100}
                                    width={2560}
                                    height={1394}
                                    draggable={false}
                                />
                            </motion.div>
                            <motion.div
                                className="absolute -left-5 -bottom-10 w-[72%] sm:w-[68%] md:w-[62%] rounded-xl overflow-hidden"
                                style={{ x: subX, y: subY, rotate: subR, scale: subScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/fika_sample_img_2.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - evalujeu"
                                    quality={100}
                                    width={2560}
                                    height={1413}
                                    draggable={false}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div ref={ref3} initial={{ opacity: 0, y: -50 }} animate={isInView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
                    className="flex flex-col mt-8 lg:mt-0 z-0 col-span-1 lg:col-span-5 relative">
                        <BlobCircle gradientId="grad3" className="absolute -bottom-3/24 sm:bottom-0 lg:-bottom-11/24 xl:-bottom-18/24 -right-20/24 lg:-right-3/5 2-5xl:-right-2/5 2xl:-right-15/24 2xl:-bottom-22/24 4xl:-bottom-19/24 4xl:-right-11/24 5xl:-bottom-13/24 5xl:-right-14/24 7xl:-right-10/24 7xl:-bottom-13/24 -z-10 w-750 h-750 lg:w-750 lg:h-750 xl:w-950 xl:h-950 2xl:w-1200 2xl:h-1200 3xl:w-1300 3xl:h-1300 5xl:w-[1400px] 5xl:h-[1400px] 7xl:w-[1800px] 7xl:h-[1800px]" />
                        <BlobCircle gradientId="grad4" className="absolute -bottom-1/4  -right-4/12 hidden lg:block lg:-bottom-20/24 lg:-right-6/12 xl:-right-4/12 xl:-bottom-23/24 3xl:-right-4/12 5xl:-bottom-13/24 5xl:-right-14/24 7xl:-right-9/24 7xl:-bottom-12/24 3xl:w-411 3xl:h-411 5xl:w-[511px] 5xl:h-[511px] -z-10 w-96 h-96" />
                        <h2 className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-rubik font-bold"><span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl block font-bold font-raleway">03.</span> FIKA BEAUTY </h2>
                        <p className="mt-2">Fika Beauty est un site WordPress développé pour un institut de beauté parisien, intégrant un design responsive avec Divi, une solution de réservation en ligne via Amelia, des paiements sécurisés avec PayPal, et une conformité RGPD grâce à la gestion des cookies et des données personnelles.</p>
                        <ul className="flex flex-row gap-2 justify-between mt-3">
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Rôle</span>
                                <p className="font-shanti">Full Stack</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Contexte</span>
                                <p className="font-shanti">Freelance</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Année</span>
                                <p className="font-shanti">2025</p>
                            </li>
                        </ul>
                        <div className="mt-6">
                            {/* <CustomLink href="/projects/1" className="" isHomePage>
                                Voir Plus
                            </CustomLink> */}
                            <CustomLink href="/projects/3"
                                className="box-border border font-shanti rounded-xl"
                                bgWaveColor="bg-whiteprimary"
                                textColor="text-whiteprimary"
                                borderColor="before:border-whiteprimary"
                                BgColor="bg-transparent"
                                hoverTextColor="text-blackprimary">
                                Voir Plus
                            </CustomLink>
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-32 lg:mt-96 2xl:mt-96 4xl:mt-[500px] gap-8 xl:gap-9">
                    <div className="z-10 lg:order-2 col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative flex items-center justify-center select-none">
                        <div
                            className="relative w-full max-w-[920px] md:w-5/6"
                            style={{ perspective: "1100px", transformStyle: "preserve-3d" }}
                            onMouseMove={handleParallaxMove}
                            onMouseLeave={handleParallaxLeave}
                        >
                            <motion.div
                                className="rounded-xl overflow-hidden"
                                style={{ x: mainX, y: mainY, rotate: mainR, scale: mainScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/carbonestone_sample_img.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - carbonestone"
                                    quality={100}
                                    width={2560}
                                    height={1794}
                                    draggable={false}
                                />
                            </motion.div>
                            <motion.div
                                className="absolute -left-5 -bottom-10 w-[72%] sm:w-[68%] md:w-[62%] rounded-xl overflow-hidden"
                                style={{ x: subX, y: subY, rotate: subR, scale: subScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/carbonestone_sample_img_2.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - carbonestone"
                                    quality={100}
                                    width={2560}
                                    height={960}
                                    draggable={false}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div ref={ref4} initial={{ opacity: 0, y: -50 }} animate={isInView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
                    className="flex flex-col mt-8 lg:order-1 md:mt-0 z-0 col-span-1 lg:col-span-5 relative">
                        <BlobCircle gradientId="grad3" className="absolute -bottom-3/24 sm:bottom-0 lg:-bottom-11/24 xl:-bottom-18/24 -left-20/24 lg:-left-3/5 2xl:-left-15/24 2-5xl:-left-2/5 2xl:-bottom-17/24 3xl:-bottom-16/24 4xl:-bottom-9/24 4xl:-left-11/24 5xl:-bottom-13/24 5xl:-left-14/24 7xl:-left-10/24 7xl:-bottom-12/24 -z-10 w-750 h-750 xl:w-950 xl:h-950 2xl:w-1200 2xl:h-1200 3xl:w-1300 3xl:h-1300 5xl:w-[1400px] 5xl:h-[1400px] 7xl:w-[1800px] 7xl:h-[1800px] rotate-180" />
                        <BlobCircle gradientId="grad4" className="absolute -bottom-1/4  -left-4/12 hidden lg:block lg:-bottom-22/24 lg:-left-6/12 xl:-left-4/12 xl:-bottom-23/24 -z-10 w-96 h-96 3xl:-left-4/12 4xl:-bottom-13/24 5xl:-left-14/24 5xl:-bottom-13/24 7xl:-left-9/24 7xl:-bottom-12/24 3xl:w-411 3xl:h-411 5xl:w-[511px] 5xl:h-[511px] rotate-180" />
                        <h2 className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-rubik font-bold"><span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl block font-bold font-raleway">04.</span> CARBONESTONE</h2>
                        <p className="mt-2">CarboneStone est une plateforme WordPress développée sous Divi intégrant un système de devis interactif sur-mesure. Le projet inclut l’import dynamique de grilles tarifaires CSV, la génération automatique de PDF, la création d’un Custom Post Type pour le stockage des demandes et l’automatisation de la logique métier en PHP et JavaScript.</p>
                        <ul className="flex flex-row gap-2 justify-between mt-3">
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Rôle</span>
                                <p className="font-shanti">Full Stack</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Contexte</span>
                                <p className="font-shanti">Freelance</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Année</span>
                                <p className="font-shanti">2025</p>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <CustomLink href="/projects/4"
                                className="box-border border font-shanti rounded-xl"
                                bgWaveColor="bg-whiteprimary"
                                textColor="text-whiteprimary"
                                borderColor="before:border-whiteprimary"
                                BgColor="bg-transparent"
                                hoverTextColor="text-blackprimary">
                                Voir Plus
                            </CustomLink>
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-96 gap-8 xl:gap-9">
                    <div className="z-10 col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative flex items-center justify-center select-none">
                        <div
                            className="relative w-full max-w-[920px] md:w-5/6"
                            style={{ perspective: "1100px", transformStyle: "preserve-3d" }}
                            onMouseMove={handleParallaxMove}
                            onMouseLeave={handleParallaxLeave}
                        >
                            <motion.div
                                className="rounded-xl overflow-hidden"
                                style={{ x: mainX, y: mainY, rotate: mainR, scale: mainScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/larevuedgeek_sample_img.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - evalujeu"
                                    quality={100}
                                    width={2560}
                                    height={1394}
                                    draggable={false}
                                />
                            </motion.div>
                            <motion.div
                                className="absolute -left-5 -bottom-10 w-[72%] sm:w-[68%] md:w-[62%] rounded-xl overflow-hidden"
                                style={{ x: subX, y: subY, rotate: subR, scale: subScale, transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src="/images/larevuedgeek_sample_img_2.png"
                                    className="h-auto w-full object-cover pointer-events-none"
                                    alt="capture d'écran - evalujeu"
                                    quality={100}
                                    width={2560}
                                    height={1413}
                                    draggable={false}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div ref={ref5} initial={{ opacity: 0, y: -50 }} animate={isInView5 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
                    className="flex flex-col mt-8 lg:mt-0 z-0 col-span-1 lg:col-span-5 relative">
                        <BlobCircle gradientId="grad3" className="absolute -bottom-3/24 sm:bottom-0 lg:-bottom-11/24 xl:-bottom-18/24 -right-20/24 lg:-right-3/5 2-5xl:-right-2/5 2xl:-right-15/24 2xl:-bottom-22/24 4xl:-bottom-19/24 4xl:-right-11/24 5xl:-bottom-13/24 5xl:-right-14/24 7xl:-right-10/24 7xl:-bottom-13/24 -z-10 w-750 h-750 lg:w-750 lg:h-750 xl:w-950 xl:h-950 2xl:w-1200 2xl:h-1200 3xl:w-1300 3xl:h-1300 5xl:w-[1400px] 5xl:h-[1400px] 7xl:w-[1800px] 7xl:h-[1800px]" />
                        <BlobCircle gradientId="grad4" className="absolute -bottom-1/4  -right-4/12 hidden lg:block lg:-bottom-20/24 lg:-right-6/12 xl:-right-4/12 xl:-bottom-23/24 3xl:-right-4/12 5xl:-bottom-13/24 5xl:-right-14/24 7xl:-right-9/24 7xl:-bottom-12/24 3xl:w-411 3xl:h-411 5xl:w-[511px] 5xl:h-[511px] -z-10 w-96 h-96" />
                        <h2 className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-rubik font-bold"><span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl block font-bold font-raleway">05.</span>LAREVUED'GEEK</h2>
                        <p className="mt-2">LaRevueD’Geek est un média en ligne dédié à la culture geek et aux nouvelles technologies. Le site propose des articles autour du jeu vidéo, du cinéma, de la littérature et des produits high-tech. L’objectif est de partager des analyses, des tests et des actualités accessibles à tous les passionnés. Le projet met également l’accent sur la découverte d’univers narratifs et d’œuvres marquantes de la pop culture, avec une approche éditoriale personnelle et immersive.</p>
                        <ul className="flex flex-row gap-2 justify-between mt-3">
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Rôle</span>
                                <p className="font-shanti">Full Stack</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Contexte</span>
                                <p className="font-shanti">Freelance</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span className="font-rubik font-bold">Année</span>
                                <p className="font-shanti">2024</p>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <CustomLink href="/projects/5"
                                className="box-border border font-shanti rounded-xl"
                                bgWaveColor="bg-whiteprimary"
                                textColor="text-whiteprimary"
                                borderColor="before:border-whiteprimary"
                                BgColor="bg-transparent"
                                hoverTextColor="text-blackprimary">
                                Voir Plus
                            </CustomLink>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default MyWork;