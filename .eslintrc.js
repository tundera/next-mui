module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        'cypress/globals': true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/all',
        'standard',
        'prettier',
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
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
    plugins: ['cypress', 'react', '@typescript-eslint', 'chai-friendly'],
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
        // v3 of eslint tooling support issue
        '@typescript-eslint/camelcase': 'off', // 'warn' in v3 of tooling
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        camelcase: 'off', // 'warn' in v3 of tooling
        'no-case-declarations': 'warn',
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-force': 'warn',
        'cypress/no-async-tests': 'error',
        'no-unused-expressions': 0,
        'chai-friendly/no-unused-expressions': 2,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
