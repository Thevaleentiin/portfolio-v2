# Portfolio Valentin Kahn-Barberon

Portfolio personnel construit avec **Next.js 16**, **React 18**, **Tailwind CSS** et **Framer Motion**.

## Fonctionnalités

- Page d'accueil avec sections Hero, Projets, À propos et Contact
- Pages projet statiques (`/projects/[id]`) avec SEO et Open Graph
- Formulaire de contact via API Nodemailer
- Animations au scroll et blobs décoratifs
- Menu d'accessibilité clavier et bonnes pratiques a11y

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 18
- [Tailwind CSS](https://tailwindcss.com/) 3.4
- [Framer Motion](https://www.framer.com/motion/) 11
- [Nodemailer](https://nodemailer.com/) (API contact)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Voir [`.env.example`](.env.example) pour la liste complète.

## Assets requis

Les images du portfolio doivent être placées dans `public/images/`. Fichiers attendus :

- `logo_pt.svg`, logos stack (react, tailwind, wordpress, git, etc.)
- Captures d'écran home : `evalujeu_sample_img.png`, `ecarmotors-sample_img.png`, etc.
- Dossier `public/images/projetPage/` : heroes et maquettes par projet
- CV PDF : `public/cv-valentin-kahn-barberon.pdf`

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Lint Next.js |

## Structure

```
app/           # Routes App Router
components/    # Composants React
lib/           # Données (projets, config site)
public/        # Assets statiques
```
