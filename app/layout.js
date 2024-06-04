import { Inter, Raleway, Shanti, Rubik } from 'next/font/google';
import "./globals.css";
import Navbar from "@component/components/layout/Navbar";
import Footer from "@component/components/layout/Footer";

const inter = Inter({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const shanti = Shanti({ subsets: ['latin'], variable: '--font-shanti', weight: '400' });
const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata = {
  title: "Valentin Kahn-Barberon - Portfolio",
  description: "Portfolio Développeur Web front-end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${raleway.variable} ${shanti.variable} ${rubik.variable} bg-white`}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
        </body>
    </html>
  );
}
