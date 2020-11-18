const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      'components': path.resolve(__dirname, 'src/components'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'static': path.resolve(__dirname, 'src/static'),
      'types': path.resolve(__dirname, 'src/types'),
    },
  };
return config;
};
