/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove these if they're causing issues
  // assetPrefix: '',
  // basePath: ''
}

module.exports = nextConfig 