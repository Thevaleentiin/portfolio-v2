import Image from "next/image";

const About = () => {
    return (
        <div id="a-propos" className="w-full bg-whiteprimary relative overflow-hidden">
            {/* <div className="absolute -bottom-1/3 -left-5/12 w-1000 h-1000 rotate-90 bg-gradient-to-r from-blueprimary from-0% via-blueprimary/70 via-65% to-whiteprimary/75 to-100% rounded-full circle"></div>
            <div className="absolute -bottom-87% left-7% w-1000 h-1000 rotate-90 bg-gradient-to-r from-redprimary from-0% via-redprimary/70 via-65% to-whiteprimary/75 to-100% rounded-full circle"></div>
            <div className="absolute -bottom-8/12 -right-1/6 w-1000 h-1000 rotate-90 bg-gradient-to-r from-redprimary from-0% via-redprimary/70 via-65% to-whiteprimary/75 to-100% rounded-full circle"></div>
            <div className="absolute -bottom-3/12 -right-4/12 w-750 h-750 -rotate-45 bg-gradient-to-r from-redprimary from-0% via-redprimary/70 via-65% to-whiteprimary/75 to-100% rounded-full circle"></div>
            <div className="absolute -top-1/12 -left-7% w-64 h-64 bg-gradient-to-b -rotate-180 from-blackprimary from-0% via-blackprimary/50 via-60% to-blackprimary/45 to-100% rounded-full circle"></div> */}
            <div className="container pt-44 pb-44 5xl:px-48">
                <h1 className="uppercase text-redprimary text-6xl lg:text-7xl font-raleway font-extrabold">à Propos</h1>
                <div className="font-shanti w-10/12  xs:w-9/12 md:w-7/12 lg:w-7/12 mx-auto mt-14 leading-relaxed tracking-wide">
                    <span className="text-redprimary font-rubik font-extrabold">Salut,</span>je suis Valentin, un <span className="text-blueprimary font-rubik font-bold">explorateur numérique passionné</span> basé à Paris. Diplômé de l'IIM Digital School, mon voyage dans le monde du développement Front-End a commencé au lycée et s'est enrichi à travers diverses expériences professionnelles, 
                    de la <span className="text-blueprimary font-rubik font-bold">conception web</span> chez Paris France Parking au <span className="text-blueprimary font-rubik font-bold">développement front-end</span> chez ISOBAR. Autodidacte curieux, je suis toujours à l'affût de nouvelles découvertes dans l'univers du web. Ma palette de compétences englobe JavaScript/React, WordPress, PHP, l'intégration de newsletters,
                    print Design et framework CSS. Chaque projet est pour moi une <span className="text-blueprimary font-rubik font-bold">aventure</span>, une opportunité d'adapter mes connaissances aux besoins des utilisateurs et de pousser les limites du possible. Découvrez plus sur mon parcours sur mon profil LinkedIn ou plongez dans mon portfolio pour voir ce que la magie du code peut accomplir !
                </div>
                <div className="container mt-10">
                    <ul className="flex flex-row items-center justify-center gap-6">
                        <li>
                            <Image src="/images/react_logo.png" alt="logo React Js" width={55} height={55} />
                        </li>
                        <li>
                            <Image src="/images/tailwindcss-logo.png" className="" alt="logo TailwindCSS" width={55} height={31} />
                        </li>
                        <li>
                            <Image src="/images/wordpress-logo.png" alt="logo Wordpress" width={55} height={55} />
                        </li>
                        <li>
                            <Image src="/images/git-logo.png" alt="logo Git" width={55} height={55} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;