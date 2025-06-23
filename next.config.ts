import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/ezee-learning-template",
  assetPrefix: "/ezee-learning-template",
};

export default nextConfig;
