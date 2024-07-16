import Link from 'next/link';

const Menu = () => {
    return (
        <div className="p-4">
            <ul className="flex flex-col items-end md:flex-row md:gap-5 font-raleway font-bold">
                <li className="uppercase py-2">
                    <Link href="/#realisations">Mes Réalisations</Link>
                </li>
                <li className="uppercase py-2">
                    <Link href="/#a-propos">à propos</Link>
                </li>
                <li className="uppercase py-2">
                    <Link href="/#say-hi">👋 Faites-moi signe</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;



