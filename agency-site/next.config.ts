import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces plain static HTML/CSS/JS in ./out on `npm run build`, so the
  // site can be hosted on any static file host without running Node.
  output: "export",
};

export default nextConfig;
