import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "polaracademy.in",
      },
    ],
  },
};

export default nextConfig;
