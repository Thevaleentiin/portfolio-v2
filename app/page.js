import Image from "next/image";
import HeroSection from "@component/components/sections/HeroSection";
import MyWork from "@component/components/sections/MyWork";
import About from "@component/components/sections/About";
import Contact from "@component/components/sections/Contact";

export default function Home() {
    return (
        <>
            <HeroSection />
            <MyWork />
            <About />
            <Contact />
        </>
    )
}
