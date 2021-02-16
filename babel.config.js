module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './src/assets',
              rootPathPrefix: '@assets/',
            },
            {
              rootPathSuffix: './src/components',
              rootPathPrefix: '@components/',
            },
            {
              rootPathSuffix: './src/database',
              rootPathPrefix: '@database/',
            },
            {
              rootPathSuffix: './src/hooks',
              rootPathPrefix: '@hooks/',
            },
            {
              rootPathSuffix: './src/routes',
              rootPathPrefix: '@routes/',
            },
            {
              rootPathSuffix: './src/screens',
              rootPathPrefix: '@screens/',
            },
            {
              rootPathSuffix: './src/services',
              rootPathPrefix: '@services/',
            },
            {
              rootPathSuffix: './src/styles',
              rootPathPrefix: '@styles/',
            },
            {
              rootPathSuffix: './src/utils',
              rootPathPrefix: '@utils/',
            },
          ],
        },
      ],
    ],
  };
};
