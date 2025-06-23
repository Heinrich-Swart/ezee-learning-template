import { NextConfig } from 'next/dist/server/config';

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
