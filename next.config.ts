import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "standalone", // Temporary commented
  output: "export",
  distDir: "dist",
};

export default nextConfig;
