const withTM = require("next-transpile-modules")(["ui"]);
// "ui": "*"
// "eslint": "7.32.0",

// const withTM = require("next-transpile-modules")([]);
const isProd = process.env.NODE_ENV === 'production'

module.exports = withTM({
  reactStrictMode: true,
  basePath: isProd ? '/monorepo-test' : '',
  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  images: {
    unoptimized: true,
  },
});
