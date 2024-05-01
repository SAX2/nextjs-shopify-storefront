/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.stussy.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
