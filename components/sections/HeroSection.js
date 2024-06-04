import ScrollBtn from "../ui/ScrollBtn";

const HeroSection = () => {
    return (
        <div className="flex w-full h-screen justify-center items-center relative">
            <div className="flex flex-col">
                <h1 className="uppercase font-raleway font-extrabold flex flex-col justify-start">
                    <div className="text-redprimary sm:text-xl md:text-2xl lg:text-4xl flex flex-row justify-evenly items-center">
                        <div className="basis-7/12">Hello je m'appelle</div>
                        <div className=" basis-5/12 h-1 w-full bg-blueprimary relative flex items-center">
                            <div className="w-4 h-4 rounded-full absolute right-0 bg-redprimary"></div>
                        </div>
                    </div>
                    <p className="text-blackprimary sm:text-5xl md:text-7xl lg:text-9xl">Valentin</p>
                </h1>
                <p className="uppercase self-end font-extrabold sm:text-lg md:text-xl lg:text-2xl">Développeur<span className="text-blueprimary font-extrabold block">Front-End</span></p>
            </div>
            <ScrollBtn />
        </div>
    );
}

export default HeroSection;