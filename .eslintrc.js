module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:jsx-a11y/recommended',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'react-native',
    'standard',
    'standard-jsx',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  plugins: [
    'react',
    'react-native',
    'flowtype',
    'prettier',
    'jsx-a11y',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: false,
        jsxBracketSameLine: false,
        parser: 'flow',
        semi: false,
        singleQuote: true,
        trailingComma: 'all'
      }
    ]
  },
  globals: {
    describe: true,
    test: true,
    jest: true,
    expect: true,
    fetch: true,
    navigator: true,
    __DEV__: true,
    XMLHttpRequest: true,
    FormData: true,
    React$Element: true
  }
};
