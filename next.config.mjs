/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [new URL(process.env.ASSETS_BASE_URL).hostname],
  },
};

export default nextConfig;
