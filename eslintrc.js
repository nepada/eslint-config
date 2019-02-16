module.exports = {
    'env': {
        'es6': true,
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'plugins': [
        'import',
    ],
    'extends': [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    'rules': {
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': 'error',
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': ['error', 'always'],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs'],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-return': 'error',
        'curly': ['error', 'all'],
        'dot-location': ['error', 'property'],
        'eol-last': 'error',
        'eqeqeq': 'error',
        'func-call-spacing': 'error',
        'function-paren-newline': ['error', 'consistent'],
        'import/first': 'error',
        'indent': ['error', 4],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': 'error',
        'max-len': ['error', {'code': 160}],
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-caller': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-eval': 'error',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-proto': 'error',
        'no-return-assign': ['error', 'always'],
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-shadow-restricted-names': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'error',
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': 'error',
        'object-curly-spacing': 'error',
        'object-shorthand': 'error',
        'operator-linebreak': ['error', 'before'],
        'quotes': ['error', 'single', {'avoidEscape': true}],
        'radix': 'error',
        'require-unicode-regexp': 'error',
        'rest-spread-spacing': 'error',
        'semi': ['error', 'always'],
        'semi-spacing': 'error',
        'semi-style': 'error',
        'sort-imports': 'error',
        'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
        'space-in-parens': 'error',
        'space-unary-ops': 'error',
        'switch-colon-spacing': 'error',
        'unicode-bom': 'error',
        'yoda': ['error', 'never', {'onlyEquality': true}],
    },
};
