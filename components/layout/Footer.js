import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@component/lib/site";

const Footer = () => {
    return (
        <footer id="footerPage" className="flex flex-col sm:flex-row mt-5 sm:mt-0 items-center justify-center sm:justify-between bg-surface min-h-20">
            <div className="flex flex-col sm:flex-row justify-start items-center gap-y-4 sm:gap-y-0 sm:gap-3 sm:ml-6 basis-1/3">
                <Image src="/images/logo_pt.svg" className="w-8" alt="" width={51} height={70} sizes="32px" />
                <p className="font-raleway font-semibold leading-tight">{siteConfig.name}</p>
            </div>
            <hr className="w-1/2 h-0.5 bg-blackprimary mt-5 sm:hidden" />
            <div className="basis-full w-full mb-5 sm:mb-0 sm:w-auto sm:basis-1/3 mt-5 sm:mt-0 text-center">
                <p className="uppercase font-raleway font-bold">Travaillons ensemble</p>
            </div>
            <div className="sm:mr-6 mb-7 sm:mb-0 basis-full sm:basis-1/3">
                <ul className="flex flex-row justify-end gap-3">
                    <li>
                        <Link
                            href={siteConfig.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprimary focus-visible:ring-offset-2 rounded"
                            aria-label="Profil GitHub de Valentin"
                        >
                            <Image src="/images/github-logo.png" className="w-8 dark:invert" alt="" width={32} height={32} sizes="32px" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={siteConfig.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprimary focus-visible:ring-offset-2 rounded"
                            aria-label="Profil LinkedIn de Valentin"
                        >
                            <Image src="/images/linkedin-logo.png" className="w-8" alt="" width={32} height={32} sizes="32px" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
