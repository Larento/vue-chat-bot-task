/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/base',
        'plugin:vuetify/base',
    ],
    ignorePatterns: ['dist'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['**/*.cjs', '*.config.js'],
            env: {
                node: true,
            },
        },
    ],
};
