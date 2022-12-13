const withTM = require("next-transpile-modules")(["ui"]);
const isProd = process.env.NODE_ENV === 'production'

const repoName = '/monorepo-test'

module.exports = withTM({
  reactStrictMode: true,
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
  images: {
    unoptimized: true,
  },
});
