

module.exports = {
  distDir: 'build',
  env: {
    isProd: (process.env.NODE_ENV === 'production') || false,
  },
};
