import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qwqiwbomnlyiazidvkew.supabase.co',
        pathname: '/storage/v1/object/**',
      },
    ],
  },
};

export default nextConfig;
