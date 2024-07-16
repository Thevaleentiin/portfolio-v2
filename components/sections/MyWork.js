import Image from "next/image";
import Button from "../ui/Button";
import CustomLink from "../ui/CustomLink";
import BlobCircle from "../BlobCircle";

const MyWork = () => {
    return (
        <div id="realisations" className="w-full bg-redprimary text-white overflow-hidden">
            <div className="container pt-56 pb-64">
                <h1 className="uppercase text-6xl lg:text-7xl font-raleway font-bold">Mon Travail</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-56 gap-8 xl:gap-0">
                    <div className="flex flex-col z-10 items-center justify-center col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative">
                        <Image src="/images/project_sample_img.png" className="h-auto object-cover" alt="sample img from projects" width={650} height={550} />
                        <Image src="/images/project_sample_img_2.png" className="w-13/24 -left-4 xsmall:-left-5 xs:-left-6 md:left-0 h-auto object-cover absolute -bottom-4/24 self-start" alt="sample img from projects" width={650} height={550} />
                    </div>
                    <div className="flex flex-col mt-8 lg:mt-0 z-0 col-span-1 lg:col-span-5 relative">
                        <BlobCircle startColor="#2274A5" endColor="#1e6894" gradientId="grad3" className="absolute -bottom-3/24 sm:bottom-0 lg:-bottom-3/24 -right-20/24 lg:-right-7/24 -z-10 w-750 h-750 lg:w-750 lg:h-750 xl:w-950 xl:h-950" />
                        <BlobCircle startColor="#F4F7F5" endColor="#dbdedc" gradientId="grad4" className="absolute -bottom-1/4  -right-4/12 hidden lg:block lg:-bottom-9/24 lg:-right-6/12 xl:-right-4/12 -z-10 w-96 h-96" />
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
                            <CustomLink href="/projects/1" className="box-border border font-shanti border-whiteprimary text-whiteprimary rounded px-10 py-3">
                                Voir Plus
                            </CustomLink>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-32 lg:mt-72 gap-8 xl:gap-0 ">
                    <div className="flex flex-col z-10 lg:order-2 items-center justify-center col-span-1 lg:col-span-7 mb-20 lg:mb-0 relative">
                        <Image src="/images/ecarmotors-sample_img.png" className="h-auto object-cover" alt="sample img from projects" width={650} height={550} />
                        <Image src="/images/ecarmotors-sample_img_1.png" className="w-13/24 -left-4 xsmall:-left-5 xs:-left-6 md:left-0 h-auto object-cover absolute -bottom-4/24 self-start" alt="sample img from projects" width={650} height={550} />
                    </div>
                    <div className="flex flex-col mt-8 lg:order-1 md:mt-0 z-0 col-span-1 lg:col-span-5 relative">
                        <BlobCircle gradientId="grad3" className="absolute -bottom-3/24 sm:bottom-0 lg:-bottom-3/24 -left-20/24 lg:-left-7/24 -z-10 w-750 h-750 lg:w-750 lg:h-750 xl:w-950 xl:h-950 rotate-180" />
                        <BlobCircle gradientId="grad4" className="absolute -bottom-1/4  -left-4/12 hidden lg:block lg:-bottom-9/24 lg:-left-6/12 xl:-left-4/12 -z-10 w-96 h-96 rotate-180" />
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
                            <CustomLink href="/projects/2" className="box-border border font-shanti border-whiteprimary text-whiteprimary rounded px-10 py-3">
                                Voir Plus
                            </CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyWork;