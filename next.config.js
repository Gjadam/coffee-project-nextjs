/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
  },
  images: {
    domains: ['localhost'],
  },
  future: { webpack5: true }
}

module.exports = nextConfig
