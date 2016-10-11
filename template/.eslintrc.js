module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    {{#if_eq preset "Airbnb"}}
    extends: 'airbnb-base',
    {{/if_eq}}
    plugins: [
        'html'
    ],
    // Custom rules
    'rules': {}
}