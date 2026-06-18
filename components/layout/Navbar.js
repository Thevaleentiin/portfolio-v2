"use client";
import { useState } from "react";
import Image from "next/image";
import Menu from "../ui/Menu";
import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center p-4">
                <div>
                    <Link href="/" aria-label="Retour à l'accueil">
                        <Image src="/images/logo_pt.svg" priority alt="" width={51} height={70} sizes="51px" />
                    </Link>
                </div>
                <div className="flex items-center gap-1 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprimary focus-visible:ring-offset-2 rounded"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        <span className="relative w-8 h-8 flex flex-col justify-between items-center">
                            <span className={`block w-8 h-1 bg-black dark:bg-whiteprimary transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block w-8 h-1 bg-black dark:bg-whiteprimary transform transition-transform duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`block w-8 h-1 bg-black dark:bg-whiteprimary transform transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-5" : ""}`} />
                        </span>
                    </button>
                </div>
                <nav className="hidden md:flex items-center gap-2" aria-label="Navigation principale">
                    <Menu />
                    <ThemeToggle />
                </nav>
            </div>
            {isOpen && (
                <nav id="mobile-menu" className="md:hidden absolute top-full left-0 w-full" aria-label="Navigation mobile">
                    <Menu onNavigate={closeMenu} />
                </nav>
            )}
        </header>
    );
};

export default Navbar;
