"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProjectAbout = ({imgAbout, fontTitle, fontText, imgAbout2, colors}) => {

    const imgRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('auto');

    useEffect(() => {
        const handleImageLoad = () => {
            if (imgRef.current) {
                console.log(imgRef.current)
                const imageHeight = imgRef.current.clientHeight;
                setMaxHeight(`${imageHeight - 250}px`);
            }
        };
    
        if (imgRef.current) {
            imgRef.current.addEventListener('load', handleImageLoad);
            return () => imgRef.current.removeEventListener('load', handleImageLoad);
        }
    }, [maxHeight]);
    
    const colorsListBubble = colors.map((color, index) => {
        const style = {
            width: '6rem',
            height: '6rem',
            borderRadius: '50%',
            backgroundColor: color.startsWith('#') ? color : `#${color}`,
        };
        return (
            <li key={index} className="ColorBubble" style={style}></li>
        );
    });



    return (
        <div className="w-full">
            {/* Section 1 */}
            <div className="w-full bg-whiteprimary pb-0">
                <div className="container h-auto" style={{ maxHeight: maxHeight }} >
                    <Image src={imgAbout} className="w-4/5 -translate-y-28 mx-auto h-auto" alt="" ref={imgRef} width={774} height={606} />
                </div>
            </div>
            {/* Section 2 */}
            <div className="w-full bg-blacksecondary text-whiteprimary pt-56 pb-56">
                <div className="container">
                    <div className="w-20/24 xxs:w-18/24 sm:w-3/5 mx-auto">
                        <h2 className="font-rubik text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold">Typographie</h2>
                        <div className="flex flex-col justify-start items-center">
                            <div className="w-full">
                                <p className={`text-lg pt-6 capitalize ${fontTitle === 'changa-one' ? 'font-changa_one' : 'font-cantarell'}`}>{fontTitle} - Titre</p>
                                <p className={`text-4xl font-bold ${fontTitle === 'changa-one' ? 'font-changa_one' : 'font-cantarell'} `} >The quick brown fox jumps over the lazy dog</p>
                            </div>
                            <div className="w-full">
                                <p className={`text-lg capitalize ${fontText === 'assistant' ? 'font-assistant' : 'font-montserrat'}`}>{fontText} - Texte</p>
                                <p className={`text-4xl ${fontText === 'assistant' ? 'font-assistant' : 'font-montserrat'}`}>The quick brown fox jumps over the lazy dog</p>
                            </div>
                        </div>
                        <div className="mt-16">
                            <h2 className="font-rubik text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold mb-6">Couleurs utilisées</h2>
                            <ul className="flex flex-row justify-start items-center gap-3 xxs:gap-5 xs:gap-8 sm:gap-10">
                                {colorsListBubble}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 3 */}
            <div className="w-full bg-whiteprimary">
                <div className="container">
                    <Image src={imgAbout2} className="w-4/5 -translate-y-28 mx-auto h-auto" alt="" width={774} height={606} />
                </div>
            </div>
        </div>
    );
}

export default ProjectAbout;