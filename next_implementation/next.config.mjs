/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "80",
      },
    ],
  },
};

export default nextConfig;
