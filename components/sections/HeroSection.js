import ScrollBtn from "../ui/ScrollBtn";
import BlobCircle from "../BlobCircle";

const HeroSection = () => {
    return (
        <div className="flex w-full h-screen justify-center items-center relative overflow-hidden">
            <BlobCircle gradientId="grad1" className="absolute  -bottom-9/24 xsmall:-bottom-10/24 xxs:-bottom-12/24 xs:-bottom-6/24 sm:-bottom-6/24 md:-bottom-1/3 -left-18/24 sm:-left-17/24 md:-left-13/24 lg:-left-1/3 4xl:-left-6/24 4xl:-bottom-7/24 7xl:-left-5/24 -z-10 w-500 h-500 xsmall:w-750 xsmall:h-750 sm:w-750 sm:h-750 lg:w-1000 lg:h-1000 5xl:w-1200 5xl:h-1200 rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-10/24 xsmall:-bottom-11/24 sm:-bottom-18/24 md:-bottom-87% left-4/12 sm:left-4/12 md:left-7% 3xl:-bottom-17/24 4xl:-bottom-18/24 -z-10 w-500 h-500 xsmall:w-750 xsmall:h-750 sm:w-1000 sm:h-1000 5xl:w-1200 5xl:h-1200 rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-7/12 hidden lg:block -right-1/6 4xl:-right-3/24 -z-20 w-1000 h-1000 4xl:w-1200 4xl:h-1200 rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute -top-18/24 xxs:-top-6/12 -right-21/24 xs:-top-6/12 xs:-right-7/12 sm:-top-4/12 sm:-right-7/12  md:-top-3/12 md:-right-6/12 lg:-top-3/12 lg:-right-2/12 -z-30  w-750 h-750 md:w-750 md:h-750 lg:w-1000 lg:h-1000 5xl:w-1200 5xl:h-1200 hidden xxs:block rotate-45" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-1/12 hidden lg:block -right-30 4xl:-right-5/24 z-0 w-750 h-750 5xl:w-950 5xl:h-950 rotate-45" />
            <div className="flex flex-col z-50">
                <h1 className="uppercase font-raleway font-extrabold flex flex-col justify-start">
                    <div className="text-redprimary text-base sm:text-base md:text-xl lg:text-4xl flex flex-row justify-evenly items-center">
                        <div className="basis-9/12 sm:basis-9/12 md:basis-8/12 lg:basis-7/12">Hello je m'appelle</div>
                        <div className="basis-3/12 sm:basis-3/12 md:basis-4/12 lg:basis-5/12 h-1 w-full bg-blueprimary relative flex items-center">
                            <div className="w-2 h-2 md:w-4 md:h-4 rounded-full absolute right-0 bg-redprimary"></div>
                        </div>
                    </div>
                    <p className="text-blackprimary text-5xl sm:text-5xl md:text-7xl lg:text-9xl">Valentin</p>
                </h1>
                <p className="uppercase self-end font-extrabold sm:text-lg md:text-xl lg:text-2xl">Développeur<span className="text-blueprimary font-extrabold block">Front-End</span></p>
            </div>
            <ScrollBtn />
        </div>
    );
}

export default HeroSection;