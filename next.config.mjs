/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  images: {
    domains: ['webwizardry.fr', 'imagedelivery.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webwizardry.fr',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    webpackBuildWorker: true,
    optimizeCss: true,
    ppr: false
  },
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 10,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            reuseExistingChunk: true,
          },
          common: {
            name: 'commons',
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          }
        },
      };
      
      config.optimization.chunkIds = 'deterministic';
    }
    
    return config;
  },
}

export default nextConfig
