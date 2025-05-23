type PostType = {
  title: string;
  link: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
  description: string;
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
    description:
      "Fluid Compute par Vercel optimise vos applications avec une allocation dynamique des ressources pour performance, scalabilité et réduction des coûts.",
  },
];
