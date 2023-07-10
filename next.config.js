module.exports = {
  output: 'export',
  basePath: '/next-hydration-error-example',
  webpack: (config) => {
    config.optimization.minimize = false
    return config
  },
}
