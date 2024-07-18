/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] , typedRoutes: true},
  webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  }
}

module.exports = nextConfig
