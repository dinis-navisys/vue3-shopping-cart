module.exports = {
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
        '@vue/typescript/recommended',
    ],
    ignorePatterns: ['!**/*'],
    rules: {
        'comma-dangle': [ 'warn', 'only-multiline' ],
        semi: ["warn", "always"],
        'unicorn/filename-case': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/multi-word-component-names': 'warn',
        'vue/no-unused-components': 'warn',
        'vue/no-template-shadow': 'off',
        'vue/match-component-file-name': ['warn', { extensions: ['vue'], shouldMatchCase: true }],
        'vue/require-name-property': 'warn',
        "vue/max-attributes-per-line": ["warn", {
            "singleline": {
              "max": 3
            },      
            "multiline": {
              "max": 1
            }
          }]
    },
    env: {
        node: true,
    },
    overrides: [
        {
            files: ['**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
        {
            files: ['**/*.vue'],
            rules: {
                'linebreak-style': 'off',
                'prettier/prettier': 'off',
                'vue/html-indent': ['warn', 4, {
                    attribute: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: [],
                }],

                'vue/html-closing-bracket-newline': ['warn', {
                    singleline: 'never',
                    multiline: 'always',
                }],
            },
        },
    ],
};
