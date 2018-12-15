module.exports = {
  root: true,
  plugins:[
    'node'
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended'
  ],
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  rules: {
    'semi': 2,
    'no-var': 2,
    'eol-last': 2,
    'spaced-comment': 2,
    'space-infix-ops': 2,
    'newline-before-return': 2,
    'node/no-unpublished-require': 0,
    'node/exports-style': ['error', 'module.exports'],
    'quotes': [2, 'single', {'allowTemplateLiterals': true}]
  }
};
