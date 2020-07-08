module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/all',
        'standard',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-unused-vars': 'warn',
        'prettier/prettier': 'error',
        'jest/no-hooks': 'off',
        'jest/prefer-expect-assertions': 'off',
        'jest/no-standalone-expect': 'off',
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 'off',
        'jest/expect-expect': [
            'warn',
            {
                assertFunctionNames: ['expect', 'request.*.expect'],
            },
        ],
        'jest/lowercase-name': 'off',
        '@typescript-eslint/camelcase': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        camelcase: 'warn',
        'no-case-declarations': 'warn',
    },
};
