module.exports = {
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:security/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'security',
    '@typescript-eslint'
  ]
};