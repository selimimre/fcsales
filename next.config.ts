import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For static export (Daniel's IIS hosting): run `next build` with output: 'export'
  // For Vercel preview: keep commented out
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export compatibility
  },
};

export default nextConfig;
