/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
  },
  images: {
    images: {
      // limit of 25 deviceSizes values
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      // limit of 25 imageSizes values
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      // limit of 50 domains values (deprecated)
      domains: ['localhost'],
      // path prefix for Image Optimization API, useful with `loader`
      path: '/_next/image',
      // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
      loader: 'default',
      // file with `export default function loader({src, width, quality})`
      loaderFile: '',
      // disable static imports for image files
      disableStaticImages: false,
      // minimumCacheTTL is in seconds, must be integer 0 or more
      minimumCacheTTL: 60,
      // ordered list of acceptable optimized image formats (mime types)
      formats: ['image/webp'],
      // enable dangerous use of SVG images
      dangerouslyAllowSVG: false,
      // set the Content-Security-Policy header
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      // sets the Content-Disposition header (inline or attachment)
      contentDispositionType: 'inline',
      // limit of 50 objects
      remotePatterns: [],
      // when true, every image will be unoptimized
      unoptimized: false,
    },
  },
}

module.exports = nextConfig
