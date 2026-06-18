"use client";

// Bascule clair/sombre. L'état affiché repose sur la classe `dark` du <html> (posée avant
// hydratation par le script anti-flash), et les icônes sont gérées en CSS (block/dark:hidden)
// pour ne dépendre d'aucun état React au premier rendu → pas de mismatch d'hydratation.
const ThemeToggle = ({ className = "" }) => {
    const toggle = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        try {
            localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch (e) {
            /* localStorage indisponible : on ignore, la bascule reste effective pour la session */
        }
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Basculer le thème clair/sombre"
            title="Basculer le thème clair/sombre"
            className={`p-2 rounded-full text-blackprimary hover:bg-blackprimary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprimary focus-visible:ring-offset-2 ${className}`}
        >
            {/* Soleil (visible en mode clair) */}
            <svg className="block dark:hidden w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            {/* Lune (visible en mode sombre) */}
            <svg className="hidden dark:block w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        </button>
    );
};

export default ThemeToggle;
