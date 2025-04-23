import globals from 'globals';
import security from 'eslint-plugin-security';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [{
  languageOptions: {
    globals: globals.node,
    parser: parser
  },
  plugins: {
    security: security,
    '@typescript-eslint': typescriptEslint
  },
  extends: [
    'plugin:security/recommended',
    'plugin:@typescript-eslint/recommended'
  ]
}];