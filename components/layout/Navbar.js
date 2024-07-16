"use client";
import { useState } from 'react';
import Image from 'next/image';
import Menu from "../ui/Menu"; // Assurez-vous d'importer le composant Menu
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center p-4">
                <div>
                    <Link href="/">
                        <Image src="/images/logo_pt.svg" priority alt="Logo" width={51} height={70} />
                    </Link>
                </div>
                <div className="md:hidden" onClick={toggleMenu}>
                    <div className={`relative w-8 h-8 flex flex-col justify-between items-center cursor-pointer`}>
                        <span className={`block w-8 h-1 bg-black transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-8 h-1 bg-black transform transition-transform duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-1 bg-black transform transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-5' : ''}`}></span>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <Menu />
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full">
                    <Menu />
                </div>
            )}
        </div>
    );
}

export default Navbar;
