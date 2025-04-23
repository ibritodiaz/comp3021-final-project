const globals = require('globals');
const security = require('eslint-plugin-security');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');

module.exports = [{
  languageOptions: {
    globals: globals.node,
    parser: parser
  },
  plugins: {
    security: security,
    '@typescript-eslint': typescriptEslint
  },
  rules: {
    ...security.configs.recommended.rules,
    ...typescriptEslint.configs.recommended.rules,
    '@typescript-eslint/no-require-imports': 'off'
  }
}];