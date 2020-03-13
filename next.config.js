const isProd = process.env.NODE_ENV === 'production' || false;
const prefix = isProd ? '/flux' : '';

module.exports = {
  distDir: 'build',
  assetPrefix: prefix,
  env: { isProd, prefix },
};
