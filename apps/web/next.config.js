const withTM = require("next-transpile-modules")(["ui"]);
const isProd = process.env.NODE_ENV === 'production'

module.exports = withTM({
  reactStrictMode: true,
  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  images: {
    unoptimized: true,
  },
});
