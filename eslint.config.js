import globals from 'globals';
import config from './index.js';


const languageOptions = {
    globals: {
        ...globals.node,
    },
};

export default [
    ...config.default,
    {
        languageOptions,
    },
];
