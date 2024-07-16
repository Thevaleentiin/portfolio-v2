// app/layout.js
import { Inter, Raleway, Shanti, Rubik, Changa_One, Assistant, Cantarell, Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "@component/components/layout/Navbar";
import Footer from "@component/components/layout/Footer";

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
      <body className={`${inter.variable} ${raleway.variable} ${shanti.variable} ${rubik.variable} ${assistant.variable} ${cantarell.variable} ${montserrat.variable} ${Changa_one.variable} bg-white`}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
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
      </body>
    </html>
  );
}
