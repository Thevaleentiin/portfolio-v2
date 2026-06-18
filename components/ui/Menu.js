import Link from "next/link";

const linkClass = "uppercase py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprimary focus-visible:ring-offset-2 rounded";

const Menu = ({ onNavigate }) => {
    return (
        <div className="p-4">
            <ul className="flex flex-col items-end md:flex-row md:gap-5 font-raleway font-bold">
                <li>
                    <Link href="/#realisations" className={linkClass} onClick={onNavigate}>
                        Mes Réalisations
                    </Link>
                </li>
                <li>
                    <Link href="/#a-propos" className={linkClass} onClick={onNavigate}>
                        à propos
                    </Link>
                </li>
                <li>
                    <Link href="/#say-hi" className={linkClass} onClick={onNavigate}>
                        👋 Faites-moi signe
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
