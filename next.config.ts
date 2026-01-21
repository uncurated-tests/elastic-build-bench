import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate unique build IDs to prevent cache reuse
  generateBuildId: async () => {
    return `build-${Date.now()}-${Math.random().toString(36).substring(7)}`;
  },
  
  // Transpile heavy packages to ensure they're processed
  transpilePackages: [
    '@mui/icons-material',
    '@mui/material',
    'react-icons',
    'lucide-react',
  ],
};

export default nextConfig;
