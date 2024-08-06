"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const AccessibleMenu = () => {
    const [menuDisplayed, setMenuDisplayed] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleTabPress = (e) => {
            if (e.key === 'Tab') {
                if (menuDisplayed && !menuRef.current.contains(e.target)) {
                    setMenuDisplayed(false);
                } else if (!menuOpened) {
                    setMenuDisplayed(true);
                    setMenuOpened(true);
                }
            }
        };
        document.addEventListener('keydown', handleTabPress);

        return () => {
            document.removeEventListener('keydown', handleTabPress);
        };
    }, [menuDisplayed, menuOpened]);

    const handleMenuItemClick = () => {
        setMenuDisplayed(false);
    };

    const handleMenuItemKeyDown = (e) => {
        if (e.key === 'Enter') {
            setMenuDisplayed(false);
        }
    };

    return (
        <div
            id="accessible-menu"
            role="navigation"
            aria-label="Menu d'accessibilité"
            className={`${menuDisplayed ? 'block' : 'hidden'} absolute top-0 left-0 bg-white border border-gray-300 p-2 z-[60]`}
            ref={menuRef}
        >
            <div className="flex flex-row gap-2 z-[60]">
                <Link href="/#realisations" onClick={handleMenuItemClick} onKeyDown={handleMenuItemKeyDown}>Mes réalisations</Link>
                <Link href="/" onClick={handleMenuItemClick} onKeyDown={handleMenuItemKeyDown}>Menu</Link>
                <Link href="/#say-hi" onClick={handleMenuItemClick} onKeyDown={handleMenuItemKeyDown}>Contact</Link>
                <Link href="/#footerPage" onClick={handleMenuItemClick} onKeyDown={handleMenuItemKeyDown}>Footer</Link>
            </div>
        </div>
    );
};

export default AccessibleMenu;