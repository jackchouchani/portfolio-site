let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
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
  },
  experimental: {
    webpackBuildWorker: true,
    // Désactiver ces options qui peuvent causer le problème VAR_ORIGINAL_PATHNAME
    // parallelServerBuildTraces: true,
    // parallelServerCompiles: true,
    ppr: false
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
