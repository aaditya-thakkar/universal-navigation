module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    ['./plugins/add-module-exports.js', {
      exclude: ['node_modules/react-navigation', 'node_modules/react-native-tab-view']
    }],
    '@babel/plugin-transform-flow-strip-types',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    ['module-resolver', {
      root: ['./src/components', './src/libs', './src'],
      extensions: ['.js', '.native.js', '.ios.js', '.android.js', '.style.js']
    }],
    '@babel/plugin-transform-exponentiation-operator',
    ['@babel/plugin-transform-spread', {
      loose: true
    }]
  ]
};
