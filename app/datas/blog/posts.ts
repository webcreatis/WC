type PostType = {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
  description: string;
  tags: string[];
};

export const posts: PostType[] = [
  {
    title: "Comment activer Fluid Compute sur vercel",
    slug: "activer-fluid-compute-cloud-scalabilite-performance",
    author: "Webcreatis",
    date: "20-05-2025",
    category: "devops",
    thumbnail: "/images/thumbnails/vercel-fluid-compute.webp",
    tags: [
      "activer Fluid Compute sur Vercel",
      "utiliser Fluid Compute avec Next.js",
      "Fluid Compute configuration",
      "optimiser déploiement Vercel Fluid Compute",
      "différence entre Edge Functions et Fluid Compute",
      "hébergement serverless Vercel",
      "hébergement web vercel",
      "avantages Fluid Compute Vercel pour performance web",
      "meilleure méthode pour activer Fluid Compute",
      "performances dynamiques cloud Vercel",
      "serverless computing moderne",
      "enable Fluid Compute Vercel",
      "Vercel Fluid Compute tutorial",
      "dynamic serverless scaling Vercel",
      "Fluid Compute performance boost",
    ],
    description:
      "Fluid Compute par Vercel optimise vos applications avec une allocation dynamique des ressources pour performance, scalabilité et réduction des coûts.",
  },
  {
    title:
      "Pourquoi utiliser Next.js pour n’importe quel projet informatique ?",
    slug: "pourquoi-utiliser-nextjs-pour-votre-projet",
    author: "Webcreatis",
    date: "01-06-2025",
    category: "Framework",
    thumbnail: "/images/thumbnails/pourquoi-nextjs.webp",
    tags: [
      "Next.js framework React",
      "framework JavaScript fullstack",
      "choisir Next.js pour un projet web",
      "Next.js ou React pur",
      "Next.js 15 nouvelles fonctionnalités",
      "optimisation performance Next.js",
      "rendu serveur SSR avec Next.js",
      "génération statique SSG Next.js",
      "ISR Next.js incremental static regeneration",
      "hydration React Next.js",
      "optimisation images WebP Next.js",
      "lazy loading automatique Next.js",
      "code splitting Next.js",
      "SEO optimisé avec Next.js",
      "Next.js et référencement naturel",
      "balises meta dynamiques Next.js",
      "création sitemap avec Next.js",
      "hot reload Next.js",
      "support TypeScript dans Next.js",
      "création API REST avec Next.js",
      "utilisation middleware Edge Next.js",
      "routage dynamique Next.js",
    ],
    description:
      "Next.js est devenu l’un des frameworks les plus populaires pour construire des applications full stack modernes",
  },
];
