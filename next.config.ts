import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Mawrid",
  assetPrefix: "/Mawrid/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
