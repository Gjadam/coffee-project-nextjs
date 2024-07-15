/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
  },
  images: {
    domains: ["vercel.com", "localhost"],
  },
}

module.exports = nextConfig
