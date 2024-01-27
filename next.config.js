/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "place-hold.it"
      }
    ],
  }
};

module.exports = nextConfig;
