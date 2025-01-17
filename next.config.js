/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This ensures CSS is extracted into static files
  output: 'export',
  // Since we're doing static export, we need to disable image optimization
  images: {
    unoptimized: true
  },
  // Add this to ensure proper asset handling
  assetPrefix: '',
  basePath: ''
}

module.exports = nextConfig 