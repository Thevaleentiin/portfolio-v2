"use client";
import Image from "next/image";
import Button from "../ui/Button";
import CustomLink from "../ui/CustomLink";
import BlobCircle from "../BlobCircle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MyWork = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const isInView = useInView(ref, { once: true });
    const isInView2 = useInView(ref2, { once: true });

    return (
        <div id="realisations" className="w-full bg-redprimary text-white overflow-hidden">
            <div className="container pt-56 pb-64 lg:pb-80 xl:pb-96 5xl:px-48 5xl:pb-96 7xl:pb-[700px]">
                <h1 className="uppercase text-6xl lg:text-7xl font-raleway font-bold">Mon Travail</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-56 gap-8 xl:gap-9">
                    <div className="flex flex-col z-10 items-center justify-center col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative">
                        <Image src="/images/evalujeu_sample_img.png" className="h-auto md:w-5/6 object-contain" alt="capture d'écran - evalujeu" quality={100} width={2560} height={1394} />
                        <Image src="/images/evalujeu_sample_img_2.png" className="w-13/24 7xl:w-10/24 7xl:left-1 -left-4 xsmall:-left-5 xs:-left-6 md:left-0 h-auto object-cover absolute -bottom-4/24 self-start" alt="capture d'écran - evalujeu" quality={100} width={2560} height={1413} />
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
                    <div className="flex flex-col z-10 lg:order-2 items-center justify-center col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative">
                        <Image src="/images/ecarmotors-sample_img.png" className="h-auto md:w-5/6 object-contain" alt="capture d'écran - ecarmotors" quality={100} width={2560} height={1794} />
                        <Image src="/images/ecarmotors-sample_img_1.png" className="w-13/24 7xl:w-10/24 7xl:left-16 -left-4 xsmall:-left-5 xs:-left-6 md:left-0 h-auto object-cover absolute -bottom-4/24 self-start" alt="capture d'écran - ecarmotors" quality={100} width={2560} height={960} />
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
            </div>
        </div>
    );
}

export default MyWork;