/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Qualités autorisées pour <Image quality={...}>
    // 75 = qualité par défaut de Next, 100 = pleine qualité que tu utilises dans tes composants
    qualities: [75, 100],
  },
};

export default nextConfig;
