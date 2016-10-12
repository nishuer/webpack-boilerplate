module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    {{#if_eq preset "Airbnb"}}
    extends: 'airbnb-base',
    {{/if_eq}}
    plugins: [
        'html',
        'import'
    ],
    // Custom rules
    rules: {
        'import/imports-first': 0
    },
    settings: {
        'import/core-modules': [
            {{#iconfont}}
            'font-awesome-webpack'
            {{/iconfont}}
        ]
    }
}