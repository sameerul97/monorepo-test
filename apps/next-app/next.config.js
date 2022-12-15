/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const repoName = '/monorepo-test'

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


// const withTM = require("next-transpile-modules")(["ui"]);
// // "ui": "*"
// // "eslint": "7.32.0",

// // const withTM = require("next-transpile-modules")([]);
// const isProd = process.env.NODE_ENV === 'production'

// const repoName = '/monorepo-test'

// module.exports = withTM({
//   reactStrictMode: true,
//   basePath: isProd ? repoName : '',
//   assetPrefix: isProd ? repoName : '',
//   images: {
//     unoptimized: true,
//   },
// });