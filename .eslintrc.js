'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: 'eslint:recommended',
  env: {
    'browser': true,
    'node': true,
  },
  parserOptions: {
    'ecmaVersion': 5,
    // "sourceType": "module",
  },
  rules: {
    'no-cond-assign': OFF,
    // 'indent': [ERROR, 2, {
    //   'ignoreComments': true,
    //   'SwitchCase': 1,
    //   'MemberExpression': 'off'
    // }],
    // 'no-bitwise': OFF,
    // 'no-confusing-arrow': ['error', { 'allowParens': true }],
    // 'no-console': OFF,
    // 'no-multiple-empty-lines': [ERROR, { 'max': 3 }],
    // 'no-negated-condition': OFF,
    // 'no-template-curly-in-string': OFF,
    // 'no-unneeded-ternary': WARNING,
    // 'no-use-before-define': [ERROR, 'nofunc'],
    // 'no-var': OFF,
    // 'object-shorthand': [OFF, 'properties'],
    // 'prefer-arrow-callback': OFF,
    // 'prefer-const': OFF,
    // 'prefer-template': OFF,
  }
};
