import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
            <p className="font-raleway text-8xl font-extrabold text-redprimary">404</p>
            <h1 className="mt-4 font-rubik text-2xl font-bold text-blackprimary">Page introuvable</h1>
            <p className="mt-2 font-shanti text-blackprimary/70">
                Ce projet n&apos;existe pas ou a été déplacé.
            </p>
            <Link
                href="/"
                className="mt-8 rounded-xl border-2 border-blueprimary px-8 py-3 font-shanti text-blueprimary transition-colors hover:bg-blueprimary hover:text-whiteprimary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprimary focus-visible:ring-offset-2"
            >
                Retour à l&apos;accueil
            </Link>
        </div>
    );
}
