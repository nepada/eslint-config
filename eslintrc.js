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
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
    },
};
