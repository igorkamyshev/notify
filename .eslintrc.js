module.exports = {
    extends: [
        'eslint:recommended',
    ],
    env: {
        node: true,
        commonjs: true,
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
    },
}
