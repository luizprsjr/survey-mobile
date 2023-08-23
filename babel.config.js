module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@main': './src/main',
            '@domain': './src/domain',
            '@presentation': './src/presentation',
            '@data': './src/screens',
            '@infra': './src/infra',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  }
}
