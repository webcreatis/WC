import type { NextConfig } from "next";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
      {
        // Permet toutes les images dans /public/images/
        // Ajuste le chemin selon ton projet
        pathname: '/images/**',
      },
    ],
  },
};

export default withNextVideo(nextConfig);