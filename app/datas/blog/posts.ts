type PostType = {
  title: string;
  link: string;
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
    link: "fluid-compute",
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
];
