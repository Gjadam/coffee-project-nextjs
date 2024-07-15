/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
  },
  images: {
    domains: ['lva4kcfubltuu0k7.public.blob.vercel-storage.com'],
  },
}

module.exports = nextConfig
