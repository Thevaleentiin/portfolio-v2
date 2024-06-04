import Image from "next/image";
import Button from "../ui/Button";

const MyWork = () => {
    return (
        <div className="w-full bg-redprimary text-white">
            <div className="lg:px-9 pt-44 pb-44">
                <h1 className="uppercase lg:text-7xl font-raleway font-bold">Mon Travail</h1>
                <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 lg:mt-12">
                    <div className="flex flex-col items-center justify-center col-span-7 sm:col-span-7 md:col-span-7 lg:col-span-7">
                        <Image src="/images/project_sample_img.png" className="h-auto object-cover" alt="sample img from projects" width={650} height={550} />
                        <Image src="/images/project_sample_img_2.png" className="w-1/2 h-auto object-cover lg:mb-0 lg:-mt-72 self-start" alt="sample img from projects" width={650} height={550} />
                    </div>
                    <div className="flex flex-col col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-5">
                        <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-rubik font-bold"><span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl block font-bold font-raleway">01.</span> EVALUJEU</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque quis quod, dolores consequatur ipsam possimus aut eum quaerat labore nemo omnis?
                        Aperiam atque exercitationem illo numquam provident aspernatur optio.</p>
                        <ul className="flex flex-row gap-2 justify-between">
                            <li className="flex flex-col justify-center items-center">
                                <span>Rôle</span>
                                <p>Front-end</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span>Contexte</span>
                                <p>Agence Digitale</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <span>Année</span>
                                <p>2022</p>
                            </li>
                        </ul>
                        <Button text="Voir Plus" color="primary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyWork;