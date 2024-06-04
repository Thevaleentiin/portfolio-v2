import Image from "next/image";

const About = () => {
    return (
        <div className="container">
            <h1 className="uppercase">à Propos</h1>
            <div>
                Salut, je suis Valentin, un explorateur numérique passionné basé à Paris. Diplômé de l'IIM Digital School, mon voyage dans le monde du développement Front-End a commencé au lycée et s'est enrichi à travers diverses expériences professionnelles, 
                de la conception web chez Paris France Parking à la programmation front-end chez ISOBAR. Autodidacte curieux, je suis toujours à l'affût de nouvelles découvertes dans l'univers du web. Ma palette de compétences englobe JavaScript/React, WordPress, PHP, l'intégration de newsletters,
                print Design et framework CSS. Chaque projet est pour moi une aventure, une opportunité d'adapter mes connaissances aux besoins des utilisateurs et de pousser les limites du possible. Découvrez plus sur mon parcours sur mon profil LinkedIn ou plongez dans mon portfolio pour voir ce que la magie du code peut accomplir !
            </div>
            <div className="container">
                <ul className="flex flex-row items-center justify-center">
                    <li>
                        <Image src="/images/react_logo.png" alt="logo React Js" width={55} height={55} />
                    </li>
                    <li>
                        <Image src="/images/react_logo.png" alt="logo React Js" width={55} height={55} />
                    </li>
                    <li>
                        <Image src="/images/react_logo.png" alt="logo React Js" width={55} height={55} />
                    </li>
                    <li>
                        <Image src="/images/react_logo.png" alt="logo React Js" width={55} height={55} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;