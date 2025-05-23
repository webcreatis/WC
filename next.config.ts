import createMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
