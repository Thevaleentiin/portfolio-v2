// Polices spécifiques aux pages projet (utilisées par ProjectAbout via fontTitle/fontText).
// Chargées uniquement sur la route /projects/[id] pour alléger la page d'accueil.
import { Inter, Changa_One, Assistant, Cantarell, Montserrat, Josefin_Sans, Open_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const changaOne = Changa_One({ subsets: ['latin'], variable: '--font-Changa-one', weight: '400' });
const assistant = Assistant({ subsets: ['latin'], variable: '--font-assistant' });
const cantarell = Cantarell({ subsets: ['latin'], variable: '--font-cantarell', weight: '700' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const josefinSans = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin-sans' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

const projectFontVariables = [
  inter.variable,
  changaOne.variable,
  assistant.variable,
  cantarell.variable,
  montserrat.variable,
  josefinSans.variable,
  openSans.variable,
].join(' ');

export default function ProjectLayout({ children }) {
  return <div className={projectFontVariables}>{children}</div>;
}
