// app/layout.js
import { Raleway, Shanti, Rubik } from 'next/font/google';
import "./globals.css";
import Navbar from "@component/components/layout/Navbar";
import Footer from "@component/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import AccessibleMenu from '@component/components/accessibility/AccessibleMenu';
import { siteConfig } from "@component/lib/site";

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const shanti = Shanti({ subsets: ['latin'], variable: '--font-shanti', weight: '400' });
const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};


const bodyFontVariables = [
  raleway.variable,
  shanti.variable,
  rubik.variable,
].join(' ');

// Applique le thème avant la peinture pour éviter tout flash (lit localStorage, sinon préférence système).
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning requis : themeInitScript pose la classe `dark` sur <html> avant
    // l'hydratation, ce qui rend l'attribut `class` côté client différent du rendu serveur.
    <html lang="fr" suppressHydrationWarning>
      {/* suppressHydrationWarning : certaines extensions navigateur injectent des attributs sur
          <body> (ex. cz-shortcut-listen) avant l'hydratation → mismatch bénin, à ignorer. */}
      <body
        className={`${bodyFontVariables} bg-surface text-blackprimary w-full`}
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <main className='w-full'>
          <AccessibleMenu />
          <Navbar />
          {children}
          <Footer />
          <SpeedInsights />
          <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
            <svg width="0" height="0">
              <defs>
                {/* Blue */}
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "var(--blob-blue-1)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "var(--blob-blue-2)", stopOpacity: 1 }} />
                </linearGradient>
                {/* Red */}
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "var(--blob-red-1)", stopOpacity: 0.9 }} />
                  <stop offset="60%" style={{ stopColor: "var(--blob-red-2)", stopOpacity: 0.9}} />
                  <stop offset="100%" style={{ stopColor: "var(--blob-red-3)", stopOpacity: 0.9 }} />
                </linearGradient>
                {/* Blue to blue */}
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "var(--blob-bluedeep-1)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "var(--blob-bluedeep-2)", stopOpacity: 1 }} />
                </linearGradient>
                {/* White */}
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "var(--blob-soft-1)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "var(--blob-soft-2)", stopOpacity: 0.7 }} />
                </linearGradient>
                <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "var(--blob-dark-1)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "var(--blob-dark-2)", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                  <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </main>
      </body>
    </html>
  );
}
