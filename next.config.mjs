/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages. Remove `basePath` when deploying
  // to a root domain (Vercel / custom domain).
  output: 'export',
  basePath: '/property-management',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig