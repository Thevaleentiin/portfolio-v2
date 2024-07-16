import Button from "../ui/Button";
import CustomLink from "../ui/CustomLink";
import Image from "next/image";
import BlobCircle from "../BlobCircle";

const ProjetHero = ({title, imgHero, idProject}) => {
    return (
        <div className="h-screen relative overflow-hidden">
            <BlobCircle gradientId="grad3" className="absolute z-0 -bottom-4/24 -left-4/12 w-1500 h-1500 rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute z-0 -bottom-13/24 -right-8/24 w-1000 h-1000" />
            <div className="flex flex-col lg:flex-row py-32 lg:py-0 justify-center h-full items-center gap-8">
                <div className="font-raleway basis-full h-auto lg:basis-2/5 lg:pl-8 xl:pl-0 flex flex-col lg:items-center">
                    <div className="z-10 text-center lg:text-left">
                        <p className="font-extrabold text-7xl sm:text-8xl md:text-9xl lg:text-10xl text-whiteprimary">0{idProject}.</p>
                        <p className="font-rubik font-bold uppercase text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-whiteprimary">{title}</p>
                        <CustomLink href="/" className="text-whiteprimary inline-block box-border border border-whiteprimary rounded mt-2 px-10 py-3">
                            Voir le site
                        </CustomLink>
                    </div>
                </div>
                <div className=" basis-full lg:basis-3/5 h-auto z-10 px-5 xs:px-0">
                    <Image src={imgHero} className="w-full h-auto" alt="" width={774} height={606} />
                </div>
            </div>
        </div>
    );
}

export default ProjetHero;