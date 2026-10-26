import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Pin the app root so a stray lockfile in the repo root can't make Turbopack resolve packages from there.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
