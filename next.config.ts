// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n/navigation.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elevationng.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  output: "standalone",
  turbopack: {
    root: process.cwd(),
  },
};

export default withNextIntl(nextConfig);