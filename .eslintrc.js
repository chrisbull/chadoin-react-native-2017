module.exports = {
  parser: 'babel-eslint',
  plugins: ['standard', 'react', 'react-native', 'flowtype', 'prettier'],
  extends: [
    'standard',
    'standard-jsx',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-spacing': [2, 'always'],
    'react/forbid-component-props': [0],
    'react/jsx-max-props-per-line': [2, { maximum: 3 }],
    'react/no-set-state': [0],
    'react/jsx-sort-props': [1],
    'react/require-optimization': [1],
    'react/jsx-no-bind': [1, { allowArrowFunctions: true }],
    'react/require-default-props': [0],
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'import/no-named-as-default-member': [0],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'flow',
        semi: false
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  env: { es6: true }
}
