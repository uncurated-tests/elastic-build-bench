import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable all caching for accurate benchmark measurements
  experimental: {
    // Disable incremental cache
    isrMemoryCacheSize: 0,
  },
  // Generate unique build IDs to prevent cache reuse
  generateBuildId: async () => {
    return `build-${Date.now()}-${Math.random().toString(36).substring(7)}`;
  },
};

export default nextConfig;
