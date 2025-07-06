import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "j719z5axyy.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com", // <- This allows pixabay image URLs
      },
    ],
  },
};

export default nextConfig;
