import Link from "next/link";

const ScrollBtn = () => {
    return (
        <Link
            href="/#realisations"
            className="absolute bottom-0 flex flex-col justify-center items-center mx-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprimary focus-visible:ring-offset-2 rounded"
            aria-label="Défiler vers les réalisations"
        >
            <span className="text-center font-shanti text-sm" aria-hidden="true">Scroll</span>
            <span className="w-0.5 h-16 bg-blueprimary" aria-hidden="true" />
        </Link>
    );
};

export default ScrollBtn;
