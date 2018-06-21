module.exports = {
    extends: [
        'eslint:recommended',
    ],
    parser: 'babel-eslint',
    env: {
        'browser': true,
    },
    rules: {
        'indent':               [ 'error', 4 ],
        'linebreak-style':      [ 'error', 'unix' ],
        'quotes':               [ 'error', 'single' ],
        'semi':                 [ 'error', 'never' ],
        'comma-dangle':         [ 'error', 'always-multiline' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'eol-last':             [ 'error', 'always' ],
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
    },
}
