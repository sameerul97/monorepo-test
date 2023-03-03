/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const repoName = '/monorepo-test/next'

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig