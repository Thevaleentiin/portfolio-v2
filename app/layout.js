// app/layout.js
import { Inter, Raleway, Shanti, Rubik, Changa_One, Assistant, Cantarell, Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "@component/components/layout/Navbar";
import Footer from "@component/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import AccessibleMenu from '@component/components/accessibility/AccessibleMenu';

const inter = Inter({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const shanti = Shanti({ subsets: ['latin'], variable: '--font-shanti', weight: '400' });
const Changa_one = Changa_One({ subsets: ['latin'], variable: '--font-Changa-one', weight: '400' });
const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });
const assistant = Assistant({ subsets: ['latin'], variable: '--font-assistant' });
const cantarell = Cantarell({ subsets: ['latin'], variable: '--font-cantarell', weight: '700' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: "Valentin Kahn-Barberon - Portfolio",
  description: "Portfolio Développeur Web front-end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${raleway.variable} ${shanti.variable} ${rubik.variable} ${assistant.variable} ${cantarell.variable} ${montserrat.variable} ${Changa_one.variable} bg-white w-full`}>
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
                  <stop offset="0%" style={{ stopColor: "#2274A5", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#F4F7F5", stopOpacity: 1 }} />
                </linearGradient>
                {/* Red */}
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#E03B36", stopOpacity: 0.9 }} />
                  <stop offset="60%" style={{ stopColor: "#ec8986", stopOpacity: 0.9}} />
                  <stop offset="100%" style={{ stopColor: "#F4F7F5", stopOpacity: 0.9 }} />
                </linearGradient>
                {/* Blue to blue */}
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#2274A5", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#1e6894", stopOpacity: 1 }} />
                </linearGradient>
                {/* White */}
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#F4F7F5", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#f5f7f6", stopOpacity: 0.7 }} />
                </linearGradient>
                <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#232020", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#F4F7F5", stopOpacity: 1 }} />
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
