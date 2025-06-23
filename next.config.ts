const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/ezee-learning-template" : "",
  assetPrefix: isProd ? "/ezee-learning-template" : "",
};

export default nextConfig;