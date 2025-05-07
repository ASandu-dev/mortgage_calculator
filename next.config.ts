const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/mortgage_calculator' : '',
  assetPrefix: isProd ? '/mortgage_calculator/' : '',
  output: 'export',
};

export default nextConfig;