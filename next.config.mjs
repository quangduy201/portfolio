/** @type {import('next').NextConfig} */
const assetsUrl = process.env.ASSETS_BASE_URL
  ? new URL(process.env.ASSETS_BASE_URL)
  : undefined;

const nextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: assetsUrl
      ? [
          {
            protocol: assetsUrl.protocol.replace(":", ""),
            hostname: assetsUrl.hostname,
            port: assetsUrl.port,
            pathname: "/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
