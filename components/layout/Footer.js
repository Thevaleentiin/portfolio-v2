import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div id="footerPage" className="flex flex-col sm:flex-row mt-5 sm:mt-0 items-center justify-center sm:justify-between bg-white min-h-20">
            <div className="flex flex-col sm:flex-row justify-start items-center gap-y-4 sm:gap-y-0 sm:gap-3 sm:ml-6 basis-1/3">
                <Image src="/images/logo_pt.svg" className="w-8" alt="Logo" width={51} height={70} />
                <p className="font-raleway font-semibold leading-tight">Valentin Kahn-Barberon</p>
            </div>
            <hr className="w-1/2 h-0.5 bg-blackprimary mt-5 sm:hidden" />
            <div className="basis-full w-full mb-5 sm:mb-0 sm:w-auto sm:basis-1/3 mt-5 sm:mt-0 text-center">
                <p className="uppercase font-raleway font-bold">Travaillons ensemble 💻</p>
            </div>
            <div className="sm:mr-6 mb-7 sm:mb-0 basis-full sm:basis-1/3">
                <ul className="flex flex-row justify-end gap-3">
                    <li className="">
                        <Link href="https://www.codeur.com/-valentinkahn" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/codeur-logo.png" className="w-8" alt="codeur logo" width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/Thevaleentiin" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/github-logo.png" className="w-8" alt="github logo" width={32} height={32} />
                        </Link>
                    </li>
                    <li className="">
                        <Link href="https://www.linkedin.com/in/valentin-kahn-barberon/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/linkedin-logo.png" className="w-8" alt="linkedin logo" width={32} height={32} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;