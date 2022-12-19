/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/blog",
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
};

module.exports = nextConfig;
