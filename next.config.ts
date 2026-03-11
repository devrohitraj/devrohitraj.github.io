import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from the repo name subdirectory unless using a custom domain.
  // If deploying to https://devrohitraj.github.io (user site), basePath is not needed.
  // basePath: '',
};

export default nextConfig;
