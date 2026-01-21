import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const nextConfig: NextConfig = {
  // Generate unique build IDs to prevent cache reuse
  generateBuildId: async () => {
    return `build-${Date.now()}-${Math.random().toString(36).substring(7)}`;
  },
  
  // Configure MDX support
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  // Transpile heavy packages to ensure they're processed
  transpilePackages: [
    '@mui/icons-material',
    '@mui/material',
    'react-icons',
    'lucide-react',
  ],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});

export default withMDX(nextConfig);
